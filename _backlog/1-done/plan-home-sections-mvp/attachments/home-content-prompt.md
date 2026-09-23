# Prompt: noodlestan.org Homepage Content

You are a copywriter for a ~small open-source software collective~. lonely developer seeing friends. Write the outline and copy for the homepage of **noodlestan.org**. Plain, warm, direct language. No marketing fluff, no buzzwords, no exclamation marks. Short paragraphs. Write for developers and designers who might want to use our tools or join us.

## Projecs

Noodlestan

Welcome to noodlestan.org
Projects
Art Domains

Repository: GitHub

Extends agentic working environments with structured instructions projected from stable sources of truth.

Distributable artificial resources within knowledge and work domains: structures, templates, processes, agent instructions, modes, and skills.
Art JS

Repository: GitHub

Art MD implemented in JS: parse, validate, transform, and serialize back to Art MD or Markdown.

Libraries for parsing and working with Art MD content, resources, modules, programs, and projections.
Artificials

Repository: GitHub

Generate and manage (Art)ificial Driven Development environments.

A collection of tools and resources to generate and manage knowledge artefacts and agent instructions.
Artisans

Repository: GitHub

Website: https://art-mantras.noodlestan.org

Have fun with artificials.

Creative and experimental micro projects developed entirely using Artificials.
No Comply

Repository: GitHub

Context-aware UI system built with SolidJS and modern CSS.

SolidJS layered library ecosystem spanning foundational types, accessibility primitives, contexts and services, composable controllers, a themeable component library, and developer tooling.
Noodlestan Conventions

Repository: GitHub

Distributable Noodlestan conventions written in Art.

Conventions packages for Noodlestan stack, including Typescript, JSX, Solid JS, and SCSS.
Noodlestan Web

Repository: GitHub

Website: https://noodlestan.org

Noodlestan says Hello World.

Repository of Noodlestan websites — typically built with Astro.
Purrception

Repository: GitHub

Extract and compose metadata from source code and artefacts.

Collection of abstractions and tools for building metadata extraction pipelines from local and remote sources using heuristics, schemas, and factories.
Purrfect

Repository: GitHub

Extract, compose, and expose metadata to support the discovery, interpretation, and operation of artefacts.

Collection of composable tools and abstractions for building metadata extraction pipelines, aggregations, indexes, visualizations, and metadata endpoints.
Purrpose

Repository: GitHub

In browser source code and metadata transformations.

Single-purpose utilities for in-browser transformations: JSX/TSX compilation, SolidJS JSX transform presets, and Shiki-based syntax highlighting.
Purrtrait

Repository: GitHub

Transform, render and visualize metadata about source code and artefacts.

Collection of tools for rendering code, visualizing metadata, and creating representations for humans and tools.

## Who we are

~Noodlestan is an open collective — friends, family, and neighbours — writing software because we love it.~ We build tools for developers: parsers, code renderers, documentation tooling, component libraries, and the infrastructure and conventions to hold it all together. Everything is public on GitHub under the MIT license.

Our tagline candidate: "Writing software because. Just because."

##

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
