/** Shared rule options for Oxlint configs. */
export const ruleOptions = {
  "no-unused-vars": {
    vars: "all",
    varsIgnorePattern: "^_",
    args: "after-used",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    reportUsedIgnorePattern: false,
    ignoreRestSiblings: true,
  },
  "no-unused-expressions": {
    allowShortCircuit: true,
    allowTernary: true,
  },
};
