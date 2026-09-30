# Plan: Design and Content

**Id:** `design-and-content`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Give noodlestan.org a coherent visual identity and a branded 404 page, by landing the design system, refreshed homepage content, and the layout layer in one coordinated change.

**Description:** Merges the former `Plan: Add 404 Page`, `Plan: Design Exploration`, and `Plan: Tokenize and Style` into a single plan of 3 iterations: the design system and content implemented in `$APP`, the `PageLayout` and 404 page, and the token, identity asset, and content contract gaps that remain.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | Provided with prompt                  | Noodlestan Web repository checkout |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory         |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |

## Summary

Establish the visual identity of noodlestan.org — a global token sheet, web font loading, a decomposed site header, the site logo, and refreshed homepage content — inside the `$APP` application, then publish a branded 404 page through `PageLayout`, and close the remaining token, identity asset, and content contract gaps.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                                       | Role                                                                              |
| ----------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Milestone   | `$NOODLESTAN_WEB/_roadmap/3-now/milestone-noodlestan-web-mvp/milestone.md` | Owning Milestone — Phase 3 `Identity and Styling`.                                |
| Plan        | `_backlog/1-done/plan-home-sections-mvp/plan.md`                           | Completed — established the homepage sections and `Site*` components reused here. |
| Parking Lot | `_backlog/_parking-lot.md`                                                 | Tracks short-term actionables, pending questions, and blockers.                   |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Drafting, Refining.

### Domains

| Domain / Path                                        | Description                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.              |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path |
| ----------- | ------------ | --------------------- |
| Application | Applications | — WIP                 |

### Workflows

| Workflow / Path                                                        | Purpose                                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work. |

### Knowledge

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines plan record fields and statuses. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/plans/structures/iteration.art` (Structure) — Defines iteration as a container for changes and commits. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/commits/types/commit.art` (Type) — Defines planned commit blueprints. Relevant for stages Drafting, Refining.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Defines the commit message format, types, scopes, and rules. Relevant for stages Writing Commit Message.

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for stages Setting up, Verifying, Committing.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for all iterations.

::READ `$APP/_guide.md` (Guide) — Defines the Astro application operations. Relevant for all iterations.

## Scope

This plan establishes the design system, the layout layer, and the homepage content of the Astro application, and adds the first standalone page rendered through `PageLayout`. It supersedes `Plan: Add 404 Page`, `Plan: Design Exploration`, and `Plan: Tokenize and Style`.

### (Scope) Application: Noodlestan Website

**Record:** `apps/noodlestan-web/_guide.md`

**Role:** — The main noodlestan.org website, built with Astro. All changes land here.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`
- `url` — `https://noodlestan.org`

**Changes:**

- Add `$APP/src/styles/global.css` as the single token sheet, imported by each layout.
- Extract the document head into `$APP/src/layouts/components/SiteHead.astro` and rename `Layout.astro` to `HomeLayout.astro`.
- Add `$APP/src/layouts/PageLayout.astro` as a thin contract over `HomeLayout`, and render `$APP/src/pages/404.astro` through it.
- Add `$APP/src/components/site/SiteLogo.astro` and split `SiteHeader` into `SiteHeaderContainer`, `SiteHeaderDivider`, `SiteLinks`, `SiteNav`, and `SiteTitle`.
- Add `license` to `ENDPOINTS.noodlestan` in `$APP/src/consts.ts`.
- Refresh the homepage section components and the regenerated project records in `$NOODLESTAN_WEB/data/`.

## Execution Context

Execution is coordinated from the `$NOODLESTAN_WEB` checkout on branch `main`, with all application work under `$APP/`. All 3 iterations are committed.

---

## Items:

| Iteration / Instructions                                 | Status |
| -------------------------------------------------------- | ------ |
| Iteration: Establish Design System and Content           | `DONE` |
| Iteration: Add PageLayout and 404 Page                   | `DONE` |
| Iteration: Complete Tokens, Icons, and Content Contracts | `DONE` |

### Iteration: Establish Design System and Content

**Id:** `establish-design-system-and-content`

**Status:** `DONE`

**Purpose:** Give the site a token-driven visual identity and refreshed homepage content, so that every later page inherits one consistent design system.

**Description:** Implements the identity and content work in `$APP` — the global token sheet, web font loading, `SiteHead` extraction, the `Layout` to `HomeLayout` rename, the decomposed site header, the site logo, the footer, and the homepage section copy. Landed as `5294bd0`; the commit blueprint below was written before execution and diverged, so the authored message is shown as executed.

**Changes:**

- Add `$APP/src/styles/global.css` as the single stylesheet imported by every layout:
  - Declares `:root` custom properties for the curcuma, orange, and purple palettes in `oklch()`.
  - Maps semantic tokens — `--color-content`, `--color-headings`, `--color-brand`, `--color-surface-bg`, `--color-page-bg`, `--color-interactive`, and the `--color-gradient-*` scale — over the raw palette.
  - Declares the type scale — `--type-brand-family`, `--type-headings-family`, `--type-nav-family`, `--type-text-family`, `--type-code-family` — and the text tokens `--text-line-height`, `--text-max-width`.
  - Carries the document reset (`box-sizing`, `html`/`body` margin and size, body typography) and the `main`, `a`, `code`, and heading element defaults.
  - Declares the layout scale `--page-margin-h` and the section primitives `.container`, `.main-section`, `.main-anchor`, `.markdown`, `.text-large`, `.text-medium`.
  - Provides a `prefers-color-scheme: dark` block that swaps the semantic colour tokens.
- Extend `$APP/src/layouts/components/SiteHead.astro` with the identity decisions previously deferred:
  - Adds `<link rel="preconnect" href="https://fonts.bunny.net" />` and the Fredoka / Lusitana stylesheet link.
  - Adds `<meta name="theme-color" content="#00d590" />`.
  - Destroys the `<link rel="icon" href="/favicon.svg">` reference; the surviving links are `/icon.svg`, `/favicon.ico`, and `/apple-touch-icon.png`.
- Rename `$APP/src/layouts/Layout.astro` to `$APP/src/layouts/HomeLayout.astro` with `git mv`, and:
  - Adds the `content` prop, destructured as `const { content } = Astro.props;`, and renders `<SiteHead content={content} />` as the only child of `<head>`.
  - Imports `../styles/global.css`.
  - Composes `SiteHeader`, `<main><slot /></main>`, and `SiteFooter`, so both layouts share one chrome contract.
  - Replaces the former `html, body` reset block with `main { padding-block-start: 8rem; overflow-x: hidden; }`, clearing the fixed header.
- Update `$APP/src/pages/index.astro` to import `HomeLayout` and pass a `content` literal of `{ title, description }`.
- Add `$APP/src/components/site/SiteLogo.astro` — the Noodlestan mark, used by both `Hero.astro` and `SiteTitle.astro`.
- Move `SiteHeader.astro` and `SiteFooter.astro` from `$APP/src/components/site/` to `$APP/src/layouts/components/`, and split the header into `SiteHeaderContainer`, `SiteHeaderDivider`, `SiteLinks`, `SiteNav`, and `SiteTitle`:
  - `SiteHeaderContainer.astro` owns the fixed header, the striped `::before` banner, and the single `wave` `clipPath` referenced by both `::before` and `::after`.
  - `SiteHeaderDivider.astro` owns the dashed rule with its two offset shadow strips.
  - `SiteTitle.astro` pairs `SiteLogo` with the wordmark, hiding the wordmark below `375px`.
  - `SiteNav.astro` renders the in-page section anchors; `SiteLinks.astro` renders the GitHub and Discord icon links with descriptive `aria-label` values.
  - `SiteFooter.astro` gains a license line driven by the new `ENDPOINTS.noodlestan.license`.
- Add `license: 'https://noodlestan.mit-license.org/'` to `ENDPOINTS.noodlestan` in `$APP/src/consts.ts`.
- Rewrite the homepage section components `Hero.astro`, `ProjectList.astro`, `ProjectItem.astro`, `Workflows.astro`, `Contributing.astro`, and `About.astro` onto the new primitives, and refresh `_backlog/1-done/plan-home-sections-mvp/attachments/home-content.md` to match.
- Regenerate the project records and collection: `data/_records/projects/` and `data/projects/collection.json`.
- Remove the unused Astro scaffold: `src/components/Welcome.astro`, `src/assets/astro.svg`, and `src/assets/background.svg`.

**Dependencies:**

- None. This iteration is self-contained.

#### Commits:

| ID                                    | Repository / Checkout / Branch              | Policy   | Hash      | Status     |
| ------------------------------------- | ------------------------------------------- | -------- | --------- | ---------- |
| `establish-design-system-and-content` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `MANUAL` | `5294bd0` | `EXECUTED` |

##### Commit: `establish-design-system-and-content`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Establish identity, tokens, and a branded 404 page.

- Add `src/styles/global.css` with colour, type, and spacing tokens plus the document reset.
- Load Fredoka and Lusitana, add `SiteLogo`, and compose `SiteHeader` from split parts.
- Refresh homepage content and project records; add a branded 404 page.
```

### Iteration: Add PageLayout and 404 Page

**Id:** `add-page-layout-and-404`

**Status:** `DONE`

**Purpose:** Give standalone pages a named layout contract that carries the site chrome, so pages do not each compose `SiteHeader` and `SiteFooter` themselves, and publish the first such page.

**Description:** Add `$APP/src/layouts/PageLayout.astro` as a thin contract over the existing `HomeLayout`, and render `$APP/src/pages/404.astro` through it. The first draft of this iteration specified `PageLayout` as a second chrome-bearing layout carrying its own `SiteHead`, `SiteHeader`, `SiteFooter`, and `main` rule; that would have been byte-identical to `HomeLayout`, so the implementation inverts the relationship instead. `HomeLayout` is the single chrome owner and `PageLayout` delegates to it.

**Changes:**

- Create `$APP/src/layouts/PageLayout.astro`:
  - Declares the `content: { title: string; description: string }` contract and destructures `const { content } = Astro.props;`.
  - Imports `HomeLayout` from `./HomeLayout.astro` and renders `<HomeLayout content={content}><slot /></HomeLayout>`.
  - Carries no markup, no `import '../styles/global.css'`, and no `main` rule of its own — those stay with `HomeLayout` so the two layouts cannot drift.
- Update `$APP/src/pages/404.astro`:
  - Import `PageLayout` from `../layouts/PageLayout.astro` in place of `HomeLayout`, and the root tag with it.
  - The `content` literal already reads `description: 'The requested page does not exist on this site.'`; the rendered body copy reads `The page you requested does not exist on this site.`, so both remain as written and are intentionally not identical.
  - Keeps the `<section class="main-section">` and `.text-large` wrappers — both are real primitives in `global.css`.
  - Drops the local `p { font-size: 1.3rem }` `<style>` block, leaving the page with no scoped styles at all.
- Declare `interface Props` with `content: { title: string; description: string }` in `$APP/src/layouts/HomeLayout.astro`, so the chrome owner and the contract it exports are both typed.

**Dependencies:**

- Iteration: Establish Design System and Content — `PageLayout` delegates to `HomeLayout`, which that iteration renames and gives the chrome contract.

#### Commits:

| ID                        | Repository / Checkout / Branch              | Policy   | Hash      | Status     |
| ------------------------- | ------------------------------------------- | -------- | --------- | ---------- |
| `add-page-layout-and-404` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `MANUAL` | `23051a0` | `EXECUTED` |

##### Commit: `add-page-layout-and-404`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Add `PageLayout` and render 404 through it.

- Add `src/layouts/PageLayout.astro` delegating to `HomeLayout` with a typed `content` prop.
- Type the `content` prop in `HomeLayout`.
- Render `src/pages/404.astro` through `PageLayout` and drop its local `<style>` block.
```

### Iteration: Complete Tokens, Icons, and Content Contracts

**Id:** `complete-tokens-icons-and-contracts`

**Status:** `DONE`

**Purpose:** Close the gaps the first two iterations leave behind — an undefined token, an out-of-palette theme colour, a half-present icon set, and an untyped layout prop contract.

**Description:** Reconciles the token sheet with the values the components actually consume, finishes the identity asset set in `$APP/public/`, and declares the `content` prop contract on all three layout-layer components so Astro type-checks the head metadata. This is the plan's final iteration; everything it lists lands in one commit.

**Changes:**

- Add `--type-spacing-compact: 0.01em` to `:root` in `$APP/src/styles/global.css`. It is consumed by `.main-section h2 em`, whose parent `h2` sets `letter-spacing: -0.02em`; the token gives the emphasised span slightly open tracking against the tightened uppercase heading.
- Replace `<meta name="theme-color">` in `$APP/src/layouts/components/SiteHead.astro`. The inherited `#00d590` was a green absent from the curcuma, orange, and purple token set; it is now `#f0631d`, the sRGB hex of `oklch(67% 0.19 42)` — the same value as `--palette-brand-orange` and `--color-brand`.
- Drop two dead tokens from `:root` in `$APP/src/styles/global.css`:
  - `--palette-brand-curcuma` was byte-identical to `--palette-curcuma-400`.
  - `--palette-brand-purple` was a third purple, `oklch(58% 0.22 316)`, outside the `--palette-purple-400` / `--palette-purple-600` scale it duplicated in role.
- Declare `interface Props` with `content: { title: string; description: string }` in `$APP/src/layouts/components/SiteHead.astro`. `HomeLayout.astro` and `PageLayout.astro` already declare it.
- Complete the identity asset set in `$APP/public/`, which is exactly `icon.svg`, `favicon.ico`, and `apple-touch-icon.png`:
  - `icon.svg` is derived from the `SiteLogo.astro` mark, so the favicon and the header logo are the same artwork.
  - `apple-touch-icon.png` is `180 × 180`, so the `apple-touch-icon` link resolves on iOS.
  - `favicon.svg` is not part of the set and is removed; `SiteHead` links the three files above and nothing else.

**Dependencies:**

- Iteration: Establish Design System and Content — the token sheet and icon links originate there.
- Iteration: Add PageLayout and 404 Page — `PageLayout` is one of the three components now typed.

#### Commits:

| ID                                    | Repository / Checkout / Branch              | Policy   | Hash      | Status     |
| ------------------------------------- | ------------------------------------------- | -------- | --------- | ---------- |
| `complete-tokens-icons-and-contracts` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `MANUAL` | `918d123` | `EXECUTED` |

##### Commit: `complete-tokens-icons-and-contracts`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): Complete tokens, identity assets, and layout contracts.

- Define `--type-spacing-compact`, drop two dead palette tokens, and set `theme-color` to the brand orange.
- Complete `public/` with `icon.svg` and `apple-touch-icon.png`, refresh `favicon.ico`, and drop the unused `favicon.svg`.
- Type the `content` prop in `SiteHead`.
```

---

## Work

### Next

None. All 3 iterations are committed; milestone Phase 3 closes with this plan.

### Blockers

- None.

## Operating Instructions

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/writing-commit-message/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the message following the rules defined there.

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/setting-up.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm ci # to install dependencies.
```

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

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$APP/_guide.md`)

Run from the `$APP` package directory:

```bash
npm run lint # to report formatting issues
npm run build # to produce a full build
```

---

## Coordination

### Not In Scope

- **Standalone pages beyond 404** — the `about` page and every other Art MD page are still out of scope; `PageLayout` exists so they can be added without re-composing the chrome.
- **Markdown content collection** — the reference app selects layouts from `layout:` / `title:` / `description:` frontmatter. `$APP` has no Markdown pages, and `index.astro` keeps a frontmatter `content` literal.
- **Page metadata in `$APP/src/consts.ts`** — site title and description stay as per-page literals until more pages exist and the literals start to drift.
- **A PWA manifest** — no `site.webmanifest` and no manifest link; out of scope until the icon set settles.
- **Deployment** — the Deploying workflow is not invoked by this plan; the design and content changes ship on the next deployment.

### Evidence

- `npm run build` from `$APP` succeeds and emits both `dist/index.html` and `dist/404.html`.
- `dist/index.html` carries the token sheet, the Fredoka and Lusitana links, the `theme-color` meta, the fixed composed header with the site logo, and the refreshed homepage sections.
- `dist/404.html` renders the same header and footer through `PageLayout`, with `<title>Page not found</title>` and a working link to `/`.
- Every `href` in the emitted head resolves to a file in `dist/`, and every file in `public/` is linked.
- Switching the OS or browser to dark mode re-maps the semantic colour tokens without any component change.

### Findings

- The design work landed in the working tree before the plan that would have carried it. `Plan: Add 404 Page` had deliberately deferred fonts, `theme-color`, and the token sheet to the two unwritten Phase 3 plans, and forbade `import '../styles/global.css'` in `PageLayout`; all three deferrals were overtaken, which is why this plan absorbs them rather than the 404 plan remaining separate.
- `$APP/src/styles/global.css` now carries a document reset at lines 51 to 76 that is a strict superset of the `html, body` reset the old `Layout.astro` held. Carrying the reset in both layouts, as the merged 404 plan required, would have duplicated it — the token sheet is the single reset owner.
- `HomeLayout` and `PageLayout` are no longer two chrome-bearing layouts. The merged-away 404 plan kept `HomeLayout` bare so the homepage composed its own `SiteHeader` and `SiteFooter`; once the token sheet and decomposed header landed, that produced two byte-identical layouts. `PageLayout` became a thin delegation to `HomeLayout` instead, so the chrome has one owner and standalone pages still get a named contract.
- `--type-spacing-compact` is consumed by `.main-section h2 em` in `global.css` but declared nowhere; the `letter-spacing` it drives is silently inert.
- The `theme-color` `#00d590` inherited from the Art MD reference is outside the curcuma, orange, and purple palette this site settled on.
- `$APP/public/` shipped `favicon.ico` and `favicon.svg` while `SiteHead` linked `/icon.svg` and `/apple-touch-icon.png`, so two links 404'd in production and `favicon.svg` was referenced by nothing. The settled asset set is `icon.svg`, `favicon.ico`, and `apple-touch-icon.png`; `favicon.svg` was not wanted and is gone.
- `SiteLogo.astro` deliberately lives in `src/components/site/` rather than `src/layouts/components/` because pages as well as layouts render it; `Hero.astro` and `SiteTitle.astro` both import it.
- `main { padding-block-start: 8rem; }` in `HomeLayout` is layout-generic, not home-page-specific: it clears the fixed site header, so it belongs in whichever layout carries that header.
- `npm run build` and `npx prettier . -c` both pass on the current working tree.
- `--palette-brand-curcuma` and `--palette-brand-purple` were both dead on arrival: the first duplicated `--palette-curcuma-400` exactly, the second introduced a purple outside the `--palette-purple-400` / `--palette-purple-600` scale. Neither was load-bearing, so both were dropped rather than wired.
- `theme-color` cannot reference a CSS custom property in a `<meta content>` attribute, so the brand orange had to be spelled as hex. `#f0631d` is the sRGB equivalent of `oklch(67% 0.19 42)`; the duplication between the meta and `--color-brand` is unavoidable and is noted rather than papered over with a build step.

### Decisions

- **`HomeLayout` carries the chrome** — the merged-away 404 plan kept it bare so the homepage composed its own `SiteHeader` and `SiteFooter`. With a token sheet and a decomposed header in place, one chrome contract used by both layouts is simpler and keeps the two layouts from drifting.
- **Fonts load from `fonts.bunny.net`, not Google Fonts** — the reference app's `fonts.googleapis.com` links are replaced with Bunny, and the token sheet's `--type-*` families name the loaded faces.
- **The token sheet owns the document reset** — layouts carry only the header-clearing `main` rule, so a reset change is a one-file change.
- **`PageLayout` delegates to `HomeLayout` rather than duplicating it** — the first draft of the iteration made the two layouts siblings carrying identical chrome. Duplicating markup to preserve a naming distinction was the wrong trade; `PageLayout` is now a typed `content` prop plus a forwarded slot, which keeps the standalone-page contract without a second source of truth.
- **One commit per iteration, all `MANUAL`** — the user executes the commits, so no instructions files are generated and nothing is delegated.

### Knowledge to Update

None.

### Follow Ups

- Add the `about` page, and any other standalone page, through `PageLayout`.
- Adopt the reference's Markdown-page pattern so page metadata stops being hand-written per page.
- Move site title and description into `$APP/src/consts.ts` once the per-page literals start to drift.
- Regenerate the project records from the workspace and rebuild `data/projects/collection.json` as a scripted step rather than by hand.

### Feedback

- None.
