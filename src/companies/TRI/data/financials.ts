import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const adjustedNotes: Record<string, string> = {
  FY18: 'Removed: gain on sale of the Financial & Risk business (Refinitiv) to Blackstone.',
  FY21: 'Removed: gains from the LSEG acquisition of Refinitiv and the resulting equity stake conversion.',
  FY23: 'Removed: LSEG-related tax benefit and equity stake fair value gains.',
};

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price divided by adjusted EPS.',
      values: [46.9, 63.1, 52.7, 45.4, 63.1, 47.9, 42.0, 42.4, 33.5, 24.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 46.9,
      guidanceCount: 1,
      yearNotes: {
        ...adjustedNotes,
        FY26E:
          'Calculated from the 19 Sep closing price of $106.35 divided by consensus adjusted EPS of $4.44.',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [14.6, 15.5, null, 29.5, 44.7, 41.5, 37.5, 39.1, 29.4, 21.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 33.5,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from the 19 Sep closing price of $106.35 divided by consensus free cash flow per share of $4.85.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Adjusted EPS',
      desc: 'Thomson Reuters adjusted diluted EPS, which excludes one-time Refinitiv and LSEG transaction gains and non-cash amortization of acquired intangibles.',
      values: [0.94, 0.75, 1.29, 1.85, 1.95, 2.62, 3.51, 3.77, 3.92, 4.44],
      format: { prefix: '$', decimals: 2 },
      median10y: 1.95,
      guidanceCount: 1,
      yearNotes: {
        ...adjustedNotes,
        FY26E: 'Consensus analyst estimate for adjusted diluted EPS.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [3.02, 3.03, 0.41, 2.85, 2.73, 2.87, 3.97, 4.17, 4.53, 4.85],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.02,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Consensus analyst estimate for free cash flow per share.',
      },
    },
    {
      label: 'ROE %',
      values: [3.62, 2.5, 4.61, 7.57, 7.72, 9.3, 13.63, 14.65, 14.6, 15.0],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 7.72,
      guidanceCount: 1,
      yearNotes: {
        ...adjustedNotes,
        FY26E:
          'Derived from consensus adjusted EPS of $4.44, estimated shares of ~445M, and FY25 shareholders’ equity of ~$12.1B.',
      },
    },
    {
      label: 'ROIC %',
      values: [6.0, 15.0, 7.0, 6.0, 7.66, 9.19, 11.52, 14.34, 11.29, 11.0],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 9.19,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Consensus analyst estimate for return on invested capital.',
      },
    },
    {
      label: 'Debt to equity ratio',
      values: [0.55, 0.35, 0.28, 0.27, 0.29, 0.42, 0.32, 0.26, 0.2, 0.18],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.29,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Consensus analyst estimate for year-end debt-to-equity ratio.',
      },
    },
    {
      label: 'Sustainable growth rate %',
      values: [1.5, 2.0, 2.7, 2.8, 6.7, 3.4, 9.1, 8.3, 4.5, 5.2],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 3.4,
      guidanceCount: 1,
      yearNotes: {
        ...adjustedNotes,
        FY26E:
          'Derived from adjusted ROE of 15.0% and estimated retention ratio of ~49%, based on expected dividend of ~$2.28/share.',
      },
    },
    {
      label: 'Net margin %',
      desc: 'Adjusted net income as a share of revenue.',
      values: [8.9, 6.8, 10.9, 15.2, 14.5, 17.4, 23.4, 23.4, 23.7, 23.8],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 15.2,
      guidanceCount: 1,
      yearNotes: {
        ...adjustedNotes,
        FY26E:
          'Derived from consensus adjusted EPS of $4.44, estimated shares of ~445M, and company-guided revenue of $8.08B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [28.5, 27.5, 3.5, 23.5, 20.3, 19.9, 26.4, 25.5, 27.0, 26.0],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 25.5,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus FCF per share of $4.85, estimated shares of ~445M, and company-guided revenue of $8.08B.',
      },
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 5.3, operatingIncome: 1.03 },
    { year: 'FY18', revenue: 5.5, operatingIncome: 0.78 },
    { year: 'FY19', revenue: 5.91, operatingIncome: 1.2 },
    { year: 'FY20', revenue: 5.98, operatingIncome: 1.93 },
    { year: 'FY21', revenue: 6.35, operatingIncome: 1.24 },
    { year: 'FY22', revenue: 6.63, operatingIncome: 1.83 },
    { year: 'FY23', revenue: 6.79, operatingIncome: 2.33 },
    { year: 'FY24', revenue: 7.26, operatingIncome: 2.11 },
    { year: 'FY25', revenue: 7.48, operatingIncome: 2.13 },
    { year: 'FY26E', revenue: 8.08, operatingIncome: null },
  ],
  thesis: [
    'AI-powered products like CoCounsel and ONESOURCE expand wallet share with professional customers, embedding Thomson Reuters deeper into legal, tax, and compliance workflows.',
    'More than eighty percent of revenue is recurring, and the subscription model delivers resilient cash flows that are largely insensitive to economic cycles.',
    'Disciplined capital allocation channels free cash flow into a growing dividend, steady buybacks, and targeted bolt-on acquisitions that compound returns over time.',
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
  5.3, 5.5, 5.91, 5.98, 6.35, 6.63, 6.79, 7.26, 7.48,
];

export const expenseLines = [
  {
    label: 'Operating Expenses',
    desc: 'Combined operating expenses as reported by Thomson Reuters, which includes cost of revenues, selling and marketing, general and administrative, and depreciation. The company does not publish a breakdown into COGS, SG&A, and R&D.',
    values: [3.706, 4.131, 4.413, 3.999, 4.37, 4.28, 4.134, 4.471, 4.578],
  },
  {
    label: 'D&A',
    desc: 'Depreciation and amortization, including amortization of capitalized computer software (which is where R&D spending appears in Thomson Reuters’ reporting).',
    values: [0.605, 0.619, 0.717, 0.792, 0.77, 0.724, 0.725, 0.822, 0.93],
  },
  {
    label: 'Other Operating',
    desc: 'Other operating income and expenses, including restructuring charges, acquisition-related costs, and gains or losses on asset disposals.',
    values: [
      -0.041, -0.029, -0.423, -0.736, -0.034, -0.211, -0.397, -0.144, -0.164,
    ],
  },
  {
    label: 'Non-Operating',
    desc: 'Non-operating income and expenses, including interest income, interest expense, and gains or losses on the LSEG equity stake and foreign exchange.',
    values: [null, null, 0.228, 0.165, 0.188, -0.248, 0.344, 0.08, 0.198],
  },
  {
    label: 'Taxes',
    desc: 'Income tax provision. FY17 reflects a tax benefit from continuing operations; FY21 and FY23 include large tax charges or benefits tied to the Refinitiv/LSEG transactions.',
    values: [-0.134, 0.141, 1.198, 0.071, 1.607, 0.195, -0.417, 0.123, 0.423],
  },
  {
    label: 'Stock-Based Compensation',
    desc: 'Stock-based compensation expense issued to employees, treated as an economic cost borne by shareholders.',
    values: [0.06, 0.048, 0.056, 0.064, 0.076, 0.085, 0.083, 0.087, 0.111],
  },
];

export const cashFlowLines = [
  {
    label: 'Cash Operating Costs',
    desc: 'Operating expenses on a cash basis: reported operating expenses minus depreciation and stock-based compensation.\nShown as a percentage of total revenue.',
    values: [3.041, 3.464, 3.64, 3.143, 3.524, 3.471, 3.326, 3.562, 3.537],
  },
  {
    label: 'Cash Taxes Paid',
    desc: 'Income taxes actually paid in cash during the period, which may differ from the accrual-basis tax provision.\nShown as a percentage of total revenue.',
    values: [0.057, 0.27, 0.268, 0.052, 1.916, 0.2, 0.868, 0.551, 0.337],
  },
  {
    label: 'Δ Working Capital',
    desc: 'Change in net working capital. Positive means cash was freed; negative means cash was consumed as receivables or inventory grew faster than payables.\nShown as a percentage of total revenue.',
    values: [null, 0.134, -0.247, 0.102, 0.832, 0.008, 0.457, 0.176, 0.043],
  },
  {
    label: 'CapEx',
    desc: 'Capital expenditures, including purchases of computer hardware and capitalized internally developed software.\nShown as a percentage of total revenue.',
    values: [0.519, 0.576, 0.505, 0.504, 0.487, 0.595, 0.544, 0.607, 0.634],
  },
];
