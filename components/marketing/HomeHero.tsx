import Image from "next/image";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

const trustBarItems = [
  "Atlanta sports performance lab",
  "Force Plate and Motion Capture Testing",
  "Baseball rehab + return to throwing",
];

function ActionArrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`hero-action-arrow${down ? " hero-action-arrow-down" : ""}`}
    >
      <path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 19 19 5M5 5h14v14"} />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <Image src="/images/brand-hero.jpg" alt="" fill priority sizes="100vw" className="home-hero-image" />
      <div className="home-hero-content">
        <p className="kicker">Athlete Assessments + Sports PT</p>
        <h1 id="home-heading">Baseball performance testing that turns data into a better training plan.</h1>
        <p className="hero-lede">
          MMPT combines sports physical therapy, motion capture, force testing, strength measures, and baseball-specific programming to help athletes understand what is limiting mobility, power, throwing durability, and return-to-sport readiness.
        </p>
        <div className="hero-actions">
          <TrackedLink href={`${bookingUrl}&service=athlete_assessment`} intent="hero_assessment" label="Book Your Assessment">
            Book Your Assessment
            <span className="hero-arrow-divider"><ActionArrow /></span>
          </TrackedLink>
          <TrackedLink href="#process" intent="hero_assessment_process" label="Explore the Assessment" variant="ghost">
            Explore the Assessment <ActionArrow down />
          </TrackedLink>
        </div>
        <TrackedLink href="/services#team-assessments" intent="hero_team_testing" label="For Coaches & Teams" variant="ghost" className="hero-team-link">
          For Coaches &amp; Teams <ActionArrow />
        </TrackedLink>
      </div>
      <div className="hero-trust-strip">
        <ul className="hero-trust-items" aria-label="MMPT specialties">
          {trustBarItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
