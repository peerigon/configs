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

For `semantic-release/cross-publish`, Github publishing defaults to:

- `true` for scoped packages (`${process.cwd()}/package.json` name starts with `@`)
- `false` for unscoped packages

## Verifying the publishable package

During `verifyConditions`, the preset checks that your package is correctly
configured for publishing before anything is tagged or published. It runs
[`publint`](https://publint.dev/) (validates `package.json` entries, `exports`,
`files`, …) and [`@arethetypeswrong/cli`](https://arethetypeswrong.github.io/)
(validates that exports resolve to correct type declarations).

The exact same check is exposed as the `verify-publishable` bin, so you
can run it as part of your own test suite. It operates on the built package, so
make sure `dist/` (or whatever you publish) exists first:

```jsonc
{
  "scripts": {
    "test:publishable": "verify-publishable",
  },
}
```

## Notes

This preset follows semantic-release best practices and does not commit release artifacts
back to the repository (for example, no `CHANGELOG.md` commit during release).
We used to commit `CHANGELOG.md`, but that adds significant complexity for projects
with branch protection rules.

To prevent stale changelogs, releases fail when a `CHANGELOG.md` file exists in the
repository. You can bypass this check by setting
`SEMANTIC_RELEASE_ALLOW_CHANGELOG=true`.

## Commit analysis: `conventionalcommits` preset

The preset uses the `conventionalcommits` preset for both the commit analyzer and the release notes
generator instead of semantic-release's default `angular` preset. The only functional difference for
releases is the `!` shorthand:

| Commit message                                       | `angular` (default) | `conventionalcommits` |
| ---------------------------------------------------- | ------------------- | --------------------- |
| `feat(scope)!: drop Node 20`                         | **no release**      | major                 |
| `fix!: change default`                               | **no release**      | major                 |
| `feat: x` + footer `BREAKING CHANGE: ...`            | major               | major                 |
| `feat!: x` + footer `BREAKING-CHANGE: ...`           | **no release**      | major                 |
| `feat: x` + heading `## BREAKING CHANGE` in the body | minor               | minor                 |
| `fix: x` / `perf: x`                                 | patch               | patch                 |
| `refactor:`, `docs:`, `chore:`, `build:`, `ci:`      | no release          | no release            |

Note that a heading like `## BREAKING CHANGE` never counts. The footer has to be a paragraph that starts
with `BREAKING CHANGE:` at the beginning of a line. Because squash merges use the PR title as the commit
header and the PR description as the body, this applies to PR titles and descriptions as well.

The release notes also look different:

- `BREAKING CHANGES` is rendered as `### ⚠ BREAKING CHANGES` and listed first, including `!` commits
  (`* **x:** drop Node 20`). With `angular`, only commits with a footer show up there.
- Section order is Features, Bug Fixes, Performance Improvements, Reverts (`angular`: Bug Fixes first).
- The version header is `## [2.0.0]` (`angular`: `# [2.0.0]` for minor/major and `## [2.0.0]` for patches).

Still add a `BREAKING CHANGE:` footer to every breaking change: it carries the migration instructions that
end up in the release notes. Projects with their own `.releaserc` that keep the `angular` preset ignore `!`.
