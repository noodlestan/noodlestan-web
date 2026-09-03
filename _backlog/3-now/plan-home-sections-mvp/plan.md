# Plan: Home Sections MVP

**Id:** `home-sections-mvp`

**Status:** `READY`

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
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$NOODLESTAN_WEB` | Provided with Prompt.                 | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |
| `$MANAGEMENT`     | `$WORKSPACE/checkouts/management`     | Management repository checkout     |

## Summary

Add structured content sections to the noodlestan.org homepage: an introduction to the Noodlestan ecosystem, a statement on AI usage, and a call for contributors with a Discord invite. Content is generated via an AI writing prompt and applied as static sections.

## Attachments

- `home-content-prompt.md` — AI writing prompt (produced by iteration `write-content-prompt`).
- `home-content.md` — approved homepage copy (produced by iteration `apply-content-to-homepage`).

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

| Iteration / Instructions                                                                                | Status     |
| ------------------------------------------------------------------------------------------------------- | ---------- |
| Iteration: Write Homepage Content Prompt `plan-home-sections-mvp/instructions/write-content-prompt.md`  | `READY`    |
| Iteration: Apply Content to Homepage `plan-home-sections-mvp/instructions/apply-content-to-homepage.md` | `PLANNING` |

### Iteration: Write Homepage Content Prompt

**Id:** `write-content-prompt`

**Status:** `READY`

**Purpose:** Create a detailed prompt for an AI writing tool to generate homepage outlines and copy.

**Description:** Write a prompt that captures the Noodlestan ecosystem — what we are building, how we work and plan — and requests six sections: hero, what we build, how we work, a statement on AI usage, a call for contributors with a Discord invite link, and a footer.

**Instructions:** `./plan-home-sections-mvp/instructions/write-content-prompt.md`

**Changes:**

- Create `_backlog/3-now/plan-home-sections-mvp/home-content-prompt.md` — the writing prompt (plan attachment).
- Prompt covers:
  - Who we are: open collective, MIT, "We are writing software because we love it."
  - Ecosystem overview: 14 repositories grouped in layers (foundations, introspection/docs, UI/apps, operations).
  - How we work: workspace, roadmaps → milestones → plans → iterations, `.art` records, AI agents in defined roles.
  - Requested sections: hero, what we build, how we work, on AI, join us (Discord `{DISCORD_INVITE_URL}` + GitHub), footer.
  - Constraints: under 700 words, no invented facts, markdown output.

**Dependencies:**

- Plan: Publish Project List (project list exists on homepage, content builds on it).

#### Commits:

| ID                        | Repository / Checkout / Branch              | Policy       | Hash  | Status     |
| ------------------------- | ------------------------------------------- | ------------ | ----- | ---------- |
| `add-home-content-prompt` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `AUTHORED` |

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

**Status:** `PLANNING`

**Purpose:** Apply the AI-generated content and outlines to the homepage as structured sections.

**Description:** Run the prompt through a writing AI, review the output with the crew, save the approved copy as a plan attachment, then integrate it into `$APP/src/pages/index.astro` as structured HTML sections. No CSS.

**Instructions:** `./plan-home-sections-mvp/instructions/apply-content-to-homepage.md`

**Changes:**

- Save approved copy to `_backlog/3-now/plan-home-sections-mvp/home-content.md` (plan attachment).
- Update `$APP/src/pages/index.astro` with sections in order:
  - Hero.
  - What we build.
  - Projects (existing list, from publish-project-list).
  - How we work.
  - On AI.
  - Join us (Discord + GitHub links).
  - Footer.

**Dependencies:**

- Iteration: Write Homepage Content Prompt (prompt must exist).
- Crew: run the prompt and approve the copy; supply the Discord invite URL.

#### Commits:

| ID                    | Repository / Checkout / Branch              | Policy       | Hash  | Status     |
| --------------------- | ------------------------------------------- | ------------ | ----- | ---------- |
| `add-home-content`    | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `PLANNING` |
| `apply-home-sections` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | (TBD) | `PLANNING` |

##### Commit: `apply-home-sections`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): apply content sections to homepage

- Add hero, what we build, how we work, on AI, join us, and footer sections.
- Keep existing project list between what we build and how we work.
```

---

## Work

### Next

Delegate `write-content-prompt` (READY). Then crew runs the prompt and approves copy before `apply-content-to-homepage` can be drafted.

### Blockers

- Crew: Discord invite URL is unknown — prompt and page use `{DISCORD_INVITE_URL}` placeholder until supplied.

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

### Knowledge to Update

None.

### Follow Ups

- Add visual design (tokens, styling) after content is in place.
- Add more homepage sections as the project grows.

### Feedback

None.
