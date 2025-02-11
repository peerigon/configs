# [Prettier](https://prettier.io/) config

## Installation

```sh
npm install prettier @peerigon/configs --save-dev
```

Then create a `prettier.config.js` next to your `package.json`:

```js
export { default } from "@peerigon/configs/prettier";
```

Recommended configuration in your `package.json` (using [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)):

```json
{
  "type": "module",
  "scripts": {
    "test": "run-p test:*",
    "test:format": "prettier --check ."
  }
}
```

## Configuration

Our config is entirely based on Prettier's default config. Besides that, it also:

- auto-sorts `import` statements
- formats JSDoc comments
- formats `package.json`
- formats and sorts CSS properties
- sorts Tailwind CSS class names
