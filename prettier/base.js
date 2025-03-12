/**
 * ## Installation
 *
 * ```sh
 * npm install prettier @peerigon/configs --save-dev
 * ```
 *
 * Then create a `prettier.config.js` next to your `package.json`:
 *
 * ```js
 * export { default } from "@peerigon/configs/prettier";
 * ```
 *
 * Recommended configuration in your `package.json` (using
 * [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)):
 *
 * ```json
 * {
 *   "type": "module",
 *   "scripts": {
 *     "test": "run-p test:*",
 *     "test:format": "prettier --check ."
 *   }
 * }
 * ```
 *
 * ## Configuration
 *
 * Our config is entirely based on Prettier's default config. Besides that, it
 * also:
 *
 * - Auto-sorts `import` statements
 * - Formats JSDoc comments
 * - Formats `package.json`
 * - Formats and sorts CSS properties
 * - Sorts Tailwind CSS class names
 *
 * @module prettier
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
 * Base config for Prettier.
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

export default config;
