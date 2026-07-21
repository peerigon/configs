/**
 * Shared rule options for Oxlint configs.
 * id-match approximates @typescript-eslint/naming-convention (see GAPS.md).
 */
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
  /**
   * Approximates naming-convention formats:
   * camelCase | PascalCase | UPPER_CASE, optional leading `_`,
   * plus `__` / `UNSAFE_` escape hatches.
   * Does not enforce selector-specific formats (see GAPS.md).
   */
  "id-match": [
    "warn",
    "^(?:__|UNSAFE_)?[a-zA-Z][a-zA-Z0-9]*$|^[A-Z][A-Z0-9_]*$|^_[a-zA-Z][a-zA-Z0-9]*$",
    {
      ignoreDestructuring: true,
      properties: false,
      classFields: true,
      onlyDeclarations: false,
    },
  ],
};
