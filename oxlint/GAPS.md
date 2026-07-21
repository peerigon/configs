# Oxlint ↔ ESLint gaps

Living list of differences between `@peerigon/configs/eslint/*` and `@peerigon/configs/oxlint/*`. Update this file whenever parity improves.

Upstream references:

- [Oxlint rules](https://oxc.rs/docs/guide/usage/linter/rules)
- [Built-in plugins](https://oxc.rs/docs/guide/usage/linter/plugins)
- [JS plugins (alpha)](https://oxc.rs/docs/guide/usage/linter/js-plugins)
- [Type-aware linting / tsgolint](https://oxc.rs/docs/guide/usage/linter/type-aware) ([59/61 type-aware rules](https://github.com/oxc-project/tsgolint))
- [Migrate from ESLint](https://oxc.rs/docs/guide/usage/linter/migrate-from-eslint)

## Status legend

| Status         | Meaning                                                  |
| -------------- | -------------------------------------------------------- |
| `approximated` | Different rule/options; close enough for best-effort     |
| `js-plugin`    | Covered via Oxlint JS plugins (alpha)                    |
| `lost`         | Not available natively or via JS plugins in a useful way |
| `check-again`  | Watch upstream; promote to native when ready             |

## High-priority gaps

| ESLint source of truth                                                                                                                               | Oxlint today                                                                                                                          | Status                                                         | Check again when                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `@typescript-eslint/naming-convention` (full selector matrix in `eslint/lib/rule-options.js`)                                                        | `id-match` with a single regex (camelCase / PascalCase / UPPER*CASE + `__` / `UNSAFE*` escapes; ignores destructuring & object props) | `approximated`                                                 | [tsgolint implements `naming-convention`](https://github.com/oxc-project/tsgolint) |
| `@eslint-react/*` recommended + recommended-type-checked                                                                                             | Native `react/*` + `react/react-compiler` + `jsx-a11y/*`                                                                              | `approximated` / `lost` for type-checked `@eslint-react` rules | Native ports of `@eslint-react` rules, or JS plugins gain type-aware support       |
| `no-restricted-syntax` (WithStatement, `styles/no-default-export`)                                                                                   | `eslint-js/no-restricted-syntax` via `oxlint-plugin-eslint`                                                                           | `js-plugin`                                                    | Native `no-restricted-syntax`                                                      |
| `eslint-plugin-prefer-arrow`                                                                                                                         | JS plugin                                                                                                                             | `js-plugin`                                                    | Native prefer-arrow / equivalent                                                   |
| `eslint-plugin-no-only-tests`                                                                                                                        | JS plugin (Vitest uses `vitest/no-focused-tests`)                                                                                     | `js-plugin`                                                    | —                                                                                  |
| `eslint-plugin-react-you-might-not-need-an-effect`                                                                                                   | JS plugin (rules listed explicitly)                                                                                                   | `js-plugin`                                                    | Native equivalents if any                                                          |
| `eslint-plugin-playwright`                                                                                                                           | JS plugin (subset of recommended rules)                                                                                               | `js-plugin`                                                    | Native playwright plugin                                                           |
| `@tanstack/eslint-plugin-query`                                                                                                                      | JS plugin aliased as `tanstack-query`                                                                                                 | `js-plugin`                                                    | Native tanstack plugin                                                             |
| `camelcase`                                                                                                                                          | `eslint-js/camelcase`                                                                                                                 | `js-plugin`                                                    | Native `camelcase` or drop after `naming-convention` lands                         |
| Core rules missing natively (`require-atomic-updates`, `consistent-return`, `dot-notation`, `one-var`, `strict`, `no-octal-escape`, `no-undef-init`) | `eslint-js/*`                                                                                                                         | `js-plugin`                                                    | Native ports                                                                       |
| `vitest/prefer-vi-mocked`                                                                                                                            | Not enabled (no native rule in schema)                                                                                                | `lost`                                                         | Native rule appears                                                                |
| Full `jsx-a11y` recommended **and** strict                                                                                                           | Native `jsx-a11y` plugin + category warn                                                                                              | `approximated`                                                 | Confirm full rule parity vs `eslint-plugin-jsx-a11y-x`                             |
| ESLint flat-config array composition                                                                                                                 | Oxlint object + `extends` / `mergeConfigs`                                                                                            | intentional                                                    | —                                                                                  |
| `@typescript-eslint/*` rule IDs                                                                                                                      | `typescript/*`                                                                                                                        | intentional rename                                             | —                                                                                  |
| `react-refresh/only-export-components`                                                                                                               | `react/only-export-components`                                                                                                        | intentional rename                                             | —                                                                                  |
| `projectService: true`                                                                                                                               | `options.typeAware` + `oxlint-tsgolint` (TypeScript 7 / typescript-go)                                                                | `approximated`                                                 | Consumer tsconfig migration                                                        |

## Intentional non-goals (for now)

- Shipping `@eslint-react` as the React source of truth under Oxlint (JS plugin story for scoped sub-plugins is fragile; type-checked rules cannot run as JS plugins).
- Perfect option parity for every typescript-eslint stylistic rule.
- Replacing Prettier with Oxfmt in this package (separate concern).

## How to verify a gap is closed

1. Confirm the rule exists in [Oxlint rules](https://oxc.rs/docs/guide/usage/linter/rules) or `node_modules/oxlint/configuration_schema.json` (`DummyRuleMap`).
2. Port options from the matching `eslint/rules/*` or `eslint/styles/*` file.
3. Prefer native over JS plugin; remove the JS-plugin entry when unused.
4. Update fixtures under `oxlint/**/*.test/` and this file.
5. Follow [improve-parity.prompt.md](./improve-parity.prompt.md).
