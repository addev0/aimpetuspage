# Amazon portfolio typography and components

## Scope

Reference: [Sell on Amazon](https://sell.amazon.com/?ref_=sdus_soa_home_n). The font families, source font files, weights, colors, and desktop primary-button rules were inspected on September 6, 2026. This guide records the reference and explicitly distinguishes the smaller scale used for a personal professional profile.

Keep the current full-width, two-column content layout. The approved introduction, name, and title remain the content source. Make subsequent layout or wording changes individually for review.

See [Color guide](amazon-colors.md) for palette tokens and verified contrast.

## Exact font families

The reference uses two Amazon Ember Modern families:

| Purpose | Reference family alias | Portfolio family name |
| --- | --- | --- |
| Headings, identity, buttons | `AEmbModern` | `Amazon Ember Modern Display` |
| Body paragraphs, metadata, content links | `AEmb` | `Amazon Ember Modern Text` |

The family names in the portfolio are descriptive local aliases for the same font files. Both fall back to `Helvetica, Arial, sans-serif`.

Observed weight mapping, reproduced in the CSS:

| CSS weight | File variant |
| --- | --- |
| 400 | Regular |
| 700 | Medium |
| 900 | Bold |

The filenames are `staticAsset-Sell-EmberModernDisplay-{Regular,Medium,Bold}.woff2` and `staticAsset-Sell-EmberModernText-{Regular,Medium,Bold}.woff2`, hosted under `https://d3216uwaav9lg7.cloudfront.net/`. The page references these public font URLs directly. `font-display: swap` keeps text readable while they load; if the upstream URLs become unavailable the fallback fonts are used. No copy of Amazon’s complete site stylesheet is imported.

## Reference type scale

Measurements below come from rendered desktop elements or the page’s contextual stylesheet rules. The tag name alone does not determine the visual size on the reference.

| Context on reference | Size / line-height | Weight / family |
| --- | --- | --- |
| Main marketing headline: Sell more with Amazon | 92px / 83px | 900 Display |
| Large marketing section headline | 52px / 47px | 900 Display |
| Compact section heading (base stylesheet rule) | 32px / 32px | Display |
| Subheading / question | 28px / 28px | 700 Display |
| Feature heading | 24px / 24px | 700 Display |
| Small heading (base stylesheet rule) | 20px / 20px | Display |
| Lead body paragraph | 18px / 27px | 400 Text |
| Standard paragraph / list | 16px / 24px | 400 Text |
| Small supporting text | 14px / 21px | 400 Text |
| Fine print | 12px / 18px | 400 Text |
| Hero action button | 24px / 24px | 700 Display |
| Inline content link | 16px / 24px | 700 Text |

## Applied scale by purpose

The personal title uses a compact heading size. The reference’s 92px marketing headline is documented, not applied to the profile. Some heading line-heights are slightly increased so long role names wrap comfortably.

| Portfolio purpose | Desktop size / line-height | Below 768px | Family / weight |
| --- | --- | --- | --- |
| Name | 32–40px / 1.25 | 24px / 30px | Display 700 |
| Professional title | 40–52px / 1.12 | 32px / 36px | Display 900 |
| Approved introductory paragraphs | 20px / 30px | 18px / 27px | Text 400 |
| Section headings | 24px / 28px | 22px / 28px | Display 700 |
| Work / role titles | 20px / 24px | Same | Display 700 |
| Employer and main content | 16px / 24px | Same | Text 400 |
| Dates and compact sidebar text | 14px / 21px | Same | Text 400 |
| Primary contact button | 24px / 24px | 20px / 24px | Display 700 |

## Highlighting text

Use orange sparingly on a short phrase in a large heading, as the reference does with “Sell more.” The portfolio applies it to “Amazon” in the professional title:

```html
<span class="text-highlight-heading">Amazon</span>
```

Use bold charcoal inside body text rather than orange. Current example:

```html
<strong class="text-emphasis">sustainable, profitable growth</strong>
```

Do not bold entire paragraphs. Keep approved wording unchanged when adding emphasis. Use semantic `strong` for meaningful emphasis; avoid literal Markdown asterisks in HTML.

## Primary button

Reproduces the reference hero-action styling on desktop:

- Font: Display, 24px, weight 700, 24px line-height.
- Padding: 18px vertically, 34px horizontally.
- Rounded pill: 36px border radius.
- Fill and 2px border: `#FF6200`; text: `#161D26`.
- Hover fill / border: `#F55600`; shadow: `0 4px 8px -2px rgba(22, 30, 39, 0.1)`.
- Visible keyboard focus: 5px navy outline with 5px offset. This uses the reference’s navy focus option with a consistent offset for this page.
- Small-screen adaptation: 20px text and 14px by 28px padding.
- Reduced-motion preference disables transitions.

The existing label “Discuss your project”, arrow, and email destination remain in place. The button is an anchor because it opens an email composition; checking it does not require sending an email.

## Top bar and navy accents

The top bar is now a semantic contact navigation area with a minimum height of 72px. It shows “What’s next for your Amazon business?” beside the “Let’s talk Amazon” email button. On narrow screens its contents wrap and center. The navigation is visible to assistive technology.

The compact contact button uses Display 700 at 18px / 24px (16px on mobile), 8px by 20px padding, a 28px radius, and the same orange fill / hover colors as the main CTA. Its white focus outline contrasts with the navy bar.

Navy also appears in the name, section headings, role headings, and section divider lines. The sidebar uses pale navy to provide a contrasting reading surface while the main content remains white.

## Verification and maintenance

- Checked computed text styles and the layout at desktop width and a 390px mobile viewport.
- Checked the current preview for font-loading errors and horizontal overflow.
- Palette contrast pairs are recorded in the color guide.
- Update the stylesheet hash in the HTML link when changing CSS so previews display the latest version.
- `docs/amazon/resume.html` retains its separate legacy inline styling.

## Split hero layout

At 1024px and above, the name and professional title occupy the left column. The approved introduction and email action occupy the right column. The columns are approximately equal and vertically centered, with a fluid 48–112px gap.

Below 1024px the identity appears above the introduction. At 768–1023px, the name is 32px and title 40px; smaller sizes below 768px are listed in the table. The name remains slightly smaller than the title. The top bar and all content below the hero keep their existing layout.

## Current identity copy

Name: Adrian Sabellona. Main professional title: Amazon Expert | Specialist. The first word keeps the orange heading highlight; the approved introduction is unchanged.

A 1px navy horizontal rule under the name separates it from the professional title. It spans the identity column, with 12px padding above the rule and 12px margin below it.

## Content capitalization

Use sentence case for prose and section / skill labels. Capitalize sentence openings, proper names, languages, months, and acronyms such as Amazon, PPC, SEO, ROI, AI, A/B, and A+. Use title case for role titles and named projects. Keep product and software names in their recognizable brand styling. Email addresses, links, and code attributes are not case-corrected as prose.
