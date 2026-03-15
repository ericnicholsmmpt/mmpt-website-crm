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
            className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/60"
          >
            <div className="relative border-b border-white/10">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]" />
              <Image
                src={service.image}
                alt={`${service.title} at Movement Medicine`}
                width={1200}
                height={900}
                className="h-[12.5rem] w-full object-cover sm:h-[15rem]"
              />
            </div>
            <div className="flex grow flex-col p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
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
