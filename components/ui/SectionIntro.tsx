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
  const width = align === "center" ? "mx-auto max-w-[42rem]" : "max-w-[42rem]";

  return (
    <div className={`${alignment} ${width}`}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 text-[1.55rem] font-semibold heading sm:text-[2.15rem]">{title}</h2>
      <p className="mt-3 text-sm text-zinc-300 sm:text-[0.97rem]">{copy}</p>
    </div>
  );
}
