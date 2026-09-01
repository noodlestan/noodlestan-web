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

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |

## Working Agreements

1. **This instructions file is self-contained.**
2. **Your report is mandatory.**
3. **User interaction is minimal.**

## Goals

Create a script that builds a JSON collection from copied project records, filtering out private projects.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting up, Verifying.

::READ `$NOODLESTAN_WEB/_guide.md` (Guide) — Defines the Noodlestan Web repository operations. Relevant for Setting up, Verifying.

---

## Operating Instructions

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/setting-up.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm ci # to install dependencies.
npm run workspace clone {repo.name} # to create a new checkout of a known repository.
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

Additionally, verify the collection script works:

```bash
cd $NOODLESTAN_WEB && npx tsx scripts/create-collection.ts
```

Verify it completes without errors and creates `data/projects/collection.json`.

---

## Changes

- Step 1 / 6 — Create `scripts/create-collection.ts`
- Step 2 / 6 — Add `update-project-collection` script to `package.json`
- Step 3 / 6 — Document `update-project-collection` in `README.md`
- Step 4 / 6 — Add "Updating Project Collection" section to `_guide.md`
- Step 5 / 6 — Verify script works
- Step 6 / 6 — Commit `add-create-collection-script`

## Steps

### Step `1 / 6` — Create create-collection.ts

Create `$NOODLESTAN_WEB/scripts/create-collection.ts` with the following logic:

```typescript
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

type ProjectRecord = {
  id: string;
  record: string;
  content: string;
  resource: {
    name: string;
    purpose: string;
    description: string;
    website: string | null;
    code: string | null;
    repository: string;
    owner: string;
    resources: string[];
    private: boolean;
  };
};

const RECORDS_DIR = join(import.meta.dirname, '../data/_records/projects');
const DATA_DIR = join(import.meta.dirname, '../data/projects');

function kebab(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function extractField(content: string, field: string): string | null {
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*\`([^\`]+)\``, 'm'),
    new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*(.+)`, 'm'),
  ];

  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) return match[1].trim();
  }
  return null;
}

function extractBoolean(content: string, field: string): boolean {
  const value = extractField(content, field);
  return value?.toLowerCase() === 'true';
}

function extractResources(content: string, field: string): string[] {
  const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\*\\*${escapedField}:\\*\\*([\\s\\S]*?)(?=\\n\\*\\*|\\n##|$)`, 'm');
  const match = content.match(pattern);
  if (!match) return [];

  const block = match[1];
  const items: string[] = [];
  const lines = block.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
      const item = trimmed.replace(/^[-•]\s*/, '').trim();
      if (item) items.push(item);
    }
  }
  return items;
}

async function loadProjectRecords(dir: string): Promise<ProjectRecord[]> {
  const { readdirSync } = await import('node:fs');
  const files = readdirSync(dir).filter(f => f.endsWith('.art'));

  return files.map(file => {
    const content = readFileSync(join(dir, file), 'utf-8');

    const nameMatch = content.match(/## Project:\s*(.+)/);
    if (!nameMatch) throw new Error(`No H1 in ${file}`);
    const name = nameMatch[1]?.trim();
    if (!name) {
      throw new Error(`Could not resolve name from file: ${file}`);
    }

    const id = kebab(name);
    const purpose = extractField(content, 'Purpose') || '';
    const description = extractField(content, 'Description') || '';
    const website = extractField(content, 'Website') || null;
    const code = extractField(content, 'Code') || null;
    const private_ = extractBoolean(content, 'Private');

    let repository = extractField(content, 'Repository') || '';
    if (repository && !repository.startsWith('Repository: ')) {
      repository = `Repository: ${repository}`;
    }

    let owner = extractField(content, 'Owner') || '';
    if (owner && !owner.startsWith('Project: ')) {
      owner = `Project: ${owner}`;
    }

    const allResources = extractResources(content, 'Resources');
    const resources = allResources.filter(
      r => r.startsWith('Project: ') || r.startsWith('Repository: '),
    );

    return {
      id,
      record: file,
      content,
      resource: {
        name,
        purpose,
        description,
        website,
        code,
        repository,
        owner,
        resources,
        private: private_,
      },
    };
  });
}

async function saveProjectJson(projects: ProjectRecord[]): Promise<void> {
  const items = projects
    .filter(p => !p.resource.private)
    .map(p => ({
      id: p.id,
      project: p.resource,
    }));

  mkdirSync(DATA_DIR, { recursive: true });
  const outPath = join(DATA_DIR, 'collection.json');
  writeFileSync(outPath, JSON.stringify(items, null, 2));
  console.log(`Saved ${items.length} projects to collection.json`);
}

async function main() {
  const projects = await loadProjectRecords(RECORDS_DIR);
  console.log(`Loaded ${projects.length} project records`);
  await saveProjectJson(projects);
  console.log('Done');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

Key design decisions:

- Reads `.art` files from `data/_records/projects/` (where `copy-project-records.ts` writes them).
- Writes `collection.json` to `data/projects/`.
- Uses filename (already kebabified by copy-project-records) as the `id`.
- Extracts `website` and `code` fields directly from project.art (no mapping).
- Filters out private projects from the JSON output.
- Each collection item has an `id` field and a nested `project` object (required by Astro's file() loader).
- Throws on missing H1 (consistent with `loadRepositoryRecords` in `copy-project-records.ts`).

### Step `2 / 6` — Add `update-project-collection` script to package.json

Add the following script to the `scripts` section of `$NOODLESTAN_WEB/package.json`:

```json
"update-project-collection": "tsx scripts/create-collection.ts",
```

Place it after the existing `"update-project-records"` entry.

### Step `3 / 6` — Document `update-project-collection` in README.md

Add the following line to the `## Scripts` section of `$NOODLESTAN_WEB/README.md`, after the existing `update-project-records` line:

```markdown
- **$** `npm run update-project-collection` — Generates `data/projects/collection.json` from `data/_records/projects`.
```

### Step `4 / 6` — Add "Updating Project Collection" section to \_guide.md

Add the following section to `$NOODLESTAN_WEB/_guide.md`, before the `### Operating Instructions: Verifying Completion` section:

````markdown
### Operating Instructions: Updating Project Collection

**Instructions:**

Run from the repository root (monorepo):

```bash
npm run update-project-collection
```
````

Generates `data/projects/collection.json` from the project.art files in `data/_records/projects/`.

````

### Step `5 / 6` — Verify script works

Run the script to verify it works:

```bash
cd $NOODLESTAN_WEB && npx tsx scripts/create-collection.ts
````

Verify:

- Script completes without errors.
- `data/projects/collection.json` contains a JSON array.
- Each item has `id` and a nested `project` object with `name`, `purpose`, `description`, `website`, `code`, `repository`, `owner`, `resources`, `private`.
- Private projects are excluded.

### Step `6 / 6` — Commit `add-create-collection-script`

Stage and commit the new script, package.json, README.md, and \_guide.md changes.

---

#### Commit: `add-create-collection-script`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** AUTONOMOUS — Commit and proceed.

**Message:**

```
build(noodlestan-web): add project collection builder

- Create create-collection script to build JSON from project records.
- Add update-project-collection npm script.
- Document update-project-collection in README and _guide.md.
```

---

## Final Verification

**Instructions:**

- Verify that the script runs without errors.
- Verify that `data/projects/collection.json` exists and contains a JSON array.
- Verify that the JSON contains expected fields: `id`, `name`, `purpose`, `description`, `website`, `code`, `repository`, `owner`, `resources`.
- Verify that private projects are excluded.
- Verify that commits have been executed and pushed according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
