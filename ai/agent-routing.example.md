# Agent Routing

Use this file as a fast index for coding agents in large repositories. Keep entries short and practical.

## Scope

Describe the repository purpose in 2-4 lines.

## Quick task map

- "<task type>" -> `<path-a>`, `<path-b>`, `<path-c>`
- "Add or modify API endpoint" -> `src/api/*`, `src/routes/*`, `tests/api/*`
- "UI component change" -> `src/components/*`, `src/pages/*`, `*.stories.*`
- "Build or release change" -> `package.json`, `.github/workflows/*`, `semantic-release/*`

## Entry points by area

### Authentication

- Start reading: `src/auth/index.ts`
- Core flow: `src/auth/service.ts`
- Tests: `src/auth/*.test.ts`

### Data layer

- Start reading: `src/db/client.ts`
- Migrations: `db/migrations/*`
- Contract tests: `tests/db/*`

## Validation commands

- Unit (scoped): `npm run test -- <path>`
- Types: `npm run test:types`
- Lint: `npm run test:lint`
- Full: `npm test && npm run build`

## Known traps

- "Import style is extensionless in app packages."
- "Feature flags are defined in `src/flags.ts`."
- "Integration tests require `.env.test`."
