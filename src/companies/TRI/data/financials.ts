import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [19.5, 6.4, 20.6, 35.4, 10.2, 41.1, 24.8, 32.7, 39.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 24.8,
    },
    {
      label: 'P/FCF ratio',
      values: [14.6, 15.5, null, 29.5, 44.7, 41.5, 37.5, 39.1, 29.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 33.5,
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [2.26, 7.39, 3.3, 2.37, 12.06, 3.05, 5.94, 4.89, 3.33],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.33,
    },
    {
      label: 'Free cash flow per share',
      values: [3.02, 3.03, 0.41, 2.85, 2.73, 2.87, 3.97, 4.17, 4.53],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.02,
    },
    {
      label: 'ROE %',
      values: [8.7, 24.6, 11.8, 9.7, 47.76, 10.82, 23.06, 19.0, 12.4],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 12.4,
    },
    {
      label: 'ROIC %',
      values: [6.0, 15.0, 7.0, 6.0, 7.66, 9.19, 11.52, 14.34, 11.29],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 9.19,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.55, 0.35, 0.28, 0.27, 0.29, 0.42, 0.32, 0.26, 0.2],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.29,
    },
    {
      label: 'Sustainable growth rate %',
      values: [3.5, 20.0, 6.8, 3.6, 41.3, 4.0, 15.4, 10.8, 3.8],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 6.8,
    },
    {
      label: 'Net margin %',
      values: [21.3, 67.2, 27.9, 19.5, 89.6, 20.2, 39.6, 30.4, 20.1],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 27.9,
    },
    {
      label: 'Free cash flow margin %',
      values: [28.5, 27.5, 3.5, 23.5, 20.3, 19.9, 26.4, 25.5, 27.0],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 25.5,
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
