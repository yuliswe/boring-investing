import type { StressTestData } from '@/templates/base';
import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

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
  6.875, 8.963, 10.944, 11.82, 13.979, 18.611, 21.173, 27.559, 28.263, 32.667,
];

const operatingLines = [
  {
    label: 'Cost of sales',
    desc: 'Cost of building, shipping and installing lithography systems, and of servicing the installed base.',
    values: [
      3.73, 4.943, 5.915, 6.54, 7.181, 8.802, 10.473, 13.422, 13.771, 15.409,
    ],
  },
  {
    label: 'Research and development costs',
    desc: 'Development of EUV, High-NA EUV, DUV immersion and metrology systems. FY16 and FY17 are shown before the customer co-investment funding, which appears in other operating income.',
    values: [
      1.106, 1.26, 1.576, 1.969, 2.201, 2.547, 3.254, 3.981, 4.304, 4.699,
    ],
  },
  {
    label: 'Selling, general and administrative costs',
    desc: 'Sales, marketing and corporate overhead.',
    values: [
      0.375, 0.417, 0.488, 0.521, 0.545, 0.726, 0.946, 1.113, 1.166, 1.258,
    ],
  },
  {
    label: 'Other operating income',
    desc: 'FY16 and FY17 are payments under the 2012 Customer Co-Investment Program, in which Intel, TSMC and Samsung funded EUV and 450mm research. FY21 is the €0.21B gain on selling Berliner Glas subsidiaries. Shown as a negative expense.',
    values: [-0.094, -0.096, 0, 0, 0, -0.214, 0, 0, 0, 0],
  },
];

const nonOperatingLines = [
  {
    label: 'Interest and other, net',
    desc: 'Interest earned on cash and investments minus interest on bonds. Shown as an expense, so net interest income is negative.',
    values: [
      -0.034, 0.05, 0.028, 0.025, 0.035, 0.045, 0.045, -0.041, -0.02, -0.105,
    ],
  },
  {
    label: 'Income from equity method investments',
    desc: 'ASML’s 24.9% share of the profit of Carl Zeiss SMT, its sole supplier of EUV optics, bought in 2017. Shown as a negative expense.',
    values: [
      0, 0.017, -0.006, -0.018, -0.089, -0.199, -0.138, -0.191, -0.21, -0.217,
    ],
  },
];

const taxLine = {
  label: 'Income tax expense',
  desc: 'Income tax as reported. ASML’s rate is low because Dutch innovation box rules tax qualifying R&D income at a reduced rate.',
  values: [0.234, 0.306, 0.352, 0.192, 0.552, 1.021, 0.97, 1.436, 1.681, 2.013],
};

const sumLines = (lines: { values: number[] }[]) =>
  expenseYears.map(
    (_, i) => +lines.reduce((sum, l) => sum + l.values[i], 0).toFixed(3)
  );

export const expenseLines: {
  label: string;
  desc: string;
  values: number[];
  indent?: number;
}[] = [
  {
    label: 'Operating expenses',
    desc: 'Cost of sales, R&D and SG&A, net of other operating income.',
    values: sumLines(operatingLines),
  },
  ...operatingLines.map(l => ({ ...l, indent: 1 })),
  {
    label: 'Non-operating items',
    desc: 'Net interest and the share of Carl Zeiss SMT profit. Negative when income exceeds interest cost.',
    values: sumLines(nonOperatingLines),
  },
  ...nonOperatingLines.map(l => ({ ...l, indent: 1 })),
  taxLine,
];

export const cashFlowStatementYears = [...expenseYears, 'FY26E'];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash and cash equivalents for the year, including exchange-rate effects.',
    values: [
      0.448,
      -0.648,
      0.862,
      0.411,
      2.517,
      0.902,
      0.317,
      -0.264,
      5.731,
      0.18,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. It swings with customer down payments, which ASML collects well before it ships a system.',
    values: [
      1.666,
      1.818,
      3.073,
      3.276,
      4.628,
      10.846,
      8.487,
      5.443,
      11.166,
      12.659,
      null,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus depreciation, amortization, stock-based compensation, deferred taxes and other non-cash items.',
    values: [
      1.961,
      2.758,
      3.121,
      3.202,
      4.096,
      5.953,
      6.046,
      9.107,
      9.113,
      11.632,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Changes in inventories, receivables, payables and contract liabilities. FY21 and FY22 were lifted by record customer down payments, and FY23 fell as ASML built inventory and paid €2.6B of cash taxes.',
    values: [
      -0.295,
      -0.939,
      -0.048,
      0.075,
      0.532,
      4.892,
      2.441,
      -3.664,
      2.053,
      1.027,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities.',
    values: [
      -3.188,
      -1.229,
      -0.492,
      -1.158,
      -1.352,
      -0.072,
      -1.029,
      -2.689,
      -2.609,
      -3.778,
      null,
    ],
  },
  {
    label: 'Acquisitions and strategic investments',
    desc: 'HMI in FY16 (€2.64B), the 24.9% stake in Carl Zeiss SMT in FY17 (€1.02B), Berliner Glas in FY20, the sale of Berliner Glas subsidiaries in FY21, and the Mistral AI stake in FY25 (€1.30B).',
    values: [-2.641, -1.02, 0, 0, -0.223, 0.329, 0, -0.034, 0, -1.302, null],
    indent: 1,
  },
  {
    label: 'Short-term investments, net',
    desc: 'Purchases minus maturities of short-term investments.',
    values: [
      -0.2,
      0.121,
      0.116,
      -0.273,
      -0.116,
      0.664,
      0.53,
      0.102,
      0,
      -0.401,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property, plant and equipment plus intangible assets.',
    values: [
      -0.325,
      -0.358,
      -0.61,
      -0.886,
      -1.001,
      -0.94,
      -1.319,
      -2.196,
      -2.083,
      -1.631,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other investing',
    desc: 'Loans issued and other investing items.',
    values: [
      -0.022,
      0.028,
      0.002,
      0.001,
      -0.012,
      -0.124,
      -0.24,
      -0.562,
      -0.526,
      -0.444,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities.',
    values: [
      1.964,
      -1.209,
      -1.724,
      -1.712,
      -0.753,
      -9.892,
      -7.138,
      -3.004,
      -2.832,
      -8.671,
      null,
    ],
  },
  {
    label: 'Share buybacks',
    desc: 'Purchases of treasury shares. FY21 was a record €8.56B, and a €12B programme runs from 2026 to 2028.',
    values: [
      -0.4,
      -0.5,
      -1.146,
      -0.41,
      -1.208,
      -8.56,
      -4.64,
      -1.0,
      -0.5,
      -5.95,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Dividends paid to shareholders.',
    values: [
      -0.446,
      -0.517,
      -0.597,
      -1.326,
      -1.066,
      -1.368,
      -2.56,
      -2.348,
      -2.453,
      -2.55,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Debt issued minus repaid',
    desc: 'Bond issuance minus repayments. FY16 bonds funded the HMI purchase, and FY20 includes €1.49B of new notes.',
    values: [
      2.226,
      -0.243,
      -0.003,
      -0.004,
      1.483,
      -0.012,
      -0.021,
      0.245,
      -0.003,
      -0.313,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other financing',
    desc: 'Shares issued, mainly under employee plans. FY16 includes €0.58B of share issuance.',
    values: [
      0.584,
      0.051,
      0.022,
      0.027,
      0.038,
      0.049,
      0.082,
      0.099,
      0.124,
      0.142,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY26E is the consensus estimate.',
    values: [
      1.341, 1.46, 2.463, 2.391, 3.627, 9.906, 7.168, 3.247, 9.083, 11.027,
      15.74,
    ],
  },
];

export const commitments = {
  asOf: '31 December 2025 (FY25 20-F)',
  columns: ['Total', '≤1 yr', '>1 yr'],
  rows: [
    {
      label: 'Purchase obligations',
      desc: 'Open orders with suppliers, mainly for system components and Carl Zeiss SMT optics, which ASML must take even if its own customers cancel.',
      values: ['-€12.7B', '-€9.6B', '-€3.1B'],
    },
    {
      label: 'Customer down payments',
      desc: 'Contract liabilities, which are cash customers have paid before ASML ships their systems. They are a liability on the balance sheet, and a source of cash that would reverse if orders were cancelled. Non-current contract liabilities rose from €3.4B to €9.3B in the first nine months of 2026.',
      values: ['€19.4B', '€16.0B', '€3.4B'],
    },
  ],
};

export const LOST_PROFIT_SHARE = 0.55 * (1 - 0.17);

export const stressTest: StressTestData = {
  subject: 'AI hype and circular financing',
  currency: '€',
  revenueKicker:
    'Revenue without the AI build-out. ASML’s customers say their orders are driven by AI spending, and part of that spending is circular, because NVIDIA, AMD and the hyperscalers fund the AI labs that buy their chips. The scenario holds ASML to the low path of the plan it published before ChatGPT and removes everything above it.',
  revenueNote:
    'The baseline is the low path of ASML’s November 2022 plan, which was published three weeks before ChatGPT and guided to €30–40B of sales in 2025 and €44–60B in 2030. It gives €30.0B for FY25 and €32.4B for FY26E. Revenue above that baseline is split into the part funded by circular financing and the remaining AI demand, so the two do not overlap. ASML does not disclose AI revenue, so both lines are estimates; click a year for the method. FY24 and earlier are not adjusted, because the FY24 rise above the plan came from Chinese stockpiling rather than AI.',
  gainsDesc:
    'The €0.51B gain ASML booked in Q3 2026 when it revalued its Mistral AI stake at the Series D price, per share. The consensus estimate is assumed to include it, because nine-month EPS of €27.64 already does. FY25 has no gain to remove.',
  tableNote:
    'The deductions are estimates, because ASML does not split its sales by end market beyond logic and memory. Stressed EPS keeps the €12.7B of purchase obligations and does not reverse any of the €19.4B of customer down payments, both of which would hurt in a real collapse. P/E ratios recalculate when the price is adjusted.',
  actualYears: ['FY25'],
  forwardYear: 'FY26E',
  deductions: [
    {
      label: 'Circular financing',
      desc: 'AI-driven sales funded by circular financing, in which chip vendors and hyperscalers invest in or guarantee the AI labs and clouds that buy their hardware. It takes an estimated 10% (FY25) and 20% (FY26E) of AI-driven ASML sales of €8.5B and €17.6B. Those shares count guarantees and backstops as well as equity, so they are upper bounds.',
      values: { FY25: 0.85, FY26E: 3.52 },
    },
    {
      label: 'Other AI demand',
      desc: 'The rest of the revenue above the pre-ChatGPT baseline, which is AI demand that customers fund themselves, such as TSMC capacity for AI accelerators and HBM capacity at the memory makers.',
      values: { FY25: 1.85, FY26E: 8.58 },
    },
  ],
  dilutedShares: { FY25: 0.3889, FY26E: 0.384 },
  investmentGainsPerShare: {
    FY25: [],
    FY26E: [{ label: 'Mistral AI revaluation gain (Q3 2026)', value: 1.33 }],
  },
  writeOffs: [{ label: 'Mistral AI stake', value: 2.24 }],
  lostProfit: {
    label: 'Lost profit',
    desc: 'The revenue removed in the Stress Test Scenario chart, times a 55% decremental operating margin, taxed at 17% and divided by diluted shares. The margin is the middle of ASML’s record, in which operating income fell by 33–65 cents per euro of lost sales in 2008, 2009 and 2012, and rose by 52 cents per euro gained from FY24 to FY25. R&D and overhead stay, so the cut is larger than the gross margin alone.',
    share: LOST_PROFIT_SHARE,
  },
  yearNotes: {
    FY25: 'This is an estimate. FY25 sales of €32.7B were only €2.7B above the pre-ChatGPT plan’s low path, so most of ASML’s FY25 AI demand replaced demand that the plan already expected. The 10% circular share applies to an estimated €8.5B of AI-driven sales, which is 30% of system sales and half that share of service sales.',
    FY26E:
      'This is an estimate. Consensus sales of €44.5B are €12.1B above the baseline of €32.4B. The 20% circular share of €17.6B of AI-driven sales is an upper bound, because ASML ships one to two years after an order, so most circular deals signed in 2026 land in FY27 and FY28. The Mistral write-off is the €2.24B carrying value at 27 September 2026.',
  },
};

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E revenue, EPS and free cash flow are the consensus analyst estimates on stockanalysis.com (35 analysts, 16 October 2026), which sit within ASML’s guidance of €44–45B of sales at about 56% gross margin. Net income multiplies consensus EPS by 384M diluted shares. Operating income has no consensus figure and is omitted.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [
        29.3, 30.3, 22.6, 42.9, 46.9, 49.3, 35.7, 34.3, 35.3, 37.3, 29.9,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 35.5,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from the default price of €1,236.80 divided by consensus diluted EPS of €41.33.',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [
        34.0, 42.9, 23.7, 46.5, 45.9, 29.3, 28.0, 82.7, 29.4, 32.5, 30.2,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 33.3,
      guidanceCount: 1,
      yearNotes: {
        FY23: 'Free cash flow fell to €3.2B because ASML built inventory and paid €2.6B of cash taxes.',
        FY26E:
          'Calculated from the default price of €1,236.80 divided by consensus FCF per share of €40.99.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        3.64, 4.79, 6.08, 6.15, 8.48, 14.34, 14.13, 19.89, 19.24, 24.71, 41.33,
      ],
      format: { prefix: '€', decimals: 2 },
      median10y: 11.3,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Average consensus estimate of €41.33 (35 analysts, stockanalysis.com, 16 October 2026). Nine-month EPS was €27.64, including €1.33 from the Mistral revaluation gain.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [
        3.14, 3.38, 5.78, 5.67, 8.65, 24.14, 18.01, 8.24, 23.08, 28.36, 40.99,
      ],
      format: { prefix: '€', decimals: 2 },
      median10y: 8.45,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus free cash flow of €15.74B divided by 384M diluted shares.',
      },
    },
    {
      label: 'ROE %',
      values: [16.9, 20.0, 23.2, 21.4, 26.9, 49.0, 59.4, 70.4, 47.4, 50.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 37.2,
    },
    {
      label: 'ROIC %',
      values: [20.0, 21.7, 24.8, 24.0, 31.5, 62.5, 86.1, 90.8, 68.3, 88.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 47.0,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.33, 0.28, 0.26, 0.25, 0.34, 0.45, 0.48, 0.34, 0.25, 0.22],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.31,
    },
    {
      label: 'Sustainable growth rate %',
      values: [12.1, 15.0, 17.9, 10.5, 18.8, 37.6, 32.4, 49.3, 32.0, 37.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 25.4,
    },
    {
      label: 'Net margin %',
      values: [22.7, 23.1, 23.7, 21.9, 25.4, 31.6, 26.6, 28.4, 26.8, 29.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 26.0,
    },
    {
      label: 'Free cash flow margin %',
      values: [
        19.5, 16.3, 22.5, 20.2, 25.9, 53.2, 33.9, 11.8, 32.1, 33.8, 35.4,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 24.2,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus free cash flow of €15.74B divided by consensus revenue of €44.48B.',
      },
    },
  ],
  revenueSection: {
    currency: '€',
    netIncomeDesc:
      'Net income as reported. FY26E multiplies consensus EPS of €41.33 by 384M diluted shares.',
  },
  revenue: [
    { year: 'FY16', revenue: 6.875, operatingIncome: 1.759, netIncome: 1.558 },
    { year: 'FY17', revenue: 8.963, operatingIncome: 2.44, netIncome: 2.067 },
    { year: 'FY18', revenue: 10.944, operatingIncome: 2.965, netIncome: 2.592 },
    { year: 'FY19', revenue: 11.82, operatingIncome: 2.791, netIncome: 2.592 },
    { year: 'FY20', revenue: 13.979, operatingIncome: 4.052, netIncome: 3.554 },
    { year: 'FY21', revenue: 18.611, operatingIncome: 6.75, netIncome: 5.883 },
    { year: 'FY22', revenue: 21.173, operatingIncome: 6.501, netIncome: 5.624 },
    { year: 'FY23', revenue: 27.559, operatingIncome: 9.042, netIncome: 7.839 },
    { year: 'FY24', revenue: 28.263, operatingIncome: 9.023, netIncome: 7.572 },
    {
      year: 'FY25',
      revenue: 32.667,
      operatingIncome: 11.301,
      netIncome: 9.609,
    },
    { year: 'FY26E', revenue: 44.48, operatingIncome: null, netIncome: 15.87 },
  ],
  thesis: [
    'ASML is the only maker of EUV lithography systems, which every leading-edge logic and DRAM fab needs, so its customers cannot design around it.',
    'Installed Base Management, which services and upgrades the systems already in fabs, grew from €2.2B in FY16 to €8.2B in FY25 and keeps earning when new orders slow.',
    'FY26 sales are guided 36% higher on AI-driven logic and memory orders, so the stress test below asks what the business earns if that demand proves to be hype.',
  ],
};

export default financials;
