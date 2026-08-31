# Noodlestan Web

Initialize Noodlestan Website — Astro-based website for Noodlestan.

## Recommended Reading

Agents SHOULD scan these files for definitions and resource locations when faced with uncertainty or ambiguity that may result from missing resources.

- `_guide.md` — this file: system overview, layout, records, workflows, and operating instructions.
- `_records/project.art` — the project record.
- `_records/repository.art` — the repository record.

## Repository Layout

```
_guide.md           — this file
_backlog/           — plans, instructions, reports
_records/           — project, repository, namespace, and license records
apps/               — application packages
```

## Projects

| Project            | Guide                           | Backlog |
| ------------------ | ------------------------------- | ------- |
| Noodlestan Website | `apps/noodlestan-web/_guide.md` | `NONE`  |

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Namespace:** `_records/namespace.art`
- **License:** `_records/license.art`
- **Scaffolders:** `_records/scaffolders/`

## Workflows

### Planning Work

This project plans its work with the workflow defined in `$DOMAINS/work/workflows/planning-work/workflow.art`.

- The backlog lives at `_backlog/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term focus is captured in `_backlog/_parking-lot.md`.
- The requirements, use cases, and principles are captured in `_backlog/_architect.md`.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Commit

**Instructions:**

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint, build and test
```

### Operating Instructions: Verifying Completion

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run ci # lint, build and test
```
