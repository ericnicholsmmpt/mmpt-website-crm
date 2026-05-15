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
      <main className="mx-auto grid w-full max-w-[1440px] gap-5 px-4 py-5 sm:px-7 sm:py-7 lg:px-10 xl:px-12 2xl:px-14">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
