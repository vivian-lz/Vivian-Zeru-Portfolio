# Redesign review

Branch: `feature/portfolio-redesign`. The original `main` branch has not been changed or merged.

## What to try

1. Start on Home: inspect the smaller portrait, hardware-focused featured projects, and current work.
2. Open Projects: combine focus/status filters, search by tool or project, refresh a filtered URL, and clear the filters. Paused and archived work remains visible in All.
3. Open IC Design Collection: inspect the Booth multiplier flagship and expand each of the four supporting circuit studies. Every study has a shareable page.
4. Open Floating Bandgap Reference: compare the simulation results with the limitation note; choose gallery figures and open their originals or read the full report.
5. Open Smart Dorm Light: distinguish verified work, current investigation, and planned features.
6. Open Sproutly and follow the connected-project link: the startup concept and paused hobbyist hardware have separate scopes.
7. Open Experience & Resume: jump to sections, view skills, and open or download the PDF.
8. Check About and Contact, then try the navigation on a narrow mobile screen and using a keyboard.

## Validation performed

- Angular production build succeeded and prerendered 37 routes.
- Eight automated browser/unit tests passed.
- Chromium rendered all 32 main and project pages on both development and production servers without page errors or desktop horizontal overflow.
- All four original category URLs redirected to the correct filtered directories.
- Combined directory filters, search, URL persistence, empty-state reset, collection links, gallery selection, mobile menu, and resume anchors passed functional checks.
- Representative pages fit at 390px and 320px widths without horizontal overflow.
- Original project images loaded; the original favicon is unchanged.
- No GPA label was found in extracted text from any PDF retained in public assets. The historical resume is preserved outside the checkout rather than republished at another path.

Actual-site screenshots and the browser-check result file are saved outside the checkout in `/workspace/portfolio-review/`. They are review artifacts, not website assets.

## Content boundaries

The layout samples shown during design review were image mockups. The implemented site uses repository photographs and report figures directly, not generated project imagery. Sproutly architecture was read from its actual GitHub repository; its software predictions, firmware, and PCB remain proposed. System validation of the new stormwater prototype is upcoming. Bandgap results are schematic simulations with partial supply-rejection compliance. VLSI layout and simulation work is not a claim of fabricated silicon.

See [Editing the portfolio](EDITING-THE-PORTFOLIO.md) for the code map and local run commands. External linked sites, email delivery, and Vercel analytics were not validated as part of the local site checks.
