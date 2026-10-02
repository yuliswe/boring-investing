import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  currency: 'CA$',
  guidanceYears: ['FY27E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [25.6, 24.5, 27.3, 176.4, 36.2, 25.7, 51.1, 37.4, 37.7, 25.7],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 36.2,
      guidanceCount: 1,
      yearNotes: {
        FY21: 'Boutique closures during the COVID-19 pandemic cut diluted EPS to CA$0.17, so the ratio is not meaningful for this year.',
        FY24: 'Diluted EPS fell to CA$0.69 as gross margin dropped 310 bp on normalized markdowns, product-cost inflation and pre-opening lease costs.',
        FY27E:
          'Calculated from CA$120.72 divided by consensus diluted EPS of CA$4.69 (MarketScreener).',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [36.9, 56.6, 14.3, 45.4, 21.1, null, 22.1, 43.6, 26.8, 22.6],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 31.9,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'From FY20 onward IFRS 16 moves lease principal payments out of operating cash flow and into financing, which lifts free cash flow by roughly CA$50–100M a year.',
        FY23: 'Free cash flow was negative (CA$-0.05B) as inventory rose by CA$260M, so the ratio is not meaningful.',
        FY27E:
          'Calculated from CA$120.72 divided by consensus free cash flow per share of CA$5.34 (MarketScreener consensus free cash flow of CA$637.7M over 119.5M diluted shares).',
      },
    },
  ],
  operationalMetrics: [
    {
      label: 'Comparable sales growth',
      values: [6.6, 9.8, 7.6, null, null, 28.2, -1.0, 11.0, 26.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 9.8,
      yearNotes: {
        FY21: 'Not reported, because pandemic boutique closures made the comparable base meaningless.',
        FY22: 'Not reported, because pandemic boutique closures made the comparable base meaningless.',
      },
    },
    {
      label: 'Boutique count',
      values: [85, 91, 96, 101, 106, 114, 119, 130, 144],
      format: { decimals: 0 },
      median10y: 106,
      yearNotes: {
        FY23: 'Excludes the four Reigning Champ boutiques acquired with CYC Design Corporation.',
      },
    },
    {
      label: 'Gross margin',
      values: [39.8, 39.2, 41.1, 36.5, 43.8, 41.6, 38.5, 43.1, 44.9, 46.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 41.1,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Management guidance midpoint of a 175–225 bp increase over FY26 (Q1 FY27 release, 9 July 2026).',
      },
    },
    {
      label: 'Inventory turnover',
      values: [5.9, 5.6, 5.6, 4.1, 4.4, 3.8, 3.5, 4.3, 4.7],
      format: { suffix: '×', decimals: 1 },
      median10y: 4.4,
      yearNotes: {
        FY23: 'Inventory more than doubled to CA$468M at year end, and the company cut it by 27% during FY24.',
      },
    },
    {
      label: 'U.S. share of revenue',
      values: [26.2, 30.3, 34.4, 34.0, 45.2, 51.1, 52.6, 57.8, 61.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 45.2,
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [0.49, 0.67, 0.81, 0.17, 1.36, 1.63, 0.69, 1.78, 3.2, 4.69],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 0.81,
      guidanceCount: 1,
      yearNotes: {
        FY27E: 'Consensus analyst estimate (MarketScreener).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [0.34, 0.29, 1.55, 0.66, 2.34, -0.44, 1.6, 1.53, 4.5, 5.34],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 1.53,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Consensus free cash flow of CA$637.7M (MarketScreener) over 119.5M diluted shares.',
      },
    },
    {
      label: 'ROE %',
      values: [23.4, 23.9, 25.7, 5.6, 35.2, 30.8, 10.6, 21.8, 31.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 23.9,
    },
    {
      label: 'Operating margin',
      values: [12.7, 13.3, 15.5, 6.0, 15.8, 13.1, 6.8, 10.8, 14.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 13.1,
    },
    {
      label: 'Net margin',
      values: [7.7, 9.0, 9.2, 2.2, 10.5, 8.5, 3.4, 7.6, 10.3, 11.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 8.5,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus net income of CA$562.2M and consensus revenue of CA$4.71B (MarketScreener).',
      },
    },
    {
      label: 'Free cash flow margin',
      values: [5.3, 3.9, 17.8, 8.7, 18.2, -2.3, 7.8, 6.5, 14.5, 13.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 7.8,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'From FY20 onward IFRS 16 moves lease principal payments into financing, which lifts free cash flow.',
        FY27E:
          'Derived from consensus free cash flow of CA$637.7M and consensus revenue of CA$4.71B (MarketScreener).',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Net revenue, income from operations and net income in billions of Canadian dollars, with year-on-year growth rates.',
    revenueDesc:
      'Consolidated net revenue from boutiques and digital in Canada and the United States.',
    operatingIncomeDesc:
      'Income from operations under IFRS, after cost of goods sold, SG&A and stock-based compensation. No forward estimate on a comparable basis is available.',
    netIncomeDesc:
      'Net income under IFRS. FY27E is the consensus analyst estimate (MarketScreener).',
    chartNote:
      'FY21 revenue fell as boutiques closed during the pandemic. FY24 operating income nearly halved as gross margin fell on normalized markdowns, product-cost inflation and pre-opening lease costs. FY27E revenue is the midpoint of management guidance of CA$4.55–4.75B (9 July 2026).',
  },
  revenue: [
    { year: 'FY18', revenue: 0.743, operatingIncome: 0.094, netIncome: 0.057 },
    { year: 'FY19', revenue: 0.874, operatingIncome: 0.116, netIncome: 0.079 },
    { year: 'FY20', revenue: 0.981, operatingIncome: 0.152, netIncome: 0.091 },
    { year: 'FY21', revenue: 0.857, operatingIncome: 0.051, netIncome: 0.019 },
    { year: 'FY22', revenue: 1.495, operatingIncome: 0.236, netIncome: 0.157 },
    { year: 'FY23', revenue: 2.196, operatingIncome: 0.287, netIncome: 0.188 },
    { year: 'FY24', revenue: 2.332, operatingIncome: 0.158, netIncome: 0.079 },
    { year: 'FY25', revenue: 2.738, operatingIncome: 0.295, netIncome: 0.208 },
    { year: 'FY26', revenue: 3.702, operatingIncome: 0.524, netIncome: 0.382 },
    { year: 'FY27E', revenue: 4.65, operatingIncome: null, netIncome: 0.562 },
  ],
  thesis: [
    'Aritzia designs and sells its own exclusive brands only through its own boutiques and website, so it captures the full retail margin and controls pricing, which has let gross margin recover from 38.5% in FY24 to 44.9% in FY26.',
    'The United States has grown from a quarter of revenue in FY18 to more than 60% in FY26, and with eleven to twelve of the twelve to thirteen new boutiques planned for FY27 opening there, the U.S. store base still has a long expansion runway.',
    'The business carries no bank debt and funds its boutique expansion from operating cash flow while still buying back shares, although free cash flow swings with inventory, as the negative FY23 showed.',
  ],
};

export default financials;

export const expenseYears = [
  'FY18',
  'FY19',
  'FY20',
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
  'FY26',
];

export const revenueByYear = [
  0.743267, 0.874296, 0.980589, 0.857323, 1.49463, 2.19563, 2.33235, 2.738112,
  3.702148,
];

export const netIncomeByYear = [
  0.057093, 0.078728, 0.090594, 0.019227, 0.156917, 0.187588, 0.07878, 0.20779,
  0.381848,
];

export type ExpenseLine = {
  label: string;
  desc: string;
  values: number[];
  indent?: number;
};

export const expenseLines: ExpenseLine[] = [
  {
    label: 'Operating expenses',
    desc: 'Cost of goods sold, selling, general and administrative expense, and stock-based compensation, which together bridge net revenue to income from operations.',
    values: [
      0.648873, 0.75822, 0.828317, 0.806235, 1.258611, 1.908476, 2.173936,
      2.443322, 3.178094,
    ],
  },
  {
    label: 'Cost of goods sold',
    desc: 'Product, freight and duty costs plus boutique occupancy and distribution-centre costs, including depreciation of boutique right-of-use assets from FY20 onward.',
    values: [
      0.447776, 0.531383, 0.577165, 0.544818, 0.839678, 1.281638, 1.433369,
      1.557493, 2.040815,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative',
    desc: 'Boutique and head-office wages, marketing, digital fulfilment, technology and other overhead.',
    values: [
      0.183857, 0.215297, 0.243362, 0.250726, 0.392802, 0.602469, 0.708783,
      0.837456, 1.07557,
    ],
    indent: 1,
  },
  {
    label: 'Stock-based compensation expense',
    desc: 'Equity-settled stock option and share-unit expense, reported on its own line below SG&A.',
    values: [
      0.01724, 0.01154, 0.00779, 0.010691, 0.026131, 0.024369, 0.031784,
      0.048373, 0.061709,
    ],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Finance expense net of other income, reported between income from operations and income before income taxes.',
    values: [
      0.007111, 0.004426, 0.026134, 0.024886, 0.016419, 0.023347, 0.043804,
      0.004337, 0.007296,
    ],
  },
  {
    label: 'Finance expense',
    desc: 'Interest on bank debt and, from FY20 onward under IFRS 16, interest on lease liabilities, which is why the line jumps in FY20.',
    values: [
      0.005221, 0.004821, 0.028319, 0.02842, 0.025202, 0.031263, 0.049091,
      0.0488, 0.056764,
    ],
    indent: 1,
  },
  {
    label: 'Other expense (income)',
    desc: 'Foreign exchange, fair-value changes on equity derivative contracts that hedge share-unit liabilities, CYC acquisition fair-value adjustments, and interest income on cash. Negative values are net income.',
    values: [
      0.00189, -0.000395, -0.002185, -0.003534, -0.008783, -0.007916, -0.005287,
      -0.044463, -0.049468,
    ],
    indent: 1,
  },
  {
    label: 'Income tax expense',
    desc: 'Current and deferred income tax expense as reported on the statement of operations.',
    values: [
      0.03019, 0.032922, 0.035544, 0.006975, 0.062683, 0.076219, 0.03583,
      0.082663, 0.13491,
    ],
  },
];

export const cashFlowStatementYears = [
  'FY18',
  'FY19',
  'FY20',
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
  'FY26',
  'FY27E',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash and cash equivalents for the year, including the effect of exchange rate changes.',
    values: [
      0.033,
      -0.012,
      0.017,
      0.031,
      0.116,
      -0.179,
      0.077,
      0.122,
      0.306,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash generated from operating activities, after interest and income taxes paid. From FY20 onward IFRS 16 excludes lease principal payments, which appear under financing instead.',
    values: [
      0.105,
      0.096,
      0.222,
      0.126,
      0.338,
      0.075,
      0.359,
      0.456,
      0.823,
      null,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Operating cash flow before the net change in non-cash working capital.',
    values: [
      0.092,
      0.136,
      0.203,
      0.122,
      0.32,
      0.304,
      0.262,
      0.451,
      0.634,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net change in non-cash working capital, chiefly inventory, payables and accrued liabilities. The FY23 outflow reflects the inventory build and the FY24 inflow its reduction.',
    values: [
      0.013,
      -0.04,
      0.019,
      0.004,
      0.019,
      -0.229,
      0.097,
      0.004,
      0.189,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, almost entirely new and repositioned boutiques, distribution centres and technology.',
    values: [
      -0.066,
      -0.062,
      -0.048,
      -0.051,
      -0.1,
      -0.131,
      -0.183,
      -0.277,
      -0.285,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment plus purchases of intangible assets. FY27E is management guidance of approximately CA$250M.',
    values: [
      -0.066, -0.062, -0.048, -0.051, -0.067, -0.126, -0.177, -0.277, -0.285,
      -0.25,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions',
    desc: 'FY22 is the purchase of 75% of CYC Design Corporation (Reigning Champ), net of cash acquired; FY23 and FY24 are contingent-consideration payouts for the same deal.',
    values: [0, 0, 0, 0, -0.033, -0.006, -0.006, 0, 0, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: lease payments, share repurchases, debt repayment and option exercises.',
    values: [
      -0.006,
      -0.046,
      -0.157,
      -0.041,
      -0.124,
      -0.123,
      -0.099,
      -0.06,
      -0.227,
      null,
    ],
  },
  {
    label: 'Share repurchases',
    desc: 'Shares repurchased for cancellation under normal course issuer bids. FY26 also includes CA$62M of shares bought and held in trust for share-unit plans.',
    values: [
      0,
      -0.009,
      -0.108,
      -0.001,
      -0.008,
      -0.061,
      -0.03,
      -0.006,
      -0.207,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Lease payments',
    desc: 'Repayment of lease principal net of lease incentives received. Before FY20 operating leases were expensed through operating cash flow, so this line is near zero.',
    values: [
      -0.001,
      0,
      -0.061,
      -0.043,
      -0.052,
      -0.073,
      -0.089,
      -0.1,
      -0.054,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Debt, options and other',
    desc: 'Term-loan repayments (the last CA$75M was repaid in FY22), proceeds from stock options exercised, and financing fees, computed as the financing residual so the sub-lines sum to the parent.',
    values: [
      -0.005,
      -0.036,
      0.012,
      0.003,
      -0.064,
      0.011,
      0.02,
      0.045,
      0.034,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY27E is the consensus estimate from MarketScreener.',
    values: [
      0.039, 0.034, 0.174, 0.075, 0.271, -0.051, 0.182, 0.179, 0.538, 0.638,
    ],
  },
];
