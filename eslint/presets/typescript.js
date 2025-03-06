import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";
import { typescript } from "../rules/typescript.js";

/** @type {import("eslint").Linter.Config[]} */
export const typescriptPreset = [
  ...base,
  ...javascript,
  ...typescript,
  eslintConfigPrettier,
];

export default typescriptPreset;
