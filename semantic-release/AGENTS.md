# Semantic release

- Preserve cross-publish behavior (npm, JSR and, for scoped packages by default, GitHub Packages) unless the task explicitly changes release targets.
- Keep CI release permissions and provenance in `.github/workflows/test-and-release.yml` in sync with the presets.
- This repo releases itself with these presets via `.releaserc.json`: check that it still extends them correctly after a change.
