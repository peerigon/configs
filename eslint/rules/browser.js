import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export const browser = [
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];

export default browser;
