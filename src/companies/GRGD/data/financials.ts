import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  reverseDcf: {
    companyName: 'Groupe Dynamite',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    reportingCurrency: 'CA$',
    paths: [
      {
        label: 'Free cash flow',
        actual: 0.335,
        forward: 0.333,
      },
    ],
    startNote: 'consensus FY26E free cash flow',
    forwardNote:
      'Consensus FY26E free cash flow of CA$0.333B from 12 analysts (stockanalysis.com, October 2026).',
    sharesOutstanding: 0.1088,
    netCash: 0.032,
    netCashSource: 'CA$0.03B of cash with the revolver undrawn, Q2 FY26 MD&A',
    assumptionNote:
      'Under IFRS 16, free cash flow leaves out lease principal, so it overstates the cash available to owners.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  currency: 'CA$',
  guidanceYears: ['FY26E'],
  metricGroups: {
    valuation: {
      metrics: [
        {
          label: 'P/E ratio',
          desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the TSX closing price on the last trading day of each fiscal year, divided by that year’s diluted EPS. FY26E uses the live price and consensus EPS. Groupe Dynamite listed in November 2024, so there is no price before FY24.\nWhat to watch for: compare the ratio with its own history rather than with other sectors. With only two listed year-ends, the history is too short for a meaningful median.',
          values: [null, null, null, 12.9, 32.2, 16.4],
          format: { decimals: 1 },
          invertColor: true,
          guidanceCount: 1,
          yearNotes: {
            FY24: 'CA$16.15 on 31 January 2025, about ten weeks after the IPO at CA$21.00, divided by diluted EPS of CA$1.25.',
            FY25: 'CA$70.88 on 30 January 2026 divided by diluted EPS of CA$2.20, after comparable store sales grew 26.7%.',
            FY26E:
              'Calculated from CA$53.78 divided by consensus diluted EPS of CA$3.28 (MarketScreener).',
          },
        },
        {
          label: 'P/FCF after leases',
          desc: 'Share price divided by free cash flow per share after lease payments.\nHow it is calculated: the TSX closing price on the last trading day of each fiscal year, divided by free cash flow after leases per diluted share. Free cash flow after leases is operating cash flow minus capital expenditures minus lease principal payments.\nWhat to watch for: a ratio well below its own history suggests the price assumes little growth. Under IFRS 16, reported free cash flow leaves lease principal out, so the reported ratio flatters the stock. This version subtracts it.',
          values: [null, null, null, 13.8, 27.4, 20.8],
          format: { decimals: 1 },
          invertColor: true,
          guidanceCount: 1,
          yearNotes: {
            FY26E:
              'Calculated from CA$53.78 divided by an estimated CA$2.59 of free cash flow after leases per share.',
          },
        },
      ],
    },
    demand: {
      metrics: [
        {
          label: 'Comparable store sales growth',
          desc: 'Sales growth at stores open at least twelve months without a significant change in square footage. Unlike most retailers, Groupe Dynamite excludes e-commerce from this metric.\nHow it is calculated: as reported by the company in the annual MD&A. From FY25 it is computed at budgeted exchange rates.\nWhat to watch for: comps below inflation for several years mean the brand is losing pull. Revenue growth that comes only from new stores while comps stall is a warning.',
          values: [4.7, 9.5, 8.2, 12.3, 26.7, 13.0],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 9.5,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Measured against FY19 rather than the pandemic-affected FY20.',
            FY25: 'Includes a currency benefit from the stronger U.S. dollar. In constant currency the growth was 23.8%.',
            FY26E:
              'Midpoint of management guidance of 12–14% (Q2 FY26 release, 10 September 2026). First-half comps grew 15.2%.',
          },
        },
        {
          label: 'U.S. share of revenue',
          desc: 'Share of revenue from customers in the United States.\nHow it is calculated: U.S. revenue from the geographic note to the financial statements, divided by total revenue.\nWhat to watch for: nearly all new stores open in the United States while Canadian stores close, so this share should keep rising while the expansion works. A stall would mean the growth story is fading.',
          values: [36.5, 35.4, 43.3, 50.6, 56.2],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 43.3,
          yearNotes: {
            FY24: 'The United States overtook Canada for the first time.',
          },
        },
        {
          label: 'Online share of revenue',
          desc: 'Share of revenue from the Garage and Dynamite websites.\nHow it is calculated: online revenue divided by total revenue, from the revenue note to the financial statements.\nWhat to watch for: the share has stayed near a fifth while stores grew faster. About 65% of online orders are shipped from stores, so the two channels share inventory.',
          values: [21.0, 19.4, 18.4, 17.9, 18.9],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 18.9,
        },
      ],
    },
    pricing: {
      metrics: [
        {
          label: 'Gross margin',
          desc: 'Share of revenue left after cost of sales.\nHow it is calculated: (revenue − cost of sales) ÷ revenue. Cost of sales includes merchandise, labour, transportation and the occupancy costs that IFRS 16 leaves in operating expense, but not store or lease depreciation, which Groupe Dynamite reports on its own line.\nWhat to watch for: a fall of 100 bp or more alongside talk of markdowns signals lost pricing power. Because depreciation sits below gross profit, this margin reads much higher than retailers that put store occupancy in cost of goods sold.',
          values: [56.4, 60.2, 60.8, 62.8, 63.8],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 60.8,
          yearNotes: {
            FY25: 'U.S. tariffs weighed on merchandise costs during the year.',
          },
        },
        {
          label: 'Inventory turnover',
          desc: 'How many times a year inventory sells through.\nHow it is calculated: cost of sales ÷ the average of opening and closing inventory.\nWhat to watch for: a steady decline means merchandise is moving more slowly. Groupe Dynamite’s turnover is high for an apparel retailer because it runs lean inventory and ships most online orders from store stock.',
          values: [6.9, 6.8, 8.0, 8.5, 9.9],
          format: { suffix: '×', decimals: 1 },
          median10y: 8.0,
          yearNotes: {
            FY21: 'As reported in the IPO prospectus MD&A, because opening FY21 inventory is not in the filed statements.',
            FY23: 'FY23 had 53 weeks, which lifts cost of sales by about a week.',
          },
        },
        {
          label: 'Inventory growth minus sales growth',
          desc: 'How much faster inventory is growing than sales.\nHow it is calculated: the year-over-year % change in year-end inventory minus the year-over-year % change in revenue, in percentage points.\nWhat to watch for: a gap above roughly +10 pp usually leads to markdowns within two or three quarters, which makes this the earliest warning in the sector. A negative gap means inventory is being run down relative to sales.',
          values: [null, -16.2, -18.3, -3.3, -22.8],
          format: { suffix: 'pp', decimals: 1 },
          deltaMode: 'add',
          invertColor: true,
          median10y: -17.3,
          yearNotes: {
            FY21: 'Not available, because FY20 inventory is not in the filed statements.',
            FY25: 'Inventory grew 13.9% while revenue grew 36.7%.',
          },
        },
      ],
    },
    stores: {
      metrics: [
        {
          label: 'Store count',
          desc: 'Garage and Dynamite stores open at fiscal year end in Canada and the United States.\nHow it is calculated: as reported in the annual MD&A and prospectus.\nWhat to watch for: the total has barely moved because Canadian closures offset U.S. openings. Canada fell from 225 stores to 173 while the United States rose from 72 to 134, so the mix shift matters more than the total.',
          values: [297, 292, 290, 298, 307, 316],
          format: { decimals: 0 },
          median10y: 297,
          guidanceCount: 1,
          yearNotes: {
            FY25: '173 in Canada and 134 in the United States, of which 231 are Garage and 76 are Dynamite.',
            FY26E:
              'FY25 count plus the midpoint of guided net openings of 8–10 (24–26 openings, including the first U.K. stores, and about 16 closures).',
          },
        },
        {
          label: 'Net store openings',
          desc: 'Stores added during the year, net of closures.\nHow it is calculated: year-end store count minus the prior year-end count.\nWhat to watch for: a faster opening pace needs stable revenue per store behind it. Gross openings, almost all U.S. Garage stores, have run at 13 to 20 a year since FY22, while 11 to 21 mostly Canadian stores closed each year.',
          values: [-6, -5, -2, 8, 9, 9],
          format: { decimals: 0 },
          median10y: -2,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Calculated from 303 stores at the end of FY20. Closures followed the 2020–21 creditor-protection (CCAA) restructuring.',
            FY26E: 'Midpoint of management guidance of 8–10 net openings.',
          },
        },
        {
          label: 'Revenue per store',
          desc: 'Retail-channel revenue per average store, in millions of Canadian dollars.\nHow it is calculated: retail (store) revenue ÷ the average of opening and closing store count.\nWhat to watch for: this should hold or rise as the fleet grows. A fall means new stores are less productive or are cannibalizing older ones. Here it has doubled since FY21 because the new U.S. stores are larger and busier than the Canadian stores being closed.',
          values: [1.65, 1.91, 2.25, 2.68, 3.51],
          format: { prefix: 'CA$', suffix: 'M', decimals: 2 },
          median10y: 2.25,
          yearNotes: {
            FY21: 'Calculated from 303 stores at the end of FY20.',
          },
        },
        {
          label: 'Retail sales per square foot',
          desc: 'Store revenue per square foot of selling space, trailing twelve months.\nHow it is calculated: as reported by the company, retail revenue excluding online divided by the average total retail square footage over the last twelve months.\nWhat to watch for: this is the cleanest measure of store productivity, because it adjusts for store size. It has more than doubled since FY21.',
          values: [461, 530, 619, 734, 952],
          format: { prefix: 'CA$', decimals: 0 },
          median10y: 619,
        },
        {
          label: 'Capex as % of revenue',
          desc: 'Capital spending as a share of revenue.\nHow it is calculated: additions to property and equipment plus additions to intangible assets, divided by revenue.\nWhat to watch for: spending is mostly new and renovated stores, so the step up from FY23 marks the start of the U.S. expansion, which should show up later in store count and revenue.',
          values: [1.4, 2.8, 6.7, 6.6, 6.5, 6.4],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 6.5,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Spending was cut to the minimum during the CCAA restructuring.',
            FY26E:
              'Midpoint of management guidance of CA$100–110M over the guided revenue midpoint of CA$1.65B.',
          },
        },
      ],
    },
    margins: {
      series: [
        {
          label: 'Operating margin',
          desc: 'Operating income ÷ revenue, after cost of sales, SG&A, depreciation and amortization, and foreign exchange.\nWhat to watch for: judge it against the mid-cycle level rather than the peak. A rise while revenue grows is operating leverage, and a fall usually traces back to gross margin.',
          values: [7.2, 16.1, 18.1, 22.1, 28.8, 32.9],
        },
        {
          label: 'Net margin',
          desc: 'Net earnings ÷ revenue.\nWhat to watch for: the gap to operating margin is net financing expense, mostly interest on lease liabilities, and tax. FY21 net margin is inflated by a CA$104.7M gain on debt forgiveness from the CCAA restructuring.',
          values: [17.4, 9.0, 10.7, 14.2, 19.2, 22.4],
        },
        {
          label: 'FCF margin after leases',
          desc: 'Free cash flow after lease payments ÷ revenue, where free cash flow after leases is operating cash flow minus capital expenditures minus lease principal payments.\nWhat to watch for: when this line falls below net margin, earnings are not turning into cash, usually because inventory or tax payments are absorbing working capital.',
          values: [13.5, 11.1, 6.7, 13.2, 22.6, 17.9],
        },
      ],
      chartNote:
        'FY21 net margin includes a CA$104.7M CCAA debt-forgiveness gain, which is why it sits above operating margin. FY26E operating margin uses MarketScreener consensus EBIT of CA$542.4M and net margin uses consensus net income of CA$369.5M, both over consensus revenue of CA$1.65B. FY26E free cash flow after leases is consensus free cash flow of CA$333M less an assumed CA$38M of lease payments, the FY23–FY25 average. Deltas are additive (pp).',
    },
    returns: {
      metrics: [
        {
          label: 'Lease-adjusted ROIC',
          desc: 'After-tax operating profit as a share of the capital invested in the business, with lease liabilities counted as debt.\nHow it is calculated: operating income × (1 − effective tax rate), divided by the average of opening and closing invested capital, where invested capital is shareholders’ equity plus bank debt plus lease liabilities minus cash. FY22–FY23 also subtract the CA$110M promissory note lent to the parent company, which was not an operating asset.\nWhat to watch for: a level sustained above about 15% points to a real franchise. A decline while the store base grows means new stores earn less than the old ones. This replaces ROE, which is meaningless here because the pre-IPO dividend and the special dividend pushed equity close to zero.',
          values: [null, 44.0, 36.9, 39.9, 57.6],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 42.0,
          yearNotes: {
            FY21: 'Not available, because the FY20 balance sheet is not in the filed statements.',
            FY24: 'Invested capital includes CA$10.5M of notes payable to pre-IPO shareholders.',
          },
        },
        {
          label: 'Diluted EPS',
          desc: 'Net earnings per diluted share.\nHow it is calculated: as reported from FY23. FY26E is the consensus estimate.\nWhat to watch for: compare EPS growth with net earnings growth. The difference comes from buybacks and dilution.',
          values: [1.02, 0.58, 0.8, 1.25, 2.2, 3.28],
          format: { prefix: 'CA$', decimals: 2 },
          median10y: 1.02,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Net earnings over the 107.5M shares that resulted from the IPO share consolidation. The prospectus reports CA$0.24 on the old pre-consolidation count. Includes a CA$104.7M CCAA debt-forgiveness gain.',
            FY22: 'Net earnings over the 107.5M shares that resulted from the IPO share consolidation. The prospectus reports CA$0.14 on the old pre-consolidation count.',
            FY23: 'As restated for the share consolidation in the FY24 statements.',
            FY26E:
              'Consensus analyst estimate (MarketScreener). First-half diluted EPS was CA$1.45.',
          },
        },
        {
          label: 'FCF per share after leases',
          desc: 'Free cash flow after lease payments per diluted share.\nHow it is calculated: (operating cash flow − capital expenditures − lease principal payments) ÷ diluted weighted average shares.\nWhat to watch for: over a cycle this should track diluted EPS. Reported free cash flow per share leaves lease principal out under IFRS 16, so it overstates the cash available to shareholders.',
          values: [0.79, 0.72, 0.5, 1.17, 2.58, 2.59],
          format: { prefix: 'CA$', decimals: 2 },
          median10y: 0.79,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Uses the post-consolidation count of 107.5M shares.',
            FY22: 'Uses the post-consolidation count of 107.5M shares.',
            FY26E:
              'Consensus free cash flow of CA$333M (MarketScreener) less an assumed CA$38M of lease payments, the FY23–FY25 average, over 114.0M diluted shares (first-half FY26 weighted average).',
          },
        },
        {
          label: 'FCF conversion',
          desc: 'Free cash flow after leases as a share of net earnings.\nHow it is calculated: free cash flow after lease payments ÷ net earnings.\nWhat to watch for: over a cycle it should sit near or above 100%. Single years swing with inventory and tax payments, and a run of years well below 100% means reported earnings overstate the cash the business produces.',
          values: [78, 123, 63, 93, 117, 80],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 93,
          guidanceCount: 1,
          yearNotes: {
            FY21: 'Net earnings include the non-cash CA$104.7M debt-forgiveness gain, which depresses the ratio.',
            FY25: 'Income taxes payable rose by CA$64M, so part of the year’s tax bill was paid in FY26.',
            FY26E:
              'Estimated free cash flow after leases of CA$295M over consensus net income of CA$370M.',
          },
        },
        {
          label: 'Diluted share count',
          desc: 'Diluted weighted average shares outstanding, in millions.\nHow it is calculated: from the earnings-per-share note to the financial statements. FY21–FY22 use the 107.5M shares that resulted from the IPO share consolidation.\nWhat to watch for: buybacks should shrink the count over time. The IPO sold existing shares, so it did not dilute, but legacy options added 6M dilutive shares in FY25.',
          values: [107.5, 107.5, 107.5, 108.8, 114.5],
          format: { suffix: 'M', decimals: 1 },
          invertColor: true,
          median10y: 107.5,
          yearNotes: {
            FY25: 'Includes 6.3M dilutive legacy options and RSUs. The company bought back 0.9M shares during the year and a further 2.0M in the first half of FY26.',
          },
        },
        {
          label: 'Net cash',
          desc: 'Cash minus bank debt at fiscal year end, in billions of Canadian dollars. Lease liabilities are left out here and counted in lease-adjusted ROIC instead.\nHow it is calculated: cash minus the carrying value of long-term debt.\nWhat to watch for: net cash is the cushion that lets a fashion retailer get through a product miss without diluting shareholders or halting expansion.',
          values: [0.01, -0.21, -0.16, 0.07, 0.08],
          format: { prefix: 'CA$', suffix: 'B', decimals: 2 },
          median10y: 0.01,
          yearNotes: {
            FY22: 'Borrowed CA$285M to fund a CA$185M dividend and a CA$110M loan to the parent company before the IPO.',
            FY24: 'The parent repaid the CA$110M loan from IPO proceeds, and the company used the cash to repay all bank debt.',
            FY25: 'Stayed debt-free after paying a CA$252M special dividend.',
          },
        },
      ],
      chartNote:
        'Source: filed annual statements and the IPO prospectus. FY21 and FY22 per-share figures are restated to the post-IPO share basis. 10Y median shown as dashed line.',
    },
  },
  revenueSection: {
    kicker:
      'Revenue, operating income and net earnings in billions of Canadian dollars, with year-on-year growth rates.',
    revenueDesc:
      'Consolidated revenue from Garage and Dynamite stores and websites in Canada and the United States.',
    operatingIncomeDesc:
      'Operating income under IFRS, after cost of sales, SG&A, depreciation and amortization, and foreign exchange. FY26E is MarketScreener consensus EBIT.',
    netIncomeDesc:
      'Net earnings under IFRS. FY21 includes a CA$104.7M CCAA debt-forgiveness gain. FY26E is the consensus analyst estimate (MarketScreener).',
    chartNote:
      'FY23 had 53 weeks, and excluding the extra week FY24 revenue grew 21.4% rather than the reported 19.7%. FY26E revenue is the midpoint of management guidance of 25–27% growth (10 September 2026).',
  },
  revenue: [
    { year: 'FY21', revenue: 0.628, operatingIncome: 0.045, netIncome: 0.109 },
    { year: 'FY22', revenue: 0.697, operatingIncome: 0.112, netIncome: 0.063 },
    { year: 'FY23', revenue: 0.801, operatingIncome: 0.145, netIncome: 0.086 },
    { year: 'FY24', revenue: 0.959, operatingIncome: 0.212, netIncome: 0.136 },
    { year: 'FY25', revenue: 1.31, operatingIncome: 0.378, netIncome: 0.252 },
    { year: 'FY26E', revenue: 1.651, operatingIncome: 0.542, netIncome: 0.37 },
  ],
  thesis: [
    'Garage has turned into a U.S. growth brand. Almost every new store opens in the United States, the U.S. share of revenue has risen from 36% in FY21 to 56% in FY25, and retail sales per square foot have more than doubled to CA$952 over the same period.',
    'The model earns unusually high returns for an apparel retailer. Gross margin has risen every year to 63.8%, inventory turns almost ten times a year, and lease-adjusted ROIC has stayed above 35% since FY22 while the store base expanded.',
    'Founder Andrew Lutfy controls about 98% of the votes through multiple voting shares, and the company went through creditor protection in 2020–21. Capital allocation, including the CA$252M special dividend and block buybacks from Lutfy’s holding company, rests largely with him.',
  ],
};

export default financials;

export const expenseYears = ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'];

export const revenueByYear = [0.628043, 0.697442, 0.800833, 0.958525, 1.310234];

export const netIncomeByYear = [
  0.10918, 0.062846, 0.085816, 0.135768, 0.252173,
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
    desc: 'Cost of sales, selling, general and administrative expenses, depreciation and amortization, and foreign exchange, which together bridge revenue to operating income.',
    values: [0.5827, 0.585456, 0.655642, 0.746319, 0.932547],
  },
  {
    label: 'Cost of sales',
    desc: 'Merchandise, labour and transportation costs plus occupancy costs (variable and short-term rent and other store costs not capitalized under IFRS 16). Excludes depreciation.',
    values: [0.27365, 0.277882, 0.313646, 0.356933, 0.473713],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative expenses',
    desc: 'Store and head-office wages and benefits (including stock-based compensation), selling and marketing, and administrative costs, which include IPO professional fees in FY24.',
    values: [0.246296, 0.241047, 0.272338, 0.313161, 0.363982],
    indent: 1,
  },
  {
    label: 'Depreciation and amortization',
    desc: 'Depreciation of property and equipment and of right-of-use (lease) assets, and amortization of intangible assets, reported on its own line below gross profit.',
    values: [0.058049, 0.066852, 0.06937, 0.076759, 0.094092],
    indent: 1,
  },
  {
    label: 'Foreign exchange loss (gain)',
    desc: 'Foreign exchange on operating balances. Negative values are gains.',
    values: [0.004705, -0.000325, 0.000288, -0.000534, 0.00076],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Net financing expense and the CCAA debt-forgiveness items, reported between operating income and earnings before income taxes. Negative values are net income.',
    values: [-0.093941, 0.027079, 0.026548, 0.024613, 0.025412],
  },
  {
    label: 'Finance expense',
    desc: 'Interest on bank debt, interest on lease liabilities, derivative fair-value changes and amortization of financing costs. Lease interest is most of the line since the bank debt was repaid in November 2024.',
    values: [0.011538, 0.019092, 0.037272, 0.034409, 0.030787],
    indent: 1,
  },
  {
    label: 'Finance income',
    desc: 'Interest on cash and, from FY22 to FY24, interest on the CA$110M promissory note receivable from the parent company. Shown as negative because it is income.',
    values: [-0.000732, -0.004197, -0.010724, -0.009796, -0.005375],
    indent: 1,
  },
  {
    label: 'CCAA debt forgiveness',
    desc: 'Gain on debt forgiven under the 2020–21 Companies’ Creditors Arrangement Act restructuring, with a partial reversal in FY22. Negative values are gains.',
    values: [-0.104747, 0.012184, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Income taxes',
    desc: 'Current and deferred income tax expense as reported on the statement of earnings.',
    values: [0.030104, 0.022061, 0.032827, 0.051825, 0.100102],
  },
];

export const cashFlowStatementYears = [
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
    desc: 'Net change in cash for the year, including the effect of exchange rate changes.',
    values: [0.037, -0.061, -0.026, 0.066, 0.008, null],
  },
  {
    label: 'Operating activities',
    desc: 'Cash generated from operating activities, after interest and income taxes paid. Under IFRS 16 lease principal payments appear under financing instead.',
    values: [0.126, 0.126, 0.146, 0.227, 0.421, null],
  },
  {
    label: 'Operating cash flow before working capital',
    desc: 'Net earnings adjusted for depreciation, stock-based compensation, deferred taxes, the CCAA gain and other non-cash items, before the change in working capital.',
    values: [0.088, 0.139, 0.161, 0.217, 0.347, null],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net change in non-cash working capital. FY21 includes higher payables after the restructuring, and FY25 includes CA$64M of income taxes accrued but not yet paid.',
    values: [0.039, -0.013, -0.015, 0.01, 0.073, null],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash from (used in) investing activities: store and technology spending, plus the promissory note lent to and repaid by the parent company.',
    values: [-0.009, -0.13, -0.053, 0.047, -0.086, null],
  },
  {
    label: 'Capital expenditures',
    desc: 'Additions to property and equipment plus additions to intangible assets. FY26E is the midpoint of management guidance of CA$100–110M.',
    values: [-0.009, -0.02, -0.053, -0.063, -0.086, -0.105],
    indent: 1,
  },
  {
    label: 'Promissory note to parent',
    desc: 'A CA$110M loan to the parent company in FY22, funded with new bank debt, which the parent repaid from IPO proceeds in FY24.',
    values: [0, -0.11, 0, 0.11, 0, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: lease payments, debt, dividends and share repurchases.',
    values: [-0.08, -0.056, -0.117, -0.206, -0.328, null],
  },
  {
    label: 'Lease payments',
    desc: 'Repayment of principal on lease liabilities (net of lease incentives received in FY25).',
    values: [-0.033, -0.029, -0.039, -0.037, -0.04, null],
    indent: 1,
  },
  {
    label: 'Dividends',
    desc: 'A CA$185M dividend to the pre-IPO owners in FY22 and a CA$2.30 per share special dividend (CA$252M) paid in December 2025.',
    values: [0, -0.185, 0, 0, -0.252, null],
    indent: 1,
  },
  {
    label: 'Share repurchases',
    desc: 'Subordinate voting shares repurchased for cancellation under the normal course issuer bid, which began in April 2025.',
    values: [0, 0, 0, 0, -0.035, null],
    indent: 1,
  },
  {
    label: 'Debt and other',
    desc: 'Bank borrowings and repayments, financing fees, debtor-in-possession financing, notes payable to parent companies, retractable share redemptions and stock-option proceeds, computed as the financing residual so the sub-lines sum to the parent.',
    values: [-0.048, 0.158, -0.079, -0.169, -0.001, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY26E is the consensus estimate from MarketScreener.',
    values: [0.117, 0.106, 0.092, 0.164, 0.335, 0.333],
  },
];
