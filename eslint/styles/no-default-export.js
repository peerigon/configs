import { globPatterns } from "../lib/glob-patterns.js";

/** @type {import("eslint").Linter.Config[]} */
export const noDefaultExport = [
  {
    ignores: [
      // Config files often have a single default export
      ...globPatterns.configs,
      // d.ts files often contain default exports
      ...globPatterns.typescriptAmbient,
    ],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message:
            "Please use named exports instead. Named exports ensure consistent naming and make it easier to auto-import symbols.",
        },
      ],
    },
  },
];

// Such irony... 🙃
export default noDefaultExport;
