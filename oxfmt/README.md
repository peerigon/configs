# [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) config

Best-effort Oxfmt config that mirrors the [Prettier config](../prettier/README.md) in this package.

**Pick one formatter.** Do not run Prettier and Oxfmt on the same codebase — their defaults differ (notably `printWidth`: Prettier `80`, Oxfmt `100`) and several plugins are only approximated or missing. See [GAPS.md](./GAPS.md).

**This is not a 1:1 port.** Oxfmt is Prettier-compatible by design, but a few of our Prettier plugins have no Oxfmt equivalent yet — see [Differences](#differences-from-the-prettier-config).

## Installation

```sh
npm install oxfmt @peerigon/configs --save-dev
```

Remove Prettier (and `prettier.config.*` / `.prettierrc*`) from the project, then create an `oxfmt.config.mts` next to your `package.json`:

```ts
export { default } from "@peerigon/configs/oxfmt";
```

Recommended configuration in your `package.json` (using [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)):

```json
{
  "type": "module",
  "scripts": {
    "test": "run-p test:*",
    "test:format": "oxfmt --check ."
  }
}
```

> Oxfmt auto-discovers `oxfmt.config.ts` / `oxfmt.config.mts` (and `.oxfmtrc.json`), so you don't need to pass `-c`. Use an `.mts`/`.ts` config to re-export ours.

## Configuration

Uses Oxfmt's defaults (including `printWidth: 100`). On top of those, our config also:

- auto-sorts `import` statements
- formats JSDoc comments
- sorts Tailwind CSS class names

`package.json` sorting is enabled by Oxfmt by default.

## Differences from the Prettier config

Oxfmt aims for Prettier parity, but some differences remain — most notably:

- **`printWidth` is `100`** (Oxfmt default), not Prettier's `80`. This alone makes dual-running impractical.
- **No CSS property sorting.** There is no equivalent to `prettier-plugin-css-order`; CSS is formatted but declarations are not reordered.
- **`package.json` sorting differs.** Oxfmt's built-in sorter is not compatible with `prettier-plugin-packagejson`, so key ordering may differ.
- **Tailwind v4** may require pointing `sortTailwindcss.stylesheet` at your CSS entry; v3 auto-detects `tailwind.config.js`.

See [GAPS.md](./GAPS.md) for the full, living list of differences.

## Ignoring files

Files matching `**/*.generated.*` are ignored via `ignorePatterns` in the config. Oxfmt also respects `.gitignore` and `.prettierignore` automatically.
