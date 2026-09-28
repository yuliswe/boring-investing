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
    values: [
      1.066,
      -1.598,
      0.033,
      2.551,
      1.26,
      -2.126,
      1.996,
      -3.494,
      -0.311,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges and working capital changes.',
    values: [
      5.551,
      6.967,
      8.122,
      6.265,
      9.142,
      7.387,
      9.612,
      9.447,
      10.551,
      null,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus depreciation, amortization, and stock-based compensation (SEC EDGAR XBRL).',
    values: [
      6.673,
      7.531,
      7.753,
      6.574,
      9.553,
      8.215,
      10.622,
      10.492,
      10.927,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Operating cash flow minus funds from operations, capturing deferred taxes, non-cash gains and losses on restaurant dispositions, and changes in operating assets and liabilities.',
    values: [
      -1.122,
      -0.564,
      0.369,
      -0.309,
      -0.411,
      -0.828,
      -1.01,
      -1.045,
      -0.376,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash provided by (used in) investing activities, primarily capital expenditures for new restaurants and existing restaurant improvements, partially offset by proceeds from restaurant sales.',
    values: [
      0.562,
      -2.455,
      -3.071,
      -1.546,
      -2.166,
      -2.678,
      -3.185,
      -5.346,
      -3.822,
      null,
    ],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Net cash from restaurant business acquisitions, divestitures, and property sales, computed as the investing residual so that all four sub-lines sum exactly to the parent. FY17 and FY18 were peak refranchising years when McDonald’s sold thousands of company-operated restaurants to franchisees.',
    values: [
      2.662,
      0.59,
      -0.048,
      0.038,
      -0.072,
      -0.322,
      -0.152,
      -0.236,
      0.122,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Net cash used for equity method investments. FY24 reflects the approximately $1.8B investment in the Carlyle-led consortium that acquired a stake in McDonald’s China and Hong Kong operations.',
    values: [0, 0, 0, 0, 0, 0, 0, -1.837, 0, null],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Cash spent on property, equipment, and restaurant construction (SEC EDGAR: PaymentsToAcquirePropertyPlantAndEquipment).',
    values: [
      -1.854, -2.742, -2.394, -1.641, -2.04, -1.899, -2.357, -2.775, -3.365,
      -3.8,
    ],
    indent: 1,
  },
  {
    label: 'Other investing items',
    desc: 'Other investing activities including technology investments, lease-related payments, and miscellaneous items (SEC EDGAR: PaymentsForProceedsFromOtherInvestingActivities).',
    values: [
      -0.246,
      -0.303,
      -0.629,
      0.057,
      -0.054,
      -0.457,
      -0.676,
      -0.498,
      -0.579,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities, including share repurchases, dividend payments, and net debt issuance and repayment.',
    values: [
      -5.311,
      -5.95,
      -4.995,
      -2.249,
      -5.596,
      -6.58,
      -4.374,
      -7.495,
      -7.125,
      null,
    ],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Net cash used for share repurchases, partially offset by proceeds from stock option exercises (SEC EDGAR: PaymentsForRepurchaseOfCommonStock and ProceedsFromStockOptionsExercised).',
    values: [
      -4.229,
      -4.805,
      -4.626,
      -0.612,
      -0.56,
      -3.648,
      -2.794,
      -2.496,
      -1.771,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Net proceeds from (repayment of) long-term and short-term debt (SEC EDGAR: ProceedsFromIssuanceOfLongTermDebt, RepaymentsOfLongTermDebt, and ProceedsFromRepaymentsOfShortTermDebt).',
    values: [
      2.028,
      2.131,
      3.236,
      2.238,
      -1.071,
      1.198,
      2.993,
      -0.071,
      -0.072,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Common stock dividends paid to shareholders (SEC EDGAR: PaymentsOfDividendsCommonStock).',
    values: [
      -3.089, -3.256, -3.582, -3.753, -3.919, -4.168, -4.533, -4.87, -5.115,
      -5.3,
    ],
    indent: 1,
  },
  {
    label: 'Other financing items',
    desc: 'Financing residual: debt issuance costs, derivative settlements, and other minor items, computed so that all four sub-lines sum exactly to the parent.',
    values: [
      -0.021,
      -0.02,
      -0.023,
      -0.122,
      -0.046,
      0.038,
      -0.04,
      -0.058,
      -0.167,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures (property, equipment, and restaurant construction).',
    values: [
      3.697,
      4.225,
      5.728,
      4.624,
      7.102,
      5.488,
      7.255,
      6.672,
      7.186,
      null,
    ],
  },
];
