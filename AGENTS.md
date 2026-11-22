# AGENTS.md

`@peerigon/configs` publishes shared ESLint, Oxlint, Oxfmt, TypeScript and semantic-release configs, plus rules for AI coding agents (`ai/`). Source configs live in the area folders and are exported via `package.json` `exports` (built into `dist/`).

Philosophy: optimize for readability first, refactorability second, writing convenience third. Formatting is convention-driven and deterministic; linting focuses on correctness, security, modern idioms, and a11y; type-checking is strict enough for safe refactoring, with local escape hatches.

This repo follows its own agent rules, with one difference: it is a JavaScript repo, so write `.js` files with JSDoc types (type-checked by `npm run test:types`), not `.ts`. Where the rules conflict with this repo's lint config (e.g. it enforces function declarations), the lint config wins.

@ai/rules.mdc

## Where to look

Read the doc for the area you touch before exploring. Directories with their own `AGENTS.md` carry the rules and traps of that code.

| Area                          | Start with                                                                |
| ----------------------------- | ------------------------------------------------------------------------- |
| ESLint presets, rules, styles | `eslint/AGENTS.md`, `eslint/README.md`                                    |
| Oxlint presets and parity     | `oxlint/AGENTS.md`, `oxlint/GAPS.md`                                      |
| Oxfmt config                  | `oxfmt/AGENTS.md`, `oxfmt/README.md`                                      |
| TypeScript presets            | `typescript/AGENTS.md`, `typescript/README.md`                            |
| Semantic-release presets      | `semantic-release/AGENTS.md`, `.releaserc.json`, `.github/workflows/`     |
| AI agent rules (`ai/`)        | `ai/README.md`; the whole folder is published, so it holds no `AGENTS.md` |
| VSCode reference settings     | `.vscode/README.md`                                                       |
| Package-level docs            | `README.md`                                                               |

## Working rules

- `dist/` is build output; never edit it by hand. `**/*.generated.*` files are generated too.
- Keep changes backwards compatible and preserve published export paths and config names unless the task is a breaking change.
- Prefer extending recommended rule sets over bespoke one-off logic.
- Prefer objective linting and type-safety improvements over subjective style churn.
- `ai/` is consumer-facing: keep it consistent with the root README philosophy and with the lint presets' defaults, and prefer concise, enforceable rules. Links in `ai/` must resolve inside the published package (`files` in `package.json`: `dist`, `ai`, `README.md`).
- When behavior or setup changes, update the nearest README.

## Validation

Run the focused `test:*` script for the area you touched (see `package.json` and the area's `AGENTS.md`), then before finishing:

- `npm test`
- `npm run build`

## Release and CI

CI builds and tests on PRs and pushes. Releases are semantic-release-driven and only run from `main` and `beta`, so commit messages and squash-merged PR titles must be Conventional Commits.
