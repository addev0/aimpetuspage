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


## Selected results, September 7, 2026

The user chose to proceed one step at a time: add only the compact Selected results section immediately below the hero. The case study is deferred and its draft removed from the page. Preserve the hero and existing supporting content.

Show Hitrons Inc. | Tools & Home Improvement with the May–August 2026 engagement period. Feature $410K gross Amazon revenue in May 2026 with the May 1 start, first-month context, and highest monthly total outside Prime Day months in the brand’s 10-year history. Feature 16% ACoS in June 2026 with the account-low monthly result and sole Amazon Ads manager context. Do not present revenue as incremental growth or profit, or invent an ACoS reduction.

Use existing navy text, pale navy surface, neutral dividers, and Ember fonts. Results sit side by side from 768px and stack below, with 32px vertical padding and existing fluid hero-aligned horizontal padding. Stylesheet version: a788353188. Local preview only; not committed or published.


Results clarity refinement, September 7, 2026: replace Selected results with Amazon performance highlights. Put descriptive headings above the figures: Gross Amazon revenue with a wallet outline icon, and Advertising efficiency with a target outline icon. Show ACoS beside 16% and expand its meaning below. Preserve dates, first-month context, historical comparisons, and sole Ads ownership. Icons are decorative inline SVGs using navy; no new assets or interaction. Case study remains deferred. Stylesheet version: 8c3331ad77. Local only.


Results heading, September 7, 2026: use the user-requested title “Latest Performance Highlights”. This supersedes “Amazon performance highlights”; metric titles, icons, figures, context, and styling remain unchanged. Local only.


Performance highlights context line, September 7, 2026: remove the company/category/engagement-period line beneath Latest Performance Highlights at the user’s request. Preserve metric dates and explanations, and the company name in the existing work-experience entry. Styling unchanged. Local only.


Compact achievement graphics, September 7, 2026: add an 80–104px inline SVG beside each figure. Revenue uses a single decorative column and top marker, representing the single May observation without an invented series, comparative scale, or target. ACoS uses an exact 16-of-100 circular stroke with an accessible description identifying ad spend / ad-attributed sales; its remaining track does not imply profit. Navy and existing neutral tokens, no animation, axes, added dataset, or chart dependency. Both titles and original claim context remain. Contract: portfolio KPI illustrations, one reported observation per metric; purpose is rapid visual recognition, not a trend analysis. Verify at 1440, 768, and 390px. Stylesheet version: b056ec62c5. Local only.


Amazon-style graph illustrations, September 7, 2026: user rejected the single column and ACoS ring in favor of a summarized Amazon graph representation. Replace both with compact orange curves and subtle area fills: rising for revenue achievement, falling for advertising-cost efficiency. These are symbolic illustrations, not measured series; show a small Illustrative caption and omit time axes, ticks, historical values, and invented comparison claims. Decorative graphics are hidden from assistive technology; actual figures and full context remain in adjacent text. Reuse palette tokens and preserve the section layout. Stylesheet version: 9a217d255d. Local only.


Revenue achievement headline, September 7, 2026: use “Highest Monthly Gross Revenue in 10 Years” as requested, with “Outside Prime Day months” immediately beneath the heading to retain the historical comparison boundary. Preserve the $410K value, May 2026 date, first-month context, and descriptive paragraph. No stylesheet changes. Local only.


Featured revenue achievement, September 7, 2026: user requested a stronger visual highlight and removal of the separate Outside Prime Day months line. Remove only that subtitle; retain the qualification in the explanatory paragraph. Feature revenue in a navy card with an orange top border, trophy icon, 25–32px bold heading, orange in 10 Years emphasis, and orange 56–76px $410K. Give the companion ACoS item a white card with matching padding and radius. Preserve existing copy, illustrative curves, hero, and other sections. Metrics wrap when necessary on narrow screens. Stylesheet version: 666752fdbc. Local only.


Revenue headline refinement, September 7, 2026: use exactly Highest Monthly Revenue in 10-years. Emphasize in 10-years on its own orange line, place the trophy in a subtle circular orange badge, and add breathing room and a quiet divider beneath the large $410K and illustrative graph. Preserve supporting dates and context. Stylesheet version: 1251f39371. Local only.


Open highlights presentation, September 7, 2026: user rejected the dark background and card treatment and requested one change at a time. Remove item backgrounds, outlines, rounding, and shadows. Use navy text and legible neutral chart details on the existing pale section surface. Preserve current headline, sizing, spacing, trophy badge, figures, and graph illustrations. Do not bundle further refinements. Stylesheet version: e5b2782ff0. Local only.


Revenue headline, September 7, 2026: change only the headline to “Highest Monthly Revenue”, removing in 10-years. Preserve all other wording, figures, graphics, and styling. Local only.


Revenue unit, September 7, 2026: add /month after the existing $410K figure using the existing result-unit style. Preserve the reported amount and all other content and styling. Local only.


Full revenue figure, September 7, 2026: display $410,000/month instead of $410K/month in the highlighted figure. Preserve other content and styling. Local only.


Monthly unit color, September 7, 2026: change only /month to the normal text color token, preserving the orange revenue figure and all sizing. Stylesheet version: 86d324d929. Local only.


Revenue unit abbreviation, September 7, 2026: shorten /month to /mo. only. Preserve the normal navy unit color and all other content and styling. Local only.


Revenue summary bars, September 7, 2026: replace only the revenue curve with ten equal muted-grey symbolic bars grouped as a 10-year span and one taller orange final bar labeled May 2026. Retain the Illustrative caption: the grey bars are historical context, not measured yearly revenue, and heights are not a comparative data scale. Preserve the Prime Day qualification in the supporting paragraph, ACoS curve, figures, and all other styling. Local only.


Revenue chart readability, September 7, 2026: after reviewing the tiny equal-bar graphic, replace only the revenue illustration with a wider chart below the figure, subtle gridlines, varied muted-grey symbolic bars, and a tallest orange May 2026 bar labeled $410K. Explicitly label the grey backdrop 10-year history (illustrative); heights are decorative, not source data, and no measured historical scale is supplied. Keep all surrounding content and ACoS unchanged. Stylesheet version: f555ce06b2. Local only.


Continuous revenue bars, September 7, 2026: user requested continuous history with the final orange bar about 70% taller than most preceding bars. Use equal 12-unit bars on 16-unit spacing, including the final May bar. Illustrative grey bars cluster around height 61; final bar height 104 is about 70% taller. This is requested illustration geometry, not a reported revenue increase or measured historical series. Keep the explicit illustrative label and all other content unchanged. Local only.


May bar spacing, September 7, 2026: move only the orange May bar 2 SVG units left, reducing its gap from the preceding grey bar from 4 to 2 units. Recenter its labels. Preserve height, width, colors, and all other content. Local only.


Revenue chart width, September 7, 2026: narrow only the revenue SVG to 85% of its container, capped at 320px and centered. Preserve its aspect ratio and all bar geometry, colors, labels, and surrounding content. Stylesheet version: 895975c753. Local only.


Revenue chart label, September 7, 2026: user asked what illustrative means and requested its removal. Explained that the grey bars are symbolic rather than actual historical revenue figures. Remove only the parenthetical from the revenue chart label, leaving 10-year history. The geometry remains decorative and must not be reused as measured historical data. All other content unchanged. Local only.


Revenue chart alignment, September 7, 2026: remove the small $410K label above the orange bar and left-align the chart beneath the main figure, bringing the last bar toward the end of the large $410,000 amount. Preserve chart dimensions and other labels. Stylesheet version: 4042c424c1. Local only.


Revenue figure alignment, September 7, 2026: move only the large $410,000/mo. figure 8px right using translateX, preserving its layout box and the chart position. Stylesheet version: 1d48e28fd5. Local only.


Revenue suffix removal, September 7, 2026: remove only /mo. after the highlighted $410,000 figure. Preserve all styling, positioning, chart, and supporting copy. Local only.


Amount centered over May, September 7, 2026: center the large $410,000 directly above the orange May bar using its SVG center at 336/380 of chart width. Reserve the amount’s height and reduce chart width as needed on narrow screens to contain the figure. This supersedes the earlier 8px translation. Preserve all content and chart geometry. Stylesheet version: 8d71cad388. Local only.


Revenue figure right adjustment, September 7, 2026: shift only the amount 8px right from its centered-over-May position. Preserve the chart. Stylesheet version: 9b22aad07a. Local only.


Revenue chart vertical adjustment, September 7, 2026: translate only the revenue chart upward 8px to bring it nearer the figure. Preserve chart width, figure position, and other content. Stylesheet version: 1cfe1dc7dd. Local only.


Revenue chart proximity, September 7, 2026: move only the chart another 20px up, changing translateY from -8px to -28px. Preserve figure position and other content. Stylesheet version: fa6445eaff. Local only.


Shorter revenue chart, September 7, 2026: reduce only the chart width by 15%, preserving its aspect ratio. Offset its left position to keep the May bar center at the same horizontal coordinate beneath the figure. Preserve the -28px vertical translation. Stylesheet version: 41b18531f4. Local only.


Thinner historical bars, September 7, 2026: reduce grey bar width from 12 to 10 SVG units and increase their count from 20 to 24 within the same historical span. Preserve the orange May bar, chart size, alignment, and other content. Grey heights remain symbolic illustration geometry. Local only.


Thinner historical bars, latest September 7, 2026: reduce grey bar width from 10 to 6 SVG units, increasing the count from 24 to 32 within the same span. Preserve the orange May bar, chart dimensions, and positioning. Local only.


Irregular grey bars, September 7, 2026: vary the 32 symbolic grey heights with a fixed irregular pattern. Set their maximum to 69.333333 SVG units so the unchanged 104-unit May bar is 50% taller than the highest grey spike. This ratio is requested illustration geometry, not a reported historical revenue comparison. Preserve widths, positions, colors, and all other content. Local only.


Gentle historical growth illustration, September 7, 2026: add a shallow rising baseline beneath the varied grey bars, retaining irregular fluctuations. Normalize their highest spike to 104/1.5 so May remains 50% taller. This is symbolic illustration geometry, not measured historical growth. Preserve all other chart and page elements. Local only.


Historical illustration with $300K average, September 7, 2026: user requested an average grey value of $300K and up/down trends. Explained that this conflicts with the earlier May-50%-above-highest rule; prioritize the newer $300K average. Set 32 symbolic bars to an exact $300K mean on the same proportional scale as May $410K, with several rising/falling stretches and modest overall growth. May remains highest. These are constructed illustration values, not supplied historical observations. Preserve width, positioning, labels, and all other page elements. Local only.


Irregular randomized revenue illustration, September 7, 2026: replace repeating waves with a fixed seeded random sample of 32 symbolic historical values, adjusted to an exact $300,000 mean. Constrain every value below $410,000 and retain a modest difference between early and late group averages. These generated values are illustration-only, not historical account records. Keep May unchanged. Seed: 20260507. Constructed values in USD: 236909, 207533, 266143, 272513, 304868, 273652, 259131, 368609, 321222, 343470, 331349, 236742, 315888, 339412, 335673, 315660, 301952, 327759, 331164, 371440, 295373, 298392, 251044, 350748, 223472, 269819, 218648, 313586, 314432, 355774, 283370, 364253. Local only.


Historical average refinement, September 7, 2026: retain the approved randomized pattern and scale all grey bar heights by 5/6, lowering their illustrative average from $300,000 to $250,000. May remains $410,000 and all bar widths, positions, and other content remain unchanged. Values remain constructed illustration geometry. Local only.


Revenue visual group size, September 7, 2026: enlarge the figure and chart together by 10% with scale(1.1), anchored top-left on the revenue measure group. Preserve the headline, summary text, chart pattern, and $250K illustrative grey average. Stylesheet version: cbaaf67d04. Local only.


Matching ACoS achievement styling, September 7, 2026: style the right highlight with the same open presentation, orange circular target badge, bold Lowest Monthly ACoS headline, large orange 16% and navy ACoS unit, and matching visual-group size/alignment. Use a compact grey declining line with fluctuations and an orange final June 2026 low, aligned beneath the figure. Preserve an explicit illustrative label because the historical line is symbolic; no baseline or reduction is claimed. Keep the original date and sole Ads manager context. Reserve clearance below both scaled groups to prevent their dividers touching summary text. Stylesheet version: 7901cfa0c0. Local only.


Highlights section spacing, September 7, 2026: increase bottom padding from 2rem to 4rem, adding 32px before the following supporting-content section. Preserve all other spacing. Stylesheet version: 6ce30b8ce5. Local only.


TACoS highlight update, September 7, 2026: user requested TACoS in place of ACoS and supplied 7% after the denominator distinction was explained. Update only the early highlight to Lowest Monthly TACoS, 7% TACoS, and Total advertising cost of sales, retaining June 2026 and sole Ads manager context. Update its symbolic trend label accordingly. This is user-supplied portfolio wording; the historic work-experience ACoS claim remains unchanged. No CSS or layout changes. Local only.


TACoS figure suffix removal, September 7, 2026: remove only TACoS immediately after the highlighted 7%. Preserve the Lowest Monthly TACoS title, expanded metric label, chart, and all other content and styling. Local only.


TACoS starting point, September 7, 2026: user supplied a reduction from 13% TACoS to 7%. Add 13% at the start of the summary chart, retain the large 7% endpoint, and state the reduction in the supporting description. Baseline date was not supplied; do not invent one. Intermediate line points remain illustrative. No other changes. Local only.


Randomized TACoS historical illustration, September 7, 2026: user requested the grey periods average 13% with randomness. Generate 20 fixed random illustrative values centered on 13%, and map all points and the final orange 7% onto the same linear vertical scale. Label the grey period 13% average; retain the illustrative trend label. Intermediate values are constructed, not observed monthly data. Preserve other elements. Seed 1307. Local only.


Highlight divider length, September 7, 2026: interpret the user’s horizontal-line request as the long dividers beneath both charts. Shorten each at the right edge by 10 rendered pixels, accounting for the 1.1 group scale. Preserve chart gridlines and layout geometry. Stylesheet version: 113c25b2be. Local only.


Top bar scrolling fix, September 7, 2026: keep the contact bar transparent only at scroll position zero; use solid navy immediately when scrolling starts so hero text cannot show through behind contact text. Preserve the fixed position, existing layout, and contact actions. Stylesheet version: 478d8f7b44. Local only.


Intro scroll fade, September 7, 2026: supersedes the earlier solid-bar scrolling fix. Restore the transparent contact bar throughout the hero. Fade the complete intro and its inset background over the final 120px (or available clearance) before reaching the top bar, leaving 24px clearance; restore it when scrolling back up. Reduced motion switches visibility without fading. Preserve all intro copy and layout. Local only.


Smoother intro fade, September 7, 2026: replace the final-120px fade with a gradual fade across the entire available scrolling distance from page top to the intro reaching the contact bar. Smooth opacity updates with a 240ms ease-out transition, disabled for reduced motion. Restore opacity progressively on upward scrolling. Supersedes the previous fade timing; preserve layout and copy. Local only.


Intro animation refinement, September 7, 2026: use a smoothstep scroll fade with a subtle 14px upward drift and up to 2px blur, strongest only near disappearance. Smooth changes over 300ms and reverse when scrolling up. Reserve 40px before the top bar and measure untransformed layout coordinates to prevent feedback. Reduced motion disables drift, blur, and transitions. Preserve copy and layout. Local only.


Scroll darkening refinement, September 7, 2026: gradually darken the hero photograph by adding up to 0.14 to its overlay alpha as the intro exits. Dim the intro progressively to 45% brightness as it fades, preserving the original appearance at page top. Slow smoothing to 550ms for a softer dissolve. Reverse on upward scrolling; disable darkening motion and transitions for reduced motion. Local only.


Darken before dissolving, September 7, 2026: make the requested effect visible by retaining opacity through the first 45% of scroll progress while brightness decreases. Then dissolve smoothly over the remaining 55%. Intro brightness ends at 20%; photo overlay gains up to 0.18 alpha. Preserve 550ms smoothing, top-of-page appearance, reduced-motion handling, and all copy/layout. Local only.


Hero overlay correction, September 7, 2026: remove all intro opacity, transform, brightness, and blur effects. Use one dark overlay above the hero photograph and intro, increasing its opacity with scrolling and reversing on return. Keep identity/contact action above this overlay. Text itself remains fully opaque and stationary. Overlay smooths over 400ms; reduced motion switches without transition. This supersedes all previous intro fade/filter approaches. Local only.


Gradual overlay scroll range, September 7, 2026: replace the short intro-to-navigation gap with the full hero height (minimum 700px) as the darkening range. Overlay opacity increases linearly from 0 to 0.95, smoothing over 650ms. Reduced motion retains proportional darkening without a timed transition, eliminating the previous binary dark switch. No text fade, blur, or movement. Local only.


Darkening rate adjustment, September 7, 2026: increase the overlay darkening rate by 10% by dividing its scroll range by 1.1. Preserve the 650ms smoothing, opacity cap, and all other behavior. Local only.


Darkening rate adjustment, September 7, 2026: increase the current rate by another 5%, changing the multiplier from 1.1 to 1.155 (1.1 x 1.05). Preserve smoothing and all other behavior. Local only.


Top bar translucent shade, September 7, 2026: add a navy gradient behind the fixed contact bar with a soft 24px transparent lower edge. Start its layer at 45% opacity and increase gradually to full layer opacity over 180px of scrolling; the gradient itself remains slightly translucent behind the text. Smooth over 350ms, disabled for reduced motion. Preserve the current hero darkening rate, copy, and contact actions. Local only.


Translucent top bar blur, September 7, 2026: replace the shaded background with a frosted backdrop, increasing blur from 2px to 20px over the first 180px of scrolling. A translucent navy tint increases from 18% to 66% to keep white contact text readable over light sections. Preserve the soft 24px lower edge. Remove the solid background switch after the hero; foreground text and button stay sharp. Preserve hero darkening. Local only.


Top bar edge refinement, September 7, 2026: remove the 24px feathered extension and gradient mask that mixed blurred and sharp content below the bar. Confine the frosted backdrop to the bar bounds and add a subtle 1px translucent bottom divider. Preserve progressive blur, tint, and all layout/contact behavior. Local only.


Inset top bar, September 7, 2026: give the fixed top bar an island shape with 8px top/side margins and 12px corner radii, including its frosted backdrop. Reserve the top inset in hero clearance. Preserve blur, tint, contact actions, and scroll behavior; do not clip keyboard focus outlines. Local only.


Seamless top-of-page navigation, September 7, 2026: hide the entire frosted top bar surface, including its border, at scroll position zero. Increase surface opacity from 0 to 1 over the existing 180px scroll range, retaining the inset rounded shape and progressive blur when scrolling down. Foreground contact text/actions remain visible. Local only.


Clear frosted top bar, September 7, 2026: remove the increasing navy tint and use only an 8% white glass tint with the existing progressive backdrop blur. Preserve rounded inset shape and invisible surface at page top. Switch hook text and keyboard focus ring to dark colors over the light supporting sections so clear glass remains readable. Local only.


Black acrylic top bar, September 7, 2026: replace the 8% white glass tint with 24% neutral black for translucent black acrylic. Preserve progressive backdrop blur, transparent surface at page top, rounded inset shape, and adaptive hook colors. Local only.


Darker black acrylic, September 7, 2026: increase the top bar black tint from 24% to 52% opacity to reduce its pale appearance. Keep the hook and focus ring white over supporting sections for contrast against the deeper tint. Preserve blur and scroll behavior. Local only.


Top bar top gap removal, September 7, 2026: remove only the 8px top inset; keep 8px side margins, rounded corners, dark acrylic tint, and current scroll behavior. Local only.


Top bar top margin, September 7, 2026: set the top inset to 2px, retaining 8px side margins and all other styling and behavior. Local only.


Navy blur beyond hero, September 7, 2026: when the top bar bottom crosses the hero boundary, transition its frosted background from black acrylic to 88% navy (#232F3E). Keep backdrop blur and white contact text. Reverse to black acrylic on return over the hero; preserve 2px top and 8px side margins. Local only.


Very dark navy top bar, September 7, 2026: shift only the beyond-hero background shade from #232F3E to near-black navy #0F151E, retaining 88% opacity and existing blur/transition behavior. Local only.


Unified near-black navy top bar, September 7, 2026: use #0F151E at 88% opacity as the frosted surface tint throughout, including over the hero. Remove the distinct black-acrylic background state. Preserve gradual surface reveal from invisible at scroll zero, progressive blur, rounded shape, and margins. Local only.


Top bar side margins, September 7, 2026: reduce left and right insets from 8px to 2px; preserve the 2px top inset and all other styling and behavior. Local only.


Top bar opacity refinement, September 7, 2026: reduce the near-black navy background opacity by 5% relative, from 0.88 to 0.836. Preserve blur intensity, scroll reveal, margins, and all other behavior. Local only.


More translucent navy acrylic, September 7, 2026: reduce top bar tint from 83.6% to 58% opacity and maximum backdrop blur from 20px to 12px so underlying detail remains visible over light sections. Preserve #0F151E shade, gradual scroll reveal, and geometry. Local only.


Restore acrylic definition, September 7, 2026: restore maximum backdrop blur to 20px while retaining the more translucent 58% navy tint. Add a subtle full perimeter highlight and soft shadow to define the rounded island. Keep these on the fading surface so no outline remains at page top. Preserve 2px margins. Local only.


Revert last acrylic refinement, September 7, 2026: user requested exactly one change undone. Restore maximum blur to 12px and the prior bottom-only border; remove the added perimeter highlight and shadow. Retain 58% navy tint and all earlier settings. Local only.


Top bar size and opacity refinement, September 7, 2026: reduce desktop/tablet height from 72px to 68.4px and wrapped mobile height from 101px to about 95.95px through vertical spacing, preserving text/button sizing. Increase navy tint opacity by 5% relative, from 0.58 to 0.609. Preserve margins and blur. Local only.


Stronger navy past hero, September 7, 2026: increase the near-black navy tint to 75% opacity when the top bar crosses beyond the hero, retaining 60.9% over the hero and current blur. Preserve the existing smooth background transition and reverse on return. Local only.


Past-hero opacity correction, September 7, 2026: user clarified the increase should be 5%. Replace the proposed 75% tint with 63.945% (60.9% x 1.05) only past the hero. Preserve blur and all other settings. Local only.


Top bar corner refinement, September 7, 2026: reduce the top bar corner radius by 20%, from 12px to 9.6px. The frosted backdrop inherits the same radius. Preserve all other styling and behavior. Local only.


Further top bar height reduction, September 7, 2026: reduce current height by another 5%, from 68.4px to 64.98px on desktop/tablet and from 95.95px to approximately 91.15px on wrapped mobile. Adjust vertical padding only; preserve text/button sizes and all other settings. Local only.


Dark navy opacity increase, September 7, 2026: increase both current top bar tint opacities by 5% relative: over hero 0.609 to 0.63945, and past hero 0.63945 to 0.6714225. Preserve navy shade, blur, geometry, and reveal behavior. Local only.


Opacity scope correction, September 7, 2026: apply the latest 5% opacity increase only past the hero (0.6714225). Restore over-hero opacity to 0.609. Preserve all other settings. Local only.


Deeper navy past hero, September 7, 2026: increase only the past-hero navy opacity to 70.5%, approximately another 5% relative. Preserve over-hero opacity, blur, and geometry. Local only.


Blue-toned navy past hero, September 7, 2026: apply approved #071B38 at 85% opacity only beyond the hero to retain a visibly blue navy appearance over the light page. Preserve backdrop blur and the existing over-hero appearance. Local only.


Darker blue navy past hero, September 7, 2026: deepen the beyond-hero tint to #041126 at 90% opacity. Preserve blur and the over-hero state. Local only.


Approved navy opacity refinement, September 7, 2026: preserve #041126 past the hero and reduce opacity by 3% relative, from 90% to 87.3%. Preserve all other settings. Local only.


Past-hero opacity setting, September 7, 2026: set the approved #041126 navy tint to exactly 85% opacity past the hero, preserving all other settings. Local only.


Past-hero opacity setting, September 7, 2026: set the approved #041126 navy tint to exactly 80% opacity past the hero, preserving all other settings. Local only.
