import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HomeHero from "../components/marketing/HomeHero";
import HomeActionGrid from "../components/marketing/HomeActionGrid";
import MarketingShell from "../components/marketing/MarketingShell";
import ConversionBand from "../components/marketing/ConversionBand";
import FaqSection from "../components/marketing/FaqSection";
import PerformanceBoard from "../components/marketing/PerformanceBoard";
import ProcessGrid from "../components/marketing/ProcessGrid";
import ProofSection from "../components/marketing/ProofSection";
import { TrackedLink } from "../components/ui/TrackedLink";
import { bookingUrl, homeFaqs } from "../lib/content/site";
import JsonLd from "../components/seo/JsonLd";
import { buildFaqJsonLd, buildPageMetadata } from "../lib/seo";

const LeadCaptureForm = dynamic(
  () => import("../components/forms/LeadCaptureForm")
);

const trustBarItems = [
  "Atlanta sports performance lab",
  "Force Plate and Motion Capture Testing",
  "Baseball rehab + return to throwing",
];

export const metadata: Metadata = buildPageMetadata({
  title: "Sports Physical Therapy, Baseball Rehab, and Athlete Assessment in Atlanta",
  description:
    "Movement Medicine Performance & PT provides sports physical therapy, baseball rehab, athlete movement assessment, strength and power testing, and return-to-throwing support in Atlanta.",
  path: "/",
  keywords: [
    "sports physical therapy atlanta",
    "baseball rehab atlanta",
    "athlete assessment atlanta",
    "strength and power testing atlanta",
    "return to throwing program atlanta",
  ],
});

export default function Home() {
  return (
    <MarketingShell hero={<HomeHero />} overlayHeader>
      <JsonLd data={buildFaqJsonLd(homeFaqs)} />
      <section className="section-shell pt-0">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-y border-white/10 bg-[#08090b]/88 px-4 py-3 text-center text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-zinc-300 sm:px-6 sm:text-[0.7rem]">
          {trustBarItems.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-3">
              <span>{item}</span>
              {index < trustBarItems.length - 1 ? (
                <span className="hidden h-1 w-1 rounded-full bg-red-500/70 sm:inline-block" />
              ) : null}
            </span>
          ))}
        </div>
      </section>
      <HomeActionGrid />
      <ProofSection />

      <ProcessGrid
        id="process"
        kicker="How MMPT works"
        title="Assess. Review. Program. Reassess."
        copy="Our systems are built to create clarity, direction, and confidence around the next step and the path to elite performance."
      />

      <PerformanceBoard />

      <FaqSection
        kicker="Questions before booking"
        title="Answers that make booking easier."
        copy="These are the questions athletes and families usually want answered before getting started with Movement Medicine."
        items={homeFaqs}
      />

      <LeadCaptureForm source="homepage_intent_form" />

      <ConversionBand
        kicker="Ready for the next step?"
        title="Book the right path for recovery and performance."
        copy="Choose Sports PT or Athlete Assessment, or share your goals first and let Movement Medicine guide the best-fit next step."
        actions={
          <>
            <TrackedLink
              href={bookingUrl}
              intent="bottom_booking"
              label="Book Appointment"
            >
              Book Appointment
            </TrackedLink>
            <a href="#book" className="pill px-6 py-3 focus-outline">
              Share Goals
            </a>
          </>
        }
      />
    </MarketingShell>
  );
}
