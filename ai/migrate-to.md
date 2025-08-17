I want to migrate this module to use @peerigon/configs. Follow the instructions to install the configs:

- [ESLint](https://github.com/peerigon/configs/blob/main/eslint/README.md)
- [Prettier](https://github.com/peerigon/configs/blob/main/prettier/README.md)
- [TypeScript](https://github.com/peerigon/configs/blob/main/typescript/README.md)
- [Semantic release](https://github.com/peerigon/configs/blob/main/semantic-release/README.md)
- [VSCode](https://github.com/peerigon/configs/blob/main/.vscode/README.md)

Before writing code, plan the migration first. The migration should be done in 4 granular steps, each step with its own PR.

## Step 1: Add VSCode setting

Read https://github.com/peerigon/configs/blob/main/.vscode/README.md for instructions how to add the vscode settings

## Step 2: Migrate semantic-release (Libraries only)

Only do this step if the project is a library (i.e. the `package.json` contains a `main` or `exports` field). Read https://github.com/peerigon/configs/blob/main/semantic-release/README.md for instructions how to configure semantic-release.

## Step 3: Migrate prettier

Read https://github.com/peerigon/configs/blob/main/prettier/README.md for instructions how to configure prettier. Before finishing the PR, format all files with the new prettier configuration.

## Step 4: Migrate ESLint and TypeScript

Read https://github.com/peerigon/configs/blob/main/typescript/README.md for instructions how to configure TypeScript. Run a type check after configuring TypeScript correctly. Read https://github.com/peerigon/configs/blob/main/eslint/README.md for instructions how to configure ESLint. Run a type check after configuring TypeScript correctly.
