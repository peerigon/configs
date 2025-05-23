import js from "@eslint/js";
import noOnlyTests from "eslint-plugin-no-only-tests";
import unicornPlugin from "eslint-plugin-unicorn";
import { globPatterns } from "../lib/glob-patterns.js";
import { ruleOptions } from "../lib/rule-options.js";

/** @type {import("eslint").Linter.Config[]} */
export const javascript = [
  js.configs.recommended,
  unicornPlugin.configs["flat/recommended"],
  {
    rules: {
      // Turn of too opinionated rules
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/896
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/no-useless-undefined": "off",
      "unicorn/prefer-query-selector": "off",
      // Also turn off the following rules because they're too opinionated
      "unicorn/consistent-function-scoping": "off", // This rule forces to move arrow functions up the scope where it is often more readable to keep the function in the scope where it is used called.
      "unicorn/import-style": "off", // The default of import-style is highly subjective and not always the best choice. E.g. bundlers are able to tree-shake named imports easier than default imports.
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-object-as-default-parameter": "off", // This rule also complains about the object when we already use destructuring. E.g. it would complain about the following pattern which is perfectly fine: { github = false, jsr = false } = { github: true, jsr: true }
      "unicorn/no-single-promise-in-promise-methods": "off", // It makes sense to use Promise.all() with a single promise when we expect more to be added later. In that case we don't want to refactor the code, but just add the new promise.
      "unicorn/prefer-global-this": "off", // Too many false positives
      "unicorn/prefer-ternary": "off",
      "unicorn/require-array-join-separator": "off",
      "unicorn/prefer-import-meta-properties": "error",
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },
  {
    files: globPatterns.javascript,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  {
    rules: {
      // Possible Problems
      // ----------------------------------------------
      "array-callback-return": "warn", // https://eslint.org/docs/latest/rules/array-callback-return
      "no-await-in-loop": "warn", // https://eslint.org/docs/latest/rules/no-await-in-loop
      "no-constructor-return": "warn", // https://eslint.org/docs/latest/rules/no-constructor-return
      "no-duplicate-imports": "warn", // https://eslint.org/docs/latest/rules/no-duplicate-imports
      "no-promise-executor-return": "warn", // https://eslint.org/docs/latest/rules/no-promise-executor-return
      "no-self-compare": "warn", // https://eslint.org/docs/latest/rules/no-self-compare
      "no-template-curly-in-string": "warn", // https://eslint.org/docs/latest/rules/no-template-curly-in-string
      "no-unmodified-loop-condition": "warn", // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
      "no-unreachable-loop": "warn", // https://eslint.org/docs/latest/rules/no-unreachable-loop
      "no-useless-assignment": "warn", // https://eslint.org/docs/latest/rules/no-useless-assignment
      "require-atomic-updates": "warn", // https://eslint.org/docs/latest/rules/require-atomic-updates

      // Suggestions
      // ----------------------------------------------
      "accessor-pairs": "warn", // https://eslint.org/docs/latest/rules/accessor-pairs
      "block-scoped-var": "warn", // https://eslint.org/docs/latest/rules/block-scoped-var
      camelcase: ["warn", ruleOptions.camelcase], // https://eslint.org/docs/latest/rules/camelcase
      "consistent-return": "warn", // https://eslint.org/docs/latest/rules/consistent-return
      "dot-notation": "warn", // https://eslint.org/docs/latest/rules/dot-notation
      eqeqeq: ["warn", "always", { null: "ignore" }], // https://eslint.org/docs/latest/rules/eqeqeq
      "func-style": ["warn", "declaration"], // https://eslint.org/docs/latest/rules/func-style
      "grouped-accessor-pairs": ["warn", "setBeforeGet"], // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
      "max-depth": ["warn", 5], // https://eslint.org/docs/latest/rules/max-depth
      "max-nested-callbacks": ["warn", 3], // https://eslint.org/docs/latest/rules/max-nested-callbacks
      "max-params": ["warn", { max: 4 }], // https://eslint.org/docs/latest/rules/max-params
      "new-cap": "warn", // https://eslint.org/docs/latest/rules/new-cap
      "no-alert": "warn", // https://eslint.org/docs/latest/rules/no-alert
      "no-array-constructor": "warn", // https://eslint.org/docs/latest/rules/no-array-constructor
      "no-bitwise": "warn", // https://eslint.org/docs/latest/rules/no-bitwise
      "no-caller": "warn", // https://eslint.org/docs/latest/rules/no-caller
      "no-else-return": "warn", // https://eslint.org/docs/latest/rules/no-else-return
      "no-eval": "warn", // https://eslint.org/docs/latest/rules/no-eval
      "no-extend-native": "warn", // https://eslint.org/docs/latest/rules/no-extend-native
      "no-extra-bind": "warn", // https://eslint.org/docs/latest/rules/no-extra-bind
      "no-extra-label": "warn", // https://eslint.org/docs/latest/rules/no-extra-label
      "no-implicit-globals": "warn", // https://eslint.org/docs/latest/rules/no-implicit-globals
      "no-implied-eval": "warn", // https://eslint.org/docs/latest/rules/no-implied-eval
      "no-iterator": "warn", // https://eslint.org/docs/latest/rules/no-iterator
      "no-label-var": "warn", // https://eslint.org/docs/latest/rules/no-label-var
      "no-labels": "warn", // https://eslint.org/docs/latest/rules/no-labels
      "no-lone-blocks": "warn", // https://eslint.org/docs/latest/rules/no-lone-blocks
      "no-multi-str": "warn", // https://eslint.org/docs/latest/rules/no-multi-str
      "no-negated-condition": "warn", // https://eslint.org/docs/latest/rules/no-negated-condition
      "no-new": "warn", // https://eslint.org/docs/latest/rules/no-new
      "no-new-func": "warn", // https://eslint.org/docs/latest/rules/no-new-func
      "no-new-wrappers": "warn", // https://eslint.org/docs/latest/rules/no-new-wrappers
      "no-object-constructor": "warn", // https://eslint.org/docs/latest/rules/no-object-constructor
      "no-octal-escape": "warn", // https://eslint.org/docs/latest/rules/no-octal-escape
      "no-proto": "warn", // https://eslint.org/docs/latest/rules/no-proto
      "no-restricted-exports": [
        "warn",
        {
          restrictedNamedExports: [
            // If "then" is a function, the module will not be loadedable by an async import()
            // because it looks like a promise. The JS engine will call the .then() function in that case
            // Since this is super confusing, let's warn the user about it
            "then",
          ],
        },
      ], // https://eslint.org/docs/latest/rules/no-restricted-exports
      "no-restricted-globals": ["warn", "event"], // https://eslint.org/docs/latest/rules/no-restricted-globals
      "no-restricted-syntax": ["warn", "WithStatement"], // https://eslint.org/docs/latest/rules/no-restricted-syntax
      "no-script-url": "warn", // https://eslint.org/docs/latest/rules/no-script-url
      "no-sequences": "warn", // https://eslint.org/docs/latest/rules/no-sequences
      "no-throw-literal": "warn", // https://eslint.org/docs/latest/rules/no-throw-literal
      "no-undef-init": "warn", // https://eslint.org/docs/latest/rules/no-undef-init
      "no-unneeded-ternary": "warn", // https://eslint.org/docs/latest/rules/no-unneeded-ternary
      "no-unused-expressions": ["warn", ruleOptions["no-unused-expressions"]], // https://eslint.org/docs/latest/rules/no-unused-expressions
      "no-unused-vars": ["error", ruleOptions["no-unused-vars"]],
      "no-useless-call": "warn", // https://eslint.org/docs/latest/rules/no-useless-call
      "no-useless-computed-key": "warn", // https://eslint.org/docs/latest/rules/no-useless-computed-key
      "no-useless-concat": "warn", // https://eslint.org/docs/latest/rules/no-useless-concat
      "no-useless-constructor": "warn", // https://eslint.org/docs/latest/rules/no-useless-constructor
      "no-useless-escape": "warn", // https://eslint.org/docs/latest/rules/no-useless-escape
      "no-useless-rename": "warn", // https://eslint.org/docs/latest/rules/no-useless-rename
      "no-useless-return": "warn", // https://eslint.org/docs/latest/rules/no-useless-return
      "no-var": "warn", // https://eslint.org/docs/latest/rules/no-var
      "object-shorthand": ["warn", "always"], // https://eslint.org/docs/latest/rules/object-shorthand
      "one-var": ["warn", "never"], // https://eslint.org/docs/latest/rules/one-var
      "prefer-arrow-callback": "warn", // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      "prefer-const": "warn", // https://eslint.org/docs/latest/rules/prefer-const
      "prefer-exponentiation-operator": "warn", // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
      "prefer-numeric-literals": "warn", // https://eslint.org/docs/latest/rules/prefer-numeric-literals
      "prefer-object-has-own": "warn", // https://eslint.org/docs/latest/rules/prefer-object-has-own
      "prefer-promise-reject-errors": "warn", // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
      "prefer-regex-literals": "warn", // https://eslint.org/docs/latest/rules/prefer-regex-literals
      "prefer-rest-params": "warn", // https://eslint.org/docs/latest/rules/prefer-rest-params
      "prefer-spread": "warn", // https://eslint.org/docs/latest/rules/prefer-spread
      strict: "warn", // https://eslint.org/docs/latest/rules/strict
      "symbol-description": "warn", // https://eslint.org/docs/latest/rules/symbol-description
      yoda: ["warn", "never"], // https://eslint.org/docs/latest/rules/yoda

      // Layout & Formatting
      // ----------------------------------------------
      "unicode-bom": "warn", // https://eslint.org/docs/latest/rules/unicode-bom
    },
  },
  {
    files: globPatterns.tests,
    plugins: {
      "no-only-tests": noOnlyTests,
    },
    rules: {
      // Top-level await might slow down the test suite start up
      "unicorn/prefer-top-level-await": "off",
      // Nesting is pretty common in tests when you group tests
      "max-nested-callbacks": "off",
      // await in loops is pretty common in Playwright tests
      "no-await-in-loop": "off",
      // In case you want to test errors thrown by a constructor
      "no-new": "off",
      // should show a warning when a test is focussed
      "no-only-tests/no-only-tests": "error",
    },
  },
];

export default javascript;
