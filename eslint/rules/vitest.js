import vitestPlugin from "@vitest/eslint-plugin";
import { globPatterns } from "../lib/glob-patterns.js";

const files = globPatterns.tests;

/** @type {import("eslint").Linter.Config[]} */
export const vitest = [
  {
    files,
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
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
      "vitest/prefer-vi-mocked": "warn",
      // Disable generic no-only-tests rule in favor of Vitest specific one
      "no-only-tests/no-only-tests": "off",
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
    },
  },
];

export default vitest;
