/**
 * Every word and every fact on the site lives here. Nothing may be invented.
 * Each claim notes its source inline:
 *   [google]  the Google Business Profile supplied by the client, 17 Aug 2026
 *   [review]  quoted verbatim from a public Google review on that profile
 *   [site]    the business's own website, sites.google.com/view/
 *             stoke-on-trent-mobile-mechanic, read 17 Aug 2026
 *   [ttm]     the Trusted Tradesman directory listing for this business
 *
 * Two things on the evidence that the page deliberately does not resolve:
 *
 * 1. Two phone numbers are published. [google] gives the mobile 07344 679503;
 *    [site] and every directory give the landline 01782 493176. Both are the
 *    business's own, so both are on the page. The mobile leads, because the
 *    trade is mobile and the visitor is usually standing next to the car.
 *
 * 2. Length of experience is stated three ways: [site] says "Over 38 Years of
 *    Experience", [ttm] says "over 38 years of combined experience", and the
 *    [google] profile blurb opens "almost three decades" but is truncated with
 *    no way to read the rest. The page uses the business's own website wording
 *    and attributes nothing beyond it. Flagged in `pending` for the owner.
 *
 * The [google] blurb is truncated mid-sentence ("...long years of experience...
 * More") and is therefore not quoted anywhere. Truncated copy is omitted, never
 * completed.
 */

export const identity = {
  name: "A V Car Mobile Mechanic", // [google]
  shortName: "A V Car", // for the topbar under 700px
  category: "Mobile mechanic", // [google] business category is "Mechanic"; [site] "Mobile Mechanic Services"
} as const;

export const contact = {
  // [google]. The mobile leads: this is a mobile trade and the caller is
  // usually kerbside.
  phoneDisplay: "07344 679503",
  phoneHref: "tel:+447344679503",
  // [site], [ttm] and the Yell listing all publish this landline.
  landlineDisplay: "01782 493176",
  landlineHref: "tel:+441782493176",
  addressLine: "9 Cheapside, Hanley, Stoke-on-Trent ST1 1HL", // [google], [site]
  addressParts: {
    street: "9 Cheapside",
    locality: "Hanley",
    town: "Stoke-on-Trent",
    postcode: "ST1 1HL",
    region: "Staffordshire",
    country: "GB",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=A%20V%20Car%20Mobile%20Mechanic%2C%209%20Cheapside%2C%20Hanley%2C%20Stoke-on-Trent%20ST1%201HL",
  mapsLabel: "Open in Google Maps",
} as const;

export const rating = {
  score: "4.5", // [google]
  scoreValue: 4.5,
  best: 5,
  count: "8", // [google]
  countLabel: "8 Google reviews", // [google]
  label: "Google rating",
} as const;

export const hero = {
  nameLines: ["A V Car", "Mobile Mechanic"] as string[],
  // Both halves are [google]: the business category and the address locality.
  subLine: "Mobile mechanic · Hanley, Stoke-on-Trent",
  // Clause one is [site] ("We come to you! No need to tow your car"), clause
  // two is the [google] opening hours. No promise is made about how fast.
  tagline:
    "We come to the car, so it never has to be towed anywhere. The phone is answered around the clock.",
  callCta: "Call 07344 679503", // the number is [google]
  secondaryCta: "What we fix",
  // The quiet index along the foot of the first viewport. Every item below is
  // a service named in full further down the page, so nothing is asserted here
  // for the first time.
  railItems: ["Diagnostics", "Batteries & jump starts", "Brakes"] as string[],
  railLocation: "Hanley · Stoke-on-Trent ST1 1HL", // [google]
  // The hairline-framed plate in the first viewport. Every row restates a fact
  // held elsewhere in this file. The phone number is deliberately not a row:
  // it is already the sticky topbar button and the primary action in the same
  // viewport, and a third cobalt number here would compete with the one thing
  // the page is for.
  plateHeading: "At a glance",
  plateRatingLabel: "Google rating",
  plateHoursLabel: "Hours",
  plateExperienceLabel: "On the tools",
} as const;

export const services = {
  heading: "What we fix",
  // Every item and every description below comes from the business's own
  // website [site], which lists these eight services with a short explanation
  // of each. The wording here is tightened, never extended: no turnaround, no
  // price, no guarantee and no capability appears that [site] does not state.
  items: [
    {
      title: "Mobile mechanic call-outs",
      body: "The van comes to the car, wherever it has stopped. Home, work, or the side of the road.",
    },
    {
      title: "Engine diagnostics",
      body: "Reading the car's own fault codes to find the failing sensor or component behind a warning light or a running problem.",
    },
    {
      title: "Battery replacement",
      body: "A new battery fitted at your door. Nothing needs towing and nothing needs booking into a bay.",
    },
    {
      title: "Jump starts",
      body: "A flat battery got going again, 24 hours a day, seven days a week.",
    },
    {
      title: "Brake service & repair",
      body: "Free inspection, then pads, discs, calipers or a fluid flush as the inspection finds.",
    },
    {
      title: "Oil changes",
      body: "The service that keeps the engine running sweetly, the fuel economy up and the engine alive longer.",
    },
    {
      title: "Alternator replacement",
      body: "For the dim headlights and hard starting that follow a charging system on its way out.",
    },
    {
      title: "Starter motor replacement",
      body: "Diagnosed first, then replaced, when the engine will not turn over.",
    },
  ],
  footnote: "Something not on this list? Ring and ask.",
} as const;

export const area = {
  heading: "Where we come out to",
  // The five towns are the "areas covered" field on the [ttm] listing for this
  // business. Hanley is where the business is based [google] and sits inside
  // Stoke-on-Trent. No radius, no travel charge and no coverage promise is
  // made, because none is published.
  lead: "A V Car works across Stoke-on-Trent and the towns around it.",
  towns: [
    "Stoke-on-Trent",
    "Hanley",
    "Burslem",
    "Fenton",
    "Longton",
    "Newcastle-under-Lyme",
  ] as string[],
  footnote: "Somewhere else in the Potteries? Ring and we will tell you.",
} as const;

export const reviews = {
  heading: "What people say",
  // Verbatim from public Google reviews on the profile [review], including the
  // reviewer's own capitalisation. All three read as complete sentences on the
  // profile; a truncated one would be omitted rather than completed.
  entries: [
    {
      quote: "Great all round service and great communication.",
      name: "Robert Carvell",
      source: "Google review",
    },
    {
      quote: "Chuffed with the work Anthony did for me on the car today!",
      name: "Bridget",
      source: "Google review",
    },
    {
      quote: "Quick and Friendly customer service.",
      name: "Praji Mano",
      source: "Google review",
    },
  ],
} as const;

export const location = {
  heading: "How to reach us",
  lead: "Two numbers, both answered by the business. The mobile is the quickest way to get someone out to the car.",
  mobileLabel: "Mobile",
  landlineLabel: "Landline",
  // Not "registered address": nothing published says whether this is a
  // registered company office, and it is the address on the Google profile.
  addressLabel: "Address",
  // [google] lists the profile as open 24 hours, and [site] advertises battery
  // work and jump starts 24/7. The page states the listing rather than
  // promising a mechanic is awake at any given hour.
  hoursLabel: "Hours",
  hoursValue: "Open 24 hours",
  hoursNote: "As listed on Google.",
  findUsLabel: "Directions",
  // [site]: "Over 38 Years of Experience Delivered to Your Doorstep".
  experienceValue: "Over 38 years",
  experienceNote: "The figure the business publishes itself.",
} as const;

export const booking = {
  heading: "Get someone out to the car",
  lead: "Tell us what the car is doing and where it is sitting. It does not have to move for us to get to it.",
  smallprint: [
    "A V Car Mobile Mechanic, 9 Cheapside, Hanley, Stoke-on-Trent ST1 1HL.",
  ],
} as const;

export const meta = {
  title: "A V Car Mobile Mechanic · Stoke-on-Trent",
  description:
    "Mobile mechanic covering Stoke-on-Trent, Hanley, Burslem, Fenton, Longton and Newcastle-under-Lyme. Diagnostics, batteries, jump starts, brakes and oil changes at your door. Rated 4.5 from 8 Google reviews. Call 07344 679503.",
} as const;

/**
 * Facts the business has never published anywhere that could be verified.
 * They are simply absent from the page, never filled with a placeholder and
 * never guessed. Listed in the README so the owner knows what to send.
 */
export const pending = [
  "Whether 'over 38 years' is one mechanic's experience or the team's combined, and how it squares with the 'almost three decades' on the Google profile",
  "The full Google profile description (it is truncated mid-sentence with no way to read the rest)",
  "Any call-out charge, labour rate, diagnostic fee or parts pricing",
  "Whether the 24-hour listing means a mechanic attends at any hour or only that the phone is answered",
  "How far outside the five listed towns the van will travel",
  "Whether the business is VAT registered, and its company or trading name in full",
  "Any warranty or guarantee on parts and labour",
  "Photographs of the van, the mechanics or the work",
  "A logo asset",
  "An email address",
  "A confirmed domain name",
] as const;
