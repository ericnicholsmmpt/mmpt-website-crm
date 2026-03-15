import { TrackedLink } from "../ui/TrackedLink";
import VideoModalButton from "../ui/VideoModalButton";
import {
  bookingUrl,
  focusAreas,
  platformFeatures,
} from "../../lib/content/site";

const systemHighlights = [
  {
    label: "Objective testing",
    value: "Force plate + motion capture",
    copy: "Testing helps identify movement limitations, capacity gaps, and performance bottlenecks so the next step is easier to understand.",
  },
  {
    label: "Platform-guided programming",
    value: "Progress between visits",
    copy: "Structured programming and ongoing support help athletes keep building outside the clinic, not just during appointments.",
  },
];

export default function PerformanceBoard() {
  return (
    <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-5">
          <div>
            <p className="kicker">Platform-backed system</p>
            <h2 className="mt-2 text-2xl font-semibold heading sm:text-4xl">
              The MMPT System for Recovery and Performance
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Force plates, motion capture, individualized plans, and app-supported
              follow-up help athletes move from evaluation to execution with a clear system.
            </p>
          </div>

          <div className="grid gap-3">
            {platformFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-zinc-300"
              >
                {feature}
              </div>
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

        <div className="grid gap-4">
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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="flex min-h-[13.75rem] flex-col rounded-[1.45rem] border border-white/10 bg-black/65 p-4"
              >
                <p className="min-h-[2.5rem] text-xs uppercase tracking-[0.24em] text-zinc-400">
                  {area.title}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-3xl font-bold heading sm:text-4xl">{area.score}</p>
                  <p className="pb-1 text-sm text-zinc-500">/ 100</p>
                </div>
                <p className="mt-2 min-h-[3.5rem] text-sm text-zinc-400">{area.note}</p>
                <div className="metric-bar mt-auto">
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
        </div>
      </div>
    </section>
  );
}
