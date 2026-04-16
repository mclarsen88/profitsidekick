'use client';

import { useMemo, useState } from 'react';
import type { CalculatorData } from '@/data/calculators';

type Values = Record<string, string>;

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

function safeNumber(value: string) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

const calculatorHandlers: Record<CalculatorData['kind'], (values: Values) => number> = {
  uberFare: (values) => safeNumber(values.miles) * safeNumber(values.ratePerMile),
  resellerProfit: (values) =>
    safeNumber(values.salePrice) -
    safeNumber(values.itemCost) -
    safeNumber(values.fees) -
    safeNumber(values.shipping),
  hourlyRate: (values) => {
    const hours = safeNumber(values.hours);
    if (hours <= 0) return 0;
    return safeNumber(values.earnings) / hours;
  },
};

function calculate(kind: CalculatorData['kind'], values: Values): number {
  return calculatorHandlers[kind](values);
}

export function CalculatorForm({ calculator }: { calculator: CalculatorData }) {
  const [values, setValues] = useState<Values>({});

  const result = useMemo(() => calculate(calculator.kind, values), [calculator.kind, values]);

  return (
    <section className="calculator" aria-label={`${calculator.name} calculator`}>
      <form className="calculator-grid" onSubmit={(event) => event.preventDefault()}>
        {calculator.fields.map((field) => (
          <label key={field.key} className="input-group">
            <span>{field.label}</span>
            <input
              inputMode="decimal"
              type="number"
              min="0"
              step="any"
              placeholder={field.placeholder}
              value={values[field.key] ?? ''}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  [field.key]: event.target.value,
                }))
              }
            />
          </label>
        ))}
      </form>
      <div className="result-panel" role="status" aria-live="polite">
        <p>Estimated Result</p>
        <strong>{currency.format(result)}</strong>
      </div>
    </section>
  );
}
