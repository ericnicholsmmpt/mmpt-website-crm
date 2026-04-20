import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildPageMetadata({
  title: "Support",
  description:
    "Support contact information for Movement Medicine Performance & PT platform, account, assessment, and dashboard questions.",
  path: "/support",
});

export default function SupportPage() {
  const supportTopics = [
    "Platform access issues",
    "Account questions",
    "Assessment scheduling",
    "Program or dashboard questions",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="border-b border-white/10 pb-6">
          <p className="text-sm font-semibold uppercase text-red-300">Help</p>
          <h1 className="mt-3 text-3xl font-semibold heading text-white sm:text-4xl">
            Support
          </h1>
        </header>

        <section
          aria-label="Support information"
          className="mt-8 rounded-lg bg-white px-4 py-6 text-zinc-950 shadow-2xl sm:px-8 sm:py-9"
        >
          <div className="space-y-8 text-[0.95rem] leading-7 sm:text-base">
            <section aria-labelledby="support-contact">
              <h2 id="support-contact" className="text-xl font-semibold text-zinc-950">
                Contact
              </h2>
              <div className="mt-4 space-y-2">
                <p>
                  Email:{" "}
                  <a className="underline underline-offset-4" href="mailto:eric@mmptperformance.com">
                    eric@mmptperformance.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a className="underline underline-offset-4" href="tel:+17702985893">
                    (770) 298-5893
                  </a>
                </p>
              </div>
            </section>

            <section aria-labelledby="support-help">
              <h2 id="support-help" className="text-xl font-semibold text-zinc-950">
                What We Help With
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {supportTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="support-response">
              <h2 id="support-response" className="text-xl font-semibold text-zinc-950">
                Response Expectations
              </h2>
              <p className="mt-4">We typically respond within 24-48 hours.</p>
            </section>
          </div>
        </section>
      </article>
    </main>
  );
}
