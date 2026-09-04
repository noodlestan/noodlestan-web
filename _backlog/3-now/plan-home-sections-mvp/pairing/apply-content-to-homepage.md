# Pairing Notes: Apply Content to Homepage

**Iteration:** `apply-content-to-homepage`
**Mode:** `PAIRING`
**Date:** 2026-09-04

## Sources

- Content: `attachments/home-content.md`
- Structure: `specs/home.pseudo-html.md` (authority)
- Current page: `$APP/src/pages/index.astro`

## Decisions Log

1. **Pseudo-HTML is structural authority** — markup follows `specs/home.pseudo-html.md` order and nesting.
2. **Contact link** — `mailto:hello@noodlestan.org` (resolved in content and pseudo).
3. **Section name** — "Work Flows" (was "How it's built").
4. **Footer links** — `ul > li > a` structure (GitHub, Discord, Contact).

## Open Questions

1. **Component extraction** — Which sections become components? Decide after markup is in place.
2. **Component location** — Astro conventions: site-wide (e.g. footer) vs page-specific.
3. **URLs as variables** — Discord, GitHub, Contact. Where to store? Astro config? Env? Art-derived?

## Parking Lot

_(empty)_

---

## Step 1: Markup — Apply content to `index.astro` ✅

**Goal:** Put all sections from `home-content.md` into `index.astro` matching `home.pseudo-html.md`. No component extraction yet. No CSS.

**Structure mapping:**

| Pseudo-HTML section      | Content source    | Notes                                                    |
| ------------------------ | ----------------- | -------------------------------------------------------- |
| `header > h1`            | "Noodlestan"      | Already in place                                         |
| `section (hero)`         | `## Hero`         | h2 tagline + p prose                                     |
| `section (projects)`     | `## Projects`     | h2 + 2 intro paragraphs, then existing project list loop |
| `section (workflows)`    | `## Work Flows`   | h2 + 5 paragraphs                                        |
| `section (contributing)` | `## Contributing` | h2 + prose + nav with Discord/GitHub/Contact links       |
| `section (about)`        | `## About`        | h2 + 4 paragraphs                                        |
| `footer`                 | `## Footer`       | ul > li > a links + copyright p                          |

**Done:** Applied markup to `index.astro`. Build passes.

---

## Step 2: Extract Components (planned)

**Goal:** Identify and extract components from the markup created in Step 1.

**Candidates to evaluate:**

- `SiteHeader` — header with site title (site-wide)
- `SiteFooter` — footer with links and copyright (site-wide)
- `HomeHero` — hero section (page-specific)
- `HomeProjects` — projects intro + list (page-specific)
- `ProjectCard` — projects section (projects)
- `HomeContent` — workflows, contributing, about all in same document

**Decision criteria:**

- Site-wide components go in `src/components/site`
- Page-specific components go in `src/components/home/`
- projects-specific components go in `src/components/project/`

**TBD:** Review markup from Step 1 together and decide which to extract.
