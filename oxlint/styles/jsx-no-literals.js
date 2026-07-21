import { globPatterns } from "../lib/glob-patterns.js";

/** Disallow string literals in JSX (i18n-friendly). */
export const jsxNoLiterals = {
  overrides: [
    {
      files: [...globPatterns.jsx, ...globPatterns.typescriptJsx],
      rules: {
        // If we don't adjust this rule, it would autofix the escape hatch
        // {"some string"} allowed by "jsx-no-literals"
        "react/jsx-curly-brace-presence": [
          // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence
          "warn",
          {
            children: "always",
            props: "never",
          },
        ],
        "react/jsx-no-literals": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-literals
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
  ],
};

export default jsxNoLiterals;
