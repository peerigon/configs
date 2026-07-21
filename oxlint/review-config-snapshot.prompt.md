# Review a failing Oxlint config snapshot

Use this prompt when [`config-snapshot.test.js`](./config-snapshot.test.js) fails (run via `npm run test:oxlint:snapshot`).

A failure means the resolved rule set of one or more Oxlint presets changed — often because `oxlint` / `oxlint-tsgolint` was upgraded, a JS plugin changed, or we edited `oxlint/rules/*`. The committed JSON in [`__snapshots__/`](./__snapshots__/) no longer matches. Your job is to figure out **what changed and whether we want it**, not to blindly accept the new output.

## How these snapshots work

Unlike ESLint’s `calculateConfigForFile`, Oxlint `--print-config` dumps the root config (categories expanded into `rules`, with `overrides` still separate). The test then applies matching overrides per representative file path (via `picomatch`) so each snapshot entry looks like a per-file rule map — same shape as the ESLint snapshots.

Severities use Oxlint strings (`warn` / `error` / `allow` / `off`), not ESLint’s `0` / `1` / `2`.

## Our philosophy (read before judging)

See the root [`README.md`](../README.md). In short:

- **Correctness first.** Prefer catching control-flow bugs, security issues, and a11y problems.
- **Moderate, opinionated consistency.** Easy to read and refactor.
- **No pedantic rules.** Every rule needs an objective justification.
- **Tests may be less strict** than app code.
- Oxlint is **best-effort** vs ESLint — see [`GAPS.md`](./GAPS.md). Do not “fix” a gap by silently accepting a native regression unless it is intentional.

## Steps

1. **Regenerate the snapshots** so you can see the diff:

   ```sh
   npm run test:oxlint:snapshot:update
   ```

2. **Review the diff** (`git diff oxlint/__snapshots__/`). Classify each change:
   - **Rules removed / turned to `allow`/`off`** — Intentional? Or did a native rule disappear / get renamed?
   - **Severity changes** (`error` ↔ `warn` ↔ `allow`) — Still match our warn-first philosophy and test relaxations?
   - **Option changes** — Stricter, looser, or more pedantic?
   - **New rules** (often from category expansion after an Oxlint upgrade) — Keep or turn off in the relevant `oxlint/rules/*` source?

3. **Decide per change**
   - **Keep** if it improves correctness / security / a11y / sensible consistency.
   - **Turn off** in `oxlint/rules/*` or styles (not by hand-editing the snapshot) if pedantic or against philosophy.
   - If a JS-plugin rule can move to native, prefer native and update [`GAPS.md`](./GAPS.md) (see [`improve-parity.prompt.md`](./improve-parity.prompt.md)).

4. **Re-run** `npm run test:oxlint:snapshot:update` after source edits, then `npm run test:oxlint:snapshot`.

5. **Implement** the smallest reasonable change and keep snapshots in sync.

## Finally

Summarize removed/disabled rules, new rules (keep/disable + one-line why), and anything unsure. **Ask the user for final judgement before committing.**
