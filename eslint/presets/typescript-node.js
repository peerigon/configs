import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";
import { node } from "../rules/node.js";
import { typescript } from "../rules/typescript.js";

/** @type {import("eslint").Linter.Config[]} */
export const typescriptNodePreset = [
  ...base,
  ...javascript,
  ...typescript,
  ...node,
  eslintConfigPrettier,
];

export default typescriptNodePreset;
