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
];

export const revenueByYear = [
  5.253, 6.475, 6.731, 9.763, 16.434, 23.601, 22.68, 25.785, 34.639,
];

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Every line between net revenue and operating income: total cost of sales, research and development, marketing, general and administrative, amortization of acquisition-related intangibles, restructuring charges, and licensing gains.',
    values: [5.126, 6.024, 6.1, 8.394, 12.786, 22.337, 22.279, 23.885, 30.945],
  },
  {
    label: 'Cost of sales',
    desc: 'Wafer, packaging, and test costs paid to foundry and assembly partners (mainly TSMC), plus inventory provisions and warranty, excluding amortization of acquired intangibles.',
    values: [3.466, 4.028, 3.863, 5.416, 8.505, 11.55, 11.278, 12.114, 16.456],
    indent: 1,
  },
  {
    label: 'Amortization of acquisition-related intangibles',
    desc: 'Non-cash amortization of developed technology, customer relationships, and other intangibles acquired with Xilinx (February 2022), Pensando (2022), and ZT Systems (2025). AMD reports part of it within cost of sales and part within operating expenses; this line combines both.',
    values: [0, 0, 0, 0, 0, 3.548, 2.811, 2.394, 2.254],
    indent: 1,
  },
  {
    label: 'Research and development',
    desc: 'Engineering salaries, stock-based compensation, mask sets, and tools for CPU, GPU, adaptive SoC, and software development.',
    values: [1.196, 1.434, 1.547, 1.983, 2.845, 5.005, 5.872, 6.456, 8.091],
    indent: 1,
  },
  {
    label: 'Marketing, general and administrative',
    desc: 'Sales, marketing, co-marketing funds paid to partners, and corporate functions, including allocated stock-based compensation.',
    values: [0.516, 0.562, 0.75, 0.995, 1.448, 2.336, 2.318, 2.735, 4.144],
    indent: 1,
  },
  {
    label: 'Restructuring charges',
    desc: 'Restructuring charges of $186M recorded in FY24.',
    values: [0, 0, 0, 0, 0, 0, 0, 0.186, 0],
    indent: 1,
  },
  {
    label: 'Licensing gain',
    desc: 'Royalty income from the THATIC joint venture for licensed x86 server IP, reported as a reduction of operating expenses. Negative values reduce total expenses.',
    values: [-0.052, 0, -0.06, 0, -0.012, -0.102, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest expense, other income and expense, and AMD’s share of income or loss in its ATMP joint venture. Negative values mean investment income exceeded interest costs.',
    values: [0.142, 0.123, 0.259, 0.089, -0.027, 0.066, -0.107, -0.122, -0.472],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on senior notes and convertible notes. It fell from FY17 to FY21 as AMD retired and converted debt, and rose after it assumed Xilinx notes in FY22.',
    values: [0.126, 0.121, 0.094, 0.047, 0.034, 0.088, 0.106, 0.092, 0.131],
    indent: 1,
  },
  {
    label: 'Other (income) expense, net',
    desc: 'Interest income on cash and investments, gains and losses on equity investments, and losses on debt redemption. FY19 includes a $176M loss on debt redemption and conversion; FY25 includes $341M of gains on long-term investments.',
    values: [0.009, 0, 0.165, 0.047, -0.055, -0.008, -0.197, -0.181, -0.577],
    indent: 1,
  },
  {
    label: 'Equity (income) loss in investee',
    desc: "AMD's share of the results of the ATMP joint venture with Tongfu Microelectronics.",
    values: [0.007, 0.002, 0, -0.005, -0.006, -0.014, -0.016, -0.033, -0.026],
    indent: 1,
  },
  {
    label: 'Income taxes',
    desc: 'Provision for (benefit from) income taxes. FY20 includes a $1.3B release of the valuation allowance on deferred tax assets; FY23 reflects deferred tax benefits; FY25 includes a $793M benefit from resolving uncertain tax positions.',
    values: [0.018, -0.009, 0.031, -1.21, 0.513, -0.122, -0.346, 0.381, -0.103],
  },
  {
    label: 'Discontinued operations',
    desc: 'FY25 after-tax income from the ZT Systems data center manufacturing business, which AMD acquired with ZT Systems and then divested. A negative value reduces total expenses.',
    values: [0, 0, 0, 0, 0, 0, 0, 0, -0.066],
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
    desc: 'Net change in cash, cash equivalents and restricted cash: the sum of operating, investing, and financing activities.',
    values: [
      -0.075,
      -0.108,
      0.387,
      0.125,
      0.94,
      2.3,
      -0.902,
      -0.122,
      1.745,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. FY25 includes $1.216B from discontinued operations (ZT Systems manufacturing).',
    values: [
      0.012,
      0.034,
      0.493,
      1.071,
      3.521,
      3.565,
      1.667,
      3.041,
      7.709,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash from investing activities: capital expenditures, purchases and maturities of short-term investments, and acquisitions. FY22 was positive because the all-stock Xilinx deal brought in $2.37B of acquired cash and maturities of short-term investments exceeded purchases; FY25 includes $1.76B paid for acquisitions (mainly ZT Systems) partly offset by $1.36B of divestiture proceeds.',
    values: [
      -0.054,
      -0.17,
      -0.149,
      -0.952,
      -0.686,
      1.999,
      -1.423,
      -1.101,
      -5.533,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment. AMD is fabless, so capex stays below 3% of revenue.',
    values: [
      -0.113,
      -0.163,
      -0.217,
      -0.294,
      -0.301,
      -0.45,
      -0.546,
      -0.636,
      -0.974,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities: share repurchases, tax withholding on employee equity, employee stock purchases, and debt issuance and repayment. AMD pays no dividend.',
    values: [
      -0.033,
      0.028,
      0.043,
      0.006,
      -1.895,
      -3.264,
      -1.146,
      -2.062,
      -0.431,
      null,
    ],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY26E is the consensus analyst estimate.',
    values: [
      -0.101, -0.129, 0.276, 0.777, 3.22, 3.115, 1.121, 2.405, 6.735, 7.56,
    ],
  },
];

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'AMD',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 6.735,
        forward: 7.56,
      },
    ],
    startNote: 'consensus FY26E free cash flow',
    forwardNote:
      'Consensus FY26E free cash flow of $7.56B, as in the Cash Flow section.',
    sharesOutstanding: 1.63,
    netCash: 9.89,
    netCashSource:
      '$13.11B of cash, cash equivalents, and short-term investments minus $3.23B of debt, Q2 2026 10-Q',
    assumptionNote:
      'Free cash flow lags a revenue ramp of more than 40% a year, so the starting year understates steady-state cash generation.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E values use consensus analyst estimates from stockanalysis.com (49 analysts as of 30 September 2026). Consensus EPS there is non-GAAP, so the GAAP EPS shown here is consensus net income of $9.35B divided by the 1.659B diluted shares from the Q2 2026 10-Q. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at the last trading day of the fiscal year divided by GAAP diluted EPS.',
      values: [null, 55.7, 153.9, 44.6, 56.9, 77.1, 278.1, 125.2, 81.1, 112.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 79.1,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Not meaningful because diluted EPS was a loss of $0.03.',
        FY20: 'Depressed by a $1.3B one-time tax benefit from releasing the deferred tax valuation allowance.',
        FY23: 'Inflated by $2.8B of Xilinx intangible amortization against EPS of $0.53.',
        FY26E: 'Calculated from $633.91 divided by derived GAAP EPS of $5.64.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at the last trading day of the fiscal year divided by free cash flow per diluted share.',
      values: [null, null, 184.7, 143.5, 55.8, 32.7, 213.6, 85.2, 52.2, 139.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 85.2,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Not meaningful because free cash flow was negative.',
        FY18: 'Not meaningful because free cash flow was negative.',
        FY26E:
          'Calculated from $633.91 divided by consensus FCF per share of $4.56 ($7.56B / 1.659B shares).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [-0.03, 0.32, 0.3, 2.06, 2.57, 0.84, 0.53, 1.0, 2.65, 5.64],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.84,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus net income of $9.35B divided by 1.659B diluted shares. Consensus non-GAAP EPS is $7.58.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [-0.11, -0.12, 0.25, 0.64, 2.62, 1.98, 0.69, 1.47, 4.12, 4.56],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.69,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Consensus FCF of $7.56B divided by 1.659B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income divided by average stockholders’ equity.',
      values: [-6.2, 36.2, 16.7, 57.5, 47.4, 4.2, 1.5, 2.9, 7.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 7.2,
      yearNotes: {
        FY22: 'Equity rose from $7.5B to $54.8B when AMD issued $48.5B of stock to acquire Xilinx.',
      },
    },
    {
      label: 'ROIC %',
      desc: 'Operating income taxed at the 21% statutory rate, divided by average equity plus total debt.',
      values: [5.1, 15.8, 17.1, 22.8, 41.2, 3.1, 0.5, 2.6, 4.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.1,
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Total debt (current and long-term) divided by stockholders’ equity at fiscal year-end.',
      values: [2.34, 0.99, 0.17, 0.06, 0.04, 0.05, 0.04, 0.03, 0.05],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.05,
    },
    {
      label: 'Net margin %',
      values: [-0.6, 5.2, 5.1, 25.5, 19.2, 5.6, 3.8, 6.4, 12.5, 18.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.6,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'Includes a $1.3B one-time tax benefit.',
        FY26E:
          'Derived from consensus net income of $9.35B and consensus revenue of $50.88B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [-1.9, -2.0, 4.1, 8.0, 19.6, 13.2, 4.9, 9.3, 19.4, 14.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 8.0,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus FCF of $7.56B and consensus revenue of $50.88B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Year-end accounts receivable divided by revenue, multiplied by 365. Measures how many days of revenue are tied up in uncollected receivables.',
      values: [31.5, 69.6, 100.8, 77.2, 60.1, 63.8, 69.6, 87.7, 66.5],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 69.6,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net income. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [null, 0.1, 1.45, 0.43, 1.11, 2.7, 1.95, 1.85, 1.78],
      format: { decimals: 2 },
      median10y: 1.61,
      yearNotes: {
        FY17: 'Not meaningful because net income was a loss.',
        FY20: 'Net income includes a $1.3B non-cash tax benefit.',
      },
    },
  ],
  revenueSection: {
    revenueDesc: 'Consolidated net revenue from all segments.',
    operatingIncomeDesc:
      'GAAP operating income. From FY22 it is reduced by $2.3B to $3.5B a year of amortization of intangibles acquired with Xilinx.',
    netIncomeDesc:
      'GAAP net income. FY20 includes a $1.3B tax benefit; FY25 includes a $793M benefit from resolving uncertain tax positions and $66M from discontinued operations.',
    chartNote:
      'Revenue grew more than sixfold from FY17 to FY25 as Ryzen and EPYC took share from Intel and Xilinx added an embedded business in FY22. GAAP operating income fell in FY22 and FY23 under the weight of Xilinx amortization and a PC downturn. FY26E is the consensus analyst estimate; no consensus operating income is published.',
  },
  revenue: [
    { year: 'FY17', revenue: 5.25, operatingIncome: 0.13, netIncome: -0.03 },
    { year: 'FY18', revenue: 6.48, operatingIncome: 0.45, netIncome: 0.34 },
    { year: 'FY19', revenue: 6.73, operatingIncome: 0.63, netIncome: 0.34 },
    { year: 'FY20', revenue: 9.76, operatingIncome: 1.37, netIncome: 2.49 },
    { year: 'FY21', revenue: 16.43, operatingIncome: 3.65, netIncome: 3.16 },
    { year: 'FY22', revenue: 23.6, operatingIncome: 1.26, netIncome: 1.32 },
    { year: 'FY23', revenue: 22.68, operatingIncome: 0.4, netIncome: 0.85 },
    { year: 'FY24', revenue: 25.79, operatingIncome: 1.9, netIncome: 1.64 },
    { year: 'FY25', revenue: 34.64, operatingIncome: 3.69, netIncome: 4.34 },
    { year: 'FY26E', revenue: 50.88, operatingIncome: null, netIncome: 9.35 },
  ],
  thesis: [
    'Data Center revenue grew from $3.7B in FY21 to $16.6B in FY25, nearly half of total revenue, as EPYC server CPUs took share from Intel and Instinct GPUs began to sell into AI training and inference clusters.',
    'GAAP earnings understate cash generation because the all-stock Xilinx acquisition left $2.3B to $3.5B a year of non-cash intangible amortization; operating cash flow has exceeded net income in every year since FY21.',
    'The fabless model keeps capital expenditures below 3% of revenue, but the valuation already assumes rapid growth, with the stock at about 112 times FY26 consensus GAAP earnings and 139 times consensus free cash flow per share.',
  ],
};

export default financials;
