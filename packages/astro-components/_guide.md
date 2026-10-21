# Noodlestan Astro Components

The `@noodlestan/astro-components` package provides reusable Astro components and shared styles for Noodlestan websites.

## Recommended Reading

- `_guide.md` — this file: package overview, layout, records, and operating instructions.
- `README.md` — package usage and development scripts.
- `../../_guide.md` — repository setup, conventions, and verification.

## Package Layout

```
_records/      — package and NPM deployment records
src/           — Astro components and stylesheet source
```

## Records Management

Records are co-located with the resources they describe:

- **Package:** `_records/package.art`
- **Deployment:** `_records/npm-deployment.art`

## Conventions

This package follows strict conventions.

::READ `../../_guide.md` for repository-wide conventions.

## Operating Instructions

### Setting Up

Run from the repository root:

```bash
npm ci
```

### Verifying

Run from this package directory:

```bash
npm run lint:fix
npm run lint
npm run test
npm run build
npm run ci
```
