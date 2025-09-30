# [ESLint](https://eslint.org/) config

## Installation

```sh
npm install eslint @peerigon/configs --save-dev
```

Then create a `eslint.config.js` next to your `package.json`:

```js
// We have a couple of presets for popular setups, such as typescript-react or typescript-node
// See "Presets"
import typescriptNodePreset from "@peerigon/configs/eslint/presets/typescript-node";
// You can also choose from a bunch of optional coding styles
// See "Styles"
import stylesNoDefaultExport from "@peerigon/configs/eslint/styles/no-default-export";

export default [
  ...typescriptNodePreset,
  // The idiomatic way to disable rules in certain directories in ESLint>=9.x is
  // to map() over them and add `ignores` to the rule objects
  ...stylesNoDefaultExport.map((config) => ({
    ...config,
    ignores: [...(config.ignores ?? []), "src/some/folder/*.ts"],
  })),
];
```

Recommended configuration in your `package.json` (using [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)):

```json
{
  "type": "module",
  "scripts": {
    "test": "run-p test:*",
    "test:lint": "eslint --max-warnings 0 --cache ."
  }
}
```

## Presets

Presets bundle all relevant rules into one `import`. They can be imported as `@peerigon/configs/eslint/presets/<preset-name>`. They **should not** be combined with each other.

- `typescript-react`: Rules for React projects written in TypeScript
- `typescript-node`: Rules for TypeScript apps that are supposed to run in Node.js
- `typescript`: Rules for all other TypeScript projects
- `javascript-browser`: Rules for JavaScript apps running in a browser (e.g. in combination with [JSDoc type annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html))
- `javascript-node`: Rules for JavaScript apps running in Node.js
- `javascript`: Rules for all other JavaScript projects

## Styles

We acknowledge that there are certain rules where there are no actual pros and cons or where there is no clear winner. You just have to decide for one style and stick with it. We also know that some rules make sense in one project, but don't make sense in another project. Pick these rules if they make sense for you in your project. They can be imported as `@peerigon/configs/eslint/styles/<style-name>`.

### `no-default-export`

<details>
Forbids usage of `export default`. When using default exports, it becomes harder to name classes or functions consistently throughout the codebase since every module can pick its own name for the imported thing. Nicholas C. Zakas, the creator of ESLint, wrote [an article with more compelling arguments why he stopped using `export default`](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/).

You may want to disable this rule in situations where a default export is required, for instance when using [React's `lazy()`](https://react.dev/reference/react/lazy).

</details>

### `no-null`

<details>
Forbids the usage of `null`. In a codebase it's often better to use a single non-value to represent _the absence of a value_. With the rise of default parameters and destructuring defaults, JavaScript developed a clear tendency towards `undefined`. [This issue](https://github.com/peerigon/eslint-config-peerigon/issues/71) summarizes the arguments (and trade-offs) of **null vs. undefined**.

**👉 Hint:** If you use this rule, you will probably still need a single `null` value which you can refer to whenever you need to use `null` because of third-party code:

```js
// eslint-disable-next-line no-null/no-null
export const NULL = null;
```

</details>

### `prefer-interface`

<details>
Prefer TypeScript's `interface` over `type`:

```ts
interface SomeObject {
  someProp: boolean;
}
```

instead of

```ts
type SomeObject = {
  someProp: boolean;
};
```

</details>

### `prefer-array-shorthand`

<details>
Enforces TypeScript arrays to use the shorthand array-style instead of the generic style:

```ts
const foo: string[] = [];
```

instead of

```ts
const foo: Array<string> = [];
```

</details>

### `jsx-no-literals`

<details>
Use this style if you're using i18n. It prevents people from putting raw strings in components.
It disallows this:

```jsx
const Hello = <div>test</div>;
```

As an escape hatch, this is still allowed:

```jsx
const Hello = <div>{"test"}</div>;
```

</details>

## Library specific rules

There are specific rules for:

- [Vitest](https://vitest.dev/)

```js
import typescript from "@peerigon/configs/eslint/presets/typescript";
import vitest from "@peerigon/configs/eslint/rules/vitest";

export default [...typescript, ...vitest];
```
