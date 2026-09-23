# Plan: Home Sections MVP

**Id:** `home-sections-mvp`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Structure the noodlestan.org homepage with meaningful sections and content that introduces the Noodlestan ecosystem, its values, and how to get involved.

**Description:** Generate homepage content via an AI writing prompt that captures the Noodlestan ecosystem, then apply the generated content to the homepage as structured sections.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | Provided with Prompt.                 | Noodlestan Web repository checkout |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |
| `$MANAGEMENT`     | `$WORKSPACE/checkouts/management`     | Management repository checkout     |

## Summary

Add structured content sections to the noodlestan.org homepage: an introduction to the Noodlestan ecosystem, a statement on AI usage, and a call for contributors with a Discord invite. Content is generated via an AI writing prompt and applied as static sections.

## Attachments

- `attachments/home-content-prompt.md` — AI writing prompt (produced by iteration `write-content-prompt`).
- `attachments/home-content.md` — approved homepage copy (produced by iteration `apply-content-to-homepage`).
- `specs/home.pseudo-html.md` — HTML structure for home page.

## Context

### Upstream Work

| Kind        | Path                                                                       | Role                                                                  |
| ----------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Brief       | `$MANAGEMENT/noodlestan-web/sites/noodlestan-org.md`                       | Early content outline for noodlestan.org (hero, contributing, about). |
| Plan        | `_backlog/1-done/plan-publish-project-list/plan.md`                        | Completed — project list rendered on homepage.                        |
| Milestone   | `$NOODLESTAN_WEB/_roadmap/3-now/milestone-noodlestan-web-mvp/milestone.md` | Owning Milestone.                                                     |
| Parking Lot | `_backlog/_parking-lot.md`                                                 | Tracks short-term actionables, pending questions, and blockers.       |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Drafting, Refining.

### Domains

| Domain / Path                                        | Description                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.              |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path |
| ----------- | ------------ | --------------------- |
| Application | Applications | — WIP                 |

### Workflows

| Workflow / Path                                                        | Purpose                                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work. |

### Knowledge

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines plan record fields and statuses. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/plans/structures/iteration.art` (Structure) — Defines iteration as a container for changes and instructions. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/commits/types/commit.art` (Type) — Defines planned commit blueprints. Relevant for stages Drafting, Refining.

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for stages Setting up, Verifying, Committing.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for all iterations.

::READ `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md` (Guide) — Defines the Astro application operations. Relevant for all iterations.

::READ `$APP/architecture/adr/endpoints.md` (ADR) — Endpoints sourcing and exposure decisions (consts.ts, generated module, Astro config). Relevant for iteration `apply-content-to-homepage`.

## Scope

This plan adds content sections to the noodlestan.org homepage.

### (Scope) Application: Noodlestan Website

**Record:** `apps/noodlestan-web/_guide.md`

**Role:** — Hosts the Noodlestan Website. Astro application at `apps/noodlestan-web/`.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

**Changes:**

- Update `$APP/src/pages/index.astro` with new content sections.

---

## Items:

| Iteration / Instructions                                                                                | Status |
| ------------------------------------------------------------------------------------------------------- | ------ |
| Iteration: Write Homepage Content Prompt `plan-home-sections-mvp/instructions/write-content-prompt.md`  | `DONE` |
| Iteration: Apply Content to Homepage `plan-home-sections-mvp/instructions/apply-content-to-homepage.md` | `DONE` |

### Iteration: Write Homepage Content Prompt

**Id:** `write-content-prompt`

**Status:** `DONE`

**Purpose:** Create a detailed prompt for an AI writing tool to generate homepage outlines and copy.

**Description:** Write a prompt that captures the Noodlestan ecosystem — what we are building, how we work and plan — and requests six sections: hero, what we build, how we work, a statement on AI usage, a call for contributors with a Discord invite link, and a footer.

**Instructions:** `./plan-home-sections-mvp/instructions/write-content-prompt.md`

**Report:** `./plan-home-sections-mvp/instructions/write-content-prompt__report.md`

**Changes:**

- Create `_backlog/3-now/plan-home-sections-mvp/attachments/home-content-prompt.md` — the writing prompt (plan attachment).
- Prompt covers:
  - Who we are: open collective, MIT, "We are writing software because we love it."
  - Ecosystem overview: 14 repositories grouped in layers (foundations, introspection/docs, UI/apps, operations).
  - How we work: workspace, roadmaps → milestones → plans → iterations, `.art` records, AI agents in defined roles.
  - Requested sections: hero, what we build, how we work, on AI, join us (Discord `{DISCORD_INVITE_URL}` + GitHub), footer.
  - Constraints: under 700 words, no invented facts, markdown output.

**Dependencies:**

- Plan: Publish Project List (project list exists on homepage, content builds on it).

#### Commits:

| ID                        | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| ------------------------- | ------------------------------------------- | ------------ | --------- | ----------- |
| `add-home-content-prompt` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `4ffa68c` | `COMMITTED` |

##### Commit: `add-home-content-prompt`

**Repository:** Repository: Noodlestan Web

**Message:**

```
docs(noodlestan-web): add homepage content prompt

- Add AI writing prompt for noodlestan.org homepage sections.
- Cover ecosystem overview, how we work, AI usage statement, contributor call.
```

### Iteration: Apply Content to Homepage

**Id:** `apply-content-to-homepage`

**Status:** `DONE`

**Purpose:** Apply the AI-generated content and outlines to the homepage as structured sections.

**Description:** Run the prompt through a writing AI, review the output with the crew, save the approved copy as a plan attachment, then integrate it into `$APP/src/pages/index.astro` as structured HTML sections. No CSS.

**Instructions:** `./plan-home-sections-mvp/instructions/apply-content-to-homepage.md`

**Changes:**

- Refine and match structure (`./specs/home.pseudo-html.md`) and content (`./attachments/home-content.md`).
- Update `$APP/src/pages/index.astro` with sections in order.
- Extract components (per ADR `$APP/architecture/adr/endpoints.md`):
  - Site-wide: `SiteHeader`, `SiteFooter` in `$APP/src/components/site/`.
  - Page content: `Hero`, `Projects`, `Workflows`, `Contributing`, `About` in `$APP/src/components/pages/home/`.
- Centralize endpoints (Discord, GitHub, Contact, site URL) in `$APP/src/consts.ts`; long-term source of truth is Art records generating `src/generated/endpoints.ts` consumed by consts.ts; `astro.config.mjs` consumes the same source for `site` only.

#### Commits:

| ID                   | Repository / Checkout / Branch              | Policy    | Hash      | Status      |
| -------------------- | ------------------------------------------- | --------- | --------- | ----------- |
| `add-home-content`   | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `PAIRING` | `df5585b` | `COMMITTED` |
| `extract-components` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `NOPUSH`  | `e73491c` | `COMMITTED` |
| `urls-as-variables`  | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `NOPUSH`  | `d424c88` | `COMMITTED` |

##### Commit: `add-home-content`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Add content sections to homepage.
```

##### Commit: `extract-components`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Extract site and home page components.

- Extract SiteHeader and SiteFooter into src/components/site/.
- Extract Hero, Projects, Workflows, Contributing, About into src/components/pages/home/.
```

##### Commit: `urls-as-variables`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Centralize site endpoints in consts.ts.

- Add src/consts.ts with Discord, GitHub, Contact, and site URL endpoints.
- Replace hardcoded URLs in components with consts imports.
- Set site in astro.config.mjs from the same endpoint source.
```

---

## Work

### Next

All commits COMMITTED — `add-home-content` (`df5585b`), `extract-components` (`e73491c`), `urls-as-variables` (`d424c88`). Plan complete; moved to `_backlog/1-done/`.

### Blockers

- Resolved: Discord invite URL is now present in the applied homepage content (`https://discord.gg/4MBbPK7sU`); to be centralized in `src/consts.ts` by `urls-as-variables`.

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
```

**Instructions:** (From `$NOODLESTAN_WEB/_guide.md`)

Run from the `$NOODLESTAN_WEB` root:

```bash
npm ci # to install dependencies.
```

### Verifying Step

**Instructions:**

Run from this package directory:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues
npm run build # to produce a full build
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md`)

Run from this package directory:

```bash
npm run lint # to report formatting issues
npm run build # to produce a full build
```

---

## Coordination

### Not In Scope

- **Visual design** — Content only; styling comes in the Tokenize and Style plan.
- **CMS integration** — Content is static, managed via files.
- **Dynamic sections** — All content is static HTML.

### Evidence

- Homepage exists with project list rendered from Astro collection (commit `dbed616`).

### Findings

- The homepage currently has a title, welcome line, and project list.
- Noodlestan is a collective of 14 repositories focused on codebase introspection, documentation tooling, and developer experience.

### Decisions

- **AI-generated content** — Use an AI writing tool to generate structured content from a detailed prompt, rather than writing copy manually.
- **Prompt as source of truth** — The prompt captures ecosystem knowledge and intent; the generated output is the content.
- **Endpoints source** — Endpoints are static build-time data exposed via a plain TS module (`src/consts.ts`); long-term source of truth is Art records generating `src/generated/endpoints.ts`; Astro config consumes the generated source for `site` only. See ADR `$APP/architecture/adr/endpoints.md`.
- **Component classification** — Site-wide components in `src/components/site/` (named `Site*`); page content components in `src/components/pages/home/`.

### Knowledge to Update

- ADR `$APP/architecture/adr/endpoints.md` created — endpoints sourcing and exposure decisions.

### Follow Ups

- Add visual design (tokens, styling) after content is in place.
- Add more homepage sections as the project grows.
- Create a routine to convert Art records into `src/generated/endpoints.ts` (long-term endpoint source of truth, per ADR).

### Feedback

None.
