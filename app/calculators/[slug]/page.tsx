import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CalculatorPageTemplate } from '@/components/calculator-page-template';
import { calculators, getCalculatorBySlug } from '@/data/calculators';

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
  return <CalculatorPageTemplate calculator={calculator} relatedCalculators={related} />;
}
