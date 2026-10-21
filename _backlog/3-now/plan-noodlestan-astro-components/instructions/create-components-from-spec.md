# Instructions: `create-components-from-spec`

**Plan:** `noodlestan-astro-components`

**Iteration Id:** `create-components-from-spec`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and verification results, or blocker details.
3. Use `render-template` with `$DOMAINS/plans/templates/instructions-report.tart` and write the report to `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/instructions/create-components-from-spec__report.md`.
4. Include any `DIRECTIVE FEEDBACK:` sections from your prompt in the report.
5. Send a terse report pointer to the delegator: happy face + up to 3 bullets.

## Path Variables

| Variable       | Resolved Path                        | Purpose                    |
| -------------- | ------------------------------------ | -------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root             |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources           |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository  |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | First consumer application |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Components package         |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | Second consumer repository |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | Art MD Web application     |

## Working Agreements

1. **Self-contained instructions:** Use this file and its mandatory reading; do not rely on chat history.
2. **Mandatory report:** Record changes, evidence, verification, and blockers in the report file.
3. **Minimal interaction:** Report tersely; report a blocker instead of improvising outside scope.

## Goals

Implement and export every component, stylesheet asset, and README usage contract in the attached component specification.

## Mandatory Reading

- ::READ `$PROJECT/_guide.md` — Repository conventions and verification.
- ::READ `$PROJECT/_records/namespace.art` — Package namespace.
- ::READ `$DOMAINS/packages/structures/package.art` — Package record conventions.
- ::READ `$DOMAINS/packages/structures/npm-package-deployment.art` — Package publication record.
- ::READ `$APP/_guide.md` — Noodlestan Web app conventions.
- ::READ `$ARTIFICIALS/_guide.md` — Artificials repository conventions.
- ::READ `$ART_MD_APP/_guide.md` — Art MD Web app conventions.
- ::READ `$APP/src/layouts/components/SiteHead.astro` — Fredoka font-loading source for README guidance.
- ::READ `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` — Authoritative source for component markup, props, existing sources, styles, and consumers.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: Follow links under mandatory-reading sections in these files. If a mandatory link cannot be read, stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message below. If a change is required, follow `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

Run `npm ci` from `$PROJECT`.

### Verifying Step

Run `npm run ci` from `$PROJECT` and verify the package contents with `npm pack --dry-run` from `$PACKAGE`.

### Verifying Completion

Run `npm run ci` from `$PROJECT`; verify the CSS subpath and every component export resolve from the package.

## Changes

- Step 1 / 2 — Create package components and usage assets from the spec.
- Step 2 / 2 — Commit `create-components-spec`.

## Steps

### Step `1 / 2` — Create package components and usage assets from the spec

1. Treat `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` as authoritative. Create each listed component with its specified source, props, wireframe, and apply-to target.
2. Create `$PACKAGE/src/styles/global.css` with the specified token. Add the exact `./global.css` subpath export in `$PACKAGE/package.json` and ensure the published file list includes the mapped stylesheet path.
3. Complete `$PACKAGE/README.md` with a `## Usage` section containing all three required consumer steps: load Fredoka in `<head>`, import `@noodlestan/astro-components/global.css` once, and import/render a component.
4. Keep app-owned endpoint values in consumers and pass them through component props. Do not copy an application's entire global stylesheet.
5. Ensure the package entry point exports the components and `npm pack --dry-run` includes the component sources, CSS, package manifest, and README.

Expected outcome: package code, stylesheet export, and usage documentation match the attachment without expanding component scope.

### Commit: `create-components-spec`

**Policy:** `NOPUSH` — commit locally; do not push.

**Message:**

```text
build(common-components): Create spec components, stylesheet export, and usage documentation.
```

## Final Verification

**Instructions:**

- Verify `package.json` explicitly exports `./global.css` to the stylesheet file included in the package.
- Verify the README's `## Usage` section demonstrates Fredoka loading, CSS import, and component import/render.
- Verify all component contracts against the attachment and run `npm run ci` from `$PROJECT`.
- Verify `npm pack --dry-run` includes every exported file.
- Verify the commit was created locally and not pushed, per `NOPUSH`.
- Report according to “How to Report Back to the Delegator.”
