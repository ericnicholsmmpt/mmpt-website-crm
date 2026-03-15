type SectionIntroProps = {
  kicker: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  kicker,
  title,
  copy,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const width = align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={`${alignment} ${width}`}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold heading sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-zinc-300 sm:text-base">{copy}</p>
    </div>
  );
}
