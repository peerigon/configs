import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";
import { typescript } from "../rules/typescript.js";

export default [...base, ...javascript, ...typescript, eslintConfigPrettier];
