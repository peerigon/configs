# Oxfmt ↔ Prettier gaps

Living list of differences between `@peerigon/configs/prettier` and `@peerigon/configs/oxfmt`. Update this file whenever parity improves.

Upstream references:

- [Oxfmt configuration](https://oxc.rs/docs/guide/usage/formatter/config.html)
- [Sorting (imports, Tailwind, package.json)](https://oxc.rs/docs/guide/usage/formatter/sorting.html)
- [Unsupported features](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html) (built-in alternatives to common Prettier plugins)
- [Migrate from Prettier](https://oxc.rs/docs/guide/usage/formatter/migrate-from-prettier.html)
- Config schema: `node_modules/oxfmt/dist/index.d.ts` (`OxfmtConfig`)

## Status legend

| Status         | Meaning                                                    |
| -------------- | ---------------------------------------------------------- |
| `approximated` | Different implementation/options; close enough best-effort |
| `lost`         | No Oxfmt equivalent today                                  |
| `intentional`  | Deliberate difference, not a gap to close                  |
| `check-again`  | Watch upstream; promote when ready                         |

## Gaps

| Prettier source of truth                                            | Oxfmt today                                                                                                                                         | Status         | Upstream / check again when                                                                                                                                            |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prettier-plugin-css-order` (`cssDeclarationSorterOrder: "smacss"`) | CSS/LESS/SCSS are formatted natively (`oxc_formatter_css`), but declarations keep their source order — there is no property/declaration sort option | `lost`         | [oxc#22576](https://github.com/oxc-project/oxc/issues/22576) (`oxfmt: css sorting`); also requested on [oxc#13610](https://github.com/oxc-project/oxc/issues/13610)    |
| `prettier-plugin-packagejson`                                       | Native `sortPackageJson` (enabled by default), but the key order is Oxfmt's own and not compatible                                                  | `approximated` | Different by design ([unsupported features](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html))                                                      |
| `@ianvs/prettier-plugin-sort-imports`                               | Native `sortImports` (perfectionist-style groups); group boundaries and blank-line handling differ                                                  | `approximated` | [oxc#22521](https://github.com/oxc-project/oxc/issues/22521) (full perfectionist); [oxc#21689](https://github.com/oxc-project/oxc/issues/21689) (side-effect ordering) |
| `prettier-plugin-jsdoc`                                             | Native `jsdoc` formatting (`jsdoc: true`)                                                                                                           | `approximated` | A consumer needs a specific JSDoc option we can't map                                                                                                                  |
| `prettier-plugin-tailwindcss`                                       | Native `sortTailwindcss` (`sortTailwindcss: true`); Tailwind v4 may need an explicit `stylesheet` path                                              | `approximated` | Oxfmt auto-detects the v4 stylesheet                                                                                                                                   |
| `printWidth` (Prettier default `80`)                                | Oxfmt default `100` (we do not override)                                                                                                            | `intentional`  | Dual-running Prettier + Oxfmt is not supported — pick one                                                                                                              |
| `@prettier/plugin-oxc`                                              | N/A — Oxfmt already formats with Oxc                                                                                                                | `intentional`  | —                                                                                                                                                                      |

Generic Prettier plugins are [not supported](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html). [oxc#15665](https://github.com/oxc-project/oxc/issues/15665) tracks loading _language_ plugins (e.g. Svelte), not reusing sorting plugins like `css-order`.

## Intentional non-goals (for now)

- Running Prettier and Oxfmt on the same codebase (different `printWidth` and plugin gaps make dual use impractical).
- Replacing Prettier with Oxfmt in this package — Oxfmt is an opt-in alternative; this repo still dogfoods Prettier.
- Byte-for-byte output parity with Prettier + plugins.

## How to verify a gap is closed

1. Confirm the option exists in the Oxfmt schema (`node_modules/oxfmt/dist/index.d.ts`, `OxfmtConfig`).
2. Enable/port it in [`base.js`](./base.js).
3. Update the [`base.test`](./base.test) fixture and run `npm run test:oxfmt`.
4. Update this file and the "Differences from the Prettier config" section in [`README.md`](./README.md).
