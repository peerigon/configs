import { config as baseConfig } from "./base.js";

/** @type {import("semantic-release").Options} */
export const config = {
  ...baseConfig,
  plugins: [
    ...(baseConfig.plugins ?? []),
    [
      "@semantic-release/exec",
      {
        verifyConditionsCmd:
          'echo "registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}" > /tmp/github.npmrc && npm whoami --userconfig /tmp/github.npmrc',
        publishCmd:
          "npm publish --userconfig /tmp/github.npmrc --tag ${nextRelease.channel} --no-git-tag-version",
        successCmd: "rm /tmp/github.npmrc",
        failCmd: "rm /tmp/github.npmrc",
      },
    ],
  ],
};

export default config;
