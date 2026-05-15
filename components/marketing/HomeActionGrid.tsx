import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl } from "../../lib/content/site";

const actionCards = [
  {
    title: "Sports PT",
    subtitle: "Pain, injury, return to sport",
    image: "/images/sports-pt-current.jpeg",
    imageClassName: "object-[56%_58%]",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]",
    href: `${bookingUrl}&service=pt`,
    intent: "home_card_pt",
    label: "Book PT",
  },
  {
    title: "Athlete Assessment",
    subtitle: "Force plate, movement, next-step clarity",
    image: "/images/mmpt-performance-dashboard-laptop-hero.png",
    imageClassName: "object-[58%_38%] brightness-[1.08] contrast-[1.06]",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0.16)_38%,rgba(20,4,4,0.72)_100%)]",
    href: `${bookingUrl}&service=athlete_assessment`,
    intent: "home_card_assessment",
    label: "Book Assessment",
  },
  {
    title: "Precision Arm Care",
    subtitle: "Throwing durability and arm support",
    image: "/images/arm-care-clean.jpeg",
    imageClassName: "object-[62%_center]",
    overlayClassName:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(20,4,4,0.88)_100%)]",
    href: `${bookingUrl}&service=arm_care`,
    intent: "home_card_arm_care",
    label: "Book Arm Capacity Assessment",
  },
];

export default function HomeActionGrid() {
  return (
    <section id="services" className="section-shell rounded-[1.5rem] p-5 card sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">Choose Your Path</p>
          <h2 className="mt-2 max-w-4xl text-[1.2rem] font-semibold leading-snug heading sm:text-[1.55rem] lg:text-[1.9rem]">
            Find the right entry point into care, performance, and return to sport.
          </h2>
        </div>
        <Link
          href="/services"
          className="pill w-full whitespace-nowrap px-4 py-2 text-center text-[0.66rem] focus-outline sm:w-auto sm:text-[0.68rem]"
        >
          See All Services
        </Link>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {actionCards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/55"
          >
            <div className="relative border-b border-white/10">
              <div className={`absolute inset-0 z-10 ${card.overlayClassName}`} />
              <Image
                src={card.image}
                alt={`${card.title} session at Movement Medicine Performance & PT in Atlanta`}
                width={768}
                height={1024}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={`h-[14rem] w-full object-cover sm:h-[18rem] ${card.imageClassName}`}
              />
            </div>
            <div className="flex min-h-[9.2rem] flex-col gap-3 p-4 sm:min-h-[9.8rem] sm:p-[1.125rem]">
              <div>
                <p className="min-h-[2.8rem] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-red-300 sm:text-[0.72rem]">
                  {card.subtitle}
                </p>
                <h3 className="mt-2 text-[1.18rem] font-semibold heading sm:text-[1.35rem]">{card.title}</h3>
              </div>
              <TrackedLink
                href={card.href}
                intent={card.intent}
                label={card.label}
                className="w-full px-4 py-2 text-[0.66rem] sm:w-auto"
              >
                {card.label}
              </TrackedLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
