import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { javascript } from "../rules/javascript.js";
import { node } from "../rules/node.js";

export default [...base, ...javascript, ...node, eslintConfigPrettier];
