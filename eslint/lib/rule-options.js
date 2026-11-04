export const ruleOptions = {
  "max-lines": {
    max: 700,
    skipBlankLines: true,
    skipComments: true,
  },
  "no-unused-expressions": {
    allowShortCircuit: true,
    allowTernary: true,
  },
  "no-unused-vars": {
    vars: "all",
    varsIgnorePattern: "^_",
    args: "after-used",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    reportUsedIgnorePattern: false,
    // This pattern is pretty common
    ignoreRestSiblings: true,
  },
};
