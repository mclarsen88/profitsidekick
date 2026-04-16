export type CalculatorField = {
  key: string;
  label: string;
  placeholder: string;
};

export type CalculatorKind = 'uberFare' | 'resellerProfit' | 'hourlyRate';

export type CalculatorData = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  title: string;
  metaDescription: string;
  h1: string;
  kind: CalculatorKind;
  fields: CalculatorField[];
  explanation: string;
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLink: 'flippingLedger' | 'gigShiftLedger';
  ctaLabel: string;
};

// Add future calculators here. The dynamic [slug] route will automatically support new entries.
export const calculators: CalculatorData[] = [
  {
    slug: 'uber-fare-calculator',
    name: 'Uber Fare Calculator',
    shortDescription: 'Estimate fare totals from miles driven and your per-mile rate.',
    intro:
      'Use this Uber fare calculator to estimate gross trip earnings from distance and rate assumptions. It is useful for drivers comparing trip types and planning daily goals.',
    title: 'Uber Fare Calculator | Estimate Trip Earnings by Distance',
    metaDescription:
      'Estimate Uber trip fare using miles and rate per mile. A simple calculator for gig drivers planning routes and earnings goals.',
    h1: 'Uber Fare Calculator',
    kind: 'uberFare',
    fields: [
      { key: 'miles', label: 'Miles', placeholder: 'e.g. 12.5' },
      { key: 'ratePerMile', label: 'Rate Per Mile ($)', placeholder: 'e.g. 1.35' },
    ],
    explanation:
      'This estimate gives a quick gross fare number so you can evaluate whether a route, zone, or shift might be worth your time before accounting for expenses.',
    howItWorks: [
      'Enter the expected miles for a single trip or average trip distance.',
      'Enter your expected rate per mile based on local experience.',
      'The calculator multiplies miles by rate per mile to produce an estimated fare.',
    ],
    faqs: [
      {
        question: 'Does this include Uber fees and incentives?',
        answer:
          'No. This tool is a base estimate. Promotions, surge pricing, platform fees, and tips can change your final payout.',
      },
      {
        question: 'Can I use this for Lyft or delivery gigs?',
        answer:
          'Yes. You can use any distance-based gig estimate by entering your own assumptions for miles and rate.',
      },
    ],
    ctaTitle: 'Track real gig earnings with GigShiftLedger',
    ctaDescription:
      'Use GigShiftLedger to move beyond rough estimates and monitor actual driving income, expenses, and hourly performance over time.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Visit GigShiftLedger',
  },
  {
    slug: 'reseller-profit-calculator',
    name: 'Reseller Profit Calculator',
    shortDescription: 'Calculate profit after item costs, selling fees, and shipping.',
    intro:
      'Use this reseller profit calculator to quickly estimate net profit on each item you flip. It helps resellers make better buy decisions before sourcing inventory.',
    title: 'Reseller Profit Calculator | Estimate Net Profit on Flips',
    metaDescription:
      'Calculate resale profit from sale price, item cost, fees, and shipping. Built for flippers, online resellers, and marketplace sellers.',
    h1: 'Reseller Profit Calculator',
    kind: 'resellerProfit',
    fields: [
      { key: 'salePrice', label: 'Sale Price ($)', placeholder: 'e.g. 85' },
      { key: 'itemCost', label: 'Item Cost ($)', placeholder: 'e.g. 25' },
      { key: 'fees', label: 'Marketplace Fees ($)', placeholder: 'e.g. 10.2' },
      { key: 'shipping', label: 'Shipping Cost ($)', placeholder: 'e.g. 8.5' },
    ],
    explanation:
      'Net profit visibility is critical in resale businesses. This calculator helps you avoid underpricing and better understand margin before listing items.',
    howItWorks: [
      'Enter your expected sale price for the item.',
      'Enter your total buy cost for inventory.',
      'Add marketplace fees and shipping cost.',
      'The calculator subtracts all costs from sale price to show estimated profit.',
    ],
    faqs: [
      {
        question: 'Should I include packing materials in shipping?',
        answer:
          'Yes. Include all fulfillment costs, including labels, supplies, and handling materials, for a more accurate net number.',
      },
      {
        question: 'Can this be used for eBay, Mercari, and Poshmark?',
        answer:
          'Absolutely. The formula is marketplace-agnostic as long as your fee estimate is realistic.',
      },
    ],
    ctaTitle: 'Improve margins with FlippingLedger',
    ctaDescription:
      'FlippingLedger helps you track inventory, sales, fees, and net profits so you can confidently scale your resale operation.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Visit FlippingLedger',
  },
  {
    slug: 'hourly-rate-calculator',
    name: 'Hourly Rate Calculator',
    shortDescription: 'Convert total earnings and hours worked into an hourly rate.',
    intro:
      'Use this hourly rate calculator to find your effective hourly earnings. It is ideal for gig workers and independent operators comparing shifts, projects, and income streams.',
    title: 'Hourly Rate Calculator | Find Effective Hourly Earnings',
    metaDescription:
      'Calculate hourly rate from total earnings and hours worked. Useful for gig workers, freelancers, and side hustle operators.',
    h1: 'Hourly Rate Calculator',
    kind: 'hourlyRate',
    fields: [
      { key: 'earnings', label: 'Total Earnings ($)', placeholder: 'e.g. 240' },
      { key: 'hours', label: 'Hours Worked', placeholder: 'e.g. 8.5' },
    ],
    explanation:
      'Seeing your true hourly rate helps you make smarter scheduling decisions and identify which gigs or clients deliver the best return on your time.',
    howItWorks: [
      'Enter your total earnings for a shift, day, or project.',
      'Enter the total hours required to earn that amount.',
      'The calculator divides earnings by hours to estimate hourly rate.',
    ],
    faqs: [
      {
        question: 'What if my hours are split between tasks?',
        answer:
          'Combine all active work time for a complete comparison of total effort versus earnings.',
      },
      {
        question: 'Should I subtract gas or other expenses first?',
        answer:
          'For a net hourly figure, subtract costs from earnings first, then enter the reduced number in the calculator.',
      },
    ],
    ctaTitle: 'Measure hourly performance with GigShiftLedger',
    ctaDescription:
      'GigShiftLedger helps gig workers monitor earnings, expenses, and real hourly outcomes across shifts and platforms.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Go to GigShiftLedger',
  },
];

export const getCalculatorBySlug = (slug: string) =>
  calculators.find((calculator) => calculator.slug === slug);
