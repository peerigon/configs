/** Plugin lists for presets (setting `plugins` replaces Oxlint defaults). */

export const javascriptPlugins = ["eslint", "unicorn", "oxc"];

export const typescriptPlugins = [...javascriptPlugins, "typescript"];

export const typescriptReactPlugins = [
  ...typescriptPlugins,
  "react",
  "jsx-a11y",
];

/** JS plugins used across packs (alpha; see GAPS.md). */
export const eslintJsPlugin = {
  name: "eslint-js",
  specifier: "oxlint-plugin-eslint",
};
