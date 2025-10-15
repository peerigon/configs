import pluginQuery from "@tanstack/eslint-plugin-query";
import { globPatterns } from "../lib/glob-patterns.js";

const files = [
  globPatterns.javascript,
  globPatterns.typescript,
  globPatterns.jsx,
  globPatterns.typescriptJsx,
];

/** @type {import("eslint").Linter.Config[]} */
export const tanstackQuery = [
  { files },
  ...pluginQuery.configs["flat/recommended"],
];

export default tanstackQuery;
