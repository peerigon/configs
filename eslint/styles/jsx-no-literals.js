import { globPatterns } from "../lib/glob-patterns.js";

/** @type {import("eslint").Linter.Config[]} */
export const jsxNoLiterals = [
  {
    files: [globPatterns.jsx, globPatterns.typescriptJsx],
    rules: {
      // If we don't adjust this rule, it would autofix the escape hatch
      // {"some string"} allowed by "jsx-no-literals"
      "react/jsx-curly-brace-presence": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        "warn",
        {
          children: "always",
          props: "never",
        },
      ],
      "react/jsx-no-literals": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    },
  },
  {
    files: globPatterns.tests,
    rules: {
      // It's quite common in tests to use example strings
      "react/jsx-curly-brace-presence": ["warn", "never"],
      "react/jsx-no-literals": "off",
    },
  },
];

export default jsxNoLiterals;
