import { siteConfig } from '@/lib/site-config';
import type { CtaLink } from '@/data/calculators';

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
