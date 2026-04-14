# Marq Lott | Personal Website

This is the personal website of Marq Lott, built as a single-page application with a cartoon-inspired, playful design. It features:

- Responsive layout with custom hero, about, focus, projects, stack, timeline, and contact sections
- Playful, cartoon-like UI elements and color palette
- Dynamic site visit counter (using a public API with local fallback)
- Animated backgrounds and interactive elements
- Modular CSS for easy customization
- Professional, amend-and-force-push git workflow for clean commit history

---

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

## Feature Inventory

- Sticky top navigation with section links and active-section highlighting.
- Desktop floating quick-action menu (LinkedIn, GitHub, email, text, resume).
- Mobile/tablet floating action drawer with swipe/toggle behavior.
- Hero typewriter intro with staged line timing.
- Hero role chip with custom styling and badge icon.
- Dynamic project cards rendered from data.
- Dynamic timeline rendered from data.
- Resume modal with open/close controls from multiple entry points.
- Starfield background with shooting stars and easter-egg sprites.
- Device-aware performance behavior (reveal strategy and starfield tuning by viewport).

## Menus and Interaction Features

- Top nav menu:
  - File touchpoints: `index.html`, `css/base.css`, `js/main.js`
  - Responsibilities: anchor navigation, smooth scroll alignment, active state highlighting.
- Floating quick actions:
  - File touchpoints: `index.html`, `css/base.css`, `css/responsive.css`, `js/main.js`
  - Responsibilities: desktop persistent visibility after hero CTA, mobile drawer open/close and swipe controls.
- Resume modal:
  - File touchpoints: `index.html`, `css/components.css`, `js/main.js`
  - Responsibilities: open from hero/contact/floating button, close via button, backdrop, or Escape key.

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

### Update Menus or Navigation

1. For top nav labels/icons/links, edit `index.html` nav markup.
2. For top nav spacing and visuals, edit `css/base.css`.
3. For smooth scrolling and active link behavior, edit the nav blocks in `js/main.js`.
4. For mobile floating menu behavior, edit the floating CTA block in `js/main.js` and matching styles in `css/responsive.css`.

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

### Update Behavior by Device Type

When making behavior changes, apply them intentionally per device profile:

- Desktop (`>= 1200px`)
  - Keep richer scroll/reveal behavior and full interaction fidelity.
  - Validate active-section highlighting and floating quick-action timing.

- Tablet (`721px - 1199px`)
  - Prioritize scroll smoothness over heavy animation.
  - Verify section visibility on first pass and top-of-page fade behavior.
  - Verify shooter pause/resume during and after scroll.

- Phone (`<= 720px`)
  - Keep motion simpler and interaction targets larger.
  - Validate floating CTA drawer ergonomics and hero text wrapping.
  - Verify no clipped timeline cards or missing project tiles.

Recommended flow for any interaction change:

1. Implement in `js/main.js` behind viewport-aware branches where needed.
2. Mirror style-level differences in `css/responsive.css`.
3. Test all three ranges before merging.

### Update Hero Text

1. Edit text directly in `index.html` for static lines.
2. For typed lines, update `.typewriter` content and timing-related `data-*` attributes in `index.html`.
3. Verify type speed and wrapping on phone and tablet.

## Project Grid Features

- **View More Toggle:**
  - By default, only the first 4 projects are shown. Click 'View More' to reveal all projects, or 'View Less' to collapse.
  - The two EcoCAR projects are always shown first, followed by the two most impressive public projects, with the rest in original order.
  - Fully responsive and accessible across desktop, tablet, and mobile.
- **Project Ordering:**
  - To change which projects appear first, update the order in `js/data.js`.
  - Internal/private projects are listed but do not link to source code for privacy.
- **Accessibility:**
  - The toggle button uses `aria-expanded` and `aria-controls` for screen readers.

## Git Workflow
- All changes are committed using amend and force-push for a clean, linear history.
- Internal/production projects (e.g., EcoCAR) are described without exposing confidential details.

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
