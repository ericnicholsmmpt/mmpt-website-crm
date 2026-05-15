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
    <section id={id} className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro kicker={kicker} title={title} copy={copy} />
        <div className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-[1rem] border border-white/10 bg-black/45 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="pill pill-active min-w-[2.8rem] justify-center px-2.5 py-1">
                  {item.step}
                </div>
                <h3 className="text-[1.05rem] font-semibold heading sm:text-[1.2rem]">{item.title}</h3>
              </div>
              <p className="mt-2.5 text-sm text-zinc-300 sm:text-[0.95rem]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
