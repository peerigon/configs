import reactPlugin2 from "@eslint-react/eslint-plugin";
import stylisticPlugin from "@stylistic/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y-x";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

import { globPatterns } from "../lib/glob-patterns.js";

const files = [globPatterns.jsx, globPatterns.typescriptJsx];

/** @type {import("eslint").Linter.Config[]} */
export const react = [
  {
    ...reactPlugin2.configs.recommended,
    files,
  },
  {
    ...reactPlugin2.configs["recommended-type-checked"],
    files,
  },
  {
    ...jsxA11yPlugin.configs.recommended,
    files,
  },
  {
    ...jsxA11yPlugin.configs.strict,
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
    // @eslint-react owns every hook/React-Compiler rule it ships an
    // equivalent for, so this preset turns off the overlapping eslint-plugin-react-hooks
    // rules. The react-hooks rules without an @eslint-react equivalent (void-use-memo,
    // preserve-manual-memoization, incompatible-library, config, gating) stay enabled as
    // the fallback. Two gaps this preset leaves are patched in the rules block below.
    ...reactPlugin2.configs["disable-conflict-eslint-plugin-react-hooks"],
    files,
  },
  {
    ...reactYouMightNotNeedAnEffect.configs.recommended,
    files,
  },
  {
    // eslint-plugin-react was removed (unmaintained, incompatible with ESLint 10). Most of
    // its rules are dropped as known gaps rather than replaced 1:1:
    // - jsx-uses-vars: core no-unused-vars / @typescript-eslint/no-unused-vars already
    //   track JSX references (eslint-scope tracks JSX since ESLint 9).
    // - jsx-no-duplicate-props, jsx-no-undef: TypeScript already reports these
    //   (TS17001 / TS2304) for .tsx; plain .jsx loses this coverage.
    // - default-props-match-prop-types, forbid-foreign-prop-types, forbid-prop-types,
    //   no-unused-prop-types, prefer-es6-class, prefer-stateless-function, no-is-mounted,
    //   no-redundant-should-component-update, no-this-in-sfc, no-typos,
    //   require-render-return: legacy class-component / propTypes rules, irrelevant with
    //   TypeScript + function components.
    // - jsx-boolean-value, jsx-props-no-spread-multi, jsx-filename-extension,
    //   jsx-handler-names, no-unescaped-entities: dropped, no replacement (would require
    //   @eslint-react/kit as an extra dependency, or no equivalent exists).
    files,
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      // self-closing-comp, jsx-curly-brace-presence and jsx-pascal-case moved to
      // @stylistic/eslint-plugin, same options as their eslint-plugin-react equivalents.
      "@stylistic/jsx-self-closing-comp": "warn", // https://eslint.style/rules/jsx-self-closing-comp
      "@stylistic/jsx-curly-brace-presence": ["warn", "never"], // https://eslint.style/rules/jsx-curly-brace-presence
      "@stylistic/jsx-pascal-case": "warn", // https://eslint.style/rules/jsx-pascal-case
      "@eslint-react/dom-no-string-style-prop": "warn", // replaces react/style-prop-object
      "@eslint-react/dom-no-unsafe-target-blank": "warn", // replaces react/no-invalid-html-attribute (the rel="noopener noreferrer" case)
      // @eslint-react equivalents that replace eslint-plugin-react rules but are not
      // enabled by @eslint-react's recommended presets.
      // (use-state, set-state-in-effect and no-leaked-conditional-rendering are already on
      // via recommended, so they are not re-listed here.)
      "@eslint-react/dom-no-missing-button-type": "warn", // replaces react/button-has-type
      "@eslint-react/dom-no-missing-iframe-sandbox": "warn", // replaces react/iframe-missing-sandbox
      "@eslint-react/dom-no-unknown-property": "warn", // replaces react/no-unknown-property
      "@eslint-react/no-missing-component-display-name": "warn", // replaces react/display-name
      "@eslint-react/no-missing-context-display-name": "warn", // replaces react/display-name (context)
      "@eslint-react/no-unstable-context-value": "warn", // replaces react/jsx-no-constructed-context-values
      "@eslint-react/no-unused-state": "warn", // replaces react/no-unused-state
      // disable-conflict-eslint-plugin-react-hooks misses this pair, so turn off the
      // react-hooks version explicitly to keep @eslint-react/static-components the only one.
      "react-hooks/static-components": "off",
      // @eslint-react equivalents the conflict preset disabled in react-hooks but that
      // @eslint-react's recommended presets do not enable, re-asserted here so we keep the
      // coverage via @eslint-react rather than losing it.
      "@eslint-react/globals": "warn", // replaces react-hooks/globals
      "@eslint-react/immutability": "warn", // replaces react-hooks/immutability
      "@eslint-react/refs": "warn", // replaces react-hooks/refs
      // Component return types (JSX.Element vs ReactNode vs React.ReactElement) are noisy,
      // version-dependent, and don't add the same contract value as a typed utility function.
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    files: globPatterns.tests,
    rules: {
      "@eslint-react/exhaustive-deps": "off", // Effect dependency permutations are often intentionally incomplete in tests.
      "react-refresh/only-export-components": "off", // Test files export helpers/constants alongside components.
      "@eslint-react/no-missing-component-display-name": "off", // Anonymous inline components are common in tests.
    },
  },
];

export default react;
