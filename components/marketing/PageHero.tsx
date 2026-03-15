import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: string;
  copy: string;
  actions?: ReactNode;
  titleClassName?: string;
  copyClassName?: string;
};

export default function PageHero({
  kicker,
  title,
  copy,
  actions,
  titleClassName = "text-2xl sm:text-[3.7rem]",
  copyClassName = "text-sm sm:text-[1rem]",
}: PageHeroProps) {
  return (
    <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <p className="kicker">{kicker}</p>
      <h1
        className={`mt-3 max-w-5xl font-bold leading-[0.98] heading ${titleClassName}`}
      >
        {title}
      </h1>
      <p className={`mt-4 max-w-3xl text-zinc-300 ${copyClassName}`}>{copy}</p>
      {actions ? (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
          {actions}
        </div>
      ) : null}
    </section>
  );
}
