# Noodlestan Web

> Noodlestan says Hello World.

Repository of Noodlestan websites - typically built with Astro.

**Keywords:** websites, documentation, astro.

## Applications

| dir                    | description        |
| ---------------------- | ------------------ |
| `apps/noodlestan-web/` | Noodlestan Website |

## Development

### Scripts

- **$** `npm run turbo build` — Build all packages.
- **$** `npm run turbo test` — Run tests in all packages.
- **$** `npm run turbo lint` — Lint all packages (Prettier + ESLint).
- **$** `npm run ci` — Run all CI scripts in all packages.

- **$** `npm run update-project-records` — Collects project records into `data/_records/project`.
- **$** `npm run update-project-collection` — Generates collection for Astro `data/projects/collection.json`.

### update-project-records

- Reads repository records from workspace `_records/repositories/*`.
- Clones repository if not present using `art-work-cli clone "{repo.name}"`;
- Makes sure it's on `main` branch and pulls.
- Reads repository project record from `$CHECKOUT/_records/project.art`
- Copies all project records into `data/_records/projects/`.

### update-project-collection

- Loads all projects from `data/_records/project`.
- Generates `data/projects/collection.json`

## License

MIT License

Copyright (c) 2026 Noodlestan https://noodlestan.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
