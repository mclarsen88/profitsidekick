import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CalculatorForm } from '@/components/calculator-form';
import { CalculatorCard } from '@/components/calculator-card';
import { CtaBanner } from '@/components/cta-banner';
import { calculators, getCalculatorBySlug } from '@/data/calculators';
import { siteConfig } from '@/lib/site-config';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return calculators.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: calculator.title,
    description: calculator.metaDescription,
  };
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  const related = calculators.filter((item) => item.slug !== slug).slice(0, 2);
  const ctaHref = siteConfig.links[calculator.ctaLink as keyof typeof siteConfig.links];

  return (
    <article className="container page-section">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/calculators">Calculators</Link> / <span>{calculator.name}</span>
      </nav>

      <header>
        <h1>{calculator.h1}</h1>
        <p>{calculator.intro}</p>
      </header>

      <CalculatorForm calculator={calculator} />

      <section className="content-block">
        <h2>Explanation</h2>
        <p>{calculator.explanation}</p>
      </section>

      <section className="content-block">
        <h2>How it works</h2>
        <ol>
          {calculator.howItWorks.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="content-block">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {calculator.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="content-block">
        <h2>Related calculators</h2>
        <div className="card-grid">
          {related.map((item) => (
            <CalculatorCard key={item.slug} calculator={item} />
          ))}
        </div>
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
