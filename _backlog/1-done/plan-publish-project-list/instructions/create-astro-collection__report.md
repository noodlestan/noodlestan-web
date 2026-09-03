# Sub-Agent REPORT (#producer)

**Plan:** `publish-project-list`

**Iteration Id:** `create-astro-collection`

**Outcome:** `COMPLETED`

## Evidence

### Changes

Created `src/content.config.ts` using Astro's Content Layer API with a `projects` collection loaded via the `file()` loader from `astro/loaders`. The schema validates the `collection.json` items: `id` plus a nested `project` object with `name`, `purpose`, `description`, `website`, `code`, `repository`, `owner`, `resources`, and `private`. The `file()` path `../../data/projects/collection.json` resolves relative to the Astro app root to reach the repo `data/projects/` directory.

| Change                                        | Commit    |
| --------------------------------------------- | --------- |
| Add Astro project collection (this iteration) | `a8f568d` |

#### Files changed

- `apps/noodlestan-web/src/content.config.ts` — new Astro content config: `defineCollection` with `file("../../data/projects/collection.json")` loader and zod schema matching the `collection.json` structure; exports `collections = { projects }`.

## Blockers (if any)

None.

## Feedback

No feedback requested.
