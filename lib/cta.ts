import { siteConfig } from '@/lib/site-config';
import type { CalculatorData } from '@/data/calculators';

export function getCalculatorCtaHref(target: CalculatorData['ctaLink'] | string) {
  if (target === 'flippingLedger') {
    return siteConfig.links.flippingLedger;
  }

  return siteConfig.links.gigShiftLedger;
}
