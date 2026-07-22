# [VSCode](https://code.visualstudio.com/) / Cursor config

Unfortunately, there's currently no way to share VSCode settings (see [microsoft/vscode#15909](https://github.com/microsoft/vscode/issues/15909)). But you're welcome to copy them from [this repo](settings.json) :)

This workspace:

- recommends the [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) extension (`oxc.oxc-vscode`) for Oxfmt formatting (and Oxlint when enabled)
- recommends the ESLint extension
- marks Prettier as unwanted — this repo dogfoods Oxfmt, not Prettier
