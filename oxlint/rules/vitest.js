import { globPatterns } from "../lib/glob-patterns.js";

/**
 * Vitest rule pack.
 * When extending this pack, add `"vitest"` to your root `plugins` array
 * (setting `plugins` replaces Oxlint defaults — include eslint/unicorn/etc.).
 * Do not set `plugins` on the override — Oxlint replaces (does not merge)
 * the plugin set for matched files.
 */
export const vitest = {
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  env: {
    vitest: true,
  },
  overrides: [
    {
      files: globPatterns.tests,
      rules: {
        "vitest/max-nested-describe": ["warn", { max: 4 }],
        "vitest/no-commented-out-tests": "warn",
        "vitest/no-conditional-expect": "warn",
        "vitest/no-duplicate-hooks": "warn",
        "vitest/no-focused-tests": "warn",
        "vitest/no-interpolation-in-snapshots": "warn",
        "vitest/no-standalone-expect": "warn",
        "vitest/no-test-return-statement": "warn",
        "vitest/prefer-each": "warn",
        "vitest/prefer-equality-matcher": "warn",
        "vitest/prefer-hooks-in-order": "warn",
        "vitest/prefer-hooks-on-top": "warn",
        "vitest/prefer-mock-promise-shorthand": "warn",
        "vitest/prefer-spy-on": "warn",
        "vitest/prefer-todo": "warn",
        // Native gap: vitest/prefer-vi-mocked — see GAPS.md
        // Disable generic no-only-tests rule in favor of Vitest specific one
        "no-only-tests/no-only-tests": "off",
      },
    },
  ],
};

export default vitest;
