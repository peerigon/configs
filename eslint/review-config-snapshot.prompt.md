# Review a failing ESLint config snapshot

Use this prompt when [`config-snapshot.test.js`](./config-snapshot.test.js) fails (run via `npm run test:snapshot`).

A failure means the resolved rule set of one or more presets changed, almost always because an ESLint plugin or `typescript-eslint` was upgraded. The committed JSON in [`__snapshots__/`](./__snapshots__/) no longer matches what the presets resolve to. Your job is to figure out **what changed and whether we want it**, not to blindly accept the new output.

## Our philosophy (read before judging)

See the root [`README.md`](../README.md). In short:

- **Correctness first.** We mostly want to catch control-flow bugs, security issues, and a11y problems, ideally using type information.
- **Moderate, opinionated consistency.** A consistent, modern, idiomatic style that is easy to read and refactor is good.
- **No pedantic rules.** We do **not** want stylistic nitpicks or rules that favor one feature over an equally fine alternative. Every rule must be justified by objective criteria. "I find it easier to read" is not enough.
- **Tests may be less strict** than app code.

## Steps

1. **Regenerate the snapshots** so you can see the diff:

   ```sh
   npm run test:snapshot:update
   ```

2. **Review the diff** (`git diff eslint/__snapshots__/`). Go through every change and classify it:
   - **Rules removed / turned off** — Was this intentional (e.g. a rule was renamed, deprecated, or merged into another)? If a rule we relied on for correctness silently disappeared, that is a regression to flag, not accept.
   - **Severity changes** (`error` ↔ `warn` ↔ `off`) — Does the new severity match how strict we want to be in that context (app code vs. tests)?
   - **Option changes** — Did defaults change in a way that makes a rule stricter, looser, or more pedantic?
   - **New rules** — Why was it added? Does it match our philosophy?

3. **Make an educated guess per change** and decide:
   - **Keep it** if it improves correctness, security, a11y, or sensible consistency, and is not pedantic.
   - **Turn it off** (in the relevant `eslint/rules/*` or preset source — **not** by editing the snapshot by hand) if it is pedantic, purely stylistic, or contradicts our philosophy.
   - When a useful rule was removed/renamed upstream, consider wiring up its replacement so we don't lose the coverage.

4. **Re-run** `npm run test:snapshot:update` after any source change so the committed snapshots reflect your final decision, then `npm run test:snapshot` to confirm it passes.

5. **Implement your recommendation** with the smallest reasonable change and keep the snapshots in sync.

## Finally

Summarize for the user:

- which rules were **removed/disabled** and whether that looks intentional,
- which rules are **new** and your keep/disable recommendation for each, with a one-line justification grounded in our philosophy,
- any change you were **unsure** about.

Then ask the user to make the final judgement before committing — do not rubber-stamp snapshot updates.
