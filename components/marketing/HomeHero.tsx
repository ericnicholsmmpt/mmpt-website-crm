import Image from "next/image";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

export default function HomeHero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden border-b border-red-800/40 bg-black sm:min-h-[90vh]">
      <Image
        src="/images/home-hero.jpeg"
        alt="MMPT clinician guiding an athlete through movement work"
        width={1152}
        height={768}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[76%_center] sm:object-[72%_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,5,0.96)_0%,rgba(4,4,5,0.9)_34%,rgba(4,4,5,0.64)_62%,rgba(4,4,5,0.76)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,4,5,0.98)_0%,rgba(4,4,5,0.95)_28%,rgba(4,4,5,0.76)_52%,rgba(4,4,5,0.28)_74%,rgba(4,4,5,0.56)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:min-h-[90vh] sm:items-center sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="max-w-md sm:max-w-xl">
          <p className="kicker">Sports medicine + athlete performance</p>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1] tracking-tight text-zinc-400 heading sm:text-5xl">
            Data-Driven Decisions
            <span className="mt-2 block text-white">Data-Proven Systems</span>
          </h1>

          <div className="mt-5 h-1.5 w-44 overflow-hidden rounded-full bg-zinc-800 sm:mt-6 sm:w-60">
            <div className="h-full w-28 rounded-full bg-red-600 sm:w-40" />
          </div>

          <p className="mt-5 max-w-lg text-base text-zinc-300 sm:mt-6 sm:text-xl">
            Platform-guided programming for recovery, performance, and return to sport.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="hero_assessment"
              label="Book Athlete Assessment"
              className="px-6 py-3 text-xs"
            >
              Book Athlete Assessment
            </TrackedLink>
            <TrackedLink
              href={`${bookingUrl}&service=pt`}
              intent="hero_pt"
              label="Book Sports PT"
              variant="ghost"
              className="px-6 py-3 text-xs"
            >
              Book Sports PT
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
