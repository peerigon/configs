/**
 * @param {string} id
 * @returns {string}
 */
const safeResolve = (id) => {
  return "resolve" in import.meta
    ? import.meta.resolve(id).slice("file://".length)
    : id;
};

// Using safeResolve() here because the plugins might not be installed in the parent app/module
// and we don't want to rely on the package manager to hoist the dependencies.
const plugins = await Promise.all([
  safeResolve("@ianvs/prettier-plugin-sort-imports"),
  safeResolve("prettier-plugin-jsdoc"),
  safeResolve("prettier-plugin-packagejson"),
  safeResolve("prettier-plugin-css-order"),
  safeResolve("prettier-plugin-tailwindcss"),
]);

/** @type {import("prettier").Config} */
export const config = {
  plugins,
  importOrderParserPlugins: [
    "typescript",
    "jsx",
    "decorators",
    "importAttributes",
  ],
  importOrderTypeScriptVersion: "5.0.0",
};

export default config;
