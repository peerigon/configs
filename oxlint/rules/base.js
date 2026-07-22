/** Base Oxlint options shared by all presets. .gitignore is respected by Oxlint automatically. */
export const base = {
  ignorePatterns: ["**/*.generated.*"],
  options: {
    reportUnusedDisableDirectives: "warn",
  },
  // Align with package philosophy: mostly warn, not hard-error-by-default.
  categories: {
    correctness: "warn",
    suspicious: "warn",
    pedantic: "off",
    style: "off",
    nursery: "off",
    restriction: "off",
    perf: "off",
  },
};

export default base;
