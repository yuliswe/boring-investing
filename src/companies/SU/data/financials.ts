import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Suncor',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    metric: 'free funds flow',
    metricShort: 'FFF',
    reportingCurrency: 'CA$',
    paths: [
      {
        label: 'Consensus free funds flow',
        column: 'Consensus FY26E',
        phrase: 'on consensus FY26E free funds flow',
        actual: 6.927,
        forward: 14.47,
      },
      {
        label: 'Free funds flow at FY25 prices',
        column: 'At FY25 prices',
        phrase: 'if free funds flow stays at its FY25 level',
        actual: 6.927,
        forward: 6.927,
      },
    ],
    startNote:
      'consensus FY26E free funds flow (first path) or the FY25 actual (second path)',
    actualNote:
      'Actual FY25 free funds flow of CA$6.93B, in a year when WTI averaged US$64.75.',
    forwardNote:
      'Consensus FY26E free funds flow of CA$14.47B from 11 analysts (stockanalysis.com, S&P Global, 22 October 2026), after WTI averaged US$82.55 in the first half of 2026. The second path holds free funds flow at its FY25 level of CA$6.93B.',
    assumptionNote:
      'Free funds flow is adjusted funds from operations minus capital and exploration expenditures. It is not reduced by lease payments, so lease liabilities are counted as debt.',
    sharesOutstanding: 1.1696,
    sharesSource:
      '1,169.6M common shares outstanding at 30 July 2026, Q2 2026 MD&A',
    netCash: -9.308,
    netCashSource:
      'CA$9.85B of debt plus CA$4.83B of lease liabilities minus CA$5.37B of cash, Q2 2026 balance sheet',
    scenarioGrowthRates: [-0.05, 0, 0.05, 0.1],
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E figures are either the consensus of analysts compiled by S&P Global (stockanalysis.com, 22 October 2026) or the midpoint of Suncor’s 2026 corporate guidance (11 December 2025, reaffirmed 4 August 2026). Each figure’s note says which.',
  criticalSection: {
    kicker:
      'Valuation ratios at each year-end TSX close. Read each year beside that year’s oil price, because Suncor’s earnings follow WTI.',
    chartNote:
      'Lower is cheaper on all three. FY20 is blank on P/E and P/FFF because earnings and free funds flow were negative. 10Y median shown as dashed line.',
  },
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the TSX closing price on the last trading day of each year, divided by that year’s diluted EPS. FY26E uses the live price and the consensus of adjusted EPS.\nWhat to watch for: for an oil producer the ratio is lowest at price peaks, when earnings are about to fall, and highest after a price crash. Compare it with years at a similar WTI price.',
      values: [17.2, 18.9, 22.9, null, 11.4, 6.6, 6.7, 10.9, 12.6, 9.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 12.0,
      guidanceCount: 1,
      yearNotes: {
        FY19: 'Net earnings carried CA$3.35B of after-tax asset impairments, mostly on Fort Hills, partly offset by a CA$1.12B deferred tax recovery from the Alberta tax rate cut.',
        FY20: 'Not meaningful. Suncor lost CA$2.83 a share as WTI averaged US$39.40, after CA$2.94B of pre-tax impairments on Fort Hills, White Rose and Terra Nova.',
        FY22: 'WTI averaged US$94.25, the highest in the period, and the ratio fell to 6.6.',
        FY26E:
          'Calculated from CA$108.52 divided by consensus adjusted EPS of CA$12.11.',
      },
    },
    {
      label: 'P/FFF ratio',
      desc: 'Share price divided by free funds flow per share.\nHow it is calculated: the TSX closing price on the last trading day of each year, divided by free funds flow per diluted share. Free funds flow is adjusted funds from operations (operating cash flow before changes in working capital) minus capital and exploration expenditures. FY26E uses the consensus of 11 analysts.\nWhat to watch for: this is Suncor’s own measure of the cash left for dividends and buybacks. It leaves out the working capital swings that follow oil prices, so it is steadier than reported free cash flow. Lease payments, CA$0.69B in FY25, are not deducted.',
      values: [29.7, 13.0, 12.6, null, 8.3, 4.6, 7.4, 8.9, 10.7, 8.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 9.8,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Capital spending of CA$6.55B still included major projects in progress, which left free funds flow of only CA$2.59B.',
        FY20: 'Not meaningful. Free funds flow was −CA$0.05B.',
        FY22: 'Free funds flow reached CA$13.11B at a WTI price of US$94.25.',
        FY26E:
          'Calculated from CA$108.52 divided by CA$12.22 of free funds flow per share, which is consensus free funds flow of CA$14.47B over 1,184M diluted shares (first half of 2026).',
      },
    },
    {
      label: 'EV / AFFO',
      desc: 'Enterprise value divided by adjusted funds from operations.\nHow it is calculated: (year-end share price × shares outstanding + net debt including lease liabilities) ÷ adjusted funds from operations. FY26E uses the live price, shares at 30 July 2026, net debt at 30 June 2026 and implied AFFO of CA$20.32B (consensus free funds flow plus guided capital spending).\nWhat to watch for: unlike P/E, this counts debt, so it rewards the debt paydown since FY20. Read it at similar oil prices.',
      values: [9.7, 7.4, 7.5, 13.5, 6.0, 3.9, 5.1, 5.4, 6.5, 6.7],
      format: { suffix: '×', decimals: 1 },
      invertColor: true,
      median10y: 6.5,
      guidanceCount: 1,
      yearNotes: {
        FY20: 'AFFO fell to CA$3.88B in the price crash, so the ratio rose even though the share price halved.',
        FY26E:
          'Calculated from CA$108.52 × 1,169.6M shares plus CA$9.31B of net debt, divided by CA$20.32B of AFFO implied by consensus free funds flow of CA$14.47B plus the CA$5.85B midpoint of capital guidance including capitalized interest.',
      },
    },
  ],
  keySection: {
    kicker:
      'Profitability, returns, leverage and shareholder payout, with the ten-year trend and 10Y median.',
    chartNote:
      'Source: audited annual statements in the 40-F filings and the MD&A for adjusted funds from operations. All amounts in Canadian dollars. Percentage deltas are additive (pp).',
  },
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'Net earnings per diluted share, in Canadian dollars.\nHow it is calculated: as reported. FY26E is the consensus of adjusted EPS, which excludes unrealized foreign exchange on US dollar debt and risk management gains and losses. First-half 2026 reported EPS was CA$4.93 against CA$5.16 adjusted.\nWhat to watch for: EPS follows the oil price. Impairments in FY19, FY20 and FY22 cut reported earnings below the cash the business produced.',
      values: [2.68, 2.02, 1.86, -2.83, 2.77, 6.53, 6.33, 4.72, 4.85, 12.11],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 2.77,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'Includes a CA$0.99B after-tax unrealized foreign exchange loss on US dollar debt as the Canadian dollar weakened.',
        FY22: 'Includes a CA$3.40B pre-tax impairment of Fort Hills.',
        FY26E:
          'Consensus adjusted EPS of CA$12.11 (range CA$10.17–13.93; stockanalysis.com, S&P Global, 22 October 2026).',
      },
    },
    {
      label: 'Free funds flow per share',
      desc: 'Free funds flow per diluted share, in Canadian dollars.\nHow it is calculated: (adjusted funds from operations − capital and exploration expenditures) ÷ diluted weighted average shares. FY26E is consensus free funds flow over first-half 2026 diluted shares.\nWhat to watch for: it should run ahead of EPS, because depreciation is larger than sustaining capital. It doubled between FY19 and FY25 at similar oil prices, partly because the share count fell by a fifth.',
      values: [1.55, 2.93, 3.37, -0.03, 3.83, 9.43, 5.72, 5.77, 5.68, 12.22],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 3.83,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus free funds flow of CA$14.47B over 1,184M diluted shares in the first half of 2026.',
      },
    },
    {
      label: 'Return on equity',
      desc: 'Net earnings as a share of average shareholders’ equity.\nHow it is calculated: net earnings ÷ the average of opening and closing equity.\nWhat to watch for: average it across the cycle rather than reading one year. The FY17–FY19 median was 7.4%, and FY22–FY25 averaged about 18%.',
      values: [9.9, 7.4, 6.7, -11.1, 11.4, 23.9, 20.1, 13.7, 13.2],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 11.4,
    },
    {
      label: 'Net debt / AFFO',
      desc: 'Years of adjusted funds from operations needed to repay net debt.\nHow it is calculated: (short-term debt + long-term debt including current portion + lease liabilities − cash) ÷ adjusted funds from operations. Lease liabilities are included from FY19, when IFRS 16 brought them onto the balance sheet.\nWhat to watch for: below 1× leaves room to keep paying the dividend through a price crash. The FY20 spike shows how fast the ratio rises when cash flow collapses.',
      values: [1.41, 1.49, 1.51, 5.11, 1.57, 0.75, 1.03, 0.81, 0.85],
      format: { suffix: '×', decimals: 2 },
      invertColor: true,
      median10y: 1.41,
      yearNotes: {
        FY20: 'Net debt rose to CA$19.81B while AFFO fell to CA$3.88B.',
        FY23: 'Rose as Suncor paid CA$2.39B to buy TotalEnergies Canada and its Fort Hills interest.',
      },
    },
    {
      label: 'Net debt',
      desc: 'Debt and lease liabilities minus cash at year end, in billions of Canadian dollars.\nHow it is calculated: short-term debt + long-term debt (including current portion) + lease liabilities − cash and cash equivalents. Suncor’s own net debt measure leaves out lease liabilities and was CA$6.34B at the end of FY25 and CA$4.48B at 30 June 2026.\nWhat to watch for: net debt fell by CA$9B from its FY20 peak. Lease liabilities rose over the same years, from CA$2.91B in FY20 to CA$4.52B in FY25.',
      values: [12.91, 15.13, 16.32, 19.81, 16.15, 13.64, 13.68, 11.21, 10.85],
      format: { prefix: 'CA$', suffix: 'B', decimals: 2 },
      invertColor: true,
      median10y: 13.68,
    },
    {
      label: 'Net margin',
      desc: 'Net earnings as a share of total revenues and other income (net of royalties).\nWhat to watch for: it moves with WTI and refining cracks. Compare years at similar prices: FY19 (US$57 WTI) earned 7.4% after impairments and FY25 (US$65 WTI) earned 12.0%.',
      values: [13.9, 8.4, 7.4, -17.2, 10.5, 15.5, 16.3, 11.8, 12.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 11.8,
    },
    {
      label: 'Free funds flow margin',
      desc: 'Free funds flow as a share of total revenues and other income.\nWhat to watch for: when this line runs above net margin, cash generation is stronger than earnings, usually because depreciation and impairments exceed capital spending.',
      values: [8.1, 12.2, 13.5, -0.2, 14.6, 22.4, 14.8, 14.4, 14.0],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 14.0,
    },
    {
      label: 'Shareholder payout',
      desc: 'Dividends and share repurchases as a share of free funds flow.\nHow it is calculated: (dividends paid + share repurchases) ÷ free funds flow, from the cash flow statement.\nWhat to watch for: above 100% means returns were funded with debt or asset sales. Suncor plans to return all excess funds through buybacks from 2025, so the ratio should stay near 100% while net debt is at its target.',
      values: [137, 113, 93, null, 68, 59, 66, 78, 86],
      format: { suffix: '%', decimals: 0 },
      deltaMode: 'add',
      median10y: 82,
      yearNotes: {
        FY20: 'Not meaningful. Free funds flow was negative, and dividends per share fell from CA$1.68 to CA$1.10.',
      },
    },
    {
      label: 'Dividends per share',
      desc: 'Cash dividends paid per common share, in Canadian dollars.\nHow it is calculated: as reported. FY26E is four quarterly dividends at the current rate of CA$0.60, three of which have been declared.\nWhat to watch for: the dividend was cut in 2020 and not restored to its FY19 level of CA$1.68 until FY22.',
      values: [1.28, 1.44, 1.68, 1.1, 1.05, 1.88, 2.11, 2.22, 2.31, 2.4],
      format: { prefix: 'CA$', decimals: 2 },
      median10y: 1.68,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Four quarterly dividends of CA$0.60; the Q1–Q3 dividends were declared on 3 February, 5 May and 4 August 2026.',
      },
    },
    {
      label: 'Diluted share count',
      desc: 'Diluted weighted average shares outstanding, in millions.\nHow it is calculated: from the earnings per share note.\nWhat to watch for: buybacks cut the count by 27% from FY17 to FY25. Suncor repurchased shares at CA$500M a month from August 2026 and CA$750M a month from October 2026, so the decline is speeding up.',
      values: [1665, 1629, 1561, 1526, 1489, 1390, 1310, 1276, 1220],
      format: { suffix: 'M', decimals: 0 },
      invertColor: true,
      median10y: 1489,
    },
  ],
  revenueSection: {
    currency: 'CA$',
    kicker:
      'Total revenues and other income (net of royalties), operating income and net earnings in billions of Canadian dollars, with year-on-year growth rates.',
    revenueDesc:
      'Gross revenues minus royalties plus other income, as reported on the income statement. FY26E is the consensus for operating revenues net of royalties, which excludes other income.',
    operatingIncomeDesc:
      'Earnings before financing expenses and income taxes. Suncor reports no operating income line under IFRS, so this adds financing expenses back to pre-tax earnings. FY26E is derived from consensus net earnings.',
    netIncomeDesc:
      'Net earnings as reported. FY26E is the consensus of CA$14.42B.',
    chartNote:
      'Revenue follows the oil price, which averaged US$50.95 (WTI) in FY17, US$39.40 in FY20, US$94.25 in FY22 and US$64.75 in FY25. FY26E revenue (CA$66.55B) and net earnings (CA$14.42B) are consensus (stockanalysis.com, S&P Global). FY26E operating income of CA$20.87B is consensus net earnings grossed up at the 24.5% midpoint of the guided Canadian tax rate, plus first-half 2026 financing expenses of CA$0.88B doubled.',
  },
  revenue: [
    { year: 'FY17', revenue: 32.079, operatingIncome: 5.67, netIncome: 4.458 },
    {
      year: 'FY18',
      revenue: 38.986,
      operatingIncome: 7.125,
      netIncome: 3.293,
    },
    {
      year: 'FY19',
      revenue: 38.989,
      operatingIncome: 3.166,
      netIncome: 2.899,
    },
    {
      year: 'FY20',
      revenue: 25.052,
      operatingIncome: -5.101,
      netIncome: -4.319,
    },
    {
      year: 'FY21',
      revenue: 39.101,
      operatingIncome: 6.825,
      netIncome: 4.119,
    },
    {
      year: 'FY22',
      revenue: 58.467,
      operatingIncome: 14.327,
      netIncome: 9.077,
    },
    {
      year: 'FY23',
      revenue: 50.746,
      operatingIncome: 11.856,
      netIncome: 8.295,
    },
    {
      year: 'FY24',
      revenue: 51.134,
      operatingIncome: 10.097,
      netIncome: 6.016,
    },
    {
      year: 'FY25',
      revenue: 49.31,
      operatingIncome: 9.028,
      netIncome: 5.918,
    },
    {
      year: 'FY26E',
      revenue: 66.55,
      operatingIncome: 20.87,
      netIncome: 14.42,
    },
  ],
  thesis: [
    'Suncor’s costs have fallen while its volumes have grown. Upstream production rose from 685,000 bbls/d in FY17 to 860,000 bbls/d in FY25, refineries ran at 103% of capacity in FY25, and Oil Sands operations cash costs were CA$26.55 a barrel, below the CA$28.20 of FY19.',
    'The balance sheet has been repaired and the cash goes to buybacks. Net debt including leases fell from CA$19.81B in FY20 to CA$10.85B in FY25, the diluted share count fell by a fifth, and management now returns all excess funds, at CA$750M a month from October 2026.',
    'The FY26 numbers rest on a high oil price. WTI averaged US$82.55 in the first half of 2026, and consensus free funds flow of CA$14.47B is more than double the CA$6.93B of FY25. Each US$1 move in WTI changes adjusted funds from operations by about CA$215M, so the share price depends on how long the price lasts.',
  ],
};

export default financials;

export const years = [
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
  32.079, 38.986, 38.989, 25.052, 39.101, 58.467, 50.746, 51.134, 49.31,
];

export const netIncomeByYear = [
  4.458, 3.293, 2.899, -4.319, 4.119, 9.077, 8.295, 6.016, 5.918,
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
    desc: 'Every expense line between revenue and financing expenses: purchases of crude oil and products, operating, selling and general, transportation and distribution, depreciation, depletion, amortization and impairment, exploration, and gains or losses on disposal of assets.',
    values: [
      26.409, 31.861, 35.823, 30.153, 32.276, 44.14, 38.89, 41.037, 40.282,
    ],
  },
  {
    label: 'Purchases of crude oil and products',
    desc: 'Third-party crude and refined products bought for the refineries and for marketing and trading. It rises and falls with the oil price.',
    values: [
      11.121, 14.133, 12.562, 9.112, 13.791, 20.775, 18.215, 19.115, 18.053,
    ],
    indent: 1,
  },
  {
    label: 'Operating, selling and general',
    desc: 'Mining, extraction, upgrading and refining costs, natural gas and power, maintenance, salaries and selling costs. FY23 includes a CA$275M restructuring charge for workforce reductions.',
    values: [
      9.188, 10.573, 11.244, 9.794, 11.366, 12.807, 13.383, 13.059, 13.248,
    ],
    indent: 1,
  },
  {
    label: 'Transportation and distribution',
    desc: 'Pipeline tolls, rail and marine shipping of crude and products. FY20 includes a CA$186M provision for the Keystone XL pipeline project.',
    values: [0.997, 1.319, 1.442, 1.551, 1.479, 1.671, 1.775, 1.842, 1.961],
    indent: 1,
  },
  {
    label: 'Depreciation, depletion, amortization and impairment',
    desc: 'The cost of plant and reserves used up in the year, plus impairments. Impairments of Fort Hills and other assets lifted the line in FY19 (CA$3.35B after tax), FY20 and FY22 (CA$3.40B pre-tax on Fort Hills).',
    values: [5.601, 5.738, 10.572, 9.526, 5.85, 8.786, 6.435, 6.954, 6.916],
    indent: 1,
  },
  {
    label: 'Exploration',
    desc: 'Exploration costs expensed, including dry wells and expired leases.',
    values: [0.104, 0.122, 0.256, 0.186, 0.047, 0.056, 0.074, 0.092, 0.159],
    indent: 1,
  },
  {
    label: '(Gain) loss on disposal of assets',
    desc: 'Gains and losses on assets sold, shown as negative when a gain. FY17 includes the gains on the sale of the lubricants business and the interest in the Cedar Point wind facility (CA$437M together after tax), and FY23 the sale of the U.K. offshore portfolio.',
    values: [
      -0.602, -0.024, -0.253, -0.016, -0.257, 0.045, -0.992, -0.025, -0.055,
    ],
    indent: 1,
  },
  {
    label: 'Financing expenses',
    desc: 'Interest on debt and leases net of capitalized interest, accretion of decommissioning provisions, and foreign exchange gains and losses on US dollar debt. The foreign exchange part swings the line: FY17 was a net gain as the Canadian dollar rose, and FY18 a CA$2.14B expense as it fell.',
    values: [-0.246, 2.142, 0.633, 0.996, 1.255, 2.011, 1.267, 1.91, 1.08],
  },
  {
    label: 'Income tax expense',
    desc: 'Current and deferred income tax, as reported. FY19 and FY20 show recoveries: FY19 includes a CA$1.12B deferred tax recovery from the Alberta corporate tax rate cut, and FY20 the tax benefit of the pre-tax loss.',
    values: [1.458, 1.69, -0.366, -1.778, 1.451, 3.239, 2.294, 2.171, 2.03],
  },
  {
    label: 'Current tax',
    desc: 'Income tax payable for the year.',
    values: [1.209, 1.25, 1.552, -0.659, 1.395, 4.229, 1.734, 2.465, 1.94],
    indent: 1,
  },
  {
    label: 'Deferred tax',
    desc: 'Change in deferred tax balances, which reflects timing differences and changes in tax rates.',
    values: [0.249, 0.44, -1.918, -1.119, 0.056, -0.99, 0.56, -0.294, 0.09],
    indent: 1,
  },
];

export const cashFlowStatementYears = years;

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash before foreign exchange: the sum of operating, investing and financing activities.',
    values: [
      -0.276, -0.543, -0.204, -0.063, 0.323, -0.337, -0.157, 1.606, 0.291,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Cash flow provided by operating activities.',
    values: [8.966, 10.58, 10.421, 2.675, 11.764, 15.68, 12.344, 15.96, 12.781],
  },
  {
    label: 'Adjusted funds from operations',
    desc: 'Operating cash flow before changes in non-cash working capital, the base Suncor uses for free funds flow. Reported as funds from operations before FY21.',
    values: [
      9.139, 10.172, 10.818, 3.876, 10.257, 18.101, 13.325, 13.846, 12.783,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Change in non-cash working capital in operating activities. Receivables, payables and inventory move with oil prices, so this line swings by billions: FY22 absorbed CA$2.42B as prices rose and FY24 released CA$2.11B.',
    values: [
      -0.173, 0.408, -0.397, -1.201, 1.507, -2.421, -0.981, 2.114, -0.002,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Cash flow used in investing activities.',
    values: [
      -5.019, -6.697, -5.088, -4.524, -3.977, -4.789, -6.511, -6.472, -6.022,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Capital and exploration expenditures, including capitalized interest and, in FY22 and FY23, spending on assets held for sale.',
    values: [
      -6.551, -5.406, -5.558, -3.926, -4.555, -5.12, -5.936, -6.483, -5.856,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions',
    desc: 'Cash paid for acquisitions. FY18 includes a further 5% of Syncrude and FY23 the purchase of TotalEnergies Canada, which held the remaining working interest in Fort Hills.',
    values: [-0.308, -1.23, 0, 0, 0, 0, -2.394, 0, 0],
    indent: 1,
  },
  {
    label: 'Proceeds from disposals',
    desc: 'Proceeds from assets sold. FY17 includes the sale of the lubricants business and the Cedar Point wind interest, and FY23 the U.K. offshore portfolio.',
    values: [1.611, 0.084, 0.274, 0.072, 0.335, 0.315, 1.882, 0.051, 0.066],
    indent: 1,
  },
  {
    label: 'Other investing',
    desc: 'Other investments and changes in working capital related to investing.',
    values: [0.229, -0.145, 0.196, -0.67, 0.243, 0.016, -0.063, -0.04, -0.232],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Cash flow used in or provided by financing activities.',
    values: [
      -4.223, -4.426, -5.537, 1.786, -7.464, -11.228, -5.99, -7.882, -6.468,
    ],
  },
  {
    label: 'Dividends',
    desc: 'Dividends paid on common shares.',
    values: [
      -2.124, -2.333, -2.614, -1.67, -1.55, -2.596, -2.749, -2.803, -2.809,
    ],
    indent: 1,
  },
  {
    label: 'Share repurchases',
    desc: 'Repurchases of common shares, including taxes paid on repurchases from FY24.',
    values: [
      -1.413, -3.053, -2.274, -0.307, -2.304, -5.135, -2.233, -2.908, -3.129,
    ],
    indent: 1,
  },
  {
    label: 'Debt, leases and other',
    desc: 'Net debt issued or repaid, lease liability payments, shares issued under option plans and distributions to non-controlling interests. In FY20 these items brought in CA$3.76B net as Suncor borrowed through the price crash, and in FY21–FY22 they took out about CA$7.1B.',
    values: [-0.686, 0.96, -0.649, 3.763, -3.61, -3.497, -1.008, -2.171, -0.53],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating activities minus capital expenditures. Unlike free funds flow, it includes the working capital swing.',
    values: [2.415, 5.174, 4.863, -1.251, 7.209, 10.56, 6.408, 9.477, 6.925],
  },
];
