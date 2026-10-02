"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TrackedLink } from "../ui/TrackedLink";
import { bookingUrl, primaryNav } from "../../lib/content/site";

type SiteHeaderProps = {
  overlay?: boolean;
};

export default function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenPath === pathname;

  function toggleMobileMenu() {
    setMobileOpenPath((value) => (value === pathname ? null : pathname));
  }

  function closeMobileMenu() {
    setMobileOpenPath(null);
  }

  const headerClass = `site-header ${overlay ? "site-header-overlay" : ""}`;
  const navLinkClass = "site-nav-link focus-outline";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex min-w-0 w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-7 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="focus-outline flex min-w-0 items-center gap-3 rounded-none"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden sm:h-12 sm:w-12">
              <Image
                src="/images/brand-logo.png"
                alt="Movement Medicine Performance icon"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="min-w-0 max-w-[13rem] sm:max-w-[24rem]">
              <p className="truncate text-[0.76rem] font-semibold leading-tight text-white sm:text-[0.88rem]">
                Movement Medicine
              </p>
              <p className="mt-0.5 hidden text-[0.7rem] leading-tight text-zinc-400 sm:block">
                Performance & Sports PT
              </p>
            </div>
          </Link>
        </div>

          <div className="hidden items-center gap-2.5 text-sm lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}

          <TrackedLink
            href={`${bookingUrl}&service=athlete_assessment`}
            intent="global_booking"
            label="Book Assessment"
            className="h-8 px-3 py-0 text-[0.82rem] font-medium leading-none normal-case tracking-normal"
          >
            Book Assessment
          </TrackedLink>

          <a
            href="https://dashboard.mmptperformance.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-none border border-white/12 bg-white/[0.015] px-3 py-0 text-[0.78rem] font-medium leading-none text-zinc-300 transition hover:border-white/24 hover:bg-white/[0.04] hover:text-white focus-outline"
          >
            Client Login
          </a>
        </div>

        <div className="shrink-0 flex items-center gap-2 lg:hidden">
          <TrackedLink
            href={`${bookingUrl}&service=athlete_assessment`}
            intent="global_booking_mobile"
            label="Book Assessment Mobile"
            className="h-9 px-3 py-0 text-xs font-medium leading-none normal-case tracking-normal whitespace-nowrap"
          >
            Assessment
          </TrackedLink>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobileMenu}
            className="inline-flex items-center gap-2 rounded-none border border-white/16 bg-white/[0.02] px-3 py-2 text-sm font-medium text-white transition hover:border-white/28 hover:bg-white/[0.05] focus-outline"
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
        <div id="mobile-nav" className="border-t border-white/10 bg-[#111111] lg:hidden">
          <div className="mx-auto grid w-full max-w-[1440px] gap-3 px-4 py-4 sm:px-7 lg:px-10">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-none border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.04] focus-outline"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://dashboard.mmptperformance.com/login"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center rounded-none border border-white/16 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white transition hover:border-white/28 hover:bg-white/[0.05] focus-outline"
            >
              Client Login
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
