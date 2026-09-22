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

export const cashFlowLines = [
  {
    label: 'Cash Operating Costs',
    desc: 'Operating expenses on a cash basis: staff, third-party, and other operating costs, excluding depreciation and amortization.\nShown as a percentage of total revenue.',
    values: [0.322, 0.513, 0.668, 0.808, 0.919, 1.114],
  },
  {
    label: 'Cash Taxes Paid',
    desc: 'Income taxes actually paid in cash during the period.\nShown as a percentage of total revenue.',
    values: [0.02, 0.039, 0.046, 0.05, 0.055, 0.054],
  },
  {
    label: 'CapEx',
    desc: 'Capital expenditures on property and equipment.\nShown as a percentage of total revenue.',
    values: [0.002, 0.005, 0.007, 0.008, 0.008, 0.011],
  },
];
