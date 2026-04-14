# Personal Website

Portfolio site for Marq Lott, built as a static frontend and deployed with GitHub Pages.

## Stack

- HTML
- CSS (modular files under `css/`)
- Vanilla JavaScript (modular files under `js/`)

## Project Structure

- `index.html`: Main document and section markup
- `css/base.css`: Global styles, variables, header/nav, shared base rules
- `css/hero.css`: Hero layout, portrait, role chip, hero controls
- `css/components.css`: Panels, cards, chips, timeline, contact, modal
- `css/background.css`: Background/visual ambience layers and desktop background rules
- `css/animations.css`: Keyframes and animation primitives
- `css/responsive.css`: All responsive breakpoints and mobile/tablet overrides
- `js/data.js`: Content data for projects and timeline entries
- `js/renderers.js`: DOM rendering helpers for data-driven sections
- `js/main.js`: App behavior (navigation, reveals, modal, starfield, interactions)
- `resources/images/`: Local image assets

## Run Locally

This is a static site, so you can open `index.html` directly.

For best parity with production behavior, run with a local static server:

- Python 3:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`

## Content Edits

- Update project cards and timeline entries in `js/data.js`.
- Keep rendering logic in `js/renderers.js`.
- Keep interaction logic in `js/main.js`.

## Responsive Breakpoint Contract

JS and CSS are aligned to the same viewport contract:

- phone: `max-width: 720px`
- nav compact: `max-width: 960px`
- tablet only: `min-width: 721px and max-width: 1199px`
- tablet or down: `max-width: 1199px`

## Deployment

Deployed on GitHub Pages from the `main` branch.

## Maintenance Notes

- Preserve module boundaries (`data` vs `renderers` vs `main`).
- Prefer adding behavior in `js/main.js` by feature blocks rather than mixing with data.
- If changing breakpoints, update both `css/responsive.css` and viewport constants in `js/main.js`.

## Common Tasks

### Add a Project Card

1. Open `js/data.js`.
2. Add a new object to the `projects` array with:
  - `title`
  - `summary`
  - `tags` (array of strings)
  - `link` (optional)
  - `liveLink` (optional)
3. Reload the page. Cards render automatically via `js/renderers.js`.

### Update Timeline / Experience

1. Open `js/data.js`.
2. Edit the relevant object in the `experiences` array (`date`, `role`, `place`, `blurb`).
3. Reload and verify in the timeline section.

### Tune Shooting Stars Performance

1. Open `js/main.js`.
2. In the starfield block, adjust:
  - `targetFps`
  - star density divisor (`densityDivisor`)
  - mobile scroll pause window (`scrollingUntil` duration)
3. Test on tablet/mobile scroll behavior after each change.

### Change Breakpoints Safely

1. Update viewport constants in `js/main.js` (`VIEWPORT_QUERIES`).
2. Update matching media queries in `css/responsive.css`.
3. Verify nav behavior, hero layout, and reveal behavior at each range.

### Update Hero Text

1. Edit text directly in `index.html` for static lines.
2. For typed lines, update `.typewriter` content and timing-related `data-*` attributes in `index.html`.
3. Verify type speed and wrapping on phone and tablet.

## Pre-Release Checklist

Before pushing to production / GitHub Pages:

1. Open the site on desktop, tablet, and phone widths.
2. Verify section visibility:
  - About and below fade at top, then restore on scroll.
  - No cards/timeline entries disappear while scrolling.
3. Verify starfield behavior:
  - Shooting stars run when idle.
  - On tablet/phone, shooter effects pause while actively scrolling and resume after.
4. Check key interactions:
  - Nav smooth scrolling and active link highlighting.
  - Resume modal opens/closes from all buttons.
  - Floating CTA behaves correctly on desktop and mobile.
5. Confirm no 404s in browser console (especially images/icons).
6. If a stale asset is observed, bump the query version on script includes in `index.html`.
7. Push and validate on the live GitHub Pages URL in a private/incognito tab.
