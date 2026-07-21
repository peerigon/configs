import { globPatterns } from "../lib/glob-patterns.js";

/**
 * Playwright via JS plugin (no native Oxlint playwright plugin).
 */
export const playwright = {
  jsPlugins: ["eslint-plugin-playwright"],
  overrides: [
    {
      files: globPatterns.tests,
      // flat/recommended equivalent — enable core recommended rules
      rules: {
        "playwright/no-focused-test": "error",
        "playwright/no-skipped-test": "warn",
        "playwright/valid-expect": "error",
        "playwright/no-page-pause": "warn",
        "playwright/no-element-handle": "warn",
        "playwright/no-eval": "warn",
        "playwright/no-networkidle": "warn",
        "playwright/no-wait-for-timeout": "warn",
        "playwright/prefer-web-first-assertions": "warn",
      },
    },
  ],
};

export default playwright;
