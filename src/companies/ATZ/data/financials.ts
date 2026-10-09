import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  reverseDcf: {
    companyName: 'Aritzia',
    actualYear: 'FY26',
    forwardYear: 'FY27E',
    reportingCurrency: 'CA$',
    paths: [
      {
        label: 'Free cash flow',
        actual: 0.538,
        forward: 0.719,
      },
    ],
    startNote: 'consensus FY27E free cash flow',
    forwardNote:
      'Consensus FY27E free cash flow of CA$0.719B from 7 analysts (stockanalysis.com, 8 October 2026), above the CA$0.638B in the Cash Flow section after revenue guidance was raised at Q2.',
    sharesOutstanding: 0.1146,
    netCash: 0.528,
    netCashSource: 'CA$0.53B of cash and no borrowings, Q2 FY27 report',
    assumptionNote:
      'Under IFRS 16, free cash flow leaves out about CA$0.1B a year of lease principal.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  currency: 'CA$',
  guidanceYears: ['FY27E'],
  metricGroups: {
    valuation: {
      metrics: [
        {
          label: 'P/E ratio',
          desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the TSX closing price on the last trading day of each fiscal year, divided by that year’s diluted EPS. FY27E uses the live price and consensus EPS.\nWhat to watch for: compare the ratio with its own history rather than with other sectors. Earnings collapse in trough years such as FY21 and FY24, which pushes the ratio up, so a high P/E in a bad year does not mean the stock is expensive.',
          values: [25.6, 24.5, 27.3, 176.4, 36.2, 25.7, 51.1, 37.4, 37.7, 25.7],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 36.2,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Boutique closures during the COVID-19 pandemic cut diluted EPS to CA$0.17, so the ratio is not meaningful for this year.',
            FY24: 'Diluted EPS fell to CA$0.69 as gross margin dropped 310 bp on normalized markdowns, product-cost inflation and pre-opening lease costs.',
            FY27E:
              'Calculated from CA$120.72 divided by consensus diluted EPS of CA$4.69 (MarketScreener).',
          },
        },
        {
          label: 'P/FCF after leases',
          desc: 'Share price divided by free cash flow per share after lease payments.\nHow it is calculated: the TSX closing price on the last trading day of each fiscal year, divided by free cash flow after leases per diluted share. Free cash flow after leases is operating cash flow minus capital expenditures minus lease principal payments.\nWhat to watch for: a ratio well below its own median suggests the price assumes little growth. Under IFRS 16, reported free cash flow leaves lease principal out from FY20 onward, so the reported ratio flatters the stock. This version subtracts it and is comparable with FY18–FY19.',
          values: [38.4, 56.6, 21.9, 105.8, 26.1, null, 43.3, 98.5, 29.8, 25.9],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 40.9,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Pandemic closures cut free cash flow after leases to CA$32M, so the ratio is inflated.',
            FY23: 'Free cash flow after leases was negative (CA$-0.12B) as inventory rose by CA$260M, so the ratio is not meaningful.',
            FY25: 'Capital expenditures rose to CA$277M with the U.S. boutique build-out and lease payments reached CA$100M, which cut free cash flow after leases to CA$79M.',
            FY27E:
              'Calculated from CA$120.72 divided by an estimated CA$4.66 of free cash flow after leases per share.',
          },
        },
      ],
    },
    demand: {
      metrics: [
        {
          label: 'Comparable sales growth',
          desc: 'Sales growth from boutiques open at least a full year and from digital, which separates demand from the effect of new openings.\nHow it is calculated: as reported by Aritzia in the annual MD&A.\nWhat to watch for: comps below inflation for several years mean the brand is losing pull. Revenue growth that comes only from new boutiques while comps stall is a warning.',
          values: [6.6, 9.8, 7.6, null, null, 28.2, -1.0, 11.0, 26.5],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 9.8,
          yearNotes: {
            FY21: 'Not reported, because pandemic boutique closures made the comparable base meaningless.',
            FY22: 'Not reported, because pandemic boutique closures made the comparable base meaningless.',
          },
        },
        {
          label: 'U.S. share of revenue',
          desc: 'Share of net revenue from clients in the United States.\nHow it is calculated: U.S. revenue from the geographic note to the financial statements, divided by total net revenue.\nWhat to watch for: most new boutiques open in the United States, so this share should keep rising while the expansion works. A stall would mean the growth story is fading, because Canada is a mature market.',
          values: [26.2, 30.3, 34.4, 34.0, 45.2, 51.1, 52.6, 57.8, 61.5],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 45.2,
        },
        {
          label: 'Digital share of revenue',
          desc: 'Share of net revenue from aritzia.com and the Aritzia app.\nHow it is calculated: digital revenue divided by boutique plus digital revenue, from the channel note to the financial statements, which starts in FY20.\nWhat to watch for: a rising share is usually healthy, but digital orders carry shipping and return costs that boutique sales do not, so a rising share can weigh on margins.',
          values: [null, null, 23.1, 49.7, 37.8, 35.1, 33.7, 34.7, 35.0],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 35.0,
          yearNotes: {
            FY21: 'Boutiques were closed for much of the year, so digital briefly made up half of revenue.',
          },
        },
      ],
    },
    pricing: {
      metrics: [
        {
          label: 'Gross margin',
          desc: 'Share of net revenue left after cost of goods sold.\nHow it is calculated: (net revenue − cost of goods sold) ÷ net revenue. Aritzia includes boutique occupancy and distribution costs in cost of goods sold.\nWhat to watch for: a fall of 100 bp or more alongside talk of markdowns signals lost pricing power. Because rent sits in cost of goods sold, gross margin also rises with sales volume as fixed occupancy is spread over more revenue, so part of any gain is operating leverage rather than pricing.',
          values: [39.8, 39.2, 41.1, 36.5, 43.8, 41.6, 38.5, 43.1, 44.9, 46.9],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 41.1,
          guidanceCount: 1,
          yearNotes: {
            FY27E:
              'Management guidance midpoint of a 175–225 bp increase over FY26 (Q1 FY27 release, 9 July 2026).',
          },
        },
        {
          label: 'Inventory turnover',
          desc: 'How many times a year inventory sells through.\nHow it is calculated: cost of goods sold ÷ the average of opening and closing inventory.\nWhat to watch for: a steady decline means merchandise is moving more slowly. Cost of goods sold includes occupancy, so the level reads higher than a pure merchandise turnover. Compare it with Aritzia’s own history rather than with other retailers.',
          values: [5.9, 5.6, 5.6, 4.1, 4.4, 3.8, 3.5, 4.3, 4.7],
          format: { suffix: '×', decimals: 1 },
          median10y: 4.4,
          yearNotes: {
            FY23: 'Inventory more than doubled to CA$468M at year end, and the company cut it by 27% during FY24.',
          },
        },
        {
          label: 'Inventory growth minus sales growth',
          desc: 'How much faster inventory is growing than sales.\nHow it is calculated: the year-over-year % change in year-end inventory minus the year-over-year % change in net revenue, in percentage points.\nWhat to watch for: a gap above roughly +10 pp usually leads to markdowns within two or three quarters, which makes this the earliest warning in the sector. A negative gap means inventory is being run down relative to sales.',
          values: [-5.1, 24.7, -28.3, 95.3, -53.2, 77.8, -33.5, -5.9, -4.7],
          format: { suffix: 'pp', decimals: 1 },
          deltaMode: 'add',
          invertColor: true,
          median10y: -5.1,
          yearNotes: {
            FY21: 'Revenue fell 13% during pandemic closures while inventory rose 83% ahead of reopening, so the gap is distorted.',
            FY22: 'Revenue rebounded 74% after boutiques reopened, while inventory grew 21%.',
            FY23: 'Inventory more than doubled to CA$468M while revenue grew 47%, ahead of the FY24 markdowns that cut gross margin by 310 bp.',
          },
        },
      ],
    },
    stores: {
      metrics: [
        {
          label: 'Boutique count',
          desc: 'Aritzia boutiques open at fiscal year end, excluding the four Reigning Champ boutiques.\nHow it is calculated: as reported in the annual MD&A.\nWhat to watch for: growth that comes mostly from new boutiques while comps stall means the existing fleet is weakening.',
          values: [85, 91, 96, 101, 106, 114, 119, 130, 144],
          format: { decimals: 0 },
          median10y: 106,
          yearNotes: {
            FY23: 'Excludes the four Reigning Champ boutiques acquired with CYC Design Corporation.',
          },
        },
        {
          label: 'Net boutique openings',
          desc: 'Boutiques added during the year, net of closures.\nHow it is calculated: year-end boutique count minus the prior year-end count.\nWhat to watch for: a faster opening pace needs stable revenue per boutique behind it. If openings rise while revenue per boutique falls, the new locations are weaker than the existing ones.',
          values: [6, 6, 5, 5, 5, 8, 5, 11, 14],
          format: { decimals: 0 },
          median10y: 6,
          yearNotes: {
            FY18: 'Calculated from 79 boutiques at the end of FY17.',
          },
        },
        {
          label: 'Revenue per boutique',
          desc: 'Boutique-channel revenue per average boutique, in millions of Canadian dollars. Aritzia does not disclose sales per square foot, so this stands in for it.\nHow it is calculated: retail-channel revenue ÷ the average of opening and closing boutique count. It starts in FY20, when the channel split was first disclosed.\nWhat to watch for: this should hold or rise as the fleet grows. A fall means new boutiques are less productive or are cannibalizing older ones. Retail revenue includes the Reigning Champ boutiques that the count excludes, which lifts the figure slightly from FY22.',
          values: [null, null, 8.1, 4.4, 9.0, 13.0, 13.3, 14.4, 17.6],
          format: { prefix: 'CA$', suffix: 'M', decimals: 1 },
          median10y: 13.0,
          yearNotes: {
            FY21: 'Boutiques were closed for much of the year during the pandemic.',
            FY22: 'Some boutiques were still closed or capacity-limited during the first half of the year.',
          },
        },
        {
          label: 'Capex as % of revenue',
          desc: 'Capital spending as a share of net revenue.\nHow it is calculated: purchases of property and equipment plus purchases of intangible assets, divided by net revenue.\nWhat to watch for: Aritzia’s capital spending is almost entirely new and repositioned boutiques, distribution centres and technology, so a spike signals an expansion push that should later show up in boutique count and revenue.',
          values: [8.9, 7.1, 4.9, 5.9, 4.5, 5.7, 7.6, 10.1, 7.7, 5.4],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 7.1,
          guidanceCount: 1,
          yearNotes: {
            FY27E:
              'Management guidance of about CA$250M over the guided revenue midpoint of CA$4.65B.',
          },
        },
      ],
    },
    margins: {
      series: [
        {
          label: 'Operating margin',
          desc: 'Income from operations ÷ net revenue, after cost of goods sold, SG&A and stock-based compensation.\nWhat to watch for: judge it against the mid-cycle level rather than the peak. A rise while revenue grows is operating leverage, and a fall usually traces back to gross margin.',
          values: [12.7, 13.3, 15.5, 6.0, 15.8, 13.1, 6.8, 10.8, 14.2, null],
        },
        {
          label: 'Net margin',
          desc: 'Net income ÷ net revenue.\nWhat to watch for: the gap to operating margin is finance expense, other income and tax. FY25 and FY26 include gains on equity derivatives that hedge share-unit liabilities, which lift net margin without any change in the business.',
          values: [7.7, 9.0, 9.2, 2.2, 10.5, 8.5, 3.4, 7.6, 10.3, 11.9],
        },
        {
          label: 'FCF margin after leases',
          desc: 'Free cash flow after lease payments ÷ net revenue, where free cash flow after leases is operating cash flow minus capital expenditures minus lease principal payments.\nWhat to watch for: when this line falls below net margin, earnings are not turning into cash, usually because inventory is absorbing working capital, as in FY23.',
          values: [5.1, 3.9, 11.5, 3.7, 14.7, -5.6, 4.0, 2.9, 13.1, 11.8],
        },
      ],
      chartNote:
        'Free cash flow after leases is comparable across all years, because rent sat in operating cash flow before IFRS 16 and lease principal is subtracted after it. FY27E net margin uses MarketScreener consensus net income of CA$562.2M over consensus revenue of CA$4.71B. FY27E free cash flow after leases is consensus free cash flow of CA$637.7M less an assumed CA$81M of lease payments, the FY24–FY26 average. No comparable forward operating margin is available, because the consensus EBIT excludes stock-based compensation. Deltas are additive (pp).',
    },
    returns: {
      metrics: [
        {
          label: 'Lease-adjusted ROIC',
          desc: 'After-tax operating profit as a share of the capital invested in the business, with lease liabilities counted as debt.\nHow it is calculated: income from operations × (1 − effective tax rate), divided by the average of opening and closing invested capital, where invested capital is shareholders’ equity plus bank debt plus lease liabilities minus cash. It starts in FY20, when IFRS 16 put lease liabilities on the balance sheet.\nWhat to watch for: a level sustained above about 15% points to a real franchise. A decline while the boutique base grows means new boutiques earn less than the old ones. This replaces ROE, which ignores lease liabilities and is inflated by buybacks.',
          values: [null, null, 13.3, 4.7, 21.8, 19.1, 7.7, 13.3, 22.2],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 13.3,
          yearNotes: {
            FY20: 'Opening invested capital uses the CA$494M of lease liabilities recognized on the IFRS 16 transition.',
            FY21: 'Pandemic boutique closures cut income from operations to CA$51M.',
            FY24: 'Income from operations nearly halved on normalized markdowns, product-cost inflation and pre-opening lease costs.',
          },
        },
        {
          label: 'Diluted EPS',
          desc: 'Net income per diluted share.\nHow it is calculated: as reported. FY27E is the consensus estimate.\nWhat to watch for: compare EPS growth with net income growth. The difference comes from buybacks and dilution.',
          values: [0.49, 0.67, 0.81, 0.17, 1.36, 1.63, 0.69, 1.78, 3.2, 4.69],
          format: { prefix: 'CA$', decimals: 2 },
          median10y: 0.81,
          guidanceCount: 1,
          yearNotes: {
            FY27E: 'Consensus analyst estimate (MarketScreener).',
          },
        },
        {
          label: 'FCF per share after leases',
          desc: 'Free cash flow after lease payments per diluted share.\nHow it is calculated: (operating cash flow − capital expenditures − lease principal payments) ÷ diluted weighted average shares.\nWhat to watch for: over a cycle this should track diluted EPS. Reported free cash flow per share leaves lease principal out from FY20 onward under IFRS 16, so it overstates the cash available to shareholders.',
          values: [0.33, 0.29, 1.01, 0.28, 1.89, -1.08, 0.81, 0.68, 4.05, 4.66],
          format: { prefix: 'CA$', decimals: 2 },
          median10y: 0.68,
          guidanceCount: 1,
          yearNotes: {
            FY23: 'Negative because the inventory build absorbed CA$229M of working capital.',
            FY26: 'Lease payments are reported net of lease incentives received. They fell to CA$54M from CA$100M in FY25 even though the boutique count grew, so this year is likely flattered.',
            FY27E:
              'Consensus free cash flow of CA$637.7M (MarketScreener) less an assumed CA$81M of lease payments, the FY24–FY26 average, over 119.5M diluted shares.',
          },
        },
        {
          label: 'FCF conversion',
          desc: 'Free cash flow after leases as a share of net income.\nHow it is calculated: free cash flow after lease payments ÷ net income.\nWhat to watch for: over a cycle it should sit near or above 100%. Single years swing with inventory, and a run of years well below 100% means reported earnings overstate the cash the business produces.',
          values: [67, 43, 125, 166, 140, -66, 118, 38, 127, 99],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 118,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Net income was only CA$19M during pandemic closures, so the ratio is inflated.',
            FY23: 'Negative because the inventory build absorbed CA$229M of working capital.',
            FY27E:
              'Estimated free cash flow after leases of CA$557M over consensus net income of CA$562M.',
          },
        },
        {
          label: 'Diluted share count',
          desc: 'Diluted weighted average shares outstanding, in millions.\nHow it is calculated: from the earnings-per-share note to the financial statements.\nWhat to watch for: buybacks should shrink the count over time. A rising count means stock-based compensation is diluting shareholders faster than repurchases offset it.',
          values: [
            116.3, 117.4, 112.1, 112.8, 115.8, 115.3, 114.2, 116.7, 119.5,
          ],
          format: { suffix: 'M', decimals: 1 },
          invertColor: true,
          median10y: 115.8,
        },
        {
          label: 'Net cash',
          desc: 'Cash and cash equivalents minus bank debt at fiscal year end, in billions of Canadian dollars. Lease liabilities are left out here and counted in lease-adjusted ROIC instead.\nHow it is calculated: cash and cash equivalents minus the carrying value of term loans.\nWhat to watch for: net cash is the cushion that lets a fashion retailer get through a product miss without diluting shareholders or halting expansion.',
          values: [-0.01, 0.03, 0.04, 0.07, 0.27, 0.09, 0.16, 0.29, 0.59],
          format: { prefix: 'CA$', suffix: 'B', decimals: 2 },
          median10y: 0.09,
          yearNotes: {
            FY18: 'A term loan of CA$119M exceeded cash. The last CA$75M was repaid in FY22.',
          },
        },
      ],
      chartNote:
        'Source: filed annual statements. Lease-adjusted ROIC starts in FY20, when IFRS 16 put lease liabilities on the balance sheet. 10Y median shown as dashed line.',
    },
  },
  revenueSection: {
    kicker:
      'Net revenue, income from operations and net income in billions of Canadian dollars, with year-on-year growth rates.',
    revenueDesc:
      'Consolidated net revenue from boutiques and digital in Canada and the United States.',
    operatingIncomeDesc:
      'Income from operations under IFRS, after cost of goods sold, SG&A and stock-based compensation. No forward estimate on a comparable basis is available.',
    netIncomeDesc:
      'Net income under IFRS. FY27E is the consensus analyst estimate (MarketScreener).',
    chartNote:
      'FY21 revenue fell as boutiques closed during the pandemic. FY24 operating income nearly halved as gross margin fell on normalized markdowns, product-cost inflation and pre-opening lease costs. FY27E revenue is the midpoint of management guidance of CA$4.55–4.75B (9 July 2026).',
  },
  revenue: [
    { year: 'FY18', revenue: 0.743, operatingIncome: 0.094, netIncome: 0.057 },
    { year: 'FY19', revenue: 0.874, operatingIncome: 0.116, netIncome: 0.079 },
    { year: 'FY20', revenue: 0.981, operatingIncome: 0.152, netIncome: 0.091 },
    { year: 'FY21', revenue: 0.857, operatingIncome: 0.051, netIncome: 0.019 },
    { year: 'FY22', revenue: 1.495, operatingIncome: 0.236, netIncome: 0.157 },
    { year: 'FY23', revenue: 2.196, operatingIncome: 0.287, netIncome: 0.188 },
    { year: 'FY24', revenue: 2.332, operatingIncome: 0.158, netIncome: 0.079 },
    { year: 'FY25', revenue: 2.738, operatingIncome: 0.295, netIncome: 0.208 },
    { year: 'FY26', revenue: 3.702, operatingIncome: 0.524, netIncome: 0.382 },
    { year: 'FY27E', revenue: 4.65, operatingIncome: null, netIncome: 0.562 },
  ],
  thesis: [
    'Aritzia designs and sells its own exclusive brands only through its own boutiques and website, so it captures the full retail margin and controls pricing, which has let gross margin recover from 38.5% in FY24 to 44.9% in FY26.',
    'The United States has grown from a quarter of revenue in FY18 to more than 60% in FY26, and with eleven to twelve of the twelve to thirteen new boutiques planned for FY27 opening there, the U.S. store base still has a long expansion runway.',
    'The business carries no bank debt and funds its boutique expansion from operating cash flow while still buying back shares, although free cash flow swings with inventory, as the negative FY23 showed.',
  ],
};

export default financials;

export const expenseYears = [
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
  0.743267, 0.874296, 0.980589, 0.857323, 1.49463, 2.19563, 2.33235, 2.738112,
  3.702148,
];

export const netIncomeByYear = [
  0.057093, 0.078728, 0.090594, 0.019227, 0.156917, 0.187588, 0.07878, 0.20779,
  0.381848,
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
    desc: 'Cost of goods sold, selling, general and administrative expense, and stock-based compensation, which together bridge net revenue to income from operations.',
    values: [
      0.648873, 0.75822, 0.828317, 0.806235, 1.258611, 1.908476, 2.173936,
      2.443322, 3.178094,
    ],
  },
  {
    label: 'Cost of goods sold',
    desc: 'Product, freight and duty costs plus boutique occupancy and distribution-centre costs, including depreciation of boutique right-of-use assets from FY20 onward.',
    values: [
      0.447776, 0.531383, 0.577165, 0.544818, 0.839678, 1.281638, 1.433369,
      1.557493, 2.040815,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative',
    desc: 'Boutique and head-office wages, marketing, digital fulfilment, technology and other overhead.',
    values: [
      0.183857, 0.215297, 0.243362, 0.250726, 0.392802, 0.602469, 0.708783,
      0.837456, 1.07557,
    ],
    indent: 1,
  },
  {
    label: 'Stock-based compensation expense',
    desc: 'Equity-settled stock option and share-unit expense, reported on its own line below SG&A.',
    values: [
      0.01724, 0.01154, 0.00779, 0.010691, 0.026131, 0.024369, 0.031784,
      0.048373, 0.061709,
    ],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Finance expense net of other income, reported between income from operations and income before income taxes.',
    values: [
      0.007111, 0.004426, 0.026134, 0.024886, 0.016419, 0.023347, 0.043804,
      0.004337, 0.007296,
    ],
  },
  {
    label: 'Finance expense',
    desc: 'Interest on bank debt and, from FY20 onward under IFRS 16, interest on lease liabilities, which is why the line jumps in FY20.',
    values: [
      0.005221, 0.004821, 0.028319, 0.02842, 0.025202, 0.031263, 0.049091,
      0.0488, 0.056764,
    ],
    indent: 1,
  },
  {
    label: 'Other expense (income)',
    desc: 'Foreign exchange, fair-value changes on equity derivative contracts that hedge share-unit liabilities, CYC acquisition fair-value adjustments, and interest income on cash. Negative values are net income.',
    values: [
      0.00189, -0.000395, -0.002185, -0.003534, -0.008783, -0.007916, -0.005287,
      -0.044463, -0.049468,
    ],
    indent: 1,
  },
  {
    label: 'Income tax expense',
    desc: 'Current and deferred income tax expense as reported on the statement of operations.',
    values: [
      0.03019, 0.032922, 0.035544, 0.006975, 0.062683, 0.076219, 0.03583,
      0.082663, 0.13491,
    ],
  },
];

export const cashFlowStatementYears = [
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
    desc: 'Net change in cash and cash equivalents for the year, including the effect of exchange rate changes.',
    values: [
      0.033,
      -0.012,
      0.017,
      0.031,
      0.116,
      -0.179,
      0.077,
      0.122,
      0.306,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash generated from operating activities, after interest and income taxes paid. From FY20 onward IFRS 16 excludes lease principal payments, which appear under financing instead.',
    values: [
      0.105,
      0.096,
      0.222,
      0.126,
      0.338,
      0.075,
      0.359,
      0.456,
      0.823,
      null,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Operating cash flow before the net change in non-cash working capital.',
    values: [
      0.092,
      0.136,
      0.203,
      0.122,
      0.32,
      0.304,
      0.262,
      0.451,
      0.634,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net change in non-cash working capital, chiefly inventory, payables and accrued liabilities. The FY23 outflow reflects the inventory build and the FY24 inflow its reduction.',
    values: [
      0.013,
      -0.04,
      0.019,
      0.004,
      0.019,
      -0.229,
      0.097,
      0.004,
      0.189,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, almost entirely new and repositioned boutiques, distribution centres and technology.',
    values: [
      -0.066,
      -0.062,
      -0.048,
      -0.051,
      -0.1,
      -0.131,
      -0.183,
      -0.277,
      -0.285,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment plus purchases of intangible assets. FY27E is management guidance of approximately CA$250M.',
    values: [
      -0.066, -0.062, -0.048, -0.051, -0.067, -0.126, -0.177, -0.277, -0.285,
      -0.25,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions',
    desc: 'FY22 is the purchase of 75% of CYC Design Corporation (Reigning Champ), net of cash acquired; FY23 and FY24 are contingent-consideration payouts for the same deal.',
    values: [0, 0, 0, 0, -0.033, -0.006, -0.006, 0, 0, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: lease payments, share repurchases, debt repayment and option exercises.',
    values: [
      -0.006,
      -0.046,
      -0.157,
      -0.041,
      -0.124,
      -0.123,
      -0.099,
      -0.06,
      -0.227,
      null,
    ],
  },
  {
    label: 'Share repurchases',
    desc: 'Shares repurchased for cancellation under normal course issuer bids. FY26 also includes CA$62M of shares bought and held in trust for share-unit plans.',
    values: [
      0,
      -0.009,
      -0.108,
      -0.001,
      -0.008,
      -0.061,
      -0.03,
      -0.006,
      -0.207,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Lease payments',
    desc: 'Repayment of lease principal net of lease incentives received. Before FY20 operating leases were expensed through operating cash flow, so this line is near zero.',
    values: [
      -0.001,
      0,
      -0.061,
      -0.043,
      -0.052,
      -0.073,
      -0.089,
      -0.1,
      -0.054,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Debt, options and other',
    desc: 'Term-loan repayments (the last CA$75M was repaid in FY22), proceeds from stock options exercised, and financing fees, computed as the financing residual so the sub-lines sum to the parent.',
    values: [
      -0.005,
      -0.036,
      0.012,
      0.003,
      -0.064,
      0.011,
      0.02,
      0.045,
      0.034,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY27E is the consensus estimate from MarketScreener.',
    values: [
      0.039, 0.034, 0.174, 0.075, 0.271, -0.051, 0.182, 0.179, 0.538, 0.638,
    ],
  },
];
