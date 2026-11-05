# [Oxlint](https://oxc.rs/docs/guide/usage/linter) config

Best-effort Oxlint presets that mirror the ESLint configs in this package. Consumers can opt into Oxlint while keeping ESLint, or switch over when ready.

**This is not a 1:1 port.** See [GAPS.md](./GAPS.md) for known differences and [improve-parity.prompt.md](./improve-parity.prompt.md) for how agents should close gaps when Oxlint improves.

## Installation

```sh
npm install oxlint oxlint-tsgolint@^7 @peerigon/configs --save-dev
```

Type-aware TypeScript rules require `oxlint-tsgolint` **7.x** (embeds typescript-go / TypeScript 7). Your project’s `typescript` package is not used for type-aware linting.

- **Oxlint only:** install bare `typescript@^7` (see [TypeScript 7](../typescript/README.md#oxlint-only-no-eslint)).
- **Also using ESLint:** keep the 6.x API under the name `typescript` and add TS 7 via an alias (see [TypeScript 7](../typescript/README.md#eslint-with-or-without-oxlint)).

Create `oxlint.config.ts` next to your `package.json`:

```ts
import typescriptNodePreset from "@peerigon/configs/oxlint/presets/typescript-node";
import noDefaultExport from "@peerigon/configs/oxlint/styles/no-default-export";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [typescriptNodePreset, noDefaultExport],
});
```

Recommended configuration in your `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "test:lint": "oxlint -c oxlint.config.ts --deny-warnings ."
  }
}
```

## Ignored files

All presets ignore `**/*.generated.*`. Oxlint also respects `.gitignore` automatically.

## Presets

Presets bundle rules into one import. They **should not** be combined with each other.

| Export                              | Use for            |
| ----------------------------------- | ------------------ |
| `oxlint/presets/typescript-react`   | React + TypeScript |
| `oxlint/presets/typescript-node`    | Node + TypeScript  |
| `oxlint/presets/typescript`         | Other TypeScript   |
| `oxlint/presets/javascript-browser` | Browser JavaScript |
| `oxlint/presets/javascript-node`    | Node JavaScript    |
| `oxlint/presets/javascript`         | Other JavaScript   |

TypeScript presets set `options.typeAware: true`.

## Rule packs

Composable packs (same names as ESLint):

- `oxlint/rules/base`
- `oxlint/rules/javascript`
- `oxlint/rules/typescript`
- `oxlint/rules/react`
- `oxlint/rules/browser`
- `oxlint/rules/node`
- `oxlint/rules/vitest` — also add `"vitest"` to your root `plugins` array
- `oxlint/rules/playwright`
- `oxlint/rules/tanstack-query`

## Styles

Optional opinionated packs:

- `oxlint/styles/no-default-export`
- `oxlint/styles/no-null`
- `oxlint/styles/prefer-interface`
- `oxlint/styles/prefer-array-shorthand`
- `oxlint/styles/jsx-no-literals`

## Design notes

- **Native rules first**, then JS plugins (`oxlint-plugin-eslint`, `prefer-arrow`, Playwright, TanStack Query, `react-you-might-not-need-an-effect`).
- **React** uses native `react` + `jsx-a11y` + `react/react-compiler` (not `@eslint-react`).
- **Naming** uses `id-match` as an approximation of `@typescript-eslint/naming-convention`.
- Severity stays mostly `warn`, matching the ESLint package philosophy.

## Snapshots

Resolved rule maps for each preset are snapshotted under [`__snapshots__/`](./__snapshots__/):

```sh
npm run test:oxlint:snapshot
npm run test:oxlint:snapshot:update
```

If a snapshot fails after an Oxlint upgrade, follow [`review-config-snapshot.prompt.md`](./review-config-snapshot.prompt.md).
