import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type MarketingShellProps = {
  children: ReactNode;
  hero?: ReactNode;
  overlayHeader?: boolean;
};

export default function MarketingShell({
  children,
  hero,
  overlayHeader = false,
}: MarketingShellProps) {
  return (
    <div className="page-frame min-h-screen text-zinc-100">
      <SiteHeader overlay={overlayHeader} />
      {hero}
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
