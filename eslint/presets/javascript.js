import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";

/** @type {import("eslint").Linter.Config[]} */
export const javascriptPreset = [...base, ...javascript, eslintConfigPrettier];

export default javascriptPreset;
