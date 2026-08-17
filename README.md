# A V Car Mobile Mechanic

One-page site for A V Car Mobile Mechanic, a mobile mechanic based at
9 Cheapside, Hanley, Stoke-on-Trent ST1 1HL.

Next.js 16 (App Router), React 19, TypeScript. No CSS framework, no client-side
JavaScript beyond React's own hydration, one Google font (Archivo). Deploys to
Vercel with no configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## How the content works

Every word and every fact on the page lives in [`content/site.ts`](content/site.ts).
`app/page.tsx` contains no strings. To change the copy, change that one file.

Each claim in `site.ts` notes its source inline:

| Tag | Source |
| --- | --- |
| `[google]` | the Google Business Profile supplied by the owner, read 17 Aug 2026 |
| `[review]` | quoted verbatim from a public Google review on that profile |
| `[site]` | the business's own site, sites.google.com/view/stoke-on-trent-mobile-mechanic |
| `[ttm]` | the Trusted Tradesman directory listing for this business |

**Nothing on this page is invented.** Facts the business has never published are
left off the page entirely rather than guessed, filled with a placeholder, or
apologised for in the copy. Customer reviews are verbatim, including the
reviewers' own capitalisation; a truncated review is omitted rather than
completed.

## What the owner still needs to send

These are tracked in the `pending` export at the bottom of `content/site.ts`.
Until they arrive, the page simply does not mention them.

| Missing | Why it matters |
| --- | --- |
| Whether "over 38 years" is one mechanic's experience or the team's combined | The business's own site, the Trusted Tradesman listing and the Google blurb say three different things (see below) |
| The full Google profile description | It is cut off mid-sentence and there is no way to read the rest |
| Call-out charge, labour rate, diagnostic fee, parts pricing | The commonest question a visitor has and the page cannot answer it |
| What the 24-hour listing actually means | Whether a mechanic attends at any hour, or only that the phone is answered |
| How far outside the five listed towns the van travels | The coverage section can only name what the directory lists |
| Warranty or guarantee on parts and labour | Nothing published mentions one |
| VAT registration and full trading name | Needed before the footer can carry them |
| Photographs of the van, the mechanics or the work | The hero is lit instead of shot because there are none |
| A logo asset | The wordmark is set in type in the meantime |
| An email address | The page offers two phone numbers and nothing else |
| A confirmed domain | No `url` is published in the structured data until there is one |

### The experience figure

Three published numbers disagree and the conflict is unresolved:

- the business's own website says **"Over 38 Years of Experience"**
- the Trusted Tradesman listing says **"over 38 years of combined experience"**
- the Google profile blurb opens **"almost three decades"**, then truncates

The page uses the business's own website wording and attributes nothing beyond
it. Ask the owner which is right.

### The two phone numbers

Both are published by the business and both are on the page. `07344 679503` is
the mobile on the Google profile and leads everywhere, because the trade is
mobile and the caller is usually standing next to the car. `01782 493176` is the
landline on their own site and every directory.

## Structured data

`app/layout.tsx` emits `AutoRepair` JSON-LD. It carries an `aggregateRating`
only because a real score and count exist (4.5 from 8 Google reviews). It
carries no `url` until a domain is confirmed. Do not add either without the real
figure behind it.

## Design

The visual system is recorded in [`DESIGN.md`](DESIGN.md). The direction
contract for this build sits in an HTML comment at the top of `<body>` in
`app/layout.tsx` and survives into the production output.

The short version: the house dark-professional canon shared with the owner's
sibling trade sites, diverged only by its accent, Spode cobalt. There are no
photographs of this business and stock imagery was refused, so the first
viewport is lit rather than shot: `public/kerbside.svg` is an authored
seven-stop cold light with its grain baked in, thrown low and lateral across the
frame like an inspection lamp set down beside a car on a road.
