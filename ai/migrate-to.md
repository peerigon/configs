I want to migrate this module to use @peerigon/configs. Install it first (`npm install --save-dev @peerigon/configs`), then follow the instructions to set up the configs:

- [ESLint](https://github.com/peerigon/configs/blob/main/eslint/README.md)
- [Oxlint](https://github.com/peerigon/configs/blob/main/oxlint/README.md) (optional; best-effort alternative to ESLint — ask before switching)
- [Oxfmt](https://github.com/peerigon/configs/blob/main/oxfmt/README.md)
- [TypeScript](https://github.com/peerigon/configs/blob/main/typescript/README.md)
- [Semantic release](https://github.com/peerigon/configs/blob/main/semantic-release/README.md)
- [VSCode](https://github.com/peerigon/configs/blob/main/.vscode/README.md)

These links point at `main`. If the installed version (`node_modules/@peerigon/configs/package.json`) is older, replace `main` with its `v<version>` tag so the instructions match the installed configs.

Before writing code, plan the migration first. The migration should be done in granular steps, each step with its own PR.

## Step 1: Add VSCode setting

Read https://github.com/peerigon/configs/blob/main/.vscode/README.md for instructions how to add the vscode settings

## Step 2: (Libraries only) Migrate semantic-release

Only do this step if the project is a library (i.e. the `package.json` contains a `main` or `exports` field). Read https://github.com/peerigon/configs/blob/main/semantic-release/README.md for instructions how to configure semantic-release.

## Step 3: Migrate formatter to Oxfmt

Read https://github.com/peerigon/configs/blob/main/oxfmt/README.md for instructions how to configure Oxfmt. Remove Prettier (its dependencies, config and ignore files) if present. Before finishing the PR, format all files with Oxfmt.

## Step 4: Migrate ESLint and TypeScript

Read https://github.com/peerigon/configs/blob/main/typescript/README.md for instructions how to configure TypeScript. Run a type check after configuring TypeScript correctly. Read https://github.com/peerigon/configs/blob/main/eslint/README.md for instructions how to configure ESLint. Run the linter after configuring ESLint correctly.

## Step 5: Add the coding-agent rules

Read `node_modules/@peerigon/configs/ai/README.md` and add the rules snippet to the project's `AGENTS.md` (create it if missing). Do not add a `CLAUDE.md`. Claude Code ignores `AGENTS.md` while a `CLAUDE.md` exists, so if the project has one, move its content into `AGENTS.md` and delete the `CLAUDE.md`.

## Step 6 (optional): Oxlint

Only if the user asked to try Oxlint. Read https://github.com/peerigon/configs/blob/main/oxlint/README.md and https://github.com/peerigon/configs/blob/main/oxlint/GAPS.md. Install `oxlint` and `oxlint-tsgolint`, add an `oxlint.config.ts` that extends a preset, and keep ESLint until gaps are acceptable.
