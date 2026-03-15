import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import PageHero from "../../components/marketing/PageHero";
import ConversionBand from "../../components/marketing/ConversionBand";
import SectionIntro from "../../components/ui/SectionIntro";
import { TrackedLink } from "../../components/ui/TrackedLink";
import { aboutPillars, bookingUrl, whoWeServe } from "../../lib/content/site";
import { siteName, siteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Movement Medicine combines sports injury rehab, athlete assessment, and platform-guided programming into one performance-minded system in Atlanta.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteName}`,
    description:
      "Learn how Movement Medicine combines sports injury rehab, athlete assessment, and platform-guided programming into one performance-minded system in Atlanta.",
    url: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  const facilityHighlights = [
    {
      title: "Performance lab testing",
      copy: "Force plate, motion capture, and athlete assessment tools create clearer decisions for rehab, performance, and return to sport.",
    },
    {
      title: "Sports PT + return to sport",
      copy: "Hands-on sports medicine care, rehab progression, and return-to-sport planning all live inside the same system.",
    },
    {
      title: "Premium facility standard",
      copy: "A clean, advanced environment with premium equipment helps athletes and families feel the standard immediately.",
    },
  ];

  const locationPoints = [
    {
      label: "Address",
      value: "1825 MacArthur Blvd NW, Atlanta, GA 30318",
    },
    {
      label: "Phone",
      value: "(770) 298-5893",
    },
    {
      label: "Access",
      value: "In-person, virtual, and hybrid support through our performance platform",
    },
  ];

  return (
    <MarketingShell>
      <PageHero
        kicker="About Movement Medicine"
        title="Built by athletes for athletes who want a better standard of care."
        copy="At Movement Medicine, we have built a data-driven system for sports injury rehab and performance training. Shaped by a database of more than 500 athletes, our model blends sports medicine physical therapy, athlete assessment, and platform-guided programming to help athletes recover, perform, and develop with confidence."
        titleClassName="text-[1.7rem] sm:text-[2.8rem]"
        copyClassName="text-[0.82rem] sm:text-[0.88rem]"
        actions={
          <>
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="about_assessment_booking"
              label="Book Assessment From About"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Assessment
            </TrackedLink>
            <Link
              href="/services"
              className="pill h-10 px-4 py-0 text-[0.66rem] tracking-[0.12em] focus-outline"
            >
              View Services
            </Link>
          </>
        }
      />

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <SectionIntro
          kicker="What defines MMPT"
          title="Sports medicine, performance, and follow-through in one system."
          copy="Movement Medicine is built for athletes, parents, and coaches who want more than generic rehab, disconnected training, or guesswork."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {aboutPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                {pillar.title}
              </p>
              <p className="mt-4 text-sm text-zinc-300 sm:text-base">
                {pillar.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="kicker">Who we serve</p>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold heading sm:text-4xl">
              Built for athletes who want clarity, direction, and follow-through.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              We work with competitive athletes, return-to-sport cases, baseball and
              overhead athletes, and clients who want objective movement data to
              guide the next step.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {whoWeServe.map((group) => (
              <article
                key={group}
                className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4"
              >
                <p className="text-sm font-medium text-zinc-200 sm:text-base">{group}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4">
            <div>
              <p className="kicker">Facility</p>
              <h2 className="mt-2 max-w-3xl text-2xl font-semibold heading sm:text-4xl">
                Atlanta&apos;s sports medicine physical therapy and athlete performance lab.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
                MMPT is built to support sports medicine rehab, athlete assessment,
                arm care, and performance follow-through inside one premium
                environment designed for serious athletes.
              </p>
            </div>

            <div className="grid gap-3">
              {facilityHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-zinc-300 sm:text-base">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/65">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]" />
              <Image
                src="/images/facility-a.jpeg"
                alt="Movement Medicine performance and rehab facility"
                width={1203}
                height={803}
                className="h-[15rem] w-full object-cover sm:h-[18rem] lg:h-[16rem]"
              />
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/65">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]" />
              <Image
                src="/images/facility-b.jpeg"
                alt="Movement Medicine athlete training and treatment space"
                width={1203}
                height={803}
                className="h-[15rem] w-full object-cover sm:h-[18rem] lg:h-[16rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="kicker">Location</p>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold heading sm:text-4xl">
              Serving athletes in Atlanta with in-person care and hybrid support.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Athletes can train, test, and receive care in person at our Atlanta
              facility, then continue through virtual and hybrid support on the MMPT
              performance platform.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=1825+MacArthur+Blvd+NW+Atlanta+GA+30318"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] px-4 py-0 text-[0.66rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)] focus-outline"
              >
                Get Directions
              </a>
              <TrackedLink
                href={bookingUrl}
                intent="about_location_booking"
                label="Book From Location Section"
                variant="ghost"
                className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
              >
                Book Appointment
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {locationPoints.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm text-zinc-200 sm:text-base">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand
        kicker="Ready for the next step?"
        title="Book the right path and move with confidence."
        copy="Choose Sports PT, Athlete Assessment, or start with a conversation if you want help choosing the best fit."
        actions={
          <>
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="about_assessment_booking"
              label="Book Assessment"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Assessment
            </TrackedLink>
            <Link
              href="/contact"
              className="pill h-10 px-4 py-0 text-[0.66rem] tracking-[0.12em] focus-outline"
            >
              Talk With Our Team
            </Link>
          </>
        }
      />
    </MarketingShell>
  );
}
