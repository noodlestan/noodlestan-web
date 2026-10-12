# Plan: Search Projects POC

**Id:** `search-projects-poc`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Let visitors find projects on noodlestan.org by typing into a search box that filters the project list already on the homepage.

**Description:** Two iterations: add a client-side search input that filters the rendered project list as the visitor types, then bring it onto the design system with correct focus, empty, and dark-mode behaviour.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |

## Summary

Add a search input above the project list on the noodlestan.org homepage that filters the already-rendered project cards by name, purpose, and description as the visitor types, with no backend and no client framework.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                        | Role                                                     |
| ----------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| Milestone   | `_roadmap/3-now/milestone-noodlestan-web-next/milestone.md` | Owning Milestone — Phase 1 `Search Projects POC`.        |
| Parking Lot | `_roadmap/_parking-lot.md`                                  | Origin of this plan.                                     |
| Milestone   | `_roadmap/1-done/milestone-noodlestan-web-mvp/milestone.md` | Delivered the `projects` collection and the token sheet. |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Drafting, Refining.

### Domains

| Domain / Path                           | Description                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md` | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path |
| ----------- | ------------ | --------------------- |
| Application | Applications | — WIP                 |

### Workflows

| Workflow / Path                                                              | Purpose                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Workflow: Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work items lifecycle, collecting operational instructions. |

### Knowledge

::READ `$APP/_guide.md` (Guide) — Defines the Astro application operations. Relevant for all iterations.

::READ `$APP/src/content.config.ts` (Config) — Defines the `projects` collection schema the search reads. Relevant for iteration `add-project-search`.

::READ `$APP/src/styles/global.css` (Token Sheet) — Source of the input, focus, and colour tokens the search must use. Relevant for iteration `style-and-tune-search`.

::READ `$APP/knowledge/adr/endpoints.md` (ADR) — Endpoints sourcing and exposure decisions. Relevant when search adds no new endpoints.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Defines the commit message format, types, scopes, and rules. Relevant for stages Writing Commit Message.

## Scope

This plan changes only the homepage project list of the Astro application. The collection, its generation scripts, and the layout layer stay untouched.

### (Scope) Application: Noodlestan Website

**Record:** `$APP/_guide.md`

**Role:** — The main noodlestan.org website, built with Astro. Receives the search input and its filtering behaviour.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

**Changes:**

- Add `$APP/src/components/pages/home/ProjectSearch.astro` — the search input and its filtering script.
- Update `$APP/src/components/pages/home/ProjectList.astro` to render the search input and mark each card with searchable text.
- Update `$APP/src/styles/global.css` with the search-specific primitives.

## Execution Context

Execution is coordinated from the `$NOODLESTAN_WEB` checkout on branch `main`, with all application work under `$APP/`.

---

## Items:

| Iteration / Instructions         | Status     |
| -------------------------------- | ---------- |
| Iteration: Add Project Search    | `PLANNING` |
| Iteration: Style and Tune Search | `PLANNING` |

### Iteration: Add Project Search

**Id:** `add-project-search`

**Status:** `PLANNING`

**Purpose:** Make the project list filterable by typing, using only what the page already ships.

**Description:** Add a labelled search input above the project list. An inline `<script>` filters the already-rendered project cards by matching the typed text against each card's name, purpose, and description, hiding non-matching cards. No Astro island, no client framework, no network request, and no change to the collection.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add `$APP/src/components/pages/home/ProjectSearch.astro` rendering a `<label>`, `<input type="search">`, and an inline `<script>` that filters sibling cards on `input`.
- Update `$APP/src/components/pages/home/ProjectList.astro` to render `ProjectSearch` above the `<ul>` and to give each `<li>` a `data-search` attribute carrying the project name, purpose, and description in lower case.
- Update `$APP/src/components/pages/home/ProjectItem.astro` `Props` only if the searchable text is derived there rather than in `ProjectList.astro`.
- Show a "No projects match" message when every card is hidden, and the result count when it is not.
- Reset the filter when the input is cleared.

**Dependencies:**

- None.

#### Commits:

| ID                   | Repository / Checkout / Branch              | Policy | Hash | Status    |
| -------------------- | ------------------------------------------- | ------ | ---- | --------- |
| `add-project-search` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | —      | —    | `PLANNED` |

### Iteration: Style and Tune Search

**Id:** `style-and-tune-search`

**Status:** `PLANNING`

**Purpose:** Bring the search input onto the design system so it looks and behaves like the rest of the site.

**Description:** Restyle the input and the empty state with the existing semantic tokens rather than ad-hoc values, add visible focus styling, and confirm the behaviour under the dark-mode token swap and at the existing responsive breakpoints.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Style the input in `$APP/src/components/pages/home/ProjectSearch.astro` using `--color-*`, `--type-*`, and `--page-margin-h` tokens only; no hard-coded colours.
- Style the empty state and the result count in `$APP/src/styles/global.css` alongside the existing `.project-list` rules.
- Add `:focus-visible` styling that survives the `prefers-color-scheme: dark` block.
- Keep the input usable at the existing `45rem` and `75rem` breakpoints where the list becomes a grid.

**Dependencies:**

- Iteration: Add Project Search — the input and its script must exist before they can be styled.

#### Commits:

| ID                      | Repository / Checkout / Branch              | Policy | Hash | Status    |
| ----------------------- | ------------------------------------------- | ------ | ---- | --------- |
| `style-and-tune-search` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | —      | —    | `PLANNED` |

## Work

### Next

Draft self-contained instructions for both iterations, mark them `READY`, then delegate `add-project-search`.

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

**Instructions:** (From `$APP/_guide.md`)

Run from the `$APP` package directory:

```bash
npm ci # to install dependencies.
```

### Verifying Step

**Instructions:**

Run from the `$APP` package directory:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues
npm run build # to produce a full build
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$APP/_guide.md`)

Run from the `$APP` package directory:

```bash
npm run lint # to report formatting issues
npm run build # to produce a full build
```

---

## Coordination

### Not In Scope

- **Server-side or hosted search** — no service, index build, or query endpoint; the page filters what it already rendered.
- **Search over content other than projects** — the homepage project list only.
- **Hierarchy or tags** — plain text matching, no parent/child or faceting.

### Evidence

- None yet.

### Findings

- None yet.

### Decisions

- **Filter the rendered DOM, do not hydrate an island** — the cards are already in the page, so an inline script that hides non-matching `<li>` elements avoids shipping a client runtime for a proof of concept.
- **Plain text matching** — case-insensitive substring match over name, purpose, and description; ranking and fuzzy matching are follow-up work.

### Knowledge to Update

- None.

### Follow Ups

- Evaluate a real search index once the project list grows beyond what plain filtering handles well.
- Extend search to the rest of the site once more pages exist.

### Feedback

- None.
