# Sub-Agent REPORT (#producer)

**Plan:** `publish-project-list`

**Iteration Id:** `render-projects`

**Outcome:** `COMPLETED`

## Evidence

### Changes

Rendered the project list on the homepage from the Astro `projects` content collection.

#### Files changed

| File | Change |
| ---- | ------ |
| `apps/noodlestan-web/src/pages/index.astro` | Replaced static homepage with project listing. Now imports `getCollection("projects")`, conditionally shows a "No projects found." message when empty, and maps over projects rendering name, repository GitHub link (from `project.data.project.code`), website link, purpose, and description. |

## Blockers (if any)

None.

## Feedback

None requested.
