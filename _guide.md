# Guide: Noodlestan Web

MVP Noodlestan Website — Astro-based website for Noodlestan.

## Recommended Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions.

- `_guide.md` — this file: system overview, layout, setup, verification.

## Repository Layout

```
_backlog/           — plans, instructions, reports
_records/           — project, repository, namespace, and scaffolder records
src/                — source code
```

## Setup

Run at the root of the repository:

```bash
npm ci # to install dependencies.
```

## Verification

Run from the repository root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Namespace:** `_records/namespace.art`
- **Scaffolders:** `_records/scaffolders/`
- **License:** `_records/license.art`

## Planning Workflow

This project plans its work with the plan workflow defined in the workspace's `.agents/domains/plans/index.md`.

The backlog lives at `_backlog/` with subdirectories such as `3-now/` (implementation in progress).
