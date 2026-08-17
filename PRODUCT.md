# A V Car Mobile Mechanic

A one-page site for a real mobile mechanic in Stoke-on-Trent. The whole point of
the business is that the mechanic drives to the car, so the site exists to get a
stranded or busy driver to ring the number.

## The business

- **Name:** A V Car Mobile Mechanic (Google Business Profile), also written
  "A.V Car Mechanic" on one directory.
- **Trade:** mobile mechanic. Not a garage you drive to.
- **Base:** 9 Cheapside, Hanley, Stoke-on-Trent ST1 1HL.
- **Numbers:** 07344 679503 (Google profile), 01782 493176 (their own website
  and every directory listing). Both are published by the business.
- **Hours:** Google lists the profile as open 24 hours. Their own site advertises
  battery replacement and jump starts "24 hours a day, 7 days a week".
- **Standing:** 4.5 from 8 Google reviews.
- **Experience:** their own website claims "Over 38 Years of Experience". One
  directory renders the same figure as "38 years of combined experience", and
  the truncated Google profile blurb says "almost three decades". The conflict
  is unresolved and flagged for the owner.
- **Existing web presence:** a Google Sites page at
  sites.google.com/view/stoke-on-trent-mobile-mechanic. This new site replaces
  it in practice; it is the source for the service list.

## Visitor and mode

**Mode: Persuade.** One visitor, one action.

The visitor is a driver in Stoke-on-Trent whose car will not start, will not
stop properly, or is due an oil change they have no time to sit in a waiting
room for. Often they are standing next to the car with a phone in one hand. They
are deciding between this number and the next number in the search results. They
need to believe, within a few seconds, that a real mechanic will actually turn
up where they are.

Success is a phone call. Nothing on the page competes with that.

## Evidence rules

These are real people whose reputation sits on this page.

- Every word and every fact lives in `content/site.ts`, with the source of each
  claim noted inline. `app/page.tsx` holds no strings.
- Nothing may be invented. Facts the business has never published are omitted
  from the page entirely and tracked in the `pending` export and the README, not
  written on the page as a placeholder or an apology.
- Customer reviews are verbatim, typos and all. Truncated ones are omitted
  rather than completed.
- Structured data carries `aggregateRating` only because a real score and count
  exist. No `url` until a domain is confirmed.

## Brand commitments

- **Standing preference: the house canon.** Offered a rolled direction plus
  alternates on 17 Aug 2026, the user again chose the dark professional canon
  shared with Showroom Shine, CJ Valeting and M&A Auto Service. That is three
  clean choices out of three. Assume canon for this client.
- **Craft bar:** the user's own showroomdetailing and CJValeting builds.
- **Accent: Spode cobalt**, chosen by the user, and the only thing that
  separates this build from its siblings' champagne gold, claret and amber.
- **No photography exists** and stock imagery is refused, so the first viewport
  is lit rather than shot.
