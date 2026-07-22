I want to migrate this module to use @peerigon/configs. Follow the instructions to install the configs:

- [ESLint](https://github.com/peerigon/configs/blob/main/eslint/README.md)
- [Oxlint](https://github.com/peerigon/configs/blob/main/oxlint/README.md) (optional; best-effort alternative to ESLint — ask before switching)
- [Prettier](https://github.com/peerigon/configs/blob/main/prettier/README.md)
- [Oxfmt](https://github.com/peerigon/configs/blob/main/oxfmt/README.md) (optional; best-effort _replacement_ for Prettier — ask before switching; do not run both)
- [TypeScript](https://github.com/peerigon/configs/blob/main/typescript/README.md)
- [Semantic release](https://github.com/peerigon/configs/blob/main/semantic-release/README.md)
- [VSCode](https://github.com/peerigon/configs/blob/main/.vscode/README.md)

Before writing code, plan the migration first. The migration should be done in granular steps, each step with its own PR.

## Step 1: Add VSCode setting

Read https://github.com/peerigon/configs/blob/main/.vscode/README.md for instructions how to add the vscode settings

## Step 2: (Libraries only) Migrate semantic-release

Only do this step if the project is a library (i.e. the `package.json` contains a `main` or `exports` field). Read https://github.com/peerigon/configs/blob/main/semantic-release/README.md for instructions how to configure semantic-release.

## Step 3: Migrate prettier

Read https://github.com/peerigon/configs/blob/main/prettier/README.md for instructions how to configure prettier. Before finishing the PR, format all files with the new prettier configuration.

## Step 4: Migrate ESLint and TypeScript

Read https://github.com/peerigon/configs/blob/main/typescript/README.md for instructions how to configure TypeScript. Run a type check after configuring TypeScript correctly. Read https://github.com/peerigon/configs/blob/main/eslint/README.md for instructions how to configure ESLint. Run the linter after configuring ESLint correctly.

## Step 5 (optional): Oxlint

Only if the user asked to try Oxlint. Read https://github.com/peerigon/configs/blob/main/oxlint/README.md and https://github.com/peerigon/configs/blob/main/oxlint/GAPS.md. Install `oxlint` and `oxlint-tsgolint`, add an `oxlint.config.js` that extends a preset, and keep ESLint until gaps are acceptable.

## Step 6 (optional): Oxfmt

Only if the user asked to switch to Oxfmt. Read https://github.com/peerigon/configs/blob/main/oxfmt/README.md and https://github.com/peerigon/configs/blob/main/oxfmt/GAPS.md. Install `oxfmt`, add an `oxfmt.config.mts` that re-exports the config, remove Prettier (and its config), and point `test:format` at `oxfmt --check .`. Do not run Prettier and Oxfmt together.
