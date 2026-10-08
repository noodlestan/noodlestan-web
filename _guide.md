# Guide: Noodlestan Web

> Host the Noodlestan websites source code and content and manage their backlogs.

Monorepo containing source code of Noodlestan websites and their backlogs, and shared content reusable in websites hosted in other repositories.

Uses Workflow: Planning Work with one backlog per package, coordinating with Workflow: Roadmapping from one project-wide roadmap.

## Recommended Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions that may result from missing definitions.

- `_guide.md` — this file: system overview, layout, setup, verification.

## Repository Layout

```
_guide.md    — this file
_backlog/    — plans, instructions, reports
_records/    — records (project, repository, namespaces, scaffolders, license)
_roadmap/    — roadmap
apps/        — application packages
data/        — data for applications (e.g. project records)
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

A copy all `project.art` records from know repositories is kept at `data/_records/projects/` and updated via **Operating Instructions: Updating Project Records**.

## Tooling

Shared configuration from Noodlestan workspace-tooling:

- `@noodlestan/eslint-config` — shared ESLint rules.
- `@noodlestan/tsconfig` — shared TypeScript configurations.
- `@noodlestan/prettier-config` — shared Prettier rules, selected from the root `package.json` with the `prettier` field.

The field resolves the package through Node module resolution, so no Prettier configuration file lives in this repository. Files left unformatted are listed in `.prettierignore`. `apps/noodlestan-web` overrides it with `@noodlestan/prettier-config-astro` for `.astro` files.

Toolchain: `vitest` (tests), `turbo` (task orchestration), `lefthook` (pre-commit hooks).

## Workflows

Projects in this repository use the following workflows:

| Workflow / Path                                                        | Purpose                                                                                           |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Roadmapping** `$DOMAINS/roadmaps/workflows/roadmapping/workflow.art` | Organize roadmap creation and maintenance and coordination of downstream work items.              |
| **Planning Work** `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work item lifecycles, collecting operational instructions according to context. |

### Roadmapping

- The roadmap lives at `_roadmap/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term roadmapping focus is captured in `_backlog/_parking-lot.md`.

### Planning Work

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

### Operating Instructions: Updating Project Records

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run update-project-records
```

Copies project.art files from workspace `_records/repositories` into the noodlestan-web `data/_records/projects/` directory.

### Operating Instructions: Updating Project Collection

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run update-project-collection
```

Generates `data/projects/collection.json` from the project.art files in `data/_records/projects/`.

### Operating Instructions: Verifying Completion

**Instructions:**

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint, test and build
```
