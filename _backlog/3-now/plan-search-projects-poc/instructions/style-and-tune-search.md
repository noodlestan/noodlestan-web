# Instructions: `style-and-tune-search`

**Plan:** `search-projects-poc`

**Iteration Id:** `style-and-tune-search`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with `$DOMAINS/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `$PROJECT/_backlog/3-now/plan-search-projects-poc/instructions/style-and-tune-search__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:`, include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `style-and-tune-search`, created artefacts, thumbs up). The full trail lives in the report file; never repeat it in chat.

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
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `style-and-tune-search`, created artefacts, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Style the project search, result count, and empty state consistently with the site's semantic design tokens. Provide visible keyboard focus and verify readable, usable behavior in light and dark color schemes and across the existing responsive layouts.

## Mandatory Reading

- ::READ `$APP/_guide.md` — Application structure and operating instructions; follow its reference to the repository guide.
- ::READ `$PROJECT/_guide.md` — Repository conventions and verification workflow.
- ::READ `$APP/src/content.config.ts` — Project collection schema, confirming the list data is unchanged by styling.
- ::READ `$APP/src/components/pages/home/ProjectList.astro` — Current component-scoped layout and responsive breakpoints to preserve.
- ::READ `$APP/src/styles/global.css` — Existing semantic color, typography, page-margin tokens, and responsive styles.
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

Apply semantic-token styling to the search field and its status content, including visible focus and responsive/dark-mode verification.

- Step 1 / 2 — Style and Verify Project Search
- Step 2 / 2 — Commit `style-and-tune-search`

## Steps

### Step `1 / 2` — Style and Verify Project Search

1. Inspect the `ProjectSearch.astro` component created by the prerequisite `add-project-search` iteration. Style its search input using existing semantic tokens (for example `--color-content`, `--color-page-bg`, `--color-interactive`, `--type-text-family`, and `--page-margin-h`). Do not add hard-coded color values.
2. Add or adjust search, result-count, and empty-state styles in `$APP/src/styles/global.css`. The current project-list layout and its `45rem`/`75rem` grid breakpoints are component-scoped in `ProjectList.astro`; preserve them rather than duplicating or moving them.
3. Add a clear `:focus-visible` treatment to the search input using tokens that remain visible when the `prefers-color-scheme: dark` token overrides apply.
4. Verify the input and status content remain readable and usable at narrow widths and at the existing `45rem` and `75rem` project-grid breakpoints. Check both light and dark color schemes.

Expected result: the search control, result count, and no-results message use the existing design system, with a visible keyboard focus indicator and no regression to project-list responsiveness.

### Commit: `style-and-tune-search`

**Policy:** `NOPUSH` — create the commit but do not push it.

**Message:**

```text
build(project-search): Style search with design tokens; verify focus, empty state, dark mode, and breakpoints.
```

## Final Verification

**Instructions:**

- Verify no hard-coded color values were added and token-based focus remains visible in light and dark modes.
- Verify the search control and status content are usable at narrow widths and the existing `45rem` and `75rem` breakpoints.
- Run `npm run lint` and `npm run build` from `$APP`.
- Verify the commit was created locally and was not pushed, as required by `NOPUSH`.
- Report according to the “How to Report Back to the Delegator” instructions.
