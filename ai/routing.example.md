# Routing example

Two pieces: a routing table in the root `AGENTS.md`, and an `AGENTS.md` in each directory that has rules of its own.

## Root `AGENTS.md`

```md
## Where to look

Read the doc for the area you touch before exploring. Directories with their own `AGENTS.md` carry the rules and traps of that code.

| Area                      | Start with                                |
| ------------------------- | ----------------------------------------- |
| Domain terms              | `CONTEXT.md`                              |
| Why something is this way | `docs/decisions/` (one file per decision) |
| API endpoints             | `src/api/AGENTS.md`                       |
| Database and migrations   | `docs/database.md`                        |
| Tests                     | `docs/testing.md`                         |

## Keeping docs current

Record what you learn next to the code it concerns: a directory's rule in its `AGENTS.md`, a decision in a new file in `docs/decisions/`, an area's how-to in the doc above. Delete what your change makes stale.
```

## `src/api/AGENTS.md`

```md
# API

Route handlers in `routes/`, one file per resource; shared validation in `lib/validate.ts`.

- Every handler validates its input with the resource's schema before touching the database.
- Pagination is cursor-based; the cursor is opaque to clients, so never expose row ids in it.
```
