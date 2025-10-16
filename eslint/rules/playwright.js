import pluginPlaywright from "eslint-plugin-playwright";
import { globPatterns } from "../lib/glob-patterns.js";

const files = globPatterns.tests;

/** @type {import("eslint").Linter.Config[]} */
export const playwright = [
  {
    ...pluginPlaywright.configs["flat/recommended"],
    files,
  },
];

export default playwright;
