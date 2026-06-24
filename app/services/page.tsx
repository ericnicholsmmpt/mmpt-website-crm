import type { Metadata } from "next";
import Image from "next/image";
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
const teamAssessmentEmailHref = `mailto:eric@mmptperformance.com?subject=${encodeURIComponent(
  "Team Assessments Inquiry"
)}&body=${encodeURIComponent(
  "Hi Eric,\n\nI'm interested in learning more about team assessments.\n\nThank you,"
)}`;

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
        titleClassName="text-[1.55rem] sm:text-[2.45rem]"
        copyClassName="text-[0.82rem] sm:text-[0.94rem]"
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

      <section
        id="team-assessments"
        className="section-shell overflow-hidden rounded-[1.5rem] p-5 card sm:p-7"
      >
        <div className="relative">
          <div className="grid gap-7 xl:grid-cols-[minmax(0,0.88fr)_minmax(34rem,0.92fr)] xl:items-center 2xl:grid-cols-[minmax(0,0.9fr)_minmax(40rem,1fr)]">
            <div className="max-w-[48rem]">
              <p className="kicker">Team Assessments</p>
              <h2 className="mt-2 text-[1.55rem] font-semibold heading sm:text-[2.1rem] xl:text-[2.35rem]">
                Team Baseball Movement Assessments
              </h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-[0.97rem]">
                Movement Medicine offers team pricing for baseball movement
                assessments, giving coaches and organizations objective insight
                across the roster without one-off scheduling. Each assessment
                identifies limitations in mobility, strength, power, and
                movement efficiency, then turns those findings into clearer next
                steps for performance, arm care, and long-term development.
              </p>
              <p className="mt-3 text-sm text-zinc-400 sm:text-[0.95rem]">
                Coaches also receive access to the MMPT performance platform to
                review results, track priorities, and keep athlete development
                aligned across the team.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-y border-white/10 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-zinc-200">
                <div>
                  Team Pricing
                </div>
                <div>
                  Coach Visibility
                </div>
                <div>
                  Player Accountability
                </div>
                <div>
                  Better Development
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <TrackedLink
                  href="/contact#book"
                  intent="team_assessment_contact"
                  label="Request Team Assessment"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-red-500/45 bg-[linear-gradient(180deg,rgba(150,25,25,0.94),rgba(96,18,18,0.96))] px-4 py-0 text-[0.64rem] font-semibold uppercase leading-none tracking-[0.08em] text-white transition hover:border-red-400/70 focus-outline"
                >
                  Request Team Assessment
                </TrackedLink>
                <a
                  href={teamAssessmentEmailHref}
                  className="pill h-10 px-4 py-0 text-[0.64rem] tracking-[0.08em] focus-outline"
                >
                  Email Team Pricing
                </a>
                <a
                  href="/files/movement-performance-app-team-price-sheet.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center border-l border-red-500/30 pl-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-red-100 transition hover:text-white focus-outline sm:text-right"
                >
                  View Team Price Sheet
                </a>
              </div>
            </div>

            <div className="xl:pt-0">
              <div className="relative mx-auto aspect-[2940/1364] w-full max-w-[42rem] overflow-hidden rounded-[1.15rem] border border-white/10 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.36)] xl:ml-auto 2xl:max-w-[48rem]">
                <Image
                  src="/images/mmpt-platform-coach-login-preview.png"
                  alt="Movement Medicine Performance Platform sign-in screen with athlete management system features"
                  fill
                  sizes="(min-width: 1536px) 48rem, (min-width: 1280px) 42rem, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
