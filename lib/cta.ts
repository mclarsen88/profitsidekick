import { siteConfig } from '@/lib/site-config';
import type { CtaLink } from '@/data/calculators';

// Keep this helper branch-based (not object-index based) to avoid
// stricter CI/Vercel TS index-signature inference issues.
export function getCalculatorCtaHref(target: CtaLink) {
  switch (target) {
    case 'flippingLedger':
      return siteConfig.links.flippingLedger;
    case 'gigShiftLedger':
      return siteConfig.links.gigShiftLedger;
    default:
      return siteConfig.links.gigShiftLedger;
  }
}
