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
  'FY26',
];

export const revenueByYear = [
  6.91, 9.71, 11.72, 10.92, 16.68, 26.91, 26.97, 60.92, 130.5, 215.94,
];

export const expenseLines = [
  {
    label: 'Cost of revenue',
    desc: 'Direct costs of producing GPU and networking products, including wafer fabrication, assembly, test, and packaging costs, warranty, and inventory provisions.',
    values: [2.85, 3.89, 4.55, 4.15, 6.28, 9.44, 11.62, 16.62, 32.64, 62.48],
  },
  {
    label: 'Research and development',
    desc: 'Engineering salaries, stock-based compensation allocated to R&D, prototype costs, and tools for GPU architecture, software, and AI platform development.',
    values: [1.46, 1.8, 2.38, 2.83, 3.92, 5.27, 7.34, 8.68, 12.91, 18.5],
  },
  {
    label: 'Selling, general & administrative',
    desc: 'Sales, marketing, management, legal, finance, and other corporate costs including allocated stock-based compensation.',
    values: [0.66, 0.82, 0.99, 1.09, 1.94, 2.17, 2.44, 2.65, 3.49, 4.58],
  },
  {
    label: 'Other operating',
    desc: 'Non-recurring operating charges. FY23 includes a $1.35B charge for the terminated Arm Holdings acquisition.',
    values: [0, 0, 0, 0, 0, 0, 1.35, 0, 0, 0],
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest expense on debt minus interest and investment income. Negative values represent net income from investments exceeding interest costs.',
    values: [0.12, 0.01, -0.1, -0.12, 0.12, 0.1, 0.04, -0.85, -2.57, -11.06],
  },
  {
    label: 'Income taxes',
    desc: 'Provision for income taxes. Negative values in FY19 and FY23 reflect tax benefits from the TCJA transition and deferred tax asset revaluations.',
    values: [0.15, 0.15, -0.25, 0.17, 0.08, 0.19, -0.19, 4.06, 11.15, 21.38],
  },
];

export const cashFlowYears = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

export const cashFlowRevenue = [26.91, 26.97, 60.92, 130.5, 215.94];

export const cashFlowLines = [
  {
    label: 'Cash operating costs',
    desc: 'Revenue minus free cash flow, cash taxes, working capital changes, and capital expenditures.\nShown as a percentage of total revenue.',
    values: [20.78, 22.15, 29.91, 60.68, 108.83],
  },
  {
    label: 'Cash taxes paid',
    desc: 'Income taxes actually paid in cash during the fiscal year, which may differ from the income tax provision due to timing and deferred taxes.\nShown as a percentage of total revenue.',
    values: [0.4, 1.4, 6.55, 15.12, 20.29],
  },
  {
    label: 'Δ Working capital',
    desc: 'Net change in operating assets and liabilities. Negative means cash was consumed by growing receivables and inventory; positive means cash was freed.\nShown as a percentage of total revenue.',
    values: [-3.36, -2.21, -3.72, -9.38, -15.95],
  },
  {
    label: 'CapEx',
    desc: 'Purchases of property, equipment, and intangible assets.\nShown as a percentage of total revenue.',
    values: [0.98, 1.83, 1.07, 3.24, 6.04],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY27E'],
  estimateNote:
    'FY27E values use consensus analyst estimates from stockanalysis.com (53 analysts as of September 2026). Revenue, EPS, and FCF are consensus figures. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end divided by GAAP diluted EPS.',
      values: [
        42.0, 50.2, 21.5, 52.0, 74.8, 62.6, 114.6, 51.6, 40.8, 39.0, 24.2,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 50.9,
      guidanceCount: 1,
      yearNotes: {
        FY23: 'Elevated due to ARM acquisition termination charge and gaming downturn compressing EPS.',
        FY27E:
          'Calculated from $225.51 divided by consensus diluted EPS of $9.31.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per share.',
      values: [
        42.8, 49.8, 27.0, 31.3, 65.5, 71.6, 122.1, 53.4, 47.6, 47.8, 28.1,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 49.8,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Calculated from $225.51 divided by consensus FCF per share of $8.03 (FCF $194.1B / ~24.15B shares).',
      },
    },
    {
      label: 'PEG ratio',
      desc: 'Forward P/E divided by the trailing EPS growth rate.',
      values: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0.16,
        0.34,
        0.58,
        0.27,
      ],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.31,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Calculated from the forward P/E of 24.2 divided by the FY26-to-FY27 EPS growth rate of 90.0%.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        0.064, 0.12, 0.17, 0.11, 0.17, 0.39, 0.17, 1.19, 2.94, 4.9, 9.31,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.17,
      guidanceCount: 1,
      yearNotes: {
        FY27E: 'Consensus analyst estimate (53 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [
        0.063, 0.12, 0.13, 0.18, 0.19, 0.32, 0.15, 1.08, 2.5, 3.98, 8.03,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.19,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $194.1B divided by ~24.15B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      values: [28.9, 40.8, 44.3, 22.9, 25.7, 36.7, 19.8, 69.2, 91.9, 76.3],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 37.5,
    },
    {
      label: 'ROIC %',
      values: [22.6, 27.1, 31.1, 16.2, 15.1, 22.1, 10.6, 45.3, 65.3, 58.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.4,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.31, 0.22, 0.18, 0.14, 0.18, 0.44, 0.54, 0.26, 0.13, 0.07],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.22,
    },
    {
      label: 'Net margin %',
      values: [
        24.1, 31.4, 35.3, 25.6, 26.0, 36.2, 16.2, 48.9, 55.8, 55.6, 59.1,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 30.8,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus net income of $242.9B and consensus revenue of $411.6B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [
        21.7, 30.0, 26.8, 39.2, 28.1, 30.2, 14.1, 44.4, 46.6, 44.8, 47.2,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 30.0,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $194.1B and consensus revenue of $411.6B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Accounts receivable divided by revenue, multiplied by 365. Measures how many days of revenue are tied up in uncollected receivables.',
      values: [43.6, 47.6, 44.3, 55.4, 53.2, 63.1, 51.8, 59.9, 64.5, 65.0],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 54.3,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net income. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [1.0, 1.15, 0.9, 1.7, 1.34, 0.93, 1.29, 0.94, 0.88, 0.86],
      format: { decimals: 2 },
      median10y: 0.97,
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 6.91, operatingIncome: 1.93 },
    { year: 'FY18', revenue: 9.71, operatingIncome: 3.21 },
    { year: 'FY19', revenue: 11.72, operatingIncome: 3.8 },
    { year: 'FY20', revenue: 10.92, operatingIncome: 2.85 },
    { year: 'FY21', revenue: 16.68, operatingIncome: 4.53 },
    { year: 'FY22', revenue: 26.91, operatingIncome: 10.04 },
    { year: 'FY23', revenue: 26.97, operatingIncome: 4.22 },
    { year: 'FY24', revenue: 60.92, operatingIncome: 32.97 },
    { year: 'FY25', revenue: 130.5, operatingIncome: 81.45 },
    { year: 'FY26', revenue: 215.94, operatingIncome: 130.39 },
    { year: 'FY27E', revenue: 411.56, operatingIncome: null },
  ],
  thesis: [
    'NVIDIA dominates the AI accelerator market with a vertically integrated platform spanning hardware (GPUs, networking) and software (CUDA, cuDNN, TensorRT), creating an ecosystem moat that locks in developers and enterprise customers.',
    'Data Center revenue has compounded at over 100% annually since FY24 as hyperscale cloud providers and enterprises invest in AI training and inference infrastructure, with each new GPU architecture sustaining pricing power.',
    'Free cash flow conversion is exceptional for a hardware company, consistently above 40% of revenue since FY24, because NVIDIA designs chips and outsources fabrication to TSMC, keeping capital expenditures below 3% of revenue.',
  ],
};

export default financials;
