import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [
        17.7, 22.0, 19.6, 21.4, 29.8, 23.9, 28.9, 24.0, 24.4, 25.1, 18.4,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 24.0,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'FY17 income tax provision includes a $1.2B charge for the Tax Cuts and Jobs Act transition tax.',
        FY26E:
          'Calculated from $238.32 divided by consensus diluted EPS of $12.92 (32 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [
        18.6, 30.0, 26.9, 22.6, 30.7, 25.4, 32.6, 28.0, 30.1, 29.9, 23.3,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 29.0,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from $238.32 divided by consensus free cash flow per share of $10.24 (32 analysts, stockanalysis.com).',
      },
    },
  ],
  operationalMetrics: [
    {
      label: 'Systemwide restaurants',
      values: [
        36899, 37241, 37855, 38695, 39198, 40031, 40275, 41822, 43477, 45356,
      ],
      format: { decimals: 0 },
      median10y: 39615,
    },
    {
      label: 'Comp store sales growth',
      values: [3.8, 5.3, 4.5, 5.9, -7.7, 17.0, 10.9, 9.0, -0.1, 3.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 4.9,
      yearNotes: {
        FY20: 'COVID-19 pandemic closures and reduced traffic.',
        FY21: 'Recovery and easy comparisons against the FY20 pandemic trough.',
      },
    },
    {
      label: 'Franchised % of restaurants',
      values: [85, 92, 93, 93, 93, 93, 95, 95, 95, 95],
      format: { suffix: '%', decimals: 0 },
      deltaMode: 'add',
      median10y: 93,
    },
    {
      label: 'Franchise margin',
      values: [null, 82.3, 82.1, 81.1, 79.4, 82.1, 83.3, 84.0, 83.8, 84.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 82.3,
      yearNotes: {
        FY20: 'Pandemic-driven revenue decline while occupancy costs remained fixed.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        5.44, 6.37, 7.54, 7.88, 6.31, 10.04, 8.33, 11.56, 11.39, 11.95, 12.92,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 8.11,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Consensus analyst estimate (32 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [
        5.18, 4.66, 5.51, 7.46, 6.12, 9.45, 7.41, 9.91, 9.24, 10.04, 10.24,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 7.44,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus free cash flow of $7.25B and estimated shares of ~708M (stockanalysis.com).',
      },
    },
    {
      label: 'ROIC %',
      values: [null, null, 20.0, 19.2, 14.9, 17.4, 17.0, 19.7, 18.7, 20.3],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 19.0,
    },
    {
      label: 'Net margin',
      values: [
        19.0, 22.7, 28.2, 28.6, 24.6, 32.5, 26.7, 33.2, 31.7, 31.8, 32.2,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 28.4,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus net income of $9.09B and consensus revenue of $28.20B (stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow margin',
      values: [
        17.2, 16.2, 20.1, 27.1, 23.9, 30.6, 23.7, 28.5, 25.7, 26.7, 25.7,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 24.8,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus free cash flow of $7.25B and consensus revenue of $28.20B (stockanalysis.com).',
      },
    },
  ],
  revenue: [
    { year: 'FY16', revenue: 24.62, operatingIncome: 7.75 },
    { year: 'FY17', revenue: 22.82, operatingIncome: 9.55 },
    { year: 'FY18', revenue: 21.03, operatingIncome: 8.82 },
    { year: 'FY19', revenue: 21.08, operatingIncome: 9.07 },
    { year: 'FY20', revenue: 19.21, operatingIncome: 7.32 },
    { year: 'FY21', revenue: 23.22, operatingIncome: 10.36 },
    { year: 'FY22', revenue: 23.18, operatingIncome: 9.37 },
    { year: 'FY23', revenue: 25.49, operatingIncome: 11.65 },
    { year: 'FY24', revenue: 25.92, operatingIncome: 11.71 },
    { year: 'FY25', revenue: 26.89, operatingIncome: 12.39 },
    { year: 'FY26E', revenue: 28.2, operatingIncome: 13.33 },
  ],
  thesis: [
    "McDonald's franchise-heavy model converts more than 80% of franchised revenue into profit before corporate overhead, because franchisees bear the food, labor, and most occupancy costs while McDonald's collects rent and royalties on a base of 45,000 restaurants.",
    'Decades of annual dividend increases and steady buybacks return substantially all free cash flow to shareholders, funded by a capital-light operating model that requires less than $3.5B of annual capital expenditure against more than $10B of operating cash flow.',
    'Systemwide comparable-store sales growth, driven by menu innovation, digital ordering, and delivery partnerships, compounds revenue without requiring proportional capital spending, because the franchisees fund the majority of restaurant-level investment.',
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
  24.62, 22.82, 21.03, 21.08, 19.21, 23.22, 23.18, 25.49, 25.92, 26.89,
];

export const expenseLines = [
  {
    label: 'Company-operated restaurant expenses',
    desc: "Food & paper, payroll & benefits, and occupancy costs for the restaurants McDonald's operates directly. Includes other restaurant expenses reported separately from FY19.",
    values: [
      12.756, 9.177, 7.968, 7.985, 7.248, 8.307, 7.626, 8.456, 8.673, 8.832,
    ],
  },
  {
    label: 'Franchised restaurants—occupancy',
    desc: "Lease and occupancy costs McDonald's incurs on properties subleased to franchisees. This is the primary cost against franchised revenue.",
    values: [
      1.672, 1.788, 1.973, 2.201, 2.208, 2.335, 2.35, 2.475, 2.536, 2.618,
    ],
  },
  {
    label: 'Selling, general & administrative',
    desc: 'Corporate overhead including marketing, technology, legal, and executive compensation.',
    values: [
      2.442, 2.305, 2.269, 2.229, 2.546, 2.708, 2.862, 2.817, 2.859, 3.04,
    ],
  },
  {
    label: 'Other operating (income)/expense',
    desc: 'Gains and losses on asset disposals, impairment charges, and restructuring costs. FY22 includes charges from the sale of the Russia business.',
    values: [
      null,
      null,
      null,
      -0.12,
      -0.118,
      -0.483,
      0.974,
      0.099,
      0.139,
      0.002,
    ],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on long-term debt, net of capitalized interest. Rising trend reflects the debt-funded buyback program.',
    values: [
      0.884, 0.922, 0.981, 1.122, 1.218, 1.186, 1.207, 1.361, 1.506, 1.582,
    ],
  },
  {
    label: 'Income taxes',
    desc: 'Income tax provision. FY17 includes a one-time charge for the Tax Cuts and Jobs Act transition tax.',
    values: [
      2.16, 3.381, 1.892, 1.993, 1.41, 1.583, 1.648, 2.053, 2.121, 2.334,
    ],
  },
  {
    label: 'Stock-based compensation',
    desc: 'Non-cash compensation expense for equity awards issued to employees.',
    values: [
      0.131, 0.118, 0.125, 0.11, 0.092, 0.139, 0.167, 0.175, 0.172, 0.165,
    ],
  },
];

export const cashFlowLines = [
  {
    label: 'Cash Operating Costs',
    desc: 'Operating expenses on a cash basis: total operating costs minus depreciation and stock-based compensation.\nShown as a percentage of total revenue.',
    values: [
      15.228, 11.789, 10.603, 10.277, 10.044, 10.853, 11.773, 11.687, 11.94,
      12.136,
    ],
  },
  {
    label: 'Cash Taxes Paid',
    desc: 'Income taxes actually paid in cash during the period.\nShown as a percentage of total revenue.',
    values: [2.388, 2.786, 1.734, 2.0, 1.5, 2.404, 3.024, 3.0, 3.0, 2.688],
  },
  {
    label: 'Δ Working Capital',
    desc: 'Change in net working capital. Positive means cash was freed; negative means cash was consumed.\nShown as a percentage of total revenue.',
    values: [
      null,
      null,
      null,
      null,
      null,
      0.454,
      -0.645,
      -0.108,
      -0.438,
      0.106,
    ],
  },
  {
    label: 'CapEx',
    desc: 'Capital expenditures for new restaurants, existing restaurant improvements, and corporate facilities.\nShown as a percentage of total revenue.',
    values: [
      1.821, 1.854, 2.742, 2.394, 1.64, 2.04, 1.899, 2.357, 2.775, 3.365,
    ],
  },
];
