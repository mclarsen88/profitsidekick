'use client';

import { useMemo, useState } from 'react';
import type { CalculatorData } from '@/data/calculators';

type Values = Record<string, string>;

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});
const decimal = new Intl.NumberFormat('en-US', {
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
  doordashProfit: (values) =>
    safeNumber(values.grossEarnings) -
    safeNumber(values.milesDriven) * safeNumber(values.costPerMile) -
    safeNumber(values.otherExpenses),
  instacartEarnings: (values) =>
    safeNumber(values.batches) * safeNumber(values.avgBatchPay) + safeNumber(values.tips),
  ebayFee: (values) => safeNumber(values.salePrice) * (safeNumber(values.feePercent) / 100) + safeNumber(values.fixedFee),
  facebookMarketplaceProfit: (values) =>
    safeNumber(values.salePrice) -
    safeNumber(values.itemCost) -
    safeNumber(values.fees) -
    safeNumber(values.deliveryCost),
  breakEvenUnits: (values) => {
    const marginPerUnit = safeNumber(values.pricePerUnit) - safeNumber(values.costPerUnit);
    if (marginPerUnit <= 0) return 0;
    return safeNumber(values.fixedCosts) / marginPerUnit;
  },
  flipProfit: (values) =>
    safeNumber(values.sellingPrice) -
    safeNumber(values.buyCost) -
    safeNumber(values.repairCost) -
    safeNumber(values.sellingFees),
  gigHourlyRate: (values) => {
    const hoursWorked = safeNumber(values.hoursWorked);
    if (hoursWorked <= 0) return 0;
    return (safeNumber(values.grossEarnings) - safeNumber(values.expenses)) / hoursWorked;
  },
  sideHustleProfit: (values) =>
    safeNumber(values.revenue) - safeNumber(values.operatingExpenses) - safeNumber(values.taxReserve),
  mileageProfit: (values) =>
    safeNumber(values.miles) * (safeNumber(values.payPerMile) - safeNumber(values.costPerMile)),
  resellerMargin: (values) => {
    const salePrice = safeNumber(values.salePrice);
    if (salePrice <= 0) return 0;
    const profit =
      salePrice - safeNumber(values.costOfGoods) - safeNumber(values.fees) - safeNumber(values.shipping);
    return (profit / salePrice) * 100;
  },
};

function calculate(kind: CalculatorData['kind'], values: Values): number {
  return calculatorHandlers[kind](values);
}

export function CalculatorForm({ calculator }: { calculator: CalculatorData }) {
  const [values, setValues] = useState<Values>({});

  const result = useMemo(() => calculate(calculator.kind, values), [calculator.kind, values]);
  const resultFormat = calculator.resultFormat ?? 'currency';
  const resultLabel = calculator.resultLabel ?? 'Estimated Result';

  const formattedResult =
    resultFormat === 'percent'
      ? `${decimal.format(result)}%`
      : resultFormat === 'number'
        ? decimal.format(result)
        : currency.format(result);

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
        <p>{resultLabel}</p>
        <strong>{formattedResult}</strong>
      </div>
    </section>
  );
}
