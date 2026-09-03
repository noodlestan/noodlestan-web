# Instructions: `add-project-fields`

**Plan:** `publish-project-list`

**Iteration Id:** `add-project-fields`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/add-project-fields__report.md`.
4. Generate the response and send it back to the delegator.

## Path Variables

| Variable     | Resolved Path                | Purpose                    |
| ------------ | ---------------------------- | -------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory   |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Domain resources directory |

## Goals

Add `code`, `website`, and `management` fields to the Project structure definition.

## Mandatory Reading

::READ `$DOMAINS/projects/structures/project.art` (Structure) — The project structure to modify.

---

## Changes

- Step 1 / 2 — Update project structure with new fields
- Step 2 / 2 — Commit `add-project-fields`

## Steps

### Step `1 / 2` — Update project structure

Read `$DOMAINS/projects/structures/project.art` and add the following fields to the `**Shape:**` section:

After the `repository` field, add:

- `code` — URL. Public repository URL. Example: "https://github.com/noodlestan/art-js".
- `website` — URL. Project public website. Example: "https://art-js.noodlestan.org".

Before the `license` field, add:

- `management` — NaturalBlock. How the project is managed. Example: "Use Workflow: Planning Work and a local Backlog".

Also update the example in the structure to include the new fields.

### Step `2 / 2` — Commit

Stage and commit the structure change to the workspace repo.

---

## Final Verification

**Instructions:**

- Verify that the structure file has the new fields in the correct positions.
- Verify that the example includes the new fields.
- Report according to the "How to Report Back to the Delegator" instructions.
