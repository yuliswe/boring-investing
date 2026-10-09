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
  12.646, 20.572, 22.26, 22.489, 27.131, 33.671, 34.233, 35.441, 34.187,
];

export const expenseLines = [
  {
    label: 'Total costs and expenses',
    desc: 'Every cost line Lennar reports between total revenues and its non-operating items: segment costs for Homebuilding, Financial Services, Multifamily and Lennar Other, corporate general and administrative expense, the charitable foundation contribution, and FY18 CalAtlantic acquisition costs.',
    values: [
      11.307, 18.734, 19.798, 19.373, 22.052, 26.95, 28.867, 30.672, 31.519,
    ],
  },
  {
    label: 'Homebuilding',
    desc: 'Costs and expenses of the Homebuilding segment, which builds and sells single-family attached and detached homes.',
    values: [
      9.743, 16.937, 18.246, 17.962, 20.503, 25.161, 27.224, 28.809, 29.285,
    ],
    indent: 1,
  },
  {
    label: 'Costs of homes sold',
    desc: 'Land, lot development, construction and capitalized interest for homes delivered, plus inventory valuation adjustments. FY18 includes purchase accounting on CalAtlantic homes.',
    values: [
      8.601, 15.122, 16.324, 16.092, 18.562, 23.025, 24.9, 26.255, 26.424,
    ],
    indent: 2,
  },
  {
    label: 'Costs of land sold',
    desc: 'Book cost of land and lots sold to third parties rather than built on.',
    values: [0.135, 0.207, 0.207, 0.172, 0.144, 0.172, 0.092, 0.074, 0.183],
    indent: 2,
  },
  {
    label: 'Selling, general and administrative',
    desc: 'Homebuilding sales commissions, marketing, and division overhead.',
    values: [1.016, 1.608, 1.715, 1.697, 1.797, 1.964, 2.231, 2.48, 2.678],
    indent: 2,
  },
  {
    label: 'Financial Services',
    desc: 'Costs of the mortgage, title and insurance businesses that serve Lennar homebuyers.',
    values: [0.697, 0.755, 0.6, 0.471, 0.408, 0.426, 0.467, 0.532, 0.586],
    indent: 1,
  },
  {
    label: 'Multifamily',
    desc: 'Costs of the Multifamily segment, which develops, builds and sells rental apartment communities.',
    values: [0.407, 0.43, 0.6, 0.576, 0.653, 0.849, 0.574, 0.521, 0.75],
    indent: 1,
  },
  {
    label: 'Lennar Other',
    desc: 'Costs of the Lennar Other segment, which holds the remaining Rialto assets and Lennar’s strategic investments. FY17 and FY18 are recast to fold in the former Rialto segment.',
    values: [0.175, 0.116, 0.012, 0.007, 0.031, 0.032, 0.028, 0.079, 0.179],
    indent: 1,
  },
  {
    label: 'Corporate general and administrative',
    desc: 'Corporate overhead not charged to a segment.',
    values: [0.286, 0.344, 0.341, 0.333, 0.398, 0.414, 0.501, 0.649, 0.637],
    indent: 1,
  },
  {
    label: 'Charitable foundation contribution',
    desc: 'Lennar donates $1,000 to the Lennar Foundation for every home it delivers, a practice it began partway through FY20.',
    values: [0, 0, 0, 0.025, 0.06, 0.066, 0.073, 0.08, 0.083],
    indent: 1,
  },
  {
    label: 'CalAtlantic acquisition and integration costs',
    desc: 'One-time costs of acquiring and integrating CalAtlantic Group in FY18.',
    values: [0, 0.153, 0, 0, 0, 0, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Equity in earnings or losses of unconsolidated joint ventures, other income and expense, and gains or losses on technology investments, across all segments. Negative values mean the items added to earnings.',
    values: [
      0.149, -0.425, 0.027, -0.008, -0.741, 0.707, 0.164, -0.415, -0.146,
    ],
  },
  {
    label: 'Technology investment (gains) losses',
    desc: 'Gains and losses on Lennar Other’s investments in publicly traded technology companies, which are marked to market each period.',
    values: [0, 0, 0, 0, -0.511, 0.655, 0.05, -0.025, -0.13],
    indent: 1,
  },
  {
    label: 'Equity earnings, other income and gains, net',
    desc: 'Equity in earnings or losses of unconsolidated entities and other income and expense across segments. FY17 includes a $140M litigation charge; FY18 includes a $296M gain on selling the Rialto platform; FY25 includes a $156M loss on the Millrose exchange offer.',
    values: [0.149, -0.425, 0.027, -0.008, -0.23, 0.052, 0.114, -0.39, -0.016],
    indent: 1,
  },
  {
    label: 'Provision for income taxes',
    desc: 'Income tax expense as reported.',
    values: [0.418, 0.545, 0.592, 0.656, 1.363, 1.366, 1.241, 1.217, 0.706],
  },
  {
    label: 'Noncontrolling interests',
    desc: 'Net earnings attributable to partners in consolidated joint ventures, which are excluded from net earnings attributable to Lennar.',
    values: [-0.039, 0.022, -0.007, 0.003, 0.026, 0.034, 0.023, 0.035, 0.03],
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
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash, cash equivalents and restricted cash for the year.',
    values: [1.332, -1.098, -0.127, 1.464, 0.023, 1.86, 1.755, -1.581, -1.159],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. Land purchases and home construction run through inventory, so operating cash flow falls when Lennar grows its land book and rises when it slows land spending.',
    values: [0.982, 1.692, 1.482, 4.191, 2.533, 3.266, 5.18, 2.403, 0.217],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash from investing activities, mainly contributions to and distributions from unconsolidated joint ventures, acquisitions, and purchases of operating properties and equipment.',
    values: [
      -0.845, -0.594, 0.02, -0.28, -0.105, -0.128, -0.177, -0.303, 0.222,
    ],
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, including debt issuance and repayment, share repurchases and dividends.',
    values: [
      1.194, -2.196, -1.629, -2.447, -2.405, -1.277, -3.248, -3.682, -1.598,
    ],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus purchases of operating properties and equipment.',
    values: [0.871, 1.561, 1.396, 4.118, 2.468, 3.208, 5.08, 2.232, 0.028],
  },
];

const cycleYears = [
  'FY05',
  'FY06',
  'FY07',
  'FY08',
  'FY09',
  'FY10',
  'FY11',
  'FY12',
  'FY13',
  'FY14',
  'FY15',
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

export const cycle = {
  years: cycleYears,
  ptbv: {
    LEN: [
      1.82, 1.53, 0.67, 0.44, 0.97, 1.1, 1.3, 2.16, 1.77, 2.03, 1.93, 1.43,
      1.96, 1.27, 1.53, 1.65, 1.83, 1.24, 1.57, 1.93, 1.77,
    ],
    DHI: [
      2.37, 1.28, 0.73, 1.46, 1.52, 1.36, 1.1, 1.86, 1.56, 1.49, 1.86, 1.68,
      1.95, 1.79, 1.97, 2.36, 2.03, 1.2, 1.6, 2.46, 2.08,
    ],
    PHM: [
      1.83, 1.39, 0.65, 1.03, 1.8, 1.67, 1.36, 3.44, 1.72, 1.69, 1.34, 1.3,
      2.38, 1.53, 1.97, 1.79, 1.94, 1.17, 2.14, 1.84, 1.75,
    ],
  },
  roe: {
    LEN: [
      29.1, 10.8, -40.8, -34.4, -16.5, 3.8, 3.5, 22.2, 12.7, 14.2, 15.3, 14.4,
      10.9, 15.1, 12.1, 14.5, 22.8, 20.5, 15.5, 14.4, 8.3,
    ],
    DHI: [
      31.6, 20.9, -11.8, -62.5, -21.0, 9.8, 2.7, 30.8, 12.1, 11.6, 13.6, 14.0,
      14.3, 17.5, 17.0, 21.7, 31.2, 34.2, 22.6, 19.8, 14.5,
    ],
    PHM: [
      28.5, 11.0, -41.4, -41.2, -39.2, -41.2, -10.3, 10.0, 76.6, 10.0, 10.3,
      12.8, 10.2, 22.8, 19.8, 23.4, 27.7, 31.9, 27.0, 27.4, 17.7,
    ],
  },
};

export const peers = {
  currentPtbv: { LEN: 1.06, DHI: 1.6, PHM: 1.68, NVR: 4.8 },
  medianPtbv: { LEN: 1.55, DHI: 1.64, PHM: 1.71, NVR: 4.87 },
  cycleRoe: { LEN: 7.0, DHI: 10.6, PHM: 8.3, NVR: 31.1 },
  ttmRoe: { LEN: 5.9, DHI: 12.7, PHM: 14.9, NVR: 31.5 },
};

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Lennar',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Consensus free cash flow',
        column: 'Consensus',
        phrase: 'from consensus FY26E free cash flow',
        actual: 0.028,
        forward: 0.632,
      },
      {
        label: 'Normalised free cash flow',
        column: 'Normalised',
        phrase: 'from normalised free cash flow',
        actual: 0.028,
        forward: 2.33,
      },
    ],
    startNote: 'either consensus FY26E free cash flow or the FY17–FY25 average',
    forwardNote:
      'Consensus FY26E free cash flow of $0.63B, near the bottom of the land cycle, and a normalised $2.33B, the FY17–FY25 average.',
    sharesOutstanding: 0.2379,
    netCash: -3.15,
    netCashSource:
      '$4.30B of homebuilding debt minus $1.15B of homebuilding cash, Q3 FY26 10-Q; mortgage warehouse debt is excluded because loans held for sale back it',
    assumptionNote:
      'Homebuilder free cash flow swings by billions with land and inventory spending, so a single year says more about the land cycle than about earning power.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E revenue of $31.54B and net income of $1.17B are consensus analyst estimates from stockanalysis.com (S&P Global, as of 1 October 2026). Consensus EPS there is adjusted, so the GAAP EPS shown here is consensus net income divided by the 237.9M shares outstanding on the Q3 FY26 10-Q. Homes delivered is the midpoint of Lennar’s FY26 guidance of 80,000 to 81,000 homes from its Q3 FY26 earnings release. FY26E P/TBV uses tangible book value at 31 August 2026 and recalculates from the adjusted price.',
  criticalSection: {
    title: 'Book Value and Returns',
    kicker:
      'Price-to-tangible-book is the anchor for a homebuilder, whose balance sheet is mostly land and homes under construction. It is read beside return on equity, because a multiple of book is only earned by returns above the cost of equity.',
    chartNote:
      'P/TBV is the fiscal year-end price divided by tangible book value per share (stockholders’ equity less goodwill, over Class A and Class B shares outstanding). ROE is net earnings attributable to Lennar divided by average stockholders’ equity. The dashed line is the FY17–FY25 median.',
  },
  criticalMetrics: [
    {
      label: 'P/TBV ratio',
      desc: 'Fiscal year-end price of Class A shares divided by tangible book value per share. Tangible book value is stockholders’ equity attributable to Lennar less goodwill; Lennar reports no other intangible assets.',
      values: [1.96, 1.27, 1.53, 1.65, 1.83, 1.24, 1.57, 1.93, 1.77, 1.06],
      format: { suffix: 'x', decimals: 2 },
      invertColor: true,
      median10y: 1.65,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'The CalAtlantic acquisition added $3.5B of goodwill and $5.1B of new stock, so price-to-book fell to 0.95x while price-to-tangible-book was 1.27x.',
        FY25: 'Tangible book fell from $90.36 to $74.20 a share after Lennar spun off Millrose Properties, which reduced equity by $4.8B.',
        FY26E:
          'Calculated from $79.81 divided by tangible book value of $75.35 a share at 31 August 2026.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net earnings attributable to Lennar divided by the average of beginning and ending stockholders’ equity.',
      values: [10.9, 15.1, 12.1, 14.5, 22.8, 20.5, 15.5, 14.4, 8.3, 5.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 14.5,
      guidanceCount: 1,
      yearNotes: {
        FY21: 'Includes $511M of unrealized gains on technology investments.',
        FY22: 'Includes $655M of losses on technology investments.',
        FY25: 'Gross margin on home sales fell from 22.3% to 17.7% while deliveries reached a record 82,583 homes.',
        FY26E:
          'Consensus net income of $1.17B divided by the average of equity at 30 November 2025 ($21.96B) and 31 August 2026 ($21.56B).',
      },
    },
  ],
  keySection: {
    kicker:
      'The drivers behind book value and returns, which are tangible book per share, per-share earnings, the margin and volume of homes delivered, and net margin.',
  },
  keyMetrics: [
    {
      label: 'Tangible book value per share',
      desc: 'Stockholders’ equity attributable to Lennar less goodwill, divided by Class A and Class B shares outstanding at fiscal year-end.',
      values: [31.97, 33.62, 38.91, 45.93, 57.39, 70.63, 81.68, 90.36, 74.2],
      format: { prefix: '$', decimals: 2 },
      median10y: 57.39,
      yearNotes: {
        FY25: 'The Millrose Properties spin-off reduced retained earnings by $4.8B, and the Millrose exchange offer added a $1.0B treasury purchase.',
      },
    },
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share attributable to Lennar.',
      values: [3.38, 5.44, 5.74, 7.85, 14.27, 15.72, 13.73, 14.31, 7.98, 4.93],
      format: { prefix: '$', decimals: 2 },
      median10y: 7.98,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus net income of $1.17B divided by 237.9M shares outstanding at 31 August 2026.',
      },
    },
    {
      label: 'Gross margin on home sales %',
      desc: 'Sales of homes less costs of homes sold, as a share of sales of homes, as reported in MD&A.',
      values: [22.1, 19.6, 20.6, 22.8, 26.8, 27.5, 23.3, 22.3, 17.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.3,
      yearNotes: {
        FY18: '21.8% excluding purchase accounting on CalAtlantic homes.',
      },
    },
    {
      label: 'Homes delivered',
      desc: 'Homes delivered to buyers, including those built by unconsolidated joint ventures.',
      values: [
        29394, 45627, 51491, 52925, 59825, 66399, 73087, 80210, 82583, 80500,
      ],
      format: { decimals: 0 },
      median10y: 59825,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'Includes CalAtlantic from February 2018.',
        FY26E:
          'Midpoint of guidance of 80,000 to 81,000 homes, lowered from 82,000 to 83,000.',
      },
    },
    {
      label: 'Average sales price ($K)',
      desc: 'Average sales price of homes delivered, in thousands of dollars. FY17–FY20 exclude unconsolidated entities.',
      values: [376, 413, 400, 395, 424, 480, 446, 423, 391],
      format: { prefix: '$', suffix: 'K', decimals: 0 },
      median10y: 413,
    },
    {
      label: 'Net margin %',
      desc: 'Net earnings attributable to Lennar divided by total revenues.',
      values: [6.4, 8.2, 8.3, 11.0, 16.3, 13.7, 11.5, 11.1, 6.1, 3.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 11.0,
      guidanceCount: 1,
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 12.646, operatingIncome: 1.339, netIncome: 0.81 },
    { year: 'FY18', revenue: 20.572, operatingIncome: 1.837, netIncome: 1.696 },
    { year: 'FY19', revenue: 22.26, operatingIncome: 2.461, netIncome: 1.849 },
    { year: 'FY20', revenue: 22.489, operatingIncome: 3.116, netIncome: 2.465 },
    { year: 'FY21', revenue: 27.131, operatingIncome: 5.078, netIncome: 4.43 },
    { year: 'FY22', revenue: 33.671, operatingIncome: 6.721, netIncome: 4.614 },
    { year: 'FY23', revenue: 34.233, operatingIncome: 5.367, netIncome: 3.939 },
    { year: 'FY24', revenue: 35.441, operatingIncome: 4.77, netIncome: 3.933 },
    { year: 'FY25', revenue: 34.187, operatingIncome: 2.668, netIncome: 2.078 },
    { year: 'FY26E', revenue: 31.54, operatingIncome: null, netIncome: 1.173 },
  ],
  revenueSection: {
    revenueDesc: 'Total revenues from all segments.',
    operatingIncomeDesc:
      'Lennar does not report operating income, so this line is total revenues less total costs and expenses, before equity earnings, other income and technology investment results. There is no consensus estimate on this basis for FY26E.',
    netIncomeDesc: 'Net earnings attributable to Lennar.',
    chartNote:
      'FY18 revenue jumped 63% when Lennar acquired CalAtlantic in February 2018. FY25 revenue fell 3.5% although deliveries rose 3%, because the average sales price fell from $423K to $391K.',
  },
  thesis: [
    'At $79.81 Lennar trades at 1.06x tangible book, below every fiscal year-end since FY09 and well under its FY06–FY25 median of 1.55x, while D.R. Horton and PulteGroup trade near their own medians at 1.60x and 1.68x.',
    'The discount tracks returns. Deliveries reached a record in FY25 while gross margin on home sales fell from 27.5% in FY22 to 15.8% in Q3 FY26, and trailing ROE is 5.9% against 12.7% at D.R. Horton and 14.9% at PulteGroup.',
    'Across the full cycle, Lennar averaged 7.0% ROE from FY06 to FY25 because of losses of 41%, 34% and 17% of equity in FY07–FY09. Its median year earned 13.4%, so whether 1.06x is cheap depends on margins recovering toward that median rather than staying at today’s level.',
  ],
};

export default financials;
