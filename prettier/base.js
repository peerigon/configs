/**
 * ## Base config for Prettier.
 *
 * Our base config is entirely based on Prettier's default config. Besides that,
 * it also:
 *
 * - Auto-sorts `import` statements
 * - Formats JSDoc comments
 * - Formats `package.json`
 * - Formats and sorts CSS properties
 * - Sorts Tailwind CSS class names
 *
 * @module prettierConfig
 */

/**
 * @param {string} id
 * @returns {string}
 */
function safeResolve(id) {
  return "resolve" in import.meta
    ? import.meta.resolve(id).slice("file://".length)
    : id;
}

// Using safeResolve() here because the plugins might not be installed in the parent app/module
// and we don't want to rely on the package manager to hoist the dependencies.
const plugins = await Promise.all([
  safeResolve("@ianvs/prettier-plugin-sort-imports"),
  safeResolve("prettier-plugin-jsdoc"),
  safeResolve("prettier-plugin-packagejson"),
  safeResolve("prettier-plugin-css-order"),
  safeResolve("prettier-plugin-tailwindcss"),
]);

/**
 * Provides the default configuration for Prettier with customized plugins and
 * sorting rules.
 *
 * @type {import("prettier").Config}
 */
export const config = {
  plugins,
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "decorators",
    "importAttributes",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  cssDeclarationSorterOrder: "smacss",
  cssDeclarationSorterKeepOverrides: false,
};

/**
 * @type {import("prettier").Config}
 * @see {config}
 */
export default config;
