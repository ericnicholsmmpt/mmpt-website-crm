import Image from "next/image";
import SectionIntro from "../ui/SectionIntro";
import { TrackedLink } from "../ui/TrackedLink";

const googleReviewsHref =
  "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ53q2X5gb9YgR_fFchGsLfhA";

const reviewHighlights = [
  {
    quote:
      '"Knowledgeable, professional and genuine. Eric Nichols and Movement Medicine PT has to be the go-to place for in season maintenance and injury rehab."',
    author: "A Purdy • June 12, 2024",
  },
];

export default function ProofSection() {
  return (
    <section id="proof" className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <SectionIntro
        kicker="Built by Athletes for Athletes"
        title="Sports medicine care backed by objective testing, premium facilities, and data-proven systems."
        copy="MMPT combines high-level clinical care, objective testing, and platform-guided programming to help athletes recover, perform, and return with confidence."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/65">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.22)_42%,rgba(5,6,7,0.88)_100%)]" />
          <Image
            src="/images/trusted-care.jpeg"
            alt="Movement Medicine clinician working with an athlete during sports rehab in Atlanta"
            width={1203}
            height={803}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="h-[16rem] w-full object-cover object-[50%_32%] sm:h-[20rem] lg:h-[24rem]"
          />
        </div>

        <div className="grid gap-4">
          <article className="rounded-[1rem] border border-white/10 bg-black/45 p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-red-300">
              5-star Google rating
            </p>
            <h3 className="mt-3 text-[1.22rem] font-semibold heading sm:text-[1.45rem]">Trusted by athletes and families</h3>

            <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {reviewHighlights.map((review) => (
                <div
                  key={review.quote}
                  className="py-4"
                >
                  <p className="text-sm font-medium text-white sm:text-[0.92rem]">{review.quote}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.12em] text-zinc-400">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>

            <TrackedLink
              href={googleReviewsHref}
              intent="proof_google_reviews"
              label="Read Google Reviews"
              variant="ghost"
              className="mt-4 w-full px-4 py-2 text-[0.68rem] sm:w-auto"
            >
              Read Google Reviews
            </TrackedLink>
          </article>
        </div>
      </div>
    </section>
  );
}
