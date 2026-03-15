import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import PageHero from "../../components/marketing/PageHero";
import ConversionBand from "../../components/marketing/ConversionBand";
import SectionIntro from "../../components/ui/SectionIntro";
import { TrackedLink } from "../../components/ui/TrackedLink";
import {
  bookingUrl,
  featuredTeamMembers,
  supportingTeamMembers,
} from "../../lib/content/site";
import { siteName, siteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Movement Medicine clinicians behind Sports PT, athlete assessment, arm care, and performance support in Atlanta.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: `Team | ${siteName}`,
    description:
      "Meet the Movement Medicine clinicians behind Sports PT, athlete assessment, arm care, and performance support in Atlanta.",
    url: `${siteUrl}/team`,
  },
};

export default function TeamPage() {
  return (
    <MarketingShell>
      <PageHero
        kicker="Team"
        title="Meet the team behind the MMPT system."
        copy="Athletes and families want clinicians who understand sport demands, communicate clearly, and know how to connect rehab with performance."
        titleClassName="text-[1.7rem] sm:text-[2.8rem]"
        copyClassName="text-[0.82rem] sm:text-[0.88rem]"
        actions={
          <>
            <Link
              href="/about"
              className="pill h-10 px-4 py-0 text-[0.66rem] tracking-[0.12em] focus-outline"
            >
              Learn About MMPT
            </Link>
          </>
        }
      />

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <SectionIntro
          kicker="Leadership"
          title="A performance-minded team built for athletes, not generic care."
          copy="The MMPT system is led by clinicians who understand injury rehab, athlete assessment, return to sport, and the demands serious athletes actually train under."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredTeamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.16)_48%,rgba(20,4,4,0.92)_100%)]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                  {member.role}
                </p>
                <h2 className="mt-3 text-2xl font-semibold heading">{member.name}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-zinc-400">
                  {member.credentials}
                </p>
                <p className="mt-4 text-sm text-zinc-300 sm:text-base">{member.copy}</p>

                <div className="mt-5 grid gap-3">
                  {member.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <SectionIntro
          kicker="Extended clinical team"
          title="Additional clinicians strengthening the standard of care."
          copy="Movement Medicine also draws on clinicians across performance-minded rehab, overhead athlete care, and long-term athlete development."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {supportingTeamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                {member.role}
              </p>
              <h2 className="mt-4 text-2xl font-semibold heading">{member.name}</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-zinc-400">
                {member.credentials}
              </p>
              <p className="mt-4 text-sm text-zinc-300 sm:text-base">{member.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ConversionBand
        kicker="Ready to work with MMPT?"
        title="Book with the team behind the system."
        copy="If you already know the right next step, book directly. If you want help choosing between Sports PT and Athlete Assessment, start there."
        actions={
          <>
            <TrackedLink
              href={`${bookingUrl}&service=pt`}
              intent="team_pt_booking"
              label="Book PT"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Sports PT
            </TrackedLink>
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="team_assessment_booking"
              label="Book Assessment"
              variant="ghost"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Assessment
            </TrackedLink>
          </>
        }
      />
    </MarketingShell>
  );
}
