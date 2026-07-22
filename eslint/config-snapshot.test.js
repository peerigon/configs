import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { ESLint } from "eslint";

import javascriptBrowserPreset from "./presets/javascript-browser.js";
import javascriptNodePreset from "./presets/javascript-node.js";
import javascriptPreset from "./presets/javascript.js";
import typescriptNodePreset from "./presets/typescript-node.js";
import typescriptReactPreset from "./presets/typescript-react.js";
import typescriptPreset from "./presets/typescript.js";

const updateSnapshots = process.argv.includes("--update");
const snapshotsDirectory = join(import.meta.dirname, "__snapshots__");

/**
 * @type {ReadonlyArray<{
 *   name: string;
 *   preset: import("eslint").Linter.Config[];
 *   files: readonly string[];
 * }>}
 */
const presetMatrix = [
  {
    name: "javascript",
    preset: javascriptPreset,
    files: ["main.js", "main.test.js"],
  },
  {
    name: "javascript-browser",
    preset: javascriptBrowserPreset,
    files: ["main.js", "main.test.js"],
  },
  {
    name: "javascript-node",
    preset: javascriptNodePreset,
    files: ["main.js", "main.test.js"],
  },
  {
    name: "typescript",
    preset: typescriptPreset,
    files: ["main.ts", "main.d.ts", "main.test.ts"],
  },
  {
    name: "typescript-node",
    preset: typescriptNodePreset,
    files: ["main.ts", "main.d.ts", "main.test.ts"],
  },
  {
    name: "typescript-react",
    preset: typescriptReactPreset,
    files: ["main.tsx", "main.ts", "main.test.tsx"],
  },
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
function normalizeForSnapshot(value) {
  return snapshotParse(snapshotStringify(value));
}

/** @param {unknown} value */
function snapshotStringify(value) {
  return `${JSON.stringify(
    value,
    (_key, currentValue) => {
      if (currentValue === Infinity) {
        return "__Infinity__";
      }

      if (currentValue === -Infinity) {
        return "__NegativeInfinity__";
      }

      return currentValue;
    },
    2,
  )}\n`;
}

/** @param {string} text */
function snapshotParse(text) {
  return JSON.parse(text, (_key, currentValue) => {
    if (currentValue === "__Infinity__") {
      return Infinity;
    }

    if (currentValue === "__NegativeInfinity__") {
      return -Infinity;
    }

    return currentValue;
  });
}

/** @param {string} snapshotPath @param {string} presetName */
async function readSnapshot(snapshotPath, presetName) {
  try {
    return await readFile(snapshotPath, "utf8");
  } catch (error) {
    if (error instanceof Error && /** @type {NodeJS.ErrnoException} */ (error).code === "ENOENT") {
      throw new Error(
        `Missing snapshot for preset "${presetName}" at ${snapshotPath}; run npm run test:snapshot:update to create it`,
        { cause: error },
      );
    }

    throw error;
  }
}

/** @param {import("eslint").ESLint} eslint @param {string} filePath */
async function resolveRules(eslint, filePath) {
  const { rules } = await eslint.calculateConfigForFile(filePath);
  return normalizeForSnapshot(sortRules(rules));
}

/**
 * @param {string} presetName @param {import("eslint").Linter.Config[]} preset @param {readonly
 *   string[]} files
 */
async function snapshotPreset(presetName, preset, files) {
  // One ESLint instance per preset is enough; reuse it for every file so the
  // plugin/config loading only happens once per preset.
  const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: preset,
  });

  /** @type {Record<string, Record<string, unknown>>} */
  const snapshot = {};

  for (const filePath of files) {
    snapshot[filePath] = await resolveRules(eslint, filePath);
  }

  const snapshotPath = join(snapshotsDirectory, `${presetName}.json`);

  if (updateSnapshots) {
    await mkdir(snapshotsDirectory, { recursive: true });
    await writeFile(snapshotPath, snapshotStringify(snapshot));
    console.log(`updated ${snapshotPath}`);
    return;
  }

  const expected = snapshotParse(await readSnapshot(snapshotPath, presetName));

  for (const filePath of files) {
    assert.deepEqual(
      snapshot[filePath],
      expected[filePath],
      `${presetName} rules for ${filePath} differ from snapshot; run npm run test:snapshot:update and review the diff`,
    );
  }
}

for (const { name, preset, files } of presetMatrix) {
  await snapshotPreset(name, preset, files);
}

if (updateSnapshots) {
  console.log("Snapshots updated.");
} else {
  console.log("ESLint config snapshots match.");
}
