# Instructions: `scaffold-components-package`

**Plan:** `noodlestan-astro-components`

**Iteration Id:** `scaffold-components-package`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and verification results, or blocker details.
3. Use `render-template` with `$DOMAINS/plans/templates/instructions-report.tart` and write the report to `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/instructions/scaffold-components-package__report.md`.
4. Include any `DIRECTIVE FEEDBACK:` sections from your prompt in the report.
5. Send a terse report pointer to the delegator: happy face + up to 3 bullets.

## Path Variables

| Variable       | Resolved Path                        | Purpose                    |
| -------------- | ------------------------------------ | -------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root             |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources           |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository  |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | Noodlestan Web application |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Package being scaffolded   |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | Artificials repository     |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | Art MD Web application     |

## Working Agreements

1. **Self-contained instructions:** Use this file and its mandatory reading; do not rely on chat history.
2. **Mandatory report:** Record changes, evidence, verification, and blockers in the report file.
3. **Minimal interaction:** Report tersely; report a blocker instead of improvising outside scope.

## Goals

Register `@noodlestan/astro-components` as a valid npm workspace package with synchronized package records and the package-level house-style files and development guide.

## Mandatory Reading

- ::READ `$PROJECT/_guide.md` — Repository layout, setup, conventions, and verification.
- ::READ `$PROJECT/_records/namespace.art` — Package namespace.
- ::READ `$DOMAINS/packages/structures/package.art` — Package record fields.
- ::READ `$DOMAINS/packages/structures/npm-package-deployment.art` — NPM deployment record fields.
- ::READ `$APP/_guide.md` — Noodlestan Web app setup and verification.
- ::READ `$ARTIFICIALS/_guide.md` — Artificials repository setup and verification.
- ::READ `$ART_MD_APP/_guide.md` — Art MD Web setup and verification.
- ::READ `$APP/src/layouts/components/SiteHead.astro` — Existing Fredoka font-loading pattern.
- ::READ `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` — Component and package asset contract.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: Follow links under mandatory-reading sections in these files. If a mandatory link cannot be read, stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message below. If a change is required, follow `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

Run `npm ci` from `$PROJECT`.

### Verifying Step

Run `npm run ci` from `$PROJECT` after the workspace changes.

### Verifying Completion

Run `npm run ci` from `$PROJECT` and verify the package is recognized as a workspace.

## Changes

- Step 1 / 2 — Scaffold the package, add house-style files, and register the workspace.
- Step 2 / 2 — Commit `scaffold-astro-components`.

## Steps

### Step `1 / 2` — Scaffold the package and register the workspace

1. Preserve the user-authored `$PACKAGE/package.json` metadata, exports, and dependencies. Ensure it has a `build` script of `vite build`, retains `test: "echo none yet"`, and runs the build from `ci`. Ensure Vite is available as a declared build dependency, and do not mark the package's CSS exports as side-effect-free.
2. Ensure the package `files` list includes `src`, `LICENSE-MIT`, and `README.md`; add `$PACKAGE/LICENSE-MIT` using the package's Noodlestan MIT license details.
3. Add package dotfiles following the repository style: `.eslintrc.cjs` extending `$PROJECT/.eslintrc.cjs`, `.npmignore` excluding test files, and `.prettierignore` excluding generated output and coverage artifacts. Keep the lint scripts consistent with these configs.
4. Update `$PACKAGE/_records/package.art` to match the manifest, including `LICENSE-MIT` and the current peer and dev dependencies.
5. Create `$PACKAGE/_guide.md` documenting the package layout, package/deployment records, and setup and verification commands.
6. Create the package entry point, tsconfig, and README skeleton. The component usage content belongs to the next iteration and `plan__components-spec.md`.
7. Add `packages/**` to the existing `apps/**` npm workspace patterns in `$PROJECT/package.json` and update `$PROJECT/package-lock.json`.
8. Update `$PROJECT/_guide.md` to include the `packages/` directory in the repository layout.

Expected outcome: npm recognizes `$PACKAGE` as a workspace; its package record matches the manifest; and license, house-style configs, package guide, and development structure are present.

### Commit: `scaffold-astro-components`

**Policy:** `NOPUSH` — commit locally; do not push.

**Message:**

```text
scaffold(package-astro-components): Add package house-style files and register the workspace.
```

## Final Verification

**Instructions:**

- Verify npm recognizes `@noodlestan/astro-components` as a workspace.
- Verify `npm run build` runs `vite build`, `npm test` retains the agreed placeholder, and `ci` includes the build.
- Verify the package record's files and peer/dev dependencies match `package.json`, and `npm pack --dry-run` includes `LICENSE-MIT`.
- Verify the package dotfiles and `_guide.md` are present and formatted.
- Run `npm run ci` from `$PROJECT`.
- Verify the commit was created locally and not pushed, per `NOPUSH`.
- Report according to “How to Report Back to the Delegator.”
