export type CalculatorField = {
  key: string;
  label: string;
  placeholder: string;
};

export type CalculatorKind =
  | 'uberFare'
  | 'resellerProfit'
  | 'hourlyRate'
  | 'doordashProfit'
  | 'instacartEarnings'
  | 'ebayFee'
  | 'facebookMarketplaceProfit'
  | 'breakEvenUnits'
  | 'flipProfit'
  | 'gigHourlyRate'
  | 'sideHustleProfit'
  | 'mileageProfit'
  | 'resellerMargin';

export type CtaLink = 'flippingLedger' | 'gigShiftLedger';

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
  resultLabel?: string;
  resultFormat?: 'currency' | 'number' | 'percent';
  explanation: string;
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLink: CtaLink;
  ctaLabel: string;
};

// Add future calculators here. Dynamic routing and metadata are generated from this file.
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
    relatedSlugs: ['gig-hourly-rate-calculator', 'mileage-profit-calculator', 'doordash-profit-calculator'],
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
    relatedSlugs: ['flip-profit-calculator', 'ebay-fee-calculator', 'reseller-margin-calculator'],
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
    relatedSlugs: ['gig-hourly-rate-calculator', 'doordash-profit-calculator', 'instacart-earnings-calculator'],
    ctaTitle: 'Measure hourly performance with GigShiftLedger',
    ctaDescription:
      'GigShiftLedger helps gig workers monitor earnings, expenses, and real hourly outcomes across shifts and platforms.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Go to GigShiftLedger',
  },
  {
    slug: 'doordash-profit-calculator',
    name: 'DoorDash Profit Calculator',
    shortDescription: 'Estimate delivery profit after mileage and operating costs.',
    intro:
      'Use this DoorDash profit calculator to estimate your net income from a shift after subtracting fuel and other delivery expenses.',
    title: 'DoorDash Profit Calculator | Estimate Net Delivery Income',
    metaDescription:
      'Estimate DoorDash shift profit by subtracting mileage and operating expenses from delivery earnings and tips.',
    h1: 'DoorDash Profit Calculator',
    kind: 'doordashProfit',
    fields: [
      { key: 'grossEarnings', label: 'Gross Earnings ($)', placeholder: 'e.g. 180' },
      { key: 'milesDriven', label: 'Miles Driven', placeholder: 'e.g. 95' },
      { key: 'costPerMile', label: 'Cost Per Mile ($)', placeholder: 'e.g. 0.28' },
      { key: 'otherExpenses', label: 'Other Expenses ($)', placeholder: 'e.g. 12' },
    ],
    explanation:
      'Gross earnings can look strong, but net profit is what matters. This calculator helps DoorDash workers account for mileage wear-and-tear and daily expenses before judging a shift.',
    howItWorks: [
      'Enter total shift earnings including tips.',
      'Enter miles driven and your estimated cost per mile.',
      'Add other expenses such as tolls or parking.',
      'The calculator subtracts mileage and extra costs from gross earnings.',
    ],
    faqs: [
      {
        question: 'What is a reasonable cost-per-mile estimate?',
        answer:
          'Many drivers use a blended estimate that covers gas, maintenance, tires, and depreciation. Start with your own operating history.',
      },
      {
        question: 'Should I include time waiting between orders?',
        answer:
          'Yes. Include all shift miles and expenses so your net number reflects the full work session.',
      },
    ],
    relatedSlugs: ['mileage-profit-calculator', 'gig-hourly-rate-calculator', 'instacart-earnings-calculator'],
    ctaTitle: 'Track true delivery profits with GigShiftLedger',
    ctaDescription:
      'GigShiftLedger helps DoorDash drivers log mileage, expenses, and net hourly results so shift decisions are based on real numbers.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Visit GigShiftLedger',
  },
  {
    slug: 'instacart-earnings-calculator',
    name: 'Instacart Earnings Calculator',
    shortDescription: 'Estimate total batch earnings from batch pay and tips.',
    intro:
      'Use this Instacart earnings calculator to estimate what a shift could pay based on completed batches and your average payout per batch.',
    title: 'Instacart Earnings Calculator | Estimate Batch Income',
    metaDescription:
      'Calculate Instacart shift earnings from number of batches, average batch pay, and tip totals.',
    h1: 'Instacart Earnings Calculator',
    kind: 'instacartEarnings',
    fields: [
      { key: 'batches', label: 'Completed Batches', placeholder: 'e.g. 9' },
      { key: 'avgBatchPay', label: 'Average Batch Pay ($)', placeholder: 'e.g. 18' },
      { key: 'tips', label: 'Total Tips ($)', placeholder: 'e.g. 52' },
    ],
    explanation:
      'Instacart shifts can vary widely by market and order mix. This tool gives you a quick estimate so you can compare expected earnings across days and zones.',
    howItWorks: [
      'Enter how many batches you expect to complete.',
      'Enter your average batch payout.',
      'Add estimated or actual tip total.',
      'The calculator multiplies batches by average pay and adds tips.',
    ],
    faqs: [
      {
        question: 'Should heavy-order bonuses be included?',
        answer:
          'Yes. Include all expected platform adjustments and bonuses inside your average batch pay number.',
      },
      {
        question: 'Can I use this for same-day earnings checks?',
        answer:
          'Yes. Use it during a shift to compare your current pace against daily earnings goals.',
      },
    ],
    relatedSlugs: ['doordash-profit-calculator', 'gig-hourly-rate-calculator', 'hourly-rate-calculator'],
    ctaTitle: 'Turn batch data into better decisions',
    ctaDescription:
      'GigShiftLedger helps Instacart shoppers track earnings, mileage, and net hourly performance across every shift.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Try GigShiftLedger',
  },
  {
    slug: 'ebay-fee-calculator',
    name: 'eBay Fee Calculator',
    shortDescription: 'Estimate eBay fees from sale price and fee settings.',
    intro:
      'Use this eBay fee calculator to estimate marketplace fees before listing an item so you can price confidently and protect margin.',
    title: 'eBay Fee Calculator | Estimate Selling Fees Before Listing',
    metaDescription:
      'Calculate estimated eBay fees from sale price, fee percentage, and fixed fee amount for smarter listing decisions.',
    h1: 'eBay Fee Calculator',
    kind: 'ebayFee',
    fields: [
      { key: 'salePrice', label: 'Sale Price ($)', placeholder: 'e.g. 120' },
      { key: 'feePercent', label: 'Fee Percentage (%)', placeholder: 'e.g. 13.25' },
      { key: 'fixedFee', label: 'Fixed Fee ($)', placeholder: 'e.g. 0.3' },
    ],
    explanation:
      'Fees are one of the fastest ways to lose margin on resale listings. This calculator helps you estimate platform costs before you publish or discount.',
    howItWorks: [
      'Enter expected sale price.',
      'Enter the percentage fee for your category.',
      'Enter any fixed fee charged per transaction.',
      'The calculator returns estimated total marketplace fee.',
    ],
    faqs: [
      {
        question: 'Are promoted listing fees included?',
        answer:
          'Not by default. Add them into your percentage field if you are using promoted listings.',
      },
      {
        question: 'Can this be used for international sales?',
        answer:
          'Yes, as long as you adjust the fee percentage and fixed charges to match your account terms.',
      },
    ],
    relatedSlugs: ['reseller-profit-calculator', 'reseller-margin-calculator', 'flip-profit-calculator'],
    ctaTitle: 'Keep marketplace fees under control',
    ctaDescription:
      'FlippingLedger helps resellers track fees per item and monitor true net profit across platforms.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Visit FlippingLedger',
  },
  {
    slug: 'facebook-marketplace-profit-calculator',
    name: 'Facebook Marketplace Profit Calculator',
    shortDescription: 'Estimate net profit after cost, fees, and delivery expenses.',
    intro:
      'Use this Facebook Marketplace profit calculator to estimate whether a sale will actually be worth your time after all costs are included.',
    title: 'Facebook Marketplace Profit Calculator | Estimate Net Sale Profit',
    metaDescription:
      'Calculate Facebook Marketplace sale profit after item cost, selling fees, and shipping or delivery costs.',
    h1: 'Facebook Marketplace Profit Calculator',
    kind: 'facebookMarketplaceProfit',
    fields: [
      { key: 'salePrice', label: 'Sale Price ($)', placeholder: 'e.g. 65' },
      { key: 'itemCost', label: 'Item Cost ($)', placeholder: 'e.g. 22' },
      { key: 'fees', label: 'Selling Fees ($)', placeholder: 'e.g. 3.25' },
      { key: 'deliveryCost', label: 'Shipping / Delivery Cost ($)', placeholder: 'e.g. 6' },
    ],
    explanation:
      'Marketplace selling can look profitable until fees and delivery costs are counted. This tool helps you confirm expected net before accepting offers.',
    howItWorks: [
      'Enter final sale price.',
      'Enter buy cost for the item.',
      'Add platform fees and delivery costs.',
      'The calculator subtracts all costs from sale price to estimate net profit.',
    ],
    faqs: [
      {
        question: 'Should I include driving time for local pickup?',
        answer:
          'For accurate net profit, include fuel and travel cost in delivery expenses when you meet buyers.',
      },
      {
        question: 'What about bundle sales?',
        answer:
          'Use combined sale price and combined costs for all items in the bundle to estimate total deal profit.',
      },
    ],
    relatedSlugs: ['reseller-profit-calculator', 'flip-profit-calculator', 'reseller-margin-calculator'],
    ctaTitle: 'Track every Marketplace flip in one place',
    ctaDescription:
      'FlippingLedger helps you organize costs, fees, and profits so Marketplace sales stay easy to manage at scale.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Explore FlippingLedger',
  },
  {
    slug: 'break-even-calculator',
    name: 'Break-Even Calculator',
    shortDescription: 'Find how many units you need to sell to break even.',
    intro:
      'Use this break-even calculator to estimate the unit sales needed to cover fixed and variable costs before profit begins.',
    title: 'Break-Even Calculator | Units Needed to Cover Costs',
    metaDescription:
      'Calculate break-even units from fixed costs, variable cost per unit, and selling price per unit.',
    h1: 'Break-Even Calculator',
    kind: 'breakEvenUnits',
    resultLabel: 'Break-even units',
    resultFormat: 'number',
    fields: [
      { key: 'fixedCosts', label: 'Fixed Costs ($)', placeholder: 'e.g. 1200' },
      { key: 'pricePerUnit', label: 'Price Per Unit ($)', placeholder: 'e.g. 40' },
      { key: 'costPerUnit', label: 'Variable Cost Per Unit ($)', placeholder: 'e.g. 18' },
    ],
    explanation:
      'Knowing your break-even point helps you set realistic volume goals and pricing strategies. This is useful for product sellers and small operators testing new offers.',
    howItWorks: [
      'Enter total fixed costs for the period.',
      'Enter your selling price per unit.',
      'Enter variable cost per unit.',
      'The calculator divides fixed costs by contribution margin (price minus variable cost).',
    ],
    faqs: [
      {
        question: 'What if my price changes often?',
        answer:
          'Run several scenarios with different prices to see how quickly your break-even target shifts.',
      },
      {
        question: 'What if price per unit is lower than variable cost?',
        answer:
          'In that case, break-even is not achievable with the current numbers. Increase price or reduce cost per unit.',
      },
    ],
    relatedSlugs: ['side-hustle-profit-calculator', 'reseller-margin-calculator', 'flip-profit-calculator'],
    ctaTitle: 'Track real product profitability with FlippingLedger',
    ctaDescription:
      'Use FlippingLedger to monitor item-level costs and margin so break-even planning can be based on actual numbers, not rough estimates.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Go to FlippingLedger',
  },
  {
    slug: 'flip-profit-calculator',
    name: 'Flip Profit Calculator',
    shortDescription: 'Estimate flip profit after buy cost, repair, and selling fees.',
    intro:
      'Use this flip profit calculator to estimate net profit on a flip before you commit money to inventory or repairs.',
    title: 'Flip Profit Calculator | Net Profit for Product Flips',
    metaDescription:
      'Calculate flip profit from buy cost, repair costs, selling price, and fees. Great for flippers and resellers.',
    h1: 'Flip Profit Calculator',
    kind: 'flipProfit',
    fields: [
      { key: 'sellingPrice', label: 'Selling Price ($)', placeholder: 'e.g. 250' },
      { key: 'buyCost', label: 'Buy Cost ($)', placeholder: 'e.g. 90' },
      { key: 'repairCost', label: 'Repair / Prep Cost ($)', placeholder: 'e.g. 35' },
      { key: 'sellingFees', label: 'Selling Fees ($)', placeholder: 'e.g. 28' },
    ],
    explanation:
      'Flips with strong resale value can still underperform if repair and fee costs are underestimated. This tool gives a fast net check before sourcing decisions.',
    howItWorks: [
      'Enter expected selling price.',
      'Enter buy cost and any repair/prep costs.',
      'Add expected platform or transaction fees.',
      'The calculator subtracts all costs from selling price.',
    ],
    faqs: [
      {
        question: 'Should my own labor be included?',
        answer:
          'If you want a full business view, include an estimated labor cost so net profit reflects your actual effort.',
      },
      {
        question: 'Can I use this for furniture or electronics flips?',
        answer:
          'Yes. This formula works for any flip where you can estimate total costs before sale.',
      },
    ],
    relatedSlugs: ['reseller-profit-calculator', 'ebay-fee-calculator', 'facebook-marketplace-profit-calculator'],
    ctaTitle: 'Run your flip business with clearer numbers',
    ctaDescription:
      'FlippingLedger helps you track purchase costs, fees, and final profit across every flip you complete.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Start with FlippingLedger',
  },
  {
    slug: 'gig-hourly-rate-calculator',
    name: 'Gig Hourly Rate Calculator',
    shortDescription: 'Calculate net hourly rate after shift expenses.',
    intro:
      'Use this gig hourly rate calculator to estimate what you actually earned per hour after subtracting gas and operating costs.',
    title: 'Gig Hourly Rate Calculator | Net Earnings Per Hour',
    metaDescription:
      'Calculate net gig hourly rate from gross earnings, expenses, and total hours worked.',
    h1: 'Gig Hourly Rate Calculator',
    kind: 'gigHourlyRate',
    fields: [
      { key: 'grossEarnings', label: 'Gross Earnings ($)', placeholder: 'e.g. 210' },
      { key: 'expenses', label: 'Shift Expenses ($)', placeholder: 'e.g. 48' },
      { key: 'hoursWorked', label: 'Hours Worked', placeholder: 'e.g. 9' },
    ],
    explanation:
      'Gross numbers alone can hide weak shifts. This calculator gives you a realistic hourly view so you can compare apps, time blocks, and zones more effectively.',
    howItWorks: [
      'Enter total shift earnings.',
      'Enter total expenses for that shift.',
      'Enter hours worked.',
      'The calculator subtracts expenses from earnings, then divides by hours worked.',
    ],
    faqs: [
      {
        question: 'Should downtime between orders count as hours worked?',
        answer:
          'Yes. Include all time spent on shift so your hourly rate reflects real opportunity cost.',
      },
      {
        question: 'Can this compare two gig apps?',
        answer:
          'Yes. Run each app separately with its own earnings, expenses, and hours to compare net hourly performance.',
      },
    ],
    relatedSlugs: ['hourly-rate-calculator', 'doordash-profit-calculator', 'mileage-profit-calculator'],
    ctaTitle: 'See your true hourly performance in one dashboard',
    ctaDescription:
      'GigShiftLedger tracks earnings, mileage, and expenses so you can compare net hourly results over time.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Open GigShiftLedger',
  },
  {
    slug: 'side-hustle-profit-calculator',
    name: 'Side Hustle Profit Calculator',
    shortDescription: 'Estimate side hustle net profit after expenses and taxes.',
    intro:
      'Use this side hustle profit calculator to estimate how much you actually keep from monthly revenue after costs and tax set-asides.',
    title: 'Side Hustle Profit Calculator | Estimate Net Monthly Profit',
    metaDescription:
      'Calculate side hustle net profit from revenue, operating expenses, and tax reserve amounts.',
    h1: 'Side Hustle Profit Calculator',
    kind: 'sideHustleProfit',
    fields: [
      { key: 'revenue', label: 'Total Revenue ($)', placeholder: 'e.g. 3200' },
      { key: 'operatingExpenses', label: 'Operating Expenses ($)', placeholder: 'e.g. 950' },
      { key: 'taxReserve', label: 'Tax Reserve ($)', placeholder: 'e.g. 600' },
    ],
    explanation:
      'Revenue alone does not show business health. This calculator helps you estimate realistic take-home profit so you can budget and set growth goals with confidence.',
    howItWorks: [
      'Enter revenue for the period.',
      'Enter operating expenses needed to run the hustle.',
      'Enter tax reserve or withholding amount.',
      'The calculator subtracts both expense categories from revenue.',
    ],
    faqs: [
      {
        question: 'Should I include business subscriptions and software?',
        answer:
          'Yes. Include every recurring cost tied to the side hustle for a truer profit estimate.',
      },
      {
        question: 'What time period should I use?',
        answer:
          'Monthly is common, but you can use weekly or quarterly figures as long as all inputs use the same period.',
      },
    ],
    relatedSlugs: ['break-even-calculator', 'reseller-profit-calculator', 'gig-hourly-rate-calculator'],
    ctaTitle: 'Keep your side hustle finances organized',
    ctaDescription:
      'If your hustle is product-based resale, FlippingLedger helps you track costs and profit with less spreadsheet work.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Check FlippingLedger',
  },
  {
    slug: 'mileage-profit-calculator',
    name: 'Mileage Profit Calculator',
    shortDescription: 'Estimate net mileage earnings after vehicle operating costs.',
    intro:
      'Use this mileage profit calculator to estimate net earnings from distance-based work after applying your cost-per-mile assumption.',
    title: 'Mileage Profit Calculator | Net Earnings by Mile',
    metaDescription:
      'Calculate mileage-based net profit from total miles, pay per mile, and operating cost per mile.',
    h1: 'Mileage Profit Calculator',
    kind: 'mileageProfit',
    fields: [
      { key: 'miles', label: 'Total Miles', placeholder: 'e.g. 140' },
      { key: 'payPerMile', label: 'Pay Per Mile ($)', placeholder: 'e.g. 1.65' },
      { key: 'costPerMile', label: 'Cost Per Mile ($)', placeholder: 'e.g. 0.31' },
    ],
    explanation:
      'Distance-based gigs are profitable only when pay per mile stays ahead of true operating costs. This calculator gives you a fast net-per-route estimate.',
    howItWorks: [
      'Enter total miles for the route or shift.',
      'Enter average pay earned per mile.',
      'Enter your cost per mile.',
      'The calculator computes net profit as miles × (pay per mile − cost per mile).',
    ],
    faqs: [
      {
        question: 'Is this better than using gas cost alone?',
        answer:
          'Yes. Cost-per-mile can include maintenance and depreciation, not just fuel, giving a more realistic net estimate.',
      },
      {
        question: 'Can I use this for multi-app delivery?',
        answer:
          'Yes. Combine total miles and blended pay-per-mile across apps for a shift-level estimate.',
      },
    ],
    relatedSlugs: ['doordash-profit-calculator', 'uber-fare-calculator', 'gig-hourly-rate-calculator'],
    ctaTitle: 'Get better mileage visibility with GigShiftLedger',
    ctaDescription:
      'GigShiftLedger helps drivers log miles and expenses accurately so mileage profit estimates match real outcomes.',
    ctaLink: 'gigShiftLedger',
    ctaLabel: 'Visit GigShiftLedger',
  },
  {
    slug: 'reseller-margin-calculator',
    name: 'Reseller Margin Calculator',
    shortDescription: 'Calculate margin percentage after item costs and selling expenses.',
    intro:
      'Use this reseller margin calculator to estimate percentage margin on each sale so you can set pricing targets and sourcing standards.',
    title: 'Reseller Margin Calculator | Calculate Net Margin Percentage',
    metaDescription:
      'Calculate reseller net margin percentage using sale price, cost of goods, fees, and shipping expenses.',
    h1: 'Reseller Margin Calculator',
    kind: 'resellerMargin',
    resultLabel: 'Estimated margin',
    resultFormat: 'percent',
    fields: [
      { key: 'salePrice', label: 'Sale Price ($)', placeholder: 'e.g. 110' },
      { key: 'costOfGoods', label: 'Cost of Goods ($)', placeholder: 'e.g. 34' },
      { key: 'fees', label: 'Fees ($)', placeholder: 'e.g. 13' },
      { key: 'shipping', label: 'Shipping / Fulfillment ($)', placeholder: 'e.g. 9' },
    ],
    explanation:
      'Margin percentage helps you compare deals quickly even when item prices vary. This is useful for setting minimum standards when sourcing inventory.',
    howItWorks: [
      'Enter sale price and all item-level costs.',
      'The calculator finds net profit by subtracting costs from sale price.',
      'It divides net profit by sale price and converts to a percentage.',
      'Use this percentage to compare different products consistently.',
    ],
    faqs: [
      {
        question: 'What margin should resellers target?',
        answer:
          'Targets vary by category and risk. Many sellers use a minimum margin threshold to avoid low-return listings.',
      },
      {
        question: 'Can margin be negative?',
        answer:
          'Yes. Negative margin means your sale loses money after all costs are counted.',
      },
    ],
    relatedSlugs: ['reseller-profit-calculator', 'ebay-fee-calculator', 'facebook-marketplace-profit-calculator'],
    ctaTitle: 'Track margin by item with FlippingLedger',
    ctaDescription:
      'FlippingLedger helps resellers monitor margins and profits across every item so pricing and sourcing become data-driven.',
    ctaLink: 'flippingLedger',
    ctaLabel: 'Visit FlippingLedger',
  },
];

export const getCalculatorBySlug = (slug: string) =>
  calculators.find((calculator) => calculator.slug === slug);

export const getCalculatorsBySlugs = (slugs: string[]) => {
  const calculatorMap = new Map(calculators.map((calculator) => [calculator.slug, calculator]));
  return slugs.map((slug) => calculatorMap.get(slug)).filter((calculator): calculator is CalculatorData => Boolean(calculator));
};
