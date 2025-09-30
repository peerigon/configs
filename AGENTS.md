# AGENTS

1. Install deps: `npm i` (project uses npm). Build: `npm run build` (clears + tsc).
2. Full test suite: `npm test` (runs lint/style/type + all ESLint preset/style tests). Run single ESLint preset/style test: `npm run test:presets:javascript` (or any other listed script) inside repo. Type check only: `npm run test:types`. Formatting check: `npm run test:format`. Lint whole repo: `npm run test:lint`.
3. For an individual style rule directory test: `cd eslint/styles/<rule>.test; eslint --max-warnings 0 .` (same pattern for presets under `eslint/presets/*/*.test`).
4. Prefer small, stacked PRs; break work into explicit TODOs (see ai/rules.mdc). Co-locate unit tests as `*.test.ts[x]` next to sources.
5. Formatting: Prettier defaults; imports auto-sorted; JSDoc, package.json. Do not hand-format—run Prettier.
6. Imports: ESM; include file extensions (`.ts`); avoid default exports/imports and barrel re-export files (unless package entry). Prefer named exports.
7. Naming: camelCase (vars/functions), PascalCase (classes/enums/React components), SCREAMING_SNAKE_CASE (build-time consts), kebab-case (files, CSS classes, ids). Use descriptive names; abbreviations only when common (Api). Treat abbreviations as words (ApiClient, not APIClient).
8. Types: Strict TS; prefer `type` over `interface` except for classes; explicit return types for exported non-trivial functions; prefer `Array<Item>` over `Item[]`; use `unknown` before `any`; use descriptive generic parameter names (not single letters); prefer `satisfies` and inferred utility types.
9. Syntax: Prefer `const`; functional & immutable style; prefer `undefined` over `null`; use optional chaining `?.` and `??`; early returns to reduce nesting.
10. Functions: Arrow functions by default; use object params when >2 params; keep pure and focused.
11. Error handling: Descriptive errors with context (actual vs expected); minimal try/catch—only where you can act; consider Result types for recoverable failures.
12. Testing: Write as few tests as necessary while covering behavior: happy path, edges, errors. Each `it()` tests one behavior. Prefer `.toMatchObject()`; use inline snapshot for error messages. Type-focused tests allowed for inference checks.
13. Prefer explicit over implicit; colocate related code; keep logical units together (see ai/rules.mdc universal principles).
14. Do not disable lint rules broadly; use local, minimal overrides when justified with comments.
15. After changes: run `npm run test:lint && npm run test:types && npm run test:format`; fix before commit. Pre-commit hooks run automatically (husky + lint-staged).
16. Never introduce default exports, `any` without justification, or stylistic churn; preserve existing conventions and update docs/tests alongside code.
