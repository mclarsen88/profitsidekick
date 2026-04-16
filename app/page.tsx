import Link from 'next/link';
import { CalculatorCard } from '@/components/calculator-card';
import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';
import { calculators } from '@/data/calculators';
import { siteConfig } from '@/lib/site-config';

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">ProfitSidekick.com</p>
        <h1>Practical calculators for side hustlers, gig workers, resellers, and small operators.</h1>
        <p>
          ProfitSidekick helps you estimate fares, profits, and hourly earnings quickly so you can make better
          decisions on gigs, sourcing, and pricing. Explore our calculator library built for people running lean,
          real-world businesses.
        </p>
        <div className="button-row">
          <Link className="button" href="/calculators">
            Browse all calculators
          </Link>
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading
          title="Featured calculators"
          subtitle="Start with three high-impact tools for mileage earnings, resale margins, and hourly performance."
        />
        <div className="card-grid">
          {calculators.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading
          title="Related tools for serious operators"
          subtitle="When you are ready to move from quick estimates to complete tracking, these tools can help."
        />
        <div className="two-column">
          <article className="card">
            <h3>FlippingLedger for resellers</h3>
            <p>
              Track inventory, sold listings, fees, and net profit in one place. Ideal for resellers and product
              flippers focused on margin.
            </p>
            <a href={siteConfig.links.flippingLedger} target="_blank" rel="noreferrer" className="text-link">
              Visit FlippingLedger →
            </a>
          </article>
          <article className="card">
            <h3>GigShiftLedger for gig workers</h3>
            <p>
              Monitor mileage, shift earnings, and effective hourly rate so you can optimize platform and schedule
              choices.
            </p>
            <a href={siteConfig.links.gigShiftLedger} target="_blank" rel="noreferrer" className="text-link">
              Visit GigShiftLedger →
            </a>
          </article>
        </div>
      </section>

      <section className="container page-section two-column">
        <CtaBanner
          title="Need better resale profit tracking?"
          description="Move from single-item estimates to full business-level insight on cost, fees, and margins."
          href={siteConfig.links.flippingLedger}
          label="Go to FlippingLedger"
        />
        <CtaBanner
          title="Want clearer gig earnings insights?"
          description="Compare shifts and routes with accurate logs for income, expenses, and hourly outcomes."
          href={siteConfig.links.gigShiftLedger}
          label="Go to GigShiftLedger"
        />
      </section>
    </>
  );
}
