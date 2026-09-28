import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

export const cashFlowStatementYears = [
  'CY16',
  'CY17',
  'CY18',
  'CY19',
  'CY20',
  'CY21',
  'CY22',
  'CY23',
  'CY24',
  'CY25',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash, cash equivalents, and restricted cash for the calendar year.',
    values: [
      -3.631, -2.203, 5.986, 1.797, 7.967, -5.52, 0.934, 2.169, -0.582, 7.242,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges and working capital changes.',
    values: [
      36.036, 37.091, 47.971, 54.52, 65.124, 91.652, 91.495, 101.746, 125.299,
      164.713,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus non-cash adjustments: depreciation and impairment of property and equipment, amortization of intangible assets, stock-based compensation, deferred income taxes, gains and losses on debt and equity securities, and other non-cash items.',
    values: [
      32.736, 27.845, 43.063, 53.701, 63.297, 93.175, 93.73, 105.591, 133.705,
      164.095,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net changes in operating assets and liabilities: accounts receivable, income taxes, other assets, accounts payable, accrued expenses, accrued revenue share, and deferred revenue, net of effects of acquisitions.',
    values: [
      3.3, 9.246, 4.908, 0.819, 1.827, -1.523, -2.235, -3.845, -8.406, 0.618,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including capital expenditures, acquisitions, and purchases and maturities of marketable securities.',
    values: [
      -31.165, -31.401, -28.504, -29.491, -32.773, -35.523, -20.298, -27.063,
      -45.536, -120.291,
    ],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Acquisitions, net of cash acquired, and purchases of intangible assets. CY22 includes the $5.4B Mandiant acquisition.',
    values: [
      -0.986, -0.287, -1.491, -2.515, -0.738, -2.618, -6.969, -0.495, -2.931,
      -1.592,
    ],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Net of purchases, maturities, and sales of marketable and non-marketable securities. Large gross flows (over $100B annually in marketable securities alone) net to modest amounts because Alphabet continually rolls its treasury portfolio.',
    values: [
      -18.229, -19.448, -1.972, -4.017, -9.822, -8.806, 16.567, 6.734, 12.597,
      -24.882,
    ],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment, including data centers, servers, networking equipment, and office facilities. CY25 capex of $91.4B reflects a step-change in AI infrastructure investment.',
    values: [
      -10.212, -13.184, -25.139, -23.548, -22.281, -24.64, -31.485, -32.251,
      -52.535, -91.447,
    ],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Other investing activities including proceeds from collection of notes receivable, cash collateral related to securities lending, and investments in reverse repurchase agreements.',
    values: [
      -1.738, 1.518, 0.098, 0.589, 0.068, 0.541, 1.589, -1.051, -2.667, -2.37,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities, including share repurchases, dividends, and repayments of debt.',
    values: [
      -8.332, -8.298, -13.179, -23.209, -24.408, -61.362, -69.757, -72.093,
      -79.733, -37.388,
    ],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Repurchases of common stock plus net payments related to stock-based award activities (proceeds from employee stock plans minus tax withholding payments). Alphabet began large-scale buybacks in CY19 and has repurchased over $370B of stock since.',
    values: [
      -6.997, -9.012, -14.068, -23.161, -36.869, -60.436, -68.596, -71.341,
      -74.412, -59.876,
    ],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Proceeds from issuance of debt (net of costs) minus repayments. Alphabet routinely issues and retires commercial paper and long-term notes. CY25 net issuance of $32.1B reflects a large bond offering to fund AI infrastructure.',
    values: [
      -1.335, -0.086, -0.061, -0.268, 9.661, -1.236, -1.196, -0.76, 0.888,
      32.137,
    ],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Cash dividends paid on Class A, B, and C shares. Alphabet initiated its first-ever dividend in CY24 at $0.20 per share per quarter, increasing to $0.21 in CY25.',
    values: [0, 0, 0, 0, 0, 0, 0, 0, -7.363, -10.049],
    indent: 1,
  },
  {
    label: 'Other financing cash flow items',
    desc: 'Proceeds from sale of interest in consolidated entities, net, and other financing activities.',
    values: [0, 0.8, 0.95, 0.22, 2.8, 0.31, 0.035, 0.008, 1.154, 0.4],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures (property, equipment, and construction in progress).',
    values: [
      25.824, 23.907, 22.832, 30.972, 42.843, 67.012, 60.01, 69.495, 72.764,
      73.266,
    ],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['CY26E'],
  estimateNote:
    'CY26E operating lines (revenue, cost of revenue, SGA, R&D, D&A, SBC, operating income, capex) are annualized from filed H1 2026 10-Q reports. EPS, FCF per share, and FCF margin use consensus analyst estimates. Net margin and P/FCF are omitted for CY26E because $80B+ in non-operating gains inflates net income well above operating income, and the resulting P/FCF of ~490 is not a meaningful valuation metric. H1 annualization may slightly understate full-year revenue due to Q4 advertising seasonality.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [
        27.7, 58.1, 23.7, 27.2, 29.9, 25.8, 19.5, 24.3, 23.7, 29.0, 15.2,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 26.5,
      guidanceCount: 1,
      yearNotes: {
        CY26E:
          'Calculated from the default price of $313.80 divided by consensus diluted EPS of $20.62.',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [20.9, 30.8, 31.9, 30.2, 28.1, 29.3, 19.5, 25.8, 32.6, 52.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 29.8,
    },
    {
      label: 'PEG ratio',
      values: [null, null, null, null, null, 0.8, 0.51, 1.13, 0.89, 0.97, 0.17],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.89,
      guidanceCount: 1,
      yearNotes: {
        CY26E:
          'Calculated from the forward P/E of 15.2 divided by the CY25-to-CY26 EPS growth rate of 90.7%.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        1.39, 0.9, 2.19, 2.46, 2.93, 5.61, 4.56, 5.8, 8.04, 10.81, 20.62,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.75,
      guidanceCount: 1,
      yearNotes: {
        CY26E: 'Consensus analyst estimate (51 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [1.85, 1.7, 1.62, 2.21, 3.12, 4.94, 4.56, 5.46, 5.84, 5.99, 0.64],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.84,
      guidanceCount: 1,
      yearNotes: {
        CY26E:
          'Derived from consensus free cash flow of $7.78B divided by ~12.2B diluted shares. Depressed by $160B+ capex ramp for AI infrastructure.',
      },
    },
    {
      label: 'ROE %',
      values: [14.0, 8.3, 17.3, 17.0, 18.1, 30.2, 23.4, 26.0, 30.8, 31.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 20.75,
    },
    {
      label: 'ROIC %',
      values: [13.4, 7.8, 13.3, 14.4, 14.5, 24.7, 23.2, 24.5, 27.9, 23.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 18.8,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.03, 0.03, 0.02, 0.02, 0.07, 0.06, 0.06, 0.05, 0.04, 0.12],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.05,
    },
    {
      label: 'Sustainable growth rate %',
      values: [14.0, 8.3, 17.3, 17.0, 18.1, 30.2, 23.4, 26.0, 28.5, 29.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 20.75,
    },
    {
      label: 'Net margin %',
      values: [21.6, 11.5, 22.4, 21.2, 22.1, 29.5, 21.2, 24.0, 28.6, 32.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.25,
    },
    {
      label: 'Free cash flow margin %',
      values: [28.6, 21.6, 16.7, 19.1, 23.5, 26.0, 21.2, 22.6, 20.8, 18.2, 1.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 21.4,
      guidanceCount: 1,
      yearNotes: {
        CY26E:
          'Derived from consensus free cash flow of $7.78B and consensus revenue of $498.6B. Depressed by $160B+ capex ramp for AI infrastructure.',
      },
    },
  ],
  revenue: [
    { year: 'CY16', revenue: 90.3, operatingIncome: 23.7 },
    { year: 'CY17', revenue: 110.9, operatingIncome: 26.1 },
    { year: 'CY18', revenue: 136.8, operatingIncome: 27.5 },
    { year: 'CY19', revenue: 161.9, operatingIncome: 34.2 },
    { year: 'CY20', revenue: 182.5, operatingIncome: 41.2 },
    { year: 'CY21', revenue: 257.6, operatingIncome: 78.7 },
    { year: 'CY22', revenue: 282.8, operatingIncome: 74.8 },
    { year: 'CY23', revenue: 307.4, operatingIncome: 84.3 },
    { year: 'CY24', revenue: 350.0, operatingIncome: 112.4 },
    { year: 'CY25', revenue: 402.8, operatingIncome: 129.0 },
    { year: 'CY26E', revenue: 459.4, operatingIncome: 160.9 },
  ],
  expenses: [
    {
      year: 'CY16',
      costOfRevenue: 35.1,
      sellingGeneralAndAdmin: 17.5,
      researchAndDev: 13.9,
      depreciationAndAmortization: 5.0,
      otherOperating: 0,
      nonOperating: 0.5,
      taxes: 4.7,
      dilutionAdjustment: 6.7,
    },
    {
      year: 'CY17',
      costOfRevenue: 45.6,
      sellingGeneralAndAdmin: 19.8,
      researchAndDev: 16.6,
      depreciationAndAmortization: 5.0,
      otherOperating: 2.8,
      nonOperating: 1.1,
      taxes: 14.5,
      dilutionAdjustment: 7.7,
    },
    {
      year: 'CY18',
      costOfRevenue: 59.5,
      sellingGeneralAndAdmin: 23.2,
      researchAndDev: 21.4,
      depreciationAndAmortization: 7.8,
      otherOperating: 5.2,
      nonOperating: 7.4,
      taxes: 4.2,
      dilutionAdjustment: 9.4,
    },
    {
      year: 'CY19',
      costOfRevenue: 71.9,
      sellingGeneralAndAdmin: 28.1,
      researchAndDev: 26.0,
      depreciationAndAmortization: 9.6,
      otherOperating: 1.7,
      nonOperating: 5.4,
      taxes: 5.3,
      dilutionAdjustment: 10.8,
    },
    {
      year: 'CY20',
      costOfRevenue: 84.7,
      sellingGeneralAndAdmin: 29.0,
      researchAndDev: 27.6,
      depreciationAndAmortization: 11.2,
      otherOperating: 0,
      nonOperating: 6.9,
      taxes: 7.8,
      dilutionAdjustment: 13.0,
    },
    {
      year: 'CY21',
      costOfRevenue: 110.9,
      sellingGeneralAndAdmin: 36.4,
      researchAndDev: 31.6,
      depreciationAndAmortization: 10.3,
      otherOperating: 0,
      nonOperating: 12.0,
      taxes: 14.7,
      dilutionAdjustment: 15.4,
    },
    {
      year: 'CY22',
      costOfRevenue: 126.2,
      sellingGeneralAndAdmin: 42.3,
      researchAndDev: 39.5,
      depreciationAndAmortization: 13.5,
      otherOperating: 0,
      nonOperating: -3.4,
      taxes: 11.4,
      dilutionAdjustment: 19.4,
    },
    {
      year: 'CY23',
      costOfRevenue: 133.3,
      sellingGeneralAndAdmin: 44.3,
      researchAndDev: 45.4,
      depreciationAndAmortization: 11.9,
      otherOperating: 0,
      nonOperating: 1.4,
      taxes: 11.9,
      dilutionAdjustment: 22.5,
    },
    {
      year: 'CY24',
      costOfRevenue: 146.3,
      sellingGeneralAndAdmin: 42.0,
      researchAndDev: 49.3,
      depreciationAndAmortization: 15.3,
      otherOperating: 0,
      nonOperating: 7.4,
      taxes: 19.7,
      dilutionAdjustment: 22.8,
    },
    {
      year: 'CY25',
      costOfRevenue: 162.5,
      sellingGeneralAndAdmin: 50.2,
      researchAndDev: 61.1,
      depreciationAndAmortization: 21.1,
      otherOperating: 0,
      nonOperating: 29.9,
      taxes: 26.7,
      dilutionAdjustment: 25.0,
    },
    {
      year: 'CY26E',
      costOfRevenue: 174.4,
      sellingGeneralAndAdmin: 53.5,
      researchAndDev: 70.5,
      depreciationAndAmortization: 27.2,
      otherOperating: 0,
      nonOperating: null,
      taxes: null,
      dilutionAdjustment: 30.4,
    },
  ],
  expensesDeducedLines: ['Total'],
  thesis: [
    'Google Search dominates online advertising with a self-reinforcing data and AI moat that has resisted competitive challenges for two decades.',
    'Google Cloud crossed into sustained profitability and is compounding revenue as enterprises adopt its AI platform alongside traditional cloud infrastructure.',
    'YouTube is the largest video platform by watch time, monetising through advertising, Premium subscriptions, and a growing connected-TV footprint.',
  ],
};

export default financials;
