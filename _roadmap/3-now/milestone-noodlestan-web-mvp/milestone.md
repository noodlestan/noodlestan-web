# Milestone: Noodlestan Web MVP

**Id:** `noodlestan-web-mvp`

**Status:** `PLANNING`

**Template:** `$DOMAINS/roadmaps/templates/milestone.tart`

**Skill:** `write-milestone`

**Purpose:** Build the Noodlestan Website from initialization through content to identity and styling.

**Description:** Three-phase milestone covering website initialization, content development, and visual identity for noodlestan.org.

## Mandatory Reading

::READ `$DOMAINS/roadmaps/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE` | Current working directory             | Workspace root directory                             |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains`          | Domain resources directory                           |

## Summary

Initialize the Noodlestan Website repository, deploy a hello-world site, develop project content and homepage sections, then establish visual identity through design exploration and token-based styling.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                  | Role                                              |
| ----------- | ------------------------------------- | ------------------------------------------------- |
| Parking Lot | `_backlog/_parking-lot.md`                       | Tracks short-term actionables, pending questions.        |

### Required Skills

- `write-milestone` — Coordinates plans across phases.
- `write-plan` — Generates plans from sources and context.

### Domains

| Domain / Path                                        | Description                                                                  |
| ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.        |
| Domain: Deployments `$DOMAINS/deployments/index.md`  | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.         |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path                             |
| ----------- | ------------ | ------------------------------------------------- |
| Application | Applications | — WIP (no Structure: Application yet)             |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |

### Workflows

| Workflow / Path                                                        | Purpose                                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Workflow: Planning `$DOMAINS/plans/workflows/planning.art`             | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying.art`     | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.               |

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

| Index | Name                           | Status     |
| ----- | ------------------------------ | ---------- |
| `1`   | Initialize Website             | `DONE`     |
| `2`   | Develop Noodlestan Web Content | `PLANNING` |
| `3`   | Identity and Styling           | `PLANNING` |

### Phase: 1 — Initialize Website

**Goal:** Scaffold the repository, provision infrastructure, and deploy a hello-world Astro site to noodlestan.org.

**Description:** Establish the Noodlestan Web repository with project records, deploy hello-world via AWS S3 + CloudFront, and refine deployment records.

**Status:** `DONE`

**Dependencies:**

- None.

### Phase: 2 — Develop Noodlestan Web Content

**Goal:** Add real content to noodlestan.org including project listings and homepage sections.

**Description:** Copy project records from workspace checkouts, build a JSON collection, create Astro collections, and render projects on the homepage. Add homepage sections for key content areas.

**Status:** `PLANNING`

**Dependencies:**

- Phase 1 complete (website initialized and deployed).

### Phase: 3 — Identity and Styling

**Goal:** Establish the visual identity and design system for noodlestan.org.

**Description:** Conduct design exploration, define design tokens, and implement consistent styling across the website.

**Status:** `PLANNING`

**Dependencies:**

- Phase 2 content defined (styling needs content to style).

---

## Items:

| Phase | Resource / Record                                                                               | Status     |
| ----- | ----------------------------------------------------------------------------------------------- | ---------- |
| `1`   | Plan: Initialize Noodlestan Website `_backlog/1-done/plan-init-noodlestan-website/plan.md`     | `DONE`     |
| -     |                                                                                                 |            |
| `2`   | Plan: Publish Project List `_backlog/3-now/plan-publish-project-list/plan.md`                   | `READY`    |
| `2`   | Plan: Home Sections MVP                                                                         | `PLANNING` |
| -     |                                                                                                 |            |
| `3`   | Plan: Design Exploration                                                                        | `PLANNING` |
| `3`   | Plan: Tokenize and Style                                                                        | `PLANNING` |

The following items are not yet captured in a work item document.

### Plan: Home Sections MVP

**Status:** `PLANNING`

**Purpose:** Define and implement the core homepage sections for noodlestan.org.

**Description:** Create the main content sections for the homepage: hero, about, projects highlights, and footer. Establish layout patterns and component structure.

**Changes:**

- Design homepage section layout.
- Create Astro components for each section.
- Implement responsive design.
- Add content for each section.

**Dependencies:**

- Plan: Publish Project List (project list must exist to feature on homepage).

### Plan: Design Exploration

**Status:** `PLANNING`

**Purpose:** Explore visual direction and design language for noodlestan.org.

**Description:** Research and propose visual identity options including typography, color palette, imagery style, and layout patterns. Produce design references and direction.

**Changes:**

- Research design references and inspiration.
- Propose 2-3 visual directions.
- Select and document chosen direction.
- Create mood board and style guide.

**Dependencies:**

- Phase 2 content defined (design needs content context).

### Plan: Tokenize and Style

**Status:** `PLANNING`

**Purpose:** Translate design direction into a token-based styling system.

**Description:** Define design tokens (colors, typography, spacing, shadows) and implement them as CSS custom properties or a design token system. Apply tokens across all components.

**Changes:**

- Define design token schema.
- Create token files (JSON/CSS).
- Implement token-based styling system.
- Apply tokens to existing components.
- Ensure accessibility compliance.

**Dependencies:**

- Plan: Design Exploration (design direction must be chosen).

---

## Work

### Next

Execute Phase 2 iterations: populate project fields and build the project list.

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

```bash
npm install
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

```bash
npm run workspace sanity
```

---

## Coordination

### Not In Scope

- **Backend functionality** — Static site only, no server-side rendering.
- **CMS integration** — Content managed via files, not a CMS.
- **Multi-language support** — English only for now.

### Evidence

- noodlestan.org deployed and accessible.
- Project records structured with code, website, and management fields.

### Findings

- The workspace repository structure supports cross-repo coordination.
- Astro is well-suited for static content sites.

### Decisions

- **Astro** — Static site generator, appropriate for documentation/content.
- **JSON collection** — Simple intermediate format for project data.
- **Token-based styling** — Design tokens for consistent, maintainable styling.

### Knowledge to Update

None.

### Follow Ups

- Add real content beyond project listings.
- Set up CI/CD for automatic deployment.
- Add staging environment.

### Feedback

None.
