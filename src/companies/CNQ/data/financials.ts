import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Canadian Natural',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 8.315,
        forward: 13.31,
      },
    ],
    startNote: 'consensus FY26E free cash flow',
    forwardNote:
      'Consensus FY26E free cash flow of CA$13.31B (stockanalysis.com, S&P Global data, October 2026). It rests on the consensus view of 2026 oil prices, which were far above 2025 levels when the estimate was made.',
    sharesOutstanding: 2.0615,
    sharesSource:
      '2,061,500,000 common shares outstanding at 4 August 2026, Q2 2026 MD&A',
    netCash: -17.565,
    netCashSource:
      'CA$17.14B of long-term debt (including the current portion, bank facilities and commercial paper) plus CA$3.04B of lease liabilities, minus CA$2.62B of cash, at 30 June 2026 (Q2 2026 interim statements)',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E EPS of CA$6.55 is the consensus adjusted EPS of 12 analysts, revenue of CA$49.18B is the consensus of 7 analysts, and free cash flow of CA$13.31B is the stockanalysis.com consensus (S&P Global data, October 2026). Production is the midpoint of management guidance of 1,637–1,682 MBOE/d (6 August 2026). P/E and P/FCF recalculate from the adjusted price.',
  criticalSection: {
    chartNote:
      'Lower is cheaper on both. For an oil producer both ratios look cheapest near a price peak (FY21–FY22) and most expensive near a trough (FY17, FY20), so read the forward year against the commodity prices behind the consensus. FY20 P/E is blank because of the net loss. 10Y median shown as dashed line.',
  },
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the TSX closing price on the last trading day of each year, divided by that year’s diluted EPS, both adjusted for the June 2024 two-for-one split. FY26E uses the live price and consensus adjusted EPS.\nWhat to watch for: compare it with its own cycle median. A low P/E when oil prices are high is not a bargain, because earnings are likely to fall with the price.',
      values: [22.1, 15.5, 9.3, null, 8.3, 7.9, 11.6, 15.6, 9.0, 11.7],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 10.5,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'Net loss of CA$435M as WTI averaged US$39.40 during the pandemic, so the ratio is not meaningful.',
        FY24: 'EPS was cut by a CA$955M foreign exchange loss on US dollar debt as the Canadian dollar weakened.',
        FY25: 'EPS includes a CA$3.83B after-tax non-cash gain on the AOSP asset swap and CA$1.78B of non-cash depletion charges. On adjusted net earnings from operations of CA$7.44B, the P/E would be about 13.',
        FY26E:
          'Calculated from CA$76.78 divided by consensus adjusted EPS of CA$6.55 from 12 analysts.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Share price divided by free cash flow per share.\nHow it is calculated: the year-end TSX close divided by operating cash flow minus net capital expenditures on property, plant and equipment and on exploration and evaluation assets, per diluted share. FY26E uses the live price and consensus free cash flow.\nWhat to watch for: less distorted than P/E by the large non-cash items in a producer’s earnings. Working capital swings with oil prices can still move a single year.',
      values: [20.7, 7.1, 9.6, 16.8, 6.4, 6.1, 12.9, 11.9, 11.7, 12.1],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 11.7,
      guidanceCount: 1,
      yearNotes: {
        FY23: 'Operating cash flow fell by CA$7.0B as oil prices eased and CA$2.4B went into working capital. Cash taxes paid of CA$3.32B were well above the year’s current tax expense of CA$1.88B.',
        FY26E:
          'Calculated from CA$76.78 divided by an estimated CA$6.34 of free cash flow per share, which is consensus free cash flow of CA$13.31B over FY25 diluted shares of 2,098M.',
      },
    },
  ],
  keySection: {
    kicker:
      'Production per share, earnings and cash flow per share, dividends, returns, leverage and margins with nine-year trend and median.',
    chartNote:
      'Source: Canadian Natural’s audited annual statements in Form 40-F. Per-share figures are restated for the June 2024 two-for-one split. Revenue is net of royalties. Percentage deltas are additive (pp).',
  },
  keyMetrics: [
    {
      label: 'Production per share',
      desc: 'Average daily production for each million diluted shares.\nHow it is calculated: total production before royalties in barrels of oil equivalent per day (BOE/d), divided by diluted weighted average shares in millions. FY26E uses the midpoint of 2026 guidance over shares outstanding at 4 August 2026.\nWhat to watch for: this is the part of growth management controls. A rise means each share owns more barrels, whatever the oil price does.',
      values: [
        406.7, 440.7, 460.6, 492.4, 520.2, 557.6, 604.4, 637.1, 748.7, 805.0,
      ],
      format: { decimals: 0 },
      median10y: 520.2,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Production of 962,264 BOE/d, including the AOSP oil sands mines acquired from Shell and Marathon on 31 May 2017.',
        FY19: 'Production of 1,098,957 BOE/d, including the Devon Canada assets acquired in June 2019.',
        FY25: 'Production of 1,570,757 BOE/d, up 15%, mostly from Chevron’s Alberta assets acquired in December 2024, with buybacks shrinking the share count.',
        FY26E:
          'Guidance midpoint of 1,659.5 MBOE/d (6 August 2026) over 2,061.5M shares outstanding.',
      },
    },
    {
      label: 'Diluted EPS',
      desc: 'Net earnings per diluted share, adjusted for the June 2024 two-for-one split.\nHow it is calculated: as reported; FY17–FY21 are the reported figures halved. FY26E is consensus adjusted EPS.\nWhat to watch for: foreign exchange on US dollar debt, hedging, share-based compensation and acquisition gains can each move EPS by a large amount in either direction.',
      values: [1.015, 1.06, 2.27, -0.185, 3.23, 4.76, 3.74, 2.85, 5.16, 6.55],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 2.85,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'Net loss of CA$435M in the pandemic oil price collapse.',
        FY25: 'Includes CA$3.38B of after-tax non-operating income, mostly the AOSP remeasurement gain. Adjusted net earnings from operations were CA$7.44B, flat on 2024.',
        FY26E:
          'Consensus adjusted EPS from 12 analysts (stockanalysis.com, October 2026). The comparable 2025 adjusted figure was CA$3.55.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Free cash flow per diluted share, split-adjusted.\nHow it is calculated: (operating cash flow − net expenditures on property, plant and equipment and on exploration and evaluation assets) ÷ diluted weighted average shares. Acquisitions are excluded. FY26E is consensus free cash flow over FY25 diluted shares.\nWhat to watch for: it tracks the oil price closely, so compare it with the price environment of each year rather than with the year before.',
      values: [1.08, 2.32, 2.19, 0.91, 4.21, 6.2, 3.38, 3.74, 3.96, 6.34],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 3.38,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'Capital spending was cut to CA$2.56B, but operating cash flow fell to CA$4.71B.',
        FY26E:
          'Consensus free cash flow of CA$13.31B over FY25 diluted shares of 2,098M. The stockanalysis.com definition is not stated and its FY25 figure (CA$8.78B) is higher than the CA$8.32B on this page.',
      },
    },
    {
      label: 'Dividends per share',
      desc: 'Cash dividends declared per common share, split-adjusted.\nHow it is calculated: as reported in the annual MD&A; FY17–FY22 are halved for the 2024 split. FY26E is the current quarterly dividend of CA$0.625 annualized.\nWhat to watch for: the regular dividend rose in every year shown, including the 2020 net loss, which signals a dividend set on the cost base rather than on the oil price.',
      values: [0.55, 0.67, 0.75, 0.85, 1.0, 2.3, 1.85, 2.14, 2.35, 2.5],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 1.0,
      guidanceCount: 1,
      yearNotes: {
        FY22: 'Includes a special dividend of CA$0.75 (CA$1.50 before the split), paid in August 2022. Regular dividends were CA$1.55.',
        FY26E:
          'The quarterly dividend was raised 6.4% to CA$0.625 on 5 March 2026. Four quarters at that rate is CA$2.50.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net earnings divided by year-end shareholders’ equity.\nHow it is calculated: net earnings ÷ total shareholders’ equity at 31 December.\nWhat to watch for: read it as a cycle average. A producer that only earns its cost of equity at peak prices is not compounding value.',
      values: [7.6, 8.1, 15.5, -1.3, 20.7, 28.6, 20.7, 15.5, 24.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 15.5,
      yearNotes: {
        FY25: 'Lifted by the CA$3.83B after-tax AOSP gain. On adjusted net earnings from operations ROE would be about 17%.',
      },
    },
    {
      label: 'ROIC %',
      desc: 'After-tax return on all the capital in the business.\nHow it is calculated: (earnings before taxes + interest and other financing expense) × (1 − the statutory tax rate in the notes) ÷ (year-end equity + long-term debt + lease liabilities − cash).\nWhat to watch for: unlike ROE, it is not lifted by borrowing, so it shows whether acquisitions such as AOSP, Devon and Chevron earn their keep.',
      values: [4.7, 5.9, 7.4, -0.2, 15.5, 21.8, 16.1, 11.1, 17.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 11.1,
      yearNotes: {
        FY25: 'Includes the CA$4.99B pre-tax AOSP gain.',
      },
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Long-term debt divided by shareholders’ equity.\nHow it is calculated: long-term debt including the current portion, bank credit facilities and commercial paper, divided by year-end equity. Lease liabilities are excluded.\nWhat to watch for: debt rose after each large acquisition (FY17 and FY24) and was paid down quickly afterwards, which is the pattern to look for in a cyclical business.',
      values: [0.71, 0.64, 0.6, 0.66, 0.4, 0.3, 0.27, 0.48, 0.37],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.48,
      yearNotes: {
        FY24: 'Debt rose by CA$8.0B to fund the CA$9.16B cash purchase of Chevron’s Alberta assets.',
      },
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'The growth rate equity could sustain from retained earnings alone.\nHow it is calculated: ROE × (1 − dividends paid ÷ net earnings). FY20 is blank because of the net loss.\nWhat to watch for: Canadian Natural also spends heavily on buybacks, which this measure ignores, so equity grows more slowly than the rate suggests.',
      values: [3.6, 3.2, 10.5, null, 14.8, 15.7, 10.9, 4.3, 13.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 10.7,
    },
    {
      label: 'Net margin %',
      desc: 'Net earnings as a share of revenue.\nHow it is calculated: net earnings ÷ revenue, where revenue is product sales net of royalties.\nWhat to watch for: royalties take a larger share of sales when prices are high (3.4% of product sales in FY20, 14.6% in FY22), so revenue already excludes a growing government share at high prices.',
      values: [13.8, 12.3, 23.7, -2.6, 25.5, 25.9, 22.9, 17.1, 27.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.9,
      yearNotes: {
        FY25: 'Lifted by the AOSP gain. Adjusted net earnings from operations were 19.2% of revenue.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of revenue.\nHow it is calculated: free cash flow ÷ revenue net of royalties.\nWhat to watch for: a margin that holds up in weak-price years points to low sustaining capital, which is the main attraction of long-life oil sands mining.',
      values: [14.8, 27.0, 22.8, 12.8, 33.2, 33.7, 20.7, 22.4, 21.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.4,
    },
  ],
  revenueSection: {
    currency: 'CA$',
    kicker:
      'Revenue (product sales net of royalties), operating income and net earnings, in billions of Canadian dollars.',
    revenueDesc:
      'Product sales of crude oil, synthetic crude, NGLs and natural gas, less royalties paid to governments and freehold owners. FY26E is the consensus of 7 analysts.',
    operatingIncomeDesc:
      'Canadian Natural does not report operating income. This line is revenue minus production, transportation, blending and feedstock, depletion, administration, share-based compensation and asset retirement accretion, before interest, foreign exchange, hedging and acquisition gains.',
    netIncomeDesc:
      'Net earnings as reported. FY25 includes a CA$3.83B after-tax non-cash gain on the AOSP asset swap. FY26E is consensus adjusted EPS times FY25 diluted shares.',
    chartNote:
      'Revenue follows the oil price: it fell 26% in FY20 and rose 41% in FY22. FY25 operating income fell despite higher revenue because depletion includes CA$1.78B of non-cash charges, mostly for higher North Sea decommissioning cost estimates. FY26E operating income is blank because no consensus exists on this basis.',
  },
  revenue: [
    { year: 'FY17', revenue: 17.342, operatingIncome: 2.335, netIncome: 2.397 },
    { year: 'FY18', revenue: 21.027, operatingIncome: 4.848, netIncome: 2.591 },
    { year: 'FY19', revenue: 22.871, operatingIncome: 5.592, netIncome: 5.416 },
    {
      year: 'FY20',
      revenue: 16.893,
      operatingIncome: -0.445,
      netIncome: -0.435,
    },
    { year: 'FY21', revenue: 30.057, operatingIncome: 9.512, netIncome: 7.664 },
    {
      year: 'FY22',
      revenue: 42.298,
      operatingIncome: 14.76,
      netIncome: 10.937,
    },
    {
      year: 'FY23',
      revenue: 35.968,
      operatingIncome: 10.464,
      netIncome: 8.233,
    },
    { year: 'FY24', revenue: 35.656, operatingIncome: 9.727, netIncome: 6.106 },
    { year: 'FY25', revenue: 38.762, operatingIncome: 8.226, netIncome: 10.82 },
    { year: 'FY26E', revenue: 49.18, operatingIncome: null, netIncome: 13.74 },
  ],
  thesis: [
    'Canadian Natural has a long-lived reserve base, with a proved plus probable reserve life index of about 40 years at the end of 2025, and more than half of its production comes from oil sands mining and thermal in situ projects that need little reinvestment to hold output flat once built. That low sustaining capital kept free cash flow positive even in 2020, when WTI averaged US$39.40.',
    'Management has grown production per share from about 407 to 749 BOE/d per million shares since 2017, mainly by buying assets from companies selling out of Canada (Shell and Marathon Oil in 2017, Devon in 2019, Chevron in 2024), then paying down the debt taken on and buying back shares in most years.',
    'Earnings and cash flow move with oil prices that the company cannot control, and the stock has risen about 65% in 2026 alongside a consensus that expects EPS to nearly double. The valuation is only reasonable if those prices hold, so the page leans on cycle medians rather than on the forward year.',
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
  17.342, 21.027, 22.871, 16.893, 30.057, 42.298, 35.968, 35.656, 38.762,
];

export const netIncomeByYear = [
  2.397, 2.591, 5.416, -0.435, 7.664, 10.937, 8.233, 6.106, 10.82,
];

export type ExpenseLine = {
  label: string;
  desc: string;
  values: number[];
  indent?: number;
};

export const expenseLines: ExpenseLine[] = [
  {
    label: 'Operating expenses',
    desc: 'The expense lines that relate to producing and selling oil and gas: production, transportation, blending and feedstock, depletion, administration, share-based compensation and asset retirement obligation accretion. Canadian Natural presents expenses in a single list without an operating income subtotal, so this grouping is the page’s.',
    values: [
      15.007, 16.179, 17.279, 17.338, 20.545, 27.538, 25.504, 25.929, 30.536,
    ],
  },
  {
    label: 'Production',
    desc: 'Operating costs of wells, thermal plants, oil sands mines and upgraders, including energy, labour and maintenance.',
    values: [5.675, 6.464, 6.277, 6.28, 7.152, 8.712, 8.48, 8.093, 9.155],
    indent: 1,
  },
  {
    label: 'Transportation, blending and feedstock',
    desc: 'Pipeline and rail tariffs, diluent bought to blend heavy oil and bitumen so it can flow, and feedstock for the upgraders. Reported as two lines (blending and feedstock; transportation) from FY24; they are added together here. It rises with oil prices because diluent is priced like light oil.',
    values: [3.529, 4.189, 4.699, 4.498, 6.604, 9.973, 9.302, 9.984, 10.822],
    indent: 1,
  },
  {
    label: 'Depletion, depreciation and amortization',
    desc: 'The cost of reserves and facilities used up in the year. FY25 includes CA$1.46B of non-cash recoverability charges for higher North Sea decommissioning cost estimates and CA$0.27B for not extending the Espoir licence offshore Côte d’Ivoire (FY23: CA$0.44B; FY24: CA$0.16B of North Sea charges).',
    values: [5.186, 5.161, 5.546, 6.046, 5.724, 7.353, 6.413, 6.681, 9.384],
    indent: 1,
  },
  {
    label: 'Administration',
    desc: 'Corporate general and administrative costs.',
    values: [0.319, 0.325, 0.344, 0.391, 0.366, 0.415, 0.452, 0.503, 0.615],
    indent: 1,
  },
  {
    label: 'Share-based compensation',
    desc: 'Employees can surrender stock options for cash, so the options are carried as a liability marked to the share price each year, so the expense rises when the stock rises and turns into a recovery when it falls (FY18 and FY20).',
    values: [0.134, -0.146, 0.223, -0.082, 0.514, 0.804, 0.491, 0.279, 0.18],
    indent: 1,
  },
  {
    label: 'Asset retirement obligation accretion',
    desc: 'The unwinding of the discount on future abandonment and reclamation costs.',
    values: [0.164, 0.186, 0.19, 0.205, 0.185, 0.281, 0.366, 0.389, 0.38],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Financing costs, hedging, foreign exchange and gains reported below the operating lines. Negative values mean these items added to earnings overall, as in FY25 when the AOSP remeasurement gain outweighed interest.',
    values: [-0.538, 1.326, 0.636, 0.428, -0.399, 1.056, 0.299, 1.668, -5.015],
  },
  {
    label: 'Interest and other financing expense',
    desc: 'Interest on long-term debt and leases, net of interest income.',
    values: [0.631, 0.739, 0.836, 0.756, 0.711, 0.549, 0.636, 0.592, 0.834],
    indent: 1,
  },
  {
    label: 'Risk management activities',
    desc: 'Realized and unrealized gains and losses on commodity, interest rate and currency derivatives.',
    values: [
      0.035, -0.134, 0.077, -0.007, 0.036, -0.035, -0.002, 0.177, -0.018,
    ],
    indent: 1,
  },
  {
    label: 'Foreign exchange (gain) loss',
    desc: 'Mostly the translation of US dollar debt into Canadian dollars. A weaker Canadian dollar produces a loss, as in FY18, FY22 and FY24.',
    values: [
      -0.787, 0.827, -0.57, -0.275, -0.127, 0.738, -0.279, 0.955, -0.762,
    ],
    indent: 1,
  },
  {
    label: 'Gain on acquisitions, disposition and remeasurement',
    desc: 'Gains on acquiring assets below fair value and on disposals. FY25 is the CA$4.99B AOSP asset swap with Shell: Canadian Natural took the last 10% of the AOSP mines, had to remeasure its existing 90% to fair value, and booked a CA$4.51B non-cash gain on that remeasurement and CA$0.46B on giving Shell 10% of the Scotford upgrader and Quest.',
    values: [-0.379, -0.452, 0, -0.217, -0.478, 0, 0, 0, -5.069],
    indent: 1,
  },
  {
    label: '(Gain) loss from investments',
    desc: 'Fair value changes and equity income on investments, mostly the North West Redwater refinery partnership and listed shares received in asset sales. FY21 includes CA$0.40B of income from North West Redwater, reported as its own line that year.',
    values: [-0.038, 0.346, 0.293, 0.171, -0.541, -0.196, -0.056, -0.056, 0],
    indent: 1,
  },
  {
    label: 'Income tax expense',
    desc: 'Current and deferred income tax as reported on the income statement. FY19 includes a deferred tax recovery after Alberta enacted cuts to its corporate tax rate from 12% to 8% by 2022.',
    values: [0.476, 0.931, -0.46, -0.438, 2.247, 2.767, 1.932, 1.953, 2.421],
  },
  {
    label: 'Current income tax',
    desc: 'Tax payable for the year. It was a recovery in FY17 and FY20 and rose sharply from FY21 with earnings.',
    values: [-0.164, 0.374, 0.434, -0.257, 1.848, 2.906, 1.879, 1.531, 1.911],
    indent: 1,
  },
  {
    label: 'Deferred income tax',
    desc: 'The change in future tax liabilities, mostly from capital cost allowances running ahead of depletion.',
    values: [0.64, 0.557, -0.894, -0.181, 0.399, -0.139, 0.053, 0.422, 0.51],
    indent: 1,
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
    desc: 'Net change in cash and cash equivalents for the year. Canadian Natural keeps little cash and uses its credit facilities as a buffer, so this line stays close to zero.',
    values: [
      0.12,
      -0.036,
      0.038,
      0.045,
      0.56,
      0.176,
      -0.043,
      -0.746,
      0.542,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Cash flows from operating activities, after abandonment spending and changes in working capital.',
    values: [
      7.262,
      10.121,
      8.829,
      4.714,
      14.478,
      19.391,
      12.353,
      13.386,
      15.106,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Cash flows used in investing activities.',
    values: [
      -13.102,
      -4.814,
      -7.255,
      -2.819,
      -3.703,
      -4.987,
      -4.858,
      -14.095,
      -6.687,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Net expenditures on property, plant and equipment and on exploration and evaluation assets, as reported (net of small disposals). FY26E is the 2026 budget of CA$5.99B of operating capital plus CA$0.125B for carbon capture (6 August 2026).',
    values: [
      -4.698, -4.441, -3.608, -2.56, -4.493, -5.136, -4.909, -5.383, -6.791,
      -6.115,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions',
    desc: 'Cash paid for acquisitions net of cash acquired: the AOSP mines in FY17 (CA$8.63B plus CA$3.82B in shares), Devon Canada in FY19 and Chevron’s Alberta assets in FY24. FY25 is cash received in the AOSP asset swap. FY26E is the CA$1.53B of Peace River acquisitions in the 6 August 2026 guidance.',
    values: [-8.63, 0, -3.412, 0, 0, 0, 0, -9.163, 0.212, -1.526],
    indent: 1,
  },
  {
    label: 'Other investing',
    desc: 'Investing working capital, investments and, in FY21, CA$0.56B of North West Redwater subordinated debt repaid to Canadian Natural.',
    values: [
      0.226,
      -0.373,
      -0.235,
      -0.259,
      0.79,
      0.149,
      0.051,
      0.451,
      -0.108,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Cash flows from (used in) financing activities.',
    values: [
      5.96,
      -5.343,
      -1.536,
      -1.85,
      -10.215,
      -14.228,
      -7.538,
      -0.037,
      -7.877,
      null,
    ],
  },
  {
    label: 'Dividends on common shares',
    desc: 'Cash dividends paid. FY22 includes the CA$1.50 (pre-split) special dividend of about CA$1.7B.',
    values: [
      -1.252,
      -1.562,
      -1.743,
      -1.95,
      -2.17,
      -4.926,
      -3.891,
      -4.429,
      -4.871,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Share repurchases',
    desc: 'Purchase of common shares under the Normal Course Issuer Bid. There were none in FY17, the year of the AOSP acquisition.',
    values: [
      0,
      -1.282,
      -0.941,
      -0.271,
      -1.581,
      -5.571,
      -3.318,
      -2.66,
      -1.449,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Net debt issued (repaid)',
    desc: 'Bank credit facilities, commercial paper, medium-term notes and US dollar notes issued minus repaid, including settlement of acquired debt and cross-currency swaps.',
    values: [
      6.746,
      -2.831,
      1.025,
      0.488,
      -6.962,
      -3.941,
      -0.416,
      7.097,
      -1.46,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other financing',
    desc: 'Shares issued on the exercise of stock options, less lease payments (from FY19, under IFRS 16).',
    values: [
      0.466,
      0.332,
      0.123,
      -0.117,
      0.498,
      0.21,
      0.087,
      -0.045,
      -0.097,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating activities minus capital expenditures, before acquisitions. FY26E is the stockanalysis.com consensus (S&P Global data, October 2026).',
    values: [
      2.564, 5.68, 5.221, 2.154, 9.985, 14.255, 7.444, 8.003, 8.315, 13.31,
    ],
  },
];
