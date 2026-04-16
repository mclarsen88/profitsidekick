import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CalculatorPageTemplate } from '@/components/calculator-page-template';
import { calculators, getCalculatorBySlug, getCalculatorsBySlugs } from '@/data/calculators';

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

  const related = getCalculatorsBySlugs(calculator.relatedSlugs).filter((item) => item.slug !== slug).slice(0, 3);
  return <CalculatorPageTemplate calculator={calculator} relatedCalculators={related} />;
}
