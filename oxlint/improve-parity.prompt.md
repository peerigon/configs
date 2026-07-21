# Improve Oxlint ↔ ESLint parity

Use this prompt when Oxlint or `oxlint-tsgolint` ships new rules/plugins, or when [GAPS.md](./GAPS.md) needs a refresh after an Oxlint upgrade.

Your job is to **close documented gaps with the smallest correct change**, not to redesign the Oxlint surface.

## Philosophy (read first)

See the root [`README.md`](../README.md) and [`AGENTS.md`](../AGENTS.md).

- Correctness, security, a11y, and safe refactoring first.
- Prefer **native Oxlint rules** over JS plugins.
- Keep mostly `warn` severity; tests may be looser.
- Do not reintroduce `@eslint-react` unless the user explicitly asks and JS-plugin type-aware support exists.

## Source of truth

| Concern         | Path                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| ESLint behavior | [`eslint/rules/`](../eslint/rules/), [`eslint/styles/`](../eslint/styles/), [`eslint/presets/`](../eslint/presets/) |
| Oxlint behavior | [`oxlint/rules/`](./rules/), [`oxlint/styles/`](./styles/), [`oxlint/lib/presets.js`](./lib/presets.js)             |
| Known gaps      | [`GAPS.md`](./GAPS.md)                                                                                              |
| Fixtures        | [`oxlint/presets/*.test/`](./presets/), [`oxlint/styles/*.test/`](./styles/)                                        |

## Steps

1. **Read gaps** — Open [`GAPS.md`](./GAPS.md). Pick rows marked `approximated`, `js-plugin`, `lost`, or `check-again`.

2. **Check upstream** — For each candidate:
   - Rules reference: https://oxc.rs/docs/guide/usage/linter/rules
   - Plugins: https://oxc.rs/docs/guide/usage/linter/plugins
   - Type-aware: https://oxc.rs/docs/guide/usage/linter/type-aware and https://github.com/oxc-project/tsgolint
   - Local schema: `node_modules/oxlint/configuration_schema.json` → `definitions.DummyRuleMap.properties`

3. **Decide per gap**
   - **Promote to native** if the rule exists in the schema: wire it in the matching `oxlint/rules/*` or style pack with options copied from ESLint; remove the JS-plugin fallback if nothing else needs that plugin.
   - **Keep JS plugin** if only the ESLint package implements it and JS plugins still work.
   - **Replace approximation** (e.g. `id-match` → `typescript/naming-convention`) only when the real rule is available and options can match closely enough; port selectors from [`eslint/lib/rule-options.js`](../eslint/lib/rule-options.js).
   - **Leave as lost** if still unsupported (especially type-aware custom JS-plugin rules).

4. **Implement the smallest diff** — Touch only the Oxlint files needed. Do not change ESLint presets unless fixing a shared helper on purpose.

5. **Update fixtures** — Adjust `oxlint-disable-*` comments and sample violations under `oxlint/**/*.test/`. Run:

   ```sh
   npm run test:oxlint:typescript
   npm run test:oxlint:typescript-react
   npm run test:oxlint:no-default-export
   npm run build
   ```

6. **Update GAPS.md** — Move closed rows out, or change their status. Note Oxlint / tsgolint versions if relevant.

## Finally

Summarize what became native, what stayed on JS plugins, and what is still blocked. **Ask the user for judgement before committing** if a change would alter consumer-visible diagnostics in a surprising way (new errors, renamed rules, removed approximations).
