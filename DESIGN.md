---
name: A V Car Mobile Mechanic
description: The house dark-professional canon in Spode cobalt, for a trade that arrives instead of being arrived at.
colors:
  graphite-ground: "#0b0d11"
  graphite-panel: "#12151b"
  cobalt: "#4d89f5"
  cobalt-bright: "#7fa9ff"
  cobalt-deep: "#2e6fd9"
  cobalt-ink: "#04101f"
  workshop-white: "#f3f5f7"
  steel-mid: "#c1c7cf"
  steel-dim: "#969ea8"
  hairline: "rgba(243, 245, 247, 0.12)"
  hairline-strong: "rgba(243, 245, 247, 0.22)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.9rem, 8vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
    fontVariation: "wdth 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontVariation: "wdth 120"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.4rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.02em"
    fontVariation: "wdth 118"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.16em"
  label-sub:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.13em"
rounded:
  focus: "2px"
  button: "3px"
  frame: "4px"
  card: "5px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  block: "3rem"
  grid-gap: "clamp(1.5rem, 3vw, 2.5rem)"
  section-pad: "clamp(4.5rem, 10vh, 7.5rem)"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.7rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-bright}"
    textColor: "{colors.cobalt-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.workshop-white}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.7rem"
    height: "48px"
  button-ghost-hover:
    textColor: "{colors.cobalt-bright}"
  button-small:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.button}"
    padding: "0.6rem 1.1rem"
    height: "44px"
  fact-plate:
    backgroundColor: "rgba(18, 21, 27, 0.66)"
    textColor: "{colors.steel-mid}"
    rounded: "{rounded.frame}"
    padding: "1.6rem 1.7rem 0.4rem"
  review-card:
    backgroundColor: "{colors.graphite-panel}"
    textColor: "{colors.workshop-white}"
    rounded: "{rounded.card}"
    padding: "2rem 2rem 1.7rem"
  topbar:
    backgroundColor: "rgba(11, 13, 17, 0.78)"
    textColor: "{colors.workshop-white}"
    height: "64px"
    padding: "0.7rem 0"
---

# Design System: A V Car Mobile Mechanic

## Overview

**Creative North Star: "The Inspection Lamp Set Down On A Road"**

This is the house dark-professional canon shared with the same owner's Showroom Shine, CJ Valeting and M&A Auto Service sites, run here in Spode cobalt. The ground, the text ramp, the hairlines, the radius set, the rhythm scale, the motion pair and the Archivo type treatment are canon and are identical across the family. The accent is the only permitted axis of divergence: change the hue, change nothing else. A reference implementation of the same system in signal amber sits at `/Users/realm/maautoservice`.

Two things this client forced that the siblings did not. First, cobalt is a darker hue than amber, so it needs a lighter working token to clear 4.5:1 against graphite for small label text, and roughly double the gradient opacity of the warm sibling to throw the same amount of light on the same ground. Second, the trade is mobile, so coverage is a fact the page owes the visitor and it gets a section of its own, set at display scale between two dense sections. Neither is a house change; both are this build's own.

The page has no photographs and none may be invented, so the hero is lit rather than shot. The light is a produced asset with seven authored falloff stops and grain baked in, not a stack of flat CSS ramps, and it appears exactly twice. Everything else is flat: hairline rules carry all structure, the review row is the only place a filled card is allowed, and cobalt is rationed hard enough that the call button stays the loudest thing on the page.

**Key Characteristics:**
- Graphite near-black ground run a degree cooler than the amber sibling, to sit under cobalt
- Hairline rules (1px at 12% white) as the only structural device
- One rationed chromatic accent: labels, stars, ticks, town markers, CTA, phone number
- Wide-stretched Archivo caps against plain sentence-case body
- Flat by default; produced light instead of shadow, twice on the page
- Facts over decoration: every hero-plate row restates something the page proves elsewhere

## Colors

A near-black cool graphite carrying a three-step steel text ramp, with a single blue accent held to a small, countable set of jobs.

### Primary
- **Working Cobalt** (`{colors.cobalt}`): the only cobalt allowed to carry text or a glyph on graphite. It clears 5.75:1 on the ground and 5.41:1 on the panel, which is what the deep Spode value cannot do. It is the primary button fill, the plate head, the location-cell labels, the postcode in the hero rail, the star fill, the town diamonds, the closing phone number, the selection background, the caret and the focus ring.
- **Cobalt Bright** (`{colors.cobalt-bright}`): the hover state, everywhere. Primary button hover fill, ghost button hover text, link and phone hover.
- **Deep Spode** (`{colors.cobalt-deep}`): light-asset only. It is the third and fourth falloff stop inside `public/kerbside.svg` and `public/kerbside-close.svg`. It never carries text and never fills a control.
- **Cobalt Ink** (`{colors.cobalt-ink}`): the near-black blue that sits on cobalt. Primary button label and selected-text foreground; nothing else.

### Neutral
- **Graphite Ground** (`{colors.graphite-ground}`): the page. Also the browser theme colour, the scrollbar track and the favicon plate.
- **Graphite Panel** (`{colors.graphite-panel}`): the only raised fill in the system. Review cards, the closing booking band, and at 66% the hero fact plate.
- **Workshop White** (`{colors.workshop-white}`): body default, review quotes, ghost button label, emphasised contact values.
- **Steel Mid** (`{colors.steel-mid}`): the reading grey. Service bodies, section leads, plate values, review meta.
- **Steel Dim** (`{colors.steel-dim}`): the quiet grey. Small labels, footnotes, the hero rail, the footer, the tagline.
- **Hairline** (`{colors.hairline}`) and **Hairline Strong** (`{colors.hairline-strong}`): every rule, every border, the tick dividers, the ghost button stroke, the unfilled half of a star.

### Named Rules
**The One Accent Rule.** Cobalt is the only chromatic hue on the page. A second hue anywhere, including inside the light assets, breaks the world; the lamp is lit in cobalt for exactly this reason.

**The Working Cobalt Rule.** Small text, glyphs and controls take the working cobalt. The deep Spode value stays inside the light assets, where nothing has to be read off it.

**The Accent-Only Divergence Rule.** When this system is carried to another site in the family, the accent hue is the only token that may change. Ground, steel ramp, hairlines, radii, rhythm and type stay as they are.

**The Ration Rule.** Cobalt is spent on labels, stars, ticks, town markers, the two call buttons and the phone number. Inside the hero plate it is limited to the plate head and the stars so the call button remains the loudest cobalt in the first viewport.

## Typography

**Display Font:** Archivo, variable width axis (with Helvetica Neue, Arial fallback)
**Body Font:** Archivo, normal width (same family, no second face)

**Character:** One grotesque, worked in two registers. Headings are uppercase and mechanically stretched, which reads as stencilled panel lettering; body is plain sentence-case at normal width and never stretched. The tension between the two is the whole type idea, and there is no second family to dilute it.

### Hierarchy
- **Display** (700, `clamp(2.9rem, 8vw, 5.4rem)`, 0.98, `wdth 125`, uppercase): the name lockup, and the closing phone number at `clamp(2.1rem, 7vw, 4.4rem)`. Two per page, both decision points.
- **Headline** (650, `clamp(1.5rem, 3vw, 2.2rem)`, 1.1, `wdth 120`, uppercase): every section head.
- **Title** (650, `clamp(1.15rem, 2vw, 1.4rem)`, `wdth 118`, uppercase): service row titles. Town names run a size above at `clamp(1.3rem, 2.7vw, 1.85rem)` and `wdth 122`, held where the longest name still sets on one line in its own column.
- **Body** (400, 1.05rem, 1.6): service copy at 62ch, section leads at 42–56ch, tagline at 46ch. Sentence case, normal width, always.
- **Label** (600, 0.76rem, 0.16em, uppercase): the house label tier. Plate head, contact cell labels, hero foot rail, review source.
- **Label sub** (600, 0.68rem, 0.13em, uppercase): one step under the label tier in steel dim, for the plate's own rows, so a plate never shows two competing label colours at one size.

### Named Rules
**The Stretched Caps Rule.** Uppercase and a width axis above 110% belong to headings, labels and buttons. Body copy is sentence case at normal width. Never stretch a sentence; never set a heading unstretched.

**The One Label Tier Rule.** A container that already carries a label at the house tier sets its interior labels a step below it in steel, not a second colour at the same size.

**The Tabular Rule.** Numbers that a visitor may compare or dial (rating score, phone numbers, hours) set `font-variant-numeric: tabular-nums`.

## Layout

A single 1180px container with a fluid gutter (`{spacing.gutter}`) is the only frame; nothing goes full-bleed except the two lit bands and the hairline rails. Sections are separated by a top hairline and `{spacing.section-pad}` of vertical padding, and each section head is followed by `{spacing.block}` before its body. Grid gaps are `{spacing.grid-gap}` throughout.

The hero is 92svh, split seven-five: type left, hairline fact plate right, with a hairline foot rail under both carrying three jobs and the postcode. Services run as a five-seven two-column row list on hairlines. Coverage is a deliberate two-column grid rather than a wrapping run, so six town names of very unequal length break where the author chose. Reviews are a three-column card grid. Contact is a four-column definition grid.

Breakpoints are three. At 1040px the contact grid and review grid drop to two columns and the orphan third review runs full width. At 900px the hero and reviews stack, the hero switches to `calc(100svh - 64px)` to discount the sticky bar, the fact plate loses its frame and becomes a hairline-topped rating row, and service rows become single column. At 700px the brand mark shortens, the call button takes the full row with the ghost beside it at its own size, tick dividers are dropped because a pseudo-element cannot know where a row wraps, and the town and contact grids go to one column.

**The First Viewport Rule.** The hero foot rail lands inside the first screen on a phone. Anything that would push it under the fold stands down, and what stands down must be restated in full further down the page.

## Elevation & Depth

Flat. There are no structural shadows, no borders used as fake depth, and no stacked surfaces: depth is carried by tone (ground, then panel) and by produced light. Two exceptions, both deliberate. The primary button carries a soft cobalt bloom beneath it (`0 12px 30px -14px rgba(77, 137, 245, 0.6)`), which reads as the button glowing rather than as the button floating. The sticky topbar is a translucent ground at 78% with a 14px backdrop blur and a hairline base, so the page passes under it visibly.

### Shadow Vocabulary
- **Cobalt bloom** (`box-shadow: 0 12px 30px -14px rgba(77, 137, 245, 0.6)`): the primary call button only. Never applied to a card, a plate or a panel.

### Named Rules
**The Two Lamps Rule.** The produced light appears exactly twice: directional and low-left behind the hero, centred and turned down behind the closing phone number. A third instance turns a device into wallpaper.

**The Lit-Not-Filled Rule.** Where a band needs presence, light it with the produced asset. Do not reach for a CSS gradient ramp; a blue gradient hero is the stock template this world exists to refuse.

## Shapes

Radii are nearly nothing and stepped by role: focus ring 2px, buttons 3px, framed plates 4px, cards 5px. Nothing is pill-shaped and nothing is circular except the favicon's bore. Everything else is squared off and defined by a 1px hairline rather than by a fill.

The one repeating ornament is a 6px cobalt square rotated 45 degrees: the town marker, set as a leading `::before` so it never strands at the end of a wrapped line. Tick dividers are 1px by 11–14px hairline-strong bars. Icons are authored SVG paths, not a glyph font: the star is a drawn path filled by a hard-stop linear gradient so a 4.5 shows four solid stars and one exactly half full.

## Components

### Buttons
- **Shape:** barely rounded (3px), 48px minimum height, uppercase 650 at `wdth 112` with 0.04em tracking.
- **Primary:** cobalt fill, cobalt-ink label, cobalt bloom beneath. This is the call.
- **Ghost:** transparent with a hairline-strong stroke and workshop-white label.
- **Hover / Focus:** primary lifts 1px and goes cobalt-bright; ghost lifts 1px and takes a cobalt border with cobalt-bright text. Both settle 1px down on `:active`. All state transitions run 150ms ease-out, and every transform is removed under `prefers-reduced-motion`.
- **Small:** 44px minimum, 0.85rem, for the sticky topbar number.

### Cards / Containers
- **Corner Style:** 5px (review cards), 4px (hero fact plate).
- **Background:** graphite panel; the hero plate at 66% so the lamp shows through it.
- **Shadow Strategy:** none. Border and tone only.
- **Border:** 1px hairline.
- **Internal Padding:** 2rem for cards, 1.6–1.7rem for the plate; the plate's rows are separated by hairlines with the last rule suppressed.

### Navigation
Sticky translucent topbar, 64px minimum, blurred, hairline base. Left is a wordmark at 0.95rem/700/0.12em uppercase `wdth 118` that swaps to a short form under 700px. Right is the phone number as a small primary button, present at every scroll position. There is no menu; the page is one column of sections and the number is the only navigation that matters.

### Fact Plate (signature)
A hairline-framed definition list opposite the name lockup, holding rating, hours and years. It exists because the photographed sibling sites put the owner's work in that slot and this build has no photograph. Nothing in it is asserted for the first time. Stacked, the frame comes off entirely (a bordered box around one line is chrome, not structure) and the rating survives alone on a hairline rule.

### Coverage Run (signature)
The towns the van covers, set at near-display scale in stretched caps on a two-column authored grid, each led by the cobalt diamond, footnoted in steel dim. It is the airy section between two dense ones, and it exists because the trade is mobile; the fixed-premises siblings have no equivalent.

## Do's and Don'ts

### Do:
- **Do** run structure on hairlines. A new section opens with a 1px top rule and `{spacing.section-pad}`, not with a box.
- **Do** keep cobalt to labels, stars, ticks, town markers, the call buttons and the phone number.
- **Do** use the working cobalt for anything that must be read; leave the deep Spode inside the light assets.
- **Do** set headings uppercase with the width axis above 110% and body sentence case at normal width.
- **Do** author a produced SVG light when a band needs presence, with real falloff stops and baked grain.
- **Do** give every interactive element a `:hover`, an `:active` and a visible cobalt focus ring, and cancel every transform under `prefers-reduced-motion`.
- **Do** author grid breaks where a wrapping run would rag badly, and lead ornaments rather than separating with them.
- **Do** carry this system to a sibling site by changing the accent hue alone.

### Don't:
- **Don't** introduce a second chromatic hue, in CSS or in an asset.
- **Don't** put a filled card anywhere but the review row; every other grouping is a hairline.
- **Don't** add a third instance of the produced light.
- **Don't** build a lit band out of CSS gradient ramps.
- **Don't** stretch body copy or set a heading at normal width.
- **Don't** use a glyph icon font or a borrowed icon set; the star, the diamond and the favicon nut are authored paths.
- **Don't** let a container show two label colours at the same size.
- **Don't** give a secondary action the same mass as the call on a phone.
