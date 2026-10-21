# Instructions: `publish-components-package`

**Plan:** `noodlestan-astro-components`

**Iteration Id:** `publish-components-package`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and verification results, or blocker details.
3. Use `render-template` with `$DOMAINS/plans/templates/instructions-report.tart` and write the report to `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/instructions/publish-components-package__report.md`.
4. Include any `DIRECTIVE FEEDBACK:` sections from your prompt in the report.
5. Send a terse report pointer to the delegator: happy face + up to 3 bullets.

## Path Variables

| Variable       | Resolved Path                        | Purpose                      |
| -------------- | ------------------------------------ | ---------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root               |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources             |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository    |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | First consumer app           |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Package to publish           |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | External consumer repository |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | External consumer app        |

## Working Agreements

1. **Self-contained instructions:** Use this file and its mandatory reading; do not rely on chat history.
2. **Mandatory report:** Record changes, evidence, verification, and blockers in the report file.
3. **Minimal interaction:** Report tersely; report a blocker instead of improvising outside scope.

## Goals

Prepare the NPM deployment record and publish a verified public package version so the Artificials repository can install it.

## Mandatory Reading

- ::READ `$PROJECT/_guide.md` — Repository setup and verification.
- ::READ `$PROJECT/_records/namespace.art` — `@noodlestan` package namespace.
- ::READ `$DOMAINS/packages/structures/package.art` — Package metadata requirements.
- ::READ `$DOMAINS/packages/structures/npm-package-deployment.art` — Registry deployment record requirements.
- ::READ `$APP/_guide.md` — Noodlestan Web app setup and verification.
- ::READ `$ARTIFICIALS/_guide.md` — Consumer repository setup.
- ::READ `$ART_MD_APP/_guide.md` — Consumer app setup and verification.
- ::READ `$APP/src/layouts/components/SiteHead.astro` — Fredoka font-loading source for README guidance.
- ::READ `$PROJECT/_backlog/3-now/plan-noodlestan-astro-components/plan__components-spec.md` — Published package contents and CSS/component exports.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` — Commit message rules.

RULE: Follow links under mandatory-reading sections in these files. If a mandatory link cannot be read, stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Use the commit message below and follow `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.

### Setting Up

Run `npm ci` from `$PROJECT`.

### Verifying Step

Run the package checks from `$PROJECT`; run `npm pack --dry-run` from `$PACKAGE` and inspect the contents.

### Verifying Completion

After publication, verify the exact version is available from the NPM registry and can be resolved by a clean consumer install in `$ARTIFICIALS`.

### Publishing

Use the package deployment record's NPM command only after explicit public-publish authorization.

## Changes

- Step 1 / 3 — Prepare the NPM deployment record and validate the package tarball.
- Step 2 / 3 — Commit `publish-components-record`.
- Step 3 / 3 — Publish the package only after explicit authorization.

## Steps

### Step `1 / 3` — Prepare the NPM deployment record and validate the package tarball

1. **Authorization gate:** Before any registry write, verify the delegator has explicitly approved public NPM publication. If approval is absent, REPORT A BLOCKER and stop; do not publish.
2. Create `$PACKAGE/_records/published.art` following `$DOMAINS/packages/structures/npm-package-deployment.art`, with canonical name `@noodlestan/astro-components`, registry `https://registry.npmjs.org`, and public access. Link it from `$PACKAGE/_records/package.art` using the deployment field.
3. Verify the package version, exports, README, component entry point, and CSS file. Run `npm pack --dry-run` and confirm every exported path is included.

Expected result: the package is ready for the approved public release and its deployment record matches the package manifest.

### Commit: `publish-components-record`

**Policy:** `NOPUSH` — commit locally; do not push.

**Message:**

```text
release(package-astro-components): Add the public NPM deployment record.
```

### Step `3 / 3` — Publish the package only after explicit authorization

1. Reconfirm the public NPM authorization gate and that the package version has not already been published.
2. Publish `@noodlestan/astro-components` with public access using the documented package deployment command.
3. Verify the published version from the registry and confirm `$ARTIFICIALS` can resolve it with a clean install.
4. Update `$PACKAGE/_records/published.art` to `DEPLOYED` and `$PACKAGE/_records/package.art` to `Published: true`.

If registry credentials, package ownership, or authorization are missing, REPORT A BLOCKER and stop.

## Final Verification

**Instructions:**

- Verify the deployment record matches the package name, public registry, and published version.
- Verify the tarball contains the README, components, and explicit `global.css` export.
- Verify the published version resolves in `$ARTIFICIALS`.
- Verify the deployment-record commit was created locally and not pushed, per `NOPUSH`.
- Do not publish without explicit authorization; report a blocker if it is absent.
- Report according to “How to Report Back to the Delegator.”
