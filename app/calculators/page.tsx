import { CalculatorCard } from '@/components/calculator-card';
import { SectionHeading } from '@/components/section-heading';
import { calculators } from '@/data/calculators';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Calculator Library for Side Hustlers and Small Business Operators',
  description:
    'Browse ProfitSidekick calculators for gig workers, resellers, and independent operators. Estimate fares, profits, margins, and hourly earnings.',
};

export default function CalculatorsIndexPage() {
  return (
    <section className="container page-section">
      <h1>Calculator Library</h1>
      <p>
        Explore practical calculators built for side hustlers, marketplace resellers, gig workers, and independent
        operators. This library is structured to grow into a complete collection of earnings, profit, and business
        math tools.
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
    </section>
  );
}
