import Link from 'next/link';
import type { Metadata } from 'next';
import { CalculatorCard } from '@/components/calculator-card';
import { CtaBanner } from '@/components/cta-banner';
import { SectionHeading } from '@/components/section-heading';
import { calculators } from '@/data/calculators';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Side Hustle and Gig Work Calculators for Profit Planning',
  description:
    'Use ProfitSidekick calculators to estimate gig earnings, reseller margins, mileage profit, and break-even targets. Practical tools for drivers, flippers, and independent operators.',
};

export default function HomePage() {
  const featuredCalculators = calculators.slice(0, 3);

  return (
    <>
      <section className="hero container">
        <p className="eyebrow">ProfitSidekick.com</p>
        <h1>Side hustle calculators that help you make better money decisions.</h1>
        <p className="hero-lead">
          ProfitSidekick is a practical calculator hub for gig workers, resellers, and independent operators. Use
          clear, fast tools to estimate delivery profits, resale margins, break-even targets, and hourly earnings
          before you commit time or inventory.
        </p>
        <div className="button-row">
          <Link className="button" href="/calculators">
            Browse all calculators
          </Link>
          <Link className="button button-muted" href="/calculators/hourly-rate-calculator">
            Start with hourly rate
          </Link>
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading
          title="What you can calculate on ProfitSidekick"
          subtitle="Focused tools for earnings, margins, and operating costs."
        />
        <div className="three-column">
          <article className="card">
            <h3>Gig earnings and hourly rate</h3>
            <p>
              Compare shifts, routes, and apps with practical calculators for earnings, mileage, and net hourly
              performance.
            </p>
            <Link href="/calculators/gig-hourly-rate-calculator" className="text-link">
              Explore gig calculators →
            </Link>
          </article>
          <article className="card">
            <h3>Reseller profit and margin</h3>
            <p>
              Estimate fees, shipping impact, and net margin before listing inventory on eBay or Marketplace.
            </p>
            <Link href="/calculators/reseller-margin-calculator" className="text-link">
              Explore reseller calculators →
            </Link>
          </article>
          <article className="card">
            <h3>Business math fundamentals</h3>
            <p>
              Run break-even and profit scenarios to set stronger pricing targets and avoid low-return work.
            </p>
            <Link href="/calculators/break-even-calculator" className="text-link">
              Explore business math →
            </Link>
          </article>
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading
          title="Featured calculators"
          subtitle="These are the most useful starting points for quick earnings and profit checks."
        />
        <p className="section-intro">
          Jump straight into the tool you need: estimate a fare before accepting a trip, check the margin before
          buying inventory, or confirm what your shift really paid per hour.
        </p>
        <div className="card-grid">
          {featuredCalculators.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
        <p className="inline-link-row">
          Popular picks:{' '}
          <Link href="/calculators/uber-fare-calculator">Uber Fare Calculator</Link> ·{' '}
          <Link href="/calculators/reseller-profit-calculator">Reseller Profit Calculator</Link> ·{' '}
          <Link href="/calculators/hourly-rate-calculator">Hourly Rate Calculator</Link>
        </p>
      </section>

      <section className="container page-section">
        <SectionHeading title="Who ProfitSidekick is for" />
        <div className="two-column">
          <article className="card">
            <h3>Gig workers and delivery drivers</h3>
            <p>
              If you drive, deliver, or stack app-based shifts, these calculators help you evaluate routes, compare
              shifts, and understand earnings per hour with less guesswork.
            </p>
            <Link className="text-link" href="/calculators/uber-fare-calculator">
              Estimate trip earnings →
            </Link>
          </article>
          <article className="card">
            <h3>Resellers, flippers, and marketplace sellers</h3>
            <p>
              If you source items to resell, use these tools to check margin before you buy and to avoid losing profit
              to fees and shipping costs.
            </p>
            <Link className="text-link" href="/calculators/reseller-profit-calculator">
              Check resale margin →
            </Link>
          </article>
        </div>
      </section>

      <section className="container page-section">
        <SectionHeading title="Why these calculators are useful" />
        <div className="three-column">
          <article className="card">
            <h3>Faster decisions</h3>
            <p>
              Run quick scenarios in seconds before accepting work, buying inventory, or changing your prices.
            </p>
          </article>
          <article className="card">
            <h3>Clearer numbers</h3>
            <p>Break earnings and profit into simple formulas so you can spot what is actually worth your time.</p>
          </article>
          <article className="card">
            <h3>Better planning</h3>
            <p>Use consistent estimates to set daily goals and improve how you run your side business over time.</p>
          </article>
        </div>
        <p className="section-intro">
          For a full library of calculators for side hustlers and small operators, browse the{' '}
          <Link href="/calculators">complete calculator index</Link>.
        </p>
      </section>

      <section className="container page-section two-column">
        <CtaBanner
          title="For resellers: move from quick estimates to full profit tracking"
          description="FlippingLedger helps you track inventory, sold items, fees, and net profit so your resale numbers stay organized as you scale."
          href={siteConfig.links.flippingLedger}
          label="Explore FlippingLedger"
        />
        <CtaBanner
          title="For gig workers: track real shift performance"
          description="GigShiftLedger helps drivers and delivery workers monitor earnings, mileage, expenses, and effective hourly results across platforms."
          href={siteConfig.links.gigShiftLedger}
          label="Explore GigShiftLedger"
        />
      </section>
    </>
  );
}
