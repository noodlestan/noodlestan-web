# Instructions: `apply-components-noodlestan-web`

**Plan:** `noodlestan-astro-components`

**Iteration Id:** `apply-components-noodlestan-web`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and verification results, or blocker details.
3. Use `render-template` with `$DOMAINS/plans/templates/instructions-report.tart` and write the report to `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/instructions/apply-components-noodlestan-web__report.md`.
4. Include any `DIRECTIVE FEEDBACK:` sections from your prompt in the report.
5. Send a terse report pointer to the delegator: happy face + up to 3 bullets.

## Path Variables

| Variable       | Resolved Path                        | Purpose                    |
| -------------- | ------------------------------------ | -------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root             |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources           |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository  |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | Noodlestan Web application |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Shared package             |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | Second consumer repository |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | Art MD Web application     |

## Working Agreements

1. **Self-contained instructions:** Use this file and its mandatory reading; do not rely on chat history.
2. **Mandatory report:** Record changes, evidence, verification, and blockers in the report file.
3. **Minimal interaction:** Report tersely; report a blocker instead of improvising outside scope.

## Goals

Use the published package at the Noodlestan Web application locations defined in the component spec and add a non-interactive homepage-equivalent route.

## Mandatory Reading

- ::READ `$PROJECT/_guide.md` — Repository setup, conventions, and verification.
- ::READ `$PROJECT/_records/namespace.art` — Package namespace.
- ::READ `$DOMAINS/packages/structures/package.art` — Package record.
- ::READ `$DOMAINS/packages/structures/npm-package-deployment.art` — Published package deployment record.
- ::READ `$APP/_guide.md` — App setup and verification.
- ::READ `$ARTIFICIALS/_guide.md` — Second consumer context.
- ::READ `$ART_MD_APP/_guide.md` — Second consumer app context.
- ::READ `$APP/src/layouts/components/SiteHead.astro` — Fredoka loading pattern.
- ::READ `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` — Authoritative use locations and route requirements.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: Follow links under mandatory-reading sections in these files. If a mandatory link cannot be read, stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message below and follow `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

Run `npm ci` from `$PROJECT`.

### Verifying Step

Run `npm run ci` from `$PROJECT` and verify the generated route from `$APP`'s build output.

### Verifying Completion

Run `npm run ci` from `$PROJECT`; verify `/build/astro-component` renders the homepage content without the search interaction.

## Changes

- Step 1 / 2 — Apply package components and stylesheet to Noodlestan Web per spec.
- Step 2 / 2 — Commit `apply-components-web`.

## Steps

### Step `1 / 2` — Apply package components and stylesheet to Noodlestan Web per spec

1. Add the published package as an internal workspace dependency in `$APP/package.json` and update `$PROJECT/package-lock.json`.
2. Apply components at the Noodlestan Web locations in `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md`.
3. Import `@noodlestan/astro-components/global.css` once from the shared app layout. Load Fredoka in the document head as shown in the package README.
4. Add `$APP/src/pages/build/astro-component.astro`. It must use the homepage content and section order while omitting the interactive search control and filtering script. Reuse the homepage layout; do not add a second footer in the route body.
5. Do not add a WIP marker unless the page has a genuine WIP item described by current content.

Expected result: the homepage uses package components, and `/build/astro-component` reproduces the homepage content without search interaction.

### Commit: `apply-components-web`

**Policy:** `NOPUSH` — commit locally; do not push.

**Message:**

```text
integrate(noodlestan-web): Apply shared components and add the non-interactive demo route.
```

## Final Verification

**Instructions:**

- Verify the package stylesheet is imported once and Fredoka is loaded in `<head>`.
- Verify the Noodlestan Web header, footer, and page content match the spec.
- Verify the demo route has the same content and section order as the homepage but no search interaction or duplicate footer.
- Run `npm run ci` from `$PROJECT`.
- Verify the commit was created locally and not pushed, per `NOPUSH`.
- Report according to “How to Report Back to the Delegator.”
