# [TypeScript](https://www.typescriptlang.org/) config

## Installation

```sh
npm install typescript @peerigon/configs --save-dev
```

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

with the following `package.json` `scripts`:

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

## Presets

We export the following `tsconfig.json` presets. They can be used by extending `@peerigon/configs/<preset-name>`:

- `typescript`: Recommended base config for all modern TypeScript projects
- `typescript/lib`: Config partial for building TS libraries. Combine it with the `typescript` base config using [`extends`](https://www.typescriptlang.org/tsconfig/#extends).
- `typescript/js-lib`: Config partial for building JS libraries with [JSDoc type annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html). Combine it with the `typescript` base config using [`extends`](https://www.typescriptlang.org/tsconfig/#extends).
