import {
  area,
  booking,
  contact,
  hero,
  identity,
  location,
  rating,
  reviews,
  services,
} from "@/content/site";

const STAR_PATH =
  "M8 0.6l2.06 4.75 5.14.46-3.88 3.4 1.15 5.03L8 11.6l-4.47 2.64 1.15-5.03L.8 5.81l5.14-.46L8 .6z";

/**
 * Five stars filled to the real score, so 4.5 shows four solid and one exactly
 * half full rather than a rounded-up row of five.
 */
function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(Math.max(rating.scoreValue - i, 0), 1);
        const id = `star-fill-${i}`;
        return (
          <svg
            key={i}
            className="starIcon"
            viewBox="0 0 16 16"
            role="presentation"
          >
            <defs>
              <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                <stop offset={fill} stopColor="var(--cobalt)" />
                <stop offset={fill} stopColor="var(--hairline-strong)" />
              </linearGradient>
            </defs>
            <path d={STAR_PATH} fill={`url(#${id})`} />
          </svg>
        );
      })}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brandMark" href="#top">
            <span className="brandMarkFull">{identity.name}</span>
            <span className="brandMarkShort">{identity.shortName}</span>
          </a>
          <a className="btn btnPrimary btnSmall" href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroLight" />

          <div className="heroInner">
            <div className="container heroGrid">
              <div>
                <h1 className="heroName rise rise-1">
                  {hero.nameLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>

                <p className="heroSub rise rise-2">{hero.subLine}</p>
                <p className="heroTagline rise rise-2">{hero.tagline}</p>

                <div className="heroActions rise rise-3">
                  <a className="btn btnPrimary" href={contact.phoneHref}>
                    {hero.callCta}
                  </a>
                  <a className="btn btnGhost" href="#services">
                    {hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/*
                The photographed sibling sites put the owner's own work in this
                frame. There is none here, so the frame holds the facts instead.
                Nothing in it is asserted for the first time.
              */}
              <div className="heroPlate rise rise-4">
                <p className="heroPlateHead">{hero.plateHeading}</p>

                <dl>
                  <div className="heroPlateRow">
                    <dt>{hero.plateRatingLabel}</dt>
                    <dd className="heroRating">
                      <Stars />
                      <span className="ratingScore">{rating.score}</span>
                      <span className="visuallyHidden">
                        {` out of ${rating.best} on Google, `}
                      </span>
                      <span className="ratingTick" aria-hidden="true" />
                      <span className="ratingCount">{rating.countLabel}</span>
                    </dd>
                  </div>

                  {/*
                    Hours stay on a phone. It is the fact that pays for a two
                    in the morning caller, and the space it was once suppressed
                    to save went unused.
                  */}
                  <div className="heroPlateRow">
                    <dt>{hero.plateHoursLabel}</dt>
                    <dd>{location.hoursValue}</dd>
                  </div>

                  {/*
                    Years stand down on a phone so the foot rail keeps its place
                    in the first viewport. The figure is repeated in full
                    further down the page; nothing is lost, only reordered.
                  */}
                  <div className="heroPlateRow heroPlateRowDeferred">
                    <dt>{hero.plateExperienceLabel}</dt>
                    <dd>{location.experienceValue}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="heroRail rise rise-5">
            <div className="container heroRailInner">
              {hero.railItems.map((item) => (
                <span className="heroRailItem" key={item}>
                  {item}
                </span>
              ))}
              <span className="heroRailLocation">{hero.railLocation}</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2 className="sectionHead">{services.heading}</h2>
            <div className="sectionBody">
              <div className="serviceList">
                {services.items.map((item) => (
                  <article className="serviceRow" key={item.title}>
                    <h3 className="serviceTitle">{item.title}</h3>
                    <p className="serviceBody">{item.body}</p>
                  </article>
                ))}
              </div>
              <p className="serviceFootnote">{services.footnote}</p>
            </div>
          </div>
        </section>

        <section className="section" id="area">
          <div className="container">
            <h2 className="sectionHead">{area.heading}</h2>
            <div className="sectionBody">
              <p className="areaLead">{area.lead}</p>
              <ul className="townRun">
                {area.towns.map((town) => (
                  <li className="town" key={town}>
                    {town}
                  </li>
                ))}
              </ul>
              <p className="areaFootnote">{area.footnote}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="sectionHead">{reviews.heading}</h2>
            <div className="sectionBody">
              <div className="reviewGrid">
                {reviews.entries.map((entry) => (
                  <figure className="reviewCard" key={entry.name}>
                    <blockquote className="reviewQuote">
                      {entry.quote}
                    </blockquote>
                    <figcaption className="reviewAttrib">
                      <span className="reviewName">{entry.name}</span>
                      <span className="reviewSource">{entry.source}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2 className="sectionHead">{location.heading}</h2>
            <div className="sectionBody">
              <p className="locationLead">{location.lead}</p>
              <dl className="locationGrid">
                <div className="locationCell">
                  <dt>{location.mobileLabel}</dt>
                  <dd>
                    <a className="locationStrong" href={contact.phoneHref}>
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.landlineLabel}</dt>
                  <dd>
                    <a className="locationStrong" href={contact.landlineHref}>
                      {contact.landlineDisplay}
                    </a>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.hoursLabel}</dt>
                  <dd>
                    <span className="locationStrong">
                      {location.hoursValue}
                    </span>
                    <span className="locationNote">{location.hoursNote}</span>
                  </dd>
                </div>
                <div className="locationCell">
                  <dt>{location.addressLabel}</dt>
                  <dd>
                    {contact.addressLine}
                    <span className="locationNote">
                      <a
                        className="textLink"
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contact.mapsLabel}
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="booking">
          {/* The lamp again, turned down, behind the number. */}
          <div className="bookingLight" />
          <div className="container">
            <h2 className="sectionHead">{booking.heading}</h2>
            <p className="bookingLead">{booking.lead}</p>
            <a className="bookingPhone" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
            <p className="bookingAlt">
              {`${location.landlineLabel}: `}
              <a className="textLink" href={contact.landlineHref}>
                {contact.landlineDisplay}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          {booking.smallprint.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>
    </>
  );
}
