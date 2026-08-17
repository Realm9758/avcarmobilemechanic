import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { contact, identity, meta, rating } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export const viewport: Viewport = {
  themeColor: "#0b0d11",
};

const contract = `<!--
THESIS: The mobile-mechanic site played straight, refusing both the stock blue-and-red MOT-banner template and the breakdown-industry stock photo of a smiling man in a hi-vis beside a bonnet. The page's one idea is that nothing has to be towed anywhere.
OWN-WORLD: Graphite near-black ground run a degree cool, hairline rules as the only structure, Spode cobalt rationed to labels, stars, ticks, CTA and the phone number. Wide-stretched Archivo caps against plain sentence-case body. Flat depth, no cards outside the review row.
STORY: A driver standing beside a car that will not start sees a real 4.5 from 8 people, eight named jobs, the towns the van covers and a number answered around the clock, and rings.
FIRST VIEWPORT: 92svh graphite lit by one cold inspection lamp low on the left. Name lockup, category and locality sub-line, tagline, cobalt call button and ghost services button; a hairline fact plate on the right carrying rating, hours and years. Hairline foot rail with three jobs and the postcode. Sticky bar holds the number throughout.
FORM: Category standard, the standing exit, user-chosen 17 Aug 2026 ahead of the roll, over three offered alternates (the Potteries, roadside patrol heritage, diagnostic instrument). Craft bar: the user's own showroomdetailing and CJValeting builds. Seed key 4c8951b9, assigned index 3, superseded by the pin.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: identity.name,
  telephone: "+447344679503",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressParts.street,
    addressLocality: contact.addressParts.locality,
    addressRegion: contact.addressParts.region,
    postalCode: contact.addressParts.postcode,
    addressCountry: contact.addressParts.country,
  },
  areaServed: [
    "Stoke-on-Trent",
    "Hanley",
    "Burslem",
    "Fenton",
    "Longton",
    "Newcastle-under-Lyme",
  ],
  // Real figures from the Google Business Profile. No aggregateRating would be
  // published here without them, and no `url` is published until the business
  // has a confirmed domain.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating.score,
    reviewCount: rating.count,
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
