import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

export const expenseYears = [
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
  6.258, 6.699, 7.442, 8.297, 11.181, 12.497, 14.208, 15.336,
];

export const expenseLines = [
  {
    label: 'Operating & SG&A',
    desc: 'Operating-related expenses and selling, general and administrative expenses combined. Includes personnel costs, technology, occupancy, professional fees, and all other operating overhead.',
    values: [3.262, 3.269, 3.619, 3.898, 7.149, 7.3, 7.557, 7.98],
  },
  {
    label: 'Depreciation',
    desc: 'Depreciation of property, plant and equipment.',
    values: [0.084, 0.082, 0.083, 0.082, 0.108, 0.101, 0.096, 0.11],
  },
  {
    label: 'Amortization of intangibles',
    desc: 'Amortization of acquired intangible assets. Jumped from approximately $100M to over $900M annually after the IHS Markit merger closed in February 2022, reflecting the approximately $22B in intangible assets recognized in the acquisition.',
    values: [0.122, 0.122, 0.123, 0.096, 0.905, 1.042, 1.077, 1.069],
  },
];

export const cashFlowYears = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const cashFlowRevenue = [8.297, 11.181, 12.497, 14.208, 15.336];

export const cashFlowLines = [
  {
    label: 'Cash operating costs',
    desc: 'Revenue minus operating cash flow. Absorbs working capital movements, so year-to-year swings partly reflect timing of receivables and payables rather than structural cost changes.',
    values: [4.699, 8.578, 8.787, 8.519, 9.685],
  },
  {
    label: 'Cash taxes paid',
    desc: 'Income taxes actually paid in cash during the fiscal year, which can differ materially from the GAAP tax provision due to timing, deferred taxes, and merger-related adjustments.',
    values: [0.883, 1.555, 1.279, 1.159, 1.502],
  },
  {
    label: 'CapEx',
    desc: 'Purchases of property, equipment, and internally developed software.',
    values: [0.035, 0.089, 0.143, 0.124, 0.195],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E EPS uses the midpoint of SPGI GAAP diluted EPS guidance of $16.35-$16.60 (Q2 2026 earnings release, reaffirmed post-Mobility spin-off). FY26E FCF per share is estimated from SPGI H2 2026 adjusted FCF guidance of $2.9-3.1B and H1 2026 cash flow. FY26E revenue is derived from SPGI guidance of 5.9-7.9% revenue growth. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end price divided by GAAP diluted EPS. Post-merger GAAP EPS is depressed by approximately $3.00-3.50 per share in non-cash intangible amortization from the IHS Markit acquisition.',
      values: [29.3, 22.0, 31.7, 34.0, 37.7, 32.8, 53.5, 40.3, 35.6, 24.5],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 34.0,
      guidanceCount: 1,
      yearNotes: {
        FY22: 'GAAP EPS of $10.20 was inflated by a $1.9B gain on the sale of Engineering Solutions.',
        FY23: 'GAAP EPS of $8.23 dropped as the FY22 disposition gain fell away and IHS Markit integration costs continued.',
        FY26E:
          'Calculated from $403.81 divided by GAAP EPS guidance midpoint of $16.48.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Year-end price divided by free cash flow per share. FCF is less distorted than GAAP earnings by the non-cash intangible amortization from the IHS Markit merger.',
      values: [24.0, 23.3, 26.5, 24.0, 31.9, 42.4, 39.4, 27.9, 29.2, 22.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 27.9,
      guidanceCount: 1,
      yearNotes: {
        FY22: 'FCF per share dropped from $14.78 to $7.90 as merger integration consumed cash and the share count increased by approximately 80M from the stock-for-stock deal.',
        FY26E:
          'Calculated from $403.81 divided by estimated FCF per share of $18.00.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share. Post-merger (FY22 onward) EPS is depressed by approximately $3.00-3.50 of non-cash amortization of IHS Markit intangible assets annually.',
      values: [5.78, 7.73, 8.6, 9.66, 12.51, 10.2, 8.23, 12.35, 14.66, 16.48],
      format: { prefix: '$', decimals: 2 },
      median10y: 9.66,
      guidanceCount: 1,
      yearNotes: {
        FY26E: 'Midpoint of SPGI GAAP diluted EPS guidance of $16.35-$16.60.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus capital expenditures, divided by diluted shares outstanding.',
      values: [7.07, 7.28, 10.32, 13.69, 14.78, 7.9, 11.18, 17.84, 17.89, 18.0],
      format: { prefix: '$', decimals: 2 },
      median10y: 11.18,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Estimated from SPGI H2 2026 adjusted FCF guidance of $2.9-3.1B and H1 2026 operating cash flow.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of total revenue. FCF is a more representative profitability measure than GAAP net income because it excludes non-cash intangible amortization.',
      values: [29.4, 28.7, 37.6, 44.3, 42.9, 22.5, 28.5, 39.2, 35.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 35.6,
    },
    {
      label: 'Net margin %',
      desc: 'GAAP net income as a share of total revenue. Post-merger margins are compressed by non-cash intangible amortization of approximately seven percent of revenue annually.',
      values: [24.0, 30.5, 31.3, 31.3, 36.3, 29.1, 21.0, 27.1, 29.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 29.1,
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 6.063, operatingIncome: 2.61 },
    { year: 'FY18', revenue: 6.258, operatingIncome: 2.79 },
    { year: 'FY19', revenue: 6.699, operatingIncome: 3.226 },
    { year: 'FY20', revenue: 7.442, operatingIncome: 3.617 },
    { year: 'FY21', revenue: 8.297, operatingIncome: 4.221 },
    { year: 'FY22', revenue: 11.181, operatingIncome: 3.019 },
    { year: 'FY23', revenue: 12.497, operatingIncome: 4.054 },
    { year: 'FY24', revenue: 14.208, operatingIncome: 5.478 },
    { year: 'FY25', revenue: 15.336, operatingIncome: 6.177 },
    { year: 'FY26E', revenue: 15.6, operatingIncome: null },
  ],
  thesis: [
    'S&P Global operates essential financial infrastructure, including credit ratings, market data, analytics, benchmarks, and commodity price assessments, that its customers cannot easily replace, producing subscription-like recurring revenue with strong pricing power.',
    'The IHS Markit merger created cross-selling opportunities across Market Intelligence, Energy, and Mobility divisions while generating over $600M in annual cost synergies, with operating margins recovering toward pre-merger levels as integration costs wind down.',
    'Free cash flow conversion consistently exceeds GAAP net income because the approximately $1B annual amortization of IHS Markit intangible assets is a non-cash charge that depresses reported earnings without consuming cash, supporting robust dividends and share buybacks.',
  ],
};

export default financials;
