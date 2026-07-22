import { globPatterns } from "../lib/glob-patterns.js";

/**
 * Native React + jsx-a11y + Compiler (best-effort stand-in for @eslint-react). Presets must include
 * plugins: react, jsx-a11y. See GAPS.md for @eslint-react parity gaps.
 */
export const react = {
  jsPlugins: ["eslint-plugin-react-you-might-not-need-an-effect"],
  rules: {
    // React Compiler (experimental) — approximate @eslint-react / Compiler coverage
    "react/react-compiler": "warn",

    // Hooks + refresh (native names under react/)
    "react/rules-of-hooks": "error",
    "react/exhaustive-deps": "warn",
    "react/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        allowExportNames: [
          // Next.js
          "getServerSideProps",
          // Remix
          "meta",
          "links",
          "headers",
          "loader",
          "action",
        ],
      },
    ],

    // Classic react rules we kept in the ESLint pack (where native exists)
    "react/button-has-type": "warn", // replaces @eslint-react/dom-no-missing-button-type
    "react/display-name": "warn", // replaces @eslint-react/no-missing-component-display-name
    "react/iframe-missing-sandbox": "warn", // replaces @eslint-react/dom-no-missing-iframe-sandbox
    "react/jsx-boolean-value": ["warn", "never"], // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value
    "react/jsx-curly-brace-presence": ["warn", "never"], // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence
    "react/jsx-filename-extension": [
      // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-handler-names": [
      // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-handler-names
      "warn",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-no-constructed-context-values": "warn", // replaces @eslint-react/no-unstable-context-value
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-undef": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef
    "react/jsx-pascal-case": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case
    "react/jsx-props-no-spread-multi": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi
    "react/no-find-dom-node": "warn",
    "react/no-redundant-should-component-update": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update
    "react/no-this-in-sfc": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc
    "react/no-unknown-property": "warn", // replaces @eslint-react/dom-no-unknown-property
    "react/prefer-es6-class": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class
    "react/prefer-function-component": "warn",
    "react/self-closing-comp": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp
    "react/style-prop-object": "warn", // https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object

    // New JSX transform — do not require React in scope
    "react/react-in-jsx-scope": "off",

    // eslint-plugin-react-you-might-not-need-an-effect (JS plugin)
    "react-you-might-not-need-an-effect/no-derived-state": "warn",
    "react-you-might-not-need-an-effect/no-chain-state-updates": "warn",
    "react-you-might-not-need-an-effect/no-event-handler": "warn",
    "react-you-might-not-need-an-effect/no-adjust-state-on-prop-change": "warn",
    "react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change": "warn",
    "react-you-might-not-need-an-effect/no-pass-live-state-to-parent": "warn",
    "react-you-might-not-need-an-effect/no-pass-data-to-parent": "warn",
    "react-you-might-not-need-an-effect/no-external-store-subscription": "warn",
    "react-you-might-not-need-an-effect/no-initialize-state": "warn",
  },
  overrides: [
    {
      // Match ESLint: only relax boundary types for JSX/TSX, keep warn on plain .ts
      files: [...globPatterns.jsx, ...globPatterns.typescriptJsx],
      rules: {
        // Component return types (JSX.Element vs ReactNode vs React.ReactElement) are noisy,
        // version-dependent, and don't add the same contract value as a typed utility function.
        "typescript/explicit-module-boundary-types": "off",
      },
    },
    {
      files: globPatterns.tests,
      rules: {
        "react/exhaustive-deps": "off", // Effect dependency permutations are often intentionally incomplete in tests.
        "react/only-export-components": "off", // Test files export helpers/constants alongside components.
        "react/display-name": "off", // Anonymous inline components are common in tests.
      },
    },
  ],
};

export default react;
