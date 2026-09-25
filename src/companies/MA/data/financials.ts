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
  12.497, 14.95, 16.883, 15.301, 18.884, 22.237, 25.098, 28.167, 32.791,
];

export const expenseLines = [
  {
    label: 'General & administrative',
    desc: 'Personnel costs, technology and communications, professional fees, and other administrative expenses. This is Mastercard’s largest cost line and includes the workforce cost of approximately 39,800 employees.',
    values: [4.653, 5.174, 5.763, 5.91, 7.087, 8.078, 8.927, 10.193, 11.318],
  },
  {
    label: 'Advertising & marketing',
    desc: 'Sponsorship fees, advertising, promotional, and acceptance development activities. Fell sharply in FY20 as Mastercard cut marketing spend during COVID-19.',
    values: [0.771, 0.907, 0.934, 0.657, 0.895, 0.789, 0.825, 0.815, 0.929],
  },
  {
    label: 'Depreciation & amortization',
    desc: 'Depreciation of property and equipment and amortization of capitalized software. The jump in FY25 reflects increased technology investment and recent acquisitions.',
    values: [0.436, 0.459, 0.522, 0.58, 0.726, 0.75, 0.799, 0.897, 1.143],
  },
  {
    label: 'Provision for litigation',
    desc: 'Charges for legal settlements and estimated litigation losses. The $1.1B spike in FY18 was the U.S. merchant class action settlement; FY19 had no material provision.',
    values: [0.015, 1.128, 0.0, 0.073, 0.094, 0.356, 0.539, 0.68, 0.504],
  },
];

export const cashFlowYears = ['FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const cashFlowRevenue = [15.301, 18.884, 22.237, 25.098, 28.167, 32.791];

export const cashFlowLines = [
  {
    label: 'Cash operating costs',
    desc: 'Revenue minus operating cash flow. Absorbs working capital movements and non-cash adjustments, so year-to-year changes partly reflect timing rather than structural cost changes.',
    values: [8.077, 9.421, 11.042, 13.118, 13.387, 15.143],
  },
  {
    label: 'CapEx',
    desc: 'Purchases of property and equipment plus capitalized software development costs.',
    values: [0.708, 0.814, 1.097, 1.088, 1.194, 1.215],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E EPS of $19.93 and revenue of $37.26B are consensus analyst estimates from 37 analysts as of September 2026. FY26E FCF per share is estimated from consensus free cash flow. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end price divided by GAAP diluted EPS.',
      values: [40.0, 32.6, 36.6, 54.8, 40.3, 33.6, 35.8, 37.9, 34.6, 28.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 36.2,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'GAAP EPS of $3.65 was depressed by an $873M provisional charge for the Tax Cuts and Jobs Act, inflating the P/E.',
        FY18: 'GAAP EPS of $5.60 was depressed by a $1,128M provision for the U.S. merchant class action settlement.',
        FY20: 'P/E elevated because COVID-19 depressed EPS while the market priced in recovery.',
        FY26E:
          'Calculated from $566.08 divided by consensus diluted EPS of $19.93.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Year-end price divided by free cash flow per share. FCF is operating cash flow minus total capital expenditures including capitalized software.',
      values: [30.1, 33.5, 40.1, 53.9, 40.5, 33.1, 36.8, 35.9, 31.5, 29.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 34.7,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'FCF per share dropped as COVID-19 reduced operating cash flow.',
        FY26E:
          'Calculated from $566.08 divided by estimated FCF per share of $19.50.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share.',
      values: [3.65, 5.6, 7.94, 6.37, 8.76, 10.22, 11.83, 13.89, 16.52, 19.93],
      format: { prefix: '$', decimals: 2 },
      median10y: 9.49,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by $873M Tax Cuts and Jobs Act provisional charge.',
        FY26E: 'Consensus analyst estimate for GAAP diluted EPS.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus total capital expenditures (property, equipment, and capitalized software), divided by diluted shares outstanding. FY17–FY19 include estimated capitalized software based on balance sheet changes.',
      values: [4.84, 5.46, 7.25, 6.48, 8.72, 10.4, 11.51, 14.66, 18.14, 19.5],
      format: { prefix: '$', decimals: 2 },
      median10y: 9.56,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Derived from consensus free cash flow estimate.',
      },
    },
    {
      label: 'Operating margin %',
      desc: 'Operating income as a share of net revenue.',
      values: [53.0, 48.7, 57.2, 52.8, 53.4, 55.2, 55.8, 55.3, 57.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 55.2,
      yearNotes: {
        FY18: 'Depressed by $1.1B merchant class action litigation provision. Excluding the provision, operating margin was approximately 56%.',
      },
    },
    {
      label: 'Net margin %',
      desc: 'GAAP net income as a share of net revenue.',
      values: [31.3, 39.2, 48.1, 41.9, 46.0, 44.7, 44.6, 45.7, 45.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 44.7,
      yearNotes: {
        FY17: 'Depressed by the $873M TCJA charge.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of net revenue.',
      values: [41.5, 38.2, 44.0, 42.6, 45.8, 45.4, 43.4, 48.2, 50.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 44.0,
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 12.497, operatingIncome: 6.622 },
    { year: 'FY18', revenue: 14.95, operatingIncome: 7.282 },
    { year: 'FY19', revenue: 16.883, operatingIncome: 9.664 },
    { year: 'FY20', revenue: 15.301, operatingIncome: 8.081 },
    { year: 'FY21', revenue: 18.884, operatingIncome: 10.082 },
    { year: 'FY22', revenue: 22.237, operatingIncome: 12.264 },
    { year: 'FY23', revenue: 25.098, operatingIncome: 14.008 },
    { year: 'FY24', revenue: 28.167, operatingIncome: 15.582 },
    { year: 'FY25', revenue: 32.791, operatingIncome: 18.897 },
    { year: 'FY26E', revenue: 37.26, operatingIncome: null },
  ],
  thesis: [
    'Mastercard operates a two-sided payment network that connects cardholders and merchants through issuing and acquiring banks, earning a toll-like fee on every transaction without taking credit risk, which produces operating margins above 55% and predictable revenue growth tied to the secular shift from cash to electronic payments.',
    'Value-Added Services and Solutions, which includes cyber security, analytics, consulting, loyalty programs, and real-time payment processing, now accounts for over 40% of revenue and is growing at roughly double the rate of the core payment network, deepening Mastercard’s integration into the payments ecosystem beyond pure transaction processing.',
    'Aggressive share buybacks consistently reduce the diluted share count by 2–3% per year, amplifying per-share growth in earnings and free cash flow beyond the already strong revenue growth of the underlying business.',
  ],
};

export default financials;
