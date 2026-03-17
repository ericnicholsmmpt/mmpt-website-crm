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
              {service.mediaPhones?.length ? (
                <div className="relative h-[12.5rem] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(127,29,29,0.22),transparent_36%),linear-gradient(180deg,rgba(15,6,7,0.98),rgba(28,8,8,0.96))] sm:h-[15rem]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,rgba(185,28,28,0.12)_100%)]" />
                  <div className="relative z-10 flex h-full items-center justify-evenly px-2 sm:px-4">
                    {service.mediaPhones.map((phone, index) => (
                      <div
                        key={phone.src}
                        className={`relative aspect-[9/19.5] h-full shrink-0 ${
                          index === 1 ? "z-10" : ""
                        }`}
                      >
                        <div className="relative h-full rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(52,55,61,0.98),rgba(16,17,20,1))] p-[0.24rem] shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
                          <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black">
                            <div className="pointer-events-none absolute inset-x-[31%] top-1.5 z-10 h-3 rounded-full bg-black/95" />
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
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
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
              <div className="min-w-0 flex flex-wrap items-start justify-between gap-3">
                <p className="min-w-0 text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                  {service.tag}
                </p>
                <div className="pill shrink-0 whitespace-nowrap px-3 py-1.5 text-[0.62rem] sm:text-[0.68rem]">
                  {service.slug === "sports-medicine-physical-therapy"
                    ? "Movement Medicine"
                    : "Movement Performance"}
                </div>
              </div>
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
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={`${bookingUrl}&service=${service.intent}`}
                intent={service.intent}
                label={service.cta}
                className="h-10 w-full px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em] sm:w-auto"
              >
                {service.cta}
              </TrackedLink>
              <Link
                href={`/services#detail-${service.slug}`}
                className="pill h-10 w-full px-4 py-0 text-center text-[0.66rem] tracking-[0.12em] focus-outline sm:w-auto"
              >
                Learn More
              </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
