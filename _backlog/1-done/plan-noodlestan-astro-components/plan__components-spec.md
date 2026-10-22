# Components Spec: Noodlestan Astro Components

**Plan:** `noodlestan-astro-components`

## Demo Route

**Route:** `/build/astro-component` — `$APP/src/pages/build/astro-component.astro`.

Render the same page content and section order as the Noodlestan Web homepage (`Hero`, `ProjectList`, `Workflows`, `Contributing`, `About`), without the search control or filtering script. Use the same layout as the homepage, so its header and footer are rendered once by the layout. Do not add a separate component catalogue or duplicate the footer inside the page body.

## Package Assets

### `global.css`

**Purpose:** Export the small package-owned token stylesheet required by the reusable components.

**Source:** New package file at `$PACKAGE/src/styles/global.css`; do not copy or move the applications' existing global stylesheets.

**Package export:** Add an explicit `package.json` export mapping: `"./global.css": "./src/styles/global.css"`.

Ensure the published package includes `$PACKAGE/src/styles/global.css` at that mapped path.

**Initial token:**

```css
:root {
  --type-noodlestan-family: 'Fredoka', sans-serif;
}
```

Use `var(--type-noodlestan-family)` for the package's Noodlestan attribution and footer brand typography.

**README usage instructions:** The README must tell consumers to load Fredoka in the document `<head>`, import the package stylesheet once in an app layout, and import and render a component. Use the current Fredoka Bunny Fonts URL and show the steps separately:

In the document head

```html
<link rel="preconnect" href="https://fonts.bunny.net" />
<link href="https://fonts.bunny.net/css?family=fredoka:300,400,500,600,700" rel="stylesheet" />
```

In the Astro layout:

```astro
---
import '@noodlestan/astro-components/global.css';

```

In an Astro page:

```astro
---
import { HowToContribute } from '@noodlestan/astro-components';
const githubURL = 'https://github.com/your-project';
const discordURL = 'https://discord.gg/your-invite';
const contactURL = 'mailto:hello@example.org';
---

<HowToContribute githubURL={githubURL} discordURL={discordURL} contactURL={contactURL} />
```

**Apply to:** Package publication and both consuming apps. Each app imports the package stylesheet once; the Noodlestan Web demo route receives it through its shared layout.

## Components

### HowToContribute

**Purpose:** Present the standard Noodlestan invitation and links for contributing.

**Source:** Copy and structure from `$PROJECT/apps/noodlestan-web/src/components/pages/home/Contributing.astro`; Keep app-specific endpoint values supplied by props. Author component-local styles; do not depend on app container classes.

**Props:** `githubURL`, `discordURL`, `contactURL`.

**Code (wireframe):**

```astro
<aside class="how-to-contribute">
  <h3>Contributing</h3>
  <p>Did you find a bug? Do you have an idea? Want to contribute, discuss something, or just say hello?</p>
  <p>You are welcome.</p>
  <ul>
    <li><a href={githubURL}>GitHub</a></li>
    <li><a href={discordURL}>Discord</a></li>
    <li><a href={contactURL}>Contact</a></li>
  </ul>
</aside>
```

**Apply to:** `$PROJECT/apps/noodlestan-web/src/components/pages/home/Contributing.astro` and `/build/astro-component` demo route.

### HelpWanted

**Purpose:** Show a reusable, actionable invitation for help with a Noodlestan project or task.

**Source:** No existing component or finalized copy was found in the backlog. Create the markup and component-local styles; the consuming page supplies the message and action.

**Props:** `message`, `actionURL`, `actionLabel`.

**Code (wireframe):**

```astro
<aside class="help-wanted">
  <h3>Help wanted</h3>
  <p>{message}</p>
  <a href={actionURL}>{actionLabel}</a>
</aside>
```

**Apply to:** Noodlestan Web homepage contribution content and `/build/astro-component` demo route.

### MadeInNoodlestan

**Purpose:** Attribute a page or project as made in Noodlestan.

**Source:** No existing component was found. Create the markup and component-local styles from this specification.

**Props:** `href` — destination for the Noodlestan link.

**Code (wireframe):**

WIP: make it a span (style inline-flex) and make it contain the Noodlestan icon before the brand name

```astro
<a class="made-in-noodlestan" href={href}>Made in Noodlestan</a>
```

**Apply to:** `$PROJECT/apps/noodlestan-web/src/components/pages/home/About.astro` and `/build/astro-component` demo route.

### WorkInProgress

**Purpose:** Mark content that is genuinely a work in progress.

**Source:** The milestone names WIP as a common element, but the backlog has no existing implementation or live status source. Create an accessible component with component-local styles; do not invent a project status to force its use.

**Props:** `label` — optional status text; default to `Work in progress`, `linkHref` — (optional) destination link, `linkLabel` — (optional) destination link label.

**Code (wireframe):**

```astro
<span class="work-in-progress">
  {label ?? 'Work in progress'}
  <a href={linkHref}>{linkLabel}</a> // only if both set.
</span>
```

**Apply to:** No live placement is defined until a real WIP item is identified. Do not add it to the homepage-equivalent demo route without such content.

### NoodlestanFooter

**Purpose:** Render the shared Noodlestan copyright and legal footer in each consuming app's layout.

**Source:** `$PROJECT/apps/noodlestan-web/src/layouts/components/SiteFooter.astro`. Reuse its current markup and styles, scoped to this component; remove container classes and place the specified content inside `div.noodlestan-footer`.

**Props:** `year`, `githubURL`.

**Code (wireframe):**

```astro
<div class="noodlestan-footer">
  <p class="copyright">Copyright © {year} Noodlestan</p>
  <div class="legal">
    <p>Code and content available on <a href={githubURL}>GitHub</a> under an MIT LICENSE.</p>
    <p>This site respects your privacy: no cookies, analytics, or tracking tools are used.</p>
    <p>This site is built with open source knowledge and tools.</p>
  </div>
</div>
```

**Apply to:** The Noodlestan Web layout and Art MD Web layout, replacing their current footer components. The demo route uses the Noodlestan Web layout, so do not render a second footer in its page body.

### NoodlestanIconLink

**Purpose:** Link to Noodlestan using a monochrome Noodlestan logo icon.

**Source:** Adapt the logo SVG from `$PROJECT/apps/noodlestan-web/src/components/site/SiteLogo.astro` to a single monochrome color. Use component-local icon sizing and link styles.

**Props:** `href` — destination for the Noodlestan link.

**Code (wireframe):**

```astro
<a class="icon-link" href={href} aria-label="Noodlestan">
  <svg viewBox="{logo viewBox}" aria-hidden="true" focusable="false">
    <!-- monochrome Noodlestan logo paths -->
  </svg>
</a>
```

**Apply to:** `$ARTIFICIALS/apps/art-md-web/src/components/site/SiteHeader.astro` only.

### GithubIconLink

**Purpose:** Link to the consuming project's GitHub destination using the existing GitHub SVG.

**Source:** Reuse the GitHub SVG path and icon-link styling from `$PROJECT/apps/noodlestan-web/src/layouts/components/SiteLinks.astro`; keep only the individual link's styles, not the group layout.

**Props:** `href`.

**Code (wireframe):**

```astro
<a class="icon-link" href={href} aria-label="Project on GitHub">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <!-- existing monochrome GitHub path -->
  </svg>
</a>
```

**Apply to:** `$ARTIFICIALS/apps/art-md-web/src/components/site/SiteHeader.astro` only. It is the single GitHub/Discord icon link in that header.

### DiscordIconLink

**Purpose:** Link to the Noodlestan Discord destination using the existing Discord SVG.

**Source:** Reuse the Discord SVG path and icon-link styling from `$PROJECT/apps/noodlestan-web/src/layouts/components/SiteLinks.astro`; keep only the individual link's styles, not the group layout.

**Props:** `href`.

**Code (wireframe):**

```astro
<a class="icon-link" href={href} aria-label="Noodlestan on Discord">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <!-- existing monochrome Discord path -->
  </svg>
</a>
```

**Apply to:** `$PROJECT/apps/noodlestan-web/src/layouts/components/SiteHeader.astro` only. It is the single GitHub/Discord icon link in that header and is inherited by the demo route through the shared layout.
