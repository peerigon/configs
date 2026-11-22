# Oxfmt

- Stay close to Oxfmt defaults. Change an option only for strong objective value: it must be deterministic and reduce review noise.
- This repo dogfoods the config (root `oxfmt.config.mts`, `test:format`, lint-staged, `.vscode` formatter), so a config change reformats the repo.
- Update the `base.test` fixture with every config change and run `npm run test:oxfmt`.
- Keep the "Known limitations" section in `README.md` current when Oxfmt gains or loses features.
