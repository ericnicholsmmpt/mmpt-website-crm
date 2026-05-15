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
const teamPreviewPlayers = [
  { name: "Player 1", email: "player1@mmptperformance.com", armFeel: "6/10" },
  { name: "Player 2", email: "player2@mmptperformance.com", armFeel: "8/10" },
  { name: "Player 3", email: "player3@mmptperformance.com", armFeel: "3/10" },
  { name: "Player 4", email: "player4@mmptperformance.com", armFeel: "10/10" },
  { name: "Player 5", email: "player5@mmptperformance.com", armFeel: "8/10" },
];
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
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start 2xl:grid-cols-[minmax(0,1fr)_21rem]">
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
                  Better Development
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={teamAssessmentEmailHref}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-red-500/45 bg-[linear-gradient(180deg,rgba(150,25,25,0.94),rgba(96,18,18,0.96))] px-4 py-0 text-[0.64rem] font-semibold uppercase leading-none tracking-[0.08em] text-white transition hover:border-red-400/70 focus-outline"
                >
                  Ask About Team Pricing
                </a>
                <div className="border-l border-red-500/30 pl-3 sm:text-right">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-red-100">
                    10+ players + 1 coach platform access
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:pt-4">
              <div className="mx-auto flex max-w-[16.75rem] justify-start sm:max-w-[17.5rem] xl:ml-auto xl:max-w-[19rem]">
                <div className="pill bg-[#0d0f12]/95 px-3 py-1 text-[0.54rem] tracking-[0.1em] shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:text-[0.6rem]">
                  Movement Performance
                </div>
              </div>
              <div className="mx-auto mt-3 h-[11.75rem] max-w-[16.75rem] overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,13,15,0.98),rgba(7,8,10,0.98))] shadow-[0_14px_36px_rgba(0,0,0,0.3)] sm:h-[12.25rem] sm:max-w-[17.5rem] xl:ml-auto xl:h-[13rem] xl:max-w-[19rem]">
                <div
                  className="origin-top-left scale-[0.27] transform-gpu"
                  style={{ width: "370.4%" }}
                >
            <div className="border-b border-white/10 px-4 py-4 sm:px-5">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-[0.9rem] border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-zinc-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    Team Management Platform
                  </div>
                  <p className="mt-4 text-sm text-zinc-400">Team</p>
                  <h3 className="mt-1 text-xl font-semibold heading text-white sm:text-2xl">
                    Demo Team
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Week of 2026-03-16 • Compliance 5/5 (100%)
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 md:flex-row xl:max-w-[18rem]">
                  <div className="flex-1 rounded-[0.9rem] border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-500">
                    Search player name or email...
                  </div>
                  <div className="inline-flex items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white">
                    Search
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 sm:px-5">
              <div className="rounded-[1rem] border border-white/10 bg-black/30 p-3">
                <div className="flex flex-col gap-3">
                  <div className="min-w-0 flex-1 rounded-[0.9rem] border border-white/10 bg-black/45 px-4 py-3 text-sm text-white">
                    Demo Team
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-[0.9rem] border border-white/10 bg-black/45 px-4 py-3 text-sm text-white">
                      03/16/2026
                    </div>
                    <div className="rounded-[0.9rem] bg-white px-4 py-3 text-sm font-semibold text-black">
                      Go
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="rounded-[0.9rem] border border-white/10 bg-black/45 px-4 py-2 text-sm text-white">
                    Prev Week
                  </div>
                  <div className="rounded-[0.9rem] border border-red-400/35 bg-red-950/24 px-4 py-2 text-sm text-white">
                    This Week
                  </div>
                  <div className="rounded-[0.9rem] border border-white/10 bg-black/45 px-4 py-2 text-sm text-white">
                    Next Week
                  </div>
                  <div className="rounded-[0.9rem] border border-white/10 bg-black/45 px-4 py-2 text-sm text-white">
                    Show Missing Only
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[0.56rem] font-semibold uppercase tracking-[0.22em]">
                <div className="rounded-[0.9rem] border border-red-400/35 bg-red-950/28 px-4 py-2 text-white">
                  Players
                </div>
                <div className="rounded-[0.9rem] border border-white/10 bg-black/35 px-4 py-2 text-zinc-300">
                  Player Status Reports
                </div>
                <div className="rounded-[0.9rem] border border-white/10 bg-black/35 px-4 py-2 text-zinc-300">
                  Pitch Log
                </div>
                <div className="rounded-[0.9rem] border border-white/10 bg-black/35 px-4 py-2 text-zinc-300">
                  Trends
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,12,14,0.98),rgba(8,9,11,0.96))]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 sm:px-4">
                  <div className="inline-flex items-center gap-2 rounded-[0.9rem] border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-zinc-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    Players
                  </div>
                  <p className="text-sm text-zinc-500">
                    {teamPreviewPlayers.length} shown
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {teamPreviewPlayers.map((player, index) => (
                    <div
                      key={player.email}
                      className="flex flex-col gap-3 px-4 py-3 sm:px-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <p className="text-[0.96rem] font-semibold text-white">
                          {player.name}
                        </p>
                        <p className="mt-1 text-sm text-zinc-500">
                          {player.email}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="rounded-[0.9rem] border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300">
                          Submitted
                        </div>
                        <div
                          className={`rounded-[0.9rem] border px-3 py-2 text-sm font-medium ${
                            index === 2
                              ? "border-rose-500/20 bg-rose-500/10 text-rose-200"
                              : "border-amber-500/20 bg-amber-500/10 text-amber-200"
                          }`}
                        >
                          Arm Feel: {player.armFeel}
                        </div>
                        <div className="rounded-[0.9rem] border border-white/10 bg-black/40 px-3 py-2 text-sm font-semibold text-white">
                          View
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
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
