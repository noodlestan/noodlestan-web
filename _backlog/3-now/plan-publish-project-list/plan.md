# Plan: Publish Project List

**Id:** `publish-project-list`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Display a project list on noodlestan.org showing all Noodlestan repositories and their projects.

**Description:** Copy project records from workspace checkouts, build a JSON collection, create an Astro collection, and render projects on the homepage.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory                             |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory                           |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |
| `$RECORDS`        | `$WORKSPACE/_records/repositories`    | Workspace-level repository records                   |

## Summary

Add a project listing page to noodlestan.org that displays all Noodlestan repositories and their projects, sourced from workspace repository records.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                            | Role                                                           |
| ----------- | --------------------------------------------------------------- | -------------------------------------------------------------- |
| Plan        | `$NOODLESTAN_WEB/_backlog/3-now/plan-init-noodlestan-website/plan.md` | Previous plan that deployed the hello-world site.              |
| Parking Lot | `$MANAGEMENT/_roadmap/_parking-lot.md`                          | Tracks short-term actionables, pending questions, and blockers. |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Drafting, Refining.

### Domains

| Domain / Path                                        | Description                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.              |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path                             |
| ----------- | ------------ | ------------------------------------------------- |
| Project     | Projects     | `$DOMAINS/projects/structures/project.art`        |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |
| Application | Applications | — WIP                                             |

### Workflows

| Workflow / Path                                                        | Purpose                                                                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work.                    |

### Knowledge

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines plan record fields and statuses. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/plans/structures/iteration.art` (Structure) — Defines iteration as a container for changes and instructions. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/commits/types/commit.art` (Type) — Defines planned commit blueprints. Relevant for stages Drafting, Refining.

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for stages Setting up, Verifying, Committing.

## Scope

This plan adds a project listing to the Noodlestan Website.

### (Scope) Structure: Project

**Record:** `$DOMAINS/projects/structures/project.art`

**Role:** — Needs changes to add `code`, `website`, and `management` fields.

**Changes:**

- Add `code` field (URL) to project structure.
- Add `website` field (URL) to project structure.
- Add `management` field (NaturalBlock) to project structure.

### (Scope) Workspace: Noodlestan

**Record:** `$WORKSPACE/.agents/domains/projects/structures/project.art`

**Role:** — Hosts the project structure definition. Needs commits for structure changes.

**Changes:**

- Commit updated project structure to workspace repo.

### (Scope) Application: Noodlestan Website

**Record:** `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art`

**Role:** — The main noodlestan.org website, built with Astro. Receives new project list page.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`

**Changes:**

- Add `simple-git` dev dependency to root `package.json`.
- Create `$NOODLESTAN_WEB/scripts/copy-project-records.tsx` — copies project records from checkouts.
- Create `$NOODLESTAN_WEB/scripts/create-collection.tsx` — builds JSON collection from project records.
- Create Astro collection config for projects.
- Update homepage to render project list.

### (Scope) Repository: Noodlestan Web

**Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Role:** — Hosts the Noodlestan Website. Scripts run from this repo.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/`

### (Scope) Repository: Management

**Record:** `$MANAGEMENT/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

**Partial:**

- `owner` — Project: Management
- `path` — `$MANAGEMENT/`

### (Scope) Repository: Artisans

**Record:** `$ARTISANS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

**Partial:**

- `owner` — Project: Artisans
- `path` — `$ARTISANS/`

### (Scope) Repository: Ops

**Record:** `$OPS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

**Partial:**

- `owner` — Project: Ops
- `path` — `$OPS/`

## Execution Context

Execution is coordinated from `$WORKSPACE`. Scripts run from `$NOODLESTAN_WEB`. Project records are sourced from `$WORKSPACE/_records/repositories/` and individual checkout directories.

---

## Items:

| Iteration / Instructions                                                                                      | Status    |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| Iteration: Add Fields to Project Structure `plan-publish-project-list/instructions/add-project-fields.md`     | `DRAFT`   |
| Iteration: Populate New Project Fields `plan-publish-project-list/instructions/populate-project-fields.md`     | `DRAFT`   |
| Iteration: Copy Project Records `plan-publish-project-list/instructions/copy-project-records.md`              | `DRAFT`   |
| Iteration: Create Collection `plan-publish-project-list/instructions/create-collection.md`                     | `DRAFT`   |
| Iteration: Create Astro Collection `plan-publish-project-list/instructions/create-astro-collection.md`         | `DRAFT`   |
| Iteration: Render Projects on Homepage `plan-publish-project-list/instructions/render-projects.md`             | `DRAFT`   |

### Iteration: Add Fields to Project Structure

**Id:** `add-project-fields`

**Status:** `DRAFT`

**Purpose:** Add `code`, `website`, and `management` fields to the Project structure definition.

**Description:** Update `$DOMAINS/projects/structures/project.art` to include new fields for public repository URL, project website URL, and management approach. Commit the change to the workspace repo.

**Instructions:** `./plan-publish-project-list/instructions/add-project-fields.md`

**Changes:**

- Add `code` field (URL) to project structure shape.
- Add `website` field (URL) to project structure shape.
- Add `management` field (NaturalBlock) to project structure shape.
- Update example in structure to include new fields.

**Dependencies:**

- None.

#### Commits:

| ID                      | Repository / Checkout / Branch          | Policy       | Hash | Status   |
| ----------------------- | --------------------------------------- | ------------ | ---- | -------- |
| `add-project-fields`    | Workspace / `$WORKSPACE` / `main`       | `AUTONOMOUS` | (TBD) | `DRAFT`  |

##### Commit: `add-project-fields`

**Repository:** Workspace: Noodlestan

**Message:**

```
domains(projects): Add code, website, and management fields to Project structure

- code: URL for public repository
- website: URL for project website
- management: NaturalBlock for project management approach
```

### Iteration: Populate New Project Fields

**Id:** `populate-project-fields`

**Status:** `DRAFT`

**Purpose:** Populate the new `code`, `website`, and `management` fields in all project records across checkouts.

**Description:** Read project records from all checkouts that contain `_records/project.art`, extract information from co-located repository records and `_guide.md` files, and add the new fields. Commits are policy MANUAL for user review.

**Instructions:** `./plan-publish-project-list/instructions/populate-project-fields.md`

**Changes:**

- Update `$NOODLESTAN_WEB/_records/project.art` — add code, website, management.
- Update `$MANAGEMENT/_records/project.art` — add code, management (private, no website).
- Update `$ARTISANS/_records/project.art` — add code, website, management.
- Update `$OPS/_records/project.art` — add code, management (private, no website).

**Dependencies:**

- Iteration: Add Fields to Project Structure (structure must have new fields first).

#### Commits:

| ID                              | Repository / Checkout / Branch        | Policy     | Hash | Status   |
| ------------------------------- | ------------------------------------- | ---------- | ---- | -------- |
| `populate-noodlestan-web-fields` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `MANUAL` | (TBD) | `DRAFT`  |
| `populate-management-fields`     | Management / `$MANAGEMENT` / `main`   | `MANUAL`   | (TBD) | `DRAFT`  |
| `populate-artisans-fields`       | Artisans / `$ARTISANS` / `main`       | `MANUAL`   | (TBD) | `DRAFT`  |
| `populate-ops-fields`             | Ops / `$OPS` / `main`                 | `MANUAL`   | (TBD) | `DRAFT`  |

##### Commit: `populate-noodlestan-web-fields`

**Repository:** Repository: Noodlestan Web

**Message:**

```
records(noodlestan-web): Populate new project fields

- Add code, website, and management fields to project record.
```

##### Commit: `populate-management-fields`

**Repository:** Repository: Management

**Message:**

```
records(management): Populate new project fields

- Add code and management fields to project record.
```

##### Commit: `populate-artisans-fields`

**Repository:** Repository: Artisans

**Message:**

```
records(artisans): Populate new project fields

- Add code, website, and management fields to project record.
```

##### Commit: `populate-ops-fields`

**Repository:** Repository: Ops

**Message:**

```
records(ops): Populate new project fields

- Add code and management fields to project record.
```

### Iteration: Copy Project Records

**Id:** `copy-project-records`

**Status:** `DRAFT`

**Purpose:** Create a script that copies project.art files from workspace checkouts into the noodlestan-web data directory.

**Description:** Install `simple-git` as a dev dependency. Create `scripts/copy-project-records.tsx` that loads repository records from `_records/repositories/*.art`, clones/verifies each checkout, and copies `_records/project.art` to `data/projects/`.

**Instructions:** `./plan-publish-project-list/instructions/copy-project-records.md`

**Changes:**

- Install `simple-git@^3.24.0` as dev dependency in root `package.json`.
- Create `$NOODLESTAN_WEB/scripts/copy-project-records.tsx`.
- Create `$NOODLESTAN_WEB/data/projects/` directory.

**Dependencies:**

- Iteration: Populate New Project Fields (project records must have new fields before copying).

#### Commits:

| ID                     | Repository / Checkout / Branch              | Policy       | Hash | Status   |
| ---------------------- | ------------------------------------------- | ------------ | ---- | -------- |
| `add-copy-records-script` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `DRAFT` |

##### Commit: `add-copy-records-script`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): add project records copy script

- Install simple-git dev dependency.
- Create copy-project-records script to clone repos and copy project.art files.
```

### Iteration: Create Collection

**Id:** `create-collection`

**Status:** `DRAFT`

**Purpose:** Create a script that builds a JSON collection from copied project records.

**Description:** Create `scripts/create-collection.tsx` that loads project records from `data/projects/`, extracts resource fields via regex, filters out private projects, and saves to `data/projects/collection.json`.

**Instructions:** `./plan-publish-project-list/instructions/create-collection.md`

**Changes:**

- Create `$NOODLESTAN_WEB/scripts/create-collection.tsx`.
- Generate `$NOODLESTAN_WEB/data/projects/collection.json`.

**Dependencies:**

- Iteration: Copy Project Records (must run first to populate `data/projects/`).

#### Commits:

| ID                     | Repository / Checkout / Branch              | Policy       | Hash | Status   |
| ---------------------- | ------------------------------------------- | ------------ | ---- | -------- |
| `add-create-collection-script` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `DRAFT` |

##### Commit: `add-create-collection-script`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): add project collection builder

- Create create-collection script to build JSON from project records.
```

### Iteration: Create Astro Collection

**Id:** `create-astro-collection`

**Status:** `DRAFT`

**Purpose:** Create an Astro content collection that reads the JSON project data.

**Description:** Define an Astro collection config for projects that loads from `data/projects/collection.json`. Create a TypeScript type for project records.

**Instructions:** `./plan-publish-project-list/instructions/create-astro-collection.md`

**Changes:**

- Create `$NOODLESTAN_WEB/apps/noodlestan-web/src/content/config.ts` (or `collections.config.ts`).
- Define `projects` collection schema.

**Dependencies:**

- Iteration: Create Collection (must run first to generate `collection.json`).

#### Commits:

| ID                     | Repository / Checkout / Branch              | Policy       | Hash | Status   |
| ---------------------- | ------------------------------------------- | ------------ | ---- | -------- |
| `add-astro-project-collection` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `DRAFT` |

##### Commit: `add-astro-project-collection`

**Repository:** Repository: Noodlestan Web

**Message:**

```
feat(noodlestan-web): add Astro project collection

- Define projects collection config for JSON data source.
```

### Iteration: Render Projects on Homepage

**Id:** `render-projects`

**Status:** `DRAFT`

**Purpose:** Update the homepage to display the project list from the Astro collection.

**Description:** Update `src/pages/index.astro` to query the projects collection and render each project with name, repository link, website link, purpose, and description.

**Instructions:** `./plan-publish-project-list/instructions/render-projects.md`

**Changes:**

- Update `$NOODLESTAN_WEB/apps/noodlestan-web/src/pages/index.astro`.

**Dependencies:**

- Iteration: Create Astro Collection (must exist to query).

#### Commits:

| ID                     | Repository / Checkout / Branch              | Policy       | Hash | Status   |
| ---------------------- | ------------------------------------------- | ------------ | ---- | -------- |
| `render-projects-on-homepage` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `DRAFT` |

##### Commit: `render-projects-on-homepage`

**Repository:** Repository: Noodlestan Web

**Message:**

```
feat(noodlestan-web): render project list on homepage

- Query projects collection and render project cards.
- Display name, repository, website, purpose, and description.
```

---

## Work

### Next

Draft instructions for the first iteration: Copy Project Records.

### Blockers

- None.

## Operating Instructions

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/ops/writing-commit-message.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the commit message following the rules defined there.

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/setting-up.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm ci # to install dependencies.
npm run workspace clone {repo.name} # to create a new checkout of a known repository.
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm run workspace sanity # to check git status across all repos
```

---

## Coordination

### Not In Scope

- **List hierarchy** — For now just display a flat collection, no nesting or parent/child relationships.
- **Custom CLI** — The current scripts are a temporary solution; a custom CLI reusing art-cli abstractions will replace them later.

### Evidence

- TBD.

### Findings

- Repository records are at `$WORKSPACE/_records/repositories/*.art` with a consistent format: H1 `## Repository: {Name}`, fields for Purpose, Description, Remote, Private, Owner.
- The workspace `npm run workspace clone` command handles cloning repos idempotently.

### Decisions

- **JSON as intermediate format** — Scripts produce a flat JSON file that Astro reads via a content collection. Simple, debuggable, replaceable later.
- **simple-git for repo operations** — Used for clone, pull, branch, and config verification in the copy script.
- **Flat list** — No hierarchy in this iteration; just display all projects.

### Knowledge to Update

None.

### Follow Ups

- Replace scripts with custom CLI reusing art-cli abstractions.
- Add project hierarchy (parent/child relationships).
- Add project status indicators (active/archived).

### Feedback

None.
