import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#060709]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-4 text-center sm:px-7 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex flex-col gap-1.5 text-[0.72rem] leading-5 text-zinc-500">
          <p className="font-medium uppercase tracking-[0.08em] text-zinc-300">
            Movement Medicine Performance &amp; PT
          </p>
          <p>Data-Driven Athlete Performance Intelligence Platform</p>
          <p>&copy; 2026 Movement Medicine Physical Therapy, LLC. All rights reserved.</p>
          <p>Proprietary scoring methodology. Unauthorized distribution prohibited.</p>
        </div>

        <div className="flex items-center justify-center gap-4 text-[0.72rem] text-zinc-400">
          <Link className="transition hover:text-zinc-200" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="transition hover:text-zinc-200" href="/terms">
            Terms &amp; Conditions
          </Link>
          <Link className="transition hover:text-zinc-200" href="/support">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
