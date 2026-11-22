# ESLint

- Keep presets composable; don't combine several presets into one consumer entrypoint.
- Add or update a fixture for every rule change: the `*.test` folder (or `*.test.js`) next to the preset, rule, or style shows realistic passing and failing code, focused on the expected diagnostics (`npm run test:presets:*`, `test:rules:*`, `test:styles:*`).
- Style packs (`styles/`) are opinionated opt-ins: document their trade-offs in comments and in `README.md`. When you add a style pack that contradicts a default in `ai/coding-styleguide-*.mdc`, name the exception there.
- Test-file relaxations are intentional: strictness differs between app code and tests.
- When `npm run test:snapshot` fails (often after a dependency upgrade), follow `review-config-snapshot.prompt.md` and ask the user for final judgement before committing.
- Changes here usually need the Oxlint mirror too (`oxlint/`).
