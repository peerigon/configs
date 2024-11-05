/** @type {import("eslint").Linter.Config[]} */
export const noDefaultExport = [
  {
    // Config files often have a single default export
    ignores: ["*.config.js"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Prefer named exports",
        },
      ],
    },
  },
];

// Such irony... 🙃
export default noDefaultExport;
