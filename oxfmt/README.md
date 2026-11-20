# [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) config

Shared Oxfmt config. Migrating from Prettier? Remove Prettier (and `prettier.config.*` / `.prettierrc*`) and its plugins from the project first. See also [GAPS.md](./GAPS.md) for known limitations.

## Installation

```sh
npm install oxfmt @peerigon/configs --save-dev
```

Create an `oxfmt.config.ts` next to your `package.json`:

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

> Oxfmt auto-discovers `oxfmt.config.ts` (and `.oxfmtrc.json`), so you don't need to pass `-c`.

## Configuration

Uses Oxfmt's defaults (including `printWidth: 100`). On top of those, our config also:

- auto-sorts `import` statements
- formats JSDoc comments
- sorts Tailwind CSS class names

`package.json` sorting is enabled by Oxfmt by default.

## Known limitations

- **No CSS property sorting.** CSS is formatted but declarations are not reordered.
- **Tailwind v4** may require pointing `sortTailwindcss.stylesheet` at your CSS entry; v3 auto-detects `tailwind.config.js`.

See [GAPS.md](./GAPS.md) for the full, living list.

## Ignoring files

Files matching `**/*.generated.*` are ignored via `ignorePatterns` in the config. Oxfmt also respects `.gitignore` automatically.
