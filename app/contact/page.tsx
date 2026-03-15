import type { Metadata } from "next";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import PageHero from "../../components/marketing/PageHero";
import LeadCaptureForm from "../../components/forms/LeadCaptureForm";
import ConversionBand from "../../components/marketing/ConversionBand";
import SectionIntro from "../../components/ui/SectionIntro";
import { TrackedLink } from "../../components/ui/TrackedLink";
import {
  bookingUrl,
  contactLocationPoints,
  contactMethods,
} from "../../lib/content/site";
import { siteName, siteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Sports PT, Athlete Assessment, and Precision Arm Care with Movement Medicine in Atlanta, or contact the team for help choosing the right next step.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteName}`,
    description:
      "Book Sports PT, Athlete Assessment, and Precision Arm Care with Movement Medicine in Atlanta, or contact the team for help choosing the right next step.",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <PageHero
        kicker="Contact and booking"
        title="Book now or get pointed to the right next step."
        copy="Whether you are ready for Sports PT, Athlete Assessment, or a recommendation first, this page helps you move forward quickly."
        titleClassName="text-[1.7rem] sm:text-[2.8rem]"
        copyClassName="text-[0.82rem] sm:text-[0.88rem]"
        actions={
          <>
            <a
              href="tel:+17702985893"
              className="pill h-10 px-4 py-0 text-[0.66rem] tracking-[0.12em] focus-outline"
            >
              Call MMPT
            </a>
          </>
        }
      />

      <div className="section-shell pt-0">
        <div className="rounded-full border border-white/10 bg-black/60 px-4 py-3 text-center text-[0.72rem] font-medium tracking-[0.08em] text-zinc-300 sm:px-5 sm:text-[0.78rem]">
          Out-of-network PT <span className="mx-2 text-zinc-500">•</span> HSA/FSA accepted
          <span className="mx-2 text-zinc-500">•</span> Insurance verification available
        </div>
      </div>

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <SectionIntro
          kicker="Contact paths"
          title="Three clear ways to move forward."
          copy="Choose the route that fits how ready you are to book, ask questions, or get help before deciding."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                {method.title}
              </p>
              <h2 className="mt-4 text-2xl font-semibold heading">{method.value}</h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">{method.copy}</p>

              {method.external ? (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] px-4 py-0 text-[0.66rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)] focus-outline"
                >
                  {method.cta}
                </a>
              ) : method.href.startsWith("tel:") ? (
                <a
                  href={method.href}
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] px-4 py-0 text-[0.66rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)] focus-outline"
                >
                  {method.cta}
                </a>
              ) : (
                <Link
                  href={method.href}
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] px-4 py-0 text-[0.66rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)] focus-outline"
                >
                  {method.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <LeadCaptureForm source="contact_intent_form" />

      <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
        <SectionIntro
          kicker="Location and access"
          title="Based in Atlanta and built for in-person, virtual, and hybrid support."
          copy="MMPT serves local athletes in person while also supporting remote and hybrid care through the performance platform."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {contactLocationPoints.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                {item.label}
              </p>
              <p className="mt-4 text-sm text-zinc-200 sm:text-base">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <ConversionBand
        kicker="Ready to move?"
        title="Book now and let MMPT handle the next step."
        copy="If you already know what you need, book directly. If you still want help choosing, use the form above and we will guide you."
        actions={
          <>
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="contact_assessment_booking"
              label="Book Assessment"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Assessment
            </TrackedLink>
            <TrackedLink
              href={`${bookingUrl}&service=pt`}
              intent="contact_pt_booking"
              label="Book Sports PT"
              variant="ghost"
              className="h-10 px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em]"
            >
              Book Sports PT
            </TrackedLink>
          </>
        }
      />
    </MarketingShell>
  );
}
