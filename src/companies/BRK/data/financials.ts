import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

export const cashFlowStatementYears = [
  'FY17',
  'FY18',
  'FY19',
  'FY20',
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash for the year, including exchange rate effects.',
    values: [3.54, -1.4, 33.82, -16.24, 40.31, -52.31, 2.24, 9.73, 4.19],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. Includes insurance premium collections, operating business cash flows, and investment income received.',
    values: [45.78, 37.4, 38.69, 39.77, 39.43, 37.22, 49.2, 30.59, 45.97],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities. Dominated by purchases and sales of equity and fixed-income securities, plus business acquisitions and capital expenditures. FY21 was positive because Berkshire sold more securities than it bought; FY22 was deeply negative from the Alleghany acquisition and net securities purchases.',
    values: [
      -41.09, -32.85, -5.62, -37.76, 29.39, -87.6, -32.66, -10.29, -44.49,
    ],
  },
  {
    label: 'Financing activities',
    desc: "Net cash from financing activities. Includes share repurchases, debt issuance and repayment, and insurance float-related flows. FY21's large outflow reflects $27B in share buybacks.",
    values: [-1.4, -5.81, 0.73, -18.34, -28.51, -1.66, -14.41, -10.36, 2.23],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures (property and equipment). Capital expenditures run $12-21B per year, primarily for BNSF railway infrastructure, BH Energy generation and transmission assets, and manufacturing facilities.',
    values: [34.07, 22.86, 22.71, 26.76, 26.15, 21.76, 29.79, 11.62, 25.04],
  },
];

export const expenseYears = [
  'FY17',
  'FY18',
  'FY19',
  'FY20',
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
];

export const revenueByYear = [
  242.14, 247.84, 254.62, 245.51, 276.09, 302.09, 364.48, 371.43, 371.44,
];

export const expenseLines = [
  {
    label: 'Insurance claims and policy benefits',
    desc: 'Losses and loss adjustment expenses on property/casualty insurance, plus life, annuity, and health insurance policy benefits paid to policyholders.',
    values: [
      54.509, 45.605, 49.442, 49.763, 55.971, 62.798, 61.216, 60.044, 61.686,
    ],
  },
  {
    label: 'Insurance underwriting expenses',
    desc: 'Policy acquisition costs, commissions, and administrative expenses for GEICO, Berkshire Hathaway Reinsurance Group, and Berkshire Hathaway Primary Group.',
    values: [9.321, 9.793, 11.2, 12.798, 12.569, 11.942, 15.27, 16.808, 17.756],
  },
  {
    label: 'Cost of sales, services and leasing',
    desc: 'Direct costs for BNSF Railway, BH Energy, manufacturing and retailing businesses, Pilot Travel Centers (consolidated from FY23), and leasing operations.',
    values: [
      130.601, 137.83, 137.776, 129.369, 146.775, 163.047, 210.181, 203.66,
      200.072,
    ],
  },
  {
    label: 'SGA and other operating expenses',
    desc: 'Selling, general and administrative expenses across all non-insurance subsidiaries, plus other operating charges. FY20 includes a $10.7B goodwill impairment on Precision Castparts.',
    values: [
      22.42, 22.133, 23.324, 35.276, 24.458, 24.49, 29.474, 29.985, 33.89,
    ],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on debt issued by railroad, utilities, financial products, and other subsidiaries, plus holding company borrowings.',
    values: [4.386, 3.853, 3.961, 4.083, 4.172, 4.352, 5.003, 5.2, 5.069],
  },
  {
    label: 'Income tax expense (benefit)',
    desc: 'Provision for income taxes, which includes tax on investment gains and losses excluded from operating revenue, making this line volatile.',
    values: [
      -21.515, -0.321, 20.904, 12.44, 20.912, -8.502, 23.019, 20.815, 15.199,
    ],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E operating EPS of $22.93 and revenue of $418.3B are from a single analyst estimate (StockAnalysis, September 2026). Berkshire does not provide earnings guidance, and analyst coverage is extremely thin. GAAP net income for FY26E ($44.5B) is from the consensus GAAP EPS of $20.61 (Seeking Alpha), but GAAP earnings are dominated by unpredictable investment gains and losses and should not be used for valuation.',
  criticalMetrics: [
    {
      label: 'P/B ratio',
      desc: 'Year-end BRK-B price divided by book value per BRK-B equivalent share. Price-to-book is the primary valuation metric for Berkshire because GAAP earnings are dominated by unrealized investment gains and losses.',
      values: [1.39, 1.43, 1.29, 1.2, 1.3, 1.42, 1.36, 1.51, 1.49],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 1.39,
      yearNotes: {
        FY20: 'Compressed to 1.20x during the COVID-19 sell-off, approaching the historical buyback threshold of approximately 1.2x book value.',
        FY24: 'Expanded to 1.51x as the stock rallied 47% while book value grew 16%, partly reflecting the market repricing Berkshire after strong insurance results and a record cash position.',
      },
    },
    {
      label: 'P/Operating earnings',
      desc: "Year-end market capitalisation divided by after-tax operating earnings (excluding investment and derivative gains/losses). This is the earnings-based valuation metric Berkshire's management and most analysts use because GAAP P/E is distorted by unrealized investment gains.",
      values: [32.7, 20.0, 22.0, 24.2, 24.6, 22.1, 20.7, 20.6, 24.4, 21.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 22.1,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Elevated because FY17 operating earnings were depressed by $2.2B in insurance underwriting losses from Hurricanes Harvey, Irma, and Maria.',
        FY26E:
          'Calculated from $502.35 divided by consensus operating EPS of $22.93.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Operating EPS',
      desc: 'After-tax operating earnings per BRK-B equivalent share, excluding investment and derivative gains/losses and impairment charges. This is the metric Warren Buffett and Greg Abel emphasise in shareholder letters.',
      values: [
        5.86, 10.05, 9.78, 9.17, 12.12, 13.98, 17.19, 22.0, 20.62, 22.93,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 12.12,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by $2.2B in catastrophe losses from Hurricanes Harvey, Irma, and Maria.',
        FY18: 'Jumped 72% as the Tax Cuts and Jobs Act lowered the corporate rate from 35% to 21%.',
        FY24: 'Record operating earnings of $47.4B driven by strong insurance underwriting and investment income from rising interest rates on the cash hoard.',
        FY26E: 'Single-analyst estimate from StockAnalysis.',
      },
    },
    {
      label: 'Book value per share',
      desc: 'Shareholders equity divided by BRK-B equivalent shares outstanding. Berkshire does not pay dividends, so book value grows through retained earnings and changes in the fair value of the equity portfolio (through other comprehensive income).',
      values: [143, 143, 176, 193, 223, 214, 259, 301, 332],
      format: { prefix: '$', decimals: 0 },
      median10y: 214,
      yearNotes: {
        FY22: 'Declined 4% because unrealized losses on the equity portfolio flowed through other comprehensive income, partially offset by $30.8B in retained operating earnings.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus capital expenditures, divided by BRK-B equivalent diluted shares outstanding.',
      values: [13.81, 9.27, 9.27, 11.19, 11.55, 9.88, 13.71, 5.39, 11.61],
      format: { prefix: '$', decimals: 2 },
      median10y: 11.19,
      yearNotes: {
        FY24: 'FCF per share fell to $5.39 because operating cash flow dropped to $30.6B, partly from timing of insurance claim payments and working capital swings.',
      },
    },
    {
      label: 'Operating earnings margin',
      desc: 'After-tax operating earnings as a share of operating revenue (excluding investment gains/losses). Because operating earnings are after-tax, this margin is lower than a conventional pre-tax operating margin.',
      values: [6.0, 10.0, 9.4, 8.9, 9.9, 10.2, 10.2, 12.8, 12.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 10.0,
      yearNotes: {
        FY17: 'Depressed by hurricane catastrophe losses and the higher pre-TCJA corporate tax rate.',
        FY24: 'Record margin driven by exceptionally strong insurance underwriting and investment income results.',
      },
    },
  ],
  revenueSection: {
    kicker:
      "Operating revenue excludes investment and derivative gains/losses, which are volatile and unpredictable. GAAP net income includes those gains/losses and can therefore exceed operating revenue in strong market years or turn negative in down markets. The 'operating income' line shows after-tax operating earnings, Berkshire's preferred performance measure.",
    revenueDesc:
      'Total revenues excluding investment and derivative contract gains/losses. Includes insurance premiums earned, sales and service revenues (manufacturing, retailing, Pilot Travel Centers from 2023), railroad freight revenues (BNSF), energy revenues (BH Energy), leasing revenues, and interest and dividend income on the investment portfolio.',
    operatingIncomeDesc:
      "After-tax operating earnings as reported by Berkshire, excluding investment and derivative gains/losses and impairment charges. This is Berkshire's primary performance metric, not a GAAP operating income line.",
    netIncomeDesc:
      'GAAP net income including unrealized investment gains and losses, which have been required to flow through the income statement since FY18 (FASB ASU 2016-01). GAAP net income is extremely volatile: it was $96.2B in FY23, $89.0B in FY24, and -$22.8B in FY22, driven almost entirely by changes in the market value of the equity portfolio (primarily Apple).',
  },
  revenue: [
    { year: 'FY17', revenue: 242.14, operatingIncome: 14.46, netIncome: 44.94 },
    { year: 'FY18', revenue: 247.84, operatingIncome: 24.78, netIncome: 4.02 },
    { year: 'FY19', revenue: 254.62, operatingIncome: 23.97, netIncome: 81.42 },
    { year: 'FY20', revenue: 245.51, operatingIncome: 21.92, netIncome: 42.52 },
    { year: 'FY21', revenue: 276.09, operatingIncome: 27.46, netIncome: 89.8 },
    {
      year: 'FY22',
      revenue: 302.09,
      operatingIncome: 30.79,
      netIncome: -22.82,
    },
    { year: 'FY23', revenue: 364.48, operatingIncome: 37.35, netIncome: 96.22 },
    { year: 'FY24', revenue: 371.43, operatingIncome: 47.44, netIncome: 89.0 },
    { year: 'FY25', revenue: 371.44, operatingIncome: 44.49, netIncome: 66.97 },
    { year: 'FY26E', revenue: 418.3, operatingIncome: 49.4, netIncome: 44.5 },
  ],
  thesis: [
    'Berkshire Hathaway owns a diversified portfolio of wholly owned businesses, including GEICO (auto insurance), BNSF Railway, Berkshire Hathaway Energy, and dozens of manufacturing and service companies, alongside a concentrated public equity portfolio, which provides exposure to multiple sectors while centralizing capital allocation under management that has compounded book value per share at 12.8% annually from FY18 to FY25 without dividends or shareholder dilution.',
    'The insurance operations generate approximately $176 billion in float (premiums collected before claims are paid), which Berkshire invests at no cost when underwriting is profitable, effectively providing a large pool of zero-cost leverage that funds both the equity portfolio and acquisitions of operating businesses, a structural advantage that no non-insurance conglomerate can replicate.',
    'Berkshire holds over $370 billion in cash and Treasury bills as of 2025, which serves as dry powder for large acquisitions during market dislocations and as a permanent margin of safety against catastrophic insurance claims, and which management has deployed through share buybacks (reducing BRK-B equivalent shares from 2.47 billion in FY17 to 2.16 billion in FY25) rather than through dividends, signaling a preference for compounding over distribution.',
  ],
};

export default financials;
