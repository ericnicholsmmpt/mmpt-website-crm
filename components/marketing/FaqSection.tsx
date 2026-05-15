import type { ServiceFaq } from "../../lib/content/site";
import SectionIntro from "../ui/SectionIntro";

type FaqSectionProps = {
  kicker: string;
  title: string;
  copy: string;
  items: ServiceFaq[];
};

export default function FaqSection({
  kicker,
  title,
  copy,
  items,
}: FaqSectionProps) {
  return (
    <section className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <SectionIntro kicker={kicker} title={title} copy={copy} />

      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.1rem] border border-white/10 bg-black/55 p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold heading sm:text-xl">
              {item.question}
            </summary>
            <p className="mt-4 max-w-3xl text-sm text-zinc-300 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
