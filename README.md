# Thami Dish Foundation

Editorial homepage built with React, strict TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide and React Router. Fonts and imagery are hosted locally.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Browser checks

```sh
npx playwright install chromium
npm test
```

Tests start or reuse the development server at http://localhost:5174 (see playwright.config.ts). They cover all eight requested widths, image loading, overflow, JavaScript errors, keyboard focus, menu dismissal, search, platform details, story chapters, local enquiry downloads and donation pledges. Screenshots are written to docs/preview-*.png.

## Content and architecture

- `src/data/content.ts`: navigation, impact statistics, imagery, platforms and involvement options.
- `src/components/sections`: the six homepage sections.
- `src/components/layout`: responsive header, menu and footer.
- `src/components/ui`: reusable motion primitives, accessible dialog and interaction flows.
- `src/pages/Home.tsx`: page composition. Add future pages to the routes in `src/App.tsx`.
- `src/styles/globals.css`: design tokens, editorial layout, breakpoints and reduced motion support.
- `public/images`: six compressed original images. Generation prompts and provenance are in `docs/image-prompts.md`.

## Launch configuration

The frontend is complete; the following require organisation-supplied services or approved content:

1. Connect a verified payment provider. Donate currently prepares a local pledge text file and explicitly takes no payment.
2. Connect an enquiry service and official contact details. Participation forms download local drafts, never claim to send them, and do not transmit personal information.
3. Supply verified social account URLs. Social controls currently explain that verified links are pending.
4. Supply an approved story film. The story button currently opens a three-chapter editorial reading experience.
5. Approve the supplied impact figures, quote attribution and platform copy. Generated images are conceptual editorial assets, not photographs of actual beneficiaries/events.
6. Set `VITE_SITE_URL` in `.env.production` to the verified public origin. The build then adds canonical and absolute OpenGraph URL metadata.
7. Configure hosting to serve `index.html` for client routes. A Vercel rewrite is included; no deployment has been performed.

No CMS, analytics, tracking, payment processing or backend is configured. No secrets are needed for local development.


## About page

`/about` extends the homepage design system with eleven editorial sections. Header, footer, labels, buttons and reveal animations are shared; About-specific layout rules live in `src/styles/about.css`.

- `src/data/about.ts` contains the supplied story copy, pillars, methods, leadership biography, timeline and central image configuration.
- `leadership.portrait` is intentionally `null`. Supply an authentic, licensed or Foundation-approved image object (`src`, `alt`, `width`, `height`) to replace the clearly labelled placeholder. No image of Thami was generated.
- Four conceptual editorial images and their smaller responsive variants live in `public/images/about/`. Prompts and provenance are in `docs/about-images.md`.
- The timeline dates and biography come from the supplied brief. No additional milestones, outcomes, quotes or contact details were invented.
- `RouteEffects.tsx` handles route scroll position, focus, homepage fragment destinations and page-specific browser metadata. Canonical and OpenGraph URLs use the configured public origin when available. Static social previews would require prerendering/server metadata if a crawler does not execute JavaScript.
- `tests/about.spec.ts` covers eight viewport widths, direct loading, navigation, metadata, image loading, overflow, menu focus, existing donations and reduced motion.

Run `npm test` for both homepage regression checks and About-page checks.
