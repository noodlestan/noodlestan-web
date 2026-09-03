# Plan: Publish Project List

**Id:** `publish-project-list`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Display a project list on noodlestan.org showing all Noodlestan repositories and their projects.

**Description:** Copy project records from workspace checkouts, build a JSON collection, create an Astro collection, and render projects on the homepage.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |
| `$RECORDS`        | `$WORKSPACE/_records/repositories`    | Workspace-level repository records |

## Summary

Add a project listing page to noodlestan.org that displays all Noodlestan repositories and their projects, sourced from workspace repository records.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                                       | Role                                                            |
| ----------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Milestone   | `$NOODLESTAN_WEB/_roadmap/3-now/milestone-noodlestan-web-mvp/milestone.md` | Owning Milestone.                                               |
| Parking Lot | `$MANAGEMENT/_roadmap/_parking-lot.md`                                     | Tracks short-term actionables, pending questions, and blockers. |

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

| Workflow / Path                                                        | Purpose                                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work. |

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

- Add `simple-git` and `tsx` dev dependencies to root `package.json`.
- Create `$NOODLESTAN_WEB/scripts/copy-project-records.ts` — copies project records from checkouts.
- Create `$NOODLESTAN_WEB/scripts/create-collection.ts` — builds JSON collection from project records.
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

### (Scope) Repository: Art Domains

**Record:** `$ART_DOMAINS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Art JS

**Record:** `$ART_JS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Artificials

**Record:** `$ARTIFICIALS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Conventions

**Record:** `$CONVENTIONS/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Purrception

**Record:** `$PURRCEPTION/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Purrfect

**Record:** `$PURRFECT/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Purrpose

**Record:** `$PURRPOSE/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Purrtrait

**Record:** `$PURRTRAIT/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

### (Scope) Repository: Workspace Tooling

**Record:** `$WORKSPACE_TOOLING/_records/repository.art`

**Role:** — Contains project records that need new fields populated.

## Execution Context

Execution is coordinated from `$WORKSPACE`. Scripts run from `$NOODLESTAN_WEB`. Project records are sourced from `$WORKSPACE/_records/repositories/` and individual checkout directories.

---

## Items:

| Iteration / Instructions                                                                                   | Status |
| ---------------------------------------------------------------------------------------------------------- | ------ |
| Iteration: Add Fields to Project Structure `plan-publish-project-list/instructions/add-project-fields.md`  | `DONE` |
| Iteration: Populate New Project Fields `plan-publish-project-list/instructions/populate-project-fields.md` | `DONE` |
| Iteration: Copy Project Records `plan-publish-project-list/instructions/copy-project-records.md`           | `DONE` |
| Iteration: Create Collection `plan-publish-project-list/instructions/create-collection.md`                 | `DONE` |
| Iteration: Create Astro Collection `plan-publish-project-list/instructions/create-astro-collection.md`     | `DONE` |
| Iteration: Render Projects on Homepage `plan-publish-project-list/instructions/render-projects.md`         | `DONE` |
| Iteration: Sync Project Records and Collection —                                                           | `DONE` |

### Iteration: Add Fields to Project Structure

**Id:** `add-project-fields`

**Status:** `DONE`

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

| ID                   | Repository / Checkout / Branch    | Policy       | Hash      | Status      |
| -------------------- | --------------------------------- | ------------ | --------- | ----------- |
| `add-project-fields` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `820f98c` | `COMMITTED` |

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

**Status:** `DONE`

**Purpose:** Populate the new `code`, `website`, and `management` fields in all project records across all checkouts, and update each repository's `_guide.md`.

**Description:** For each checkout with `_records/project.art`: branch, read project and repository records, update project.art with new fields, execute the create-project-guide routine to update `_guide.md`, and commit. All commits are policy AUTONOMOUS.

**Instructions:** `./plan-publish-project-list/instructions/populate-project-fields.md`

**Report:** `./plan-publish-project-list/instructions/populate-project-fields__report.md`

**Changes:**

- Update `$NOODLESTAN_WEB/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$MANAGEMENT/_records/project.art` — add code, management (private). Update `_guide.md`.
- Update `$ARTISANS/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$OPS/_records/project.art` — add code, management (private). Update `_guide.md`.
- Update `$ART_DOMAINS/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$ART_JS/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$ARTIFICIALS/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$CONVENTIONS/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$PURRCEPTION/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$PURRFECT/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$PURRPOSE/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$PURRTRAIT/_records/project.art` — add code, website, management. Update `_guide.md`.
- Update `$WORKSPACE_TOOLING/_records/project.art` — add code, website, management. Update `_guide.md`.

**Dependencies:**

- Iteration: Add Fields to Project Structure (structure must have new fields first).

#### Commits:

| ID                                  | Repository / Checkout / Branch                                                   | Policy       | Hash      | Status      |
| ----------------------------------- | -------------------------------------------------------------------------------- | ------------ | --------- | ----------- |
| `populate-noodlestan-web-fields`    | Noodlestan Web / `$NOODLESTAN_WEB` / `add-project-fields-and-update-guide`       | `AUTONOMOUS` | `3188cb0` | `COMMITTED` |
| `populate-management-fields`        | Management / `$MANAGEMENT` / `add-project-fields-and-update-guide`               | `AUTONOMOUS` | `c5a92f1` | `COMMITTED` |
| `populate-artisans-fields`          | Artisans / `$ARTISANS` / `add-project-fields-and-update-guide`                   | `AUTONOMOUS` | `478afec` | `COMMITTED` |
| `populate-ops-fields`               | Ops / `$OPS` / `add-project-fields-and-update-guide`                             | `AUTONOMOUS` | `be99372` | `COMMITTED` |
| `populate-art-domains-fields`       | Art Domains / `$ART_DOMAINS` / `add-project-fields-and-update-guide`             | `AUTONOMOUS` | `b324bef` | `COMMITTED` |
| `populate-art-js-fields`            | Art JS / `$ART_JS` / `add-project-fields-and-update-guide`                       | `AUTONOMOUS` | `604e549` | `COMMITTED` |
| `populate-artificials-fields`       | Artificials / `$ARTIFICIALS` / `add-project-fields-and-update-guide`             | `AUTONOMOUS` | `3dc4359` | `COMMITTED` |
| `populate-conventions-fields`       | Conventions / `$CONVENTIONS` / `add-project-fields-and-update-guide`             | `AUTONOMOUS` | `37780ae` | `COMMITTED` |
| `populate-purrception-fields`       | Purrception / `$PURRCEPTION` / `add-project-fields-and-update-guide`             | `AUTONOMOUS` | `1807218` | `COMMITTED` |
| `populate-purrfect-fields`          | Purrfect / `$PURRFECT` / `add-project-fields-and-update-guide`                   | `AUTONOMOUS` | `7f4c7cb` | `COMMITTED` |
| `populate-purrpose-fields`          | Purrpose / `$PURRPOSE` / `add-project-fields-and-update-guide`                   | `AUTONOMOUS` | `59760d2` | `COMMITTED` |
| `populate-purrtrait-fields`         | Purrtrait / `$PURRTRAIT` / `add-project-fields-and-update-guide`                 | `AUTONOMOUS` | `8a3b959` | `COMMITTED` |
| `populate-workspace-tooling-fields` | Workspace Tooling / `$WORKSPACE_TOOLING` / `add-project-fields-and-update-guide` | `AUTONOMOUS` | `b4538e3` | `COMMITTED` |

##### Commit: `populate-noodlestan-web-fields`

**Message:**

```
records({project-name}): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

### Iteration: Copy Project Records

**Id:** `copy-project-records`

**Status:** `DONE`

**Purpose:** Create a script that copies project.art files from workspace checkouts into the noodlestan-web data directory.

**Description:** Install `simple-git` and `tsx` as dev dependencies. Create `scripts/copy-project-records.ts` that loads repository records from `_records/repositories/*.art`, clones/verifies each checkout, and copies `_records/project.art` to `data/_records/projects/`.

**Instructions:** `./plan-publish-project-list/instructions/copy-project-records.md`

**Report:** `./plan-publish-project-list/instructions/copy-project-records__report.md`

**Changes:**

- Install `simple-git@^3.24.0` and `tsx@^4.8.1` as dev dependencies in root `package.json`.
- Create `$NOODLESTAN_WEB/scripts/copy-project-records.ts`.
- Create `$NOODLESTAN_WEB/data/_records/projects/` directory.
- Enrich each copied project.art with a `Remote` field (from the repository record) so downstream scripts can derive URLs without hardcoding the org.

**Dependencies:**

- Iteration: Populate New Project Fields (project records must have new fields before copying).

#### Commits:

| ID                        | Repository / Checkout / Branch                              | Policy       | Hash      | Status      |
| ------------------------- | ----------------------------------------------------------- | ------------ | --------- | ----------- |
| `add-copy-records-script` | Noodlestan Web / `$NOODLESTAN_WEB` / `publish-project-list` | `AUTONOMOUS` | `d2fa4ba` | `COMMITTED` |

##### Commit: `add-copy-records-script`

**Repository:** Repository: Noodlestan Web

**Hash:** `d2fa4ba`

**Message:**

```
build(noodlestan-web): add project records copy script

- Install simple-git and tsx dev dependencies.
- Create copy-project-records script to clone repos and copy project.art files.
```

### Iteration: Create Collection

**Id:** `create-collection`

**Status:** `DONE`

**Purpose:** Create a script that builds a JSON collection from copied project records.

**Description:** Create `scripts/create-collection.ts` that loads project records from `data/_records/projects/`, extracts fields from project.art (including `id`, `website`, `code`), derives `code` from the `Remote` field when missing, filters out private projects, and saves to `data/projects/collection.json`. Add `update-project-collection` npm script and document it in README and `_guide.md`.

**Instructions:** `./plan-publish-project-list/instructions/create-collection.md`

**Report:** `./plan-publish-project-list/instructions/create-collection__report.md`

**Changes:**

- Create `$NOODLESTAN_WEB/scripts/create-collection.ts`.
- Add `update-project-collection` script to `$NOODLESTAN_WEB/package.json`.
- Document `update-project-collection` in `$NOODLESTAN_WEB/README.md`.
- Add "Updating Project Collection" section to `$NOODLESTAN_WEB/_guide.md`.
- Generate `$NOODLESTAN_WEB/data/projects/collection.json`.

**Dependencies:**

- Iteration: Copy Project Records (must run first to populate `data/_records/projects/`).

#### Commits:

| ID                             | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| ------------------------------ | ------------------------------------------- | ------------ | --------- | ----------- |
| `add-create-collection-script` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `323351c` | `COMMITTED` |

##### Commit: `add-create-collection-script`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): add project collection builder

- Create create-collection script to build JSON from project records.
- Add update-project-collection npm script.
- Document update-project-collection in README and _guide.md.
```

### Iteration: Create Astro Collection

**Id:** `create-astro-collection`

**Status:** `DONE`

**Purpose:** Create an Astro content collection that reads the JSON project data using the Content Layer API.

**Description:** Create `src/content.config.ts` using `file()` loader from `astro/loaders`. Schema reflects collection.json items: `id` + nested `project` object (name, purpose, description, website, code, repository, owner, resources, private).

**Instructions:** `./plan-publish-project-list/instructions/create-astro-collection.md`

**Report:** `./plan-publish-project-list/instructions/create-astro-collection__report.md`

**Changes:**

- Create `$NOODLESTAN_WEB/apps/noodlestan-web/src/content.config.ts` (Content Layer API).
- Define `projects` collection using `file()` loader from `astro/loaders`.

**Dependencies:**

- Iteration: Create Collection (must run first to generate `collection.json`).

#### Commits:

| ID                             | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| ------------------------------ | ------------------------------------------- | ------------ | --------- | ----------- |
| `add-astro-project-collection` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `a8f568d` | `COMMITTED` |

##### Commit: `add-astro-project-collection`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): add Astro project collection

- Define projects collection config using file() loader from astro/loaders.
- Schema validates collection.json items: id + nested project object (name, purpose, description, website, code, repository, owner, resources, private).
```

### Iteration: Render Projects on Homepage

**Id:** `render-projects`

**Status:** `DONE`

**Purpose:** Update the homepage to display the project list from the Astro collection.

**Description:** Update `src/pages/index.astro` to query the projects collection via `getCollection("projects")` and render each project with name, repository link, website link, purpose, and description. Uses nested `project.data.project.*` fields. No CSS.

**Instructions:** `./plan-publish-project-list/instructions/render-projects.md`

**Report:** `./plan-publish-project-list/instructions/render-projects__report.md`

**Changes:**

- Update `$NOODLESTAN_WEB/apps/noodlestan-web/src/pages/index.astro`.

**Dependencies:**

- Iteration: Create Astro Collection (must exist to query).

#### Commits:

| ID                            | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| ----------------------------- | ------------------------------------------- | ------------ | --------- | ----------- |
| `render-projects-on-homepage` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `dbed616` | `COMMITTED` |

##### Commit: `render-projects-on-homepage`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): render project list on homepage

- Query projects collection via getCollection("projects").
- Display name, code (GitHub), website, purpose, and description.
```

### Iteration: Sync Project Records and Collection

**Id:** `sync-project-records`

**Status:** `DONE`

**Purpose:** Commit remaining uncommitted changes: updated project/repo records, re-synced project copies, and generated collection.

**Description:** The `populate-project-fields` and `copy-project-records` iterations left behind updated root records and re-synced copies. The `create-collection` iteration generated `collection.json`. These are all unstaged. Commit them in two logical commits: first the project identity updates, then the re-synced data and generated output.

**Dependencies:**

- Iteration: Create Collection (generates `collection.json`).
- Iteration: Populate New Project Fields (source of updated record content).

#### Commits:

| ID                        | Repository / Checkout / Branch                              | Policy   | Hash      | Status      |
| ------------------------- | ----------------------------------------------------------- | -------- | --------- | ----------- |
| `update-project-identity` | Noodlestan Web / `$NOODLESTAN_WEB` / `publish-project-list` | `MANUAL` | `cee0388` | `COMMITTED` |
| `sync-project-collection` | Noodlestan Web / `$NOODLESTAN_WEB` / `publish-project-list` | `MANUAL` | `ef1cd36` | `COMMITTED` |

##### Commit: `update-project-identity`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** MANUAL — Commit and wait for crew approval.

**Files:**

- `_records/project.art` — updated purpose, description, owner, management
- `_records/repository.art` — updated purpose, description
- `README.md` — title and description reflect monorepo
- `_guide.md` — workflow details and monorepo description
- `package.json` — name and description updated

**Message:**

```
docs(noodlestan-web): update project and repository identity

- Update purpose, description, and owner in project and repository records.
- Reflect monorepo scope in README, _guide, and package.json.
```

##### Commit: `sync-project-collection`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** MANUAL — Commit and wait for crew approval.

**Files:**

- `data/_records/projects/*.art` — 14 re-synced project records with updated fields
- `data/projects/collection.json` — generated JSON collection (untracked)

**Message:**

```
data(noodlestan-web): sync project records and generated collection

- Re-sync 14 project record copies with updated purpose, description, management.
- Commit generated collection.json from create-collection script.
```

---

## Work

### Next

All iterations DONE. Plan complete.

### Blockers

- None. `copy-project-records` was BLOCKED on first delegation (path bug, hosting branch, dirty checkout); instruction fixed and re-delegated successfully.
- Crew action (workspace state, outside plan scope): `checkouts/art-domains` has a staged `_guide.md` change; commit or discard before re-running the copy script.

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

- All 13 project records populated with `code`, `website` (non-private with known subdomain), and `management` fields; all 13 `_guide.md` files regenerated via the project-guide template. Purposes/Descriptions verified under 200 chars.
- Commits created on each `add-project-fields-and-update-guide` branch (not pushed, policy MANUAL). See report: `./plan-publish-project-list/instructions/populate-project-fields__report.md`.
- `copy-project-records` DONE: `scripts/copy-project-records.ts` created; script verified and populated `data/_records/projects/` with 14 `.art` files; commit `d2fa4ba` pushed to `origin/publish-project-list`. See report: `./plan-publish-project-list/instructions/copy-project-records__report.md`.

### Findings

- Repository records are at `$WORKSPACE/_records/repositories/*.art` with a consistent format: H1 `## Repository: {Name}`, fields for Purpose, Description, Remote, Private, Owner.
- The workspace `npm run workspace clone` command handles cloning repos idempotently.

### Decisions

- **JSON as intermediate format** — Scripts produce a JSON file (items with `id` + nested `project` object) that Astro reads via a content collection. Simple, debuggable, replaceable later.
- **simple-git for repo operations** — Used for clone, pull, branch, and config verification in the copy script.
- **Flat list** — No hierarchy in this iteration; just display all projects.

### Knowledge to Update

None.

### Follow Ups

- Replace scripts with custom CLI reusing art-cli abstractions.
- Add project hierarchy (parent/child relationships).
- Add project status indicators (active/archived).

### Feedback

- `website` added only where a public subdomain was clearly known (noodlestan-web, artisans, purrfect). For other non-private repos (art-domains, art-js, artificials, conventions, purrception, purrpose, purrtrait) no subdomain was evident, so `website` was omitted rather than fabricated. Planner may want to specify these if intended.
