# Editing the portfolio

This is still the Angular application Vivian originally built. It keeps the NgModule structure, TypeScript, HTML templates, and plain CSS. There is no CMS, database, or extra UI library to learn.

## Where to change things

| What you want to edit                            | File                                               |
| ------------------------------------------------ | -------------------------------------------------- |
| Project text, status, tools, links, and media    | `src/app/data/projects.ts`                         |
| The shape of a project entry                     | `src/app/data/project.model.ts`                    |
| Experience, research, leadership, skills         | `src/app/data/experience.ts`                       |
| Homepage wording and layout                      | `src/app/home/home.component.html`                 |
| Which projects are featured                      | `src/app/home/home.component.ts`                   |
| About / personal story                           | `src/app/about/about.component.html`               |
| Resume sections and PDF links                    | `src/app/resume/resume.component.html`             |
| Colors, typography, spacing, responsive layouts  | `src/styles.css`                                   |
| Navigation and routes                            | `src/app/nav/` and `src/app/app-routing.module.ts` |
| Original images and documents served by the site | `public/`                                          |

## How the pieces connect

`AppComponent` renders the header, a router outlet inside the main landmark, and footer. Angular's router chooses the page shown in that outlet.

`projects.ts` is a plain list of project objects. `ProjectCardComponent` receives one of those objects as an input and displays a preview. The directory filters the same list; a detail page looks up the ID from its URL and renders that project's sections. Editing a project in the list updates every place that uses it.

Angular templates use `{{ value }}` to show text, `[property]` to pass a value, and `(event)` to run a method when something happens. `@for` repeats a block, and `@if` shows it conditionally. `[(ngModel)]` connects a directory form control to a TypeScript property.

Gallery thumbnails are buttons. Selecting one changes `selectedIndex`; the image, caption, and original-image link all read that same index. Nothing auto-advances or hides the caption on mobile.

## Add a project

Copy an entry in `projects.ts` and update its fields. Use a unique lowercase hyphenated `id`, such as `my-new-circuit`. That ID becomes `/projects/my-new-circuit`; keep it stable when changing a title. Required fields are documented by the `Project` interface.

- `status` is one of In Progress, Completed, Paused, Archived, Upcoming.
- `stage` adds precision, such as Schematic Design & Simulation or IR Receiver Prototyping.
- `focus` describes engineering areas; `tools` lists specific tools used.
- `sections` contains readable paragraphs or bullet lists. Separate verified work from future plans.
- `images` is optional. An entry without photographs gets a decorative text placeholder, never generated project imagery.
- A section can also have its own `images` list. Use this when figures belong to a particular stage or device, as in the SYMBIO-X schematic work. `imagesHeading` labels the main gallery when its photographs need extra context.
- `parentId: 'ic-design'` groups a supporting study inside the IC collection. It still has a shareable page and appears in directory searches.
- `relatedIds` links connected projects, such as Sproutly and the earlier plant-monitor hardware.

The server route configuration gets the project IDs from this same list, so new detail pages are included in the next production build automatically.

## Change the look

CSS variables at the top of `src/styles.css` are the shared palette and spacing settings. Layout rules are grouped into shared shell, homepage, directory, case studies, and supporting pages. Media queries at the bottom adapt the layout to smaller screens; they do not shrink the desktop page into a tiny mobile copy.

The favicon remains `/favicon1.png`. Project photos remain the repository originals. Files in `public/project-images/` are original embedded figures extracted from the supplied reports, not redrawn or AI-generated images.

## Privacy and evidence

Everything under `public/` is copied into the published site, even when no page links to it. A historical resume containing a GPA was preserved outside the checkout at `/workspace/preserved-documents/portfolio/` and removed from public assets. It is not added at a new path in this branch. Git history also retains the original. Do not copy or link it into `public/`. The current public resume has no GPA label in its extracted text. Do not add a GPA to page content or new documents.

Bandgap results are simulations with partial DC PSRR compliance, not physical validation. Stormwater photos show earlier iterations; the new SD-card prototype is awaiting system validation. Smart Dorm Light's phone control and PCB are planned. Sproutly uses the owner-supplied concept scope and architecture documented in github.com/vivian-lz/sproutly. Its firmware, predictions, and custom PCB remain planned; the repository enclosure is a visual concept, not a validated product.

## Run and check

Use Node 22 (supported by Angular 19), then:

```sh
npm ci
npm start -- --host 0.0.0.0 --port 4200
```

Production build and server:

```sh
npm run build
npm run serve:ssr:PortfolioWebsite
```

Tests in this cloud environment:

```sh
CHROME_BIN=/usr/bin/chromium npm test -- --watch=false
```

`karma.conf.cjs` supplies a container-compatible headless browser launcher. The tests cover navigation, image selection, project preservation, related links, and combined directory filtering. Check mobile layouts and original document/media links after content changes.

The old category URLs still work, redirecting to filtered project directories. The shared project data replaces the old repeated category HTML. Git history preserves the original implementation.
