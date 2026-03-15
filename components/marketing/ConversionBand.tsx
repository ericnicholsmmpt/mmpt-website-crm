import type { ReactNode } from "react";

type ConversionBandProps = {
  kicker: string;
  title: string;
  copy: string;
  actions: ReactNode;
};

export default function ConversionBand({
  kicker,
  title,
  copy,
  actions,
}: ConversionBandProps) {
  return (
    <section className="section-shell rounded-[2rem] p-5 card sm:p-9">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="kicker">{kicker}</p>
          <h2 className="mt-2 text-2xl font-semibold heading sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
            {copy}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row [&>*]:h-10 [&>*]:w-full [&>*]:px-4 [&>*]:py-0 [&>*]:text-[0.66rem] [&>*]:leading-none [&>*]:tracking-[0.12em] sm:[&>*]:w-auto">
          {actions}
        </div>
      </div>
    </section>
  );
}
