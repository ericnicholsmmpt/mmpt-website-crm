import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";

const policyFilePath = join(
  process.cwd(),
  "app",
  "legal",
  "privacy_policy_v1_2026-04-15.md"
);

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Movement Medicine Physical Therapy, LLC and the Movement Medicine Player/Coach Dashboard.",
  path: "/privacy",
});

function readPrivacyPolicy() {
  const source = readFileSync(policyFilePath, "utf8").trimEnd();
  const [title = "Privacy Policy", effectiveLine = "", ...policyLines] =
    source.split(/\r?\n/);
  const effectiveDate = effectiveLine.replace(/^Effective Date:\s*/, "");
  const paragraphs = policyLines.filter((line) => line.trim().length > 0);

  return {
    title,
    effectiveDate,
    paragraphs,
  };
}

export default function PrivacyPage() {
  const policy = readPrivacyPolicy();

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="border-b border-white/10 pb-6">
          <p className="text-sm font-semibold uppercase text-red-300">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold heading text-white sm:text-4xl">
            {policy.title}
          </h1>
          <p className="mt-4 text-base text-zinc-300">
            Effective Date:{" "}
            <time dateTime="2026-04-15">{policy.effectiveDate}</time>
          </p>
        </header>

        <section
          aria-label="Privacy Policy"
          className="mt-8 rounded-lg bg-white px-4 py-6 text-zinc-950 shadow-2xl sm:px-8 sm:py-9"
        >
          <div className="space-y-5 text-[0.95rem] leading-7 sm:text-base">
            {policy.paragraphs.map((paragraph, index) => (
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
