# [4.3.0-beta.2](https://github.com/peerigon/configs/compare/v4.3.0-beta.1...v4.3.0-beta.2) (2025-03-23)

### Bug Fixes

- **eslint:** Turn of unicorn/consistent-function-scoping ([6570db3](https://github.com/peerigon/configs/commit/6570db32a4037f0e00d99cfacc95a024f9892b95))

### Features

- **typescript:** Change base target to es2024 ([58b217a](https://github.com/peerigon/configs/commit/58b217ab0e4d64b7b969f1dbda748886f11009c5))

# [4.3.0-beta.1](https://github.com/peerigon/configs/compare/v4.2.0...v4.3.0-beta.1) (2025-03-12)

### Features

- Compile JS code instead of just emitDeclarationOnly ([c7d29f7](https://github.com/peerigon/configs/commit/c7d29f700ee53aa6be5b16175b355f000fba778c))

# [4.2.0](https://github.com/peerigon/configs/compare/v4.1.0...v4.2.0) (2025-03-10)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.30.2 to 1.31.0 ([#30](https://github.com/peerigon/configs/issues/30)) ([1008a87](https://github.com/peerigon/configs/commit/1008a87a8c3e343c07f742aeb357dabcdaf38709))
- **prettier:** bump eslint-config-prettier from 10.0.2 to 10.1.1 ([#27](https://github.com/peerigon/configs/issues/27)) ([c27fc02](https://github.com/peerigon/configs/commit/c27fc027df9dcfd7cdbf580878a5f42ce9bda93a))
- **react:** bump eslint-plugin-react-compiler from 19.0.0-beta-e552027-20250112 to 19.0.0-beta-714736e-20250131 ([#29](https://github.com/peerigon/configs/issues/29)) ([042a398](https://github.com/peerigon/configs/commit/042a398e77de01d6506247454699c12508b78882))

# [4.1.0](https://github.com/peerigon/configs/compare/v4.0.1...v4.1.0) (2025-03-10)

### Features

- **semantic-release:** Add JSR as cross-publish registry ([bd5d42d](https://github.com/peerigon/configs/commit/bd5d42d5f9998b88db6709ddbb5f45a493831275))

## [4.0.1](https://github.com/peerigon/configs/compare/v4.0.0...v4.0.1) (2025-03-09)

### Bug Fixes

- **typescript:** Incorrect dist path in base config ([4d06e5f](https://github.com/peerigon/configs/commit/4d06e5f116af9fba3751092c807e69a919220434))

# [4.0.0](https://github.com/peerigon/configs/compare/v3.2.0...v4.0.0) (2025-03-06)

### Features

- Update dependencies ([37d1288](https://github.com/peerigon/configs/commit/37d1288e614ebcb0c3dc5b59d88aaa48ef40ebd3))

### BREAKING CHANGES

- Updated some peerDependencies

# [3.2.0](https://github.com/peerigon/configs/compare/v3.1.0...v3.2.0) (2025-03-06)

### Bug Fixes

- Incorrect types returned by presets ([5744961](https://github.com/peerigon/configs/commit/5744961bb760c48738a4a74e8ae0d4f2bfe0abe5))
- Turn off consistent-return rule in TypeScript files ([0830152](https://github.com/peerigon/configs/commit/08301524f081fc2223c2ad72bf6cb630735ac712))
- Turn off no-new for tests ([26bc778](https://github.com/peerigon/configs/commit/26bc778ff2239cc61acb21825b72ca15ee3c1ef3))

### Features

- Improve base tsconfig ([392b0ff](https://github.com/peerigon/configs/commit/392b0ff6b552e926c3ff77867952627e63f6a496))

# [3.1.0](https://github.com/peerigon/configs/compare/v3.0.0...v3.1.0) (2025-03-03)

### Features

- bump eslint-plugin-react-compiler from 19.0.0-beta-e552027-20250112 to 19.0.0-beta-714736e-20250131 ([c27c0e5](https://github.com/peerigon/configs/commit/c27c0e57556c2321c022ca0198c666bd01fb3a6d))
- bump eslint-plugin-react-hooks from 5.1.0 to 5.2.0 ([9c2328f](https://github.com/peerigon/configs/commit/9c2328f4fe7cb430f944f863773156516e7d8420))
- bump prettier-plugin-packagejson from 2.5.8 to 2.5.10 ([157df20](https://github.com/peerigon/configs/commit/157df203566c5d64154ba31f14234334f4110210))

# [3.0.0](https://github.com/peerigon/configs/compare/v2.0.2...v3.0.0) (2025-02-24)

### Features

- Update to eslint-plugin-unicorn@57.0.0 ([f5521ee](https://github.com/peerigon/configs/commit/f5521eeb05fd81a3928ed70f44b2d9959534e004))

### BREAKING CHANGES

- eslint-plugin-unicorn introduced new recommended rules (https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v57.0.0) that might cause linting errors in your project.

## [2.0.2](https://github.com/peerigon/configs/compare/v2.0.1...v2.0.2) (2025-02-11)

### Bug Fixes

- Refactor module settings in tsconfig ([4bce2f2](https://github.com/peerigon/configs/commit/4bce2f21317463625e27f5b47077db215f19af9d))

## [2.0.1](https://github.com/peerigon/configs/compare/v2.0.0...v2.0.1) (2025-02-08)

### Bug Fixes

- Type errors ([5ec3ee8](https://github.com/peerigon/configs/commit/5ec3ee8fdb4ff45fb63e67cc791e499bac8917ce))

# [2.0.0](https://github.com/peerigon/configs/compare/v1.1.0...v2.0.0) (2025-02-08)

### Bug Fixes

- Add missing checkJs: true to TypeScript base config ([6dbd0dc](https://github.com/peerigon/configs/commit/6dbd0dcfa9eaf43efe7d8dac74bcf5e4ca4929ae))

### Features

- Update TypeScript base config ([60843de](https://github.com/peerigon/configs/commit/60843de02fa0a5fc751a15d310e9f5afe0fad055))

### BREAKING CHANGES

- Added noFallthroughCasesInSwitch: true
- Switched skipLibCheck to false

# [1.1.0](https://github.com/peerigon/configs/compare/v1.0.1...v1.1.0) (2025-02-08)

### Bug Fixes

- Do not complain about export default in config.ts files ([1e8b762](https://github.com/peerigon/configs/commit/1e8b762a6afe362f75e9095d25962864d10c3565))

### Features

- Disable "max-nested-callbacks" in tests ([1690ac4](https://github.com/peerigon/configs/commit/1690ac493cdc0ed55b91f4c83a73c4b713bd3a6b))

## [1.0.1](https://github.com/peerigon/configs/compare/v1.0.0...v1.0.1) (2025-02-04)

### Bug Fixes

- Missing channel name in semantic-release config ([6f669f1](https://github.com/peerigon/configs/commit/6f669f18032e7221df6c78dc62b203d18e9abd9e))

# 1.0.0 (2025-02-04)

### Bug Fixes

- Add rootDir to lib tsconfig ([764e0c1](https://github.com/peerigon/configs/commit/764e0c191f07dfd1d996937a4df488d56be5a159))
- Adjust release script ([df43151](https://github.com/peerigon/configs/commit/df431514d28fd32d2bd69a50eeb8edf3e6cc1d44))
- Adjust release script ([3668267](https://github.com/peerigon/configs/commit/366826718205e6f542f69d890a44c3595fa84340))
- Changelog not formatted correctly ([cc12fa7](https://github.com/peerigon/configs/commit/cc12fa7abe725c4ab8597296094e2e485b1346e0))
- CHANGELOG.md not being properly formatted ([22720ea](https://github.com/peerigon/configs/commit/22720ea8bc3aab0477a89094b24f567571860c15))
- Downgrade ESLint ([d09f208](https://github.com/peerigon/configs/commit/d09f2084646c68fd9998685143563ba88ddaab0a))
- Improve error message for no-default-export ([198c911](https://github.com/peerigon/configs/commit/198c91151a3dfd33339715c21ec95aa7c5bfbe05))
- Missing files in package.json files array ([97111b6](https://github.com/peerigon/configs/commit/97111b66b1a741e25820bcf43b17355b59a95fca))
- Missing packages write permission in Github action ([ce0d482](https://github.com/peerigon/configs/commit/ce0d4820e2e75f164f5385e48bd8978c250216f1))
- Move package types to regular dependencies ([6d6c169](https://github.com/peerigon/configs/commit/6d6c1695989f04898a1e730b6320b2cbea158a8f))
- noEmit setting in TypeScript configs ([281334c](https://github.com/peerigon/configs/commit/281334c3565ca0cd1afcc8d39a94857a0d42e9ae))
- Prettify CHANGELOG.md ([f904e8d](https://github.com/peerigon/configs/commit/f904e8d535a8d04d615281bb942ccd8b2f12a9d9))
- Relax switch-exhaustiveness-check rule ([2f158a4](https://github.com/peerigon/configs/commit/2f158a4a25770897c6140d3356161349b79c1cc2))
- Remove rootDir config from lib tsconfig again ([84fe9dc](https://github.com/peerigon/configs/commit/84fe9dca95cdeba4e188d57a489ec6e12608fed4))
- Turn of TS's exactOptionalPropertyTypes ([4069985](https://github.com/peerigon/configs/commit/4069985cad9b2da629e441cc1f02fd0e4be7f4a0))
- Turn off unicorn/import-style ([f3be043](https://github.com/peerigon/configs/commit/f3be04315de51747319899f1ede9be15c1df5d6b))
- Turn off unicorn/no-single-promise-in-promise-methods ([0557a83](https://github.com/peerigon/configs/commit/0557a83c45b2fe3198f84d47412c90fbb87ddd69))
- TypeScript configs ([0c584e7](https://github.com/peerigon/configs/commit/0c584e70fd840e6ca857f4b177a21a389d958633))
- Use cross-publish semantic release config ([c079ce0](https://github.com/peerigon/configs/commit/c079ce0df36b436ffc46da9e86a562855b8f2082))

### Features

- Add docs ([83e7f61](https://github.com/peerigon/configs/commit/83e7f617d6fc44abcd7e0d05c700299d8e2910c2))
- Add shareable semantic-release config ([e0b585a](https://github.com/peerigon/configs/commit/e0b585a4eaaa4dbcfb206315870d3a22fa1d7186))
- Also release on Github ([0e3e84f](https://github.com/peerigon/configs/commit/0e3e84f54a4689c8c0c3a340435346c351662cc9))
- Enable .ts imports ([781a4a9](https://github.com/peerigon/configs/commit/781a4a97e15df6b218959c76c62a2e0893b3c026))
- Improve CSS property sorting ([f9b9790](https://github.com/peerigon/configs/commit/f9b97901a318146bdaa81b9c2019e9038104b389))
- Improve TS configs and add library types ([760a898](https://github.com/peerigon/configs/commit/760a8983b9d780601e7c6e2cb2c867f45f55f25f))
- Initial release ([8f12887](https://github.com/peerigon/configs/commit/8f128873b8481832dea06c88115a785c3c7a3627))
- Update dependencies ([07d0f37](https://github.com/peerigon/configs/commit/07d0f3781186cc86603444e0c2cf3b5185e3844a))
- Update dependencies ([839e69c](https://github.com/peerigon/configs/commit/839e69cdfef60349772479b7f5a7105c81be9d93))
- Update dependencies ([836a04f](https://github.com/peerigon/configs/commit/836a04f798741639837bb56fcf3ecbc028794c14))
- Update dependencies ([6bb1f24](https://github.com/peerigon/configs/commit/6bb1f242e7de360d96868b8e2b6aea58ce493c31))

# [1.0.0-beta.22](https://github.com/peerigon/configs/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2025-02-04)

### Features

- Update dependencies ([07d0f37](https://github.com/peerigon/configs/commit/07d0f3781186cc86603444e0c2cf3b5185e3844a))

# [1.0.0-beta.21](https://github.com/peerigon/configs/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2025-01-27)

### Bug Fixes

- Missing packages write permission in Github action ([ce0d482](https://github.com/peerigon/configs/commit/ce0d4820e2e75f164f5385e48bd8978c250216f1))

# [1.0.0-beta.20](https://github.com/peerigon/configs/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2025-01-27)

### Bug Fixes

- Use cross-publish semantic release config ([c079ce0](https://github.com/peerigon/configs/commit/c079ce0df36b436ffc46da9e86a562855b8f2082))

# [1.0.0-beta.19](https://github.com/peerigon/configs/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2025-01-27)

### Features

- Enable .ts imports ([781a4a9](https://github.com/peerigon/configs/commit/781a4a97e15df6b218959c76c62a2e0893b3c026))
- Update dependencies ([839e69c](https://github.com/peerigon/configs/commit/839e69cdfef60349772479b7f5a7105c81be9d93))

# [1.0.0-beta.18](https://github.com/peerigon/configs/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2025-01-26)

### Features

- Add docs ([83e7f61](https://github.com/peerigon/configs/commit/83e7f617d6fc44abcd7e0d05c700299d8e2910c2))

# [1.0.0-beta.17](https://github.com/peerigon/configs/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2025-01-20)

### Bug Fixes

- Changelog not formatted correctly ([cc12fa7](https://github.com/peerigon/configs/commit/cc12fa7abe725c4ab8597296094e2e485b1346e0))

# [1.0.0-beta.16](https://github.com/peerigon/configs/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2025-01-20)

### Bug Fixes

- CHANGELOG.md not being properly formatted ([22720ea](https://github.com/peerigon/configs/commit/22720ea8bc3aab0477a89094b24f567571860c15))

### Features

- Improve CSS property sorting ([f9b9790](https://github.com/peerigon/configs/commit/f9b97901a318146bdaa81b9c2019e9038104b389))

# [1.0.0-beta.15](https://github.com/peerigon/configs/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2024-12-30)

### Bug Fixes

- Remove rootDir config from lib tsconfig again ([84fe9dc](https://github.com/peerigon/configs/commit/84fe9dca95cdeba4e188d57a489ec6e12608fed4))

# [1.0.0-beta.14](https://github.com/peerigon/configs/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2024-12-30)

### Bug Fixes

- Add rootDir to lib tsconfig ([764e0c1](https://github.com/peerigon/configs/commit/764e0c191f07dfd1d996937a4df488d56be5a159))

# [1.0.0-beta.13](https://github.com/peerigon/configs/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2024-12-30)

### Bug Fixes

- Improve error message for no-default-export ([198c911](https://github.com/peerigon/configs/commit/198c91151a3dfd33339715c21ec95aa7c5bfbe05))

# [1.0.0-beta.12](https://github.com/peerigon/configs/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2024-12-30)

### Bug Fixes

- Turn off unicorn/import-style ([f3be043](https://github.com/peerigon/configs/commit/f3be04315de51747319899f1ede9be15c1df5d6b))

# [1.0.0-beta.11](https://github.com/peerigon/configs/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2024-12-15)

### Bug Fixes

- Move package types to regular dependencies ([6d6c169](https://github.com/peerigon/configs/commit/6d6c1695989f04898a1e730b6320b2cbea158a8f))
- noEmit setting in TypeScript configs ([281334c](https://github.com/peerigon/configs/commit/281334c3565ca0cd1afcc8d39a94857a0d42e9ae))
- Relax switch-exhaustiveness-check rule ([2f158a4](https://github.com/peerigon/configs/commit/2f158a4a25770897c6140d3356161349b79c1cc2))

# [1.0.0-beta.10](https://github.com/peerigon/configs/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2024-12-11)

### Bug Fixes

- Turn of TS's exactOptionalPropertyTypes ([4069985](https://github.com/peerigon/configs/commit/4069985cad9b2da629e441cc1f02fd0e4be7f4a0))
- Turn off unicorn/no-single-promise-in-promise-methods ([0557a83](https://github.com/peerigon/configs/commit/0557a83c45b2fe3198f84d47412c90fbb87ddd69))

# [1.0.0-beta.9](https://github.com/peerigon/configs/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2024-12-09)

### Features

- Improve TS configs and add library types ([760a898](https://github.com/peerigon/configs/commit/760a8983b9d780601e7c6e2cb2c867f45f55f25f))

# [1.0.0-beta.8](https://github.com/peerigon/configs/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2024-11-16)

### Bug Fixes

- Downgrade ESLint ([d09f208](https://github.com/peerigon/configs/commit/d09f2084646c68fd9998685143563ba88ddaab0a))

### Features

- Update dependencies ([836a04f](https://github.com/peerigon/configs/commit/836a04f798741639837bb56fcf3ecbc028794c14))

# [1.0.0-beta.7](https://github.com/peerigon/configs/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2024-11-15)

### Bug Fixes

- TypeScript configs ([0c584e7](https://github.com/peerigon/configs/commit/0c584e70fd840e6ca857f4b177a21a389d958633))

# [1.0.0-beta.6](https://github.com/peerigon/configs/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2024-11-14)

### Bug Fixes

- Missing files in package.json files array ([97111b6](https://github.com/peerigon/configs/commit/97111b66b1a741e25820bcf43b17355b59a95fca))

# [1.0.0-beta.5](https://github.com/peerigon/configs/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2024-11-14)

### Features

- Add shareable semantic-release config ([e0b585a](https://github.com/peerigon/configs/commit/e0b585a4eaaa4dbcfb206315870d3a22fa1d7186))

# [1.0.0-beta.4](https://github.com/peerigon/configs/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2024-11-10)

### Bug Fixes

- Adjust release script ([df43151](https://github.com/peerigon/configs/commit/df431514d28fd32d2bd69a50eeb8edf3e6cc1d44))
- Adjust release script ([3668267](https://github.com/peerigon/configs/commit/366826718205e6f542f69d890a44c3595fa84340))

# [1.0.0-beta.3](https://github.com/peerigon/configs/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2024-11-10)

### Bug Fixes

- Prettify CHANGELOG.md ([f904e8d](https://github.com/peerigon/configs/commit/f904e8d535a8d04d615281bb942ccd8b2f12a9d9))

# [1.0.0-beta.2](https://github.com/peerigon/configs/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2024-11-10)

### Features

- Also release on Github ([0e3e84f](https://github.com/peerigon/configs/commit/0e3e84f54a4689c8c0c3a340435346c351662cc9))

# 1.0.0-beta.1 (2024-11-05)

### Features

- Initial release ([8f12887](https://github.com/peerigon/configs/commit/8f128873b8481832dea06c88115a785c3c7a3627))
- Update dependencies ([6bb1f24](https://github.com/peerigon/configs/commit/6bb1f242e7de360d96868b8e2b6aea58ce493c31))

# 1.0.0-beta.1 (2024-11-05)

### Features

- Initial release ([8f12887](https://github.com/peerigon/configs/commit/8f128873b8481832dea06c88115a785c3c7a3627))
- Update dependencies ([6bb1f24](https://github.com/peerigon/configs/commit/6bb1f242e7de360d96868b8e2b6aea58ce493c31))

# 1.0.0-beta.1 (2024-11-05)

### Features

- Initial release ([8f12887](https://github.com/peerigon/configs/commit/8f128873b8481832dea06c88115a785c3c7a3627))
