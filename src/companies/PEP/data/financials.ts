import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [
        23.8, 35.1, 12.5, 26.1, 28.9, 31.5, 28.0, 25.8, 21.8, 23.8, 15.0,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 26.0,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'TCJA transition tax charge of $2.5B depressed EPS to $3.38, inflating the P/E ratio.',
        FY18: 'Net tax benefit of $3.4B from international reorganizations inflated EPS to $8.78, depressing the P/E ratio.',
        FY26E:
          'Calculated from $128.63 divided by consensus core diluted EPS of $8.56 (stockanalysis.com).',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [
        19.8, 24.1, 25.5, 35.3, 32.3, 34.4, 44.4, 29.5, 29.0, 25.6, 16.7,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 29.3,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from $128.63 divided by consensus free cash flow per share of $7.69 (stockanalysis.com).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [4.36, 3.38, 8.78, 5.2, 5.12, 5.49, 6.42, 6.56, 6.95, 6.0, 8.56],
      format: { prefix: '$', decimals: 2 },
      median10y: 5.75,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by a $2.5B TCJA transition tax charge.',
        FY18: 'Inflated by a $3.4B net tax benefit from international reorganizations.',
        FY26E: 'Consensus core analyst estimate (stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [5.26, 4.91, 4.3, 3.85, 4.58, 5.03, 4.04, 5.73, 5.22, 5.59, 7.69],
      format: { prefix: '$', decimals: 2 },
      median10y: 4.97,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus free cash flow of $10.53B and estimated shares of ~1,370M (stockanalysis.com).',
      },
    },
    {
      label: 'Gross margin',
      values: [55.1, 54.7, 54.6, 55.1, 54.8, 53.4, 53.0, 54.2, 54.6, 54.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 54.6,
    },
    {
      label: 'Operating margin',
      values: [15.6, 16.2, 15.6, 15.3, 14.3, 14.0, 13.3, 13.1, 14.0, 12.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 14.2,
      yearNotes: {
        FY25: 'Depressed by approximately $2.0B in impairment and restructuring charges.',
      },
    },
    {
      label: 'Net margin',
      values: [10.1, 7.6, 19.4, 10.9, 10.1, 9.6, 10.3, 9.9, 10.4, 8.8, 11.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 10.1,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'Inflated by a $3.4B net tax benefit.',
        FY26E:
          'Derived from consensus net income of $10.96B and consensus revenue of $98.94B (stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow margin',
      values: [12.2, 11.1, 9.5, 8.1, 9.1, 8.8, 6.5, 8.7, 7.8, 8.2, 10.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 8.8,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus free cash flow of $10.53B and consensus revenue of $98.94B (stockanalysis.com).',
      },
    },
  ],
  revenue: [
    { year: 'FY16', revenue: 62.8, operatingIncome: 9.79 },
    { year: 'FY17', revenue: 63.53, operatingIncome: 10.28 },
    { year: 'FY18', revenue: 64.66, operatingIncome: 10.11 },
    { year: 'FY19', revenue: 67.16, operatingIncome: 10.29 },
    { year: 'FY20', revenue: 70.37, operatingIncome: 10.08 },
    { year: 'FY21', revenue: 79.47, operatingIncome: 11.16 },
    { year: 'FY22', revenue: 86.39, operatingIncome: 11.51 },
    { year: 'FY23', revenue: 91.47, operatingIncome: 11.99 },
    { year: 'FY24', revenue: 91.85, operatingIncome: 12.89 },
    { year: 'FY25', revenue: 93.93, operatingIncome: 11.5 },
    { year: 'FY26E', revenue: 98.94, operatingIncome: 15.89 },
  ],
  thesis: [
    "PepsiCo operates complementary snack and beverage businesses that share distribution infrastructure and shelf space, which gives it pricing power and cost efficiencies that a single-category competitor cannot replicate, and the combination of Frito-Lay's high-margin snack portfolio with the beverage business's volume stability produces consolidated operating cash flow above $12B annually.",
    "More than half of PepsiCo's revenue comes from snack foods (Frito-Lay, Quaker), where the company holds dominant market share in North America, and snack categories have historically exhibited stronger volume growth and wider operating margins than carbonated soft drinks, so the business mix tilts toward the more durable growth driver.",
    'PepsiCo has raised its annual dividend for more than fifty consecutive years and returns substantially all free cash flow to shareholders through dividends and buybacks, funded by a capital-light distribution model that converts roughly $8 of every $100 in revenue into free cash flow after reinvestment.',
  ],
};

export default financials;

export const expenseYears = [
  'FY16',
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
  62.8, 63.53, 64.66, 67.16, 70.37, 79.47, 86.39, 91.47, 91.85, 93.93,
];

export const expenseLines = [
  {
    label: 'Cost of sales',
    desc: 'Raw materials, manufacturing, distribution, and procurement costs for both food and beverage products.',
    values: [
      28.21, 28.8, 29.38, 30.13, 31.8, 37.08, 40.58, 41.88, 41.74, 43.07,
    ],
  },
  {
    label: 'Selling, general & administrative',
    desc: 'Advertising, marketing, selling, distribution, R&D, and corporate overhead expenses.',
    values: [
      24.81, 24.45, 25.17, 26.74, 28.5, 31.24, 34.46, 36.68, 37.19, 37.37,
    ],
  },
  {
    label: 'Other operating charges',
    desc: 'Impairment, restructuring, and other operating charges not classified as cost of sales or SG&A. FY25 includes approximately $2.0B in impairment and restructuring charges.',
    values: [0, 0, 0, 0, 0, 0, -0.16, 0.93, 0.03, 1.99],
  },
  {
    label: 'Non-operating expenses',
    desc: 'Net interest expense, other non-operating income and expense, and noncontrolling interests.',
    values: [1.28, 0.73, 0.97, 1.02, 1.07, 1.4, 0.88, 0.65, 0.99, 1.31],
  },
  {
    label: 'Income taxes',
    desc: 'Income tax provision. FY17 includes a $2.5B TCJA transition tax charge. FY18 includes a $3.4B net tax benefit from international reorganizations.',
    values: [2.17, 4.69, -3.37, 1.96, 1.89, 2.14, 1.73, 2.26, 2.32, 1.95],
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
    desc: 'Net change in cash and equivalents for the year, including the effect of exchange rate changes on cash held in foreign currencies.',
    values: [1.49, 0.11, -5.2, 2.68, -2.55, -0.61, 4.66, -1.21, 0.65, null],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges and working capital changes.',
    values: [10.03, 9.42, 9.65, 10.61, 11.62, 10.81, 13.44, 12.51, 12.09, null],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus depreciation, amortization, and stock-based compensation.',
    values: [7.52, 15.17, 9.98, 9.93, 10.63, 12.02, 12.4, 13.1, 11.98, null],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Operating cash flow minus funds from operations, capturing deferred taxes, non-cash gains and losses, and changes in operating assets and liabilities.',
    values: [2.51, -5.75, -0.33, 0.68, 0.99, -1.21, 1.04, -0.59, 0.11, null],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including capital expenditures, acquisitions, and asset disposals.',
    values: [-4.4, 4.56, -6.44, -11.62, -3.27, -2.43, -5.5, -5.47, -6.88, null],
  },
  {
    label: 'Capital expenditures',
    desc: 'Cash spent on property, plant, and equipment (SEC EDGAR 8-K exhibit 99.1).',
    values: [
      -2.97,
      -3.28,
      -4.23,
      -4.24,
      -4.63,
      -5.21,
      -5.52,
      -5.32,
      -4.42,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions & other',
    desc: 'Net cash used for acquisitions, asset disposals, investments, and other investing activities. FY18 was positive due to large proceeds from asset sales and bottling operations. FY20 includes the $3.9B Rockstar Energy and $1.7B Pioneer Foods acquisitions.',
    values: [-1.43, 7.85, -2.21, -7.38, 1.36, 2.78, 0.02, -0.15, -2.46, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities, including dividends, share repurchases, and net debt issuance and repayment.',
    values: [
      -4.19,
      -13.77,
      -8.49,
      3.82,
      -10.78,
      -8.52,
      -3.01,
      -7.56,
      -4.98,
      null,
    ],
  },
  {
    label: 'Dividends paid',
    desc: 'Cash dividends paid to common shareholders. PepsiCo has raised its dividend for more than fifty consecutive years.',
    values: [
      -4.47,
      -4.93,
      -5.3,
      -5.51,
      -5.82,
      -6.17,
      -6.68,
      -7.23,
      -7.64,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Share repurchases',
    desc: 'Cash used for common stock repurchase programs (SEC EDGAR 8-K exhibit 99.1).',
    values: [-2.0, -2.0, -3.0, -2.0, -0.11, -1.5, -1.0, -1.0, -1.0, null],
    indent: 1,
  },
  {
    label: 'Net debt & other',
    desc: 'Net proceeds from (repayment of) debt and other financing activities, computed as the financing residual so that all three sub-lines sum exactly to the parent.',
    values: [2.29, -6.84, -0.19, 11.33, -4.86, -0.85, 4.67, 0.67, 3.66, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures.',
    values: [7.06, 6.13, 5.42, 6.37, 6.99, 5.6, 7.92, 7.19, 7.67, 10.53],
  },
];
