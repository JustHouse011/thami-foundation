# Shared animated prismatic edges

## Implementation

The existing `rainbow-border` system is extended in `src/styles/prismatic-edge.css`; its competing old pseudo-element definitions and button shine were removed from `globals.css`. The existing spectrum token is reused. There is one family of selectors, retaining `.pill`, `.circle-arrow` and `.circle-outline` compatibility.

`src/components/ui/BorderLight.tsx` adds optional, aria-hidden, absolutely positioned glow and shine layers. It does not wrap or replace existing components. `EditorialImage` has an opt-in `edge` prop; it defaults off. No assets, page layouts, dimensions, typography, radii or content were changed. Donate is consistently black as requested, including the previously ivory Feather header and Impact Donate control. Other existing surface fills remain intact.

## Intensity assignments

| Level | Utility | Existing recipients |
| --- | --- | --- |
| 1 / Standard | `rainbow-border` (also existing plain `pill`, `circle-arrow`, `circle-outline`) | Secondary pills throughout the site; Home story and ecosystem circular controls; shared Home/Programmes participation boxes; About's existing portrait placeholder panel; local enquiry/pledge confirmation panel; Impact Partner/Volunteer controls. |
| 2 / Feature | `rainbow-border--feature` + `BorderLight` | Four Home ecosystem cards; Feather recognition and fashion-detail frames only. |
| 3 / Primary | `rainbow-border--primary` + `BorderLight shine` | Header Donate; global footer Be part of it; About and Programmes Get involved; Impact Donate; Feather Get involved and Support the Foundation. |

`rainbow-border--glow` remains a compatibility alias for the feature level. Text-only Donate links remain text links; they are not turned into new boxes. Header, footer, sections, layout grids, text wrappers and all other photographs remain unoutlined. Programme storytelling is editorial rather than boxed, so the shared participation boxes and CTA receive the effect.

## Motion and layering

- `::before`: 1px conic-spectrum perimeter; registered `--rainbow-angle` travels continuously from 0 to 360 degrees over 8 seconds.
- `::after`: independently masked short white reflection; registered `--glimmer-angle` travels over 3.6 seconds. Same perimeter, not a sweep across the content.
- Both use standard `mask-composite: exclude` and WebKit `xor` masking. Insets and border-radius inherit existing geometry. Decorative layers cannot intercept pointer events.
- Feature/primary `BorderLight` blurs an already hollow spectrum rim, behind the host surface, at 7px and .10/.12 opacity. Standard level has no blurred layer. Mobile blur is 4px with 65% of the desktop glow opacity.
- Primary-only shine is clipped inside its own decorative layer. The button host is not clipped, preserving external glow and focus outlines. Hover changes intensity, never the animation name or duration; existing tactile transformations remain in place.
- The existing large 52px heart system is unchanged. No JS animation loops, canvas or particle libraries were added.

## Motion preference and compatibility

Reduced motion freezes spectrum/glimmer and removes shine movement while keeping the static spectrum perimeter and all controls. The existing heart system also respects that preference.

One capability check at startup selects a static spectrum if CSS property registration is unavailable, avoiding stepped custom-property animation. Without masking support, the pseudo-element uses a static gradient border-image; component content and surface remain intact. Old engines' border-image rendering may not follow rounded corners as precisely as the masked modern-browser path.

## QA

Tests in `tests/prismatic-edge.spec.ts` check all five routes at 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. Geometry is compared against the same page with the effect stylesheet and decorative layers disabled. Tests cover dimensions, typography/padding/radius preservation, overflow, reduced motion, independently changing spectrum/glimmer angles, hover continuity, clean card surfaces, focus, donation dialog activation, large hearts and unregistered-property fallback.

Visual evidence: `docs/prismatic-home-desktop.png`, `docs/prismatic-card-frame-a.png`, `docs/prismatic-card-frame-b.png`, and `docs/prismatic-feather-feature.png`. The two card captures show different colour positions around the same perimeter.

Final build and regression results are appended after completion. No standalone `lint` or `typecheck` script exists; the production build runs TypeScript before Vite.

## Final results

- `npm run build`: passed; TypeScript and production bundling passed.
- `npx playwright test --workers=2`: all 56 tests passed, including the 40 route/viewport geometry combinations, independent spectrum/glimmer movement, static fallback, reduced motion, keyboard/touch, navigation, donation/enquiry dialogs and the existing page regressions.
- No standalone lint/typecheck scripts are configured; TypeScript was validated by the build.
- Desktop card captures and the Feather feature frame were visually inspected. Existing responsive screenshots were refreshed by the regression suite.
