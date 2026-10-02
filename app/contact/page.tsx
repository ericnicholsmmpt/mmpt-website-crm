import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import MarketingShell from "../../components/marketing/MarketingShell";
import ConversionBand from "../../components/marketing/ConversionBand";
import JsonLd from "../../components/seo/JsonLd";
import SectionIntro from "../../components/ui/SectionIntro";
import { TrackedLink } from "../../components/ui/TrackedLink";
import {
  bookingUrl,
  contactLocationPoints,
  contactMethods,
} from "../../lib/content/site";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../../lib/seo";

const LeadCaptureForm = dynamic(
  () => import("../../components/forms/LeadCaptureForm")
);

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Movement Medicine Performance & PT in Atlanta",
  description:
    "Contact Movement Medicine in Atlanta to book sports physical therapy, baseball rehab, athlete assessment, strength and power testing, or return-to-throwing support.",
  path: "/contact",
  keywords: [
    "contact sports physical therapy atlanta",
    "book athlete assessment atlanta",
    "baseball rehab atlanta contact",
  ],
});

export default function ContactPage() {
  return (
    <MarketingShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <h1 className="sr-only">Contact Movement Medicine</h1>

      <section className="section-shell">
        <SectionIntro
          kicker="Contact paths"
          title="Three clear ways to move forward."
          copy="Choose the route that fits how ready you are to book, ask questions, or get help before deciding."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-none border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {method.title}
              </p>
              <h2 className="mt-4 text-2xl font-semibold heading">{method.value}</h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">{method.copy}</p>

              {method.external ? (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 brand-button brand-button-primary focus-outline"
                >
                  {method.cta}
                </a>
              ) : method.href.startsWith("tel:") ? (
                <a
                  href={method.href}
                  className="mt-5 brand-button brand-button-primary focus-outline"
                >
                  {method.cta}
                </a>
              ) : (
                <Link
                  href={method.href}
                  className="mt-5 brand-button brand-button-primary focus-outline"
                >
                  {method.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <LeadCaptureForm source="contact_intent_form" />

      <section id="locations" className="section-shell">
        <SectionIntro
          kicker="Location and access"
          title="Serving Atlanta athletes through in-person partner facilities and hybrid support."
          copy="MMPT serves local athletes at Maven Baseball Lab and The Hill while also supporting remote and hybrid care through the performance platform."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLocationPoints.map((item) => (
            <article
              key={item.label}
              className="rounded-none border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {item.label}
              </p>
              <p className="mt-4 whitespace-pre-line text-sm text-zinc-200 sm:text-base">
                {item.value}
              </p>
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
