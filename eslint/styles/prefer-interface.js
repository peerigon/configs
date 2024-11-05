/** @type {import("eslint").Linter.Config[]} */
export const preferInterface = [
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["warn", "interface"], // https://typescript-eslint.io/rules/consistent-type-definitions
    },
  },
];

export default preferInterface;
