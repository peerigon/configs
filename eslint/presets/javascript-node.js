import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";
import { node } from "../rules/node.js";

/** @type {import("eslint").Linter.Config[]} */
export const javascriptNodePreset = [
  ...base,
  ...javascript,
  ...node,
  eslintConfigPrettier,
];

export default javascriptNodePreset;
