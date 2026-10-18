# Instructions: `add-project-search`

**Plan:** `search-projects-poc`

**Iteration Id:** `add-project-search`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with `$DOMAINS/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `$PROJECT/_backlog/3-now/plan-search-projects-poc/instructions/add-project-search__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:`, include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-project-search`, created artefacts, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable     | Resolved Path                  | Purpose                            |
| ------------ | ------------------------------ | ---------------------------------- |
| `$WORKSPACE` | Current working directory      | Workspace root directory           |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains`   | Domain resources directory         |
| `$PROJECT`   | Provided with prompt           | Noodlestan Web repository checkout |
| `$APP`       | `$PROJECT/apps/noodlestan-web` | Astro website application          |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-project-search`, created artefacts, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add a labelled, client-side search field above the homepage project list. It filters the already-rendered project cards by project name, purpose, and description, reports the result count or an empty state, and requires no backend, network request, Astro island, or client framework.

## Mandatory Reading

- ::READ `$APP/_guide.md` — Application structure and operating instructions; follow its reference to the repository guide.
- ::READ `$PROJECT/_guide.md` — Repository conventions and verification workflow.
- ::READ `$APP/src/content.config.ts` — Project collection schema, including name, purpose, and description.
- ::READ `$APP/src/components/pages/home/ProjectList.astro` — Current collection rendering, list markup, and responsive layout.
- ::READ `$APP/src/components/pages/home/ProjectItem.astro` — Project card fields and existing presentation.
- ::READ `$APP/src/styles/global.css` — Existing semantic design tokens; no styling changes are in scope for this iteration.
- ::READ `$APP/knowledge/adr/endpoints.md` — Search adds no endpoint or runtime data source.
- ::READ `$PROJECT/node_modules/@noodlestan/conventions-typescript/art/index.md` — TypeScript/code conventions.
- ::READ `$PROJECT/node_modules/@noodlestan/conventions-unit-tests/art/index.md` — Unit-test conventions if verification coverage is added.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message supplied in this instruction. For any necessary adjustment, read `$WORKSPACE/knowledge/conventions/writing-commit-message.art` and follow its allowed types, scopes, and formatting rules.

### Setting Up

Run from the `$PROJECT` repository root:

```bash
npm ci
```

### Verifying Step

Run from `$APP`:

```bash
npm run lint:fix
npm run lint
npm run build
```

### Verifying Completion

Run from `$APP`:

```bash
npm run lint
npm run build
```

## Changes

Add the search control and DOM filtering behavior to the homepage project list without changing the project collection or layout layer.

- Step 1 / 2 — Implement Project Search
- Step 2 / 2 — Commit `add-project-search`

## Steps

### Step `1 / 2` — Implement Project Search

1. Add `$APP/src/components/pages/home/ProjectSearch.astro` with a visible `<label>` associated with an `<input type="search">`.
2. In the component, add a result-count status and a “No projects match” empty-state message. Make status updates available to assistive technology with an appropriate live region; the empty state starts hidden.
3. Add an inline Astro `<script>` that scopes to the project-list section, reads the input on each `input` event, trims and lowercases the query, and toggles each project `<li>`'s `hidden` state based on a case-insensitive substring match. An empty query shows every project again.
4. Update `$APP/src/components/pages/home/ProjectList.astro` to import and render `ProjectSearch` above the list. When mapping the collection, set each `<li>`'s `data-search` to the lower-case concatenation of that project's `name`, `purpose`, and `description`. The full project record is available in `ProjectList`; do not add `purpose` to `ProjectItem.astro` solely for search.
5. Update the result count and empty state after each filter operation. Show the number of visible projects when results exist and the empty-state message when none match. Ensure clearing the input restores all projects and the count.
6. Keep project-card and search visual styling minimal in this iteration; styling and focus treatment are owned by `style-and-tune-search`.

Expected result: the homepage renders all project cards before interaction; typing filters them immediately by name, purpose, or description, and clearing the query restores the full list.

### Commit: `add-project-search`

**Policy:** `NOPUSH` — create the commit but do not push it.

**Message:**

```text
build(project-search): Add client-side search filtering the homepage project list as the visitor types.
```

## Final Verification

**Instructions:**

- Verify filtering matches name, purpose, and description without case sensitivity; clearing the input restores all cards.
- Verify result count and empty state reflect the visible cards, including when zero projects match.
- Run `npm run lint` and `npm run build` from `$APP`.
- Verify the commit was created locally and was not pushed, as required by `NOPUSH`.
- Report according to the “How to Report Back to the Delegator” instructions.
