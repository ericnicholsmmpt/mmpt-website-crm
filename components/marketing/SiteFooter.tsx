import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-2 text-sm text-zinc-300">
          <p className="text-base font-medium text-zinc-100">Movement Medicine Performance &amp; PT</p>
          <p className="mt-1">Data-Driven Athlete Performance Intelligence Platform</p>
          <p className="mt-1">&copy; 2026 Movement Medicine Physical Therapy, LLC. All rights reserved.</p>
          <p className="mt-1">Proprietary scoring methodology. Unauthorized distribution prohibited.</p>
          <p className="mt-3 flex items-center justify-center gap-4">
            <Link className="text-zinc-200 underline-offset-4 hover:underline" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-zinc-200 underline-offset-4 hover:underline" href="/support">
              Support
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
