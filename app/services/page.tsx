import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import PageHero from "../../components/marketing/PageHero";
import ServicesGrid from "../../components/marketing/ServicesGrid";
import ServiceDetailSections from "../../components/marketing/ServiceDetailSections";
import ConversionBand from "../../components/marketing/ConversionBand";
import { TrackedLink } from "../../components/ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";
import { siteName, siteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sports PT, Athlete Assessment, Precision Arm Care, and hybrid performance support from Movement Medicine in Atlanta.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${siteName}`,
    description:
      "Explore Sports PT, Athlete Assessment, Precision Arm Care, and hybrid performance support from Movement Medicine in Atlanta.",
    url: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <MarketingShell>
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
