# Plan: Create Noodlestan Astro Components Package

**Id:** `noodlestan-astro-components`

**Status:** `PLANNING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Give noodlestan.org sites one shared implementation of the design tokens and site chrome by extracting them from the website into the first package of this monorepo.

**Description:** Three iterations: scaffold the package with its records and exports, move the token sheet and the `Site*` chrome components into it, then have the website consume it through a workspace dependency and prove the site still builds and renders identically.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                               | Purpose                            |
| ----------------- | ------------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory                   | Workspace root directory           |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`                | Domain resources directory         |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web`       | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web`       | The Astro application              |
| `$PACKAGE`        | `$NOODLESTAN_WEB/packages/astro-components` | The Astro components package       |

## Summary

Create `packages/astro-components` as the first package of the monorepo, move `src/styles/global.css` and the site chrome components into it, and have `apps/noodlestan-web` import them from the package so a second site can reuse the same design system.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                        | Role                                                      |
| ----------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| Milestone   | `_roadmap/3-now/milestone-noodlestan-web-next/milestone.md` | Owning Milestone — Phase 2 `Astro Components Package`.    |
| Parking Lot | `_roadmap/_parking-lot.md`                                  | Origin of this plan; the package name is still TBD there. |
| Milestone   | `_roadmap/1-done/milestone-noodlestan-web-mvp/milestone.md` | Delivered the tokens and chrome that this plan extracts.  |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Drafting, Refining.

### Domains

| Domain / Path                           | Description                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md` | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path                             |
| ----------- | ------------ | ------------------------------------------------- |
| Package     | Packages     | `$DOMAINS/packages/structures/package.art`        |
| Application | Applications | — WIP                                             |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |

### Workflows

| Workflow / Path                                                              | Purpose                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Workflow: Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art` | Create and manage work items lifecycle, collecting operational instructions. |

### Knowledge

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the repository conventions and the monorepo layout. Relevant for all iterations.

::READ `$NOODLESTAN_WEB/_records/namespace.art` (Namespace) — Defines the `@noodlestan` namespace the package belongs to. Relevant for iteration `scaffold-components-package`.

::READ `$APP/src/styles/global.css` (Token Sheet) — The single source of colour, type, and layout tokens to be moved. Relevant for iteration `move-tokens-and-chrome`.

::READ `$APP/knowledge/adr/endpoints.md` (ADR) — Endpoints sourcing and exposure decisions; the chrome components read `src/consts.ts`, which stays in the app. Relevant for iteration `move-tokens-and-chrome`.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Defines the commit message format, types, scopes, and rules. Relevant for stages Writing Commit Message.

## Scope

This plan creates one package and moves existing code into it. It does not redesign tokens, add components, or publish to npm.

### (Scope) Package: Noodlestan Astro Components

**Record:** `$PACKAGE/_records/package.art`

**Role:** — New — owns the design tokens and the site chrome components shared by noodlestan.org sites.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/packages/astro-components/`
- `name` — `@noodlestan/astro-components`

**Changes:**

- Create the package directory, records, `package.json`, and tsconfig.
- Export the `.astro` components and `global.css`.
- Own the token sheet and the `Site*` chrome components.

### (Scope) Application: Noodlestan Website

**Record:** `$APP/_guide.md`

**Role:** — The main noodlestan.org website, built with Astro. Becomes the first consumer of the package.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`

**Changes:**

- Depend on the package through the workspace.
- Replace local chrome and token imports with package imports.
- Keep page-level components (`Hero`, `ProjectList`, and the other home sections) in the app.

### (Scope) Repository: Noodlestan Web

**Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Role:** — Hosts both the package and the application.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/`

## Execution Context

Execution is coordinated from the `$NOODLESTAN_WEB` checkout on branch `main`. Package work happens in `packages/astro-components/`; the consuming changes happen in `apps/noodlestan-web/`.

---

## Items:

| Iteration / Instructions               | Status     |
| -------------------------------------- | ---------- |
| Iteration: Scaffold Components Package | `PLANNING` |
| Iteration: Move Tokens and Chrome      | `PLANNING` |
| Iteration: Consume Package From App    | `PLANNING` |

### Iteration: Scaffold Components Package

**Id:** `scaffold-components-package`

**Status:** `PLANNING`

**Purpose:** Create the first package of the monorepo with its records and its export surface, empty of components.

**Description:** Add `packages/astro-components/` with a package record, a `package.json` under the `@noodlestan` namespace, and a tsconfig aligned with the repository conventions. The package exports `.astro` components and a stylesheet; no component is moved yet.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Create `$PACKAGE/_records/package.art` following `$DOMAINS/packages/structures/package.art`.
- Create `$PACKAGE/package.json` publishing `@noodlestan/astro-components`, exposing the components directory and the stylesheet.
- Create `$PACKAGE/tsconfig.json` extending the repository base config.
- Create `$PACKAGE/README.md` stating what the package owns and who consumes it.
- Add a placeholder export so the package resolves before anything is moved.

**Dependencies:**

- None.

#### Commits:

| ID                          | Repository / Checkout / Branch              | Policy | Hash | Status    |
| --------------------------- | ------------------------------------------- | ------ | ---- | --------- |
| `scaffold-astro-components` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | —      | —    | `PLANNED` |

##### Commit: scaffold-astro-components

**Repository:** Noodlestan Web

**Message:**

scaffold(package-astro-components): Add the package skeleton with records, package.json, tsconfig, and README.

### Iteration: Move Tokens and Chrome

**Id:** `move-tokens-and-chrome`

**Status:** `PLANNING`

**Purpose:** Put the token sheet and the site chrome in the package so they have one owner.

**Description:** `git mv` `src/styles/global.css` and the site chrome components into the package, keeping behaviour identical. Page-level components and `src/consts.ts` stay in the app, so the package takes its endpoints as props rather than importing the app's module.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Move `$APP/src/styles/global.css` into `$PACKAGE/src/styles/global.css`.
- Move the site chrome into `$PACKAGE/src/components/`: `SiteHead`, `SiteHeader`, `SiteHeaderContainer`, `SiteHeaderDivider`, `SiteLinks`, `SiteNav`, `SiteTitle`, `SiteFooter`, and `SiteLogo`.
- Replace the endpoints the chrome reads from `src/consts.ts` with props, so the package does not depend on the app.
- Keep `HomeLayout`, `PageLayout`, the home section components, and `src/consts.ts` in the app.
- Export the moved components and the stylesheet from the package entry point.

**Dependencies:**

- Iteration: Scaffold Components Package — the package must exist before code can move into it.

#### Commits:

| ID                       | Repository / Checkout / Branch              | Policy | Hash | Status    |
| ------------------------ | ------------------------------------------- | ------ | ---- | --------- |
| `move-tokens-and-chrome` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | —      | —    | `PLANNED` |

##### Commit: move-tokens-and-chrome

**Repository:** Noodlestan Web

**Message:**

refactor(package-astro-components): Move token sheet and `Site*` chrome into the package as props-driven.

### Iteration: Consume Package From App

**Id:** `consume-package-from-app`

**Status:** `PLANNING`

**Purpose:** Prove the extraction by having the website import the tokens and chrome from the package and build unchanged.

**Description:** Add the package as a workspace dependency of the app, repoint the imports, remove the moved files, and verify that the built output is unchanged apart from import paths.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add `@noodlestan/astro-components` as a workspace dependency in `$APP/package.json`.
- Repoint `$APP/src/layouts/HomeLayout.astro` and `$APP/src/layouts/PageLayout.astro` to the package's `global.css` and chrome components.
- Delete the moved originals from `$APP/src/`.
- Confirm `npm run build` emits the same `dist/index.html` and `dist/404.html`, with the same head links, header, and footer.

**Dependencies:**

- Iteration: Move Tokens and Chrome — the components must live in the package before the app can import them.

#### Commits:

| ID                           | Repository / Checkout / Branch              | Policy | Hash | Status    |
| ---------------------------- | ------------------------------------------- | ------ | ---- | --------- |
| `consume-components-package` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | —      | —    | `PLANNED` |

##### Commit: consume-components-package

**Repository:** Noodlestan Web

**Message:**

build(package-astro-components): Consume the package from the website; verify the built output is unchanged.

## Work

### Next

Draft self-contained instructions for all three iterations and mark them `READY`.

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

**Instructions:** (From `$NOODLESTAN_WEB/_guide.md`)

Run from the `$NOODLESTAN_WEB` root:

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

- **npm publication** — the package is consumed inside this repository; publishing is separate work.
- **New or redesigned components** — the plan moves what exists; the search input and the home sections stay where they are.
- **A second consuming site** — no other noodlestan.org site exists yet.

### Evidence

- None yet.

### Findings

- None yet.

### Decisions

- **Props over app imports** — the chrome components take endpoints as props instead of importing the app's `src/consts.ts`, so the package has no dependency on the website.
- **The token sheet travels whole** — `global.css` moves as one file rather than being split, keeping the document reset and the semantic tokens in a single place.
- **Page-level components stay in the app** — `Hero`, `ProjectList`, and the other home sections are page content, not shared chrome.

### Knowledge to Update

- None.

### Follow Ups

- Publish the package once a second consumer exists outside this repository.
- Adopt the package for the next noodlestan.org site when it is created.
- Decide whether page-level components move into the package once a second page reuses them.

### Feedback

- None.
