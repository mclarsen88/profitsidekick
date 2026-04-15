import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Practical calculator tools for side hustlers,
          gig workers, and resellers.
        </p>
        <div className="footer-links">
          <Link href="/calculators">All calculators</Link>
          <a href={siteConfig.links.flippingLedger} target="_blank" rel="noreferrer">
            FlippingLedger
          </a>
          <a href={siteConfig.links.gigShiftLedger} target="_blank" rel="noreferrer">
            GigShiftLedger
          </a>
        </div>
      </div>
    </footer>
  );
}
