# Instructions: `create-collection`

**Plan:** `publish-project-list`

**Iteration Id:** `create-collection`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/create-collection__report.md`.
4. Generate the response and send it back to the delegator.
5. Keep the response terse: happy face + up to 3 bullet points.

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory                             |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |

## Working Agreements

1. **This instructions file is self-contained.**
2. **Your report is mandatory.**
3. **User interaction is minimal.**

## Goals

Create a script that builds a JSON collection from copied project records, filtering out private projects.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification.

---

## Operating Instructions

### Setting Up

**Purpose:** Prepare the execution environment.

**Instructions:** (From `$WORKSPACE/_guide.md`)

```bash
cd $NOODLESTAN_WEB && npm install
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed.

**Instructions:**

```bash
cd $NOODLESTAN_WEB && npx tsx scripts/create-collection.tsx
```

Verify it completes without errors and creates `data/projects/collection.json`.

---

## Changes

- Step 1 / 2 — Create `scripts/create-collection.tsx`
- Step 2 / 2 — Commit `add-create-collection-script`

## Steps

### Step `1 / 2` — Create create-collection.tsx

Create `$NOODLESTAN_WEB/scripts/create-collection.tsx` with the following logic:

```typescript
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

type ProjectRecord = {
  record: string;
  content: string;
  resource: {
    name: string;
    purpose: string;
    description: string;
    private: boolean;
    url: string | null;
    repository: string;
    owner: string;
    resources: string[];
  };
};

const DATA_DIR = join(import.meta.dirname, "../data/projects");

function extractField(content: string, field: string): string | null {
  // Match **Field:** `value` or **Field:** value
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*\`([^\`]+)\``, "m"),
    new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*(.+)`, "m"),
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) return match[1].trim();
  }
  return null;
}

function extractBoolean(content: string, field: string): boolean {
  const value = extractField(content, field);
  return value?.toLowerCase() === "true";
}

function extractResources(
  content: string,
  field: string
): string[] {
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\*\\*${escapedField}:\\*\\*([\\s\\S]*?)(?=\\n\\*\\*|\\n##|$)`, "m");
  const match = content.match(pattern);
  if (!match) return [];

  const block = match[1];
  const items: string[] = [];
  const lines = block.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("-") || trimmed.startsWith("•")) {
      const item = trimmed.replace(/^[-•]\s*/, "").trim();
      if (item) items.push(item);
    }
  }
  return items;
}

async function loadProjectRecords(dir: string): Promise<ProjectRecord[]> {
  const files = readdirSync(dir).filter((f) => f.endsWith(".art"));

  return files.map((file) => {
    const content = readFileSync(join(dir, file), "utf-8");

    const nameMatch = content.match(/## Project:\s*(.+)/);
    const name = nameMatch ? nameMatch[1].trim() : file.replace(".art", "");

    const purpose = extractField(content, "Purpose") || "";
    const description = extractField(content, "Description") || "";
    const private_ = extractBoolean(content, "Private");
    const url = extractField(content, "URL");

    // Repository: prefix if missing
    let repository = extractField(content, "Repository") || "";
    if (repository && !repository.startsWith("Repository: ")) {
      repository = `Repository: ${repository}`;
    }

    // Owner: prefix if missing
    let owner = extractField(content, "Owner") || "";
    if (owner && !owner.startsWith("Project: ")) {
      owner = `Project: ${owner}`;
    }

    // Resources: filter to project names only
    const allResources = extractResources(content, "Resources");
    const resources = allResources.filter(
      (r) => r.startsWith("Project: ") || r.startsWith("Repository: ")
    );

    return {
      record: file,
      content,
      resource: {
        name,
        purpose,
        description,
        private: private_,
        url,
        repository,
        owner,
        resources,
      },
    };
  });
}

async function saveProjectJson(projects: ProjectRecord[]): Promise<void> {
  const resources = projects
    .filter((p) => !p.resource.private)
    .map((p) => p.resource);

  mkdirSync(DATA_DIR, { recursive: true });
  const outPath = join(DATA_DIR, "collection.json");
  writeFileSync(outPath, JSON.stringify(resources, null, 2));
  console.log(`Saved ${resources.length} projects to collection.json`);
}

async function main() {
  const projects = await loadProjectRecords(DATA_DIR);
  console.log(`Loaded ${projects.length} project records`);
  await saveProjectJson(projects);
  console.log("Done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Key design decisions:
- Extracts fields via regex from `.art` file format.
- Adds `Repository:` and `Project:` prefixes when missing.
- Filters out private projects from the JSON output.
- Saves a flat array of resources to `collection.json`.

### Step `2 / 2` — Commit

Stage and commit the new script.

---

## Final Verification

**Instructions:**

- Verify that the script runs without errors: `cd $NOODLESTAN_WEB && npx tsx scripts/create-collection.tsx`
- Verify that `data/projects/collection.json` exists and contains a JSON array.
- Verify that the JSON contains expected fields: `name`, `purpose`, `description`, `repository`, `owner`, `resources`.
- Verify that private projects are excluded.
- Report according to the "How to Report Back to the Delegator" instructions.
