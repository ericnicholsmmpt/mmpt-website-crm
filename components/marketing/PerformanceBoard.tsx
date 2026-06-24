import Image from "next/image";
import dynamic from "next/dynamic";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

const VideoModalButton = dynamic(() => import("../ui/VideoModalButton"));

const systemHighlights = [
  {
    label: "Objective testing",
    value: "Force plate + motion capture",
    copy: "Testing identifies movement limitations, capacity gaps, and performance bottlenecks so the next step is clear.",
  },
  {
    label: "Platform-guided programming",
    value: "Progress between visits",
    copy: "Structured programming and ongoing support keep athletes progressing between visits, not just during appointments.",
  },
];

const platformScreens = [
  {
    src: "/images/mmpt-app-profile-screen.png",
    alt: "MMPT app profile screen showing baseball movement and arm capacity scores",
  },
  {
    src: "/images/mmpt-app-program-screen.png",
    alt: "MMPT app program screen showing assigned training and recovery programs",
  },
  {
    src: "/images/mmpt-app-progress-screen.png",
    alt: "MMPT app progress screen showing movement score and metric breakdowns",
  },
];

export default function PerformanceBoard() {
  return (
    <section className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-5">
          <div>
            <p className="kicker">Athlete Movement Assessment</p>
            <h2 className="mt-2 text-[1.55rem] font-semibold heading sm:text-[2.1rem]">
              The MMPT System for Recovery and Performance
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-[0.97rem]">
              A clear path from assessment to action.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {systemHighlights.map((item) => (
              <article key={item.label} className="rounded-[1rem] border border-white/10 bg-black/45 p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-red-300">
                  {item.label}
                </p>
                <h3 className="mt-2.5 text-[1.08rem] font-semibold heading sm:text-[1.24rem]">{item.value}</h3>
                <p className="mt-2.5 text-sm text-zinc-300 sm:text-[0.94rem]">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="performance_board_assessment"
              label="Book Assessment From Performance Board"
              className="h-10 w-full whitespace-nowrap px-4 py-0 text-[0.64rem] leading-none tracking-[0.08em] sm:w-auto"
            >
              Book Assessment
            </TrackedLink>
            <VideoModalButton
              label="See how the assessment works"
              title="See how the Athlete Assessment works"
              videoId="xyhkowCiOQw"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:pl-4">
          <div className="max-w-xl">
            <p className="text-sm text-zinc-300 sm:text-[0.95rem]">
              Your mobility, strength, and power metrics benchmarked against athletes at your
              level and delivered inside the MMPT platform.
            </p>
          </div>

          <div className="grid grid-cols-3 items-end gap-2 sm:gap-3">
            {platformScreens.map((screen, index) => (
              <div
                key={screen.src}
                className="relative mx-auto w-full max-w-[9rem] sm:max-w-[10.2rem] xl:max-w-[11.4rem]"
              >
                <div className="relative aspect-[1320/2682] rounded-[1.35rem] bg-[linear-gradient(145deg,rgba(226,228,233,0.92)_0%,rgba(120,126,138,0.9)_7%,rgba(17,19,23,1)_11%,rgba(5,6,8,1)_86%,rgba(150,156,166,0.84)_100%)] p-[0.12rem] shadow-[0_18px_54px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:rounded-[1.75rem]">
                  <div className="pointer-events-none absolute -left-[0.08rem] top-[21%] h-6 w-[0.09rem] rounded-full bg-zinc-300/70" />
                  <div className="pointer-events-none absolute -left-[0.08rem] top-[31%] h-10 w-[0.09rem] rounded-full bg-zinc-400/70" />
                  <div className="pointer-events-none absolute -right-[0.08rem] top-[27%] h-12 w-[0.09rem] rounded-full bg-zinc-400/70" />
                  <div className="relative h-full overflow-hidden rounded-[1.22rem] border border-black/80 bg-black sm:rounded-[1.58rem]">
                    <div className="pointer-events-none absolute left-1/2 top-3 z-20 h-1 w-9 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/8 sm:top-4 sm:w-11" />
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={1320}
                      height={2698}
                      sizes="(min-width: 1024px) 10rem, (min-width: 640px) 28vw, 30vw"
                      className="h-full w-full object-cover object-top"
                      priority={index === 1}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(108deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.025)_16%,transparent_34%,transparent_72%,rgba(255,255,255,0.03)_88%,rgba(255,255,255,0.08)_100%)] opacity-35 mix-blend-screen" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
