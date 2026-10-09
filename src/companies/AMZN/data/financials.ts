import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

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
  177.866, 232.887, 280.522, 386.064, 469.822, 513.983, 574.785, 637.959,
  716.924,
];

export const expenseLines = [
  {
    label: 'Cost of sales',
    desc: 'Cost of product sales, digital media content, and shipping costs for products sold directly by Amazon, plus cost of third-party seller fulfillment services.',
    values: [
      111.934, 139.156, 165.536, 233.307, 272.344, 288.831, 304.739, 326.288,
      356.414,
    ],
  },
  {
    label: 'Fulfillment',
    desc: 'Costs incurred in operating and staffing fulfillment centres, customer service centres, and physical stores, including payment processing.',
    values: [
      25.249, 34.027, 40.232, 58.517, 75.111, 84.299, 90.619, 98.505, 109.074,
    ],
  },
  {
    label: 'Technology and infrastructure',
    desc: 'Research and development for new and existing products and services, and infrastructure costs for servers, networking, and data centres that support AWS and retail operations.',
    values: [
      22.62, 28.837, 35.931, 42.74, 56.052, 73.213, 85.622, 88.544, 108.521,
    ],
  },
  {
    label: 'Sales and marketing',
    desc: 'Advertising and payroll expenses for sales and marketing staff.',
    values: [
      10.069, 13.814, 18.878, 22.008, 32.551, 42.238, 44.37, 43.907, 47.129,
    ],
  },
  {
    label: 'General and administrative',
    desc: 'Corporate-function costs, including payroll for finance, legal, and human resources.',
    values: [3.674, 4.336, 5.203, 6.668, 8.823, 11.891, 11.816, 11.359, 11.172],
  },
  {
    label: 'Other operating expense (income), net',
    desc: 'Amortisation of acquired intangibles, restructuring costs, and other operating items. FY20 was a net credit of $75M. FY25 elevated to $4.6B.',
    values: [0.214, 0.296, 0.201, -0.075, 0.062, 1.263, 0.767, 0.763, 4.639],
  },
  {
    label: 'Non-operating items, net',
    desc: 'Net of interest income, interest expense, other income (expense), and equity-method investment losses. Highly volatile because of unrealised gains and losses on equity investments: FY21 includes $14.6B in Rivian gains, FY22 includes $16.8B in Rivian losses, and FY25 includes $15.2B in gains on Anthropic and other investments. Negative values mean non-operating items produced net income.',
    values: [0.3, 1.16, 0.565, -1.279, -13.272, 18.184, -0.693, 0.08, -16.782],
  },
  {
    label: 'Income tax expense (benefit)',
    desc: 'Provision for income taxes. FY22 was a $3.2B tax benefit, partially offsetting the $16.8B in unrealised Rivian losses.',
    values: [0.769, 1.197, 2.374, 2.863, 4.791, -3.217, 7.12, 9.265, 19.087],
  },
];

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
    desc: 'Net change in cash, cash equivalents, and restricted cash, including foreign exchange effects.',
    values: [1.278, 10.668, 4.167, 5.349, -5.536, 18.869, 19.234, 9.723, 6.63],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for depreciation, stock-based compensation, deferred taxes, and working capital changes.',
    values: [
      18.434, 30.723, 38.514, 66.064, 46.327, 46.752, 84.946, 115.877, 139.514,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including capital expenditures for data centres, fulfilment centres, and logistics infrastructure, plus acquisitions and investment purchases.',
    values: [
      -27.084, -12.369, -24.281, -59.611, -58.154, -37.601, -49.833, -94.342,
      -142.545,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment, including data centres, fulfilment centres, and transportation infrastructure. The surge from $12.0B (FY17) to $131.8B (FY25) reflects the buildout of AI infrastructure for AWS and continued logistics expansion.',
    values: [
      -11.955, -13.427, -16.861, -40.14, -61.053, -63.645, -52.729, -82.999,
      -131.819,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, including long-term debt issuance and repayment and principal repayments of finance leases. Positive in FY17, FY21, FY22, and FY25 reflects debt issuance.',
    values: [
      9.928, -7.686, -10.066, -1.104, 6.291, 9.718, -15.879, -11.812, 9.661,
    ],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. Negative in FY21 and FY22 from the post-pandemic warehouse and data-centre buildout. FY25 compressed to $7.7B despite $139.5B in operating cash flow because capex reached $131.8B.',
    values: [
      6.479, 17.296, 21.653, 25.924, -14.726, -16.893, 32.217, 32.878, 7.695,
    ],
  },
];

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Amazon',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    metric: 'after-tax operating income',
    metricShort: 'Earnings',
    paths: [
      {
        label: 'After-tax operating income',
        actual: 65.58,
        forward: 90.09,
      },
    ],
    startNote: 'consensus FY26E operating income after an 18% tax charge',
    actualNote: 'FY25 operating income of $79.98B less 18% tax.',
    forwardNote:
      'Consensus FY26E operating income of $109.87B less 18% tax. Consensus FY26E free cash flow is about -$34B because of AI capital spending, so it cannot anchor a DCF.',
    sharesOutstanding: 10.79,
    netCash: -9.2,
    netCashSource:
      '$132.2B of debt minus $123.0B of cash, cash equivalents, and marketable securities, Q2 2026 10-Q, with lease liabilities and private stakes excluded',
    assumptionNote:
      'After-tax operating income applies an 18% tax rate to operating income. It stands in for the cash the business would produce if capital spending fell to the level of depreciation.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E revenue of $828.49B and diluted EPS of $8.15 are consensus analyst estimates from 55 analysts as of September 2026. FY26E operating income of $109.87B is the consensus estimate. P/E recalculates from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end price divided by GAAP split-adjusted diluted EPS.',
      values: [190.1, 74.6, 80.3, 78.5, 52.0, null, 52.4, 39.7, 32.2, 30.2],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 63.5,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'High P/E reflects the low-margin, high-reinvestment phase of the business. Split-adjusted EPS was $0.31.',
        FY22: 'Negative EPS from $16.8B in unrealised Rivian losses; P/E not meaningful.',
        FY26E:
          'Calculated from $246.15 divided by consensus GAAP diluted EPS of $8.15.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Year-end price divided by free cash flow per share. FCF is operating cash flow minus capital expenditures.',
      values: [89.0, 43.4, 43.0, 64.7, null, null, 49.5, 71.5, 324.8],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 64.7,
      yearNotes: {
        FY21: 'Negative FCF from the post-pandemic warehouse buildout; ratio not meaningful.',
        FY22: 'Negative FCF continued as data-centre and logistics capex exceeded operating cash flow.',
        FY25: 'FCF compressed to $7.7B as $131.8B in AI infrastructure capex nearly consumed $139.5B in operating cash flow.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share, split-adjusted.',
      values: [0.31, 1.01, 1.15, 2.09, 3.24, -0.27, 2.9, 5.53, 7.17, 8.15],
      format: { prefix: '$', decimals: 2 },
      median10y: 2.09,
      guidanceCount: 1,
      yearNotes: {
        FY22: 'Net loss driven by $16.8B in unrealised Rivian losses.',
        FY26E: 'Consensus GAAP diluted EPS from 55 analysts.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus capital expenditures, divided by diluted shares outstanding.',
      values: [0.66, 1.73, 2.15, 2.54, -1.43, -1.66, 3.07, 3.07, 0.71],
      format: { prefix: '$', decimals: 2 },
      median10y: 1.73,
      yearNotes: {
        FY25: 'FCF compressed to $0.71/share as $131.8B in capex nearly consumed all operating cash flow.',
      },
    },
    {
      label: 'Operating margin %',
      desc: 'Operating income as a share of total revenue.',
      values: [2.3, 5.3, 5.2, 5.9, 5.3, 2.4, 6.4, 10.8, 11.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.3,
    },
    {
      label: 'Net margin %',
      desc: 'GAAP net income as a share of total revenue.',
      values: [1.7, 4.3, 4.1, 5.5, 7.1, -0.5, 5.3, 9.3, 10.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.3,
      yearNotes: {
        FY21: 'Inflated by $14.6B in unrealised Rivian gains flowing through other income.',
        FY22: 'Negative due to $16.8B in unrealised Rivian losses.',
        FY25: 'Inflated by $15.2B in unrealised gains on equity investments.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of total revenue.',
      values: [3.6, 7.4, 7.7, 6.7, -3.1, -3.3, 5.6, 5.2, 1.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.2,
      yearNotes: {
        FY25: 'Compressed to 1.1% as AI infrastructure capex consumed nearly all operating cash flow.',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Total revenue, operating income, and net income in billions with year-on-year growth rates. Net income is volatile because of large unrealised gains and losses on equity investments (Rivian, Anthropic).',
    revenueDesc:
      'Consolidated net sales from all segments: North America, International, and AWS.',
    operatingIncomeDesc:
      'Income from operations before non-operating items and taxes. Grew from $4.1B (FY17) to $80.0B (FY25) as AWS scaled and retail margins expanded.',
    netIncomeDesc:
      'GAAP net income. Exceeded operating income in FY21 ($14.6B Rivian gains) and FY25 ($15.2B equity gains). Turned negative in FY22 ($16.8B Rivian losses).',
    chartNote:
      'Revenue grew from $178B (FY17) to $717B (FY25), a 4x increase in eight years. Operating income was below $25B through FY21 and then surged to $80B in FY25 as AWS margins expanded and retail cost-to-serve fell. Net income diverged from operating income in FY21, FY22, and FY25 because of multi-billion-dollar unrealised gains and losses on equity investments. FY26E revenue and net income are consensus analyst estimates.',
  },
  revenue: [
    {
      year: 'FY17',
      revenue: 177.866,
      operatingIncome: 4.106,
      netIncome: 3.033,
    },
    {
      year: 'FY18',
      revenue: 232.887,
      operatingIncome: 12.421,
      netIncome: 10.073,
    },
    {
      year: 'FY19',
      revenue: 280.522,
      operatingIncome: 14.541,
      netIncome: 11.588,
    },
    {
      year: 'FY20',
      revenue: 386.064,
      operatingIncome: 22.899,
      netIncome: 21.331,
    },
    {
      year: 'FY21',
      revenue: 469.822,
      operatingIncome: 24.879,
      netIncome: 33.364,
    },
    {
      year: 'FY22',
      revenue: 513.983,
      operatingIncome: 12.248,
      netIncome: -2.722,
    },
    {
      year: 'FY23',
      revenue: 574.785,
      operatingIncome: 36.852,
      netIncome: 30.425,
    },
    {
      year: 'FY24',
      revenue: 637.959,
      operatingIncome: 68.593,
      netIncome: 59.248,
    },
    {
      year: 'FY25',
      revenue: 716.924,
      operatingIncome: 79.975,
      netIncome: 77.67,
    },
    {
      year: 'FY26E',
      revenue: 828.49,
      operatingIncome: 109.87,
      netIncome: 88.84,
    },
  ],
  thesis: [
    "AWS is the world's largest cloud platform, growing from $17.5B (FY17) to $128.7B (FY25) and generating 57% of Amazon's operating income despite 18% of revenue, with AI services as the next growth driver.",
    "Amazon's retail marketplace generates revenue from first-party sales, third-party seller commissions, fulfilment services, advertising, and Prime subscriptions, creating a self-reinforcing flywheel in which more sellers attract more buyers and vice versa.",
    'Capital expenditures surged from $12.0B (FY17) to $131.8B (FY25) for AI infrastructure and logistics, with FY26E consensus expecting capex to exceed operating cash flow — a deliberate investment cycle that management frames as similar to the 2020–2021 warehouse buildout.',
  ],
};

export default financials;
