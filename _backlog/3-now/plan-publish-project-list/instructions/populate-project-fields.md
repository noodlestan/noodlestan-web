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

| Variable     | Resolved Path                | Purpose                    |
| ------------ | ---------------------------- | -------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory   |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Domain resources directory |
| `$CHECKOUTS` | `$WORKSPACE/checkouts`       | All repository checkouts   |

## Goals

Populate the new `code`, `website`, and `management` fields in all project records across all checkouts, and update each repository's `_guide.md` using the project-guide template.

## Mandatory Reading

::READ `$DOMAINS/projects/structures/project.art` (Structure) — The project structure with new fields.
::READ `$DOMAINS/noodlestan/routines/create-project-guide.art` (Routine) — How to generate project guides.
::READ `$DOMAINS/noodlestan/templates/project-guide.tart` (Template) — The project guide template.

---

## Changes

- Step 1 / 14 — Noodlestan Web
- Step 2 / 14 — Management
- Step 3 / 14 — Artisans
- Step 4 / 14 — Ops
- Step 5 / 14 — Art Domains
- Step 6 / 14 — Art JS
- Step 7 / 14 — Artificials
- Step 8 / 14 — Conventions
- Step 9 / 14 — Purrception
- Step 10 / 14 — Purrfect
- Step 11 / 14 — Purrpose
- Step 12 / 14 — Purrtrait
- Step 13 / 14 — Workspace Tooling
- Step 14 / 14 — Verify all changes

## Steps

Each repository step follows the same pattern:

1. `cd` into the checkout, `git pull`, `git checkout -b add-project-fields-and-update-guide`.
2. Read `_records/project.art` and `_records/repository.art`.
3. Update `project.art` with `code`, `website` (if not private), and `management` fields. Refine Purpose and Description to be under 200 chars each.
4. Execute the create-project-guide routine to update `_guide.md` (preserve important existing content, remove redundancy).
5. Commit with the repository-specific message below.
6. STOP — Wait for user review before proceeding to the next repository.

---

### Step `1 / 14` — Noodlestan Web

**Checkout:** `$CHECKOUTS/noodlestan-web`

```bash
cd $CHECKOUTS/noodlestan-web && git pull && git checkout -b add-project-fields-and-update-guide
```

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- `**Code:** https://github.com/noodlestan/noodlestan-web`
- `**Website:** https://noodlestan.org`
- `**Management:** Use Workflow: Planning Work and a local Backlog at `\_backlog/`.`

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-noodlestan-web-fields`

**Repository:** `$CHECKOUTS/noodlestan-web`

**Policy:** AUTONOMOUS

**Message:**

```
records(noodlestan-web): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `2 / 14` — Management

**Checkout:** `$CHECKOUTS/management`

```bash
cd $CHECKOUTS/management && git pull && git checkout -b add-project-fields-and-update-guide
```

Update `_records/project.art`, placing "code" after `**Repository:**`, and "managemet" before `**License:**`.

- `**Code:** https://github.com/noodlestan/_mgmt`
- `**Management:**` — describe how the project is managed (read `_guide.md` for clues about roadmaps and planning).

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-management-fields`

**Repository:** `$CHECKOUTS/management`

**Policy:** AUTONOMOUS

**Message:**

```
records(management): Populate new project fields and update guide

- Add code and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `3 / 14` — Artisans

**Checkout:** `$CHECKOUTS/artisans`

```bash
cd $CHECKOUTS/artisans && git pull && git checkout -b add-project-fields-and-update-guide
```

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`

- `**Code:** https://github.com/noodlestan/artisans`
- `**Website:** https://art-mantras.noodlestan.org`
- `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-artisans-fields`

**Repository:** `$CHECKOUTS/artisans`

**Policy:** AUTONOMOUS

**Message:**

```
records(artisans): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `4 / 14` — Ops

**Checkout:** `$CHECKOUTS/ops`

```bash
cd $CHECKOUTS/ops && git pull && git checkout -b add-project-fields-and-update-guide
```

Update `_records/project.art`, placing "code" after `**Repository:**`, and "managemet" before `**License:**`.

- `**Code:** https://github.com/noodlestan/_ops`
- `**Management:**` — describe how the project is managed (Terraform workflows, ops procedures).

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-ops-fields`

**Repository:** `$CHECKOUTS/ops`

**Policy:** AUTONOMOUS

**Message:**

```
records(ops): Populate new project fields and update guide

- Add code and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `5 / 14` — Art Domains

**Checkout:** `$CHECKOUTS/art-domains`

```bash
cd $CHECKOUTS/art-domains && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for URL.

Update `_records/project.art` placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-art-domains-fields`

**Repository:** `$CHECKOUTS/art-domains`

**Policy:** AUTONOMOUS

**Message:**

```
records(art-domains): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `6 / 14` — Art JS

**Checkout:** `$CHECKOUTS/art-js`

```bash
cd $CHECKOUTS/art-js && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-art-js-fields`

**Repository:** `$CHECKOUTS/art-js`

**Policy:** AUTONOMOUS

**Message:**

```
records(art-js): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `7 / 14` — Artificials

**Checkout:** `$CHECKOUTS/artificials`

```bash
cd $CHECKOUTS/artificials && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-artificials-fields`

**Repository:** `$CHECKOUTS/artificials`

**Policy:** AUTONOMOUS

**Message:**

```
records(artificials): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `8 / 14` — Conventions

**Checkout:** `$CHECKOUTS/conventions`

```bash
cd $CHECKOUTS/conventions && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-conventions-fields`

**Repository:** `$CHECKOUTS/conventions`

**Policy:** AUTONOMOUS

**Message:**

```
records(conventions): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `9 / 14` — Purrception

**Checkout:** `$CHECKOUTS/purrception`

```bash
cd $CHECKOUTS/purrception && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-purrception-fields`

**Repository:** `$CHECKOUTS/purrception`

**Policy:** AUTONOMOUS

**Message:**

```
records(purrception): Populate new project fields and update guide

- Add code, website,, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `10 / 14` — Purrfect

**Checkout:** `$CHECKOUTS/purrfect`

```bash
cd $CHECKOUTS/purrfect && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-purrfect-fields`

**Repository:** `$CHECKOUTS/purrfect`

**Policy:** AUTONOMOUS

**Message:**

```
records(purrfect): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `11 / 14` — Purrpose

**Checkout:** `$CHECKOUTS/purrpose`

```bash
cd $CHECKOUTS/purrpose && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-purrpose-fields`

**Repository:** `$CHECKOUTS/purrpose`

**Policy:** AUTONOMOUS

**Message:**

```
records(purrpose): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `12 / 14` — Purrtrait

**Checkout:** `$CHECKOUTS/purrtrait`

```bash
cd $CHECKOUTS/purrtrait && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-purrtrait-fields`

**Repository:** `$CHECKOUTS/purrtrait`

**Policy:** AUTONOMOUS

**Message:**

```
records(purrtrait): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `13 / 14` — Workspace Tooling

**Checkout:** `$CHECKOUTS/workspace-tooling`

```bash
cd $CHECKOUTS/workspace-tooling && git pull && git checkout -b add-project-fields-and-update-guide
```

Read `_records/repository.art` for remote URL.

Update `_records/project.art`, placing "code" and "website" after `**Repository:**`, and "managemet" before `**License:**`.

- Add `**Code:**` from repository remote.
- Add `**Website:**` if not private (subdomain of noodlestan.org).
- Add `**Management:**` — describe how the project is managed.

Execute routine `$DOMAINS/noodlestan/routines/create-project-guide.art` to update `_guide.md`.

---

#### Commit: `populate-workspace-tooling-fields`

**Repository:** `$CHECKOUTS/workspace-tooling`

**Policy:** AUTONOMOUS

**Message:**

```
records(workspace-tooling): Populate new project fields and update guide

- Add code, website, and management fields to project record.
- Update _guide.md using project-guide template.
```

---

STOP — Wait for user review before proceeding.

### Step `14 / 14` — Verify all changes

For each of the 13 repositories, verify:

- Branch `add-project-fields-and-update-guide` exists and is checked out.
- `_records/project.art` has `code`, `website` (if not private), and `management` fields.
- `_guide.md` has been updated using the project-guide template.
- Purpose and Description are each under 200 chars.

---

## Final Verification

**Instructions:**

- Verify all 13 project records have the new fields.
- Verify all 13 guides have been updated.
- Verify commits have been staged on branches (but NOT pushed — policy MANUAL).
- Report according to the "How to Report Back to the Delegator" instructions.
