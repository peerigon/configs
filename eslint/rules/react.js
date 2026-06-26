import reactPlugin2 from "@eslint-react/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import { globPatterns } from "../lib/glob-patterns.js";

const files = [globPatterns.jsx, globPatterns.typescriptJsx];

/** @type {import("eslint").Linter.Config[]} */
export const react = [
  {
    ...reactPlugin.configs.flat.recommended,
    files,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ...reactPlugin.configs.flat["jsx-runtime"],
    files,
  },
  {
    ...reactPlugin2.configs.recommended,
    files,
  },
  {
    ...reactPlugin2.configs["recommended-type-checked"],
    files,
  },
  {
    ...jsxA11yPlugin.flatConfigs.recommended,
    files,
  },
  {
    ...jsxA11yPlugin.flatConfigs.strict,
    files,
  },
  {
    files,
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      "react-refresh/only-export-components": [
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
    },
  },
  {
    ...reactHooksPlugin.configs.flat.recommended,
    files,
  },
  {
    // @eslint-react is the source of truth wherever it ships an equivalent rule.
    // This preset turns off overlapping eslint-plugin-react rules so @eslint-react wins
    // for those. Several disabled rules only have equivalents that are off by default
    // or live in @eslint-react/kit; we re-enable the built-in equivalents below and
    // keep the few eslint-plugin-react rules whose only replacement would require kit.
    ...reactPlugin2.configs["disable-conflict-eslint-plugin-react"],
    files,
  },
  {
    ...reactYouMightNotNeedAnEffect.configs.recommended,
    files,
  },
  {
    files,
    rules: {
      // eslint-plugin-react rules kept on: disable-conflict-eslint-plugin-react does not
      // touch these (no overlapping @eslint-react rule), or its only equivalent lives in
      // @eslint-react/kit, which we avoid as an extra dependency. The latter group
      // (jsx-boolean-value, jsx-filename-extension, jsx-pascal-case, forbid-prop-types)
      // is re-asserted here so it overrides the conflict preset above.
      "react/default-props-match-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
      "react/forbid-foreign-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
      "react/forbid-prop-types": [
        // No @eslint-react equivalent (propTypes are legacy). https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "warn",
        {
          checkChildContextTypes: true,
          checkContextTypes: true,
        },
      ],
      "react/jsx-boolean-value": ["warn", "never"], // Equivalent only in @eslint-react/kit. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-curly-brace-presence": ["warn", "never"], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      "react/jsx-filename-extension": [
        // No @eslint-react equivalent. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "warn",
        {
          extensions: [".jsx", ".tsx"],
        },
      ],
      "react/jsx-handler-names": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        "warn",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],
      "react/jsx-no-undef": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
      "react/jsx-pascal-case": "warn", // Equivalent only in @eslint-react/kit. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      "react/jsx-props-no-spread-multi": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
      "react/no-invalid-html-attribute": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
      "react/no-redundant-should-component-update": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
      "react/no-this-in-sfc": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
      "react/no-typos": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
      "react/no-unused-prop-types": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
      "react/prefer-es6-class": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
      "react/prefer-stateless-function": [
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "warn",
        {
          ignorePureComponents: true,
        },
      ],
      "react/self-closing-comp": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      "react/style-prop-object": "warn", // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      // @eslint-react equivalents that replace eslint-plugin-react rules disabled by the
      // conflict preset above but are not enabled by @eslint-react's recommended presets.
      "@eslint-react/dom/no-missing-button-type": "warn", // replaces react/button-has-type
      "@eslint-react/dom/no-missing-iframe-sandbox": "warn", // replaces react/iframe-missing-sandbox
      "@eslint-react/dom/no-unknown-property": "warn", // replaces react/no-unknown-property
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "warn", // replaces react-hooks/set-state-in-effect overlap
      "@eslint-react/naming-convention/use-state": "warn", // replaces react/hook-use-state. https://eslint-react.xyz/docs/rules/naming-convention-use-state
      "@eslint-react/no-leaked-conditional-rendering": "warn", // replaces react/jsx-no-leaked-render. https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
      "@eslint-react/no-missing-component-display-name": "warn", // replaces react/display-name
      "@eslint-react/no-missing-context-display-name": "warn", // replaces react/display-name (context)
      "@eslint-react/no-unstable-context-value": "warn", // replaces react/jsx-no-constructed-context-values
      "@eslint-react/no-unused-state": "warn", // replaces react/no-unused-state
    },
  },
  {
    files: globPatterns.tests,
    rules: {
      "react-hooks/exhaustive-deps": "off", // Effect dependency permutations are often intentionally incomplete in tests.
      "react-refresh/only-export-components": "off", // Test files export helpers/constants alongside components.
      "@eslint-react/no-missing-component-display-name": "off", // Anonymous inline components are common in tests.
    },
  },
];

export default react;
