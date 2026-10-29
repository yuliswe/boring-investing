import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const taxReleaseNotes: Record<string, string> = {
  FY19: 'Includes a $0.56B tax benefit, mostly from releasing the valuation allowance on foreign deferred tax assets.',
  FY23: 'Includes a $0.72B tax benefit, mostly from releasing the valuation allowance on US deferred tax assets.',
};

const peNotes: Record<string, string> = {
  FY17: 'Not meaningful: ServiceNow reported a net loss.',
  FY18: 'Not meaningful: ServiceNow reported a net loss.',
  FY20: 'Not meaningful: GAAP EPS of $0.12 gives a P/E above 900.',
  FY21: 'Not meaningful: GAAP EPS of $0.23 gives a P/E above 500.',
};

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'ServiceNow',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 4.576,
        forward: 5.515,
      },
    ],
    startNote: 'FY26E free cash flow from GAAP guidance',
    forwardNote:
      'GAAP operating cash flow of 37% and capital expenditures of 3% of revenue (Q3 2026 guidance), applied to consensus FY26E revenue of $16.22B.',
    sharesOutstanding: 1.0379,
    netCash: -0.563,
    netCashSource:
      '$6.96B of cash and marketable securities minus $7.52B of short- and long-term debt, Q3 2026 10-Q',
    sharesSource: 'Q3 2026 10-Q balance sheet, 30 September 2026',
  },
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Fiscal year-end price divided by GAAP diluted EPS.',
      values: [null, null, 88.8, null, null, 242.7, 84.1, 154.8, 91.7, 79.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 91.7,
      guidanceCount: 1,
      yearNotes: {
        ...peNotes,
        ...taxReleaseNotes,
        FY26E:
          'Calculated from the default price of $112.95 divided by estimated GAAP diluted EPS of $1.43.',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [45.3, 54.0, 57.3, 81.5, 73.3, 36.4, 53.7, 64.7, 35.0, 21.3],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 54.0,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from the default price of $112.95 divided by estimated free cash flow per share of $5.30.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted EPS, adjusted for the five-for-one stock split of December 2025.',
      values: [-0.14, -0.03, 0.64, 0.12, 0.23, 0.32, 1.68, 1.37, 1.67, 1.43],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.32,
      guidanceCount: 1,
      yearNotes: {
        ...taxReleaseNotes,
        FY26E:
          'Consensus GAAP net income of $1.49B (45 analysts, stockanalysis.com) divided by guided diluted shares of 1.04B.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [0.58, 0.66, 0.98, 1.35, 1.77, 2.14, 2.63, 3.28, 4.37, 5.3],
      format: { prefix: '$', decimals: 2 },
      median10y: 1.77,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Estimated free cash flow of $5.52B divided by guided diluted shares of 1.04B.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income divided by average shareholders’ equity.',
      values: [-17.7, -2.83, 38.72, 4.8, 7.05, 7.45, 27.35, 16.53, 15.49],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 7.45,
      yearNotes: taxReleaseNotes,
    },
    {
      label: 'ROIC %',
      desc: 'Operating income taxed at 21%, divided by year-end debt plus shareholders’ equity.',
      values: [-2.61, -1.89, 1.18, 3.51, 3.85, 4.3, 6.6, 9.71, 9.97],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 3.85,
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Year-end convertible and senior notes divided by shareholders’ equity. Operating leases are excluded.',
      values: [1.51, 0.6, 0.33, 0.58, 0.43, 0.3, 0.2, 0.15, 0.12],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.33,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the retention ratio. ServiceNow pays no dividend, so this equals ROE.',
      values: [-17.7, -2.83, 38.72, 4.8, 7.05, 7.45, 27.35, 16.53, 15.49],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 7.45,
      yearNotes: taxReleaseNotes,
    },
    {
      label: 'Net margin %',
      values: [-6.09, -1.02, 18.11, 2.63, 3.9, 4.49, 19.3, 12.97, 13.16, 9.19],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 4.49,
      guidanceCount: 1,
      yearNotes: {
        ...taxReleaseNotes,
        FY26E:
          'Consensus GAAP net income of $1.49B divided by consensus revenue of $16.22B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [
        25.67, 22.49, 28.06, 30.25, 30.51, 29.99, 30.14, 31.09, 34.46, 34.0,
      ],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 30.14,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'GAAP guidance of operating cash flow at 37% of revenue less capital expenditures at 3%. Management’s non-GAAP margin of 36% also adds back acquisition costs.',
      },
    },
  ],
  revenueSection: {
    operatingIncomeDesc:
      'GAAP income from operations. FY26E is the guided 10% GAAP operating margin applied to consensus revenue; the margin falls from 13.7% in FY25 because of amortization and integration costs from the Armis, Veza and Moveworks acquisitions.',
    netIncomeDesc:
      'GAAP net income. FY19 and FY23 are inflated by one-time tax benefits from releasing valuation allowances on deferred tax assets.',
  },
  revenue: [
    {
      year: 'FY17',
      revenue: 1.919,
      operatingIncome: -0.064,
      netIncome: -0.117,
    },
    {
      year: 'FY18',
      revenue: 2.609,
      operatingIncome: -0.042,
      netIncome: -0.027,
    },
    { year: 'FY19', revenue: 3.46, operatingIncome: 0.042, netIncome: 0.627 },
    { year: 'FY20', revenue: 4.519, operatingIncome: 0.199, netIncome: 0.119 },
    { year: 'FY21', revenue: 5.896, operatingIncome: 0.257, netIncome: 0.23 },
    { year: 'FY22', revenue: 7.245, operatingIncome: 0.355, netIncome: 0.325 },
    { year: 'FY23', revenue: 8.971, operatingIncome: 0.762, netIncome: 1.731 },
    { year: 'FY24', revenue: 10.984, operatingIncome: 1.364, netIncome: 1.425 },
    { year: 'FY25', revenue: 13.278, operatingIncome: 1.824, netIncome: 1.748 },
    { year: 'FY26E', revenue: 16.22, operatingIncome: 1.622, netIncome: 1.49 },
  ],
  thesis: [
    'The Now Platform sits underneath IT, HR and customer service workflows at large enterprises, with a renewal rate of 98% in each of FY20 to FY25 and subscriptions making up 97% of revenue, so the revenue base is contractual and highly predictable.',
    'Free cash flow margins have widened from 26% in FY17 to 34% in FY25, but stock-based compensation of about 15% of revenue means GAAP earnings and per-share returns lag the cash flow by a wide margin.',
    'In 2026 ServiceNow spent $9.2B in cash on acquisitions, mainly Armis for $7.6B and Veza for $1.2B, and moved from net cash to net debt, so the next few years test whether security and AI acquisitions earn their cost.',
  ],
};

export default financials;

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
  1.919, 2.609, 3.46, 4.519, 5.896, 7.245, 8.971, 10.984, 13.278,
];

export const totalExpenses = {
  label: 'Total expenses',
  desc: 'Revenue minus net income, covering operating expenses, non-operating items and income taxes.',
  values: [2.035, 2.635, 2.834, 4.4, 5.666, 6.92, 7.24, 9.559, 11.53],
};

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Cost of revenues plus sales and marketing, research and development, and general and administrative expenses. Stock-based compensation is included in each line.',
    values: [1.983, 2.651, 3.418, 4.32, 5.639, 6.89, 8.209, 9.62, 11.454],
  },
  {
    label: 'Cost of revenues',
    desc: 'Cost of subscription and professional services revenue, mostly data center, hosting and support staff costs.',
    values: [0.5, 0.623, 0.797, 0.987, 1.353, 1.573, 1.921, 2.287, 2.983],
    indent: 1,
  },
  {
    label: 'Sales and marketing',
    desc: 'Sales and marketing staff costs, amortization of deferred commissions, and marketing programs.',
    values: [0.895, 1.203, 1.534, 1.855, 2.292, 2.814, 3.301, 3.854, 4.388],
    indent: 1,
  },
  {
    label: 'Research and development',
    desc: 'Engineering and product development staff costs. ServiceNow expenses rather than capitalizes most of this spending.',
    values: [0.378, 0.53, 0.748, 1.024, 1.397, 1.768, 2.124, 2.543, 2.96],
    indent: 1,
  },
  {
    label: 'General and administrative',
    desc: 'Executive, finance, legal, HR and facilities costs, including amortization of some acquired intangibles.',
    values: [0.211, 0.296, 0.339, 0.454, 0.597, 0.735, 0.863, 0.936, 1.123],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'The net of items between income from operations and pre-tax income. Negative values mean interest income exceeded interest expense and other costs.',
    values: [
      0.049, -0.003, -0.025, 0.049, 0.008, -0.044, -0.246, -0.374, -0.437,
    ],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on the convertible notes and, from FY20, the 1.40% 2030 senior notes. Through FY19 this was mostly non-cash amortization of the convertible note discount. From FY23 ServiceNow folds it into other expense, net.',
    values: [0.053, 0.053, 0.033, 0.033, 0.028, 0.027, null, null, null],
    indent: 1,
  },
  {
    label: 'Interest and other income',
    desc: 'Interest income on cash and marketable securities, net of foreign exchange and other items, shown as a negative expense. From FY23 this line includes interest expense.',
    values: [
      -0.004, -0.056, -0.058, 0.016, -0.02, -0.071, -0.246, -0.374, -0.437,
    ],
    indent: 1,
  },
  {
    label: 'Tax expense',
    desc: 'Provision for income taxes. FY19 and FY23 are negative because ServiceNow released valuation allowances on deferred tax assets once profits made them usable.',
    values: [0.003, -0.012, -0.56, 0.031, 0.019, 0.074, -0.723, 0.313, 0.513],
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
  'FY26E',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash, cash equivalents and restricted cash for the year, including the effect of exchange rates.',
    values: [
      0.326,
      -0.159,
      0.209,
      0.901,
      0.053,
      -0.257,
      0.429,
      0.406,
      1.422,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. FY26E is the guided 37% of consensus revenue.',
    values: [
      0.643, 0.811, 1.236, 1.786, 2.191, 2.723, 3.398, 4.267, 5.444, 6.001,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus non-cash charges (stock-based compensation, depreciation and amortization, amortization of deferred commissions, deferred taxes and other items) before working capital changes.',
    values: [
      0.537,
      0.67,
      1.158,
      1.506,
      2.133,
      2.549,
      3.499,
      4.332,
      5.415,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Changes in receivables, deferred commissions, prepaid expenses, payables, accrued liabilities and deferred revenue. Growth in deferred revenue, which customers pay upfront, is the main source of cash.',
    values: [
      0.106,
      0.141,
      0.078,
      0.28,
      0.058,
      0.174,
      -0.101,
      -0.065,
      0.029,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities.',
    values: [
      -0.884,
      -0.347,
      -0.725,
      -1.507,
      -1.607,
      -2.583,
      -2.167,
      -2.501,
      -1.689,
      null,
    ],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Business combinations, net of cash acquired. FY25 includes Moveworks (closed December 2025) and Logik.io. The 2026 Armis and Veza deals will add about $9B to FY26.',
    values: [
      -0.058,
      -0.037,
      -0.007,
      -0.107,
      -0.785,
      -0.091,
      -0.279,
      -0.113,
      -1.084,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Purchases of marketable securities net of sales and maturities.',
    values: [
      -0.669,
      -0.061,
      -0.403,
      -0.957,
      -0.366,
      -1.793,
      -1.112,
      -1.279,
      1.324,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment, mostly data center servers. FY26E is the guided 3% of consensus revenue.',
    values: [
      -0.151, -0.224, -0.265, -0.419, -0.392, -0.55, -0.694, -0.852, -0.868,
      -0.487,
    ],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Purchases of strategic (non-marketable) investments and other intangibles, plus other items. FY25 includes $1.06B of strategic investments.',
    values: [
      -0.007,
      -0.024,
      -0.049,
      -0.024,
      -0.064,
      -0.149,
      -0.082,
      -0.257,
      -1.061,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities.',
    values: [
      0.539,
      -0.607,
      -0.302,
      0.597,
      -0.506,
      -0.344,
      -0.803,
      -1.343,
      -2.34,
      null,
    ],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Proceeds from employee stock plans, less taxes paid on net share settlement of equity awards and share repurchases. Buybacks began in FY23.',
    values: [
      -0.154,
      -0.177,
      -0.302,
      -0.363,
      -0.445,
      -0.25,
      -0.803,
      -1.159,
      -2.34,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Convertible note issuance in FY17, repayment of the 2018 convertible notes in FY18, and the $1.5B 2030 senior notes in FY20, offset by repayment of the 2022 convertible notes in FY20 to FY22.',
    values: [0.772, -0.43, 0, -0.146, -0.061, -0.094, 0, 0, 0, null],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'ServiceNow does not pay a dividend.',
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Other financing cash flow items',
    desc: 'Convertible note hedges and warrants in FY17, the $1.1B unwind of the 2022 note hedge in FY20, and a business combination payment in FY24.',
    values: [-0.079, -0.001, 0, 1.106, 0, 0, 0, -0.184, 0, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. ServiceNow’s own non-GAAP measure also adds back acquisition-related costs.',
    values: [
      0.492, 0.587, 0.971, 1.367, 1.799, 2.173, 2.704, 3.415, 4.576, 5.515,
    ],
  },
];
