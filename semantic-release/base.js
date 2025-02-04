/** @type {import("semantic-release").Options} */
export const config = {
  branches: ["main", { name: "beta", prerelease: true }],
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
