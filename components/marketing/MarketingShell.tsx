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
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader overlay={overlayHeader} />
      {hero}
      <main id="main-content" className="site-content">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
