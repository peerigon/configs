import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export const node = [
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];

export default node;
