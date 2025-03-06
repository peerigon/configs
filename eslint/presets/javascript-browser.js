import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { browser } from "../rules/browser.js";
import { javascript } from "../rules/javascript.js";

/** @type {import("eslint").Linter.Config[]} */
export const javascriptBrowserPreset = [
  ...base,
  ...javascript,
  ...browser,
  eslintConfigPrettier,
];

export default javascriptBrowserPreset;
