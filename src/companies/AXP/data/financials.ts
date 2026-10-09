import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

export const expenseYears = [
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
  40.338, 43.556, 36.087, 42.38, 52.862, 60.515, 65.949, 72.229,
];

export const expenseLines = [
  {
    label: 'Card member rewards and services',
    desc: "Cost of rewards programs (Membership Rewards points, cash back, airline miles), insurance, airport lounge access, and other card member benefits. AXP's largest expense line, growing with billed business volume and richer reward offerings.",
    values: [11.473, 12.662, 9.271, 13.0, 16.961, 19.335, 21.381, 24.466],
  },
  {
    label: 'Marketing and business development',
    desc: 'Card acquisition costs, co-brand partner payments, loyalty coalition expenses, advertising, and promotional activities.',
    values: [6.477, 7.125, 6.747, 9.053, 10.401, 10.87, 11.926, 12.709],
  },
  {
    label: 'Salaries and employee benefits',
    desc: 'Compensation, benefits, and related costs for approximately 80,000 employees worldwide.',
    values: [5.25, 5.911, 5.718, 6.24, 7.252, 8.067, 8.198, 9.016],
  },
  {
    label: 'Other, net',
    desc: 'Technology and development, professional services, occupancy, communications, and other operating expenses net of miscellaneous income.',
    values: [5.664, 5.856, 5.325, 4.817, 6.481, 6.807, 6.364, 6.987],
  },
  {
    label: 'Provisions for credit losses',
    desc: 'Net charge for expected credit losses on card member loans and receivables. Negative in FY21 because AXP released COVID-era reserves as credit performance improved faster than expected.',
    values: [3.352, 3.573, 4.73, -1.419, 2.182, 4.923, 5.185, 5.256],
  },
  {
    label: 'Income tax expense',
    desc: 'Provision for income taxes.',
    values: [1.201, 1.67, 1.161, 2.629, 2.071, 2.139, 2.766, 2.962],
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
    desc: 'Net change in cash including exchange rate effects.',
    values: [
      7.719, -5.455, -3.362, 8.519, -10.937, 11.886, 12.682, -5.956, 7.152,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges, provisions for credit losses, and working capital changes.',
    values: [13.54, 8.93, 13.632, 5.591, 14.645, 21.079, 18.559, 14.05, 18.428],
  },
  {
    label: 'Investing activities',
    desc: "Net cash used in investing activities, dominated by growth in card member loans and changes in investment securities. Unlike non-financial companies, AXP's investing activities reflect expansion of its lending portfolio.",
    values: [
      -18.273, -19.615, -16.707, 11.632, -10.529, -33.689, -24.433, -24.402,
      -22.891,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of premises and equipment. A small fraction of operating cash flow ($1–2.4B versus $6–21B), reflecting that AXP is a financial company whose growth capital goes into the card member loan portfolio rather than physical assets.',
    values: [
      -1.062, -1.31, -1.645, -1.478, -1.638, -1.856, -1.565, -1.917, -2.426,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, including changes in customer deposits, long-term debt issuance and repayment, share repurchases, and dividends.',
    values: [
      12.245, 5.101, -0.519, -9.068, -14.933, 24.509, 18.379, 4.436, 11.21,
    ],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures (property and equipment).',
    values: [
      12.478, 7.62, 11.987, 4.113, 13.007, 19.223, 16.994, 12.133, 16.002,
    ],
  },
];

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'American Express',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    metric: 'net income',
    metricShort: 'Net income',
    paths: [
      {
        label: 'Net income',
        actual: 10.833,
        forward: 12.0,
      },
    ],
    startNote: 'consensus FY26E net income',
    forwardNote:
      'Consensus FY26E net income of $12.0B (EPS of $17.64), inside management’s reaffirmed guidance of $17.30–17.90.',
    sharesOutstanding: 0.6753,
    netCash: 0,
    netCashSource:
      'set to zero because cash is funded by customer deposits and debt funds card loans, so neither is surplus capital',
    assumptionNote:
      'Net income replaces free cash flow because a card lender’s operating cash flow swings with loan and deposit growth.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E EPS of $17.67 and net income of $12.0B are consensus analyst estimates from 23 analysts as of September 2026. FY26E revenue of $79.49B is the consensus estimate. P/E recalculates from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end price divided by GAAP diluted EPS.',
      values: [30.0, 11.0, 14.5, 30.3, 15.6, 14.5, 16.4, 21.1, 19.3, 17.3],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 15.6,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'GAAP EPS of $2.99 was depressed by a $2.6B Tax Cuts and Jobs Act charge, inflating the P/E.',
        FY20: 'P/E elevated because COVID-19 depressed EPS while the market priced in recovery.',
        FY26E:
          'Calculated from $305.29 divided by consensus GAAP diluted EPS of $17.67.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Year-end price divided by free cash flow per share (operating cash flow minus capital expenditures).',
      values: [6.4, 9.8, 8.0, 22.4, 9.5, 5.6, 8.0, 17.3, 12.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 9.5,
      yearNotes: {
        FY20: 'FCF per share dropped as COVID-19 reduced operating cash flow and credit loss provisions consumed cash.',
        FY22: 'P/FCF compressed because strong operating cash flow boosted FCF per share to $25.56.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share.',
      values: [2.99, 7.91, 7.99, 3.77, 10.02, 9.85, 11.21, 14.01, 15.38, 17.67],
      format: { prefix: '$', decimals: 2 },
      median10y: 9.85,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by $2.6B Tax Cuts and Jobs Act transition tax charge.',
        FY20: 'Depressed by COVID-19 credit loss provisions.',
        FY26E: 'Consensus analyst estimate for GAAP diluted EPS.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus capital expenditures, divided by diluted shares outstanding.',
      values: [14.09, 8.87, 14.44, 5.1, 16.46, 25.56, 23.09, 17.02, 22.99],
      format: { prefix: '$', decimals: 2 },
      median10y: 16.46,
    },
    {
      label: 'Pretax margin %',
      desc: 'Pretax income as a share of total revenues net of interest expense. AXP does not report a separate operating income line.',
      values: [20.1, 20.1, 19.4, 11.9, 25.2, 18.1, 17.4, 19.6, 19.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 19.4,
      yearNotes: {
        FY20: 'Compressed by elevated credit loss provisions during COVID-19.',
        FY21: 'Expanded by release of COVID-era credit reserves ($1.4B provision benefit).',
      },
    },
    {
      label: 'Net margin %',
      desc: 'GAAP net income as a share of total revenues net of interest expense.',
      values: [7.5, 17.2, 15.5, 8.7, 19.0, 14.2, 13.8, 15.4, 15.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 15.0,
      yearNotes: {
        FY17: 'Depressed by the $2.6B TCJA charge.',
        FY20: 'Depressed by COVID-19 credit loss provisions.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of total revenues net of interest expense. Volatile because operating cash flow reflects working capital swings in card member receivables and deposit changes.',
      values: [33.8, 18.9, 27.5, 11.4, 30.7, 36.4, 28.1, 18.4, 22.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 27.5,
    },
  ],
  revenueSection: {
    operatingIncomeDesc:
      "Pretax income (income before provision for income taxes). AXP's income statement goes directly from total expenses to pretax income without a separate operating income line, so the line labeled here as operating income is actually pretax income.",
    netIncomeDesc:
      'GAAP net income. FY17 was depressed by a $2.6B Tax Cuts and Jobs Act charge. FY20 was depressed by elevated COVID-19 credit loss provisions.',
  },
  revenue: [
    { year: 'FY17', revenue: 36.878, operatingIncome: 7.425, netIncome: 2.748 },
    { year: 'FY18', revenue: 40.338, operatingIncome: 8.122, netIncome: 6.921 },
    { year: 'FY19', revenue: 43.556, operatingIncome: 8.429, netIncome: 6.759 },
    { year: 'FY20', revenue: 36.087, operatingIncome: 4.296, netIncome: 3.135 },
    { year: 'FY21', revenue: 42.38, operatingIncome: 10.689, netIncome: 8.06 },
    {
      year: 'FY22',
      revenue: 52.862,
      operatingIncome: 9.585,
      netIncome: 7.514,
    },
    {
      year: 'FY23',
      revenue: 60.515,
      operatingIncome: 10.513,
      netIncome: 8.374,
    },
    {
      year: 'FY24',
      revenue: 65.949,
      operatingIncome: 12.895,
      netIncome: 10.129,
    },
    {
      year: 'FY25',
      revenue: 72.229,
      operatingIncome: 13.795,
      netIncome: 10.833,
    },
    { year: 'FY26E', revenue: 79.49, operatingIncome: null, netIncome: 12.0 },
  ],
  thesis: [
    'American Express operates a closed-loop payment network in which it acts as both the card issuer and the payment processor, giving it direct relationships with cardholders and merchants, unique transaction-level data, and the ability to earn revenue from both sides of every transaction, which is a structural advantage that open-loop networks like Visa and Mastercard do not have.',
    'The premium customer base, which skews toward higher-income consumers and larger businesses, produces average spending per card well above the industry average, supports premium annual card fees, and delivers lower credit losses than mass-market card issuers, which is why AXP can sustain a spend-centric model even as it grows its lending book.',
    'Net interest income has grown from 17% of total revenue in FY17 to 24% in FY25, driven by expansion of the card member lending portfolio and higher interest rates, which provides a second growth engine alongside the traditional fee-based discount revenue model and makes revenue less dependent on any single source.',
  ],
};

export default financials;
