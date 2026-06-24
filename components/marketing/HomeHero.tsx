import Image from "next/image";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

export default function HomeHero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden border-b border-white/10 bg-black sm:min-h-[90vh]">
      <Image
        src="/images/home-hero.jpeg"
        alt="Sports physical therapist guiding an athlete through movement assessment at Movement Medicine in Atlanta"
        width={1152}
        height={768}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[76%_center] sm:object-[72%_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.98)_0%,rgba(5,6,7,0.92)_38%,rgba(5,6,7,0.72)_64%,rgba(5,6,7,0.82)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,6,7,0.99)_0%,rgba(5,6,7,0.96)_30%,rgba(5,6,7,0.8)_54%,rgba(5,6,7,0.36)_76%,rgba(5,6,7,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[82vh] w-full max-w-[1440px] items-end px-4 pb-14 pt-28 sm:min-h-[90vh] sm:items-center sm:px-7 sm:pb-18 sm:pt-32 lg:px-10 xl:px-12 2xl:px-14">
        <div className="max-w-md sm:max-w-[34rem]">
          <p className="kicker">Baseball testing + sports PT</p>
          <h1 className="mt-4 text-[1.85rem] font-bold leading-[0.98] tracking-tight text-white heading sm:text-[3.65rem]">
            Baseball performance testing that turns data into a better training plan.
          </h1>

          <div className="mt-5 h-px w-44 overflow-hidden bg-white/15 sm:mt-6 sm:w-60">
            <div className="h-full w-28 bg-red-600 sm:w-40" />
          </div>

          <p className="mt-5 max-w-2xl text-[0.98rem] text-zinc-300 sm:mt-6 sm:text-[1.08rem]">
            MMPT combines sports physical therapy, motion capture, force testing, strength measures, and baseball-specific programming to help athletes understand what is limiting mobility, power, throwing durability, and return-to-sport readiness.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="hero_assessment"
              label="Book Athlete Assessment"
              className="px-5 py-2.5 text-[0.72rem]"
            >
              Book Athlete Assessment
            </TrackedLink>
            <TrackedLink
              href="#process"
              intent="hero_assessment_process"
              label="See How Assessment Works"
              variant="ghost"
              className="px-5 py-2.5 text-[0.72rem]"
            >
              See How Assessment Works
            </TrackedLink>
          </div>

          <TrackedLink
            href="/services#team-assessments"
            intent="hero_team_testing"
            label="Request Team Testing"
            variant="ghost"
            className="mt-3 px-4 py-2 text-[0.66rem]"
          >
            Coach or team? Request team testing.
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
