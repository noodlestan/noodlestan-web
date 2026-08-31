# Instructions: `render-projects`

**Plan:** `publish-project-list`

**Iteration Id:** `render-projects`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-project-list/instructions/render-projects__report.md`.
4. Generate the response and send it back to the delegator.

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | Noodlestan Web repository checkout                   |
| `$APP`            | `$NOODLESTAN_WEB/apps/noodlestan-web` | The Astro application                                |

## Goals

Update the homepage to display the project list from the Astro collection.

## Mandatory Reading

- Astro docs on pages: https://docs.astro.build/guides/routing/
- Astro docs on content collections: https://docs.astro.build/guides/content-collections/

---

## Changes

- Step 1 / 2 — Update `src/pages/index.astro`
- Step 2 / 2 — Commit `render-projects-on-homepage`

## Steps

### Step `1 / 2` — Update homepage

Replace the content of `$APP/src/pages/index.astro` with:

```astro
---
import { getProjects } from "../content/config";

const projects = getProjects();
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Noodlestan</title>
		<style>
			body {
				font-family: system-ui, -apple-system, sans-serif;
				max-width: 800px;
				margin: 0 auto;
				padding: 2rem;
				line-height: 1.6;
			}
			h1 {
				border-bottom: 2px solid #333;
				padding-bottom: 0.5rem;
			}
			.project {
				margin-bottom: 2rem;
				padding: 1rem;
				border: 1px solid #ddd;
				border-radius: 8px;
			}
			.project h3 {
				margin: 0 0 0.5rem 0;
			}
			.project .meta {
				color: #666;
				font-size: 0.9rem;
				margin-bottom: 0.5rem;
			}
			.project .purpose {
				font-size: 1.1rem;
				font-weight: 500;
				margin-bottom: 0.25rem;
			}
			a {
				color: #0066cc;
			}
		</style>
	</head>
	<body>
		<h1>Noodlestan</h1>
		<p>Welcome to noodlestan.org</p>

		<h2>Projects</h2>

		{projects.length === 0 && <p>No projects found.</p>}

		{projects.map((project) => (
			<div class="project">
				<h3>{project.name}</h3>
				<div class="meta">
					<p>
						Repository:{" "}
						<a href={`https://github.com/${project.repository.replace("Repository: ", "")}`}>
							GitHub
						</a>
					</p>
					{project.url && (
						<p>
							Website:{" "}
							<a href={project.url}>{project.url}</a>
						</p>
					)}
				</div>
				{project.purpose && <p class="purpose">{project.purpose}</p>}
				{project.description && <p>{project.description}</p>}
			</div>
		))}
	</body>
</html>
```

Key design decisions:
- Uses `getProjects()` from the collection config helper.
- Renders each project with name, repository link, website link, purpose, and description.
- Strips `Repository: ` prefix from repository field for GitHub URL construction.
- Simple inline CSS for styling (can be extracted to a component later).

### Step `2 / 2` — Commit

Stage and commit the homepage update.

---

## Final Verification

**Instructions:**

- Verify that `src/pages/index.astro` imports `getProjects` and renders the project list.
- Run `npm run build` to verify the page builds without errors.
- Run `npm run dev` and visit `localhost:4321` to verify projects are displayed.
- Report according to the "How to Report Back to the Delegator" instructions.
