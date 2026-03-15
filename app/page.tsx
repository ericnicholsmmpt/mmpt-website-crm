import type { Metadata } from "next";
import HomeHero from "../components/marketing/HomeHero";
import HomeActionGrid from "../components/marketing/HomeActionGrid";
import MarketingShell from "../components/marketing/MarketingShell";
import ConversionBand from "../components/marketing/ConversionBand";
import FaqSection from "../components/marketing/FaqSection";
import PerformanceBoard from "../components/marketing/PerformanceBoard";
import ProcessGrid from "../components/marketing/ProcessGrid";
import ProofSection from "../components/marketing/ProofSection";
import LeadCaptureForm from "../components/forms/LeadCaptureForm";
import { TrackedLink } from "../components/ui/TrackedLink";
import { bookingUrl, homeFaqs } from "../lib/content/site";
import { buildFaqJsonLd, jsonLdScript } from "../lib/seo";

export const metadata: Metadata = {
  description:
    "Sports medicine physical therapy, athlete assessments, precision arm care, and performance training for athletes in Atlanta.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <MarketingShell hero={<HomeHero />} overlayHeader>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(buildFaqJsonLd(homeFaqs)),
        }}
      />
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
