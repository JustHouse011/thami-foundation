# Feather Awards implementation and photography audit

Route: `/feather-awards` (also direct-loadable through existing Vite/Vercel SPA routing).

## Repository audit

Retained React 19, TypeScript, React Router, Framer Motion, Manrope, global tokens, container/grid conventions, shared Header, Footer, Dialog, SiteOverlay, Reveal, SectionLabel, pill/text-link styles and rainbow borders. There were no separate routes/layouts directories and no existing EditorialImage, RainbowIcon or HeartBurst components. Added these as reusable global components. Updated the existing Footer to the requested full-width black editorial design; no Feather-specific footer or button system.

## Image audit — 2026-10-01

Existing `public/images/feather-awards.webp` was FOUND, but `docs/image-prompts.md` identifies it as generated artwork, not authentic event photography. Other existing generated programme/festival imagery is likewise not repurposed as Feather Awards documentation. No rights-cleared Feather Awards event photographs were found. No publisher photographs were downloaded or hotlinked.

Every slot below renders the shared EditorialImage fallback, with no nonexistent file reference or empty binary:

| Expected filename | Status | Intended content |
| --- | --- | --- |
| feather-hero.jpg | NOT FOUND | Arrival / spectacular event moment |
| feather-intro.jpg | NOT FOUND | Candid community interaction |
| feather-red-carpet-01.jpg | NOT FOUND | Full-length fashion look |
| feather-red-carpet-02.jpg | NOT FOUND | Guests interacting |
| feather-red-carpet-detail.jpg | NOT FOUND | Styling detail |
| feather-stage-wide.jpg | NOT FOUND | Stage / performer / audience |
| feather-stage-close.jpg | NOT FOUND | Performer close-up |
| feather-recognition.jpg | NOT FOUND | Authentic award recognition |
| feather-culture.jpg | NOT FOUND | Cultural interaction |
| feather-fashion-01.jpg | NOT FOUND | Full-body fashion portrait |
| feather-fashion-02.jpg | NOT FOUND | Close portrait |
| feather-fashion-detail.jpg | NOT FOUND | Textile / accessory detail |
| feather-people.jpg | NOT FOUND | Community / guests |
| feather-history.jpg | NOT FOUND | Authentic archive |
| feather-backstage.jpg | NOT FOUND | Preparation / human moment |
| feather-community.jpg | NOT FOUND | Audience / friends / organisers |
| feather-celebration-wide.jpg | NOT FOUND | Shared joy / dancing |
| feather-cta.jpg | NOT FOUND | Closing community moment |

## Local asset pipeline / client TODO

Supply approved originals to `src/assets/images/feather-awards/` using the filename stems above. The manifest accepts jpg, jpeg, webp, avif or png and imports real files only, at build time. Use one file per stem. Record source URL or delivery reference, copyright owner, photographer credit, licence/permission evidence, actual event and year, and any restrictions here for each supplied asset. Optimize the image before adding it and rebuild after delivery.

The manifest's alt text describes intended subjects and must be checked against each delivered image. Inspect every image and set its object-position; ensure the hero's upper typography and joy overlay have appropriate negative space. If necessary change responsive crops/composition to protect faces. The current photo-crop QA is pending because no actual photographs exist. Do not mark those checks complete on the basis of placeholders. Hero is eager/high priority; other slots are lazy; all decode asynchronously and reserve aspect ratios. Load failures fall back without collapsing the layout.

## Content and external links

Uses the user-supplied qualitative copy about LGBTQIA+ visibility, expression, culture, performance, recognition and community in South Africa. The history section uses conceptual chapters, not an invented dated timeline. No named winners, categories, quotes, metrics, partners, venues, dates, ticket prices or claims about current editions were added.

Attempted to open https://www.featherawards.co.za/ on 2026-10-01; the browser tool could not access it. Search results identify this domain in published Feather Awards material, but current active availability could not be verified. Therefore no external or Feather social URLs were added. Reverify before publishing those links. No publisher material is reproduced. Research reference: https://vivanationradio.net/news-view/2041220/a-soulful-call-to-pause-look-and-listen-to-your-heart-at-the-feather-awards (domain reference only; no edition details used).

Closing CTAs use the existing Foundation participation section, programmes route and donation dialog. Existing social dialogs remain explicit prelaunch placeholders; donation saves a local pledge and does not take payment. Live social links, donations and enquiry delivery remain existing site-level client integration tasks.

## Changed files

Created: `src/pages/FeatherAwards.tsx`, `src/styles/feather-awards.css`, `src/data/featherAwards.ts`, `src/components/ui/EditorialImage.tsx`, `src/components/ui/RainbowIcon.tsx`, `src/components/ui/HeartBurst.tsx`, `src/assets/images/feather-awards/README.md`, `tests/feather-awards.spec.ts`, this report and responsive QA screenshots.

Modified: `src/App.tsx`, `src/data/content.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/RouteEffects.tsx`, `src/components/ui/Dialog.tsx`, `src/components/ui/SiteOverlay.tsx`, `src/components/sections/Ecosystem.tsx`, `src/styles/globals.css`, `tests/home.spec.ts` (search now opens the Feather route).

Header navigation replaces the Stories slot with Feather Awards to avoid adding crowding; Stories remains in the footer. The home ecosystem action and search result open the new route. No fabricated external destinations. Reduced motion disables image scale, reveal translation, moving spectrum, glimmer, shine and heart particles. Pink hearts use actual pointer coordinates or element centre on keyboard activation; 4 for ordinary actions and 7 for pill CTAs.

## Validation

Results recorded below after build and browser checks. There are no `lint` or standalone `typecheck` scripts in package.json; `npm run build` runs `tsc -b` before Vite.

### Completed checks

- Production build and TypeScript: passed (final icon correction rebuild recorded at completion).
- Browser regression run: 44/45 passed initially. The single failure was the old search test's unscoped selector matching the new header, footer and dialog links; it was scoped to the search dialog and passed on rerun.
- All 45 regression scenarios now pass across the full run and focused rerun. Additional touch/visual test passed: 46 distinct passing scenarios total.
- Feather Awards: all eight requested widths (375, 390, 430, 768, 1024, 1280, 1440, 1920), 15 sections, one H1, 18 intentional placeholders, no image requests for missing files, no console page errors, no HTTP errors or horizontal overflow in the tested route.
- Navigation, active states, direct load, search, skip/anchor destinations, footer routes, donation dialog, existing social dialog, keyboard focus, menu close, reduced motion, heart counts and touch taps checked.
- Desktop and mobile hero and desktop footer screenshots visually inspected. Corrected SVG gradient coordinates so horizontal menu lines render visibly. Footer navigation spacing checked (32px desktop gap).
- `lint` and standalone `typecheck`: no scripts configured. TypeScript is included in the production build.
- Real photograph dimensions, face crops and event authenticity cannot be validated until approved photographs are supplied. This is the remaining page-content dependency.

Additional created test: `tests/feather-visual.spec.ts`. Screenshots: `docs/feather-awards-{width}.jpg`, `docs/feather-awards-mobile-hero.png`, `docs/feather-awards-desktop-hero.png`, and `docs/feather-awards-desktop-footer.png`. Existing page screenshots were refreshed by their regression tests.
