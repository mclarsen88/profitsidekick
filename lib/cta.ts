import { siteConfig } from '@/lib/site-config';
import type { CalculatorData } from '@/data/calculators';

const ctaDestinations = {
  flippingLedger: siteConfig.links.flippingLedger,
  gigShiftLedger: siteConfig.links.gigShiftLedger,
} as const;

export function getCalculatorCtaHref(target: CalculatorData['ctaLink']) {
  const key = target as keyof typeof ctaDestinations;
  return ctaDestinations[key] ?? siteConfig.links.gigShiftLedger;
}
