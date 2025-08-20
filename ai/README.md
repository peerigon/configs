# AI

Contains resources and styleguides for coding agents.

## Coding agent rules

[`rules.mdc`](./rules.mdc) contains Peerigon's universal coding principles and links to language-specific guides.

Put this in your project-specific rules file (like `CLAUDE.md`, `.cursor/rules.mdc`, etc.):

```md
**Important**: You **must** follow [these rules](./node_modules/@peerigon/configs/ai/rules.mdc) and its language-specific rules referenced in that file.
```

## Migration Guide

[`migrate-to.md`](./migrate-to.md) provides step-by-step instructions for coding agents for migrating projects to use `@peerigon/configs`.
