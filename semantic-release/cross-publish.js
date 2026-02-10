import { config as baseConfig } from "./base.js";

/**
 * Generic semantic-release config shape for portable declaration output.
 *
 * @typedef {Record<string, unknown> & {
 *   branches?: Record<string, unknown>[];
 *   plugins?: unknown[];
 * }} SemanticReleaseConfig
 */

/**
 * @param {{ github: boolean; jsr: boolean }} options?
 * @returns {SemanticReleaseConfig}
 */
export function config(
  { github = false, jsr = false } = { github: true, jsr: true },
) {
  /** @type {unknown[]} */
  const plugins = [];

  if (baseConfig.plugins) {
    plugins.push(...baseConfig.plugins);
  }

  if (github) {
    plugins.push([
      "@semantic-release/exec",
      {
        verifyConditionsCmd:
          // eslint-disable-next-line no-template-curly-in-string
          'echo "registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}" > /tmp/github.npmrc && npm whoami --userconfig /tmp/github.npmrc',
        publishCmd:
          // eslint-disable-next-line no-template-curly-in-string
          "npm publish --userconfig /tmp/github.npmrc --tag ${nextRelease.channel} --no-git-tag-version",
        successCmd: "rm /tmp/github.npmrc",
        failCmd: "rm /tmp/github.npmrc",
      },
    ]);
  }

  if (jsr) {
    plugins.push("@sebbo2002/semantic-release-jsr");
  }

  return {
    ...baseConfig,
    plugins,
  };
}

export default config();
