# AGENTS.md

## Purpose of this repository

`@peerigon/configs` is a publishable package of shared development configs and guidance:

- ESLint presets, optional style packs, and library-specific rule sets
- Prettier configuration plus plugins for import sorting, JSDoc, package.json, CSS, and Tailwind ordering
- TypeScript base and library-focused `tsconfig` presets
- Semantic-release presets (including cross-publish)
- VSCode settings reference
- AI coding-agent rules and migration docs aligned with the same coding philosophy

The package philosophy is:

- optimize for readability first, refactorability second, writing convenience third
- keep formatting convention-driven and deterministic
- keep linting focused on correctness, security, modern idioms, and a11y
- keep type-checking strict enough for safe refactoring, while allowing local escape hatches when necessary

## Source of truth by folder

- `eslint/`: preset and rule composition source files
- `prettier/`: exported Prettier config
- `typescript/`: exported tsconfig JSON presets and helper glue
- `semantic-release/`: release preset exports
- `ai/`: agent styleguide/rules and migration guidance
- `.vscode/`: reference workspace/editor settings
- `tools/`: release/build helper scripts

Do not edit `dist/` manually (it is build output).

## How to work in this repo

### Package and runtime assumptions

- Package manager: `npm`
- Module format: ESM (`"type": "module"`)
- Main artifact model: source configs are authored in repo folders and exported via `package.json` `exports`

### Coding and change principles

- Keep changes minimal, localized, and backwards compatible unless breaking behavior is explicitly requested.
- Preserve published export paths and config names unless migration is clearly part of the task.
- Prefer extending recommended rule sets over bespoke one-off logic when possible.
- Align changes with repo philosophy: objective linting/type-safety improvements over subjective style churn.
- Keep examples/tests realistic and focused on expected diagnostics.

### Ignoring and generated files

- ESLint and Prettier conventions treat `**/*.generated.*` as ignored/generated.
- Do not hand-edit generated/demo artifacts unless the task is specifically about those artifacts.

## Validation workflow

Run targeted checks for touched scope first, then broader checks before finishing.

- Full validation:
  - `npm test`
  - `npm run build`
- Common focused checks:
  - `npm run test:lint`
  - `npm run test:format`
  - `npm run test:types`
  - `npm run test:exports`
- ESLint preset/style/rule fixture checks (if relevant):
  - `npm run test:presets:javascript`
  - `npm run test:presets:typescript`
  - `npm run test:presets:typescript-react`
  - `npm run test:styles:no-default-export`
  - `npm run test:styles:no-null`
  - `npm run test:styles:prefer-array-shorthand`
  - `npm run test:styles:prefer-interface`
  - `npm run test:styles:jsx-no-literals`
  - `npm run test:rules:vitest`

If your change affects publishing behavior, also verify:

- `.releaserc.json` preset extension behavior
- workflow expectations in `.github/workflows/test-and-release.yml`

## Editing guidance by area

### ESLint changes (`eslint/`)

- Keep presets composable and avoid combining multiple presets into one consumer entrypoint by default.
- If you change or add ESLint rules, add or update tests for them whenever possible.
- Ensure fixture tests in matching `*.test` folders demonstrate intended pass/fail cases.
- For style rules (`eslint/styles/*`), document trade-offs in comments/docs when behavior is opinionated.
- Preserve test relaxations where intended; strictness is context-dependent (app code vs tests).

### Prettier changes (`prettier/`)

- Stay close to Prettier defaults unless there is strong objective value.
- Any plugin/order change must be deterministic and reduce review noise.

### TypeScript config changes (`typescript/`, root `tsconfig.json`)

- Keep base configs strict and modern.
- Treat `skipLibCheck` and similar loosening options as explicit trade-offs, not defaults.
- Maintain clear separation between base checking config and library build partials.

### Semantic-release changes (`semantic-release/`, `.releaserc.json`)

- Preserve cross-publish behavior unless task explicitly changes release targets.
- Keep CI release permissions and provenance expectations in sync with preset behavior.

### AI guidance changes (`ai/`)

- Keep AI guidance consistent with coding/linting/type-checking philosophy in root README.
- Prefer concise, enforceable rules over long ambiguous prose.

## Documentation expectations

When behavior changes, update the nearest relevant README:

- root `README.md` for package-level behavior/philosophy
- area README (`eslint/README.md`, `prettier/README.md`, `typescript/README.md`, `semantic-release/README.md`, `.vscode/README.md`, `ai/README.md`) for setup or usage changes

Keep docs practical and copy-paste friendly.

## Release and CI context

- CI builds and tests on PR/push.
- Releases are branch-gated (`main`/`beta`) and semantic-release-driven.
- Prefer conventional commit messages when asked to prepare commits for release automation.

## Quick task checklist for agents

- Understand which config area is affected.
- Implement the smallest correct change.
- Update/extend fixtures/tests for behavioral changes.
- Run focused checks, then full checks if impact is broad.
- Update relevant README(s) when behavior/setup changes.
- Leave repository in a releasable state.
