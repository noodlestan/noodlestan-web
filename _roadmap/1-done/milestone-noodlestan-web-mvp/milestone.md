# Milestone: Noodlestan Web MVP

**Id:** `noodlestan-web-mvp`

**Status:** `DONE`

**Template:** `$DOMAINS/milestones/templates/milestone.tart`

**Skill:** `write-milestone`

**Purpose:** Build the Noodlestan Website from initialization through content to identity and styling.

**Description:** Three-phase milestone covering website initialization, content development, and visual identity for noodlestan.org.

## Mandatory Reading

::READ `$DOMAINS/milestones/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable     | Resolved Path                | Purpose                    |
| ------------ | ---------------------------- | -------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory   |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Domain resources directory |

## Summary

Initialize the Noodlestan Website repository, deploy a hello-world site, develop project content and homepage sections, then establish visual identity through design exploration and token-based styling.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                       | Role                                              |
| ----------- | -------------------------- | ------------------------------------------------- |
| Parking Lot | `_backlog/_parking-lot.md` | Tracks short-term actionables, pending questions. |

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
| Application | Applications | — WIP (no Structure: Application yet)             |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |

### Workflows

| Workflow / Path                                                              | Purpose                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Workflow: Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work items lifecycle, collecting operational instructions. |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying/workflow.art`  | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.         |

### Knowledge

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting up, Verifying, Committing.

::READ `_guide.md` (Guide) — Defines the Noodlestan Web repository. Relevant for all phases.

## Scope

This milestone coordinates the full lifecycle of the Noodlestan Website from initialization to visual identity.

### (Scope) Application: Noodlestan Website

**Record:** `apps/noodlestan-web/_guide.md`

**Role:** — The main noodlestan.org website, built with Astro. Central resource across all phases.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

## Execution Context

Execution is coordinated from the Noodlestan Web checkout. All website development happens in the `apps/noodlestan-web/` subdirectory.

---

## Phases

| Index | Name                           | Status |
| ----- | ------------------------------ | ------ |
| `1`   | Initialize Website             | `DONE` |
| `2`   | Develop Noodlestan Web Content | `DONE` |
| `3`   | Identity and Styling           | `DONE` |

### Phase: 1 — Initialize Website

**Goal:** Scaffold the repository, provision infrastructure, and deploy a hello-world Astro site to noodlestan.org.

**Description:** Establish the Noodlestan Web repository with project records, deploy hello-world via AWS S3 + CloudFront, and refine deployment records.

**Status:** `DONE`

**Dependencies:**

- None.

### Phase: 2 — Develop Noodlestan Web Content

**Goal:** Add real content to noodlestan.org including project listings and homepage sections.

**Description:** Copy project records from workspace checkouts, build a JSON collection, create Astro collections, and render projects on the homepage. Add homepage sections for key content areas.

**Status:** `DONE`

**Dependencies:**

- Phase 1 complete (website initialized and deployed).

### Phase: 3 — Identity and Styling

**Goal:** Establish the visual identity and design system for noodlestan.org.

**Description:** Conduct design exploration, define design tokens, and implement consistent styling across the website.

**Status:** `DONE`

**Dependencies:**

- Phase 2 content defined (styling needs content to style).

---

## Items:

| Phase | Resource / Record                                                                          | Status |
| ----- | ------------------------------------------------------------------------------------------ | ------ |
| `1`   | Plan: Initialize Noodlestan Website `_backlog/1-done/plan-init-noodlestan-website/plan.md` | `DONE` |
| -     |                                                                                            |        |
| `2`   | Plan: Publish Project List `_backlog/1-done/plan-publish-project-list/plan.md`             | `DONE` |
| `2`   | Plan: Home Sections MVP `_backlog/1-done/plan-home-sections-mvp/plan.md`                   | `DONE` |
| -     |                                                                                            |        |
| `3`   | Plan: Design and Content `_backlog/1-done/plan-design-and-content/plan.md`                 | `DONE` |

## Work

### Next

- None. All 3 phases and all 5 plans are `DONE`; the milestone is closed.
- Next milestone candidate: CI/CD and staging deployment, plus content beyond the project list (see Follow Ups).

### Blockers

- None.

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
npm run art-work sanity
```

---

## Coordination

### Not In Scope

- **Backend functionality** — Static site only, no server-side rendering.
- **CMS integration** — Content managed via files, not a CMS.
- **Multi-language support** — English only for now.

### Evidence

- noodlestan.org deployed and accessible — S3 + CloudFront via the ops Terraform module, reusing the existing certificate and hosted zone, with the prod domain corrected to `noodlestan.org`.
- Project records structured with `code`, `website`, and `management` fields across 13 checkouts; 14 records synced into `data/_records/projects/` and projected into `data/projects/collection.json`.
- Homepage renders the project list from an Astro content collection, plus the AI-generated sections (hero, what we build, how we work, on AI, join us, footer).
- `npm run build` emits `dist/index.html` and `dist/404.html`; the identity asset set (`icon.svg`, `favicon.ico`, `apple-touch-icon.png`) resolves, and dark mode re-maps the semantic tokens with no component change.
- Every iteration of every plan is closed with its commits recorded by hash.

### Findings

- The workspace repository structure supports cross-repo coordination.
- Astro is well-suited to static content sites.
- Plan: Add 404 Page, Plan: Design Exploration, and Plan: Tokenize and Style were merged into Plan: Design and Content. The design and token work landed in the working tree before any of the three plans was written, so the merged plan records it as done rather than re-planning it.
- The ops repo already carried the noodlestan.org certificate and hosted zone, so the site only needed a new Terraform module referencing them; Art-Mantras was the working deployment reference pattern.
- Artisans was the scaffolding reference for configs, records, and scaffolders.
- Repository records live at `$WORKSPACE/_records/repositories/*.art` in a consistent format, and `npm run workspace clone` provisions checkouts idempotently.
- Homepage copy was generated by an AI writing tool from a written prompt kept as a plan attachment, rather than authored manually.
- The token sheet (`src/styles/global.css`) owns the document reset and `HomeLayout` owns the site chrome; carrying either in two places produced duplicates that had to be collapsed.
- Production had shipped two icon links that 404'd (`/icon.svg`, `/apple-touch-icon.png`) alongside an unreferenced `favicon.svg`; the settled asset set is `icon.svg`, `favicon.ico`, and `apple-touch-icon.png`.

### Decisions

- **Astro** — Static site generator, appropriate for documentation/content.
- **JSON collection** — Simple intermediate format for project data.
- **Token-based styling** — Design tokens for consistent, maintainable styling.
- **Single repo** — `noodlestan/web` hosts all noodlestan.org sites, not one repo per site.
- **Reuse existing infrastructure** — No new DNS; the website module references the shared certificate and hosted zone.
- **Terraform first** — Provision infrastructure before building the app, so deployment is verified end to end.
- **Scaffold from artisans** — Copy configs, records, and scaffolders from the artisans repo as the reference pattern.
- **Endpoints as build-time data** — Exposed via `src/consts.ts`; long-term source of truth is Art records generating `src/generated/endpoints.ts` (ADR `$APP/architecture/adr/endpoints.md`).
- **Component classification** — Site-wide components in `src/components/site/` (`Site*`); page content components in `src/components/pages/home/`.
- **`HomeLayout` owns the chrome, `PageLayout` delegates** — Standalone pages get a named contract without a second chrome source of truth.
- **Fonts from `fonts.bunny.net`** — Not Google Fonts; the token sheet's `--type-*` families name the loaded faces.

### Knowledge to Update

- ADR `$APP/architecture/adr/endpoints.md` — endpoints sourcing and exposure decisions (from Plan: Home Sections MVP).

### Follow Ups

- Add real content beyond project listings.
- Set up CI/CD for automatic deployment on push.
- Deploy the staging environment — the records exist but nothing is deployed.
- Replace the record-copy and collection scripts with a custom CLI reusing art-cli abstractions.
- Regenerate project records and `data/projects/collection.json` as a scripted step rather than by hand.
- Add the `about` page, and any further standalone page, through `PageLayout`.
- Adopt the reference's Markdown-page pattern so page metadata stops being hand-written per page; move site title and description into `src/consts.ts` once the literals start to drift.
- Create a routine that converts Art records into `src/generated/endpoints.ts`.
- Add project hierarchy (parent/child) and project status indicators (active/archived) to the project list.
- Crew action: commit or discard the staged `_guide.md` change in `checkouts/art-domains` before re-running the copy script.
- Decide whether closed milestones should be relocated out of `_roadmap/3-now/` — this checkout has no archive convention yet.

### Feedback

- `website` was added only where a public subdomain was clearly known (noodlestan-web, artisans, purrfect). For the other non-private repos (art-domains, art-js, artificials, conventions, purrception, purrpose, purrtrait) it was omitted rather than fabricated; specify these if intended. (Plan: Publish Project List)
