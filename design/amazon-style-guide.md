# Amazon portfolio typography and components

## Scope

The current hero specifications are recorded under **Whole-hero layout, September 7, 2026**, with the latest identity changes under **Title arrangement and greeting, latest September 7, 2026** below. That section supersedes earlier incremental identity-positioning history.

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
| Greeting | clamp(30px, 3.2vw, 44px) / 1.25 | 30px / 37.5px | Display 400; Adrian 700 |
| Certified expert | clamp(28px, 2.7vw, 38px) / 1.15 | 28px / 32.2px | Arial 400 |
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

At 1024px and above, the greeting, logo, credential, and primary email action occupy the left column. Both approved introduction paragraphs occupy the right column. The columns use 0.95fr / 1.05fr and are vertically centered, with a fluid 48–112px gap. A minimum height of min(800px, 90svh) gives the hero a deliberate opening presence while allowing content to expand it.

Below 1024px, the identity and primary action appear above the introduction in normal document order. There is no fixed or minimum hero height at these widths. Keep the entire identity on one left edge; use real spacing rather than visual translations or absolute positioning. The top contact bar and supporting content retain their existing behavior.

## Current identity copy

The displayed name is “Adrian Sabellona”, with a thin horizontal divider below it. Place teal “Certified” above the existing white amazon reference wordmark, with white “expert” to the right of the logo lettering. The main heading includes this complete identity; the “Discuss your project” email action follows outside the heading. The greeting uses regular weight with Adrian bold.

The divider has been removed. All wording, image assets, both introductory paragraphs, and contact destinations are retained.

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


## Main title update, September 7, 2026

At the user's request, the hero title is now Certified Amazon Expert, superseding Amazon Brand & Marketplace Manager as the main professional title. Amazon retains the orange emphasis. Work-experience role titles and the introduction remain unchanged. This is user-supplied positioning; no new credential verification was performed. Prepared locally, not committed or published.


Latest title revision: display Certified on the first line and Amazon Expert on the second, following the user's exact wording. Amazon retains orange emphasis. The explicit line break applies at all viewport widths. This supersedes the previous Certified Amazon Expert title. Local change only.


Title spelling corrected by the user: Certified on the first line, Amazon Expert on the second. The explicit line break and orange Amazon emphasis remain. Local change only.


## Certified badge, September 7, 2026

Following the supplied green pill reference, Certified is a rounded green label (#4B850B) with white text and a decorative white certification ribbon with a scalloped seal and two tails. It stays above Amazon Expert; Amazon retains orange emphasis. The badge uses Display 700 at 24–32px, 10px vertical padding, and a 12px bottom gap. The icon is hidden from assistive technology and the badge is a noninteractive part of the heading. The stylesheet cache version is refreshed. Local preview only.


Certification icon refinement: replace the circular check mark with a white ribbon medal, featuring a scalloped seal, green inset ring, and two ribbon tails. Keep the Certified pill and Amazon Expert layout unchanged.


Ribbon sizing: keep the icon layout box at 1em and visually scale the ribbon to 120% from its center. This enlarges only the ribbon inside the original pill dimensions; badge padding, text, and spacing remain unchanged.


Certified badge size refinement: reduce the whole badge by 10%, scaling font size (21.6–28.8px), internal gap, and padding to 90% of their previous values. The em-sized ribbon scales with the text and keeps its centered 120% visual enlargement within its icon box. Preserve the external gap below the badge. Local preview only.


Latest badge sizing: reduce the entire Certified badge by another 10% from its previous size (81% of the original). Font range is 19.44–25.92px; internal gap and padding are also 81% of the original values. Preserve ribbon proportions and external spacing. Local preview only.


Amazon smile addition: a decorative orange curved smile arrow sits directly beneath Amazon in the hero title. The inline SVG scales with the word, reserves 0.4em beneath it, and is hidden from assistive technology. The Certified badge and Expert text retain their styling. Local preview only.


Hero wordmark casing: at the user's request, the title now displays lowercase amazon followed by Expert. Preserve the orange lettering, smile below the word, and Certified badge above. This exception applies only to the hero wordmark. Local preview only.


Reference typography refinement: apply only the supplied reference's bold, closely spaced lettering style to the hero title, using Arial Bold (700), -0.035em tracking, and -0.045em tracking for amazon. Certified retains normal tracking. Preserve the existing text sizes, orange amazon and smile, white Expert, green Certified pill, ribbon, and line arrangement. No reference background, border, teal coloring, or partner wording is applied. Local preview only.


## Seller reference card, latest September 7, 2026

The user clarified that the supplied reference design should be recreated with ads replaced by seller. The hero title now presents amazon seller in white with the smile beneath amazon, followed by teal Verified and white partner on separate lines, within a rounded navy gradient panel and cyan-to-purple border. This replaces the Certified pill, ribbon, and amazon Expert treatment. The name remains above the card; the introduction and supporting content are unchanged. Wording follows the user-requested reference; partnership status was not independently checked. Local preview only.


Latest card wording: retain the complete reference-inspired card and amazon seller wordmark, replacing Verified partner with Certified expert. Certified is teal on the first status line; expert is white below it. Local preview only. This supersedes the previous card status wording.


Latest presentation: remove the seller card background, border, shadow, and internal padding. Show only white amazon seller and its smile, followed by teal Certified and white expert, directly over the existing hero. Preserve the current lettering and line arrangement. Local preview only.


Latest wordmark refinement: remove seller and enlarge the lowercase amazon name and attached smile by 30% (39–62.4px responsive wordmark). Preserve the text-only presentation and Certified expert styling. Local preview only.


Exact reference wordmark: replace font-rendered amazon and the hand-drawn smile with amazon-reference-wordmark.svg. This self-contained SVG embeds the supplied reference, crops to the amazon lettering and smile, and isolates its light pixels with an SVG opacity filter. It preserves the reference shapes without a font approximation. Certified expert remains unchanged. An image-generation extraction was tried and rejected because it changed letter shapes and lacked true transparency. Local preview only.


Latest title arrangement: stack teal Certified, the white reference amazon logo, then white expert. Both text lines share a responsive 36–60px font size; the entire logo including smile is 1.5em tall (50% larger than the text font size). Use a 0.25em gap and left alignment. Preserve the text-only presentation over the hero. Local preview only.


Latest sizing: enlarge the amazon logo another 30%, from 1.5em to 1.95em tall. Certified and expert explicitly inherit the same font size from the title wrapper. Preserve the three-line stack. Local preview only.


Latest label sizing: reduce both Certified and expert to 0.8em (20% smaller), keeping their font sizes equal. The title wrapper scale and 1.95em logo height remain unchanged, so the logo retains its size. Local preview only.


Latest title arrangement: amazon reference logo first, followed by Certified expert together on the next line. This changes only the arrangement; preserve existing logo size, equal 0.8em label sizes, teal Certified, and white expert. Local preview only.


Latest label refinement: Certified expert is 10% smaller than its previous size, changing from 0.8em to 0.72em. Preserve the logo size, position, and colors. Local preview only.


Identity alignment and spacing refinement: increase name padding above the divider to 24px, remove its bottom margin, and use a 28px title margin below the divider. Trim 9 reference pixels of empty space from the logo's left edge so the visible lettering aligns with the name and Certified expert. Logo height and text sizes remain unchanged. Local preview only.


Certification alignment: constrain the logo/title group to its content width and center Certified expert beneath the amazon logo. Keep the group left-aligned with the name and preserve current sizes and divider spacing. Local preview only.


Desktop hero alignment: top-align the identity group and offset the introduction by the name line height, divider padding/border, and title margin. The amazon logo and Since 2015 introduction now start on the same row, with the name above. Preserve the stacked mobile/tablet layout and current title sizing. Local preview only.


Desktop alignment correction: remove the introduction offset and restore its original position. Move only the identity group upward by the name line height plus divider spacing, aligning the logo with the introduction. Use a visual translation so the identity does not change the intro layout. Mobile/tablet remain stacked. This supersedes the earlier introduction-offset rule. Local preview only.


Name refinement: render the name text in an inner span at 90% of its prior font size and translate that text upward by 6px. Preserve the outer name line box so divider, logo, and intro positions remain unchanged. Local preview only.


Divider refinement: retain its original border space but render the visible line 6px higher and at 85% width, aligned to the left. Name, logo, and intro positions remain unchanged. Local preview only.


Latest name refinement: reduce the name text another 10% (0.9em to 0.81em) and move it an additional 5px upward (-6px to -11px). Preserve the surrounding line box and other elements. Local preview only.


Divider proximity: raise the visible line another 20px (bottom: 26px) to sit closer to the name. Preserve name/title positions and divider width. Local preview only.


Latest logo sizing: increase amazon logo height by 10%, from 1.95em to 2.145em, retaining its aspect ratio and centered Certified expert label. Text sizes remain unchanged. Local preview only.


Label position refinement: move Certified expert upward 4px, closer to the logo, preserving its centering and font size. Local preview only.


Identity horizontal refinement: move the entire name, divider, logo, and Certified expert group 2px right, preserving its vertical position and internal spacing. Local preview only.


Latest horizontal refinement: move the complete identity group another 2px right, for a total 4px offset. Local preview only.


Greeting refinement: replace the plain name with “Hi, I’m Adrian Sabellona.” in the existing name text span. Preserve its styling and surrounding title layout. Local preview only.


Greeting and connector: use “Hello, I’m Adrian Sabellona,” followed by a small centered “an” above the amazon logo, leading into Certified expert. The connector is 16px and positioned within the existing gap to preserve logo and intro placement. Local preview only.


Greeting connector revision: replace the small an with “and I’m an” above the amazon logo, keeping its current size and positioning. Local preview only.


Connector alignment: move “and I’m an” into the greeting block, directly below the greeting and aligned left. Move the divider below that connector within the existing name block, preserving logo and intro positions. Local preview only.


Greeting wording: remove the last name so the greeting reads “Hello, I’m Adrian,”. Preserve the connector and layout. Local preview only.


Greeting weight: Hello, I’m and punctuation use regular weight 400; Adrian retains bold weight 700. The connector remains regular weight 400. Preserve sizes and positioning. Local preview only.


## Whole-hero layout, September 7, 2026

The user requested that the whole hero look and behave as a proper hero section without losing content. This is the current layout and supersedes previous translated-name, divider, oversized-logo, and centered-credential adjustments.

- Preserve the full-width photograph, navy overlay, transparent scroll-aware contact bar, white text, teal Certified, and orange contact actions.
- At 1024px and above, use a vertically centered 0.95fr / 1.05fr split and min-height: min(800px, 90svh). Retain the measured top-bar clearance and existing fluid hero padding. The height can grow for content.
- Group the greeting, connector, logo, and credential in one h1 with a 20–24px gap between the greeting block and title block. Follow the heading with the existing primary action, separated by 32px. Keep the button outside the h1.
- Align greeting, connector, logo, credential, and primary action on the same left edge. Remove the decorative divider and accumulated absolute positions / translations.
- Greeting: clamp(30px, 3.2vw, 44px), Display 400, 1.25 line-height; Adrian remains 700. Connector: Text 400 at 16px / 24px, separated by 8px.
- Original reference wordmark: width clamp(228px, 27vw, 340px), max-width 100%, automatic height. Preserve the exact asset and its aspect ratio.
- Certified expert: Arial 400 at clamp(28px, 2.7vw, 38px), 1.15 line-height, -0.025em tracking. Use a 12–14px gap below the logo. Certified remains #12AEC4; expert uses the existing white surface token.
- Both complete introductory paragraphs remain on the right, with a 620px maximum line width, the existing 20px / 30px desktop and 18px / 27px mobile type, and the existing paragraph separation.
- Below 1024px, stack identity/action then introduction with the existing 40px gap. Preserve natural content height so the entire introduction remains visible without clipping.

Verified rendered layouts at 1440px, 768px, and 390px. Automated geometry checks at 320, 390, 768, 1024, 1440, and 1920px found no horizontal overflow, navigation overlap, or clipped action. All text, images, and link destinations match the pre-change page; supporting content is identical. Confirmed the actual Ember font faces load, keyboard focus remains visible, hover color is correct, reduced-motion transitions are disabled, and the contact bar switches background when scrolling past the hero and back. Stylesheet version: c26a5a2709. Prepared locally; not committed or published.


## Title arrangement and greeting, latest September 7, 2026

The latest user request places teal Certified above the white amazon reference logo, with white expert to the right of the logo lettering. This supersedes the earlier logo-above-Certified-expert arrangement. Preserve the existing logo, colors, text scale, hero columns, and action placement. Use a flexible logo/expert row with a 12–16px gap; the logo shrinks proportionally only when needed on narrow screens. Expert stays beside the logo at 320px and 390px.

The user also requested more natural wording. The greeting is now “Hello, I’m Adrian.”; remove “and I’m an” and its unused styles. The title reads independently as Certified Amazon expert. Both introduction paragraphs and all other content and contact links are preserved. No further certification claim or introductory copy has been added.

Desktop, tablet, and mobile rendering reviewed; geometry checks at 320, 390, 768, 1024, 1440, and 1920px pass without horizontal overflow or navigation overlap. Current stylesheet version: a10d498f71. Local preview only; not committed or published.


## Unified amazon expert sizing, latest September 7, 2026

The user requested a 10% smaller amazon logo and expert at a matching visual letter size, so amazon expert reads as one title. Certified stays above it. The nominal logo width is now clamp(205.2px, 24.3vw, 306px), exactly 90% of the previous 228–340px scale. The complete row uses a 190% width relationship, capped at the available column width; its logo occupies 52.631579% and the gap is 2.1%. On narrow screens both words shrink together to preserve the single line.

Expert uses Arial Bold (700), 14.5cqi relative to the row, -0.035em tracking, line-height 1, and -0.24em top margin for optical lowercase baseline alignment with the supplied logo. This matches the logo lettering rather than counting the smile as letter height. The original logo asset, teal Certified, white title, greeting, introduction, and contact actions remain unchanged.

Reviewed desktop, tablet, and 390px mobile rendering; checks from 320px through 1920px found no horizontal overflow or contact-bar overlap. All page text, images, links, and supporting content are preserved. Stylesheet version: 32553b3121. Local preview only; not committed or published.


Certified label refinement, September 7, 2026: increase only Certified to 1.1em (10% larger, responsive 30.8–41.8px) and reduce its gap above the amazon expert row by exactly 2px, to calc(clamp(0.75rem, 1vw, 0.875rem) - 2px). Preserve wordmark sizing, wording, and colors. Stylesheet version: 0e438a6200. Local preview only; not committed or published.


Certified label refinement, latest September 7, 2026: increase Certified another 5% from 1.1em to 1.155em (responsive 32.34–43.89px) and shift only the label visually down 2px using translateY(2px). Retain the previously reduced title gap and existing amazon expert sizing. Stylesheet version: 36efa2f723. Local preview only; not committed or published.


Full name and divider, latest September 7, 2026: replace the greeting with Adrian Sabellona in Display 700 at the existing responsive 30–44px size. Add a 1px white divider at 45% opacity below the name, spanning the heading width, with 16px padding above the line and the existing 20–24px heading gap below it. Preserve Certified and the unified amazon expert title, introductory paragraphs, and actions. Supersedes the greeting and no-divider decisions. Stylesheet version: ec5db56009. Local preview only; not committed or published.


Name position refinement, latest September 7, 2026: shift only the Adrian Sabellona text up 5px using translateY(-5px) on .amazon-hero-name-text. Preserve its outer line box, divider, title, and all other spacing. Stylesheet version: 2cf51e2649. Local preview only; not committed or published.


Hero background lightening, latest September 7, 2026: reduce dark overlay opacity by 5% relative to the previous values. Desktop changes from 82–86% to 77.9–81.7%; tablet/mobile from 82–88% to 77.9–83.6%. Preserve the overlay color, photograph, crop, typography, and layout. Conservative contrast over a pure-white image pixel at the weakest overlay is 8.27:1 for white text and 3.10:1 for the large teal Certified label. Stylesheet version: 63aaff7221. Local preview only; not committed or published.


Name/title group position, latest September 7, 2026: move the entire h1 group (full name, divider, Certified, amazon logo, and expert) upward 10px using translateY(-10px) on .amazon-hero-heading. Preserve internal spacing and the existing name-only -5px adjustment. The primary action and introduction retain their positions. Stylesheet version: 76407b87ff. Local preview only; not committed or published.


Subtle introduction background, latest September 7, 2026: add a translucent existing heading-color surface at 28% opacity behind both introductory paragraphs, beginning Since 2015. A decorative pseudo-element extends 20px vertically / 24px horizontally beyond the text container (16px on mobile), with 12px rounded corners, no border, shadow, or blur. Keep text fully opaque and preserve paragraph positioning, wrapping, wording, and spacing. Limit the container to the existing 620px paragraph width. The photograph remains visible through the surface. Stylesheet version: a2670e74a7. Local preview only; not committed or published.


Introduction position, latest September 7, 2026: move both introduction paragraphs and their translucent background 10px right using margin-left: 10px on .amazon-hero-content. Available width adapts on narrow screens to keep the background inside the viewport. Preserve wording, colors, and identity/action positions. Stylesheet version: 936a59c308. Local preview only; not committed or published.
