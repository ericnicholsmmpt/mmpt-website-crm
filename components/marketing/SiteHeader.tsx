"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl, primaryNav } from "../../lib/content/site";

type SiteHeaderProps = {
  overlay?: boolean;
};

export default function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const headerClass = overlay
    ? "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/88 backdrop-blur-xl"
    : "sticky top-0 z-30 border-b border-white/10 bg-black/95 backdrop-blur-xl";
  const navLinkClass =
    "text-sm font-medium text-zinc-300 transition hover:text-white focus-outline";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="focus-outline flex min-w-0 items-center gap-3 rounded-2xl"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12">
              <Image
                src="/images/icon.jpeg"
                alt="Movement Medicine Performance icon"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="min-w-0 max-w-[13rem] sm:max-w-[24rem]">
              <p className="truncate text-[0.8rem] font-semibold leading-tight text-white sm:text-[0.94rem]">
                Movement Performance and Sports Medicine
              </p>
              <p className="mt-0.5 hidden text-[0.76rem] leading-tight text-zinc-400 sm:block">
                Sports medicine physical therapy, athlete assessments, and performance training
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden items-center gap-3 text-sm lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}

          <TrackedLink
            href={bookingUrl}
            intent="global_booking"
            label="Book Appointment"
            className="h-8 px-3 py-0 text-[0.82rem] font-medium leading-none normal-case tracking-normal"
          >
            Book Now
          </TrackedLink>

          <a
            href="https://dashboard.mmptperformance.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-full border border-white/30 px-3 py-0 text-[0.82rem] font-medium leading-none text-white transition hover:border-white hover:bg-white/5 focus-outline"
          >
            MMPT Platform
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <TrackedLink
            href={bookingUrl}
            intent="global_booking_mobile"
            label="Book Appointment Mobile"
            className="h-9 px-3 py-0 text-xs font-medium leading-none normal-case tracking-normal whitespace-nowrap"
          >
            Book Now
          </TrackedLink>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/5 focus-outline"
          >
            <span className="text-xs uppercase tracking-[0.12em]">Menu</span>
            <span className="flex flex-col gap-1">
              <span className="block h-px w-3 bg-white" />
              <span className="block h-px w-3 bg-white" />
              <span className="block h-px w-3 bg-white" />
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-black/96 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:px-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.04] focus-outline"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://dashboard.mmptperformance.com/login"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-4 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5 focus-outline"
            >
              MMPT Platform
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
