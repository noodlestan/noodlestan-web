# Instructions: `populate-project-fields`

**Plan:** `publish-project-list`

**Iteration Id:** `populate-project-fields`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/populate-project-fields__report.md`.
4. Generate the response and send it back to the delegator.

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory                             |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |
| `$MANAGEMENT`     | `$WORKSPACE/checkouts/management`     | Management repository checkout                       |
| `$ARTISANS`       | `$WORKSPACE/checkouts/artisans`       | Artisans repository checkout                         |
| `$OPS`            | `$WORKSPACE/checkouts/ops`            | Ops repository checkout                              |

## Goals

Populate the new `code`, `website`, and `management` fields in all project records across checkouts.

## Mandatory Reading

::READ `$DOMAINS/projects/structures/project.art` (Structure) — The project structure with new fields.

---

## Changes

- Step 1 / 9 — Populate Noodlestan Web project record
- Step 2 / 9 — Commit `populate-noodlestan-web-fields`
- Step 3 / 9 — Populate Management project record
- Step 4 / 9 — Commit `populate-management-fields`
- Step 5 / 9 — Populate Artisans project record
- Step 6 / 9 — Commit `populate-artisans-fields`
- Step 7 / 9 — Populate Ops project record
- Step 8 / 9 — Commit `populate-ops-fields`
- Step 9 / 9 — Verify all changes

## Steps

### Step `1 / 9` — Populate Noodlestan Web project record

Read `$NOODLESTAN_WEB/_records/project.art` and `$NOODLESTAN_WEB/_records/repository.art`.

Update the project record to add:

```md
**Code:** https://github.com/noodlestan/noodlestan-web

**Website:** https://noodlestan.org

**Management:**

Use Workflow: Planning Work and a local Backlog at `$NOODLESTAN_WEB/_backlog/`.
```

Place `**Code:**` and `**Website:**` after `**Repository:**`. Place `**Management:**` before `**License:**`.

Also refine:
- `**Purpose:**` — must describe what the project does, under 200 chars.
- `**Description:**` — must describe what the project consists of / how it works, under 200 chars.

### Step `2 / 9` — Commit `populate-noodlestan-web-fields`

Stage and commit the Noodlestan Web project record.

---

#### Commit: `populate-noodlestan-web-fields`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** MANUAL — Wait for user review before proceeding.

**Message:**

```
records(noodlestan-web): Populate new project fields

- Add code, website, and management fields to project record.
```

---

STOP — Wait for user review before proceeding.

### Step `3 / 9` — Populate Management project record

Read `$MANAGEMENT/_records/project.art` and `$MANAGEMENT/_records/repository.art`.

- Private: `true` — no website URL.
- Add `**Code:**` from repository remote: `https://github.com/noodlestan/_mgmt`
- Add `**Management:**` — describe how the project is managed (read `_guide.md` for clues about roadmaps and planning).
- Refine Purpose and Description to be under 200 chars each.

Place `**Code:**` after `**Repository:**`. Place `**Management:**` before `**License:**`.

### Step `4 / 9` — Commit `populate-management-fields`

Stage and commit the Management project record.

---

#### Commit: `populate-management-fields`

**Repository:** `$MANAGEMENT`

**Policy:** MANUAL — Wait for user review before proceeding.

**Message:**

```
records(management): Populate new project fields

- Add code and management fields to project record.
```

---

STOP — Wait for user review before proceeding.

### Step `5 / 9` — Populate Artisans project record

Read `$ARTISANS/_records/project.art` and `$ARTISANS/_records/repository.art`.

- Private: `false` — add website URL.
- Add `**Code:**` from repository remote: `https://github.com/noodlestan/artisans`
- Add `**Website:**` — determine from the app. Art-Mantras is at `https://art-mantras.noodlestan.org`.
- Add `**Management:**` — describe how the project is managed.
- Refine Purpose and Description to be under 200 chars each.

Place `**Code:**` and `**Website:**` after `**Repository:**`. Place `**Management:**` before `**License:**`.

### Step `6 / 9` — Commit `populate-artisans-fields`

Stage and commit the Artisans project record.

---

#### Commit: `populate-artisans-fields`

**Repository:** `$ARTISANS`

**Policy:** MANUAL — Wait for user review before proceeding.

**Message:**

```
records(artisans): Populate new project fields

- Add code, website, and management fields to project record.
```

---

STOP — Wait for user review before proceeding.

### Step `7 / 9` — Populate Ops project record

Read `$OPS/_records/project.art` and `$OPS/_records/repository.art`.

- Private: `true` — no website URL.
- Add `**Code:**` from repository remote: `https://github.com/noodlestan/_ops`
- Add `**Management:**` — describe how the project is managed (Terraform workflows, ops procedures).
- Refine Purpose and Description to be under 200 chars each.

Place `**Code:**` after `**Repository:**`. Place `**Management:**` before `**License:**`.

### Step `8 / 9` — Commit `populate-ops-fields`

Stage and commit the Ops project record.

---

#### Commit: `populate-ops-fields`

**Repository:** `$OPS`

**Policy:** MANUAL — Wait for user review before proceeding.

**Message:**

```
records(ops): Populate new project fields

- Add code and management fields to project record.
```

---

STOP — Wait for user review before proceeding.

### Step `9 / 9` — Verify all changes

Read all four updated project records and verify:
- `code` field exists and is a valid GitHub URL.
- `website` field exists for non-private projects.
- `management` field exists and describes the project's management approach.
- Purpose and Description are each under 200 chars.

---

## Final Verification

**Instructions:**

- Verify all four project records have the new fields.
- Verify commits have been staged (but NOT pushed — policy MANUAL).
- Report according to the "How to Report Back to the Delegator" instructions.
