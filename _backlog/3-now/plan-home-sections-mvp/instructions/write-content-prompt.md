# Instructions: `write-content-prompt`

**Plan:** `home-sections-mvp`

**Iteration Id:** `write-content-prompt`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-home-sections-mvp/instructions/write-content-prompt__report.md`.
4. Generate the response and send it back to the delegator.
5. Keep the response terse: happy face + up to 3 bullet points.

## Path Variables

| Variable          | Resolved Path                                           | Purpose                            |
| ----------------- | ------------------------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory                               | Workspace root directory           |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web`                   | Noodlestan Web repository checkout |
| `$MANAGEMENT`     | `$WORKSPACE/checkouts/management`                       | Management repository checkout     |
| `$PLAN`           | `$NOODLESTAN_WEB/_backlog/3-now/plan-home-sections-mvp` | This plan's directory              |

## Working Agreements

1. **This instructions file is self-contained.**
2. **Your report is mandatory.**
3. **User interaction is minimal.**

## Goals

Write a prompt file for an AI writing tool that produces an outline and copy for the noodlestan.org homepage sections.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting up, Verifying.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for Setting up, Verifying.

::READ `$MANAGEMENT/noodlestan-web/sites/noodlestan-org.md` (Brief) — Early content outline for noodlestan.org (hero line, contributing, about, mentoring, consulting). Source of tone and intent.

::READ `$WORKSPACE/_records/repositories/*.art` (Records) — The 14 Noodlestan repositories with their purposes. Source of the ecosystem overview.

---

## Operating Instructions

### Setting Up

Run from the `$NOODLESTAN_WEB` root:

```bash
npm ci # to install dependencies.
```

### Verifying Step

Run from the `$NOODLESTAN_WEB` root:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues
```

### Verifying Completion

Run from the `$NOODLESTAN_WEB` root:

```bash
npx prettier -c _backlog/3-now/plan-home-sections-mvp/home-content-prompt.md # to report formatting issues
```

No build is required — this iteration produces a markdown document only.

---

## Changes

- Step 1 / 3 — Write `$PLAN/home-content-prompt.md`
- Step 2 / 3 — Verify the prompt is complete
- Step 3 / 3 — Commit `add-home-content-prompt`

## Steps

### Step `1 / 3` — Write the prompt file

Create `$PLAN/home-content-prompt.md` with the content below. Where the content says `{DISCORD_INVITE_URL}`, keep the placeholder verbatim — the crew will supply the link.

Before writing, read the 14 repository records and verify the purposes listed in the "Ecosystem" section below still match. Correct any drift.

```markdown
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
```

### Step `2 / 3` — Verify the prompt

Check:

- File exists at `$PLAN/home-content-prompt.md`.
- All six requested sections are present under "What to write".
- The 14 repository purposes match the current records in `$WORKSPACE/_records/repositories/`.
- `{DISCORD_INVITE_URL}` appears as a literal placeholder.
- `npx prettier -c` passes on the file.

### Step `3 / 3` — Commit `add-home-content-prompt`

Stage and commit the prompt file.

---

#### Commit: `add-home-content-prompt`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** AUTONOMOUS — Commit and proceed.

**Message:**

```
docs(noodlestan-web): add homepage content prompt

- Add AI writing prompt for noodlestan.org homepage sections.
- Cover ecosystem overview, how we work, AI usage statement, contributor call.
```

---

## Final Verification

**Instructions:**

- Verify that `$PLAN/home-content-prompt.md` exists and contains the six sections.
- Verify that the commit has been executed and pushed according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
