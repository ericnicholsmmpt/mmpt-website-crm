import dynamic from "next/dynamic";
import { TrackedLink } from "../ui/TrackedLink";
import {
  bookingUrl,
  focusAreas,
} from "../../lib/content/site";

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

export default function PerformanceBoard() {
  return (
    <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-5">
          <div>
            <p className="kicker">Athlete Movement Assessment</p>
            <h2 className="mt-2 text-2xl font-semibold heading sm:text-4xl">
              The MMPT System for Recovery and Performance
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              A clear path from assessment to action.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systemHighlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-black/60 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold heading sm:text-2xl">{item.value}</h3>
                <p className="mt-3 text-sm text-zinc-300 sm:text-base">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <TrackedLink
              href={`${bookingUrl}&service=athlete_assessment`}
              intent="performance_board_assessment"
              label="Book Assessment From Performance Board"
              className="h-10 w-full whitespace-nowrap px-4 py-0 text-[0.68rem] leading-none tracking-[0.12em] sm:w-auto"
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
            <p className="text-sm text-zinc-300 sm:text-base">
              Your mobility, strength, and power metrics benchmarked against athletes at your
              level and delivered inside the MMPT platform.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[14.6rem] sm:max-w-[15.8rem]">
            <div className="relative rounded-[3.25rem] border border-white/12 bg-[linear-gradient(180deg,rgba(46,49,55,0.98),rgba(14,15,18,1))] p-[0.42rem] shadow-[0_36px_120px_rgba(0,0,0,0.72)]">
              <div className="pointer-events-none absolute -left-[0.16rem] top-24 hidden h-10 w-[0.18rem] rounded-full bg-white/22 lg:block" />
              <div className="pointer-events-none absolute -left-[0.16rem] top-38 hidden h-14 w-[0.18rem] rounded-full bg-white/22 lg:block" />
              <div className="pointer-events-none absolute -right-[0.16rem] top-30 hidden h-18 w-[0.18rem] rounded-full bg-white/22 lg:block" />

              <div className="relative flex h-[27.5rem] flex-col overflow-hidden rounded-[2.9rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.16),transparent_26%),linear-gradient(180deg,#131113_0%,#151113_46%,#1c0e10_100%)] px-3 pb-4 pt-4 sm:h-[31.75rem] sm:px-3.5 sm:pb-4.5">
                <div className="pointer-events-none absolute inset-x-[29%] top-2.5 h-5.5 rounded-full bg-black/92 shadow-[0_6px_18px_rgba(0,0,0,0.42)]" />

                <div className="mt-5 flex items-center justify-between text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    <span className="h-2.5 w-5 rounded-full border border-zinc-500/90" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-1.5 sm:gap-2">
                    {focusAreas.map((area) => (
                      <article
                        key={area.title}
                        className="flex min-h-[5.6rem] flex-col rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,11,0.98),rgba(8,8,9,0.95))] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:min-h-[6.3rem] sm:rounded-[1.2rem] sm:px-2.5 sm:py-2.5"
                      >
                        <p className="text-[0.42rem] uppercase tracking-[0.18em] text-zinc-400 sm:text-[0.48rem] sm:tracking-[0.2em]">
                          {area.title}
                        </p>
                        <div className="mt-1.5 flex items-end gap-1 sm:mt-2">
                          <p className="text-[1.2rem] font-bold leading-none heading text-white sm:text-[1.5rem]">
                            {area.score}
                          </p>
                          <p className="pb-0.5 text-[0.56rem] text-zinc-500 sm:text-[0.66rem]">/ 100</p>
                        </div>
                        <p className="mt-1 h-[1.28rem] overflow-hidden text-[0.44rem] leading-snug text-zinc-400 sm:mt-1.5 sm:h-[1.5rem] sm:text-[0.52rem]">
                          {area.note}
                        </p>
                        <div className="metric-bar mt-auto h-[0.34rem] sm:h-[0.45rem]">
                          <div
                            className="metric-fill"
                            style={{
                              width: area.width,
                              background:
                                Number(area.score) >= 75
                                  ? "linear-gradient(90deg, #16a34a 0%, #22c55e 100%)"
                                  : "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)",
                            }}
                          />
                        </div>
                      </article>
                    ))}
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="h-1.5 w-18 rounded-full bg-white/75 sm:w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
