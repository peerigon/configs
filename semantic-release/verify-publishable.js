#!/usr/bin/env node

/**
 * @file Verifies that the package in the current working directory is correctly
 *   configured for publishing.
 *
 *   It runs `publint` (validates `package.json` entries, `exports`, `files`,
 *   etc.) and `@arethetypeswrong/cli` (validates that exports resolve to correct
 *   type declarations). Both tools are resolved from this package's own
 *   dependency tree and executed via `node`, so consumers never trigger an
 *   `npx` download and always run the pinned, installed versions.
 *
 *   This is used by the semantic-release `verifyConditionsCmd` and is also
 *   exposed as the `peerigon-verify-publishable` bin so consumers can run the
 *   exact same check as part of their own test suite.
 */
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const requireFromHere = createRequire(import.meta.url);

/**
 * Resolves a package's bin script from this package's dependency tree so the
 * checks run the installed copy and never trigger an npx download.
 *
 * @param {string} pkg
 * @param {string} [binName]
 * @returns {string}
 */
function resolveBin(pkg, binName = pkg) {
  for (const base of requireFromHere.resolve.paths(pkg) ?? []) {
    const pkgJsonPath = join(base, pkg, "package.json");
    try {
      const { bin } = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
      return join(
        dirname(pkgJsonPath),
        typeof bin === "string" ? bin : bin[binName],
      );
    } catch {
      // not in this node_modules dir, try the next candidate
    }
  }
  throw new Error(`Cannot resolve bin for "${pkg}"`);
}

/**
 * Runs a check via `node` and aborts the process if it fails.
 *
 * @param {[bin: string, ...args: string[]]} command
 */
function runCheck([bin, ...args]) {
  const { status } = spawnSync(process.execPath, [bin, ...args], {
    stdio: "inherit",
  });

  if (status !== 0) {
    process.exit(status ?? 1);
  }
}

runCheck([resolveBin("publint")]);
runCheck([
  resolveBin("@arethetypeswrong/cli", "attw"),
  "--pack",
  ".",
  // node10 resolution and cjs-resolves-to-esm are expected for an ESM-only,
  // modern-Node package, so they are ignored to avoid false positives.
  "--ignore-rules",
  "no-resolution",
  "cjs-resolves-to-esm",
]);
