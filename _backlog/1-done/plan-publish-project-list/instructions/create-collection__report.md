# Sub-Agent REPORT (#producer)

**Plan:** `publish-project-list`

**Iteration Id:** `create-collection`

**Outcome:** `COMPLETED`

## Evidence

### Changes

Created `scripts/create-collection.ts`, which builds a JSON collection from the copied project records in `data/_records/projects/` and writes it to `data/projects/collection.json`. The script kebabifies each project name into the item `id`, nests the extracted project fields under a `project` object, derives a `code` URL from the `Remote` field when `Code` is missing, and filters out private projects. The `update-project-collection` npm script was added and documented.

| Change                                           | Commit    |
| ------------------------------------------------ | --------- |
| Create-collection script + docs (this iteration) | `323351c` |

#### Files changed

- `scripts/create-collection.ts` — new script: reads `.art` files from `data/_records/projects/`, extracts `name`, `purpose`, `description`, `website`, `code`, `repository`, `owner`, `resources`, and `private`; kebabifies name to `id`; derives `code` from the appended `Remote` field when missing; filters out private projects; writes `data/projects/collection.json`.
- `package.json` — added `"update-project-collection": "tsx scripts/create-collection.ts"` after `update-project-records`.
- `README.md` — documented `npm run update-project-collection` under `## Scripts`.
- `_guide.md` — added "Operating Instructions: Updating Project Collection" section before "Verifying Completion".

## Blockers (if any)

None.

## Feedback

No feedback requested.
