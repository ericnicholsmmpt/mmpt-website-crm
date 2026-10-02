import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-copy">
          <p className="site-footer-name">Movement Medicine Performance &amp; PT</p>
          <p>Data-Driven Athlete Performance Intelligence Platform</p>
          <p>&copy; 2026 Movement Medicine Physical Therapy, LLC. All rights reserved.</p>
          <p>Proprietary scoring methodology. Unauthorized distribution prohibited.</p>
        </div>
        <nav className="site-footer-links" aria-label="Legal links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <a href="https://dashboard.mmptperformance.com/dashboard/disclaimer">Disclaimer</a>
        </nav>
      </div>
    </footer>
  );
}
