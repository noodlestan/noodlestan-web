# Instructions: `copy-project-records`

**Plan:** `publish-project-list`

**Iteration Id:** `copy-project-records`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/copy-project-records__report.md`. No separate delegation record is created.
4. Generate the response and send it back to the delegator.
5. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `copy-project-records`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable          | Resolved Path                         | Purpose                            |
| ----------------- | ------------------------------------- | ---------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory           |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout |
| `$RECORDS`        | `$WORKSPACE/_records/repositories`    | Workspace-level repository records |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `copy-project-records`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Create a script that copies project.art files from workspace checkouts into the noodlestan-web `data/projects/` directory.

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

**Instructions:** (From `$NOODLESTAN_WEB/_guide.md`)

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint, test and build
```

Additionally, verify the script works:

```bash
npx tsx scripts/copy-project-records.tsx
```

Verify it completes without errors and populates `data/projects/` with `.art` files.

---

## Changes

This section summarises the changes to be made in this iteration.

- Step 1 / 5 — Install `simple-git` and `tsx` dev dependencies
- Step 2 / 5 — Create `data/projects/` directory
- Step 3 / 5 — Create `scripts/copy-project-records.tsx`
- Step 4 / 5 — Verify script works
- Step 5 / 5 — Commit `add-copy-records-script`

## Steps

### Step `1 / 5` — Install dev dependencies

Install `simple-git@^3.24.0` and `tsx@^4.8.1` as dev dependencies in the root `package.json` of `$NOODLESTAN_WEB`.

```bash
cd $NOODLESTAN_WEB && npm install --save-dev simple-git@^3.24.0 tsx@^4.8.1
```

### Step `2 / 5` — Create data directory

Create the `data/projects/` directory in `$NOODLESTAN_WEB`.

```bash
mkdir -p $NOODLESTAN_WEB/data/projects
```

### Step `3 / 5` — Create copy-project-records.tsx

Create `$NOODLESTAN_WEB/scripts/copy-project-records.tsx` with the following logic:

```typescript
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

type RepositoryRecord = {
  record: string;
  content: string;
  resource: {
    id: string;
    name: string;
    remote: string;
  };
};

const WORKSPACE = resolve(import.meta.dirname, '../../..');
const RECORDS_DIR = join(WORKSPACE, '_records/repositories');
const DATA_DIR = join(import.meta.dirname, '../data/projects');
const HOSTING_REPO = 'noodlestan-web';

function kebab(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

async function loadRepositoryRecords(): Promise<RepositoryRecord[]> {
  const { readdirSync } = await import('node:fs');
  const files = readdirSync(RECORDS_DIR).filter(f => f.endsWith('.art'));

  return files.map(file => {
    const content = readFileSync(join(RECORDS_DIR, file), 'utf-8');
    const nameMatch = content.match(/## Repository:\s*(.+)/);
    if (!nameMatch) throw new Error(`No H1 in ${file}`);
    const name = nameMatch[1].trim();
    const id = kebab(name);

    // Extract remote from content
    const remoteMatch = content.match(/\*\*Remote:\*\*\s*`([^`]+)`/);
    const remote = remoteMatch
      ? remoteMatch[1].replace('git@github.com:', '').replace('.git', '')
      : id;

    return {
      record: file,
      content,
      resource: { id, name, remote },
    };
  });
}

async function copyRepositoryProjectRecord(repo: RepositoryRecord): Promise<void> {
  const location = join(WORKSPACE, 'checkouts', repo.resource.id);
  const isHosting = repo.resource.id === HOSTING_REPO;

  // Clone if not exists
  if (!existsSync(location)) {
    console.log(`Cloning ${repo.resource.name}...`);
    execSync(`npm run workspace clone "${repo.resource.name}"`, {
      cwd: WORKSPACE,
      stdio: 'inherit',
    });
  }

  // Verify remote
  const gitConfig = readFileSync(join(location, '.git/config'), 'utf-8');
  const expectedRemote = `github.com:${repo.resource.remote}.git`;
  if (!gitConfig.includes(expectedRemote)) {
    throw new Error(`Remote mismatch in ${repo.resource.id}: expected ${expectedRemote}`);
  }

  if (isHosting) {
    // Hosting repo runs the script and may be on a feature branch during the plan;
    // skip branch check and pull, its project.art is already present locally.
    console.log(`Skipping branch check and pull for hosting repo: ${repo.resource.name}`);
  } else {
    // Verify branch
    const branch = execSync('git branch --show-current', {
      cwd: location,
      encoding: 'utf-8',
    }).trim();
    if (branch !== 'main') {
      throw new Error(`Branch mismatch in ${repo.resource.id}: expected main, got ${branch}`);
    }

    // Pull (skip if the checkout has uncommitted changes, e.g. leftover workspace state)
    const dirty = execSync('git status --porcelain', {
      cwd: location,
      encoding: 'utf-8',
    }).trim();
    if (dirty) {
      console.warn(`Skipping pull for ${repo.resource.id}: uncommitted changes present`);
    } else {
      execSync('git pull', { cwd: location, stdio: 'inherit' });
    }
  }

  // Copy project.art
  const projectRecord = join(location, '_records/project.art');
  if (!existsSync(projectRecord)) {
    console.warn(`No project.art in ${repo.resource.id}, skipping`);
    return;
  }

  mkdirSync(DATA_DIR, { recursive: true });
  const dest = join(DATA_DIR, `${repo.resource.id}.art`);
  writeFileSync(dest, readFileSync(projectRecord, 'utf-8'));
  console.log(`Copied project record: ${repo.resource.id}`);
}

async function main() {
  const repos = await loadRepositoryRecords();
  console.log(`Found ${repos.length} repository records`);

  for (const repo of repos) {
    await copyRepositoryProjectRecord(repo);
  }

  console.log('Done copying project records');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

Key design decisions:

- Uses `import.meta.dirname` to resolve paths relative to the script location (Node 22+).
- `WORKSPACE` is resolved as `../../` from the script location.
- Throws on any failure (remote mismatch, branch mismatch, missing files).
- Skips branch check and pull for the hosting repo (`noodlestan-web`), which runs the script and may be on a feature branch during the plan.
- Skips `git pull` for checkouts with uncommitted changes (warns instead of throwing), so leftover workspace state does not block the copy.
- Skips repos without `project.art` with a warning.

### Step `4 / 5` — Verify script works

Run the script to verify it works:

```bash
cd $NOODLESTAN_WEB && npx tsx scripts/copy-project-records.tsx
```

Verify:

- Script completes without errors.
- `data/projects/` contains `.art` files for each repository that has a `project.art`.

### Step `5 / 5` — Commit `add-copy-records-script`

Stage and commit the new script and dev dependencies.

**Repository:** `$NOODLESTAN_WEB`

**Policy:** AUTONOMOUS — Commit and proceed.

**Message:**

```
build(publish-project-list): add project records copy script

- Install simple-git and tsx dev dependencies.
- Create copy-project-records script to clone repos and copy project.art files.
```

---

## Final Verification

**Instructions:**

- Verify that the script runs without errors.
- Verify that `data/projects/` contains `.art` files.
- Verify that commits have been executed and pushed according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
