import Link from 'next/link';
import type { CalculatorData } from '@/data/calculators';

export function CalculatorCard({ calculator }: { calculator: CalculatorData }) {
  return (
    <article className="card">
      <h3>
        <Link href={`/calculators/${calculator.slug}`}>{calculator.name}</Link>
      </h3>
      <p>{calculator.shortDescription}</p>
      <Link className="text-link" href={`/calculators/${calculator.slug}`}>
        Open calculator →
      </Link>
    </article>
  );
}
