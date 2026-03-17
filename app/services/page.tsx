import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import PageHero from "../../components/marketing/PageHero";
import ServicesGrid from "../../components/marketing/ServicesGrid";
import ServiceDetailSections from "../../components/marketing/ServiceDetailSections";
import ConversionBand from "../../components/marketing/ConversionBand";
import JsonLd from "../../components/seo/JsonLd";
import { TrackedLink } from "../../components/ui/TrackedLink";
import { bookingUrl, services } from "../../lib/content/site";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageMetadata,
} from "../../lib/seo";

const serviceFaqs = services.flatMap((service) => service.faqs);

export const metadata: Metadata = buildPageMetadata({
  title: "Sports Physical Therapy, Athlete Assessment, and Baseball Rehab in Atlanta",
  description:
    "Explore sports physical therapy, athlete assessment, baseball rehab, strength and power testing, return-to-throwing support, and hybrid performance services from Movement Medicine in Atlanta.",
  path: "/services",
  keywords: [
    "sports physical therapy atlanta",
    "baseball rehab atlanta",
    "athlete movement assessment atlanta",
    "return to throwing program atlanta",
    "strength and power testing atlanta",
  ],
});

export default function ServicesPage() {
  return (
    <MarketingShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(serviceFaqs)} />
      <PageHero
        kicker="Services"
        title="Book the right service for recovery, performance, and return to sport."
        copy="From sports PT to athlete assessment, precision arm care, and hybrid support, every Movement Medicine service is built to create clarity around the next step and confidence in the plan."
        titleClassName="text-[1.7rem] sm:text-[2.8rem]"
        copyClassName="text-[0.82rem] sm:text-[0.88rem]"
        actions={
          <>
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="services_assessment_booking"
              label="Book Assessment"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Assessment
            </TrackedLink>
            <TrackedLink
              href={`${bookingUrl}&service=pt`}
              intent="services_pt_booking"
              label="Book Sports PT"
              variant="ghost"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Sports PT
            </TrackedLink>
          </>
        }
      />

      <ServicesGrid
        kicker="Choose your service"
        title="Start with the service that fits your sport, your goals, and your next step."
        copy="Book directly if you already know what you need, or compare the options below before you decide."
      />

      <ServiceDetailSections />

      <ConversionBand
        kicker="Need help choosing?"
        title="Not sure which service is the right fit?"
        copy="Tell us what you are working through and Movement Medicine will help guide the best-fit service, schedule, or next step."
        actions={
          <>
            <Link
              href="/contact"
              className="pill h-10 px-4 py-0 text-[0.66rem] tracking-[0.12em] focus-outline"
            >
              Share Your Goals
            </Link>
            <TrackedLink
              href={bookingUrl}
              intent="services_bottom_booking"
              label="Book From Services"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Now
            </TrackedLink>
          </>
        }
      />
    </MarketingShell>
  );
}
