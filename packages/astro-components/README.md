# @noodlestan/astro-components

> Reusable Astro components for Noodlestan websites.

Reusable Astro components for Noodlestan websites.

This package is part of the [Noodlestan Web](https://noodlestan.org) project.

## Installation

```bash
npm install @noodlestan/astro-components
```

## Usage

### In the document `<head>`

```html
<link rel="preconnect" href="https://fonts.bunny.net" />
<link href="https://fonts.bunny.net/css?family=fredoka:300,400,500,600,700" rel="stylesheet" />
```

### In an Astro layout

```astro
---
import '@noodlestan/astro-components/global.css';
---
```

### In an Astro page

```astro
---
import { HowToContribute } from '@noodlestan/astro-components';

const githubURL = 'https://github.com/your-project';
const discordURL = 'https://discord.gg/your-invite';
const contactURL = 'mailto:hello@example.org';
---

<HowToContribute githubURL={githubURL} discordURL={discordURL} contactURL={contactURL} />
```

## Development

Read the [Noodlestan Web guide](../../_guide.md) for repository setup and conventions.

### Build Targets

This package provides Astro components and stylesheet source for use in Astro applications.

### Scripts

- **$** `npm run lint` — Check formatting, lint, and types
- **$** `npm run lint:fix` — Fix formatting and lint issues
- **$** `npm run test` — Run tests (none yet)
- **$** `npm run ci` — Run the package CI checks

## Copyright (c) 2026 [Noodlestan](https://noodlestan.org/)

Published under an [MIT license](https://noodlestan.mit-license.org/).
