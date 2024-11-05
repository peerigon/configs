import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";

export default [...base, ...javascript, eslintConfigPrettier];
