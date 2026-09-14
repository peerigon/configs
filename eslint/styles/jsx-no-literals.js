import stylisticPlugin from "@stylistic/eslint-plugin";
import i18next from "eslint-plugin-i18next";

import { globPatterns } from "../lib/glob-patterns.js";

/** @type {import("eslint").Linter.Config[]} */
export const jsxNoLiterals = [
  {
    files: [globPatterns.jsx, globPatterns.typescriptJsx],
    plugins: {
      "@stylistic": stylisticPlugin,
      i18next,
    },
    rules: {
      // If we don't adjust this rule, it would autofix the escape hatch
      // {"some string"} allowed by "no-literal-string"
      "@stylistic/jsx-curly-brace-presence": [
        // https://eslint.style/rules/jsx-curly-brace-presence
        "warn",
        {
          children: "always",
          props: "never",
        },
      ],
      // https://github.com/edvardchen/eslint-plugin-i18next
      // mode: "jsx-text-only" only checks JSXText nodes, so the {"test"} escape hatch
      // above keeps working.
      "i18next/no-literal-string": ["warn", { mode: "jsx-text-only" }],
    },
  },
  {
    files: globPatterns.tests,
    // Registered again so this block also applies standalone to test files that don't
    // match the jsx/tsx block above (e.g. a plain *.test.ts file matching globPatterns.tests).
    plugins: {
      "@stylistic": stylisticPlugin,
      i18next,
    },
    rules: {
      // It's quite common in tests to use example strings
      "@stylistic/jsx-curly-brace-presence": ["warn", "never"],
      "i18next/no-literal-string": "off",
    },
  },
];

export default jsxNoLiterals;
