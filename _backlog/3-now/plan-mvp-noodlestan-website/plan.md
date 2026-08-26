# Plan: MVP Noodlestan Website

**ID:** `mvp-noodlestan-website`

**Status:** `WORKING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Say hello world on noodlestan.org and learn how to set up and deploy a static Astro website.

**Description:** New repository `noodlestan/web` with 1 app (Noodlestan Website), deployed to noodlestan.org. Scaffold repo, provision AWS infrastructure via Terraform, build and deploy a hello-world Astro site.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

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

## Domains

| Domain / Path                                        | Description                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`              | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/_guide.md` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Domain: Deployments `$DOMAINS/deployments/index.md`  | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.               |

### Work Scope Types

| Work Scope Type / Path                                                      | Resource Kind / Path                                                    |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Type: Project Scope `$DOMAINS/projects/types/project-scope.art`             | Structure: Project `$DOMAINS/projects/structures/project.art`           |
| Type: Repository Scope `$DOMAINS/repositories/types/repository-scope.art`   | Structure: Repository `$DOMAINS/repositories/structures/repository.art` |
| Type: Application Scope `$DOMAINS/applications/types/application-scope.art` | Structure: Application — WIP                                            |
| Type: Deployment Scope `$DOMAINS/deployments/types/deployment-scope.art`    | Structure: Deployment `$DOMAINS/deployments/structures/deployment.art`  |

### Workflows

| Workflow / Path                                                        | Description                                                                        |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Workflow: Planning `$DOMAINS/plans/workflows/planning.art`             | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Workflow: Engineering `$DOMAINS/engineering/workflows/engineering.art` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Workflow: Deploying `$DOMAINS/deployments/workflows/deploying.art`     | Deployment lifecycle for pre-deploy, deploy, and post-deploy stages.               |

### Workflow Stages

| Name            | Workflow               | Description                                    |
| --------------- | ---------------------- | ---------------------------------------------- |
| Contextualizing | Workflow: Planning     | Gather scope and context for planning.         |
| Drafting        | Workflow: Planning     | Produce the initial plan and iteration drafts. |
| Refining        | Workflow: Planning     | Resolve gaps and improve the work sequence.    |
| Setting up      | Workflow: Implementing | Prepare a project or package for execution.    |
| Verifying       | Workflow: Implementing | Validate the current work.                     |
| Committing      | Workflow: Implementing | Record a verified change.                      |
| Pre-Deploy      | Workflow: Deploying    | Prepare a deployment.                          |
| Deploy          | Workflow: Deploying    | Execute the deployment.                        |
| Post-Deploy     | Workflow: Deploying    | Verify and record deployment outcome.          |

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

## Knowledge Context

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

### Project Scope: Noodlestan Web (new)

**Resource:** Project: Noodlestan Web

**Path:** `$NOODLESTAN_WEB/`

**Record:** `$NOODLESTAN_WEB/_records/project.art`

**Repository:** Repository: Noodlestan Web

**Repository Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Remote:** `git@github.com:noodlestan/web.git`

**Owner:** Project Management

**Role:** New — manages the Noodlestan Website and any future noodlestan.org sites.

**Changes:**

- Create project record at `$NOODLESTAN_WEB/_records/project.art`.
- Create repository record at `$NOODLESTAN_WEB/_records/repository.art`.
- Create workspace-level repository record at `$WORKSPACE/_records/repositories/noodlestan-web.art`.
- Create workspace-level checkout record at `$WORKSPACE/_records/checkouts/noodlestan-web-checkout.art`.
- Initialize `_backlog/_architect.md` — briefing to take over this project.
- Initialize `_backlog/_parking-lot.md` — notes and follow ups from execution of this plan.

**Dependencies:**

- Scaffolding files copied from `$ARTISANS` (dotfiles, configs, scaffolders, license, records).

### Repository Scope: Noodlestan Web (new)

**Resource:** Repository: Noodlestan Web

**Path:** `$NOODLESTAN_WEB/`

**Record:** `$NOODLESTAN_WEB/_records/repository.art`

**Owner:** Project: Noodlestan Web

**Role:** New — hosts the Noodlestan Website and any future noodlestan.org sites.

**Remote:** `git@github.com:noodlestan/web.git`

**Changes:**

- Copy root configs from `$ARTISANS` (package.json, tsconfig, turbo, lefthook, dotfiles, license, readme).
- Copy scaffolders from `$ARTISANS/_records/scaffolders/` (adapt to noodlestan context).
- Copy license from `$ARTISANS/_records/license/` (verbatim).
- Create namespace record adapted from `$ARTISANS/_records/namespace.art` for `@noodlestan`.

### Application Scope: Noodlestan Website

**Resource:** Application: Noodlestan Website

**Path:** `$NOODLESTAN_WEB/apps/noodlestan-web/`

**Record:** `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art`

**Owner:** Project: Noodlestan Web

**Role:** The main noodlestan.org website, built with Astro.

**Changes:**

- Create Astro project at `$NOODLESTAN_WEB/apps/noodlestan-web/`.
- Create application record at `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art`.
- Create deployment record at `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art`.
- Add hello-world content to `src/pages/index.astro`.

**Dependencies:**

- Repository scaffolded (Iteration: Scaffold Noodlestan Web).
- Infrastructure provisioned (Iteration: Provision Infrastructure).

### Deployment Scope: Noodlestan Website Production

**Resource:** Deployment: Noodlestan Website Production

**Path:** `$OPS/domains/noodlestan/websites/noodlestan-web/`

**Record:** `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art`

**Owner:** Project: Noodlestan Web

**Target:** Production

**URL:** `https://noodlestan.org`

**Role:** Production deployment of the Noodlestan Website to noodlestan.org via AWS S3 + CloudFront.

**Changes:**

- Create Terraform module at `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf`.
- Deploy `dist/` to S3 bucket.
- Verify `noodlestan.org` loads.

**Dependencies:**

- Infrastructure provisioned (Iteration: Provision Infrastructure).
- App built (Iteration: Create and Deploy App).

### Repository Scope: Ops (existing)

**Resource:** Repository: Ops

**Path:** `$OPS/`

**Record:** `$OPS/_records/repository.art`

**Owner:** Project: Ops

**Role:** Existing — Terraform infrastructure. Add noodlestan-web website module.

**Changes:**

- Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` (S3 + CloudFront for `noodlestan.org`).
- Update `$OPS/domains/noodlestan/main.tf` to add `module "noodlestan_web"`.

**Dependencies:**

- None — ops repo already exists.

### Project Scope: Artisans (reference)

**Resource:** Project: Artisans

**Path:** `$ARTISANS/`

**Record:** `$ARTISANS/_records/project.art`

**Owner:** Project: Artisans

**Role:** Scaffolding reference — source of configs, records, and files to copy.

**References:**

- `_records/scaffolders/` — Copy verbatim (project skeleton, README, package.json, lefthook scaffolders).
- `_records/license/` — Copy verbatim (Noodlestan 2026 MIT license).
- `_records/namespace.art` — Adapt to `@noodlestan` namespace (replace `@artisans` with `@noodlestan`).
- Root scaffolders — Copy or replace where scaffolder skeleton file has dotfiles, license, readme, configs, turbo, lefthook.
- Example application in `apps/` — Contains application and deployment record patterns to follow.

**Dependencies:**

- `$ARTISANS` checkout must be available (clone via `npm run workspace clone artisans`).

## Work

### Execution Context

Execution is coordinated from `$WORKSPACE`. The repo scaffold and app development happen in `$NOODLESTAN_WEB`. Terraform changes happen in `$OPS`. Deployment uses the existing noodlestan.org domain infrastructure (certificate, hosted zone). Scaffolding files are sourced from `$ARTISANS`.

### Items

| Phase | Resource / Path                                                                                   | Status |
| ----- | ------------------------------------------------------------------------------------------------- | ------ |
| `3`   | Iteration: Scaffold Noodlestan Web `plan-mvp-noodlestan-website/instructions/scaffold-repo.md`    | READY  |
| `3`   | Iteration: Provision Infrastructure `plan-mvp-noodlestan-website/instructions/provision-infra.md` | READY  |
| `3`   | Iteration: Create and Deploy App `plan-mvp-noodlestan-website/instructions/create-app.md`         | READY  |

#### Iteration: Scaffold Noodlestan Web

**id:** `scaffold-repo`

**Purpose:** Create the `noodlestan/web` repository with project and repository records, scaffolders, configs, and CI.

**Description:** Scaffold a new repository following the workspace conventions. Copy dotfiles, configs, scaffolders from `$ARTISANS`. Create project and repository records. Init git, add remote, push.

**Status:** `WORKING`

**Source:** `$ARTISANS` — scaffolding reference for all copy commands.

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

**Instructions:** `./plan-mvp-noodlestan-website/instructions/scaffold-repo.md`

**Report:** `./plan-mvp-noodlestan-website/instructions/scaffold-repo__report.md`

##### Commit: `scaffold-noodlestan-web-repository`

**Repository:** Repository Scope: Noodlestan Web `$NOODLESTAN_WEB`

**Message:**

```
build(noodlestan-web): scaffold Noodlestan Web repository

- Copy root configs, dotfiles, and scaffolders from artisans.
- Create project and repository records.
```

**Status:** `WORKING`

**Policy:** `AUTONOMOUS`

#### Iteration: Provision Infrastructure

**id:** `provision-infra`

**Purpose:** Add Terraform module for noodlestan-web in ops, provision AWS infrastructure, and smoke-test with a placeholder deploy.

**Description:** Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` following the art-mantras pattern. Add module reference to `$OPS/domains/noodlestan/main.tf`. Deploy smoke-test `dist/index.html` to verify infrastructure. Commit in ops, discard smoke dist.

**Status:** READY

**Changes:**

- Create `$OPS/domains/noodlestan/websites/noodlestan-web/main.tf` (S3 + CloudFront for `noodlestan.org`).
- Update `$OPS/domains/noodlestan/main.tf` to add `module "noodlestan_web"`.
- Create smoke `dist/index.html` with hello world.
- Run `terraform init && terraform apply` in `$OPS/domains/noodlestan/`.
- Verify site loads at `noodlestan.org`.
- Commit terraform changes in ops.
- Discard smoke `dist/`.

**Instructions:** `./plan-mvp-noodlestan-website/instructions/provision-infra.md`

**Report:** `./plan-mvp-noodlestan-website/instructions/provision-infra__report.md`

##### Commit: `provision-noodlestan-web-infrastructure`

**Repository:** Repository Scope: Ops `$OPS`

**Message:**

```
ops(noodlestan): add noodlestan-web static website module

- Create S3 + CloudFront terraform for noodlestan.org.
- Add module reference to noodlestan domain.
- Smoke test deployment.
```

**Status:** READY

**Policy:** `AUTONOMOUS`

#### Iteration: Create and Deploy App

**id:** `create-app`

**Purpose:** Initialize the Astro app in the new repo, add hello-world content, deploy to production.

**Description:** Create `$NOODLESTAN_WEB/apps/noodlestan-web/` with Astro project, application and deployment records, hello-world content. Build and deploy to noodlestan.org. Commit in noodlestan-web.

**Status:** READY

**Changes:**

- Create `$NOODLESTAN_WEB/apps/noodlestan-web/` with Astro project (init, config, pages).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/package.art` (Application: Noodlestan Website).
- Create `$NOODLESTAN_WEB/apps/noodlestan-web/_records/static-web-deployment.art` (Deployment: Noodlestan Website Production).
- Add hello-world content to `src/pages/index.astro`.
- Build with `npm run build`.
- Deploy `dist/` to S3 bucket.
- Verify `noodlestan.org` loads.
- Commit in noodlestan-web.

**Instructions:** `./plan-mvp-noodlestan-website/instructions/create-app.md`

**Report:** `./plan-mvp-noodlestan-website/instructions/create-app__report.md`

##### Commit: `deploy-noodlestan-website-hello-world`

**Repository:** Repository Scope: Noodlestan Web `$NOODLESTAN_WEB`

**Message:**

```
build(noodlestan-web): initialize Astro app and deploy hello world

- Create Noodlestan Website app with Astro.
- Add application and deployment records.
- Deploy hello world to noodlestan.org.
```

**Status:** READY

**Policy:** `AUTONOMOUS`

### Next

Scaffold the repository — the core prerequisite for infrastructure and app work.

### Blockers

- AWS credentials must be available for `terraform apply` and S3 deployment.
- The `noodlestan.org` domain and certificate already exist in ops — no new DNS setup needed.
- `$ARTISANS` checkout must be available (clone via `npm run workspace clone artisans`).

## Findings

- The ops repo already has noodlestan.org infrastructure (domain, certificate, S3 modules). The new website just needs a new module referencing the existing certificate and zone.
- Art-Mantras is a good reference pattern: same S3 + CloudFront + certificate chain.
- Artisans repo contains scaffolding patterns (project skeleton, license, namespace, configs) to copy.

## Decisions

- **Single repo** — `noodlestan/web` hosts all noodlestan.org websites, not one repo per site.
- **Astro** — static site generator, appropriate for a documentation/content site.
- **Existing infrastructure** — reuse the noodlestan.org certificate and hosted zone from ops, no new DNS.
- **Terraform first** — provision infrastructure before building the app, so deployment is verified end-to-end.
- **Scaffold from artisans** — copy configs, records, and scaffolders from artisans repo as the reference pattern.

## Follow Ups

- Add real content to noodlestan.org (project listing, documentation).
- Set up CI/CD for automatic deployment on push.
- Add staging environment.

## Feedback

None.
