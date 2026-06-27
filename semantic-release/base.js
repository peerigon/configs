/**
 * Generic semantic-release config shape for portable declaration output.
 *
 * We intentionally avoid `import("semantic-release")` JSDoc types here, because
 * those generate declaration symbols that break JSR's API symbol parser.
 *
 * @typedef {Record<string, unknown> & {
 *   branches?: Record<string, unknown>[];
 *   plugins?: unknown[];
 * }} SemanticReleaseConfig
 */

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const requireFromHere = createRequire(import.meta.url);

/**
 * Resolves a package's bin script from this package's dependency tree so
 * release checks run the installed copy and never trigger an npx download.
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

const publintBin = resolveBin("publint");
const attwBin = resolveBin("@arethetypeswrong/cli", "attw");

/** @type {SemanticReleaseConfig} */
export const config = {
  branches: [
    {
      name: "main",
      channel: "latest",
    },
    { name: "beta", prerelease: true },
  ],
  plugins: [
    // We used to commit CHANGELOG.md, but that adds significant complexity for
    // projects with branch protection rules.
    // To avoid stale release artifacts in git, we no longer update/commit it.
    // Consumers can bypass this by setting SEMANTIC_RELEASE_ALLOW_CHANGELOG=true.
    [
      "@semantic-release/exec",
      {
        verifyConditionsCmd:
          "node -e \"const fs=require('node:fs'); if (process.env.SEMANTIC_RELEASE_ALLOW_CHANGELOG === 'true') process.exit(0); if (fs.existsSync('CHANGELOG.md')) { console.error('Release aborted: CHANGELOG.md is present. Remove it or set SEMANTIC_RELEASE_ALLOW_CHANGELOG=true to bypass this check.'); process.exit(1); }\"" +
          ` && node "${publintBin}" && node "${attwBin}" --pack . --ignore-rules no-resolution cjs-resolves-to-esm`,
      },
    ],
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        tarballDir: ".semantic-release",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ".semantic-release/*.tgz",
      },
    ],
  ],
};

export default config;
