import Link from 'next/link';
import type { CalculatorData } from '@/data/calculators';
import { CalculatorForm } from '@/components/calculator-form';
import { CalculatorCard } from '@/components/calculator-card';
import { CtaBanner } from '@/components/cta-banner';
import { getCalculatorCtaHref } from '@/lib/cta';

function ExplanationSection({ text }: { text: string }) {
  return (
    <section className="content-block">
      <h2>Explanation</h2>
      <p>{text}</p>
    </section>
  );
}

function HowItWorksSection({ steps }: { steps: string[] }) {
  return (
    <section className="content-block">
      <h2>How it works</h2>
      <ol>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

function FaqSection({ faqs }: { faqs: CalculatorData['faqs'] }) {
  return (
    <section className="content-block">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedCalculatorsSection({ calculators }: { calculators: CalculatorData[] }) {
  return (
    <section className="content-block">
      <h2>Related calculators</h2>
      <div className="card-grid">
        {calculators.map((calculator) => (
          <CalculatorCard key={calculator.slug} calculator={calculator} />
        ))}
      </div>
    </section>
  );
}

export function CalculatorPageTemplate({
  calculator,
  relatedCalculators,
}: {
  calculator: CalculatorData;
  relatedCalculators: CalculatorData[];
}) {
  const ctaHref = getCalculatorCtaHref(calculator.ctaLink);

  return (
    <article className="container page-section">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / <span>{calculator.name}</span>
      </nav>

      <header>
        <h1>{calculator.h1}</h1>
        <p>{calculator.intro}</p>
        <p className="content-meta">
          This calculator is part of the ProfitSidekick library for gig workers, resellers, and side hustle operators.
          For more tools, visit the <Link href="/calculators">full calculator index</Link>.
        </p>
      </header>

      <CalculatorForm calculator={calculator} />

      <ExplanationSection text={calculator.explanation} />
      <HowItWorksSection steps={calculator.howItWorks} />
      <FaqSection faqs={calculator.faqs} />
      <RelatedCalculatorsSection calculators={relatedCalculators} />

      <section className="content-block">
        <h2>Use this result to make a better next decision</h2>
        <p>
          After calculating your estimate, compare it with your recent real-world numbers before changing pricing,
          sourcing, or shift strategy. Consistent comparison is one of the fastest ways to improve side hustle profit
          and hourly outcomes.
        </p>
      </section>

      <CtaBanner
        title={calculator.ctaTitle}
        description={calculator.ctaDescription}
        href={ctaHref}
        label={calculator.ctaLabel}
      />
    </article>
  );
}
