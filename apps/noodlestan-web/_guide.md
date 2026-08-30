# Noodlestan Website

The `apps-noodlestan-web` package is an Astro-based static website for Noodlestan, deployed to production on AWS S3 with CloudFront.

## Recommended Reading

Agents SHOULD scan these files for definitions and resource locations when faced with uncertainty or ambiguity that may result from missing resources.

- `_guide.md` — this file: package overview, layout, and operating instructions.
- `README.md` — package readme.

## Package Layout

```
_records/           — package and deployment records
public/             — static assets
src/                — source code
```

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Package:** `_records/package.art`
- **Deployment:** `_records/static-web-deployment.art`

## Knowledge References

This package does not maintain a dedicated architecture reference.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Step

**Instructions:**

Run from this package directory:

```bash
npm run build # to produce a full build
```

### Operating Instructions: Verifying Completion

**Instructions:**

Run from this package directory:

```bash
npm run build # to produce a full build
```
