import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/FCF ratio',
      desc: 'Year-end market cap divided by free cash flow available to shareholders (FCFA2S), the metric Topicus and its parent CSU consider most representative of owner economics.',
      values: [null, 78.2, 62.3, 34.7, 33.7, 28.5, 17.8],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 34.7,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from the 18 Sep closing price of CA$89.60, ~83.5M basic shares, an approximate EUR/CAD rate of 0.645, and estimated FCFA2S of €271M (FY25 FCFA2S grown by the H1 2026 year-on-year FCFA2S growth rate of 24%).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'FCFA2S per share',
      desc: 'Free cash flow available to shareholders divided by diluted shares outstanding. Topicus uses FCFA2S as its primary profitability measure, excluding acquisition-related financing and preferred-share charges.',
      values: [0.67, 0.42, 0.95, 1.37, 1.72, 2.63, 3.25],
      format: { prefix: '€', decimals: 2 },
      median10y: 1.16,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from estimated FCFA2S of €271M (FY25 grown by 24% H1 2026 rate) divided by ~83.5M basic shares.',
      },
    },
    {
      label: 'Free cash flow margin %',
      desc: 'FCFA2S as a share of total revenue.',
      values: [17.6, 11.8, 6.0, 11.0, 13.7, 14.1, 15.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 12.8,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from estimated FCFA2S of €271M divided by consensus revenue of €1.80B.',
      },
    },
    {
      label: 'Organic revenue growth %',
      desc: 'Revenue growth excluding the contribution of acquired businesses, as reported by the company.',
      values: [null, 8, 4, 5, 5, 4],
      format: { suffix: '%', decimals: 0 },
      deltaMode: 'add',
      median10y: 5,
    },
  ],
  revenue: [
    { year: 'FY20', revenue: 0.494, operatingIncome: 0.091 },
    { year: 'FY21', revenue: 0.743, operatingIncome: 0.114 },
    { year: 'FY22', revenue: 0.917, operatingIncome: 0.114 },
    { year: 'FY23', revenue: 1.125, operatingIncome: 0.164 },
    { year: 'FY24', revenue: 1.295, operatingIncome: 0.206 },
    { year: 'FY25', revenue: 1.552, operatingIncome: 0.234 },
    { year: 'FY26E', revenue: 1.795, operatingIncome: null },
  ],
  thesis: [
    'Topicus operates the same serial-acquisition playbook as its parent Constellation Software, compounding capital at high returns by acquiring European vertical market software businesses with durable recurring revenue.',
    'Maintenance and subscription fees account for more than seventy percent of revenue, providing predictable cash flows that fund continued acquisitions without equity dilution.',
    'A decentralized operating model keeps acquired businesses autonomous, preserving domain expertise and founder cultures while the parent provides capital discipline and best-practice sharing across the portfolio.',
  ],
};

export default financials;

export const expenseYears = ['FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const revenueByYear = [0.494, 0.743, 0.917, 1.125, 1.295, 1.552];

export const expenseLines = [
  {
    label: 'Staff',
    desc: 'Employee compensation and benefits, the largest cost category. Includes salaries, wages, social charges, and pension contributions for all personnel.',
    values: [0.255, 0.398, 0.509, 0.625, 0.707, 0.835],
  },
  {
    label: 'Third-Party & Hardware',
    desc: 'Third-party licences, maintenance, professional services, and hardware purchased for customer engagements. Grouped because both represent external costs of fulfilling customer contracts.',
    values: [0.049, 0.075, 0.082, 0.1, 0.117, 0.157],
  },
  {
    label: 'Other Operating',
    desc: 'Occupancy, travel, telecommunications, supplies, professional fees, and other net operating items.',
    values: [0.018, 0.04, 0.077, 0.083, 0.095, 0.122],
  },
  {
    label: 'Depreciation',
    desc: 'Depreciation of property, plant and equipment, and right-of-use assets.',
    values: [0.019, 0.025, 0.028, 0.031, 0.034, 0.042],
  },
  {
    label: 'Amortization',
    desc: 'Amortization of acquired intangible assets — the IFRS-mandated non-cash charge on customer relationships, technology, and other intangibles recognized in acquisitions. This is the single largest non-cash cost.',
    values: [0.05, 0.085, 0.107, 0.121, 0.135, 0.163],
  },
];

export const cashFlowStatementYears = [
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
    desc: 'Net change in cash: the sum of operating, investing, and financing activities.',
    values: [0.028, 0.02, 0.061, 0.042, 0.027, 0.121, null],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges and working capital changes.',
    values: [0.152, 0.176, 0.203, 0.247, 0.348, 0.413, null],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income adjusted for non-cash charges (depreciation, amortization, impairments, redeemable preferred securities expense, finance costs, income tax expense) and cash taxes paid. Excludes working capital movements.',
    values: [0.141, 0.184, 0.202, 0.267, 0.321, 0.385, null],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net change in non-cash operating assets and liabilities: accounts receivable, inventory, accounts payable, unearned revenue, and other operating items.',
    values: [0.011, -0.008, 0.001, -0.02, 0.027, 0.028, null],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including acquisitions, capital expenditures, and investment purchases and sales.',
    values: [-0.074, -0.213, -0.133, -0.127, -0.11, -0.67, null],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Cash spent on acquisitions of businesses net of cash obtained, plus post-acquisition settlement payments. TOI acquires dozens of small European vertical market software businesses each year.',
    values: [-0.073, -0.209, -0.129, -0.119, -0.1, -0.274, null],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Cash spent on or received from equity investments and securities. FY25 includes the Asseco Poland stake acquisition for approximately €413M, partially offset by a €28M equity sale.',
    values: [0, 0, 0, 0, 0, -0.393, null],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment.',
    values: [-0.002, -0.005, -0.007, -0.008, -0.008, -0.011, -0.01],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Interest and dividends received, changes in restricted cash, and other investing activities.',
    values: [0.001, 0.001, 0.003, 0, -0.002, 0.008, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, including debt issuance and repayment, dividends, and lease payments.',
    values: [-0.05, 0.057, -0.008, -0.078, -0.212, 0.381, null],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Equity-related transactions including Vela Software Group contributions toward acquisitions and return of capital to non-controlling interests.',
    values: [0, 0.018, 0.007, 0, -0.009, 0, null],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Net proceeds from revolving credit facility draws, term loans, CSI and Vela Software Group loans, and bank indebtedness, less repayments. FY25 includes a €200M loan and expanded revolving facility to fund the Asseco Poland investment.',
    values: [-0.03, 0.122, 0.087, -0.052, 0.055, 0.446, null],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Dividends paid to shareholders, non-controlling interests, and redeemable preferred securities holders. FY24 includes a €128M special dividend to shareholders alongside NCI dividends.',
    values: [0, -0.055, -0.067, -0.002, -0.208, -0.004, null],
    indent: 1,
  },
  {
    label: 'Other financing cash flow items',
    desc: 'Interest paid on lease obligations and credit facilities, lease obligation payments, credit facility transaction costs, and other financing activities.',
    values: [-0.02, -0.028, -0.035, -0.024, -0.05, -0.061, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures.',
    values: [0.149, 0.172, 0.196, 0.24, 0.34, 0.403, 0.39],
  },
];
