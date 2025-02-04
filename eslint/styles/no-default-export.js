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
          message:
            "Please use named exports instead. Named exports ensure consistent naming and make it easier to auto-import symbols.",
        },
      ],
    },
  },
];

// Such irony... 🙃
export default noDefaultExport;
