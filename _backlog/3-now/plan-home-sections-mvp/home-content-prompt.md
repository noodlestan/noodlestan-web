# Prompt: noodlestan.org Homepage Content

You are a copywriter for a small open-source software collective. Write the outline and copy for the homepage of **noodlestan.org**. Plain, warm, direct language. No marketing fluff, no buzzwords, no exclamation marks. Short paragraphs. Write for developers and designers who might want to use our tools or join us.

## Who we are

Noodlestan is an open collective — friends, family, and neighbours — writing software because we love it. We build tools for developers: parsers, code renderers, documentation tooling, component libraries, and the infrastructure and conventions to hold it all together. Everything is public on GitHub under the MIT license.

Our tagline candidate: "We are writing software because we love it."

## What we are building

The ecosystem is 14 repositories that fit together in layers:

**Foundations**

- **Art JS** — md-art-md parser/serializer pipeline and supporting packages. The `.art` format is structured markdown we use for records, structures, and knowledge.
- **Art Domains** — Domains source code, CLIs, and workspace tooling. Knowledge domains, workflows, routines, and templates that agents and humans share.
- **Conventions** — Reusable Noodlestan conventions as a standalone reference package.
- **Workspace Tooling** — Build, lint, and configuration tooling consumed by every project repository.

**Codebase introspection and documentation**

- **Purrception** — Layered entity extraction system for codebase introspection, metadata extraction, and documentation tooling.
- **Purrtrait** — Code rendering and layout system for TypeScript source.
- **Purrpose** — Single-purpose utilities for in-browser code compilation and documentation tooling.
- **Purrfect** — Manages the purr\* projects and hosts their web applications.

**UI and applications**

- **No Comply** — SolidJS component library, design system, and meta-extraction tooling.
- **Artisans** — Artisan applications built with Art JS.
- **Artificials** — Umbrella project for shared resources and websites.
- **Noodlestan Web** — This website.

**Operations**

- **Management** — Top-level roadmap, incubating project ideas, research and assets.
- **Ops** — AWS infrastructure as code (Terraform): Route53, ACM, S3, CloudFront.

## How we work

We work in the open, in small increments, with a written plan for everything.

- A **workspace** meta-repo coordinates work across all repositories; each repo builds standalone.
- Work flows from **roadmaps** to **milestones** to **plans** to **iterations**. Every plan is a markdown document with explicit scope, commits, and verification steps, kept in a per-repo `_backlog/` folder (`3-now/` while active, `1-done/` when finished).
- Every project carries **records** (`.art` files) describing what it is, who owns it, and where it lives. The project list on this very homepage is generated from those records.
- We pair with **AI agents** in defined roles — architect, planner, delegator, worker — each with written instructions, skills, and boundaries. Humans set direction, review, and approve; agents draft, execute, and report.
- Conventions are written down, versioned, and shared across repositories.

## What to write

Produce a homepage outline with these sections, in this order, each with a heading and copy:

1. **Hero** — one line, plus one or two sentences of support. Start from "We are writing software because we love it." and improve on it or offer two alternatives.
2. **What we build** — a short paragraph introducing the ecosystem, followed by the layered grouping above condensed to one line per layer. Do not list all 14 repositories here; the page renders the full project list separately right after this section.
3. **How we work** — three to five short paragraphs or a bulleted list, covering the workspace, roadmaps-to-iterations flow, records, and AI-agent collaboration.
4. **On AI** — a statement on how we use AI. Be honest and specific: we use AI agents extensively for planning, drafting, code, and documentation; every agent has a written role and operates within instructions; humans own direction, review, and merge decisions; we publish the agent instructions alongside the code; we treat this as an experiment we are learning from and expect to revise. Around 120 to 180 words.
5. **Join us** — a call for contributors. Who we are looking for: developers (TypeScript, SolidJS, Astro), designers (UX/UI, design systems), writers, and people curious about working alongside AI agents. Mention bug reports and ideas are welcome. End with two calls to action: join the Discord at `{DISCORD_INVITE_URL}` and browse the code on GitHub at https://github.com/noodlestan.
6. **Footer** — one line: Noodlestan Collective, MIT license, link to GitHub.

## Constraints

- Total copy under 700 words, excluding headings.
- No invented facts: do not add projects, people, dates, or numbers that are not in this prompt.
- Keep `{DISCORD_INVITE_URL}` as a literal placeholder.
- Output as markdown with `##` headings per section.
