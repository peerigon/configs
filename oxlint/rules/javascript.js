import { globPatterns } from "../lib/glob-patterns.js";
import { eslintJsPlugin } from "../lib/plugins.js";
import { ruleOptions } from "../lib/rule-options.js";

/**
 * JavaScript + unicorn rule pack (best-effort port of eslint/rules/javascript.js).
 * Presets must set `plugins` to include eslint, unicorn, oxc.
 */
export const javascript = {
  jsPlugins: [eslintJsPlugin, "eslint-plugin-no-only-tests"],
  rules: {
    // Turn of too opinionated rules
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/896
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

    // Possible Problems
    // ----------------------------------------------
    "array-callback-return": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return
    "no-await-in-loop": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop
    "no-constructor-return": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return
    "no-duplicate-imports": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports
    "no-promise-executor-return": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return
    "no-self-compare": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare
    "no-template-curly-in-string": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string
    "no-unmodified-loop-condition": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unmodified-loop-condition
    "no-unreachable-loop": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop
    "no-useless-assignment": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment
    // Native gap → JS plugin
    "eslint-js/require-atomic-updates": "warn", // https://eslint.org/docs/latest/rules/require-atomic-updates

    // Suggestions
    // ----------------------------------------------
    "accessor-pairs": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs
    "block-scoped-var": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var
    // camelcase not native → JS plugin
    "eslint-js/camelcase": [
      "warn",
      {
        allow: ["^UNSAFE_"],
        ignoreDestructuring: false,
        properties: "always",
      },
    ], // https://eslint.org/docs/latest/rules/camelcase
    "eslint-js/consistent-return": "warn", // https://eslint.org/docs/latest/rules/consistent-return
    "eslint-js/dot-notation": "warn", // https://eslint.org/docs/latest/rules/dot-notation
    eqeqeq: ["warn", "always", { null: "ignore" }], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq
    "func-style": ["warn", "declaration"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style
    "grouped-accessor-pairs": ["warn", "setBeforeGet"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs
    "max-depth": ["warn", 5], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth
    "max-nested-callbacks": ["warn", 3], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks
    "max-params": ["warn", { max: 4 }], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params
    "new-cap": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap
    "no-alert": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert
    "no-array-constructor": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor
    "no-bitwise": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise
    "no-caller": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller
    "no-else-return": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return
    "no-eval": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval
    "no-extend-native": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native
    "no-extra-bind": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind
    "no-extra-label": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label
    "no-implicit-globals": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-globals
    "no-implied-eval": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval
    "no-iterator": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator
    "no-label-var": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var
    "no-labels": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels
    "no-lone-blocks": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks
    "no-multi-str": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str
    "no-negated-condition": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition
    "no-new": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new
    "no-new-func": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func
    "no-new-wrappers": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers
    "no-object-constructor": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor
    "eslint-js/no-octal-escape": "warn", // https://eslint.org/docs/latest/rules/no-octal-escape
    "no-proto": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto
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
    ], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports
    "no-restricted-globals": ["warn", "event"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals
    "eslint-js/no-restricted-syntax": ["warn", "WithStatement"], // https://eslint.org/docs/latest/rules/no-restricted-syntax
    "no-script-url": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url
    "no-sequences": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences
    "no-throw-literal": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal
    "eslint-js/no-undef-init": "warn", // https://eslint.org/docs/latest/rules/no-undef-init
    "no-unneeded-ternary": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary
    "no-unused-expressions": ["warn", ruleOptions["no-unused-expressions"]], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions
    "no-unused-vars": ["error", ruleOptions["no-unused-vars"]],
    "no-useless-call": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call
    "no-useless-computed-key": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key
    "no-useless-concat": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat
    "no-useless-constructor": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor
    "no-useless-escape": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape
    "no-useless-rename": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename
    "no-useless-return": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return
    "no-var": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var
    "object-shorthand": ["warn", "always"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand
    "eslint-js/one-var": ["warn", "never"], // https://eslint.org/docs/latest/rules/one-var
    "prefer-arrow-callback": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback
    "prefer-const": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const
    "prefer-exponentiation-operator": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator
    "prefer-numeric-literals": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals
    "prefer-object-has-own": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own
    "prefer-promise-reject-errors": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors
    "prefer-regex-literals": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals
    "prefer-rest-params": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params
    "prefer-spread": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread
    "eslint-js/strict": "warn", // https://eslint.org/docs/latest/rules/strict
    "symbol-description": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description
    yoda: ["warn", "never"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda

    // Layout & Formatting
    // ----------------------------------------------
    "unicode-bom": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom
  },
  overrides: [
    {
      files: globPatterns.tests,
      rules: {
        "eslint-js/camelcase": "off", // Mock payloads often mirror external casing conventions.
        "max-depth": "off", // Nested describe blocks are often the clearest structure.
        "max-nested-callbacks": "off", // Nested test callbacks are idiomatic in test frameworks.
        "no-await-in-loop": "off", // Await in loops is pretty common in Playwright tests.
        "no-new": "off", // Constructor side effects are often asserted directly in tests.
        "no-only-tests/no-only-tests": "error", // Should show a warning when a test is focussed (overridden to off when using vitest config).
        "no-constant-condition": "off", // Constants are often used in tests to assert loop body runs at most once.
        "no-unreachable-loop": "off", // Unreachable loops are sometimes used in tests to assert loop body runs at most once.
        "no-unused-expressions": "off", // Assertion styles (e.g. chai) use expression statements.
        "prefer-arrow-callback": "off", // Function callbacks are needed for this-binding tests.
        "require-yield": "off", // Generators without yield are common in test helpers/setup.
        "unicorn/prefer-single-call": "off", // Multiple `Array#push()` / `classList` calls are often clearer in test setup than one merged call.
        "unicorn/prefer-top-level-await": "off", // Top-level await might slow down the test suite start up.
      },
    },
  ],
};

export default javascript;
