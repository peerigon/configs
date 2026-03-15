# AI

Contains resources and styleguides for coding agents.

## Coding agent rules

[`rules.mdc`](./rules.mdc) contains Peerigon's universal coding principles and links to language-specific guides.

Put this in your project-specific rules file (like `CLAUDE.md`, `.cursor/rules.mdc`, etc.):

```md
**Important**: You **must** follow [these rules](./node_modules/@peerigon/configs/ai/rules.mdc) and its language-specific rules referenced in that file.
```

For large repositories, we recommend maintaining a repo-level routing document at `docs/agent-routing.md` to help agents find the right entrypoints quickly.
You can start from [`agent-routing.example.md`](./agent-routing.example.md) and adapt it to your needs.

## Migration Guide

[`migrate-to.md`](./migrate-to.md) provides step-by-step instructions for coding agents for migrating projects to use `@peerigon/configs`.
