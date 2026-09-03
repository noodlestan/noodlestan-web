# Instructions: `create-astro-collection`

**Plan:** `publish-project-list`

**Iteration Id:** `create-astro-collection`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/create-astro-collection__report.md`.
4. Generate the response and send it back to the delegator.
5. Keep the response terse: happy face + up to 3 bullet points.

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application              |

## Working Agreements

1. **This instructions file is self-contained.**
2. **Your report is mandatory.**
3. **User interaction is minimal.**

## Goals

Create an Astro content collection that reads the JSON project data using the Content Layer API.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting up, Verifying.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for Setting up, Verifying.

::READ `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md` (Guide) — Defines the Astro application operations. Relevant for Setting up, Verifying.

---

## Operating Instructions

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

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$NOODLESTAN_WEB/apps/noodlestan-web/_guide.md`)

Run from this package directory:

```bash
npm run lint # to report formatting issues
npm run build # to produce a full build
```

---

## Changes

- Step 1 / 3 — Create Astro content config with file() loader
- Step 2 / 3 — Verify build works
- Step 3 / 3 — Commit `add-astro-project-collection`

## Steps

### Step `1 / 3` — Create content config

Create `$APP/src/content.config.ts` with the following content:

```typescript
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: file('../../data/projects/collection.json'),
  schema: z.object({
    id: z.string(),
    project: z.object({
      name: z.string(),
      purpose: z.string(),
      description: z.string(),
      website: z.string().nullable(),
      code: z.string().nullable(),
      repository: z.string(),
      owner: z.string(),
      resources: z.array(z.string()),
      private: z.boolean(),
    }),
  }),
});

export const collections = {
  projects,
};
```

Key design decisions:

- Uses `src/content.config.ts` (not `src/content/config.ts`) for Astro's Content Layer API.
- Uses `file()` loader from `astro/loaders` — the canonical Astro approach.
- Schema reflects `collection.json` items: `id` + nested `project` object with `name`, `purpose`, `description`, `website`, `code`, `repository`, `owner`, `resources`, `private`.
- `file()` path resolves relative to `config.root` (the Astro app dir `apps/noodlestan-web/`): `../../data/projects/collection.json` reaches the repo root `data/projects/`. (NOT `../../../` — that would escape the repo into `checkouts/data/`.)

### Step `2 / 3` — Verify build works

Run from the `$APP` directory:

```bash
cd $APP && npm run build
```

Verify:

- Build completes without errors.
- The `projects` collection is recognized by Astro.

### Step `3 / 3` — Commit `add-astro-project-collection`

Stage and commit the collection config.

---

#### Commit: `add-astro-project-collection`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** AUTONOMOUS — Commit and proceed.

**Message:**

```
build(noodlestan-web): add Astro project collection

- Define projects collection config using file() loader from astro/loaders.
- Schema validates ProjectRecord fields: id, name, website, code, etc.
```

---

## Final Verification

**Instructions:**

- Verify that `src/content.config.ts` exists and exports `collections`.
- Verify that the schema matches the `collection.json` structure.
- Verify build completes without errors.
- Verify that commits have been executed and pushed according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
