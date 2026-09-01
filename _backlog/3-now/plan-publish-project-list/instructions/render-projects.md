# Instructions: `render-projects`

**Plan:** `publish-project-list`

**Iteration Id:** `render-projects`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/render-projects__report.md`.
4. Generate the response and send it back to the delegator.
5. Keep the response terse: happy face + up to 3 bullet points.

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory                             |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application                                |

## Working Agreements

1. **This instructions file is self-contained.**
2. **Your report is mandatory.**
3. **User interaction is minimal.**

## Goals

Update the homepage to display the project list from the Astro collection.

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

- Step 1 / 3 — Update `src/pages/index.astro`
- Step 2 / 3 — Verify build works
- Step 3 / 3 — Commit `render-projects-on-homepage`

## Steps

### Step `1 / 3` — Update homepage

Replace the content of `$APP/src/pages/index.astro` with:

```astro
---
import { getCollection } from "astro:content";

const projects = await getCollection("projects");
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Noodlestan</title>
	</head>
	<body>
		<h1>Noodlestan</h1>
		<p>Welcome to noodlestan.org</p>

		<h2>Projects</h2>

		{projects.length === 0 && <p>No projects found.</p>}

		{projects.map((project) => (
			<div>
				<h3>{project.data.name}</h3>
				<div>
					<p>
						Repository:{" "}
						<a href={project.data.code || `https://github.com/${project.data.repository.replace("Repository: ", "")}`}>
							GitHub
						</a>
					</p>
					{project.data.website && (
						<p>
							Website:{" "}
							<a href={project.data.website}>{project.data.website}</a>
						</p>
					)}
				</div>
				{project.data.purpose && <p>{project.data.purpose}</p>}
				{project.data.description && <p>{project.data.description}</p>}
			</div>
		))}
	</body>
</html>
```

Key design decisions:
- Uses `getCollection("projects")` — the canonical Astro Content Layer API.
- No CSS — plain HTML only.
- Uses `project.data.name`, `project.data.code`, `project.data.website`, etc. (ProjectRecord fields).
- `project.data.code` used for the GitHub link URL; falls back to constructing from repository name.
- `project.data.website` used for the website link.

### Step `2 / 3` — Verify build works

Run from the `$APP` directory:

```bash
cd $APP && npm run build
```

Verify:
- Build completes without errors.
- The built HTML contains the project list.

### Step `3 / 3` — Commit `render-projects-on-homepage`

Stage and commit the homepage update.

---

#### Commit: `render-projects-on-homepage`

**Repository:** `$NOODLESTAN_WEB`

**Policy:** AUTONOMOUS — Commit and proceed.

**Message:**

```
build(noodlestan-web): render project list on homepage

- Query projects collection and render project cards.
- Display name, repository, website, purpose, and description.
```

---

## Final Verification

**Instructions:**

- Verify that `src/pages/index.astro` imports `getCollection` and renders the project list.
- Verify build completes without errors.
- Verify that commits have been executed and pushed according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
