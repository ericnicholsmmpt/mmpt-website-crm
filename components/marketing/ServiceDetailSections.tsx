import Link from "next/link";
import { services } from "../../lib/content/site";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

export default function ServiceDetailSections() {
  return (
    <section className="grid gap-6">
      {services.map((service) => (
        <article
          key={service.slug}
          id={`detail-${service.slug}`}
          className="section-shell rounded-[2rem] p-5 card sm:p-9"
        >
          <p className="kicker">{service.tag}</p>
          <h2 className="mt-2 text-2xl font-semibold heading sm:text-4xl">
            {service.title}
          </h2>
          <p className="mt-4 max-w-4xl text-sm text-zinc-300 sm:text-base">
            {service.summary}
          </p>

          <div className="mt-5 grid gap-3 xl:grid-cols-3">
            <div className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                Best for
              </p>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                {service.audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-2.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                What it includes
              </p>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-2.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                Why MMPT
              </p>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                {service.differentiators.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-2.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={service.ctaHref ?? `${bookingUrl}&service=${service.intent}`}
              intent={`${service.intent}_detail`}
              label={service.cta}
              className="h-10 w-full px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em] sm:w-auto"
            >
              {service.cta}
            </TrackedLink>
            {service.secondaryCtaHref ? (
              <TrackedLink
                href={service.secondaryCtaHref}
                intent={service.secondaryCtaIntent ?? `${service.intent}_secondary`}
                label={service.secondaryCtaLabel ?? "Talk With Our Team"}
                variant="ghost"
                className="h-10 w-full px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em] sm:w-auto"
              >
                {service.secondaryCtaLabel ?? "Talk With Our Team"}
              </TrackedLink>
            ) : (
              <Link
                href="/contact"
                className="pill h-10 w-full px-4 py-0 text-center text-[0.66rem] tracking-[0.12em] focus-outline sm:w-auto"
              >
                Talk With Our Team
              </Link>
            )}
          </div>

          <div className="mt-6 grid gap-3">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.35rem] border border-white/10 bg-black/60 p-4"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-100">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-zinc-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
