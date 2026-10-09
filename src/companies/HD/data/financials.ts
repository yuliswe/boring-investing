import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  guidanceYears: ['FY26E'],
  metricGroups: {
    valuation: {
      metrics: [
        {
          label: 'P/E ratio',
          desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the NYSE closing price on the last trading day of each fiscal year, divided by that year’s diluted EPS. FY26E uses the live price and the midpoint of management’s GAAP EPS guidance.\nWhat to watch for: compare the ratio with its own history rather than with other sectors. Earnings fall in bad years, which pushes the ratio up, so a high P/E in a weak year does not mean the stock is expensive.',
          values: [28.4, 18.9, 22.3, 22.7, 23.6, 19.0, 23.5, 27.6, 26.3, 20.4],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 23.5,
          guidanceCount: 1,
          yearNotes: {
            FY17: 'Net earnings carried a 37.0% effective tax rate, including a net $127M charge from the Tax Act, before the 21% federal rate took effect in FY18.',
            FY18: 'Diluted EPS rose 33% on the lower tax rate while the share price fell 11%.',
            FY25: 'The share price fell 9% during the year as diluted EPS declined for a third year.',
            FY26E:
              'Calculated from $295.47 divided by $14.51, the midpoint of guidance for diluted EPS growth of flat to 4% from $14.23 (18 August 2026).',
          },
        },
        {
          label: 'P/FCF ratio',
          desc: 'Share price divided by free cash flow per share.\nHow it is calculated: the NYSE closing price on the last trading day of each fiscal year, divided by free cash flow (operating cash flow minus capital expenditures) per diluted share. Under US GAAP, operating lease payments stay in operating cash flow, so free cash flow already covers rent and needs no lease adjustment.\nWhat to watch for: a ratio well below its own median suggests the price assumes little growth. Free cash flow swings with inventory, so read single years with care.',
          values: [24.2, 19.7, 22.7, 17.8, 27.7, 28.2, 19.8, 25.1, 29.5, 17.3],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 24.2,
          guidanceCount: 1,
          yearNotes: {
            FY20: 'Free cash flow jumped 49% to $16.4B on pandemic demand for home projects.',
            FY22: 'Free cash flow fell to $11.5B as inventory grew a further $2.8B.',
            FY25: 'Free cash flow fell 23% to $12.6B as inventory grew $1.5B.',
            FY26E:
              'Calculated from $295.47 divided by an estimated $17.06 of free cash flow per share.',
          },
        },
      ],
    },
    demand: {
      metrics: [
        {
          label: 'Comparable sales growth',
          desc: 'Sales growth from stores and online sales open more than a year, which separates demand from the effect of new stores and acquisitions.\nHow it is calculated: as reported by Home Depot in the annual 10-K. The 53rd week of FY18 and FY24 is excluded. FY26E is the midpoint of guidance of flat to 2%.\nWhat to watch for: comps below inflation for several years mean the business is losing pull. Home Depot’s comps follow housing turnover and home-improvement spending closely, so a run of flat or negative years is as much a housing signal as a company one.',
          values: [6.8, 5.2, 3.5, 19.7, 11.4, 3.1, -3.2, -1.8, 0.3, 1.0],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 3.5,
          guidanceCount: 1,
          yearNotes: {
            FY20: 'During the pandemic, comparable transactions rose 8.6% while comparable ticket rose 10.5%.',
            FY26E:
              'Midpoint of management guidance of flat to 2.0% (reaffirmed 18 August 2026).',
          },
        },
        {
          label: 'Customer transactions',
          desc: 'Number of customer transactions in the year, in millions, for the Home Depot stores and websites.\nHow it is calculated: as reported in the 10-K. HD Supply, SRS and GMS are excluded.\nWhat to watch for: transactions measure how many trips customers make. When comps hold up only because the average ticket rises, the number of shoppers is shrinking underneath.',
          values: [
            1578.6, 1620.8, 1616.0, 1756.3, 1759.7, 1666.4, 1621.8, 1637.2,
            1601.5,
          ],
          format: { suffix: 'M', decimals: 0 },
          median10y: 1621.8,
          yearNotes: {
            FY18: 'Includes 24.5M transactions from the 53rd week.',
            FY22: 'Comparable transactions fell 5.4% while comparable ticket rose 8.8%.',
            FY24: 'Includes the 53rd week.',
          },
        },
        {
          label: 'Average ticket',
          desc: 'Average spend per customer transaction, in US dollars.\nHow it is calculated: as reported in the 10-K, excluding HD Supply, SRS and GMS.\nWhat to watch for: ticket rises with inflation and with bigger projects. Ticket growth well above inflation with falling transactions means fewer customers are spending more each.',
          values: [
            63.06, 65.74, 67.3, 74.32, 83.04, 90.36, 90.07, 89.31, 90.56,
          ],
          format: { prefix: '$', decimals: 2 },
          median10y: 83.04,
        },
        {
          label: 'Online share of sales',
          desc: 'Share of net sales from orders placed on Home Depot’s websites and apps, including orders picked up in store.\nHow it is calculated: as reported in the 10-K, excluding HD Supply and SRS.\nWhat to watch for: a rising share is usually healthy, but delivered orders carry shipping costs that store sales do not, so a rising share can weigh on margins.',
          values: [6.7, 7.9, 9.3, 14.4, 13.7, 14.2, 14.8, 15.1, 15.9],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 14.2,
          yearNotes: {
            FY20: 'Online sales grew about 86% during the pandemic.',
          },
        },
      ],
    },
    pricing: {
      metrics: [
        {
          label: 'Gross margin',
          desc: 'Share of net sales left after cost of sales.\nHow it is calculated: (net sales − cost of sales) ÷ net sales. FY26E is management guidance.\nWhat to watch for: a fall of 100 bp or more alongside talk of markdowns signals lost pricing power. From FY24 the figure includes SRS and GMS, so the mix of businesses behind it has changed.',
          values: [34.0, 34.3, 34.1, 34.0, 33.6, 33.5, 33.4, 33.4, 33.3, 33.1],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 33.6,
          guidanceCount: 1,
          yearNotes: {
            FY26E:
              'Management guidance of approximately 33.1% (reaffirmed 18 August 2026).',
          },
        },
        {
          label: 'Inventory turnover',
          desc: 'How many times a year inventory sells through.\nHow it is calculated: cost of sales ÷ the average of opening and closing merchandise inventories.\nWhat to watch for: a steady decline means merchandise is moving more slowly. Compare the level with Home Depot’s own history rather than with other retailers.',
          values: [5.3, 5.3, 5.1, 5.6, 5.2, 4.5, 4.4, 4.8, 4.5],
          format: { suffix: '×', decimals: 1 },
          median10y: 5.1,
          yearNotes: {
            FY22: 'Inventory reached $24.9B, up 50% in two years.',
          },
        },
        {
          label: 'Inventory growth minus sales growth',
          desc: 'How much faster inventory is growing than sales.\nHow it is calculated: the year-over-year % change in year-end merchandise inventories minus the year-over-year % change in net sales, in percentage points.\nWhat to watch for: a gap above roughly +10 pp usually leads to markdowns within two or three quarters. A negative gap means inventory is being run down relative to sales. From FY24 acquired SRS and GMS inventory lifts the gap in the year of each deal.',
          values: [-5.1, 2.0, 2.5, -5.4, 18.3, 8.6, -12.7, 7.3, 6.8],
          format: { suffix: 'pp', decimals: 1 },
          deltaMode: 'add',
          invertColor: true,
          median10y: 2.5,
          yearNotes: {
            FY21: 'Inventory grew 33% to $22.1B while net sales grew 14%.',
            FY23: 'Inventory was cut by $3.9B as comps turned negative.',
            FY24: 'Includes inventory acquired with SRS in June 2024.',
            FY25: 'Includes inventory acquired with GMS in September 2025.',
          },
        },
      ],
    },
    stores: {
      metrics: [
        {
          label: 'Store count',
          desc: 'Home Depot stores open at fiscal year end in the United States, Canada and Mexico. SRS branches (over 1,250 at the end of FY25) are not included.\nHow it is calculated: as reported in the annual 10-K. FY26E adds management’s plan for about 15 new stores.\nWhat to watch for: the store base is mature and barely grows, so growth has to come from comps, from sales per square foot and from acquisitions.',
          values: [2284, 2287, 2291, 2296, 2317, 2322, 2335, 2347, 2359, 2374],
          format: { decimals: 0 },
          median10y: 2317,
          guidanceCount: 1,
          yearNotes: {
            FY26E:
              'FY25 count plus approximately 15 new stores from management guidance.',
          },
        },
        {
          label: 'Net store openings',
          desc: 'Stores added during the year, net of closures.\nHow it is calculated: year-end store count minus the prior year-end count.\nWhat to watch for: Home Depot opens only a handful of stores a year, so a faster pace marks a deliberate change in strategy and should be backed by stable sales per square foot.',
          values: [6, 3, 4, 5, 21, 5, 13, 12, 12, 15],
          format: { decimals: 0 },
          median10y: 6,
          guidanceCount: 1,
          yearNotes: {
            FY17: 'Calculated from 2,278 stores at the end of FY16.',
            FY21: 'Includes 14 U.S. stores that came with a small acquisition.',
            FY26E:
              'Management guidance of approximately 15 new stores (reaffirmed 18 August 2026).',
          },
        },
        {
          label: 'Sales per retail square foot',
          desc: 'Annual sales per square foot of store selling space, in US dollars.\nHow it is calculated: as reported in the 10-K. Home Depot stopped reporting the metric in the FY25 10-K, so the series ends in FY24.\nWhat to watch for: with a store base that barely grows, this is the main measure of store productivity. It should hold or rise; a fall means each store is selling less.',
          values: [
            417.02, 446.86, 454.82, 543.74, 604.74, 627.17, 604.55, 599.92,
          ],
          format: { prefix: '$', decimals: 0 },
          median10y: 571.83,
          yearNotes: {
            FY18: 'The 53rd week added $6.87.',
          },
        },
        {
          label: 'Capex as % of revenue',
          desc: 'Capital spending as a share of net sales.\nHow it is calculated: capital expenditures ÷ net sales. FY26E is management guidance.\nWhat to watch for: Home Depot spends mainly on its supply chain, technology and store upkeep rather than new stores, so a rise signals investment in distribution and delivery capacity.',
          values: [1.9, 2.3, 2.4, 1.9, 1.7, 2.0, 2.1, 2.2, 2.2, 2.5],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 2.1,
          guidanceCount: 1,
          yearNotes: {
            FY26E:
              'Management guidance of approximately 2.5% of total sales (reaffirmed 18 August 2026).',
          },
        },
      ],
    },
    margins: {
      series: [
        {
          label: 'Operating margin',
          desc: 'Operating income ÷ net sales.\nWhat to watch for: judge it against the mid-cycle level rather than the FY21–FY22 peak. From FY24 it includes the lower-margin SRS and GMS businesses and the amortization of their intangible assets.',
          values: [14.5, 14.4, 14.4, 13.8, 15.2, 15.3, 14.2, 13.5, 12.7, 12.5],
        },
        {
          label: 'Net margin',
          desc: 'Net earnings ÷ net sales.\nWhat to watch for: the gap to operating margin is interest and tax. The gap narrowed in FY18 when the federal tax rate fell to 21%.',
          values: [8.6, 10.3, 10.2, 9.7, 10.9, 10.9, 9.9, 9.3, 8.6, 8.4],
        },
        {
          label: 'FCF margin',
          desc: 'Free cash flow ÷ net sales, where free cash flow is operating cash flow minus capital expenditures. Under US GAAP, operating lease payments stay in operating cash flow, so this already covers rent.\nWhat to watch for: when this line falls below net margin, earnings are not turning into cash, usually because inventory is absorbing working capital, as in FY22.',
          values: [10.0, 9.9, 10.0, 12.4, 9.3, 7.3, 11.8, 10.2, 7.7, 10.0],
        },
      ],
      chartNote:
        'FY26E operating and net margins are management guidance (operating margin of 12.4–12.6%, with net earnings derived from the guided tax rate of 24.3% and net interest of $2.3B, 18 August 2026). FY26E free cash flow is the consensus estimate of $16.97B (stockanalysis.com) over guided net sales of $170.45B. Deltas are additive (pp).',
    },
    returns: {
      metrics: [
        {
          label: 'Lease-adjusted ROIC',
          desc: 'After-tax operating profit as a share of the capital invested in the business, with operating lease liabilities counted as debt.\nHow it is calculated: operating income plus the implied interest on operating leases (average lease liability × weighted-average discount rate), × (1 − effective tax rate), divided by the average of opening and closing invested capital, where invested capital is stockholders’ equity plus debt (commercial paper and long-term debt including finance leases) plus operating lease liabilities minus cash. It starts in FY19, when ASC 842 put operating leases on the balance sheet.\nWhat to watch for: a level sustained above about 15% points to a real franchise. Home Depot’s equity is small, and was negative in FY18, FY19 and FY21, because buybacks have returned more than retained earnings, so ROE is meaningless here and ROIC is the measure to use.',
          values: [null, null, 38.5, 39.4, 43.3, 40.4, 33.8, 28.6, 22.5],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 38.5,
          yearNotes: {
            FY19: 'Opening invested capital uses the $6.0B of operating lease liabilities recognized on adoption of ASC 842.',
            FY20: 'Invested capital rose with the $8.7B HD Supply acquisition in December 2020.',
            FY24: 'The $18.0B SRS acquisition in June 2024 added $11.0B of goodwill to invested capital.',
            FY25: 'The $5.1B GMS acquisition in September 2025 added a further $2.6B of goodwill.',
          },
        },
        {
          label: 'Diluted EPS',
          desc: 'Net earnings per diluted share.\nHow it is calculated: as reported. FY26E is the midpoint of management guidance.\nWhat to watch for: compare EPS growth with net earnings growth. The difference comes from buybacks, which Home Depot suspended after the SRS acquisition.',
          values: [
            7.29, 9.73, 10.25, 11.94, 15.53, 16.69, 15.11, 14.91, 14.23, 14.51,
          ],
          format: { prefix: '$', decimals: 2 },
          median10y: 14.23,
          guidanceCount: 1,
          yearNotes: {
            FY18: 'Includes the $247M impairment of Interline trade names and about $0.21 from the 53rd week.',
            FY24: 'Includes about $0.30 from the 53rd week.',
            FY26E:
              'Midpoint of guidance for diluted EPS growth of flat to 4% from $14.23 (reaffirmed 18 August 2026).',
          },
        },
        {
          label: 'Free cash flow per share',
          desc: 'Free cash flow per diluted share.\nHow it is calculated: (operating cash flow − capital expenditures) ÷ diluted weighted average shares. Under US GAAP, operating lease payments are already inside operating cash flow.\nWhat to watch for: over a cycle this should track diluted EPS.',
          values: [
            8.56, 9.38, 10.04, 15.19, 13.24, 11.22, 17.91, 16.44, 12.71, 17.06,
          ],
          format: { prefix: '$', decimals: 2 },
          median10y: 12.71,
          guidanceCount: 1,
          yearNotes: {
            FY23: 'Inventory was cut by $3.9B, which released cash.',
            FY26E:
              'Consensus free cash flow of $16.97B (stockanalysis.com) over FY25 diluted shares of 995M.',
          },
        },
        {
          label: 'FCF conversion',
          desc: 'Free cash flow as a share of net earnings.\nHow it is calculated: free cash flow ÷ net earnings.\nWhat to watch for: over a cycle it should sit near or above 100%. Single years swing with inventory, and a run of years well below 100% means reported earnings overstate the cash the business produces.',
          values: [117, 96, 98, 127, 85, 67, 119, 110, 89, 118],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 98,
          guidanceCount: 1,
          yearNotes: {
            FY22: 'Inventory grew $2.8B.',
            FY26E:
              'Consensus free cash flow of $16.97B over net earnings of $14.39B implied by guidance.',
          },
        },
        {
          label: 'Diluted share count',
          desc: 'Diluted weighted average shares outstanding, in millions.\nHow it is calculated: from the earnings-per-share note to the financial statements.\nWhat to watch for: buybacks should shrink the count over time. Home Depot repurchased no shares in FY25 and has said it will not resume repurchases in FY26 while it pays down acquisition debt, so the count has stopped falling.',
          values: [1184, 1143, 1097, 1078, 1058, 1025, 1002, 993, 995],
          format: { suffix: 'M', decimals: 0 },
          invertColor: true,
          median10y: 1058,
        },
        {
          label: 'Net cash',
          desc: 'Cash and cash equivalents minus debt at fiscal year end, in billions of US dollars. Debt is commercial paper plus long-term debt, including current installments and finance leases. Operating lease liabilities are left out here and counted in lease-adjusted ROIC instead.\nHow it is calculated: cash and cash equivalents minus total debt.\nWhat to watch for: Home Depot runs with deliberate net debt rather than a cash cushion. Its stability comes from steady cash flow, so watch the debt against operating income, which rose from 1.8× in FY17 to 2.7× in FY25.',
          values: [
            -23.43, -27.42, -29.35, -29.34, -37.74, -40.44, -40.35, -51.72,
            -54.38,
          ],
          format: { prefix: '$', suffix: 'B', decimals: 2 },
          median10y: -37.74,
          yearNotes: {
            FY24: 'Home Depot issued $10.0B of long-term debt in the year it acquired SRS.',
            FY25: 'Commercial paper rose to $4.5B in the year it acquired GMS.',
          },
        },
      ],
      chartNote:
        'Source: filed annual statements. Lease-adjusted ROIC starts in FY19, when ASC 842 put operating leases on the balance sheet. 10Y median shown as dashed line.',
    },
  },
  revenueSection: {
    kicker:
      'Net sales, operating income and net earnings in billions of US dollars, with year-on-year growth rates.',
    revenueDesc:
      'Consolidated net sales of the Home Depot stores and websites, HD Supply from December 2020, SRS from June 2024 and GMS from September 2025.',
    operatingIncomeDesc:
      'Operating income after cost of sales, SG&A, depreciation and amortization, and the FY18 impairment.',
    netIncomeDesc:
      'GAAP net earnings. FY26E is derived from guided operating margin, net interest and tax rate.',
    chartNote:
      'FY18 and FY24 had 53 weeks; the extra week added about $1.7B and $2.5B of net sales. FY26E net sales of $170.45B are FY25 sales grown by the 3.5% midpoint of management guidance of 2.5–4.5% (reaffirmed 18 August 2026).',
  },
  revenue: [
    { year: 'FY17', revenue: 100.9, operatingIncome: 14.68, netIncome: 8.63 },
    { year: 'FY18', revenue: 108.2, operatingIncome: 15.53, netIncome: 11.12 },
    { year: 'FY19', revenue: 110.23, operatingIncome: 15.84, netIncome: 11.24 },
    { year: 'FY20', revenue: 132.11, operatingIncome: 18.28, netIncome: 12.87 },
    { year: 'FY21', revenue: 151.16, operatingIncome: 23.04, netIncome: 16.43 },
    { year: 'FY22', revenue: 157.4, operatingIncome: 24.04, netIncome: 17.11 },
    { year: 'FY23', revenue: 152.67, operatingIncome: 21.69, netIncome: 15.14 },
    { year: 'FY24', revenue: 159.51, operatingIncome: 21.53, netIncome: 14.81 },
    { year: 'FY25', revenue: 164.68, operatingIncome: 20.89, netIncome: 14.16 },
    {
      year: 'FY26E',
      revenue: 170.45,
      operatingIncome: 21.31,
      netIncome: 14.39,
    },
  ],
  thesis: [
    'Home Depot earns franchise-level returns from a store base that barely grows. It added only 75 stores from FY17 to FY25, yet sales per square foot rose from $417 to a peak of $627 in FY22, and lease-adjusted ROIC stayed near 40% from FY19 to FY22.',
    'Demand follows the housing market. Comparable sales fell in FY23 and FY24 and rose only 0.3% in FY25, and customer transactions are below their FY21 level. Management has bought growth instead, through SRS ($18.0B) and GMS ($5.1B), which sell roofing, landscape, pool and interior building products to professional contractors.',
    'Those deals were paid for with debt, and they have diluted returns. Debt rose to $55.8B, buybacks stopped after FY24 and lease-adjusted ROIC fell to 22.5% in FY25. The dividend, raised every year from $3.56 a share in FY17 to $9.20 in FY25, is now the main way cash reaches shareholders.',
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
  100.904, 108.203, 110.225, 132.11, 151.157, 157.403, 152.669, 159.514,
  164.683,
];

export const netIncomeByYear = [
  8.63, 11.121, 11.242, 12.866, 16.433, 17.105, 15.143, 14.806, 14.156,
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
    desc: 'Cost of sales, selling, general and administrative, depreciation and amortization, and impairment loss, which together bridge net sales to operating income.',
    values: [
      86.223, 92.673, 94.382, 113.832, 128.117, 133.364, 130.98, 137.988,
      143.793,
    ],
  },
  {
    label: 'Cost of sales',
    desc: 'Cost of sales as reported on the income statement.',
    values: [
      66.548, 71.043, 72.653, 87.257, 100.325, 104.625, 101.709, 106.206,
      109.818,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative',
    desc: 'Store and corporate operating costs. FY20 includes about $2.0B of expanded pay and benefits for associates during the pandemic.',
    values: [
      17.864, 19.513, 19.74, 24.447, 25.406, 26.284, 26.598, 28.748, 30.702,
    ],
    indent: 1,
  },
  {
    label: 'Depreciation and amortization',
    desc: 'Depreciation and amortization reported in operating expenses, including amortization of intangible assets from HD Supply, SRS and GMS. Depreciation of distribution assets inside cost of sales is not included.',
    values: [1.811, 1.87, 1.989, 2.128, 2.386, 2.455, 2.673, 3.034, 3.273],
    indent: 1,
  },
  {
    label: 'Impairment loss',
    desc: 'Impairment of Interline Brands trade names in FY18.',
    values: [0, 0.247, 0, 0, 0, 0, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Interest and other, net: interest expense less interest and investment income, reported between operating income and earnings before taxes.',
    values: [0.983, 0.974, 1.128, 1.3, 1.303, 1.562, 1.765, 2.12, 2.288],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on senior notes, commercial paper and finance leases. It has more than doubled since FY17 as debt rose to fund buybacks and the HD Supply, SRS and GMS acquisitions.',
    values: [1.057, 1.051, 1.201, 1.347, 1.347, 1.617, 1.943, 2.321, 2.412],
    indent: 1,
  },
  {
    label: 'Interest and investment income',
    desc: 'Interest earned on cash and investments. Shown as negative because it is income.',
    values: [
      -0.074, -0.077, -0.073, -0.047, -0.044, -0.055, -0.178, -0.201, -0.124,
    ],
    indent: 1,
  },
  {
    label: 'Provision for income taxes',
    desc: 'Current and deferred income tax expense as reported on the income statement. FY17 includes a net $127M charge from the Tax Act.',
    values: [5.068, 3.435, 3.473, 4.112, 5.304, 5.372, 4.781, 4.6, 4.446],
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
    desc: 'Net change in cash and cash equivalents for the year, including the effect of exchange rate changes.',
    values: [
      1.057,
      -1.817,
      0.355,
      5.762,
      -5.552,
      0.414,
      1.003,
      -2.101,
      -0.27,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities.',
    values: [
      12.031,
      13.165,
      13.687,
      18.839,
      16.571,
      14.615,
      21.172,
      19.81,
      16.325,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities: capital expenditures and acquisitions.',
    values: [
      -2.228,
      -2.416,
      -2.653,
      -10.17,
      -2.969,
      -3.14,
      -4.729,
      -21.031,
      -8.98,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Capital expenditures. FY26E is management guidance of approximately 2.5% of guided net sales.',
    values: [
      -1.897, -2.442, -2.678, -2.463, -2.566, -3.119, -3.226, -3.485, -3.679,
      -4.26,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions',
    desc: 'Payments for businesses acquired, net of cash: HD Supply in FY20, SRS in FY24 and GMS in FY25, plus smaller deals.',
    values: [-0.374, -0.021, 0, -7.78, -0.421, 0, -1.514, -17.644, -5.41, null],
    indent: 1,
  },
  {
    label: 'Other investing',
    desc: 'Proceeds from sales of property and other investing activities.',
    values: [
      0.043,
      0.047,
      0.025,
      0.073,
      0.018,
      -0.021,
      0.011,
      0.098,
      0.109,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: dividends, share repurchases and debt.',
    values: [
      -8.87,
      -12.547,
      -10.798,
      -2.983,
      -19.12,
      -10.993,
      -15.443,
      -0.694,
      -7.714,
      null,
    ],
  },
  {
    label: 'Repurchases of common stock',
    desc: 'Shares bought back. Repurchases were small in FY20 and stopped after the SRS acquisition in FY24; the FY25 10-K says they will not resume in FY26.',
    values: [
      -8.0,
      -9.963,
      -6.965,
      -0.791,
      -14.809,
      -6.696,
      -7.951,
      -0.649,
      0,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Cash dividends',
    desc: 'Cash dividends paid to shareholders.',
    values: [
      -4.212,
      -4.704,
      -5.958,
      -6.451,
      -6.985,
      -7.789,
      -8.383,
      -8.929,
      -9.152,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Net borrowings',
    desc: 'Proceeds from long-term debt less repayments, plus the net change in commercial paper.',
    values: [
      3.298,
      2.037,
      1.985,
      4.087,
      2.482,
      3.416,
      0.724,
      8.79,
      1.269,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other financing',
    desc: 'Proceeds from employee stock plans and other financing items.',
    values: [
      0.044,
      0.083,
      0.14,
      0.172,
      0.192,
      0.076,
      0.167,
      0.094,
      0.169,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY26E is the consensus estimate from stockanalysis.com.',
    values: [
      10.134, 10.723, 11.009, 16.376, 14.005, 11.496, 17.946, 16.325, 12.646,
      16.97,
    ],
  },
];
