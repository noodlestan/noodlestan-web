# Module: Endpoints

**Purpose:** Decisions about how site endpoints (Discord invite, GitHub org, Contact, site URL) are sourced, generated, and exposed to Astro and SolidJS consumers.

**Dependency Direction:**

```
Art records
    ↓ generate
src/generated/endpoints.ts
    ↓
src/consts.ts
    ↓
Astro + Solid consumers

src/generated/endpoints.ts
    ↓
astro.config.mjs
    ↓
Astro.site
```

## Decision: Endpoints as Static Build-Time Data

**Status:** Adopted

**Context:** The homepage hardcodes URLs (Discord invite, GitHub org, Contact `mailto:`, site URL). Endpoints are immutable site-wide values that never change at runtime; there is no per-user or per-session variation.

**Decision:** Endpoints are static build-time data. No runtime state, no context provider, and no store is introduced for them.

**Consequences:** Neither a Solid `EndpointsProvider` context nor Nano Stores adds anything; values are inlined at build time.

## Decision: Plain TypeScript Module as Consumer API

**Status:** Adopted

**Context:** Consumers of endpoints include Astro pages and layouts (frontmatter and template), Astro components, and SolidJS islands. Solid context providers cannot span island boundaries, and Astro-only configuration cannot hold arbitrary endpoints (only `site` is first-class).

**Decision:** Endpoints are exposed through a plain TypeScript module that both Astro and Solid consumers can import directly.

**Consequences:** The source must be ordinary TypeScript, not Astro-only configuration; this rules out Astro config as the endpoint source of truth.

## Decision: `src/consts.ts` as Short-Term Source

**Status:** Adopted

**Context:** The short-term source must be a plain module importable by both consumer types. Application code needs a stable import surface that does not change when the implementation changes.

**Decision:** Endpoints live in `src/consts.ts`. Components import from `src/consts.ts` regardless of whether its implementation is eventually hand-written or generated.

**Consequences:** `src/consts.ts` itself is never a generated artifact; it may re-export from a generated module.

## Decision: Art Records as Long-Term Source of Truth

**Status:** Adopted

**Context:** The long-run direction is Art records as the source of truth for site data. Generation must not overwrite hand-written constants.

**Decision:** Art records generate `src/generated/endpoints.ts`, consumed by `src/consts.ts` via re-export (`export * from './generated/endpoints'`).

**Consequences:** Requires a routine to convert Art records into the generated module; not yet implemented.

## Decision: Astro Config Consumes Generated Source for `site` Only

**Status:** Adopted

**Context:** Astro needs `site` for canonical URLs. The config is not the endpoint source of truth.

**Decision:** `astro.config.mjs` imports the generated module only for Astro-specific configuration such as `site`; endpoints remain sourced from `src/consts.ts`.

**Consequences:** Dependency direction is Art records → generated module → consts.ts → consumers, and generated module → astro.config.mjs → `Astro.site`.
