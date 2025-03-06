# configs

**Best practice configs for [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/) & friends. By [Peerigon](https://www.peerigon.com/).**

[![Version on NPM](https://img.shields.io/npm/v/@peerigon/configs?style=for-the-badge)](https://www.npmjs.com/package/@peerigon/configs)
[![Semantically released](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release)
[![Monthly downloads on NPM](https://img.shields.io/npm/dm/@peerigon/configs?style=for-the-badge)](https://www.npmjs.com/package/@peerigon/configs)<br>
[![License](https://img.shields.io/npm/l/@peerigon/configs?style=for-the-badge)](./LICENSE)

## Installation

```sh
npm install @peerigon/configs  --save-dev
```

Also checkout the instructions for each respective config:

- [ESLint](/eslint/README.md)
- [Prettier](/prettier/README.md)
- [TypeScript](/typescript/README.md)
- [Semantic release](/semantic-release/README.md)
- [VSCode](/.vscode/README.md)

## Philosophy

Linting, formatting and type-checking rules are always a balance between:

- ease of reading
- ease of refactoring
- ease of writing.

We think that:

- code is read more often than refactored
- and refactored more often than written from scratch.

Our configs have been designed with these assumptions in mind.

### Formatting

Formatting should follow the community standard. Our config is therefore based on Prettier's default config. Besides that it also:

- auto-sorts `import` statements
- formats JSDoc comments
- formats `package.json`
- formats and sorts CSS properties
- sorts Tailwind CSS class names

This makes git diffs smaller and reviewing them more focussed.

### Linting

Linting should mostly catch bugs in the control flow and prevent security issues. Furthermore, it should enforce a modern, idiomatic and consistent code style that is easy to read and to refactor.

However, it should **not** nit-pick on formatting or favor certain language features where other options are equally ok. Every rule must be legitimized by objective criteria. A simple “I find it easier to read” is not enough.

Our linting rules:

- are mostly based on recommended sets
- use type information to catch logic bugs
- highlight a11y problems
- are less strict in tests

### Type-checking

Type-checking should be rather strict because it is the foundation for safe and sound refactorings. If type-checking is too loose, it may lull the developer into a false sense of security. It should also prevent out-of-bounds errors when accessing arrays or objects.

For highly dynamic code or incompatible types, local exceptions to type safety and escape hatches need to be possible.

## License

MIT

## Sponsors

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://peerigon.com)
