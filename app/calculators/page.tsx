import Link from 'next/link';
import { CalculatorCard } from '@/components/calculator-card';
import { SectionHeading } from '@/components/section-heading';
import { calculators } from '@/data/calculators';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Calculator Library for Gig Work, Reselling, and Side Hustle Profit',
  description:
    'Browse ProfitSidekick calculators for DoorDash drivers, Instacart shoppers, eBay resellers, and side hustle operators. Estimate profit, margin, fees, mileage, and hourly rate.',
};

export default function CalculatorsIndexPage() {
  const gigCalculators = calculators.filter((calculator) => calculator.ctaLink === 'gigShiftLedger');
  const resellerCalculators = calculators.filter((calculator) => calculator.ctaLink === 'flippingLedger');

  return (
    <section className="container page-section">
      <h1>Calculator Library</h1>
      <p>
        Explore practical calculators for gig drivers, delivery workers, online resellers, and independent operators.
        Use this library to estimate fares, payout, fees, net profit, break-even points, and margin percentages with
        clear formulas and straightforward inputs.
      </p>

      <div className="callout-links" aria-label="Related tools">
        <p>
          For deeper tracking beyond quick math, also see{' '}
          <a href={siteConfig.links.flippingLedger} target="_blank" rel="noreferrer">
            FlippingLedger
          </a>{' '}
          and{' '}
          <a href={siteConfig.links.gigShiftLedger} target="_blank" rel="noreferrer">
            GigShiftLedger
          </a>
          .
        </p>
      </div>

      <SectionHeading
        title="All calculators"
        subtitle="Use the cards below to open any calculator. New tools can be added through the central data file."
      />
      <div className="card-grid">
        {calculators.map((calculator) => (
          <CalculatorCard key={calculator.slug} calculator={calculator} />
        ))}
      </div>

      <section className="content-block">
        <h2>Popular calculator categories</h2>
        <div className="two-column">
          <div>
            <h3>Gig work and delivery calculators</h3>
            <p>
              For drivers and shoppers who need quick numbers on shift earnings, mileage profit, and effective hourly
              rate.
            </p>
            <ul className="link-list">
              {gigCalculators.slice(0, 5).map((calculator) => (
                <li key={calculator.slug}>
                  <Link href={`/calculators/${calculator.slug}`}>{calculator.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Reseller and flipping calculators</h3>
            <p>
              For marketplace sellers estimating net margin, platform fees, and item-level profit before listing.
            </p>
            <ul className="link-list">
              {resellerCalculators.slice(0, 5).map((calculator) => (
                <li key={calculator.slug}>
                  <Link href={`/calculators/${calculator.slug}`}>{calculator.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
