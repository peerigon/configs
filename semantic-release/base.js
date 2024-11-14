export default {
  branches: ["main", { name: "beta", prerelease: true }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
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
    [
      "@semantic-release/exec",
      {
        verifyConditionsCmd:
          'echo "registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}" > /tmp/github.npmrc && npm whoami --userconfig /tmp/github.npmrc',
        prepareCmd: "npx -y prettier --write CHANGELOG.md",
        publishCmd:
          "npm publish --userconfig /tmp/github.npmrc --tag ${nextRelease.channel} --no-git-tag-version",
        successCmd: "rm /tmp/github.npmrc",
        failCmd: "rm /tmp/github.npmrc",
      },
    ],
  ],
};
