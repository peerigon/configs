import eslintConfigPrettier from "eslint-config-prettier";
import { base } from "../rules/base.js";
import { browser } from "../rules/browser.js";
import { javascript } from "../rules/javascript.js";

export default [...base, ...javascript, ...browser, eslintConfigPrettier];
