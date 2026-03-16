import { processSteps } from "../../lib/content/site";
import SectionIntro from "../ui/SectionIntro";

type ProcessGridProps = {
  id?: string;
  kicker: string;
  title: string;
  copy: string;
};

export default function ProcessGrid({
  id,
  kicker,
  title,
  copy,
}: ProcessGridProps) {
  return (
    <section id={id} className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro kicker={kicker} title={title} copy={copy} />
        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="pill pill-active min-w-[3.2rem] justify-center px-3 py-1.5">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold heading sm:text-2xl">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
