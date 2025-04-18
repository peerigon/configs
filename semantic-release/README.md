# [Semantic release](https://semantic-release.gitbook.io/) config

## Installation

```sh
npm install semantic-release @peerigon/configs --save-dev
```

Then create a `.releaserc.json` next to your `package.json`:

```json
{
  "extends": "@peerigon/configs/semantic-release"
}
```

Recommended configuration in your `package.json`:

```jsonc
{
  "type": "module",
  "scripts": {
    "release": "semantic-release",
  },
  "publishConfig": {
    // Only if the package is supposed to be public
    "access": "public",
    "provenance": true,
  },
}
```

`"provenance": true` will generate [provenance statements](https://docs.npmjs.com/generating-provenance-statements) in case your Github actions has the correct permissions (see below).

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
      # packages: write is only necessary if you want to publish to Github
      packages: write

    steps:
      # ...
      # Install and build steps
      # ...
      - name: 🚀 Release
        env:
          # GITHUB_TOKEN is only necessary if you want to publish to Github
          # GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: |
          npm run release
```

## Configuration

We export the following `.releaserc.json` presets. They can be used by extending `@peerigon/configs/<preset-name>`:

- `semantic-release`: Recommended config for publishing a library to a single registry (according to your `.npmrc`).
- `semantic-release/cross-publish`: Config for publishing a library both to NPM, JSR _and_ Github
