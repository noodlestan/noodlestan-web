# Pairing Notes: Apply Content to Homepage

**Iteration:** `apply-content-to-homepage`
**Mode:** `PAIRING`
**Date:** 2026-09-04

## Sources

- Content: `attachments/home-content.md`
- Structure: `specs/home.pseudo-html.md`
- Current page: `$APP/src/pages/index.astro`

## Decisions Log

_(empty — nothing decided yet)_

## Open Questions

1. **Component extraction** — Which sections become components? Decide after markup is in place.
2. **Component location** — Astro conventions: site-wide (e.g. footer) vs page-specific.
3. **URLs as variables** — Discord link, GitHub link. Where to store? Astro config? Env? Art-derived?
4. **Contact link** — `home-content.md` has a `[Contact]` placeholder with no URL.

## Parking Lot

_(empty)_

---

## Step 1: Markup — Apply content to `index.astro`

**Goal:** Put all sections from `home-content.md` into `index.astro` matching the structure in `home.pseudo-html.md`. No component extraction yet. No CSS. Keep the existing project list between the "Projects" prose and "How it's built".

**Structure mapping:**

| Pseudo-HTML section | Content source (`home-content.md`) | Notes |
|---|---|---|
| `header > h1` | Site title "Noodlestan" | Already in place |
| `section (hero)` | `## Hero` | Tagline + prose |
| `section (projects)` | `## Projects` | Prose paragraphs, then existing project list loop |
| `section (how-it's-built)` | `## How it's built` | 5 paragraphs |
| `section (contributing)` | `## Contributing` | Prose + nav with Discord/GitHub links + Contact link |
| `section (about)` | `## About` | 4 paragraphs |
| `footer` | `## Footer` | GitHub, Discord, copyright line |

**TBD before editing:**
- `[Contact]` link target — what URL?
- Discord URL: `https://discord.gg/4MBbPK7sU` (from content)
- GitHub URL: `https://github.com/noodlestan` (from content)
