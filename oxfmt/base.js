/**
 * ## Base config for Oxfmt.
 *
 * Uses Oxfmt's defaults (including `printWidth: 100`), and on top of those also:
 *
 * - Auto-sorts `import` statements
 * - Formats JSDoc comments
 * - Sorts Tailwind CSS class names
 *
 * `package.json` sorting is enabled by Oxfmt by default.
 *
 * CSS properties are formatted but not sorted. See [README.md](./README.md) for known limitations.
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
