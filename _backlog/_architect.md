# Architect Briefing: Noodlestan Web

## Upstream Context

This project originates from the Initialize Noodlestan Website plan in the management repository. The goal is to establish a standalone repository for the Noodlestan website, initially deployed as a hello-world Astro site at noodlestan.org.

## Goals

- Create a new `noodlestan-web` repository with proper project and repository records.
- Scaffold the repository with configs, dotfiles, and scaffolders copied from artisans.
- Deploy a hello-world Astro site to noodlestan.org.
- Establish the pattern for future noodlestan.org websites.

## Project Scope

- **Repository:** `git@github.com:noodlestan/noodlestan-web.git`
- **Application:** Astro-based website at `apps/noodlestan-web/`
- **Deployment:** Production at `noodlestan.org` via AWS S3 + CloudFront
- **Namespace:** `@noodlestan`

## Principles

- Single repo hosts all noodlestan.org websites.
- Reuse existing infrastructure (certificate, hosted zone) from ops.
- Follow workspace conventions for records, planning, and delivery.
- Scaffold from artisans as the reference pattern.

## Follow-ups

- Add real content to noodlestan.org.
- Set up CI/CD for automatic deployment.
- Add staging environment.
