# [Semantic release](https://semantic-release.gitbook.io/) config

## Installation

```sh
npm install @peerigon/configs
```

Then create a `.releaserc.json` next to your `package.json`:

```json
{
  "extends": "@peerigon/configs/semantic-release"
}
```

Recommended configuration in your `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "release": "semantic-release"
  },
  "publishConfig": {
    "access": "public", // only if the package is supposed to be public
    "provenance": true
  }
}
```

Recommended Github action:

```yaml
name: 🧪 Test and 🚀 Release

on:
  push:
    branches:
      - main
      - beta
  pull_request: {}

jobs:
  test-and-release:
    runs-on: ubuntu-latest
    if: "!contains(github.event.head_commit.message, '[skip ci]')"

    permissions:
      # Necessary for semantic-release
      contents: write
      issues: write
      pull-requests: write
      # Necessary for npm publish --provenance
      # See https://docs.npmjs.com/generating-provenance-statements#example-github-actions-workflow
      id-token: write

    steps:
      # ...
      # Install and build steps
      # ...
      - name: 🚀 Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: |
          npm run release
```

## Configuration

We export the following `.releaserc.json` presets. They can be used by extending `@peerigon/configs/<preset-name>`:

- `semantic-release`: Recommended config for publishing a library to a single registry (according to your `.npmrc`).
- `semantic-release/cross-publish`: Config for publishing a library both to NPM _and_ Github
