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

| Portfolio purpose | Desktop (1024px+) size / line-height | Below 768px | Family / weight |
| --- | --- | --- | --- |
| Name | 32–40px / 1.25 | 24px / 30px | Display 700 |
| Professional title | 40–52px / 1.12 | 32px / 36px | Display 900 |
| Approved introductory paragraphs | 20px / 30px | 18px / 27px | Text 400 |
| Section headings | 24px / 28px | 22px / 28px | Display 700 |
| Work / role titles | 22px / 28px | 20px / 27px | Display 700 |
| Work descriptions and core skill descriptions | 17px / 28px | 16px / 26px | Text 400 |
| Employers | 16px / 24px | Same | Text 400 |
| Skill and technical category labels | 18px / 26px | Same | Display 700 |
| Dates | 14px / 21px | Same | Text 400 |
| Sidebar and technical proficiency text | 16px / 26px | Same | Text 400 |
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

Name: Adrian Sabellona. Main professional title: Amazon Brand & Marketplace Manager. The first word keeps the orange heading highlight; the approved introduction is unchanged.

Updated September 7, 2026 at the user's request to align the main title with the responsibilities described on the page. The title covers brand strategy, listing optimization, Amazon Ads, and day-to-day Seller Central and Vendor Central management. This is a descriptive professional positioning title, not a claim about a contractual job title. The existing typography and responsive layout are retained.

A 1px navy horizontal rule under the name separates it from the professional title. It spans the identity column, with 12px padding above the rule and 12px margin below it.

## Content capitalization

Use sentence case for prose and section / skill labels. Capitalize sentence openings, proper names, languages, months, and acronyms such as Amazon, PPC, SEO, ROI, AI, A/B, and A+. Use title case for role titles and named projects. Keep product and software names in their recognizable brand styling. Email addresses, links, and code attributes are not case-corrected as prose.


## Tools & Home Improvement experience, updated September 7, 2026

The first work-experience item is labeled Hitrons Inc. | Tools & Home Improvement, with the descriptive role heading Amazon Brand & Marketplace Manager and the confirmed employment period May through August 2026. At the user's request, show the company or organization name alongside its main category, while omitting the brand name; use "the brand" in the description and the neutral anchor tools-home-improvement. The first bullet retains the exact start date May 1, 2026. The heading describes the work; it is not a verified contractual title.

The entry emphasizes sole day-to-day ownership of Amazon Vendor Central and Seller Central, brand marketing strategy, listing optimization, Amazon Ads, cross-functional account operations, and Menards product listing management through Syndigo. Its first bullet records the user-reported $410K gross Amazon revenue milestone for May 2026, the first month of the engagement and the highest monthly total outside Prime Day months in the brand's ten-year history. The second bullet records the user-reported account-low monthly ACoS of 16% in June 2026 during his tenure as sole Amazon Ads manager. The revenue figure is a brand total, not incremental revenue or profit. Neither historical comparison has been independently audited; no prior ACoS baseline or quantified reduction is claimed.

The existing work-experience markup and styling are reused. Only short phrases receive semantic bold emphasis. The introduction, previous experience entries, layout, and CSS are unchanged. Supporting private research and the reusable portfolio copy are maintained in the Windows project notes. Private career evidence retains the actual employer and brand names; public page copy shows the employer and category, without the brand name.


## Supporting-content readability, September 7, 2026

This pass improves the experience, core skills, technical proficiencies, and sidebar while preserving the existing wording, section order, hero typography, palette, and full-width page. At 768–1023px, work and skill descriptions use the 16px / 26px scale and role titles use 20px / 27px; the existing tablet identity remains 32px for the name and 40px for the title.

- Keep supporting content stacked below 1024px so tablet sidebars do not become narrow text columns. At 1024px and above, retain the sidebar/main split of 30% / 70%.
- Give both supporting columns fluid padding of `clamp(1.5rem, 3vw, 3rem)`. The sidebar has a neutral bottom border when stacked and a right border on desktop.
- Constrain each main reading section to `max-width: 78ch`, leaving the overall page full width. This is a typographic width unit, not a literal character-count limit. Separate major main sections by 3rem.
- Style the actual `ul.work-description` element with disc markers and 1.25rem left padding. Leave 1rem between its bullets. Separate successive roles with a 1px neutral rule, 2rem margin above the rule, and 2rem padding below it. Dates have 1rem space before the description.
- Display core skill labels on their own line at 18px / 26px, with 0.375rem before the description and 1.5rem between skills. The list retains its content order and uses no visual bullets.
- Display technical category labels on their own line. Use one grid column below 1280px and two columns at 1280px and above, with a 1.25rem row gap and 2rem column gap. The items follow DOM order across each grid row.
- Increase sidebar text and technical descriptions from 14px / 21px to 16px / 26px. Contact rows use a 24px line height; links may wrap at narrow widths and have 4px vertical padding. Languages and interests have 0.75rem between entries.
- Convert the two pre-existing Markdown emphasis markers into semantic HTML strong elements without changing the underlying wording or numerical claims.
- Limit the hero contact button to its available width so it can wrap on narrow phones.

Verified visual rendering of the experience and skills sections at desktop, tablet, and 390px mobile widths, plus the 320px hero. Checked document and title overflow, contact-button fit, and responsive type/grid rules at 320, 390, 768, 1024, 1280, and 1920px; no horizontal overflow was found. Confirmed that the hero HTML and all page wording were preserved, apart from converting literal emphasis markers to HTML. The local preview stylesheet version is `e91b248150`. These changes are not yet committed or published.


## Hero background image, September 7, 2026

The user selected a hero background image as the only next change inspired by the supplied Adobe screenshot. Keep the existing hero copy, grid, text sizes, and spacing. No category cards or new sections have been added.

Use the local decorative photograph `docs/images/amazon-seller-central-reference-hero.png`, preloaded in the HTML. Its generation prompt and provenance are in [Hero image notes](amazon-hero-image.md). It is an original generated scene, not a photo of Adrian's office or a client account. A navy background remains if the image fails to load.

Use `background-size: cover`, no repeat, and `background-position: center 20%` on desktop. Apply a 90-degree gradient of RGB 22,29,38 from 82% to 86% opacity. Below 1024px, use `background-position: 65% center` and a vertical gradient from 82% to 88% opacity. No fixed background or motion.

Inside the hero only, the name, title, introduction, and strong emphasis become white. The large bold word Amazon uses #FF6200. The name divider is white at 45% opacity and the button's focus outline is white. Keep the orange button fill and charcoal label. These scoped rules supersede the earlier light-hero text colors; supporting sections keep their existing palette. CSS preview version: `041d8bd544`.

Contrast against a pure white source-image pixel under the weakest overlay is 9.58:1 for white text and 3.19:1 for the large orange heading. This conservative bound meets the normal-text and large-text thresholds respectively. Keep at least this contrast when changing the image or overlay.


Hero image refinement: the user supplied an actual modern Seller Central screenshot. Both displays now follow that reference, including the Actions sidebar, summary tabs, Sales, Orders, and Advertising modules. Both merchant selectors say Demo account, and account-specific values use neutral placeholders. Keep Amazon platform branding but never reproduce the supplied screenshot’s merchant identity. The raw screenshot is not a website asset. This is a generated composite, not a pixel-exact or live account display. The desktop crop remains center 20%; the room, hero layout, page copy, and overlay are preserved. Earlier images remain as unused prior versions.


## Transparent top bar, September 7, 2026

The contact navigation is fixed at the top and transparent while any of the hero remains in view. The hero photograph extends behind it; measured navigation height reserves space above the existing hero content, including when the mobile hook and button wrap. Once the hero has fully scrolled out of view, the bar gains the existing navy background. Scrolling back restores transparency. The 150ms background transition respects reduced motion. This supersedes the separate navy strip above the hero. Implemented in amazonresume.css and scripts/amazon.js; local preview only.
