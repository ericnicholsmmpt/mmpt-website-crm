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
                <div
                  className={`pill absolute z-20 shrink-0 whitespace-nowrap bg-black/80 px-3 py-1.5 text-[0.56rem] tracking-[0.14em] shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:text-[0.64rem] ${
                    service.badgeClassName ?? "left-3 top-3 sm:left-4 sm:top-4"
                  }`}
                >
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
                          <div className="pointer-events-none absolute -left-[0.06rem] top-[22%] h-8 w-[0.08rem] rounded-full bg-[linear-gradient(180deg,rgba(243,244,246,0.72),rgba(120,126,138,0.92))]" />
                          <div className="pointer-events-none absolute -left-[0.06rem] top-[33%] h-14 w-[0.08rem] rounded-full bg-[linear-gradient(180deg,rgba(243,244,246,0.6),rgba(108,115,128,0.92))]" />
                          <div className="pointer-events-none absolute -right-[0.06rem] top-[27%] h-16 w-[0.08rem] rounded-full bg-[linear-gradient(180deg,rgba(243,244,246,0.62),rgba(108,115,128,0.92))]" />

                          <div className="relative h-full rounded-[1.3rem] bg-[linear-gradient(145deg,rgba(226,228,233,0.96)_0%,rgba(125,131,141,0.94)_9%,rgba(15,17,21,1)_12%,rgba(7,8,10,1)_84%,rgba(150,156,166,0.9)_100%)] p-[0.08rem] shadow-[0_22px_54px_rgba(0,0,0,0.42)] ring-1 ring-white/10">
                            <div className="pointer-events-none absolute inset-[0.04rem] rounded-[1.22rem] border border-black/70" />
                            <div className="relative h-full rounded-[1.2rem] bg-black p-[0.09rem]">
                              <div className="relative h-full overflow-hidden rounded-[1.06rem] border border-white/5 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                                <div className="pointer-events-none absolute left-1/2 top-[0.22rem] z-20 h-[0.16rem] w-8 -translate-x-1/2 rounded-full bg-zinc-700/85" />

                                <div className="absolute inset-0">
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
                                </div>

                                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(108deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.025)_14%,transparent_28%,transparent_72%,rgba(255,255,255,0.03)_88%,rgba(255,255,255,0.07)_100%)] opacity-35 mix-blend-screen" />
                                <div className="pointer-events-none absolute inset-x-[36%] bottom-1.5 z-20 h-[0.16rem] w-[28%] rounded-full bg-white/14" />
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
                  <div
                    className={`absolute inset-0 z-10 ${
                      service.imageOverlayClassName ??
                      "bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]"
                    }`}
                  />
                  <Image
                    src={service.image}
                    alt={`${service.title} support at Movement Medicine Performance & PT in Atlanta`}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`h-[12.5rem] w-full object-cover sm:h-[15rem] ${service.imageClassName ?? ""}`}
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
