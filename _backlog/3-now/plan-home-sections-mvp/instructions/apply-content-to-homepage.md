# Instructions: `apply-content-to-homepage`

**Plan:** `home-sections-mvp`

**Iteration Id:** `apply-content-to-homepage`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-home-sections-mvp/instructions/apply-content-to-homepage__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `apply-content-to-homepage`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | Provided with prompt                  | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `apply-content-to-homepage`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Apply the approved homepage content to `$APP/src/pages/index.astro` as structured sections (already committed in `add-home-content`, `df5585b`), then extract site-wide and page components from the applied markup, and centralize site endpoints in `src/consts.ts` per ADR `$APP/architecture/adr/endpoints.md`. No CSS.

## Mandatory Reading

This section lists the documentation and reference files the sub-agent needs to read before making changes.

- ADR: `$APP/architecture/adr/endpoints.md` — endpoints sourcing and exposure decisions (consts.ts, generated module, Astro config).
- Guide: `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md` — Astro application operations (setting up, verifying).
- Guide: `$NOODLESTAN_WEB/_guide.md` — Noodlestan Web repository operations.
- Guide: `$WORKSPACE/_guide.md` — workspace operations.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the commit message following the rules defined there.

### Setting Up

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

Run from this package directory:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues
npm run build # to produce a full build
```

### Verifying Completion

**Instructions:** (From `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md`)

Run from this package directory:

```bash
npm run lint # to report formatting issues
npm run build # to produce a full build
```

---

## Changes

The homepage markup is already applied (`add-home-content`, `df5585b`). Remaining changes:

- Step 1 / 5 — Extract site-wide components (`SiteHeader`, `SiteFooter`)
- Step 2 / 5 — Extract page content components (`Hero`, `Projects`, `Workflows`, `Contributing`, `About`)
- Step 3 / 5 — Commit `extract-components`
- Step 4 / 5 — Centralize endpoints in `src/consts.ts` and set `site` in `astro.config.mjs`
- Step 5 / 5 — Commit `urls-as-variables`

## Steps

### Step `1 / 5` — Extract Site-Wide Components

**Goal:** Extract the `<header>` and `<footer>` blocks from `$APP/src/pages/index.astro` into site-wide components.

**Preparatory:**

- Read `$APP/src/pages/index.astro` — the current homepage markup (sections already applied).
- Read `$APP/src/components/` — note `Welcome.astro` is unused Astro starter boilerplate; do not touch or reuse it.

**Execution:**

- Create `$APP/src/components/site/SiteHeader.astro` — the `<header>` block (site title "Noodlestan").
- Create `$APP/src/components/site/SiteFooter.astro` — the `<footer>` block (`ul > li > a` links: GitHub, Discord, Contact; copyright line).
- Update `$APP/src/pages/index.astro` to import and render `<SiteHeader />` and `<SiteFooter />` in place of the inline `<header>` and `<footer>`.

**Expected outcome:** `index.astro` renders the same header and footer markup via components.

**Verification:** Run `npm run lint` and `npm run build` from the `$APP` package directory.

### Step `2 / 5` — Extract Page Content Components

**Goal:** Extract the five content sections from `$APP/src/pages/index.astro` into page-specific components.

**Execution:**

- Create `$APP/src/components/pages/home/Hero.astro` — the `section#hero` block.
- Create `$APP/src/components/pages/home/Projects.astro` — the `section#projects` block, including the projects collection loop. Move the `getCollection("projects")` fetch into this component's frontmatter (or pass `projects` as a prop from `index.astro` if that keeps the component simpler).
- Create `$APP/src/components/pages/home/Workflows.astro` — the `section#workflows` block (including the "Artificial Work" subsection).
- Create `$APP/src/components/pages/home/Contributing.astro` — the `section#contributing` block (including the `nav` with Discord/GitHub/Contact links).
- Create `$APP/src/components/pages/home/About.astro` — the `section#about` block.
- Update `$APP/src/pages/index.astro` to import and render the five components in order: `Hero`, `Projects`, `Workflows`, `Contributing`, `About`.

**Expected outcome:** `index.astro` renders the same sections via components, in the same order.

**Verification:** Run `npm run lint` and `npm run build` from the `$APP` package directory.

---

#### Commit: `extract-components`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(noodlestan-web): Extract site and home page components.

- Extract SiteHeader and SiteFooter into src/components/site/.
- Extract Hero, Projects, Workflows, Contributing, About into src/components/pages/home/.
```

### Step `4 / 5` — Centralize Endpoints in `consts.ts`

**Goal:** Centralize site endpoints per ADR `$APP/architecture/adr/endpoints.md` and set `site` in the Astro config.

**Preparatory:**

- Read `$APP/architecture/adr/endpoints.md` — endpoints are static build-time data exposed via a plain TS module (`src/consts.ts`); Astro config consumes the same source for `site` only.

**Execution:**

- Create `$APP/src/consts.ts` — a plain TypeScript module exporting the site endpoints:
  - `SITE_URL` — `https://noodlestan.org`
  - `GITHUB_URL` — `https://github.com/noodlestan`
  - `DISCORD_URL` — `https://discord.gg/4MBbPK7sU`
  - `CONTACT_EMAIL` — `hello@noodlestan.org`
  - `CONTACT_URL` — `mailto:hello@noodlestan.org`
- Replace hardcoded URLs in the extracted components (`SiteFooter`, `Contributing`, and any others) with imports from `$APP/src/consts.ts`.
- Update `$APP/astro.config.mjs` to set `site` from the same source: import `SITE_URL` from `./src/consts` and pass it to `defineConfig({ site: SITE_URL })`.

**Note:** Per ADR, `src/consts.ts` is the short-term source; long-term it will re-export from a generated module (`src/generated/endpoints.ts`). Do not create the generated module now.

**Expected outcome:** No hardcoded site URLs remain in `$APP/src` components; `site` is set in `astro.config.mjs` from the consts source.

**Verification:** Run `npm run lint` and `npm run build` from the `$APP` package directory.

---

#### Commit: `urls-as-variables`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(noodlestan-web): Centralize site endpoints in consts.ts.

- Add src/consts.ts with Discord, GitHub, Contact, and site URL endpoints.
- Replace hardcoded URLs in components with consts imports.
- Set site in astro.config.mjs from the same endpoint source.
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that `$APP/src/pages/index.astro` renders the same sections as before extraction, now via components.
- Verify that no hardcoded site URLs remain in `$APP/src` components (all imported from `src/consts.ts`).
- Verify that `site` is set in `$APP/astro.config.mjs` from the consts source.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
