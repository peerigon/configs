# Scripts

Utilities used by this repo (e.g. in pre-commit hooks).

## sync-node-version.js

Syncs the Node version from `package.json` (`@types/node`) into existing version files so they stay in sync:

- **.nvmrc** (nvm)
- **.node-version** (fnm, asdf-nodejs, nodenv)
- **.tool-versions** (asdf; only the `nodejs` line is updated or added)

Only files that already exist are written; the script never creates new ones.

**Intended use:** run during pre-commit (e.g. via husky + lint-staged) so that when you bump `@types/node`, the version files are updated automatically and don’t drift out of sync.
