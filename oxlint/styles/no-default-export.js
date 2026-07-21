import { globPatterns } from "../lib/glob-patterns.js";
import { eslintJsPlugin } from "../lib/plugins.js";

/**
 * Ban default exports (via eslint-js/no-restricted-syntax).
 * Ignores config files and ambient declarations.
 */
export const noDefaultExport = {
  jsPlugins: [eslintJsPlugin],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,cts,mts,jsx,tsx}"],
      excludeFiles: [
        // Config files often have a single default export
        ...globPatterns.configs,
        // d.ts files often contain default exports
        ...globPatterns.typescriptAmbient,
      ],
      rules: {
        "eslint-js/no-restricted-syntax": [
          "error",
          {
            selector: "ExportDefaultDeclaration",
            message:
              "Please use named exports instead. Named exports ensure consistent naming and make it easier to auto-import symbols.",
          },
        ],
      },
    },
  ],
};

// Such irony... 🙃
export default noDefaultExport;
