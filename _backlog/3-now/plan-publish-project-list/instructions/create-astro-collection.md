# Instructions: `create-astro-collection`

**Plan:** `publish-project-list`

**Iteration Id:** `create-astro-collection`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/create-astro-collection__report.md`.
4. Generate the response and send it back to the delegator.

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application                                |

## Goals

Create an Astro content collection that reads the JSON project data.

## Mandatory Reading

- Astro docs on content collections: https://docs.astro.build/guides/content-collections/

---

## Changes

- Step 1 / 2 — Create Astro collection config
- Step 2 / 2 — Commit `add-astro-project-collection`

## Steps

### Step `1 / 2` — Create collection config

Create `$APP/src/content/config.ts` with the following content:

```typescript
import { defineCollection, z } from "astro:content";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    purpose: z.string(),
    description: z.string(),
    url: z.string().nullable(),
    repository: z.string(),
    owner: z.string(),
    resources: z.array(z.string()),
  }),
});

// Load from JSON file at build time
function loadProjects() {
  const jsonPath = join(
    import.meta.dirname,
    "../../../data/projects/collection.json"
  );
  try {
    const data = readFileSync(jsonPath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export const collections = {
  projects: projectsCollection,
};

// Helper for pages to load projects
export function getProjects() {
  return loadProjects();
}
```

Key design decisions:
- Uses `type: "data"` for JSON-based collection.
- Schema validates the expected fields from `collection.json`.
- `getProjects()` helper for pages to load data at build time.

### Step `2 / 2` — Commit

Stage and commit the collection config.

---

## Final Verification

**Instructions:**

- Verify that `src/content/config.ts` exists and exports `collections`.
- Verify that the schema matches the `collection.json` structure.
- Run `npm run build` to verify Astro can parse the collection.
- Report according to the "How to Report Back to the Delegator" instructions.
