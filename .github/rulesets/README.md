# Ruleset & repository-settings blueprints

The JSON files in this folder are **blueprints**. They are **not** applied automatically just because they live in the repository — each one belongs to a different GitHub API and has to be applied through its own path.

## `protect-main-branch.json` — a [GitHub ruleset](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets-for-a-repository/about-rulesets)

GitHub does **not** read ruleset definitions from files under `.github/rulesets/` (or anywhere else in the repo). Rulesets only take effect after you create or import them in **Repository settings → Rules → Rulesets** (or via organization rulesets and the API).

1. Open your repository (or organization) ruleset settings in GitHub.
2. Create a new ruleset and use **Import ruleset** (or equivalent), or copy the JSON and adjust it to match your branches, required checks, and policies.
3. Review and enable the ruleset for the refs you care about.

Treat it as a starting point: rename branches, tweak bypass lists, and align required status checks with your actual CI before enabling enforcement.

## `repository-settings.json` — plain [repository settings](https://docs.github.com/en/rest/repos/repos#update-a-repository)

Merge-method toggles (`allow_squash_merge`, `allow_merge_commit`, `allow_rebase_merge`) and the default commit message format for each method (`squash_merge_commit_title`/`squash_merge_commit_message`, `merge_commit_title`/`merge_commit_message`) are **not** part of the rulesets API — they live on the repository resource itself and can't be imported through the ruleset UI. `protect-main-branch.json`'s `allowed_merge_methods` only restricts which method is _offered_ on a protected branch; it doesn't set what the resulting commit message looks like. Setting both pairs to `PR_TITLE`/`PR_BODY` means squash **and** merge commits on `main` both use the PR title, so semantic-release can parse it as a Conventional Commit regardless of which method was used.

Apply it with the GitHub CLI (adjust `owner/repo`):

```bash
gh api -X PATCH repos/{owner}/{repo} --input .github/rulesets/repository-settings.json
```

Or set the same fields by hand under **Settings → General → Pull Requests**.
