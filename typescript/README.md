# [TypeScript](https://www.typescriptlang.org/) config

## Installation

```sh
npm install typescript @peerigon/configs --save-dev
```

Then create a `tsconfig.json` just for type-checking next to your `package.json`:

```json
{
  "extends": "@peerigon/configs/typescript"
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

```json
{
  "extends": ["./tsconfig.json", "@peerigon/configs/typescript/lib"],
  "include": ["src"],
  "exclude": ["src/**/*.test.ts", "src/tests/**/*.ts"]
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
- `typescript/lib`: Config for building TS libraries
- `typescript/js-lib`: Config for building JS libraries with [JSDoc type annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).
