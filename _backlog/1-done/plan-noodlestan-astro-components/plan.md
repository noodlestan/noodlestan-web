# Plan: Create Noodlestan Common Components Package

**Id:** `noodlestan-astro-components`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Provide reusable Noodlestan content, footer, and link components, plus the minimal font token CSS they require.

**Description:** Create and review `@noodlestan/astro-components`, publish the approved package, then consume it in Noodlestan Web and Art MD Web. Component contracts and package asset requirements are specified in the attached component spec.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                        | Purpose                            |
| -------------- | ------------------------------------ | ---------------------------------- |
| `$WORKSPACE`   | Current working directory            | Workspace root directory           |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`         | Domain resources directory         |
| `$PROJECT`     | Provided with prompt                 | Noodlestan Web repository checkout |
| `$APP`         | `$PROJECT/apps/noodlestan-web`       | Noodlestan Web application         |
| `$PACKAGE`     | `$PROJECT/packages/astro-components` | Common components package          |
| `$ARTIFICIALS` | `$WORKSPACE/checkouts/artificials`   | Artificials repository checkout    |
| `$ART_MD_APP`  | `$ARTIFICIALS/apps/art-md-web`       | Art MD documentation application   |

## Summary

Create the package, publish it for use across repositories, and apply its components to both websites according to `./plan__components-spec.md`.

## Attachments

- `./plan__components-spec.md` — component purpose, source, props, wireframes, and application targets. This is the source of truth for component-level requirements.

## Context

### Upstream Work

| Kind        | Path                                                                 | Role                                                           |
| ----------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| Milestone   | `_roadmap/3-now/milestone-noodlestan-web-next/milestone.md`          | Owning Phase 2 — Distribute Noodlestan Components.             |
| Parking Lot | `_backlog/_parking-lot.md`                                           | Tracks this plan as ongoing work.                              |
| Plan        | `_backlog/1-done/plan-home-sections-mvp/plan.md`                     | Delivered the contribution content used by the component spec. |
| Attachment  | `_backlog/1-done/plan-home-sections-mvp/attachments/home-content.md` | Existing homepage copy used by the component spec.             |

### Required Skills

- `write-plan` — Refines the plan and produces implementation instructions.

### Domains

| Domain / Path                                       | Description                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Packages `$DOMAINS/packages/index.md`       | Package and NPM deployment records.                                                |
| Domain: Deployments `$DOMAINS/deployments/index.md` | Deployment records and workflow for publishing the package.                        |

### Resource Kinds in Scope

| Kind                   | Domain       | Structure Record Path                                     |
| ---------------------- | ------------ | --------------------------------------------------------- |
| Package                | Packages     | `$DOMAINS/packages/structures/package.art`                |
| NPM Package Deployment | Packages     | `$DOMAINS/packages/structures/npm-package-deployment.art` |
| Application            | Applications | — WIP                                                     |
| Repository             | Repositories | `$DOMAINS/repositories/structures/repository.art`         |

### Workflows

| Workflow / Path                                                              | Purpose                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Workflow: Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work items lifecycle, collecting operational instructions. |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying/workflow.art`  | Organize package publication and deployment operations.                      |

### Knowledge

::READ `$PROJECT/_guide.md` (Guide) — Repository setup, workspace layout, conventions, and verification.

::READ `$PROJECT/_records/namespace.art` (Namespace) — Defines the `@noodlestan` package namespace.

::READ `$DOMAINS/packages/structures/package.art` (Structure) — Package record fields.

::READ `$DOMAINS/packages/structures/npm-package-deployment.art` (Structure) — Registry publication record fields.

::READ `$APP/_guide.md` (Guide) — Noodlestan Web setup and verification.

::READ `$ARTIFICIALS/_guide.md` (Guide) — Artificials repository setup and verification.

::READ `$ART_MD_APP/_guide.md` (Guide) — Art MD Web setup, verification, and deployment.

::READ `$APP/src/layouts/components/SiteHead.astro` (Component) — Existing Fredoka web-font loading example for the package README.

::READ `./plan__components-spec.md` (Specification) — Component contracts, source material, usage targets, and demo route.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit message types, scopes, and formatting rules.

## Scope

Create a reusable component package with a small exported stylesheet, publish it so a separate repository can consume it reproducibly, and apply it to the two applications at the targets defined by the component spec.

### (Scope) Package: Noodlestan Common Components

**Record:** `$PACKAGE/_records/package.art`

**Role:** — New — owns the reusable components specified in `plan__components-spec.md`.

**Partial:**

- `owner` — Project: Noodlestan Web
- `namespace` — Namespace: Noodlestan Web
- `path` — `$PROJECT/packages/astro-components/`
- `canonicalName` — `@noodlestan/astro-components`
- `dependencies.peer` — `astro` @ `^7.2.7`
- `dependencies.dev` — `@noodlestan/prettier-config-astro` @ `0.1.0`; `prettier-plugin-astro` @ `1.1.0`
- `sideEffects` — Preserve CSS imports as side-effectful for consumer bundlers.
- `purpose` — Provide reusable Noodlestan components and the minimal CSS token required by Noodlestan websites.
- `description` — Astro workspace package with components, stylesheet export, and usage instructions defined by `plan__components-spec.md`.

**Changes:**

- Create the package structure, components, stylesheet export, and usage documentation according to the spec attachment.
- Include package house-style assets: `LICENSE-MIT`, package dotfiles, a package `_guide.md`, and a complete README with a `## Usage` section.
- Publish the package to the public NPM registry for the Artificials repository to consume.

### (Scope) NPM Package Deployment: Noodlestan Common Components

**Record:** `$PACKAGE/_records/published.art`

**Role:** — New — describes how the package is published for external repository consumers.

**Partial:**

- `owner` — Package: Noodlestan Common Components
- `canonicalName` — `@noodlestan/astro-components`
- `registry` — `https://registry.npmjs.org`
- `access` — `public`

**Changes:**

- Create and link the NPM package deployment record, then publish the verified package and update the package publication status.

### (Scope) Application: Noodlestan Website

**Record:** `$APP/_guide.md`

**Role:** — First consumer — uses the specified components and hosts the non-interactive demo route.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$PROJECT/apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

**Changes:**

- Apply the package components at the Noodlestan Web locations specified in `plan__components-spec.md`.
- Add the demo route described in `plan__components-spec.md`.

### (Scope) Repository: Noodlestan Web

**Record:** `$PROJECT/_records/repository.art`

**Role:** — Hosts the package and its first consuming application.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$PROJECT/`

**Changes:**

- Add `packages/**` to the NPM workspace patterns and update the lockfile and repository guide.

### (Scope) Application: Art MD Web

**Record:** `$ART_MD_APP/_guide.md`

**Role:** — Second consumer — installs the published package and applies the specified components.

**Partial:**

- `owner` — Project: Artificials
- `path` — `$ARTIFICIALS/apps/art-md-web/`
- `url` — `https://art-md.noodlestan.org`

**Changes:**

- Install the published `@noodlestan/astro-components` package.
- Apply the package components at the Art MD Web locations specified in `plan__components-spec.md`.

### (Scope) Repository: Artificials

**Record:** `$ARTIFICIALS/_records/repository.art`

**Role:** — Hosts the Art MD Web consumer.

**Partial:**

- `owner` — Project: Artificials
- `path` — `$ARTIFICIALS/`

**Changes:**

- Add the published package dependency to the Art MD Web application and update the repository lockfile.

## Execution Context

Work spans `$PROJECT` and `$ARTIFICIALS`. Package creation and publication happen in `$PROJECT`; the first consumer and demo route are in `$APP`; the second consumer is `$ART_MD_APP`.

---

## Items:

| Iteration / Instructions                                                                          | Status |
| ------------------------------------------------------------------------------------------------- | ------ |
| Iteration: Scaffold Components Package `./instructions/scaffold-components-package.md`            | `DONE` |
| Iteration: Create Components From Spec `./instructions/create-components-from-spec.md`            | `DONE` |
| Iteration: Apply Components to Noodlestan Web `./instructions/apply-components-noodlestan-web.md` | `DONE` |
| Iteration: Review and Consolidate                                                                 | `DONE` |
| Iteration: Publish Components Package `./instructions/publish-components-package.md`              | `DONE` |
| Iteration: Apply Components to Art MD Web `./instructions/apply-components-art-md-web.md`         | `DONE` |

### Iteration: Scaffold Components Package

**Id:** `scaffold-components-package`

**Status:** `DONE`

**Purpose:** Register `@noodlestan/astro-components` as a valid NPM workspace package.

**Description:** Create the package skeleton and records, include `packages/**` in the repository workspace patterns, and update the lockfile and guide.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/scaffold-components-package.md`

**Report:** `./instructions/scaffold-components-package__report.md`

**Changes:**

- Create the package manifest, record, entry point, tsconfig, and README.
- Add the package license, house-style dotfiles, package `_guide.md`, Vite build script, and package record dependencies.
- Add `packages/**` to `$PROJECT/package.json` workspaces and update `$PROJECT/package-lock.json`.
- Document the new package directory in `$PROJECT/_guide.md`.

**Dependencies:**

- None.

#### Commits:

| ID                          | Repository / Checkout / Branch       | Policy   | Hash      | Status      |
| --------------------------- | ------------------------------------ | -------- | --------- | ----------- |
| `scaffold-astro-components` | Noodlestan Web / `$PROJECT` / `main` | `NOPUSH` | `82a8872` | `COMMITTED` |

##### Commit: scaffold-astro-components

**Repository:** Noodlestan Web

**Message:**

```
scaffold(package-astro-components): Add package house-style files and register the workspace.
```

### Iteration: Create Components From Spec

**Id:** `create-components-from-spec`

**Status:** `DONE`

**Report:** `./instructions/create-components-from-spec__report.md`

**Purpose:** Create the package components and usage assets defined by the attached specification.

**Description:** Implement and export each component, the small package stylesheet, and consumer usage documentation according to `plan__components-spec.md`, without restating their requirements in this plan.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/create-components-from-spec.md`

**Changes:**

- Create `HowToContribute` according to `plan__components-spec.md`.
- Create `HelpWanted` according to `plan__components-spec.md`.
- Create `MadeInNoodlestan` according to `plan__components-spec.md`.
- Create `WorkInProgress` according to `plan__components-spec.md`.
- Create `NoodlestanFooter` according to `plan__components-spec.md`.
- Create `NoodlestanIconLink` according to `plan__components-spec.md`.
- Create `GithubIconLink` according to `plan__components-spec.md`.
- Create `DiscordIconLink` according to `plan__components-spec.md`.
- Create `global.css`, add its explicit package export, and write the README usage instructions according to `plan__components-spec.md`.
- Structure the README component installation and import examples under `## Usage`.

**Dependencies:**

- Iteration: Scaffold Components Package — package and workspace must exist first.

#### Commits:

| ID                       | Repository / Checkout / Branch       | Policy   | Hash      | Status      |
| ------------------------ | ------------------------------------ | -------- | --------- | ----------- |
| `create-components-spec` | Noodlestan Web / `$PROJECT` / `main` | `NOPUSH` | `7e0bb90` | `COMMITTED` |

##### Commit: create-components-spec

**Repository:** Noodlestan Web

**Message:**

```
build(common-components): Create spec components, stylesheet export, and usage documentation.
```

### Iteration: Apply Components to Noodlestan Web

**Id:** `apply-components-noodlestan-web`

**Status:** `DONE`

**Report:** `./instructions/apply-components-noodlestan-web__report.md`

**Purpose:** Use the package in Noodlestan Web and provide the homepage-equivalent demo route.

**Description:** Apply the components at the locations in the attached spec and create `/build/astro-component` with the same homepage content minus its interactive search behavior.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/apply-components-noodlestan-web.md`

**Changes:**

- Apply Noodlestan Web components according to `plan__components-spec.md`.
- Create the `/build/astro-component` route according to `plan__components-spec.md`.

**Dependencies:**

- Iteration: Create Components From Spec — component exports must be available.

#### Commits:

| ID                     | Repository / Checkout / Branch       | Policy   | Hash      | Status      |
| ---------------------- | ------------------------------------ | -------- | --------- | ----------- |
| `apply-components-web` | Noodlestan Web / `$PROJECT` / `main` | `NOPUSH` | `bdb3e50` | `COMMITTED` |

##### Commit: apply-components-web

**Repository:** Noodlestan Web

**Message:**

```
integrate(noodlestan-web): Apply shared components and add the non-interactive demo route.
```

### Iteration: Review and Consolidate

**Id:** `review-and-consolidate`

**Status:** `DONE`

**Purpose:** Review the implemented package with the user and consolidate approved changes before release.

**Description:** The user reviews the implementation with a pair-driver assistant, resolves feedback against the attached spec, and consolidates approved changes. This is user-led work and is not delegated to a worker.

**Instructions Mode:** `INSTRUCTIONS_INLINED_IN_ITERATION`

**Changes:**

- Review the component implementation against `plan__components-spec.md`, using the `/build/astro-component` preview page.
- Consolidate the user's approved review feedback into the package.
- Run package verification before publication.
- The user performs the commit with `MANUAL` policy while working with a pair-driver assistant.

**Instructions:**

The user leads this review with a pair-driver assistant; do not delegate it to a worker. Review the package against `plan__components-spec.md` using the `/build/astro-component` preview page, resolve feedback with the user, consolidate approved changes, verify the package, and have the user perform the commit using the `MANUAL` policy.

**Dependencies:**

- Iteration: Create Components From Spec — components must exist before they can be reviewed and consolidated.
- Iteration: Apply Components to Noodlestan Web — the `/build/astro-component` preview page must exist before the user reviews the components.

#### Commits:

| ID                       | Repository / Checkout / Branch       | Policy   | Hash      | Status      |
| ------------------------ | ------------------------------------ | -------- | --------- | ----------- |
| `review-and-consolidate` | Noodlestan Web / `$PROJECT` / `main` | `MANUAL` | `91b0e78` | `COMMITTED` |

##### Commit: review-and-consolidate

**Repository:** Noodlestan Web

**Message:**

```
refactor(common-components): Review and consolidate the component package before release.

- Classify components.
- Add global typography and surface tokens.
- Recompose components demo page.
```

### Iteration: Publish Components Package

**Id:** `publish-components-package`

**Status:** `DONE`

**Purpose:** Make the verified package installable by the Artificials repository.

**Description:** Add the NPM deployment record and publish a public version of `@noodlestan/astro-components` after package verification.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/publish-components-package.md`

**Changes:**

- Create `$PACKAGE/_records/published.art` according to the NPM Package Deployment structure and link it from `$PACKAGE/_records/package.art`.
- Verify the package contents and version before publishing to the public NPM registry.
- Publish `@noodlestan/astro-components` so `$ARTIFICIALS` can install a versioned dependency.
- After authorized publication, mark the deployment `DEPLOYED` and the package as published; make no registry write before authorization.

**Dependencies:**

- Iteration: Create Components From Spec — only verified package contents may be published.
- Iteration: Review and Consolidate — user review and consolidation are required before release.

#### Commits:

| ID                          | Repository / Checkout / Branch       | Policy   | Hash      | Status      |
| --------------------------- | ------------------------------------ | -------- | --------- | ----------- |
| `publish-components-record` | Noodlestan Web / `$PROJECT` / `main` | `NOPUSH` | `7bf0ce0` | `COMMITTED` |

##### Commit: publish-components-record

**Repository:** Noodlestan Web

**Message:**

```
release(package-astro-components): Add the public NPM deployment record.
```

### Iteration: Apply Components to Art MD Web

**Id:** `apply-components-art-md-web`

**Status:** `DONE`

**Purpose:** Consume the published package in the Art MD Website.

**Description:** Install the released package and apply the Art MD Web components at the locations defined in the attached spec.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Instructions:** `./instructions/apply-components-art-md-web.md`

**Changes:**

- Add `@noodlestan/astro-components` as a dependency in `$ART_MD_APP/package.json` and update the Artificials lockfile.
- Apply Art MD Web components according to `plan__components-spec.md`.
- Verify the Art MD Web app builds and the specified app locations render correctly.

**Dependencies:**

- Iteration: Publish Components Package — Art MD Web must install a published package version.

#### Commits:

| ID                        | Repository / Checkout / Branch        | Policy   | Hash      | Status      |
| ------------------------- | ------------------------------------- | -------- | --------- | ----------- |
| `apply-components-art-md` | Artificials / `$ARTIFICIALS` / `main` | `NOPUSH` | `ff118fc` | `COMMITTED` |

##### Commit: apply-components-art-md

**Repository:** Artificials

**Message:**

```
build(artificials): Apply shared components to the Art MD Website.
```

## Work

### Next

### Next

Run the user-led `review-and-consolidate` iteration with a pair-driver assistant: it is not delegated to a worker, and the user performs its commit under the `MANUAL` policy. Review against `plan__components-spec.md` using the `/build/astro-component` preview page (rendered via the shared layout with no duplicate footer). Confirm public NPM publication authorization before the publish iteration.

### Blockers

- None.

## Operating Instructions

### Writing Commit Message

**Purpose:** Write standardized messages according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/writing-commit-message/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write commit messages following those rules.

### Setting Up

Run `npm ci` from the root of `$PROJECT` and `$ARTIFICIALS` before working in each repository.

### Verifying Step

Run the target app's `npm run lint` and `npm run build` from `$APP` or `$ART_MD_APP` as appropriate.

### Verifying Completion

Run `npm run ci` from each repository root after integration. Verify the NPM package contains the files exported by the spec before release, and verify both apps resolve the released package version.

### Publishing

Follow the package's NPM deployment record and deployment commands. Do not publish until the package build and package contents have been verified and public publication has been confirmed.

---

## Coordination

### Not In Scope

- **Wholesale global-style extraction** — include only the minimal package-owned stylesheet defined in the spec attachment.
- **A general-purpose page/layout framework** — existing app composition remains app-owned.
- **Additional app content** — do not add content beyond the spec and homepage-equivalent demo requirements.

### Evidence

- `scaffold-components-package` committed as `82a8872`: package manifest, package and deployment records, entry point, tsconfig, README with `## Usage`, `LICENSE-MIT`, package dotfiles, package `_guide.md`, `packages/**` workspace registration, lockfile update, and repository guide update. The package `npm run lint:fix` passed.
- `apply-components-noodlestan-web` committed as `bdb3e50`: the package added as a workspace dependency, `Contributing` replaced with `HowToContribute`/`HelpWanted`, `About` uses `MadeInNoodlestan`, `SiteHeader` uses `DiscordIconLink`, `SiteFooter` replaced by `NoodlestanFooter` via the shared layout, `global.css` imported once in `HomeLayout`, and `/build/astro-component` added as a non-interactive homepage mirror (no search, no duplicate footer). The app build generated `/build/astro-component/index.html`.

### Findings

- The completed homepage plan provides the existing contribution copy and links used by the component spec.
- The current Noodlestan Web and Art MD Web implementations contain the footer and icon SVG/style sources identified by the spec.
- Art MD Web is a separate repository consumer, so a published NPM package is required for a reproducible dependency.

### Decisions

- **Spec is authoritative** — component-level purpose, source, props, wireframes, and application points live only in `plan__components-spec.md`.
- **One social icon link per app header** — the exact component-to-app mapping is defined in the spec.
- **Demo uses shared layout** — the page body mirrors the homepage without search interaction; the layout supplies the header and footer once.
- **Publish for cross-repository use** — release the package publicly before Art MD Web adopts it.
- **Demo route precedes the review** — the `apply-components-noodlestan-web` iteration builds `/build/astro-component` first, so the user-led `review-and-consolidate` iteration can review rendered output rather than source alone. The review still precedes publication.

### Knowledge to Update

- Update the Noodlestan Web and Art MD Web guides to document package consumption and the demo route where appropriate.

### Follow Ups

- Apply the WIP component to live content only when a genuine WIP state is identified.
- Adopt the package in additional Noodlestan sites when they exist.

### Feedback

- `npm run ci` passed after formatting this plan and its instructions; the root formatting blocker is resolved. Keep formatting plan files before any subsequent delegation.
- The worker delegated for `scaffold-components-package` reported a BLOCKER on the root Prettier check of this plan; see `./instructions/scaffold-components-package__report.md`. The iteration was then completed user-led with a pair-driver assistant and committed as `82a8872`, so the reported blocker no longer applies.
- The committed deployment record is `packages/astro-components/_records/npm-deployment` — without the `.art` extension — and is titled `NPM Package Deployment: Noodlestan Astro Components`, while `package.art` links to `NPM Package Deployment: Noodlestan Common Components`. Before publishing, the publish iteration must rename the record to `published.art` and align the two names.
- The scaffold commit message `scaffold(package-astro-components): Add package house-style files and usage docs` differs from the plan blueprint wording; the committed message is authoritative.
- The `create-components-from-spec` worker reported that `astro/client` does not declare `*.astro` modules, so a package shipping `.astro` sources needs its own ambient declaration. The implementation adds `src/astro.d.ts` using `AstroComponentFactory` plus `"types": ["astro/client"]` and `skipLibCheck` in the package `tsconfig.json`. If the pattern repeats, it belongs in a shared `@noodlestan/tsconfig` preset.
- The specification's `MadeInNoodlestan` entry carries an unresolved WIP note that conflicts with its wireframe. The implementation followed the note — an anchor wrapping an inline-flex span that holds the logo before the brand name. The specification should state which of the two is authoritative.
- The specification names each component's source file but not where shared internal markup lives; the implementation placed the shared anchor and logo under `src/components/private/`, so the public API is exactly the eight specified components. The specification could state this convention for future components.
- The README `## Usage` example uses placeholder URLs; the consumer iterations should show the real endpoints to keep the documentation honest.
- The `apply-components-noodlestan-web` iteration consumed the package as a local workspace dependency (it is not yet published to npm); its instructions incorrectly referenced a "published package", so the delegation directive corrected that. Do not publish before Art MD Web consumes a registry version.
- `npm run ci` passed in the repo root after integration; the demo route built successfully (`/build/astro-component/index.html`).
