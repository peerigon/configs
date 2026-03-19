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
          "node -e \"const fs=require('node:fs'); if (process.env.SEMANTIC_RELEASE_ALLOW_CHANGELOG === 'true') process.exit(0); if (fs.existsSync('CHANGELOG.md')) { console.error('Release aborted: CHANGELOG.md is present. Remove it or set SEMANTIC_RELEASE_ALLOW_CHANGELOG=true to bypass this check.'); process.exit(1); }\"",
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
