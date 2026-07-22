/**
 * ## Base config for Oxfmt.
 *
 * Best-effort mirror of our Prettier config. Uses Oxfmt's defaults (including
 * `printWidth: 100`), and on top of those also:
 *
 * - Auto-sorts `import` statements
 * - Formats JSDoc comments
 * - Sorts Tailwind CSS class names
 *
 * `package.json` sorting is enabled by Oxfmt by default (note: the algorithm
 * differs from `prettier-plugin-packagejson`).
 *
 * Unlike the Prettier config, Oxfmt has no equivalent for
 * `prettier-plugin-css-order`, so CSS properties are formatted but not sorted.
 * See [README.md](./README.md) and [GAPS.md](./GAPS.md) for the full list of
 * differences. Do not run Prettier and Oxfmt on the same codebase — pick one.
 *
 * @module oxfmtConfig
 */

/**
 * Provides the default Oxfmt configuration.
 *
 * @type {import("oxfmt").OxfmtConfig}
 */
export const config = {
  sortImports: true,
  sortTailwindcss: true,
  jsdoc: true,
  ignorePatterns: ["**/*.generated.*"],
};

/**
 * @type {import("oxfmt").OxfmtConfig}
 * @see {config}
 */
export default config;
