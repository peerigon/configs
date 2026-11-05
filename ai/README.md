# AI

Contains resources and styleguides for coding agents.

## Coding agent rules

[`rules.mdc`](./rules.mdc) contains Peerigon's universal coding principles and links to language-specific guides.

Put this in your project-specific rules file (`AGENTS.md`, `.cursor/rules.mdc`, etc.):

```md
**Important**: You **must** follow [these rules](./node_modules/@peerigon/configs/ai/rules.mdc) and its language-specific rules referenced in that file.

@node_modules/@peerigon/configs/ai/rules.mdc
```

The `@` line makes Claude Code load the rules (and the language-specific guides they import) into context at session start. A plain Markdown link is not enough: agents rarely open linked files on their own. Other agents ignore the `@` line and follow the link. Adjust the path if your `node_modules` is not next to the rules file (e.g. in monorepo packages).

Dependencies must be installed before the agent session starts. Without `node_modules` (e.g. in a fresh clone or a new worktree), the import silently loads nothing. Install them in your workspace setup script or before you start the agent.

Claude Code (v2.1.277 or later) reads `AGENTS.md` and expands its `@` imports, but only while no `CLAUDE.md` or `CLAUDE.local.md` exists in the working directory or above it. Keep one `AGENTS.md` and no `CLAUDE.md`, so the per-directory `AGENTS.md` files load too.

For large repositories, route agents from a short "Where to look" table in the root `AGENTS.md` and keep rules of one directory in that directory's `AGENTS.md`, instead of one central routing document every change has to edit. See [`routing.example.md`](./routing.example.md).

## Migration Guide

[`migrate-to.md`](./migrate-to.md) provides step-by-step instructions for coding agents for migrating projects to use `@peerigon/configs`.

## Oxlint parity

When improving Oxlint configs toward ESLint parity, agents should follow [`../oxlint/improve-parity.prompt.md`](../oxlint/improve-parity.prompt.md) and update [`../oxlint/GAPS.md`](../oxlint/GAPS.md).
