import { globPatterns } from "../lib/glob-patterns.js";
import { ruleOptions } from "../lib/rule-options.js";

/**
 * TypeScript rule pack (best-effort port of eslint/rules/typescript.js).
 * naming-convention → id-match (see GAPS.md).
 * Presets must set plugins to include typescript and options.typeAware: true.
 */
export const typescript = {
  jsPlugins: ["eslint-plugin-prefer-arrow"],
  rules: {
    "typescript/array-type": ["warn", { default: "generic" }],
    "typescript/ban-ts-comment": [
      // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment
      "warn",
      {
        "ts-expect-error": "allow-with-description",
      },
    ],
    "typescript/class-literal-property-style": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style
    "typescript/consistent-type-definitions": ["warn", "type"], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions
    "typescript/explicit-member-accessibility": [
      // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-member-accessibility
      "warn",
      {
        accessibility: "no-public",
        overrides: {
          parameterProperties: "explicit",
        },
      },
    ],
    // Only exported functions need an explicit return type as a contract for consumers.
    // Internal functions should infer their return type to keep diffs small.
    "typescript/explicit-module-boundary-types": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types
    "typescript/method-signature-style": ["warn", "property"], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/method-signature-style
    // Approximate naming-convention (selector matrix not available natively)
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match
    "id-match": ruleOptions["id-match"],
    "typescript/no-confusing-void-expression": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression
    "typescript/no-empty-interface": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-interface
    // `any` is sometimes useful for small and abstract functions.
    // Should only be used in isolated parts of the codebase.
    // Appropriate usage can only be checked in a PR review.
    "typescript/no-explicit-any": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any
    "typescript/no-non-null-assertion": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion
    "typescript/no-unnecessary-boolean-literal-compare": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare
    "typescript/no-unnecessary-condition": [
      "warn",
      {
        allowConstantLoopConditions: true,
      },
    ], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition
    "typescript/no-unnecessary-qualifier": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-qualifier
    "typescript/no-unsafe-argument": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument
    "typescript/no-unsafe-assignment": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment
    "typescript/no-unsafe-call": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call
    "typescript/no-unsafe-member-access": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access
    // Core no-unused-vars covers TS files in Oxlint
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars
    "no-unused-vars": ["error", ruleOptions["no-unused-vars"]],
    "typescript/promise-function-async": [
      // https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async
      "warn",
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "typescript/require-await": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-await
    "typescript/restrict-plus-operands": [
      // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands
      "error",
      {
        // Concatenating a string with a number is unproblematic and ergonomic.
        // The other operands are kept strict (the rule's own schema defaults
        // are permissive, so they must be spelled out as false explicitly).
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: true,
        allowRegExp: false,
      },
    ],
    "typescript/restrict-template-expressions": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-template-expressions
    // TS' noImplicitReturns catches this already more effectively
    "eslint-js/consistent-return": "off",
    "typescript/return-await": ["warn", "in-try-catch"], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await
    "typescript/switch-exhaustiveness-check": [
      "warn",
      {
        // It should not be necessary to list all possible values for a union type
        // explicitly in a switch statement. E.g. if the types are generated, we don't
        // want to adjust all switch statements every time the types are changed.
        considerDefaultExhaustiveForUnions: true,
      },
    ], // https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check
    "eslint-js/camelcase": "off",
    "max-lines": [
      "warn",
      {
        max: 1400,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "func-style": ["warn", "expression"], // https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style
    "prefer-arrow/prefer-arrow-functions": [
      // https://github.com/TristonJ/eslint-plugin-prefer-arrow
      "warn",
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        // We used to enforce arrow functions also for class methods (as class properties)
        // but arrow functions in sub-classes can't call their overridden counterpart
        // in their super-class, see https://stackoverflow.com/a/52823577
        classPropertiesAllowed: false,
      },
    ],
    "typescript/use-unknown-in-catch-callback-variable": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable
  },
  overrides: [
    {
      files: globPatterns.typescriptAmbient,
      rules: {
        // In d.ts files it might be necessary to merge an existing interface
        "typescript/consistent-type-definitions": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions
        // In d.ts files it's sometimes necessary to overload existing methods
        "typescript/method-signature-style": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/method-signature-style
        "id-match": "off", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match
        // Unused vars can be common in d.ts files when declaration merging is used
        "no-unused-vars": "off", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars
      },
    },
    {
      files: globPatterns.tests,
      rules: {
        // Type assertions are quite common in tests
        "typescript/consistent-type-assertions": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions
        // Mocking often requires to mock objects with a different naming convention
        "id-match": "off", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match
        // We allow any to be used in tests, so returning it is ok
        "typescript/no-unsafe-return": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-return
        // chai uses these as assertions
        "typescript/no-unnecessary-condition": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition
        "no-unused-expressions": "off", // https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions
        // It's uncommon to use async/await in Cypress tests
        // https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Asynchronous
        "typescript/promise-function-async": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async
        // Passing functions around like this can be common with mocking
        "typescript/unbound-method": "off", // https://oxc.rs/docs/guide/usage/linter/rules/typescript/unbound-method
      },
    },
  ],
};

export default typescript;
