## [14.0.2](https://github.com/peerigon/configs/compare/v14.0.1...v14.0.2) (2026-02-10)

### Bug Fixes

- Improve jsr score ([a616300](https://github.com/peerigon/configs/commit/a616300b3fe4c489232ebd81944f7b6089143fc6))

## [14.0.1](https://github.com/peerigon/configs/compare/v14.0.0...v14.0.1) (2026-02-10)

### Bug Fixes

- jsr publish ([08b7a7b](https://github.com/peerigon/configs/commit/08b7a7bdec9a55a76bb6504910b094235e6782bc))

# [14.0.0](https://github.com/peerigon/configs/compare/v13.0.0...v14.0.0) (2026-02-09)

### chore

- **deps:** update eslint-related dependencies and globals version ([9bbb072](https://github.com/peerigon/configs/commit/9bbb07226f92a0b07b4d3b1faa93c8bfcdc758ad))

### Features

- Update non-breaking dependencies ([0846964](https://github.com/peerigon/configs/commit/0846964618e0715d19794a3d9255a6d12bdcc5f1))

### BREAKING CHANGES

- **deps:** Updated `eslint-plugin-react-refresh` to version 0.5.0.
- **deps:** Updated `eslint-plugin-react-you-might-not-need-an-effect` to version 0.8.5.
- **deps:** Updated `globals` to version 17.3.0.
- **deps:** Updated `prettier-plugin-packagejson` to version 3.0.0.

# [13.0.0](https://github.com/peerigon/configs/compare/v12.1.0...v13.0.0) (2026-02-09)

### Features

- Remove scripts again ([b95a99f](https://github.com/peerigon/configs/commit/b95a99f000f1352bede328062a189ca9131cc310))

### BREAKING CHANGES

- Removed sync-node-version script as it was built on an incorrect assumption. The version numbers between @types/node and Node.js are not aligned.

# [12.1.0](https://github.com/peerigon/configs/compare/v12.0.0...v12.1.0) (2026-02-06)

### Features

- add script to sync Node version from package.json to version files ([7e6ea75](https://github.com/peerigon/configs/commit/7e6ea75246f4c97f68d4b112bc474dc06502ebcc))

# [12.0.0](https://github.com/peerigon/configs/compare/v11.0.2...v12.0.0) (2025-12-06)

### Bug Fixes

- **eslint:** Missing exports of eslint rules ([6e97b40](https://github.com/peerigon/configs/commit/6e97b4063efa2d70ba5e7d5aa3cfc0cbdc5e588b))
- Remove wildcard exports again ([1a610c5](https://github.com/peerigon/configs/commit/1a610c56e89c478076b333129d8dca9a54fdd13c))
- Temporarily disable @prettier/plugin-oxc ([120f12f](https://github.com/peerigon/configs/commit/120f12ffd4434a2ab49e80543c599aa52ee7e5e9))

### Features

- Update dependencies ([6992989](https://github.com/peerigon/configs/commit/6992989b60ae045245fd5dd61a9dfda029f7600e))

### BREAKING CHANGES

- There's a small chance that some of these updates break linting

## [11.0.2](https://github.com/peerigon/configs/compare/v11.0.1...v11.0.2) (2025-11-03)

### Bug Fixes

- update eslint to version 9.38.0 in package.json and package-lock.json ([41e8d47](https://github.com/peerigon/configs/commit/41e8d47564f161c363e463657187a0fc503e170b))

## [11.0.1](https://github.com/peerigon/configs/compare/v11.0.0...v11.0.1) (2025-11-03)

### Bug Fixes

- Downgrade ESLint peer dependency to 9.36.0 ([351cfc5](https://github.com/peerigon/configs/commit/351cfc55ec2c852ac1df48c0d5b289c9dd6e3b13))

# [11.0.0](https://github.com/peerigon/configs/compare/v10.0.0...v11.0.0) (2025-11-03)

### chore

- update dependencies in package.json and package-lock.json ([e1b7d17](https://github.com/peerigon/configs/commit/e1b7d176770e143a14fc2e9c9e7aa022a98c0284))

### BREAKING CHANGES

- There might be new recommended ESLint rules that might
  break your build.

* Bump versions for several dependencies including:
  - @eslint-react/eslint-plugin: ^2.2.4 → ^2.3.1
  - @eslint/compat: ^1.4.0 → ^1.4.1
  - @eslint/js: ^9.38.0 → ^9.39.0
  - @sebbo2002/semantic-release-jsr: ^3.0.1 → ^3.1.0
  - @tanstack/eslint-plugin-query: ^5.91.1 → ^5.91.2
  - @vitest/eslint-plugin: ^1.3.25 → ^1.4.0
  - eslint-plugin-playwright: ^2.2.2 → ^2.3.0
  - eslint-plugin-react-you-might-not-need-an-effect: ^0.6.1 → ^0.7.0
  - globals: ^16.4.0 → ^16.5.0
  - prettier-plugin-jsdoc: ^1.3.3 → ^1.5.0
  - @types/node: ^24.9.1 → ^24.10.0
  - eslint: ^9.38.0 → ^9.39.0
  - rimraf: ^6.0.1 → ^6.1.0
* Update peer dependencies to match the latest versions.
* Fix: semantic-release peer dependency is optional now

# [10.0.0](https://github.com/peerigon/configs/compare/v9.1.0...v10.0.0) (2025-10-27)

### Features

- Update dependencies with breaking changes ([0cc5f8c](https://github.com/peerigon/configs/commit/0cc5f8c0891d5a95c5698a0518817b4a08fc7e69))

### BREAKING CHANGES

- Major version bumps in:

* eslint-plugin-react-hooks: ^5.2.0 → ^7.0.1
* eslint-plugin-unicorn: ^60.0.0 → ^62.0.0
* prettier-plugin-tailwindcss: ^0.6.14 → ^0.7.1
* semantic-release: ^24.2.9 → ^25.0.1

Other updates:

- Update Node.js to v22.21.0
- Update various ESLint plugins and dependencies
- Update TypeScript and React types

# [9.1.0](https://github.com/peerigon/configs/compare/v9.0.0...v9.1.0) (2025-10-16)

### Features

- Introduce Playwright specific rules ([aae64ed](https://github.com/peerigon/configs/commit/aae64ed01e83e2424ae417942cdcce32a297165f))
- Introduce Playwright specific rules ([#174](https://github.com/peerigon/configs/issues/174)) ([b92db4f](https://github.com/peerigon/configs/commit/b92db4f9fbbbcdf8f9841a29f641e945e37a30bb)), closes [#173](https://github.com/peerigon/configs/issues/173)

# [9.0.0](https://github.com/peerigon/configs/compare/v8.1.0...v9.0.0) (2025-10-15)

### Bug Fixes

- remove fixed [@ts-expect-error](https://github.com/ts-expect-error) directives ([213325d](https://github.com/peerigon/configs/commit/213325d3102e9d72ffee6118822b52c7d22128e0))

### Features

- **react:** bump @eslint-react/eslint-plugin from 1.52.6 to 2.0.4 ([#171](https://github.com/peerigon/configs/issues/171)) ([ec855ad](https://github.com/peerigon/configs/commit/ec855ad8d553a0b5870e34e883cd3a32bfc52b45))

### BREAKING CHANGES

- **react:** Potentially breaking change for React users, see https://github.com/Rel1cx/eslint-react/blob/main/CHANGELOG.md#v200-2025-09-26

Bumps
[@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react/tree/HEAD/packages/plugins/eslint-plugin)
from 1.52.6 to 2.0.4.

# [8.1.0](https://github.com/peerigon/configs/compare/v8.0.0...v8.1.0) (2025-10-15)

### Features

- Introduce tanstack query specific rules ([3cdfbd9](https://github.com/peerigon/configs/commit/3cdfbd9d5f9883b7577fc8539102d397d177d9a0))
- Introduce tanstack query specific rules ([#172](https://github.com/peerigon/configs/issues/172)) ([caeb816](https://github.com/peerigon/configs/commit/caeb81653f9d7da9a7d9ec5a203a281dfe629738)), closes [#166](https://github.com/peerigon/configs/issues/166)

# [8.0.0](https://github.com/peerigon/configs/compare/v7.4.0...v8.0.0) (2025-10-01)

### Features

- **eslint:** Add eslint-plugin-react-you-might-not-need-an-effect ([1985951](https://github.com/peerigon/configs/commit/19859517f38b4f6a5b2b39119a1440b63cebcbde))

### BREAKING CHANGES

- **eslint:** Our React rules got a lot stricter about useEffect, see https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect

# [7.4.0](https://github.com/peerigon/configs/compare/v7.3.0...v7.4.0) (2025-09-30)

### Bug Fixes

- Add **important** to some agent instructions ([257ef95](https://github.com/peerigon/configs/commit/257ef954b1fc490622cac65225cffeeae2b54a85))

### Features

- Introduce vitest specific rules ([ac7b0c7](https://github.com/peerigon/configs/commit/ac7b0c7745ae73c68b6b3841f58cf40616fb047c)), closes [#164](https://github.com/peerigon/configs/issues/164)

# [7.3.0](https://github.com/peerigon/configs/compare/v7.2.0...v7.3.0) (2025-09-12)

### Features

- **eslint:** bump typescript-eslint from 8.39.1 to 8.41.0 ([#160](https://github.com/peerigon/configs/issues/160)) ([2e93592](https://github.com/peerigon/configs/commit/2e935923e94c1e7480305b8fcf0422061e14deb1))

# [7.2.0](https://github.com/peerigon/configs/compare/v7.1.0...v7.2.0) (2025-09-02)

### Features

- **prettier:** bump @ianvs/prettier-plugin-sort-imports from 4.6.2 to 4.7.0 ([#157](https://github.com/peerigon/configs/issues/157)) ([66894fe](https://github.com/peerigon/configs/commit/66894fef7b3acd56bb4ac5f024f41c1aa21fdbc7))

# [7.1.0](https://github.com/peerigon/configs/compare/v7.0.2...v7.1.0) (2025-08-20)

### Features

- Add rules and instructions for AI coding agents ([#146](https://github.com/peerigon/configs/issues/146)) ([4fda35c](https://github.com/peerigon/configs/commit/4fda35c49ee8fe92559a88ffacc4dbce198fb32c)), closes [/#diff-31d17094bc63f56f4b4cc27a6e7d78e7b0a33b2a7d810f06a77f5f5814a32223R1-R77](https://github.com///issues/diff-31d17094bc63f56f4b4cc27a6e7d78e7b0a33b2a7d810f06a77f5f5814a32223R1-R77) [/#diff-687239070a6068b383fc9aab0bfacfc80b3ff2c1df6055e7f0273328b597e6d0R1-R160](https://github.com///issues/diff-687239070a6068b383fc9aab0bfacfc80b3ff2c1df6055e7f0273328b597e6d0R1-R160) [/#diff-f8bfdc4142ab84261ba9c23bfc9afeff1f98ee71da689ef951311cd54130f928R1-R14](https://github.com///issues/diff-f8bfdc4142ab84261ba9c23bfc9afeff1f98ee71da689ef951311cd54130f928R1-R14) [/#diff-97953bd7f578928372e273b64f032d3bb832202e334ea65cc2926ae1c3c27534R1-R17](https://github.com///issues/diff-97953bd7f578928372e273b64f032d3bb832202e334ea65cc2926ae1c3c27534R1-R17) [/#diff-5193a148ebdd2baf23b4f0a1c1add7ea02a8b92fb022e3a5780e886509d06693L25-R25](https://github.com///issues/diff-5193a148ebdd2baf23b4f0a1c1add7ea02a8b92fb022e3a5780e886509d06693L25-R25) [/#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R44](https://github.com///issues/diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519R44)

## [7.0.2](https://github.com/peerigon/configs/compare/v7.0.1...v7.0.2) (2025-08-05)

### Bug Fixes

- **typescript:** Add inlineSources: true for lib tsconfigs ([d25c418](https://github.com/peerigon/configs/commit/d25c41814836a342b2958a2338c9f438fdf3b11e))

## [7.0.1](https://github.com/peerigon/configs/compare/v7.0.0...v7.0.1) (2025-07-29)

### Bug Fixes

- **typescript:** Exclude common build directories ([cf1f657](https://github.com/peerigon/configs/commit/cf1f657b4595837c685b91fb1b0253f69a2fc3f8))

# [7.0.0](https://github.com/peerigon/configs/compare/v6.10.0...v7.0.0) (2025-07-22)

### Features

- **prettier:** Use @prettier/plugin-oxc ([ff3223f](https://github.com/peerigon/configs/commit/ff3223f6ffd32783f9f1207dcdf8ff165491a53d))
- **typescript:** Add erasableSyntaxOnly to base tsconfig ([f3d4468](https://github.com/peerigon/configs/commit/f3d4468c01a0655b0d4e5819822267b0c6e9c5b8))
- Update all dependencies ([3880e58](https://github.com/peerigon/configs/commit/3880e58db3471688316b4503a475872c98a68574))

### BREAKING CHANGES

- **typescript:** We set erasableSyntaxOnly: true as tsconfig default. You might need to disable this in your existing project.
- Updates eslint-plugin-unicorn@60.0.0 which introduces new eslint rules

# [6.10.0](https://github.com/peerigon/configs/compare/v6.9.0...v6.10.0) (2025-07-14)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.52.2 to 1.52.3 ([#121](https://github.com/peerigon/configs/issues/121)) ([3d41d73](https://github.com/peerigon/configs/commit/3d41d737a247f63f9fe9f7e95176a8c069434e65))
- **prettier:** bump prettier-plugin-tailwindcss from 0.6.13 to 0.6.14 ([#123](https://github.com/peerigon/configs/issues/123)) ([70bcdf8](https://github.com/peerigon/configs/commit/70bcdf8c7b443f89d20b5d3d423fe2698808644f))

# [6.9.0](https://github.com/peerigon/configs/compare/v6.8.0...v6.9.0) (2025-07-07)

### Features

- **prettier:** bump prettier-plugin-jsdoc from 1.3.2 to 1.3.3 ([#118](https://github.com/peerigon/configs/issues/118)) ([d14d847](https://github.com/peerigon/configs/commit/d14d8471c2be76e544e15278789a19f5c826285a))
- **prettier:** bump prettier-plugin-packagejson from 2.5.15 to 2.5.18 ([#117](https://github.com/peerigon/configs/issues/117)) ([c6c2af4](https://github.com/peerigon/configs/commit/c6c2af49e67d98b4ee6f20ea9094c3d5f3f7d288))

# [6.8.0](https://github.com/peerigon/configs/compare/v6.7.0...v6.8.0) (2025-06-30)

### Features

- **eslint:** bump @eslint/compat from 1.3.0 to 1.3.1 ([#104](https://github.com/peerigon/configs/issues/104)) ([7e6dcdb](https://github.com/peerigon/configs/commit/7e6dcdbca4615ce9d0e3ef099f41631fa6420578))
- **eslint:** bump typescript-eslint from 8.34.1 to 8.35.0 ([#103](https://github.com/peerigon/configs/issues/103)) ([0076545](https://github.com/peerigon/configs/commit/0076545d4da43cb0fea61e27a2815bf028913794))
- **prettier:** bump prettier-plugin-tailwindcss from 0.6.12 to 0.6.13 ([#106](https://github.com/peerigon/configs/issues/106)) ([61765d7](https://github.com/peerigon/configs/commit/61765d717fdecb8edc067672092ce4dd09f6dd90))

# [6.7.0](https://github.com/peerigon/configs/compare/v6.6.0...v6.7.0) (2025-06-10)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.50.0 to 1.51.2 ([#91](https://github.com/peerigon/configs/issues/91)) ([d06b852](https://github.com/peerigon/configs/commit/d06b852d09c5dc221a476890891c85a6d60c8441))
- **prettier:** bump prettier-plugin-tailwindcss from 0.6.11 to 0.6.12 ([#90](https://github.com/peerigon/configs/issues/90)) ([596e09e](https://github.com/peerigon/configs/commit/596e09e5b09da5df2d1a939897fb615d1561e5f7))
- **semantic-release:** bump @sebbo2002/semantic-release-jsr from 2.0.5 to 3.0.0 ([#92](https://github.com/peerigon/configs/issues/92)) ([a6bd038](https://github.com/peerigon/configs/commit/a6bd038229523a492df56d7299c6dd8745200595))

# [6.6.0](https://github.com/peerigon/configs/compare/v6.5.0...v6.6.0) (2025-06-10)

### Features

- **prettier:** bump @ianvs/prettier-plugin-sort-imports from 4.4.1 to 4.4.2 ([#93](https://github.com/peerigon/configs/issues/93)) ([219e289](https://github.com/peerigon/configs/commit/219e28941649a839ea47039d57cea4b6251b7fff))

# [6.5.0](https://github.com/peerigon/configs/compare/v6.4.0...v6.5.0) (2025-06-03)

### Features

- **eslint:** bump @eslint/js from 9.27.0 to 9.28.0 ([#87](https://github.com/peerigon/configs/issues/87)) ([566c18a](https://github.com/peerigon/configs/commit/566c18a6e63f9cdd07bb24c332c83b2502d358ac))
- **eslint:** bump @semantic-release/exec from 7.0.3 to 7.1.0 ([#85](https://github.com/peerigon/configs/issues/85)) ([1f53ebb](https://github.com/peerigon/configs/commit/1f53ebb28ddd5f8f8623a0627465da77c2a7c3f0))
- **eslint:** bump globals from 16.0.0 to 16.2.0 ([#88](https://github.com/peerigon/configs/issues/88)) ([3a45c31](https://github.com/peerigon/configs/commit/3a45c319dca5c3199344d01636205420cba9c857))

# [6.4.0](https://github.com/peerigon/configs/compare/v6.3.0...v6.4.0) (2025-05-26)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.48.1 to 1.49.0 ([#69](https://github.com/peerigon/configs/issues/69)) ([059b3e3](https://github.com/peerigon/configs/commit/059b3e313151983b818cb9dfed771d8304dba711))
- **prettier:** bump prettier-plugin-packagejson from 2.5.10 to 2.5.14 ([#82](https://github.com/peerigon/configs/issues/82)) ([0d5be7d](https://github.com/peerigon/configs/commit/0d5be7dd22e47e1c810dc6e138993106e8327fe9))

# [6.3.0](https://github.com/peerigon/configs/compare/v6.2.0...v6.3.0) (2025-05-19)

### Features

- add linting rule to check for accidental test.only ([#76](https://github.com/peerigon/configs/issues/76)) ([25e8f17](https://github.com/peerigon/configs/commit/25e8f17d184efefff7767e68079e971a471ca11c))

# [6.2.0](https://github.com/peerigon/configs/compare/v6.1.0...v6.2.0) (2025-05-12)

### Features

- **esint:** bump eslint-plugin-unicorn from 59.0.0 to 59.0.1 ([#75](https://github.com/peerigon/configs/issues/75)) ([2d6bcd0](https://github.com/peerigon/configs/commit/2d6bcd03fc6d4a28293358ed77f8c7897662fd88))
- **eslint:** bump eslint-plugin-react-refresh from 0.4.19 to 0.4.20 ([#74](https://github.com/peerigon/configs/issues/74)) ([a76f44c](https://github.com/peerigon/configs/commit/a76f44ca066550a8762acb5bc2642bc47114b88f))

# [6.1.0](https://github.com/peerigon/configs/compare/v6.0.1...v6.1.0) (2025-05-05)

### Features

- **eslint:** bump @eslint/compat from 1.2.8 to 1.2.9 ([#70](https://github.com/peerigon/configs/issues/70)) ([27aed65](https://github.com/peerigon/configs/commit/27aed650fbb1d9e1ba0b8d09e771742ecf003b9b))
- **eslint:** bump @eslint/js from 9.25.1 to 9.26.0 ([#67](https://github.com/peerigon/configs/issues/67)) ([4eb269d](https://github.com/peerigon/configs/commit/4eb269d9ec17326ce5cc052589dc5a4f779db999))
- **eslint:** bump typescript-eslint from 8.30.1 to 8.31.1 ([#68](https://github.com/peerigon/configs/issues/68)) ([f5a4335](https://github.com/peerigon/configs/commit/f5a4335457936a5e56878dcd02b5f87c03ca8877))

## [6.0.1](https://github.com/peerigon/configs/compare/v6.0.0...v6.0.1) (2025-05-02)

### Bug Fixes

- **eslint:** Allow await in loops in tests ([5f7da87](https://github.com/peerigon/configs/commit/5f7da87275958ae1e5e82dfaa66b9fbfe684e374))

# [6.0.0](https://github.com/peerigon/configs/compare/v5.5.0...v6.0.0) (2025-04-30)

### Features

- **eslint:** bump eslint-plugin-unicorn from 58.0.0 to 59.0.0 ([#66](https://github.com/peerigon/configs/issues/66)) ([ca94ee9](https://github.com/peerigon/configs/commit/ca94ee9e45d4823bbb59b8957d57d6cd059776cb))

### BREAKING CHANGES

- **eslint:** See https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v59.0.0

# [5.5.0](https://github.com/peerigon/configs/compare/v5.4.0...v5.5.0) (2025-04-28)

### Features

- **eslint:** bump @eslint/js from 9.25.0 to 9.25.1 ([#62](https://github.com/peerigon/configs/issues/62)) ([1b4f297](https://github.com/peerigon/configs/commit/1b4f297d0b8896fc7bd58f211bef1a66e56dde69))

# [5.4.0](https://github.com/peerigon/configs/compare/v5.3.0...v5.4.0) (2025-04-22)

### Features

- **eslint:** bump @eslint/compat from 1.2.7 to 1.2.8 ([#56](https://github.com/peerigon/configs/issues/56)) ([5cec583](https://github.com/peerigon/configs/commit/5cec583c7a3808b21e7ba7649a5bca92525194de))
- **eslint:** bump eslint-plugin-react from 7.37.4 to 7.37.5 ([#60](https://github.com/peerigon/configs/issues/60)) ([61b16e2](https://github.com/peerigon/configs/commit/61b16e2c7ed619f2e0a3f2fcfcefd65165fece8f))
- **eslint:** bump typescript-eslint from 8.29.1 to 8.30.1 ([#59](https://github.com/peerigon/configs/issues/59)) ([a949c91](https://github.com/peerigon/configs/commit/a949c91c04122e2f76543c961d4ea64194c8e2d0))

# [5.3.0](https://github.com/peerigon/configs/compare/v5.2.0...v5.3.0) (2025-04-16)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.40.4 to 1.47.2 ([#51](https://github.com/peerigon/configs/issues/51)) ([b138f19](https://github.com/peerigon/configs/commit/b138f19a72c4874fc89f3c7b47c95d92235f057d))

# [5.2.0](https://github.com/peerigon/configs/compare/v5.1.0...v5.2.0) (2025-04-16)

### Features

- **eslint:** bump typescript-eslint from 8.26.0 to 8.29.1 ([#55](https://github.com/peerigon/configs/issues/55)) ([f37f2cf](https://github.com/peerigon/configs/commit/f37f2cf5258c9603cee6313469b20584518ee9a3))

# [5.1.0](https://github.com/peerigon/configs/compare/v5.0.0...v5.1.0) (2025-04-07)

### Features

- bump @eslint-react/eslint-plugin from 1.37.3 to 1.40.4 ([#50](https://github.com/peerigon/configs/issues/50)) ([4df7f60](https://github.com/peerigon/configs/commit/4df7f60382c18bba7089cc16c87b4507d48a0c84))

# [5.0.0](https://github.com/peerigon/configs/compare/v4.4.2...v5.0.0) (2025-03-31)

### Features

- bump eslint-plugin-unicorn from 57.0.0 to 58.0.0 ([#46](https://github.com/peerigon/configs/issues/46)) ([199ebe8](https://github.com/peerigon/configs/commit/199ebe8317ddfa8a4bf6bf90b36e35eccd71c295))

### BREAKING CHANGES

- See eslint-plugin-unicorn release notes

## [4.4.2](https://github.com/peerigon/configs/compare/v4.4.1...v4.4.2) (2025-03-26)

### Bug Fixes

- **eslint:** Ignore noDefaultExport in config files ([ae8c3ea](https://github.com/peerigon/configs/commit/ae8c3ea86066d5cde34eac0edd5415dd617a4e43))

## [4.4.1](https://github.com/peerigon/configs/compare/v4.4.0...v4.4.1) (2025-03-24)

### Bug Fixes

- **typescript:** Turn lib configs into config partials ([295e617](https://github.com/peerigon/configs/commit/295e61777b9622ecf887c956c4539d8a027790b6))

# [4.4.0](https://github.com/peerigon/configs/compare/v4.3.0...v4.4.0) (2025-03-24)

### Features

- **eslint:** bump @eslint-react/eslint-plugin from 1.31.0 to 1.37.3 ([#41](https://github.com/peerigon/configs/issues/41)) ([904b1cf](https://github.com/peerigon/configs/commit/904b1cfe88148c55fb8b14fabcc82211fd1b151a))

# [4.3.0](https://github.com/peerigon/configs/compare/v4.2.0...v4.3.0) (2025-03-24)

### Bug Fixes

- **eslint:** Turn of unicorn/consistent-function-scoping ([6570db3](https://github.com/peerigon/configs/commit/6570db32a4037f0e00d99cfacc95a024f9892b95))

### Features

- Compile JS code instead of just emitDeclarationOnly ([c7d29f7](https://github.com/peerigon/configs/commit/c7d29f700ee53aa6be5b16175b355f000fba778c))
- **typescript:** Change base target to es2024 ([58b217a](https://github.com/peerigon/configs/commit/58b217ab0e4d64b7b969f1dbda748886f11009c5))

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
