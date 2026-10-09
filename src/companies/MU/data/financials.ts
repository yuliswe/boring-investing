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
  20.322, 30.391, 23.406, 21.435, 27.705, 30.758, 15.54, 25.111, 37.378,
  133.188,
];

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Revenue minus operating income: cost of goods sold, research and development, selling, general and administrative, and other operating items.',
    values: [
      14.454, 15.397, 16.03, 18.432, 21.422, 21.056, 21.285, 23.807, 27.608,
      33.848,
    ],
  },
  {
    label: 'Cost of goods sold',
    desc: 'Wafer fabrication, assembly, test, and packaging costs for DRAM, NAND, and NOR products, including depreciation of fab equipment and inventory write-downs. Because memory fabs are largely fixed-cost, this line swings sharply as a share of revenue with memory prices.',
    values: [
      11.886, 12.5, 12.704, 14.883, 17.282, 16.86, 16.956, 19.498, 22.505,
      25.684,
    ],
    indent: 1,
  },
  {
    label: 'Research and development',
    desc: 'Process technology and product development for DRAM nodes (1-alpha, 1-beta, 1-gamma), NAND layers, and HBM, including engineering wafers and allocated stock-based compensation.',
    values: [1.824, 2.141, 2.441, 2.6, 2.663, 3.116, 3.114, 3.43, 3.798, 5.65],
    indent: 1,
  },
  {
    label: 'Selling, general, and administrative',
    desc: 'Sales, marketing, management, legal, finance, and other corporate costs including allocated stock-based compensation.',
    values: [
      0.743, 0.813, 0.836, 0.881, 0.894, 1.066, 0.92, 1.129, 1.205, 1.947,
    ],
    indent: 1,
  },
  {
    label: 'Other operating (income) expense, net',
    desc: 'Restructuring, asset impairments, gains and losses on asset sales, and settlement charges. FY26 includes a $500M patent license charge. Negative values are net gains.',
    values: [
      0.001, -0.057, 0.049, 0.068, 0.583, 0.014, 0.295, -0.25, 0.1, 0.567,
    ],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Net of items between operating income and net income other than income taxes: interest expense, interest income, other non-operating items, and equity-method and noncontrolling-interest results. Negative values mean these items added to earnings.',
    values: [
      0.665, 0.691, 0.37, 0.036, 0.028, 0.127, -0.089, 0.075, 0.107, -0.39,
    ],
  },
  {
    label: 'Interest income',
    desc: 'Interest earned on cash and marketable investments, shown as a negative expense.',
    values: [
      -0.041, -0.12, -0.205, -0.114, -0.037, -0.096, -0.468, -0.529, -0.496,
      -1.084,
    ],
    indent: 1,
  },
  {
    label: 'Interest expense',
    desc: 'Interest on notes, term loans, and finance leases. It fell in FY26 as Micron repaid $10.0B of debt.',
    values: [
      0.601, 0.342, 0.128, 0.194, 0.183, 0.189, 0.388, 0.562, 0.477, 0.106,
    ],
    indent: 1,
  },
  {
    label: 'Other non-operating (income) expense, net',
    desc: 'Losses on debt prepayments and repurchases, investment gains and losses, and other items. FY26 includes $511M of losses on debt prepayments.',
    values: [
      0.112, 0.465, 0.405, -0.06, -0.081, 0.038, -0.007, 0.031, 0.135, 0.647,
    ],
    indent: 1,
  },
  {
    label: 'Equity-method and noncontrolling interests',
    desc: 'Equity in the net income or loss of equity-method investees, and through FY20 the noncontrolling interest in IM Flash Technologies. Negative values are net income.',
    values: [
      -0.007, 0.004, 0.042, 0.016, -0.037, -0.004, -0.002, 0.011, -0.009,
      -0.059,
    ],
    indent: 1,
  },
  {
    label: 'Income tax provision',
    desc: 'Income tax provision as reported on the income statement. The effective rate was in single digits for most of the decade because of tax incentives in Singapore and other jurisdictions, and rose to 14.8% in FY26.',
    values: [
      0.114, 0.168, 0.693, 0.28, 0.394, 0.888, 0.177, 0.451, 1.124, 14.761,
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
  'FY26',
  'FY27E',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash, cash equivalents, and restricted cash: the sum of operating, investing, and financing activities plus the effect of exchange rates.',
    values: [
      0.953,
      1.371,
      0.692,
      0.411,
      0.139,
      0.51,
      0.317,
      -1.604,
      2.594,
      28.745,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for depreciation, stock-based compensation, and working capital changes. In FY26 a $25.2B rise in receivables was partly offset by growth in payables and other liabilities, for a net working-capital outflow of $5.7B.',
    values: [
      8.153,
      17.4,
      13.189,
      8.306,
      12.468,
      15.181,
      1.559,
      8.507,
      17.525,
      89.675,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities: capital expenditures net of government incentives, and purchases and sales of marketable securities.',
    values: [
      -7.537,
      -8.216,
      -10.085,
      -7.589,
      -10.589,
      -11.585,
      -6.191,
      -8.309,
      -14.087,
      -61.641,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Expenditures for property, plant, and equipment, gross of government incentives (CHIPS Act and other grants), which Micron reports separately as an investing inflow.',
    values: [
      -4.734,
      -8.879,
      -9.78,
      -8.223,
      -10.03,
      -12.067,
      -7.676,
      -8.386,
      -15.857,
      -30.712,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities: debt issuance and repayment, share repurchases, dividends, and, in FY26, $12.7B of customer contract liability deposits.',
    values: [
      0.349,
      -7.776,
      -2.438,
      -0.317,
      -1.781,
      -2.98,
      4.983,
      -1.842,
      -0.85,
      0.63,
      null,
    ],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures, before government incentives.',
    values: [
      3.419, 8.521, 3.409, 0.083, 2.438, 3.114, -6.117, 0.121, 1.668, 58.963,
      140.37,
    ],
  },
];

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Micron',
    actualYear: 'FY26',
    forwardYear: 'FY27E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 58.963,
        forward: 140.37,
      },
    ],
    startNote: 'consensus FY27E free cash flow',
    forwardNote:
      'Consensus FY27E free cash flow of $140.37B, as in the Cash Flow section.',
    sharesOutstanding: 1.13,
    netCash: 38.26,
    netCashSource:
      '$43.43B of cash, cash equivalents, and short-term investments minus $5.18B of debt, FY26 results; $30.0B of long-term marketable investments are excluded',
    assumptionNote:
      'Memory is deeply cyclical and FY27E sits near the top of a pricing cycle (free cash flow was -$6.1B in FY23), so the starting year is likely above a normal level.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY27E'],
  estimateNote:
    'FY27E values use consensus analyst estimates from stockanalysis.com (43 analysts as of 2 October 2026). Revenue, EPS, and FCF are consensus figures; net income and per-share FCF use the ~1.15B diluted shares in management’s FQ1-27 guidance. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end divided by GAAP diluted EPS.',
      values: [7.2, 4.6, 8.1, 19.5, 14.4, 7.4, null, 136.5, 16.1, 12.9, 6.7],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 12.9,
      guidanceCount: 1,
      yearNotes: {
        FY23: 'Not meaningful: Micron reported a net loss of $5.83B ($-5.34 per share) in the memory downturn.',
        FY24: 'Elevated because EPS of $0.70 reflected the trough of the cycle.',
        FY27E:
          'Calculated from $1,074.89 divided by consensus diluted EPS of $161.49.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per share.',
      values: [10.8, 7.6, 15.0, null, 34.6, 20.6, null, null, 82.4, 18.6, 8.8],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 18.6,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'Not meaningful: free cash flow was only $0.08B ($0.07 per share), which would put the ratio at 662×.',
        FY23: 'Not meaningful: free cash flow was negative (−$6.12B).',
        FY24: 'Not meaningful: free cash flow was only $0.12B ($0.11 per share), which would put the ratio at 869×.',
        FY27E:
          'Calculated from $1,074.89 divided by consensus FCF per share of $122.06 (FCF $140.37B / ~1.15B shares).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        4.41, 11.51, 5.51, 2.37, 5.14, 7.75, -5.34, 0.7, 7.59, 74.33, 161.49,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 5.33,
      guidanceCount: 1,
      yearNotes: {
        FY27E: 'Consensus analyst estimate (43 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [
        2.96, 6.93, 2.98, 0.07, 2.14, 2.78, -5.6, 0.11, 1.48, 51.59, 122.06,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 2.46,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $140.37B divided by ~1.15B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income divided by year-end shareholders’ equity.',
      values: [27.3, 43.8, 17.6, 6.9, 13.3, 17.4, -13.2, 1.7, 15.8, 61.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 16.6,
    },
    {
      label: 'ROIC %',
      desc: 'Operating income after tax at the effective rate, divided by year-end equity plus total debt. Loss years use pre-tax operating income.',
      values: [19.3, 40.1, 15.9, 6.0, 11.6, 15.5, -10.0, 1.4, 12.6, 59.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 14.1,
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Total debt including finance leases (current and long-term) divided by year-end shareholders’ equity.',
      values: [0.6, 0.14, 0.16, 0.17, 0.15, 0.14, 0.3, 0.3, 0.27, 0.04],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.17,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the share of net income retained after dividends. Micron began paying a dividend in FY22.',
      values: [27.3, 43.8, 17.6, 6.9, 13.3, 16.5, null, 0.6, 14.8, 61.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 16.5,
      yearNotes: {
        FY23: 'Not meaningful: net income was negative.',
      },
    },
    {
      label: 'Operating margin %',
      values: [28.9, 49.3, 31.5, 14.0, 22.7, 31.5, -37.0, 5.2, 26.1, 74.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 27.5,
    },
    {
      label: 'Net margin %',
      values: [
        25.0, 46.5, 27.0, 12.5, 21.2, 28.2, -37.5, 3.1, 22.8, 63.8, 74.1,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 23.9,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus EPS of $161.49 × ~1.15B shares ($185.7B) and consensus revenue of $250.52B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [16.8, 28.0, 14.6, 0.4, 8.8, 10.1, -39.4, 0.5, 4.5, 44.3, 56.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 9.5,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $140.37B and consensus revenue of $250.52B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Receivables divided by revenue, multiplied by 365. Measures how many days of revenue are tied up in uncollected receivables. Receivables include government incentive and other non-trade receivables.',
      values: [67.5, 65.8, 49.8, 66.6, 70.0, 60.9, 57.4, 96.2, 90.5, 99.2],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 67.1,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net income. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [1.6, 1.23, 2.09, 3.09, 2.13, 1.75, null, 10.93, 2.05, 1.06],
      format: { decimals: 2 },
      median10y: 2.05,
      yearNotes: {
        FY23: 'Not meaningful: net income was negative.',
        FY24: 'Elevated because depreciation of $7.8B kept operating cash flow far above near-zero net income.',
      },
    },
  ],
  revenueSection: {
    revenueDesc:
      'Consolidated revenue from DRAM, NAND, and other memory products.',
    operatingIncomeDesc:
      'Income from operations before interest and taxes. Negative in FY23 as memory prices collapsed and Micron wrote down inventory.',
    netIncomeDesc:
      'GAAP net income attributable to Micron. FY23 was a $5.83B loss.',
    chartNote:
      'Memory is a cyclical commodity business, so revenue and profits rise and fall with DRAM and NAND prices. FY18 marked a cycle peak and FY23 a trough. FY26 revenue more than tripled as AI data-center demand for HBM and server DRAM tightened supply. FY27E is the consensus analyst estimate.',
  },
  revenue: [
    { year: 'FY17', revenue: 20.32, operatingIncome: 5.87, netIncome: 5.09 },
    { year: 'FY18', revenue: 30.39, operatingIncome: 14.99, netIncome: 14.14 },
    { year: 'FY19', revenue: 23.41, operatingIncome: 7.38, netIncome: 6.31 },
    { year: 'FY20', revenue: 21.44, operatingIncome: 3.0, netIncome: 2.69 },
    { year: 'FY21', revenue: 27.71, operatingIncome: 6.28, netIncome: 5.86 },
    { year: 'FY22', revenue: 30.76, operatingIncome: 9.7, netIncome: 8.69 },
    { year: 'FY23', revenue: 15.54, operatingIncome: -5.75, netIncome: -5.83 },
    { year: 'FY24', revenue: 25.11, operatingIncome: 1.3, netIncome: 0.78 },
    { year: 'FY25', revenue: 37.38, operatingIncome: 9.77, netIncome: 8.54 },
    {
      year: 'FY26',
      revenue: 133.19,
      operatingIncome: 99.34,
      netIncome: 84.97,
    },
    {
      year: 'FY27E',
      revenue: 250.52,
      operatingIncome: null,
      netIncome: 185.71,
    },
  ],
  thesis: [
    'Micron is one of three companies, alongside Samsung and SK hynix, that make most of the world’s DRAM, so it profits directly when AI accelerators pull high-bandwidth memory and server DRAM capacity away from other markets.',
    'The business is deeply cyclical: operating margin ranged from −37% in FY23 to 75% in FY26, so the trailing P/E is lowest near cycle peaks, and an investor has to judge where in the cycle the industry sits rather than extrapolate the latest year.',
    'Capital intensity is the main risk, because capital expenditures consumed most of operating cash flow for most of the decade; the FY26 strategic customer agreements, which brought in $12.7B of prepayments, shift some of that burden to customers and may make future downturns shallower.',
  ],
};

export default financials;
