# Amazon portfolio color guide

## Direction and reference

Primary reference: the user-selected [Sell on Amazon homepage](https://sell.amazon.com/?ref_=sdus_soa_home_n), inspected in Chrome on September 6, 2026. The page uses white surfaces, warm gray, charcoal and slate text, and bright orange actions. Additional navy accents and a pale navy sidebar were requested for Adrian’s portfolio.

The exact font, text hierarchy, highlighting, and button specifications are in [Amazon style guide](amazon-style-guide.md).

## Palette

CSS custom properties in `docs/styles/amazonresume.css` are the source of truth.

| Token | Hex | Purpose |
| --- | --- | --- |
| `--color-navy` | `#232F3E` | Top bar, name, section / role headings, divider lines, and focus treatment. |
| `--color-sidebar` | `#EEF2F6` | Pale navy sidebar surface, added at the user’s request. |
| `--color-highlight` | `#F55600` | Orange emphasis on large, bold headings only; also the reference button hover color. |
| `--color-surface` | `#FFFFFF` | White page, introduction, and main reading area. |
| `--color-surface-muted` | `#F5F3EF` | Warm-gray supporting surface available for future additions. |
| `--color-heading` | `#161D26` | Charcoal main title, body emphasis, and contact button label. |
| `--color-text` | `#232F3E` | Slate body text and introduction. |
| `--color-muted` | `#52606D` | Dates, employers, and supplementary text. |
| `--color-border` | `#D5D9D9` | Decorative neutral sidebar border. |
| `--color-link` | `#161D26` | Contact links on light surfaces. |
| `--color-accent` | `#FF6200` | Primary contact button fill and border. |
| `--color-accent-hover` | `#F55600` | Contact button hover fill and border, matching the reference. |
| `--color-focus` | `#232F3E` | High-contrast keyboard focus outline. |

## Usage

- Use white as the dominant reading surface and pale navy for the sidebar.
- Use navy for the contact top bar, identity text, section headings, and section dividers.
- Use orange for the primary action and a short phrase in large, bold heading text.
- Use dark bold text to emphasize phrases inside normal body copy. Orange body text on white fails the normal-text contrast threshold.
- Use charcoal labels on orange buttons. White labels do not meet the normal-text target for this orange.
- Keep focus outlines visible and use underlines on link hover.
- Decorative separators are not relied on to identify interactive controls or states.
- Update tokens centrally and recheck contrast when changing a foreground/background pairing.

## Verified contrast

Calculated using WCAG sRGB relative luminance. The orange heading highlight is 28px or larger and bold, so it uses the large-text threshold. All other listed pairs meet the normal-text threshold. This is a pairing check, not a full accessibility audit.

| Pairing | Foreground / background | Contrast | Required |
| --- | --- | --- | --- |
| Main title / body emphasis | `#161D26` / `#FFFFFF` | 16.96:1 | 4.5:1 |
| Introduction / main text | `#232F3E` / `#FFFFFF` | 13.57:1 | 4.5:1 |
| Sidebar text | `#232F3E` / `#EEF2F6` | 12.06:1 | 4.5:1 |
| Secondary text | `#52606D` / `#FFFFFF` | 6.46:1 | 4.5:1 |
| Secondary sidebar text | `#52606D` / `#EEF2F6` | 5.74:1 | 4.5:1 |
| Name and section headings | `#232F3E` / `#FFFFFF` | 13.57:1 | 4.5:1 |
| Sidebar headings | `#232F3E` / `#EEF2F6` | 12.06:1 | 4.5:1 |
| Contact links | `#161D26` / `#EEF2F6` | 15.08:1 | 4.5:1 |
| Primary button label | `#161D26` / `#FF6200` | 5.65:1 | 4.5:1 |
| Hover button label | `#161D26` / `#F55600` | 5.02:1 | 4.5:1 |
| Orange heading highlight (28px+ bold) | `#F55600` / `#FFFFFF` | 3.38:1 | 3:1 |

## What was observed vs adapted

Observed on the reference: heading `#161D26`, supporting text `#232F3E`, orange button `#FF6200`, orange highlight and button hover `#F55600`, warm gray `#F5F3EF`, and white reading surfaces. The navy sidebar tint, muted text, and border gray are companion colors selected for this portfolio. No change in conversion has been measured.

Sources: [reference page](https://sell.amazon.com/?ref_=sdus_soa_home_n), [reference stylesheet](https://d3216uwaav9lg7.cloudfront.net/assets-Sell.css), [WCAG contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).


## Photographic hero exception, September 7, 2026

The hero now uses a decorative workspace image over navy with a dark overlay. In this area, name/title/intro/body emphasis are white, the orange word Amazon is #FF6200, and the name divider is white at 45% opacity. The orange contact button keeps its dark label and has a white focus outline. This supersedes the earlier white-hero pairings; all supporting-section colors stay the same.

The weakest overlay is 82% of RGB 22,29,38. Even over a white source-image pixel, calculated contrast is 9.58:1 for white text and 3.19:1 for the large bold orange heading. See [Hero image notes](amazon-hero-image.md) for the locally stored asset and final generation prompt.


Certified label exception: the user-supplied pill reference introduces --color-certified (#4B850B), used only for the Certified badge and inset ribbon details. Badge text and the certification ribbon use white.


Hero background lightening, latest September 7, 2026: reduce dark overlay opacity by 5% relative to the previous values. Desktop changes from 82–86% to 77.9–81.7%; tablet/mobile from 82–88% to 77.9–83.6%. Preserve the overlay color, photograph, crop, typography, and layout. Conservative contrast over a pure-white image pixel at the weakest overlay is 8.27:1 for white text and 3.10:1 for the large teal Certified label. Stylesheet version: 63aaff7221. Local preview only; not committed or published.


Subtle introduction background, latest September 7, 2026: add a translucent existing heading-color surface at 28% opacity behind both introductory paragraphs, beginning Since 2015. A decorative pseudo-element extends 20px vertically / 24px horizontally beyond the text container (16px on mobile), with 12px rounded corners, no border, shadow, or blur. Keep text fully opaque and preserve paragraph positioning, wrapping, wording, and spacing. Limit the container to the existing 620px paragraph width. The photograph remains visible through the surface. Stylesheet version: a2670e74a7. Local preview only; not committed or published.
