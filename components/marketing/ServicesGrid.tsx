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
    <section id={id} className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <SectionIntro kicker={kicker} title={title} copy={copy} />

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="min-w-0 flex h-full flex-col overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/55"
          >
            <div className="relative border-b border-white/10">
              {service.slug !== "remote-coaching-and-follow-up" &&
              service.slug !== "precision-arm-care-program" ? (
                <div
                  className={`pill absolute z-20 shrink-0 whitespace-nowrap bg-[#0d0f12]/95 px-3 py-1 text-[0.54rem] tracking-[0.1em] shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:text-[0.6rem] ${
                    service.badgeClassName ?? "left-3 top-3 sm:left-4 sm:top-4"
                  }`}
                >
                  {service.slug === "sports-medicine-physical-therapy"
                    ? "Movement Medicine"
                    : "Movement Performance"}
                </div>
              ) : null}
              {service.mediaPhones?.length ? (
                <div className="relative h-[12.5rem] overflow-hidden bg-[linear-gradient(180deg,rgba(12,14,17,0.98),rgba(6,7,9,0.98))] sm:h-[15rem]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_36%,rgba(185,28,28,0.06)_100%)]" />
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

                          <div className="relative h-full rounded-[1rem] bg-[linear-gradient(145deg,rgba(226,228,233,0.9)_0%,rgba(125,131,141,0.9)_9%,rgba(15,17,21,1)_12%,rgba(7,8,10,1)_84%,rgba(150,156,166,0.86)_100%)] p-[0.08rem] shadow-[0_14px_34px_rgba(0,0,0,0.32)] ring-1 ring-white/8">
                            <div className="pointer-events-none absolute inset-[0.04rem] rounded-[0.94rem] border border-black/70" />
                            <div className="relative h-full rounded-[0.92rem] bg-black p-[0.09rem]">
                              <div className="relative h-full overflow-hidden rounded-[0.8rem] border border-white/5 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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
                      "bg-[linear-gradient(180deg,rgba(4,5,6,0.08)_0%,rgba(4,5,6,0.24)_42%,rgba(4,5,6,0.9)_100%)]"
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
            <div className="min-w-0 flex grow flex-col p-4 sm:p-5">
              <p className="min-w-0 text-[0.66rem] font-semibold uppercase leading-tight tracking-[0.12em] text-red-300 sm:text-[0.7rem]">
                {service.tag}
              </p>
              <h3 className="mt-3 text-[1.15rem] font-semibold heading sm:text-[1.32rem]">{service.title}</h3>
              <p className="mt-2.5 text-sm text-zinc-300 sm:text-[0.95rem]">
                {service.summary}
              </p>
              <ul className="mt-4 grow divide-y divide-white/10 border-y border-white/10 text-sm text-zinc-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="py-2.5">
                    {bullet}
                  </li>
                ))}
              </ul>
              {service.serviceNote ? (
                <div className="mt-4 border-l border-amber-400/35 bg-amber-500/5 px-3 py-2">
                  <p className="text-sm text-amber-50/90 sm:text-[0.92rem]">
                    {service.serviceNote}
                  </p>
                </div>
              ) : null}
              <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <TrackedLink
                  href={service.ctaHref ?? `${bookingUrl}&service=${service.intent}`}
                  intent={service.intent}
                  label={service.cta}
                  className="h-10 w-full px-4 py-0 text-[0.64rem] leading-none tracking-[0.08em] sm:w-auto"
                >
                  {service.cta}
                </TrackedLink>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                  <Link
                    href={`/services#detail-${service.slug}`}
                    className="pill h-10 w-full px-4 py-0 text-center text-[0.64rem] tracking-[0.08em] focus-outline sm:w-auto"
                  >
                    Learn More
                  </Link>
                  <div className="shrink-0 border-l border-red-500/30 pl-3 text-left sm:text-right">
                    {service.priceLines.map((priceLine) => (
                      <p
                        key={priceLine}
                        className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-red-100"
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
