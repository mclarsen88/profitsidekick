import { siteConfig } from '@/lib/site-config';
import type { CalculatorData } from '@/data/calculators';

const ctaDestinations = {
  flippingLedger: siteConfig.links.flippingLedger,
  gigShiftLedger: siteConfig.links.gigShiftLedger,
} as const;

export function getCalculatorCtaHref(target: CalculatorData['ctaLink']) {
  return ctaDestinations[target];
}
