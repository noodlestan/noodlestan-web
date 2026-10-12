# Milestone: Noodlestan Web Next

**Id:** `noodlestan-web-next`

**Status:** `PLANNING`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Skill:** `write-milestone`

**Purpose:** Advance noodlestan.org beyond the MVP by making projects searchable and extracting the site's Astro components into a reusable package.

**Description:** Two-phase milestone covering a client-side search proof of concept over the project collection, and the creation of the first Noodlestan Astro components package.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |

## Summary

Add client-side search over the project collection as a proof of concept, then extract the design tokens and site chrome into a reusable Astro components package that future noodlestan.org sites share.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                        | Role                                                                     |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| Milestone   | `_roadmap/1-done/milestone-noodlestan-web-mvp/milestone.md` | Delivered the site, content, and design system this milestone builds on. |
| Parking Lot | `_roadmap/_parking-lot.md`                                  | Source of both plans in this milestone.                                  |
| Briefing    | `_backlog/_architect.md`                                    | Project goals, scope, and principles.                                    |

### Required Skills

- `write-milestone` — Coordinates plans across phases.
- `write-plan` — Generates plans from sources and context.

### Domains

| Domain / Path                                       | Description                                                                  |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, refining, and integrating. |
| Domain: Deployments `$DOMAINS/deployments/index.md` | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.         |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path                             |
| ----------- | ------------ | ------------------------------------------------- |
| Application | Applications | — WIP                                             |
| Package     | Packages     | `$DOMAINS/packages/structures/package.art`        |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |

### Workflows

| Workflow / Path                                                              | Purpose                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Workflow: Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work items lifecycle, collecting operational instructions. |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying/workflow.art`  | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.         |

### Knowledge

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting up, Verifying, Committing.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for all phases.

::READ `$APP/_guide.md` (Guide) — Defines the Astro application operations. Relevant for all phases.

::READ `$DOMAINS/engineering/_guide.md` (Guide) — Defines the architect, delegator, and worker roles and the instruction/report working agreements. Relevant when refining and delegating plans.

::READ `$APP/knowledge/adr/endpoints.md` (ADR) — Endpoints sourcing and exposure decisions. Relevant when components carry links.

## Scope

This milestone builds on the delivered MVP. The search proof of concept works over the existing project collection; the components package extracts what already exists in `$APP/src` rather than redesigning it.

### (Scope) Application: Noodlestan Website

**Record:** `$APP/_guide.md`

**Role:** — The main noodlestan.org website, built with Astro. Receives search, then consumes the components package.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

**Changes:**

- Add client-side search over the `projects` collection.
- Replace local token and chrome imports with imports from the components package.

### (Scope) Package: Noodlestan Astro Components

**Record:** `$NOODLESTAN_WEB/packages/astro-components/_records/package.art`

**Role:** — New — reusable Astro components and design tokens shared by noodlestan.org sites.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/packages/astro-components/`
- `name` — `@noodlestan/astro-components` — placeholder, see Blockers.

**Changes:**

- Create the package with its records and its build and export surface.
- Move the token sheet and the site chrome into it.
- Have the website import from it.

### (Scope) Repository: Noodlestan Web

**Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Role:** — Hosts the website and the new package.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/`

## Execution Context

Execution is coordinated from the Noodlestan Web checkout. Website work happens in `apps/noodlestan-web/`; package work happens in `packages/astro-components/`.

---

## Phases

| Index | Name                     | Status     |
| ----- | ------------------------ | ---------- |
| `1`   | Search Projects POC      | `PLANNING` |
| `2`   | Astro Components Package | `PLANNING` |

### Phase: 1 — Search Projects POC

**Goal:** Let visitors find projects on noodlestan.org by searching the project collection.

**Description:** Add a client-side search input that filters the rendered project list as the visitor types, over the `projects` Astro collection already shipped as static JSON. No backend and no external search service.

**Status:** `PLANNING`

**Dependencies:**

- None — the `projects` collection is already rendered on the homepage.

### Phase: 2 — Astro Components Package

**Goal:** Extract the design tokens and site chrome into a reusable package so future noodlestan.org sites share one implementation.

**Description:** Create the first package in this monorepo, move `global.css` and the `Site*` chrome components into it, and have the website consume it through the workspace dependency.

**Status:** `PLANNING`

**Dependencies:**

- The package name is not yet decided — see Blockers.

---

## Items:

| Phase | Resource / Record                                                                                          | Status     |
| ----- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| `1`   | Plan: Search Projects POC `_backlog/3-now/plan-search-projects-poc/plan.md`                                | `PLANNING` |
| `2`   | Plan: Create Noodlestan Astro Components Package `_backlog/3-now/plan-noodlestan-astro-components/plan.md` | `PLANNING` |

## Work

### Next

Refine both plans to `READY`, then delegate the first iteration of `Plan: Search Projects POC`.

### Blockers

- **Package Name** blocked because the components package name is undecided — the phase and its plan use `@noodlestan/astro-components` as a placeholder.

---

## Operating Instructions

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/writing-commit-message/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the commit message following the rules defined there.

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/setting-up/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

```bash
npm ci # to install dependencies.
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

```bash
npm run art-work sanity # to check git status across all repos
```

---

## Coordination

### Not In Scope

- **Server-side or hosted search** — the proof of concept is client-side over the statically built collection.
- **A second noodlestan.org site** — the package is extracted for future sites, but none is built here.
- **CMS integration** — content stays file-based.

### Evidence

- None yet.

### Findings

- None yet.

### Decisions

- **Search stays client-side** — the collection is already shipped as static data, so a proof of concept should not introduce a service to operate.
- **Extract, do not redesign** — the components package moves the existing tokens and chrome; restyling is separate work.

### Knowledge to Update

- None.

### Follow Ups

Carried from `Milestone: Noodlestan Web MVP` and deliberately not covered here:

- Set up CI/CD for automatic deployment on push.
- Deploy the staging environment.
- Add real content beyond project listings.

### Feedback

- None.
