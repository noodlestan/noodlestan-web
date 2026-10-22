# Instructions: `apply-components-art-md-web`

**Plan:** `noodlestan-astro-components`

**Iteration Id:** `apply-components-art-md-web`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and verification results, or blocker details.
3. Use `render-template` with `$DOMAINS/plans/templates/instructions-report.tart` and write the report to `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/instructions/apply-components-art-md-web__report.md`.
4. Include any `DIRECTIVE FEEDBACK:` sections from your prompt in the report.
5. Send a terse report pointer to the delegator: happy face + up to 3 bullets.

## Path Variables

| Variable       | Resolved Path                        | Purpose                   |
| -------------- | ------------------------------------ | ------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root            |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources          |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | First consumer app        |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Published package source  |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | Artificials repository    |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | Art MD Web application    |

## Working Agreements

1. **Self-contained instructions:** Use this file and its mandatory reading; do not rely on chat history.
2. **Mandatory report:** Record changes, evidence, verification, and blockers in the report file.
3. **Minimal interaction:** Report tersely; report a blocker instead of improvising outside scope.

## Goals

Install the published `@noodlestan/astro-components` package in Art MD Web and apply its components at the locations defined by the spec.

## Mandatory Reading

- ::READ `$PROJECT/_guide.md` — Noodlestan Web package conventions.
- ::READ `$PROJECT/_records/namespace.art` — Package namespace.
- ::READ `$DOMAINS/packages/structures/package.art` — Package record.
- ::READ `$DOMAINS/packages/structures/npm-package-deployment.art` — Published package record.
- ::READ `$APP/_guide.md` — Noodlestan Web app and package conventions.
- ::READ `$ARTIFICIALS/_guide.md` — Artificials repository setup and verification.
- ::READ `$ART_MD_APP/_guide.md` — Art MD Web setup and deployment.
- ::READ `$APP/src/layouts/components/SiteHead.astro` — Fredoka font-loading source for README guidance.
- ::READ `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` — Authoritative component use locations.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: Follow links under mandatory-reading sections in these files. If a mandatory link cannot be read, stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message below and follow `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

Run `npm ci` from `$ARTIFICIALS`.

### Verifying Step

Run the app's `npm run lint` and `npm run build` from `$ART_MD_APP`.

### Verifying Completion

Run the Artificials repository CI command from `$ARTIFICIALS`, and verify the app deployment build resolves the released package version.

## Changes

- Step 1 / 2 — Install and apply shared components in Art MD Web per spec.
- Step 2 / 2 — Commit `apply-components-art-md`.

## Steps

### Step `1 / 2` — Install and apply shared components in Art MD Web per spec

1. Confirm iteration `publish-components-package` has completed and the released version is available from NPM. If not, REPORT A BLOCKER and stop.
2. Add the published `@noodlestan/astro-components` dependency to `$ART_MD_APP/package.json` and update the Artificials lockfile from `$ARTIFICIALS`.
3. Apply components at the Art MD Web locations in `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md`.
4. Import the package stylesheet once in the app and load Fredoka in the document head according to the package README.
5. Keep the specified header links singular and use the shared footer component according to the spec; do not duplicate app-owned layout content.

Expected result: Art MD Web consumes the published package and renders the specified shared components.

### Commit: `apply-components-art-md`

**Policy:** `NOPUSH` — commit locally; do not push.

**Message:**

```text
integrate(artificials): Apply shared components to the Art MD Website.
```

## Final Verification

**Instructions:**

- Verify `@noodlestan/astro-components` resolves from the published registry version.
- Verify the Art MD app header and footer match the component spec and load the exported CSS and Fredoka font.
- Run lint and build from `$ART_MD_APP`, then run Artificials repository CI.
- Verify the commit was created locally and not pushed, per `NOPUSH`.
- Report according to “How to Report Back to the Delegator.”
