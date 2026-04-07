import Image from "next/image";
import Link from "next/link";
import { services } from "../../lib/content/site";
import { TrackedLink } from "../ui/TrackedLink";
import SectionIntro from "../ui/SectionIntro";
import { bookingUrl } from "../../lib/content/site";

type ServicesGridProps = {
  id?: string;
  kicker: string;
  title: string;
  copy: string;
};

export default function ServicesGrid({
  id,
  kicker,
  title,
  copy,
}: ServicesGridProps) {
  return (
    <section id={id} className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <SectionIntro kicker={kicker} title={title} copy={copy} />

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="min-w-0 flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/60"
          >
            <div className="relative border-b border-white/10">
              {service.slug !== "remote-coaching-and-follow-up" &&
              service.slug !== "precision-arm-care-program" ? (
                <div className="pill absolute left-3 top-3 z-20 shrink-0 whitespace-nowrap bg-black/80 px-3 py-1.5 text-[0.56rem] tracking-[0.14em] shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[0.64rem]">
                  {service.slug === "sports-medicine-physical-therapy"
                    ? "Movement Medicine"
                    : "Movement Performance"}
                </div>
              ) : null}
              {service.mediaPhones?.length ? (
                <div className="relative h-[12.5rem] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(127,29,29,0.22),transparent_36%),linear-gradient(180deg,rgba(15,6,7,0.98),rgba(28,8,8,0.96))] sm:h-[15rem]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,rgba(185,28,28,0.12)_100%)]" />
                  <div className="relative z-10 flex h-full items-center justify-evenly gap-2 px-3 sm:gap-3 sm:px-5">
                    {service.mediaPhones.map((phone) => {
                      return (
                        <div
                          key={phone.src}
                          className="relative aspect-[9/19.2] h-[92%] shrink-0"
                        >
                          <div className="pointer-events-none absolute -left-[0.08rem] top-[23%] h-6 w-[0.14rem] rounded-full bg-[linear-gradient(180deg,rgba(238,242,247,0.45),rgba(67,76,89,0.92))]" />
                          <div className="pointer-events-none absolute -left-[0.08rem] top-[31%] h-10 w-[0.14rem] rounded-full bg-[linear-gradient(180deg,rgba(238,242,247,0.35),rgba(48,56,68,0.92))]" />
                          <div className="pointer-events-none absolute -right-[0.08rem] top-[28%] h-12 w-[0.14rem] rounded-full bg-[linear-gradient(180deg,rgba(238,242,247,0.35),rgba(48,56,68,0.92))]" />

                          <div className="relative h-full rounded-[1.9rem] bg-[linear-gradient(145deg,rgba(130,136,146,0.92)_0%,rgba(48,54,63,0.98)_16%,rgba(18,20,24,1)_42%,rgba(11,12,15,1)_58%,rgba(74,80,90,0.96)_100%)] p-[0.14rem] shadow-[0_22px_54px_rgba(0,0,0,0.52)] ring-1 ring-white/8">
                            <div className="pointer-events-none absolute inset-[0.06rem] rounded-[1.82rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_18%,rgba(0,0,0,0.14)_100%)]" />
                            <div className="relative h-full rounded-[1.78rem] bg-[linear-gradient(180deg,rgba(14,16,19,1),rgba(6,7,9,1))] p-[0.12rem]">
                              <div className="relative h-full overflow-hidden rounded-[1.62rem] border border-white/7 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                <div className="pointer-events-none absolute inset-x-[30%] top-[0.34rem] z-20 h-[0.72rem] rounded-full bg-black shadow-[0_2px_8px_rgba(0,0,0,0.7)] ring-1 ring-white/8" />
                                <div className="pointer-events-none absolute left-1/2 top-[0.62rem] z-20 h-[0.14rem] w-7 -translate-x-1/2 rounded-full bg-zinc-800/90" />
                                <div className="pointer-events-none absolute right-[36%] top-[0.47rem] z-20 h-1.5 w-1.5 rounded-full bg-zinc-700/95 ring-1 ring-black/60" />

                                <Image
                                  src={phone.src}
                                  alt={phone.alt}
                                  width={700}
                                  height={1400}
                                  sizes="(min-width: 640px) 14rem, 26vw"
                                  className={`h-full w-full ${
                                    phone.fit === "contain"
                                      ? "object-contain object-center"
                                      : "object-cover object-top"
                                  } ${phone.imageClassName ?? ""}`}
                                />

                                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(112deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_14%,transparent_30%,transparent_70%,rgba(255,255,255,0.05)_86%,rgba(255,255,255,0.1)_100%)] opacity-40 mix-blend-screen" />
                                <div className="pointer-events-none absolute inset-y-4 left-0 z-10 w-[14%] bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent)] opacity-25" />
                                <div className="pointer-events-none absolute inset-x-[37%] bottom-1.5 z-20 h-[0.18rem] w-[26%] rounded-full bg-white/16 shadow-[0_0_12px_rgba(255,255,255,0.08)]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]" />
                  <Image
                    src={service.image}
                    alt={`${service.title} support at Movement Medicine Performance & PT in Atlanta`}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-[12.5rem] w-full object-cover sm:h-[15rem]"
                  />
                </>
              )}
            </div>
            <div className="min-w-0 flex grow flex-col p-5">
              <p className="min-w-0 text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.16em] text-red-300 sm:text-xs sm:tracking-[0.2em]">
                {service.tag}
              </p>
              <h3 className="mt-4 text-xl font-semibold heading sm:text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">
                {service.summary}
              </p>
              <ul className="mt-4 grid grow gap-2 text-sm text-zinc-400">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {service.serviceNote ? (
                <div className="mt-5 rounded-[1rem] border border-amber-400/20 bg-amber-500/10 px-3 py-3">
                  <p className="text-sm text-amber-50/90">
                    {service.serviceNote}
                  </p>
                </div>
              ) : null}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <TrackedLink
                  href={service.ctaHref ?? `${bookingUrl}&service=${service.intent}`}
                  intent={service.intent}
                  label={service.cta}
                  className="h-10 w-full px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em] sm:w-auto"
                >
                  {service.cta}
                </TrackedLink>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    href={`/services#detail-${service.slug}`}
                    className="pill h-10 w-full px-4 py-0 text-center text-[0.66rem] tracking-[0.12em] focus-outline sm:w-auto"
                  >
                    Learn More
                  </Link>
                  <div className="shrink-0 rounded-[1rem] border border-red-400/20 bg-red-950/20 px-3 py-2 text-right">
                    {service.priceLines.map((priceLine) => (
                      <p
                        key={priceLine}
                        className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-red-100"
                      >
                        {priceLine}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
