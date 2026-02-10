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
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npx -y prettier --write CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
      },
    ],
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
