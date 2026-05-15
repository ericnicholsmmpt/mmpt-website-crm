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

          <div className="mx-auto w-full max-w-[14.6rem] sm:max-w-[15.8rem]">
            <Image
              src="/images/performance-board-phone.png"
              alt="MMPT platform phone dashboard showing mobility, strength, and power assessment results"
              width={718}
              height={1536}
              sizes="(min-width: 640px) 15.8rem, 14.6rem"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
