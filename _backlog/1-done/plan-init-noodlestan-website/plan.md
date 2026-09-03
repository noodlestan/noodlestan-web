# Plan: Initialize Noodlestan Website

**Id:** `init-noodlestan-website`

**Status:** `DONE`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Say hello world on noodlestan.org and learn how to set up and deploy a static Astro website.

**Description:** New repository `noodlestan/web` with 1 app (Noodlestan Website), deployed to noodlestan.org. Scaffold repo, provision AWS infrastructure via Terraform, build and deploy a hello-world Astro site.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable          | Resolved Path                         | Purpose                                              |
| ----------------- | ------------------------------------- | ---------------------------------------------------- |
| `$WORKSPACE`      | Current working directory             | Workspace root directory                             |
| `$DOMAINS`        | `$WORKSPACE/.agents/domains`          | Domain resources directory                           |
| `$MANAGEMENT`     | `$WORKSPACE/checkouts/management`     | Management checkout — roadmap and coordination home  |
| `$OPS`            | `$WORKSPACE/checkouts/ops`            | Ops checkout — Terraform infrastructure              |
| `$NOODLESTAN_WEB` | `$WORKSPACE/checkouts/noodlestan-web` | New Noodlestan Web repository checkout               |
| `$ARTISANS`       | `$WORKSPACE/checkouts/artisans`       | Scaffolding reference — copy configs, records, files |

## Summary

Create a standalone `noodlestan/web` repository, provision AWS static website infrastructure via Terraform in the ops repo, and deploy a hello-world Astro site to noodlestan.org. This is the first production deployment in the split architecture.

## Attachments

None.

## Context

### Upstream Work

| Kind        | Path                                                            | Role                                                            |
| ----------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| Milestone   | `$MANAGEMENT/_roadmap/3-now/milestone-hello-world/milestone.md` | Coordinates this plan with other plans and milestones.          |
| Parking Lot | `$MANAGEMENT/_roadmap/_parking-lot.md`                          | Tracks short-term actionables, pending questions, and blockers. |

### Required Skills

- `write-plan` — Generates plans from sources and context. Required for Contextualizing, Drafting, Refining.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting, Refining.
- `scaffold` — Scaffolds project files from records and templates. Required for Setting up.

### Domains

| Domain / Path                                        | Description                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Domain: Deployments `$DOMAINS/deployments/index.md`  | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.               |

### Resource Kinds in Scope

| Kind        | Domain       | Structure Record Path                             |
| ----------- | ------------ | ------------------------------------------------- |
| Project     | Projects     | `$DOMAINS/projects/structures/project.art`        |
| Repository  | Repositories | `$DOMAINS/repositories/structures/repository.art` |
| Application | Applications | — WIP                                             |
| Deployment  | Deployments  | `$DOMAINS/deployments/structures/deployment.art`  |

### Workflows

| Workflow / Path                                                        | Purpose                                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Workflow: Planning `$DOMAINS/plans/workflows/planning.art`             | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying.art`     | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.               |

### Knowledge

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines plan record fields and statuses. Relevant for stages Contextualizing, Drafting, Refining.

::READ `$DOMAINS/plans/structures/iteration.art` (Structure) — Defines iteration as a container for changes and instructions. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/commits/types/commit.art` (Type) — Defines planned commit blueprints. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/repositories/structures/repository.art` (Structure) — Repository record shape. Relevant for stages Drafting, Setting up.

::READ `$DOMAINS/projects/structures/project.art` (Structure) — Project record shape. Relevant for stages Drafting, Setting up.

::READ `$DOMAINS/packages/structures/package.art` (Structure) — Package record shape. Relevant for stages Drafting, Setting up.

::READ `$DOMAINS/deployments/structures/deployment.art` (Structure) — Deployment record shape. Relevant for stages Drafting, Refining.

::READ `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for stages Setting up, Verifying, Committing.

::READ `$OPS/_guide.md` (Guide) — Defines the ops repository and Terraform workflow. Relevant for stages Setting up, Deploying.

::READ `$OPS/domains/noodlestan/main.tf` (Terraform) — Existing noodlestan.org infrastructure. Relevant for stages Setting up, Deploying.

::READ `$OPS/domains/noodlestan/websites/art-mantras/main.tf` (Terraform) — Reference pattern for static website deployment. Relevant for stages Setting up, Deploying.

## Scope

This plan creates a new repository (`noodlestan/web`), provisions AWS infrastructure in the ops repo, and deploys a hello-world Astro site.

### (Scope) Project: Noodlestan Web

**Record:** `$NOODLESTAN_WEB/_records/project.art`

**Role:** — New — manages the Noodlestan Website and any future noodlestan.org sites.

**Partial:**

- `owner` — Project Management
- `path` — `$NOODLESTAN_WEB/`
- `remote` — `git@github.com:noodlestan/web.git`

**Changes:**

- Create project record at `$NOODLESTAN_WEB/_records/project.art`.
- Create repository record at `$NOODLESTAN_WEB/_records/repository.art`.
- Create workspace-level repository record at `$WORKSPACE/_records/repositories/noodlestan-web.art`.
- Create workspace-level checkout record at `$WORKSPACE/_records/checkouts/noodlestan-web-checkout.art`.
- Initialize `_backlog/_architect.md` — briefing to take over this project.
- Initialize `_backlog/_parking-lot.md` — notes and follow ups from execution of this plan.

**Dependencies:**

- Scaffolding files copied from `$ARTISANS` (dotfiles, configs, scaffolders, license, records).

### (Scope) Repository: Noodlestan Web

**Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Role:** — New — hosts the Noodlestan Website and any future noodlestan.org sites.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/`
- `remote` — `git@github.com:noodlestan/web.git`

**Changes:**

- Copy root configs from `$ARTISANS` (package.json, tsconfig, turbo, lefthook, dotfiles, license, readme).
- Copy scaffolders from `$ARTISANS/_records/scaffolders/` (adapt to noodlestan context).
- Copy license from `$ARTISANS/_records/license/` (verbatim).
- Create namespace record adapted from `$ARTISANS/_records/namespace.art` for `@noodlestan`.

### (Scope) Application: Noodlestan Website

**Record:** `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art`

**Role:** — The main noodlestan.org website, built with Astro.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$NOODLESTAN_WEB/apps/noodlestan-web/`

**Changes:**

- Create Astro project at `$NOODLESTAN_WEB/apps/noodlestan-web/`.
- Create application record at `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art`.
- Create deployment record at `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art`.
- Add hello-world content to `src/pages/index.astro`.

**Dependencies:**

- Repository scaffolded (Iteration: Scaffold Noodlestan Web).
- Infrastructure provisioned (Iteration: Provision Infrastructure).

### (Scope) Deployment: Noodlestan Website Production

**Record:** `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art`

**Role:** — Production deployment of the Noodlestan Website to noodlestan.org via AWS S3 + CloudFront.

**Partial:**

- `owner` — Project: Noodlestan Web
- `path` — `$OPS/domains/noodlestan/websites/noodlestan-web/`
- `target` — Production
- `url` — `https://noodlestan.org`

**Changes:**

- Create Terraform module at `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf`.
- Deploy `dist/` to S3 bucket.
- Verify `noodlestan.org` loads.

**Dependencies:**

- Infrastructure provisioned (Iteration: Provision Infrastructure).
- App built (Iteration: Create and Deploy App).

### (Scope) Repository: Ops

**Record:** `$OPS/_records/repository.art`

**Role:** — Existing — Terraform infrastructure. Add noodlestan-web website module.

**Partial:**

- `owner` — Project: Ops
- `path` — `$OPS/`

**Changes:**

- Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` (S3 + CloudFront for `noodlestan.org`).
- Update `$OPS/domains/noodlestan/main.tf` to add `module "noodlestan_web"`.

**Dependencies:**

- None — ops repo already exists.

### (Scope) Project: Artisans

**Record:** `$ARTISANS/_records/project.art`

**Role:** — Scaffolding reference — source of configs, records, and files to copy.

**Partial:**

- `owner` — Project: Artisans
- `path` — `$ARTISANS/`

**Dependencies:**

- `$ARTISANS` checkout must be available (clone via `npm run workspace clone artisans`).

## Execution Context

Execution is coordinated from `$WORKSPACE`. The repo scaffold and app development happen in `$NOODLESTAN_WEB`. Terraform changes happen in `$OPS`. Deployment uses the existing noodlestan.org domain infrastructure (certificate, hosted zone). Scaffolding files are sourced from `$ARTISANS`.

---

## Items:

| Iteration / Instructions                                                                                      | Status |
| ------------------------------------------------------------------------------------------------------------- | ------ |
| Iteration: Scaffold Noodlestan Web `plan-init-noodlestan-website/instructions/scaffold-repo.md`               | `DONE` |
| Iteration: Provision Infrastructure `plan-init-noodlestan-website/instructions/provision-infra.md`            | `DONE` |
| Iteration: Create and Deploy App `plan-init-noodlestan-website/instructions/create-app.md`                    | `DONE` |
| Iteration: Refine Deployment Records `plan-init-noodlestan-website/instructions/refine-deployment-records.md` | `DONE` |

### Iteration: Scaffold Noodlestan Web

**Id:** `scaffold-repo`

**Status:** `DONE`

**Purpose:** Create the `noodlestan/web` repository with project and repository records, scaffolders, configs, and CI.

**Description:** Scaffold a new repository following the workspace conventions. Copy dotfiles, configs, scaffolders from `$ARTISANS`. Create project and repository records. Init git, add remote, push.

**Instructions:** `./plan-init-noodlestan-website/instructions/scaffold-repo.md`

**Changes:**

- Clone `$ARTISANS` if not already available.
- Create `$NOODLESTAN_WEB` checkout directory.
- Copy root config files from `$ARTISANS` (dotfiles, lefthook, tsconfig, turbo, package.json, README, LICENSE).
- Copy scaffolders from `$ARTISANS/_records/scaffolders/` (verbatim).
- Copy license from `$ARTISANS/_records/license/` (verbatim).
- Copy namespace record from `$ARTISANS/_records/namespace.art` and adapt to `@noodlestan`.
- Create `$NOODLESTAN_WEB/_records/project.art` for Project: Noodlestan Web.
- Create `$NOODLESTAN_WEB/_records/repository.art` for Repository: Noodlestan Web.
- Create `$WORKSPACE/_records/repositories/noodlestan-web.art`.
- Create `$WORKSPACE/_records/checkouts/noodlestan-web-checkout.art`.
- Git init, add remote `git@github.com:noodlestan/web.git`, push.

**Dependencies:**

- None.

#### Commits:

| ID                                   | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| ------------------------------------ | ------------------------------------------- | ------------ | --------- | ----------- |
| `scaffold-noodlestan-web-repository` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `2a11048` | `COMMITTED` |

##### Commit: `scaffold-noodlestan-web-repository`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): scaffold Noodlestan Web repository

- Copy root configs, dotfiles, and scaffolders from artisans.
- Create project and repository records.
```

**Policy:** `AUTONOMOUS`

**Hash:** `2a11048`

**Status:** `COMMITTED`

### Iteration: Provision Infrastructure

**Id:** `provision-infra`

**Status:** `DONE`

**Purpose:** Add Terraform module for noodlestan-web in ops, provision AWS infrastructure, and smoke-test with a placeholder deploy.

**Description:** Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` following the art-mantras pattern. Add module reference to `$OPS/domains/noodlestan/main.tf`. Deploy smoke-test `dist/index.html` to verify infrastructure. Commit in ops, discard smoke dist.

**Instructions:** `./plan-init-noodlestan-website/instructions/provision-infra.md`

**Changes:**

- Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` (S3 + CloudFront for `noodlestan.org`).
- Update `$OPS/domains/noodlestan/main.tf` to add `module "noodlestan_web"`.
- Create smoke `dist/index.html` with hello world.
- Run `terraform init && terraform apply` in `$OPS/domains/noodlestan/`.
- Verify site loads at `noodlestan.org`.
- Commit terraform changes in ops.
- Discard smoke `dist/`.

**Dependencies:**

- None.

#### Commits:

| ID                                        | Repository / Checkout / Branch | Policy       | Hash      | Status      |
| ----------------------------------------- | ------------------------------ | ------------ | --------- | ----------- |
| `provision-noodlestan-web-infrastructure` | Ops / `$OPS` / `main`          | `AUTONOMOUS` | `d2243ec` | `COMMITTED` |

##### Commit: `provision-noodlestan-web-infrastructure`

**Repository:** Repository: Ops

**Message:**

```
ops(noodlestan): add noodlestan-web static website module

- Create S3 + CloudFront terraform for noodlestan.org.
- Add module reference to noodlestan domain.
- Smoke test deployment.
```

**Policy:** `AUTONOMOUS`

**Hash:** `d2243ec`

**Status:** `COMMITTED`

### Iteration: Create and Deploy App

**Id:** `create-app`

**Status:** `DONE`

**Purpose:** Initialize the Astro app in the new repo, add hello-world content, deploy to production.

**Description:** Create `$NOODLESTAN_WEB/apps/noodlestan-web/` with Astro project, application and deployment records, hello-world content. Build and deploy to noodlestan.org. Commit in noodlestan-web.

**Instructions:** `./plan-init-noodlestan-website/instructions/create-app.md`

**Changes:**

- Create `$NOODLESTAN_WEB/apps/noodlestan-web/` with Astro project (init, config, pages).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art` (Application: Noodlestan Website).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art` (Deployment: Noodlestan Website Production).
- Add hello-world content to `src/pages/index.astro`.
- Build with `npm run build`.
- Deploy `dist/` to S3 bucket.
- Verify `noodlestan.org` loads.
- Commit in noodlestan-web.

**Dependencies:**

- Repository scaffolded (Iteration: Scaffold Noodlestan Web).
- Infrastructure provisioned (Iteration: Provision Infrastructure).

#### Commits:

| ID                                      | Repository / Checkout / Branch              | Policy       | Hash      | Status      |
| --------------------------------------- | ------------------------------------------- | ------------ | --------- | ----------- |
| `deploy-noodlestan-website-hello-world` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `AUTONOMOUS` | `b9a5a1e` | `COMMITTED` |

##### Commit: `deploy-noodlestan-website-hello-world`

**Repository:** Repository: Noodlestan Web

**Message:**

```
build(noodlestan-web): initialize Astro app and deploy hello world

- Create Noodlestan Website app with Astro.
- Add application and deployment records.
- Deploy hello world to noodlestan.org.
```

**Policy:** `AUTONOMOUS`

**Hash:** `b9a5a1e`

**Status:** `COMMITTED`

### Iteration: Refine Deployment Records

**Id:** `refine-deployment-records`

**Status:** `DONE`

**Purpose:** Structure deployment metadata with proper environment, infrastructure, and build/deploy records after initial hello-world deployment.

**Description:** Refine the deployment records created during the hello-world iteration. Add deployment infrastructure record, production and staging environment records. Refactor `static-web-deployment.art` to reference environments, build/deploy commands, and infrastructure. Fix Terraform domain name in ops.

**Instructions:** `./plan-init-noodlestan-website/instructions/refine-deployment-records.md`

**Changes:**

- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/deployment-infrastracture.art` (Deployment Infrastructure: Noodlestan Website).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/production-environment.art` (Deployment Environment: Noodlestan Website Production).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/staging-environment.art` (Deployment Environment: Noodlestan Website Staging).
- Refactor `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art` to structured format with environments, build/deploy commands, and infrastructure reference.
- Fix `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` — correct `prod_domain_name` from `www.noodlestan.org` to `noodlestan.org`.

**Dependencies:**

- App built and deployed (Iteration: Create and Deploy App).

#### Commits:

| ID                          | Repository / Checkout / Branch              | Policy   | Hash      | Status      |
| --------------------------- | ------------------------------------------- | -------- | --------- | ----------- |
| `refine-deployment-records` | Noodlestan Web / `$NOODLESTAN_WEB` / `main` | `MANUAL` | `ac23b01` | `COMMITTED` |
| `fix-terraform-prod-domain` | Ops / `$OPS` / `main`                       | `MANUAL` | `56d5049` | `COMMITTED` |

##### Commit: `refine-deployment-records`

**Repository:** Repository: Noodlestan Web

**Message:**

```
chore(noodlestan-web): refine deployment records

- Add deployment infrastructure, production, and staging environment records.
- Refactor static-web-deployment to structured format.
```

##### Commit: `fix-terraform-prod-domain`

**Repository:** Repository: Ops

**Message:**

```
fix(noodlestan-web): correct Terraform prod domain name

- Change prod_domain_name from www.noodlestan.org to noodlestan.org.
```

---

## Work

### Next

All iterations are complete. Plan is ready for review and closure.

### Blockers

- None.

## Operating Instructions

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/ops/writing-commit-message.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write the commit message following the rules defined there.

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/setting-up.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm ci # to install dependencies.
npm run workspace clone {repo.name} # to create a new checkout of a known repository.
npm run workspace branch {branch.name} {checkout.location} # to create a working branch.
```

**Instructions:** (From `$OPS/_guide.md`)

Run from the `$OPS` root:

```bash
terraform init
terraform apply
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/ops/verifying-completion.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
npm run workspace sanity # to check git status across all repos
```

---

## Coordination

### Not In Scope

- **CI/CD setup** — Deferred to follow-up plan.
- **Staging environment deployment** — Infrastructure exists but not yet deployed.
- **Real content** — Project listing and documentation deferred to follow-up.

### Evidence

- **Hello World Deployed** to production: https://noodlestan.org
- **Terraform module** created and applied in ops repo.
- **Deployment records** structured with environments and infrastructure references.

### Findings

- **Ops repo already has noodlestan.org infrastructure** — The new website just needs a new module referencing the existing certificate and zone.
- **Art-Mantras is a good reference pattern** — Same S3 + CloudFront + certificate chain.
- **Artisans repo contains scaffolding patterns** — Project skeleton, license, namespace, configs to copy.

### Decisions

- **Single repo** — `noodlestan/web` hosts all noodlestan.org websites, not one repo per site.
- **Astro** — Static site generator, appropriate for a documentation/content site.
- **Existing infrastructure** — Reuse the noodlestan.org certificate and hosted zone from ops, no new DNS.
- **Terraform first** — Provision infrastructure before building the app, so deployment is verified end-to-end.
- **Scaffold from artisans** — Copy configs, records, and scaffolders from artisans repo as the reference pattern.

### Knowledge to Update

None.

### Follow Ups

- Add real content to noodlestan.org (project listing, documentation).
- Set up CI/CD for automatic deployment on push.
- Deploy staging environment.

### Feedback

None.
