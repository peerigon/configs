import { readFileSync } from "node:fs";
import { resolve } from "node:path";
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
  { github = defaultGithub, jsr = false } = {
    github: defaultGithub,
    jsr: true,
  },
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

const defaultGithub = (() => {
  try {
    const packageJsonPath = resolve(process.cwd(), "package.json");
    const packageJsonContent = readFileSync(packageJsonPath, "utf8");
    const packageJson = JSON.parse(packageJsonContent);
    if (typeof packageJson !== "object" || packageJson === null) {
      return false;
    }

    const typedPackageJson = /** @type {{ name?: unknown }} */ (packageJson);
    const name = typedPackageJson.name;

    return typeof name === "string" && name.startsWith("@");
  } catch {
    return false;
  }
})();

export default config();
