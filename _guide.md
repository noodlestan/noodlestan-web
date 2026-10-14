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

## Conventions

This repository follows strict conventions.

Read the convention indexes listed below and follow them when planning and executing work.

The following conventions apply to all packages in this repository:

- `./node_modules/@noodlestan/conventions-typescript/art/index.md` — TypeScript conventions.
- `./node_modules/@noodlestan/conventions-unit-tests/art/index.md` — Unit Test conventions.

In case of ambiguity or conflict applying conventions, follow links from the convention indexes to extended convention files and read the examples there for what to follow and what to avoid.

## Workflows

Projects in this repository use the following workflows:

| Workflow / Path                                                            | Purpose                                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Planning Work** `$DOMAINS/work/workflows/planning-work/workflow.art`     | Create and manage work item lifecycles, collecting operational instructions according to context. |
| **Delegating Work** `$DOMAINS/work/workflows/delegating-work/workflow.art` | Organize work delegation to sub-agents with validation, execution, and verification.              |
| **Executing Work** `$DOMAINS/work/workflows/executing-work/workflow.art`   | Organize work execution by sub-agents to produce completed, verified outcomes and feedback.       |
| **Deploying** `$DOMAINS/deployments/workflows/deploying/workflow.art`      | Organizes deployment of artefacts in operations.                                                  |

### Roadmapping

This repository maintains one repository level roadmap:

- The roadmap lives at `_roadmap/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term roadmapping focus is captured in `_roadmap/_parking-lot.md`.

### Planning Work

This repository maintains one repository level backlog:

- The backlog lives at `_backlog/` with subdirectories such as `/3-now` and `/4-next/`.
- The short-term focus is captured in `_backlog/_parking-lot.md`.lot.md`.

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
