# Oxfmt gaps

Living list of known limitations of `@peerigon/configs/oxfmt`. Update this file whenever Oxfmt gains or loses features.

Upstream references:

- [Oxfmt configuration](https://oxc.rs/docs/guide/usage/formatter/config.html)
- [Sorting (imports, Tailwind, package.json)](https://oxc.rs/docs/guide/usage/formatter/sorting.html)
- [Unsupported features](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html)
- Config schema: `node_modules/oxfmt/dist/index.d.ts` (`OxfmtConfig`)

## Status legend

| Status         | Meaning                                                    |
| -------------- | ---------------------------------------------------------- |
| `approximated` | Different implementation/options; close enough best-effort |
| `lost`         | No Oxfmt equivalent today                                  |
| `intentional`  | Deliberate choice, not a gap to close                      |
| `check-again`  | Watch upstream; promote when ready                         |

## Gaps

| Feature                 | Oxfmt today                                                                                                                                         | Status         | Upstream / check again when                                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS declaration sorting | CSS/LESS/SCSS are formatted natively (`oxc_formatter_css`), but declarations keep their source order — there is no property/declaration sort option | `lost`         | [oxc#22576](https://github.com/oxc-project/oxc/issues/22576) (`oxfmt: css sorting`); also requested on [oxc#13610](https://github.com/oxc-project/oxc/issues/13610)    |
| `package.json` sorting  | Native `sortPackageJson` (enabled by default) with Oxfmt's own key order                                                                            | `approximated` | Different by design ([unsupported features](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html))                                                      |
| Import sorting          | Native `sortImports` (perfectionist-style groups)                                                                                                   | `approximated` | [oxc#22521](https://github.com/oxc-project/oxc/issues/22521) (full perfectionist); [oxc#21689](https://github.com/oxc-project/oxc/issues/21689) (side-effect ordering) |
| JSDoc formatting        | Native `jsdoc` formatting (`jsdoc: true`)                                                                                                           | `approximated` | A consumer needs a specific JSDoc option we can't map                                                                                                                  |
| Tailwind class sorting  | Native `sortTailwindcss` (`sortTailwindcss: true`); Tailwind v4 may need an explicit `stylesheet` path                                              | `approximated` | Oxfmt auto-detects the v4 stylesheet                                                                                                                                   |
| `printWidth`            | Oxfmt default `100` (we do not override)                                                                                                            | `intentional`  | —                                                                                                                                                                      |

Prettier plugins are [not supported](https://oxc.rs/docs/guide/usage/formatter/unsupported-features.html). [oxc#15665](https://github.com/oxc-project/oxc/issues/15665) tracks loading _language_ plugins (e.g. Svelte), not reusing sorting plugins.

## How to verify a gap is closed

1. Confirm the option exists in the Oxfmt schema (`node_modules/oxfmt/dist/index.d.ts`, `OxfmtConfig`).
2. Enable/port it in [`base.js`](./base.js).
3. Update the [`base.test`](./base.test) fixture and run `npm run test:oxfmt`.
4. Update this file and the "Known limitations" section in [`README.md`](./README.md).
