# [TypeScript](https://www.typescriptlang.org/) config

## Installation

```sh
npm install typescript @peerigon/configs --save-dev
```

Requires TypeScript 6 or newer. How you install TypeScript 7 depends on whether you use ESLint — see [TypeScript 7](#typescript-7).

Then create a `tsconfig.json` just for type-checking next to your `package.json`:

```jsonc
{
  "extends": "@peerigon/configs/typescript",
  // You might want to adjust the following compilerOptions based on your project
  "compilerOptions": {
    // Our config only uses "es2024".
    // Depending on your project, you might need to add "dom" (and more).
    // "lib": ["es2024", "dom"],
    // -----------------------------------------------------------------
    // Our base config doesn't set skipLibCheck because it might hide
    // important type errors.
    // However, there are a lot of cases where you need to set skipLibCheck
    // because of conflicting library types.
    // If you want to learn more about the trade-offs,
    // see https://www.testim.io/blog/typescript-skiplibcheck/
    // "skipLibCheck": true,
    // -----------------------------------------------------------------
    // We recommend to use erasableSyntaxOnly for new projects because
    // it's a future-proof subset of TypeScript.
    // In existing projects, you probably need to turn this off.
    // "erasableSyntaxOnly": false,
  },
}
```

Recommended configuration in your `package.json` (using [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)):

```json
{
  "type": "module",
  "scripts": {
    "test": "run-p test:*",
    "test:types": "tsc"
  }
}
```

In case you're developing a library with a dedicated build process, we recommend to create a separate `tsconfig.build.json`:

```jsonc
{
  "extends": [
    // First extend your own config so that project specific configs are taken into account...
    "./tsconfig.json",
    // ...then apply the lib config partial
    "@peerigon/configs/typescript/lib",
    // ...or js-lib if you want to combine JSDoc type annotations with .js files
    // "@peerigon/configs/typescript/js-lib"
  ],
  "include": ["src"],
  "exclude": ["src/**/*.test.ts", "src/**/*.test.tsx", "src/tests/**/*"],
}
```

The lib partials set `rootDir` to `./src` so build output lands in `dist/` without an extra `src/` segment (required since TypeScript 6.0). Override `rootDir` in your build config if your sources live elsewhere.

With the following `package.json` `scripts`:

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc -p tsconfig.build.json",
    "test": "run-p test:*",
    "test:types": "tsc"
  }
}
```

## TypeScript 7

Our `tsconfig` presets work with TypeScript 7. Install path depends on your linter:

### Oxlint only (no ESLint)

Type-aware Oxlint uses `oxlint-tsgolint`, which embeds typescript-go and does **not** import the project’s `typescript` package. You can install TypeScript 7 normally:

```sh
npm install -D typescript@^7 oxlint oxlint-tsgolint@^7 @peerigon/configs
```

See also the [Oxlint setup](../oxlint/README.md).

### ESLint (with or without Oxlint)

TypeScript 7 does not ship a public compiler API yet, and [typescript-eslint](https://typescript-eslint.io/) still needs the 6.x API. Use Microsoft’s [side-by-side install](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0): keep the 6.x API under the name `typescript`, and add TS 7 for `tsc`:

```json
{
  "devDependencies": {
    "@typescript/native": "npm:typescript@^7.0.2",
    "typescript": "npm:@typescript/typescript6@^6.0.2"
  }
}
```

- `npx tsc` / `test:types` / `build` use TypeScript 7 via `@typescript/native`
- `import "typescript"` (ESLint / typescript-eslint) still resolves to the 6.x API
- Oxlint type-aware linting still uses embedded typescript-go; install `oxlint-tsgolint@^7` as usual

Do not install bare `typescript@7` as the only TypeScript package if you use our ESLint presets — typescript-eslint will fail without the 6.x API.

If you use [`typescript/js-lib`](#presets) with JSDoc/`checkJs`, TypeScript 7 tightened some JavaScript analysis rules compared to 6.x. Expect a few new diagnostics when you first switch `tsc` to 7; see the [TypeScript 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#javascript-differences).

## Presets

We export the following `tsconfig.json` presets. They can be used by extending `@peerigon/configs/<preset-name>`:

- `typescript`: Recommended base config for all modern TypeScript projects
- `typescript/lib`: Config partial for building TS libraries. Combine it with the `typescript` base config using [`extends`](https://www.typescriptlang.org/tsconfig/#extends).
- `typescript/js-lib`: Config partial for building JS libraries with [JSDoc type annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html). Combine it with the `typescript` base config using [`extends`](https://www.typescriptlang.org/tsconfig/#extends).
