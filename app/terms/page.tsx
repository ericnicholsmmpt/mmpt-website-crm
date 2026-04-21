import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";

const termsFilePath = join(
  process.cwd(),
  "app",
  "legal",
  "terms_conditions_v1_2026-04-16.md"
);

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Movement Medicine Physical Therapy, LLC athlete assessments and dashboard access.",
  path: "/terms",
});

function readTerms() {
  const source = readFileSync(termsFilePath, "utf8").trimEnd();
  const [title = "Terms & Conditions", effectiveLine = "", ...bodyLines] =
    source.split(/\r?\n/);
  const effectiveDate = effectiveLine.replace(/^Effective Date:\s*/, "");
  const paragraphs = bodyLines.filter((line) => line.trim().length > 0);

  return {
    title,
    effectiveDate,
    paragraphs,
  };
}

export default function TermsPage() {
  const terms = readTerms();

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="border-b border-white/10 pb-6">
          <p className="text-sm font-semibold uppercase text-red-300">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold heading text-white sm:text-4xl">
            {terms.title}
          </h1>
          <p className="mt-4 text-base text-zinc-300">
            Effective Date:{" "}
            <time dateTime="2026-04-16">{terms.effectiveDate}</time>
          </p>
        </header>

        <section
          aria-label="Terms and Conditions"
          className="mt-8 rounded-lg bg-white px-4 py-6 text-zinc-950 shadow-2xl sm:px-8 sm:py-9"
        >
          <div className="space-y-5 text-[0.95rem] leading-7 sm:text-base">
            {terms.paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap [overflow-wrap:anywhere]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
