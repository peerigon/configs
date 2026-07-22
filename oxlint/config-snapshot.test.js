import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { promisify } from "node:util";

import picomatch from "picomatch";

import { javascriptBrowserPreset } from "./presets/javascript-browser.js";
import { javascriptNodePreset } from "./presets/javascript-node.js";
import { javascriptPreset } from "./presets/javascript.js";
import { typescriptNodePreset } from "./presets/typescript-node.js";
import { typescriptReactPreset } from "./presets/typescript-react.js";
import { typescriptPreset } from "./presets/typescript.js";

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);
const oxlintBin = join(dirname(require.resolve("oxlint/package.json")), "bin/oxlint");
const oxfmtBin = join(dirname(require.resolve("oxfmt/package.json")), "bin/oxfmt");

const updateSnapshots = process.argv.includes("--update");
const snapshotsDirectory = join(import.meta.dirname, "__snapshots__");
const packageRoot = join(import.meta.dirname, "..");

/** @type {ReadonlyArray<{ name: string; presetPath: string; files: readonly string[] }>} */
const presetMatrix = [
  {
    name: "javascript",
    presetPath: join(import.meta.dirname, "presets/javascript.js"),
    files: ["main.js", "main.test.js"],
  },
  {
    name: "javascript-browser",
    presetPath: join(import.meta.dirname, "presets/javascript-browser.js"),
    files: ["main.js", "main.test.js"],
  },
  {
    name: "javascript-node",
    presetPath: join(import.meta.dirname, "presets/javascript-node.js"),
    files: ["main.js", "main.test.js"],
  },
  {
    name: "typescript",
    presetPath: join(import.meta.dirname, "presets/typescript.js"),
    files: ["main.ts", "main.d.ts", "main.test.ts"],
  },
  {
    name: "typescript-node",
    presetPath: join(import.meta.dirname, "presets/typescript-node.js"),
    files: ["main.ts", "main.d.ts", "main.test.ts"],
  },
  {
    name: "typescript-react",
    presetPath: join(import.meta.dirname, "presets/typescript-react.js"),
    files: ["main.tsx", "main.ts", "main.test.tsx"],
  },
];

// Touch presets so import-side effects / load failures surface early.
void [
  javascriptPreset,
  javascriptBrowserPreset,
  javascriptNodePreset,
  typescriptPreset,
  typescriptNodePreset,
  typescriptReactPreset,
];

/** @param {Record<string, unknown> | undefined} rules */
function sortRules(rules) {
  return Object.fromEntries(
    Object.entries(rules ?? {}).toSorted(
      (/** @type {[string, unknown]} */ [left], /** @type {[string, unknown]} */ [right]) =>
        left.localeCompare(right),
    ),
  );
}

/** @param {unknown} value */
function snapshotStringify(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

/** @param {string} text */
function snapshotParse(text) {
  return JSON.parse(text);
}

/** @param {string} snapshotPath @param {string} presetName */
async function readSnapshot(snapshotPath, presetName) {
  try {
    return await readFile(snapshotPath, "utf8");
  } catch (error) {
    if (error instanceof Error && /** @type {NodeJS.ErrnoException} */ (error).code === "ENOENT") {
      throw new Error(
        `Missing snapshot for preset "${presetName}" at ${snapshotPath}; run npm run test:oxlint:snapshot:update to create it`,
        { cause: error },
      );
    }

    throw error;
  }
}

/**
 * @param {string | string[] | undefined} globs
 * @param {string} filePath
 */
function matchesGlobs(globs, filePath) {
  if (globs === undefined) {
    return true;
  }

  const list = Array.isArray(globs) ? globs : [globs];
  return list.some((glob) => picomatch(glob)(filePath));
}

/**
 * Oxlint `--print-config` dumps the root config (with overrides still separate). Apply matching
 * overrides to approximate per-file resolution like ESLint.
 *
 * @param {{
 *   rules?: Record<string, unknown>;
 *   overrides?: {
 *     files?: string | string[];
 *     excludeFiles?: string | string[];
 *     rules?: Record<string, unknown>;
 *   }[];
 * }} printed
 * @param {string} filePath
 */
function resolveRulesForFile(printed, filePath) {
  /** @type {Record<string, unknown>} */
  const rules = { ...printed.rules };

  for (const override of printed.overrides ?? []) {
    if (!matchesGlobs(override.files, filePath)) {
      continue;
    }

    if (override.excludeFiles !== undefined && matchesGlobs(override.excludeFiles, filePath)) {
      continue;
    }

    if (override.rules) {
      Object.assign(rules, override.rules);
    }
  }

  return sortRules(rules);
}

/** @param {string} presetPath */
async function printOxlintConfig(presetPath) {
  const { stdout, stderr } = await execFileAsync(
    process.execPath,
    [oxlintBin, "-c", presetPath, "--print-config", "main.ts"],
    {
      cwd: packageRoot,
      maxBuffer: 20 * 1024 * 1024,
      env: { ...process.env, npm_config_loglevel: "silent" },
    },
  );

  if (stderr.trim()) {
    // Oxlint may write warnings to stderr; only fail on parse errors below.
    console.error(stderr.trim());
  }

  try {
    return /** @type {{ rules?: Record<string, unknown>; overrides?: Record<string, unknown>[] }} */ (
      JSON.parse(stdout)
    );
  } catch (error) {
    throw new Error(`Failed to parse oxlint --print-config output for ${presetPath}:\n${stdout}`, {
      cause: error,
    });
  }
}

/** @param {string} presetName @param {string} presetPath @param {readonly string[]} files */
async function snapshotPreset(presetName, presetPath, files) {
  const printed = await printOxlintConfig(presetPath);

  /** @type {Record<string, Record<string, unknown>>} */
  const snapshot = {};

  for (const filePath of files) {
    snapshot[filePath] = resolveRulesForFile(printed, filePath);
  }

  const snapshotPath = join(snapshotsDirectory, `${presetName}.json`);

  if (updateSnapshots) {
    await mkdir(snapshotsDirectory, { recursive: true });
    await writeFile(snapshotPath, snapshotStringify(snapshot));
    await execFileAsync(process.execPath, [oxfmtBin, "--write", snapshotPath], {
      cwd: packageRoot,
    });
    console.log(`updated ${snapshotPath}`);
    return;
  }

  const expected = snapshotParse(await readSnapshot(snapshotPath, presetName));

  for (const filePath of files) {
    assert.deepEqual(
      snapshot[filePath],
      expected[filePath],
      `${presetName} rules for ${filePath} differ from snapshot; run npm run test:oxlint:snapshot:update and review the diff`,
    );
  }
}

for (const { name, presetPath, files } of presetMatrix) {
  await snapshotPreset(name, presetPath, files);
}

if (updateSnapshots) {
  console.log("Oxlint config snapshots updated.");
} else {
  console.log("Oxlint config snapshots match.");
}
