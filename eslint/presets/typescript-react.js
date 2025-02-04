import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { browser } from "../rules/browser.js";
import { javascript } from "../rules/javascript.js";
import { react } from "../rules/react.js";
import { typescript } from "../rules/typescript.js";

export default [
  ...base,
  ...javascript,
  ...typescript,
  ...react,
  ...browser,
  eslintConfigPrettier,
];
