import type { RetailFinancials } from '@/templates/RetailTemplate';

const financials: RetailFinancials = {
  reverseDcf: {
    companyName: 'Costco',
    actualYear: 'FY26',
    forwardYear: 'FY27E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 9.382,
        forward: 7.61,
      },
    ],
    startNote: 'consensus FY27E free cash flow',
    actualNote:
      'Actual FY26 free cash flow of $9.38B, up 20% as accounts payable grew $2.8B, more than the $1.2B increase in inventory.',
    forwardNote:
      'Consensus FY27E free cash flow of $7.61B (stockanalysis.com, 17 November 2026). Costco gives no earnings or cash flow guidance.',
    sharesOutstanding: 0.4431,
    netCash: 15.14,
    netCashSource:
      '$20.21B of cash and cash equivalents plus $1.09B of short-term investments, minus $6.16B of long-term debt including the current portion, at 30 August 2026 (FY26 10-K); lease liabilities are excluded because free cash flow is already struck after rent. The $30 special dividend declared on 10 November 2026 will pay out about $13.3B on 4 December, and the 20 November price still includes it',
    sharesSource:
      '443.1M shares on the cover of the FY26 10-K, 29 September 2026',
  },
  guidanceYears: ['FY27E'],
  metricGroups: {
    valuation: {
      metrics: [
        {
          label: 'P/E ratio',
          desc: 'Share price divided by diluted earnings per share.\nHow it is calculated: the Nasdaq closing price on the last trading day of each fiscal year, divided by that year’s diluted EPS. FY27E uses the live price and consensus EPS, because Costco gives no earnings guidance.\nWhat to watch for: compare the ratio with its own history rather than with other retailers. Costco has traded at a premium for a decade, so the question is whether the premium keeps widening faster than earnings grow.',
          values: [32.9, 35.7, 38.6, 40.0, 40.5, 38.4, 53.9, 51.8, 45.5, 48.3],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 40,
          guidanceCount: 1,
          yearNotes: {
            FY24: 'The share price rose 64% during the year while diluted EPS rose 17%.',
            FY26: 'The share price was flat during the year while diluted EPS rose 14%, so the ratio fell back.',
            FY27E:
              'Calculated from $1,102.15 divided by consensus diluted EPS of $22.80 (stockanalysis.com, 17 November 2026).',
          },
        },
        {
          label: 'P/FCF ratio',
          desc: 'Share price divided by free cash flow per share.\nHow it is calculated: the Nasdaq closing price on the last trading day of each fiscal year, divided by free cash flow (operating cash flow minus capital expenditures) per diluted share. Under US GAAP, operating lease payments stay in operating cash flow, so free cash flow already covers rent and needs no lease adjustment.\nWhat to watch for: Costco’s free cash flow swings with the timing of supplier payments, so single years are noisy. Read the ratio against its own median.',
          values: [36.7, 38.9, 25.6, 37.2, 67.6, 35.9, 59.9, 53.6, 44.8, 64.4],
          format: { decimals: 1 },
          invertColor: true,
          median10y: 38.9,
          guidanceCount: 1,
          yearNotes: {
            FY22: 'Free cash flow fell to $3.5B as inventory grew $4.0B.',
            FY27E:
              'Calculated from $1,102.15 divided by an estimated $17.12 of free cash flow per share.',
          },
        },
      ],
    },
    demand: {
      metrics: [
        {
          label: 'Comparable sales growth',
          desc: 'Sales growth at warehouses open more than a year, including e-commerce, which separates demand from the effect of new warehouses.\nHow it is calculated: as reported by Costco in the annual 10-K, rounded to whole percentages. The 53rd week of FY23 is excluded.\nWhat to watch for: headline comps include gasoline prices and currency moves, which can swing them by several points. Compare them with the next chart, which strips both out.',
          values: [9, 6, 8, 16, 14, 3, 5, 6, 8],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 8,
          yearNotes: {
            FY21: 'Pandemic demand lifted sales, and e-commerce comparable sales rose 44%.',
            FY22: 'Shopping frequency rose, and inflation lifted average ticket.',
            FY23: 'Lower gasoline prices cut headline comps; they rose 5% excluding gasoline and currency.',
          },
        },
        {
          label: 'Comparable sales ex gas and FX',
          desc: 'Comparable sales growth excluding changes in gasoline prices and foreign-exchange rates.\nHow it is calculated: as reported by Costco in the annual 10-K, rounded to whole percentages.\nWhat to watch for: this is the cleanest measure of whether members are buying more. A run below inflation would mean the model is losing pull.',
          values: [7, 6, 9, 13, 11, 5, 6, 8, 7],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 7,
          yearNotes: {
            FY26: 'Average ticket rose 5% and shopping frequency 3%. Digitally-enabled comparable sales rose 21%.',
          },
        },
        {
          label: 'Paid members',
          desc: 'Paid memberships at fiscal year end, in millions, including Gold Star, Business and Business affiliates. Free household cards are excluded.\nHow it is calculated: as reported in the annual 10-K. The count includes memberships that expired within the prior 12 months and have not renewed.\nWhat to watch for: paid members drive the fee income that makes up about half of operating income. Growth should keep pace with new warehouses.',
          values: [51.6, 53.9, 58.1, 61.7, 65.8, 71.0, 76.2, 81.0, 84.1],
          format: { suffix: 'M', decimals: 1 },
          median10y: 65.8,
          yearNotes: {
            FY20: 'Costco standardized its count method worldwide, adding about 1.3M paid members that would not have been counted before.',
          },
        },
        {
          label: 'Executive members',
          desc: 'Paid members on the higher-fee Executive tier, in millions, who earn a 2% annual reward on qualified purchases.\nHow it is calculated: as reported in the annual 10-K. The FY21 10-K did not disclose the count.\nWhat to watch for: Executive members pay double the fee and spend more. Their share of paid members rose from 37% in FY18 to 50% in FY26, and they made up about 75% of worldwide net sales in FY26.',
          values: [19.3, 20.8, 22.6, null, 29.1, 32.3, 35.4, 38.7, 42.3],
          format: { suffix: 'M', decimals: 1 },
          median10y: 30.7,
        },
        {
          label: 'Renewal rate, U.S. and Canada',
          desc: 'Share of members in the U.S. and Canada who renew.\nHow it is calculated: as reported in the annual 10-K. It is a trailing figure that covers renewals due seven to eighteen months before year end. Costco reported it to whole percentages until FY22.\nWhat to watch for: this is the clearest test of member loyalty. The worldwide rate is about 2.5 points lower because newer markets renew less often, so a growing international mix pulls the worldwide figure down.',
          values: [90, 91, 91, 91, 93, 92.7, 92.9, 92.3, 92.3],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 92.3,
          yearNotes: {
            FY25: 'Costco said more memberships sold online, including through digital promotions, entered the calculation, and these renew at a slightly lower rate.',
          },
        },
        {
          label: 'Other International share of revenue',
          desc: 'Share of total revenue from the Other International segment: Mexico, Japan, the U.K., Korea, Australia, Taiwan, China, Spain, France, Sweden, Iceland and New Zealand.\nHow it is calculated: Other International segment revenue ÷ total revenue, from the segment note to the 10-K.\nWhat to watch for: this is the expansion region. Its share has risen only slowly, from 13.1% in FY18 to 14.1% in FY26, because the U.S. keeps growing almost as fast.',
          values: [13.1, 12.8, 13.3, 13.9, 13.2, 13.5, 13.9, 13.9, 14.1],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 13.5,
        },
      ],
    },
    pricing: {
      metrics: [
        {
          label: 'Gross margin',
          desc: 'Share of net sales left after merchandise costs. Membership fees are left out, following Costco’s own convention.\nHow it is calculated: (net sales − merchandise costs) ÷ net sales.\nWhat to watch for: Costco holds gross margin low on purpose and earns its profit from membership fees. Moves of 10–20 bp are meaningful, and gasoline price swings move the ratio without any change in pricing.',
          values: [
            11.04, 11.02, 11.2, 11.13, 10.48, 10.57, 10.92, 11.12, 11.09,
          ],
          format: { suffix: '%', decimals: 2 },
          deltaMode: 'add',
          median10y: 11.04,
          yearNotes: {
            FY22: 'Lower margins in core merchandise categories cut 33 bp, and a LIFO charge for higher merchandise costs cut 19 bp.',
            FY26: 'Excluding gasoline price inflation, the margin was 11.22%, up 10 bp. IEEPA tariff refunds of $174M were credited to merchandise costs.',
          },
        },
        {
          label: 'Membership fees ÷ operating income',
          desc: 'Membership fee revenue as a share of operating income.\nHow it is calculated: membership fees ÷ operating income.\nWhat to watch for: above 100% would mean the merchandise business loses money before fees. The falling share shows the warehouses themselves earning more, not fees shrinking, since fees grew every year.',
          values: [70.1, 70.8, 65.2, 57.8, 54.2, 56.4, 52.0, 51.3, 50.6],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 56.4,
          yearNotes: {
            FY25: 'The U.S. and Canadian fee rose $5 to $65 from September 2024.',
          },
        },
        {
          label: 'Inventory turnover',
          desc: 'How many times a year inventory sells through.\nHow it is calculated: merchandise costs ÷ the average of opening and closing merchandise inventories.\nWhat to watch for: Costco carries fewer than 4,000 active SKUs per warehouse, far fewer than other broadline retailers, which is why its turnover is high. A steady decline would mean the limited range is losing its edge.',
          values: [11.8, 11.8, 12.3, 12.9, 12.4, 12.3, 12.6, 13.1, 14.1],
          format: { suffix: '×', decimals: 1 },
          median10y: 12.4,
        },
        {
          label: 'Inventory growth minus sales growth',
          desc: 'How much faster inventory is growing than sales.\nHow it is calculated: the year-over-year % change in year-end merchandise inventories minus the year-over-year % change in net sales, in percentage points.\nWhat to watch for: a gap above roughly +10 pp usually leads to markdowns within two or three quarters. A negative gap means inventory is being run down relative to sales.',
          values: [2.5, -4.7, -1.9, -1.5, 10.0, -13.7, 7.0, -11.0, -3.5],
          format: { suffix: 'pp', decimals: 1 },
          deltaMode: 'add',
          invertColor: true,
          median10y: -1.9,
          yearNotes: {
            FY22: 'Inventory grew 26% to $17.9B while net sales grew 16%.',
            FY23: 'Inventory was cut by $1.3B.',
            FY24: 'Inventory grew 12% to $18.6B while net sales grew 5%.',
          },
        },
      ],
    },
    stores: {
      metrics: [
        {
          label: 'Warehouse count',
          desc: 'Membership warehouses open at fiscal year end, including business centers.\nHow it is calculated: as reported in the annual 10-K.\nWhat to watch for: Costco opens about 25 warehouses a year on a base of over 900, so the fleet grows about 3% a year. Most of the growth has to come from comparable sales.',
          values: [762, 782, 795, 815, 838, 861, 890, 914, 939],
          format: { decimals: 0 },
          median10y: 838,
        },
        {
          label: 'Net warehouse openings',
          desc: 'Warehouses added during the year, net of relocations and closures.\nHow it is calculated: year-end warehouse count minus the prior year-end count.\nWhat to watch for: a faster pace needs stable sales per warehouse behind it.',
          values: [21, 20, 13, 20, 23, 23, 29, 24, 25],
          format: { decimals: 0 },
          median10y: 23,
          yearNotes: {
            FY18: 'Calculated from 741 warehouses at the end of FY17.',
            FY26: '18 in the U.S., five in Canada and two in Other International.',
          },
        },
        {
          label: 'Net sales per average warehouse',
          desc: 'Net sales per warehouse, in millions of US dollars. E-commerce and gasoline sales are included because Costco does not report warehouse-only sales.\nHow it is calculated: net sales ÷ the average of opening and closing warehouse counts.\nWhat to watch for: it should hold or rise as the fleet grows. A fall would mean new warehouses are weaker or are cannibalizing older ones.',
          values: [
            184.2, 193.5, 207.0, 238.6, 269.5, 279.8, 285.1, 299.2, 320.8,
          ],
          format: { prefix: '$', suffix: 'M', decimals: 1 },
          median10y: 269.5,
          yearNotes: {
            FY23: 'Includes the 53rd week.',
          },
        },
        {
          label: 'Capex as % of revenue',
          desc: 'Capital spending as a share of total revenue.\nHow it is calculated: capital expenditures ÷ total revenue.\nWhat to watch for: Costco owns the land and building at most of its warehouses, so capex covers new sites as well as depots and technology. FY26 capital spending of $6.4B was the highest of the ten years shown.',
          values: [2.1, 2.0, 1.7, 1.8, 1.7, 1.8, 1.9, 2.0, 2.1],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 1.9,
        },
      ],
    },
    margins: {
      series: [
        {
          label: 'Operating margin',
          desc: 'Operating income ÷ total revenue, including membership fees.\nWhat to watch for: Costco runs on a margin of 3–4%, so a few tenths of a point is a large change in profit.',
          values: [3.2, 3.1, 3.3, 3.4, 3.4, 3.3, 3.6, 3.8, 3.9, 3.9],
        },
        {
          label: 'Net margin',
          desc: 'Net income attributable to Costco ÷ total revenue.\nWhat to watch for: interest income on Costco’s cash balance has narrowed the gap to operating margin since FY23.',
          values: [2.2, 2.4, 2.4, 2.6, 2.6, 2.6, 2.9, 2.9, 3.0, 3.1],
        },
        {
          label: 'FCF margin',
          desc: 'Free cash flow ÷ total revenue, where free cash flow is operating cash flow minus capital expenditures. Under US GAAP, operating lease payments stay in operating cash flow, so this already covers rent.\nWhat to watch for: when this line falls below net margin, earnings are not turning into cash, as in FY22 when inventory absorbed $4.0B.',
          values: [2.0, 2.2, 3.6, 2.7, 1.5, 2.8, 2.6, 2.8, 3.1, 2.3],
        },
      ],
      chartNote:
        'FY27E margins use consensus revenue of $329.86B, operating income of $12.97B, net income of $10.15B and free cash flow of $7.61B (stockanalysis.com, 17 November 2026). Deltas are additive (pp).',
    },
    returns: {
      metrics: [
        {
          label: 'Lease-adjusted ROIC',
          desc: 'After-tax operating profit as a share of the capital invested in the business, with operating lease liabilities counted as debt.\nHow it is calculated: operating income × (1 − effective tax rate), divided by the average of opening and closing invested capital, where invested capital is stockholders’ equity plus long-term debt (including the current portion) plus operating lease liabilities minus cash and cash equivalents. It starts in FY21, the first year with an opening lease balance under ASC 842.\nWhat to watch for: a level sustained above about 15% points to a real franchise. Costco’s returns are high partly because accounts payable ($22.6B at the end of FY26) exceed inventory ($19.3B), so suppliers fund the merchandise on the shelves.',
          values: [null, null, null, 30.8, 32.3, 29.9, 32.9, 34.1, 36.8],
          format: { suffix: '%', decimals: 1 },
          deltaMode: 'add',
          median10y: 32.6,
          yearNotes: {
            FY24: 'The $15 special dividend paid in January 2024 cut equity by $6.7B.',
          },
        },
        {
          label: 'Diluted EPS',
          desc: 'Net income attributable to Costco per diluted share.\nHow it is calculated: as reported. FY27E is the consensus estimate, because Costco gives no earnings guidance.\nWhat to watch for: compare EPS growth with net income growth. Costco buys back few shares, so the two grow at almost the same rate.',
          values: [
            7.09, 8.26, 9.02, 11.27, 13.14, 14.16, 16.56, 18.21, 20.76, 22.8,
          ],
          format: { prefix: '$', decimals: 2 },
          median10y: 13.14,
          guidanceCount: 1,
          yearNotes: {
            FY18: 'The effective tax rate fell to 28.4% from 32.8% under the 2017 Tax Act.',
            FY23: 'Includes a 53rd week.',
            FY27E:
              'Consensus diluted EPS of $22.80 from 35 analysts (stockanalysis.com, 17 November 2026).',
          },
        },
        {
          label: 'Free cash flow per share',
          desc: 'Free cash flow per diluted share.\nHow it is calculated: (operating cash flow − capital expenditures) ÷ diluted weighted average shares. Under US GAAP, operating lease payments are already inside operating cash flow.\nWhat to watch for: over a cycle this should track diluted EPS. Single years move with supplier payment timing.',
          values: [
            6.35, 7.58, 13.63, 12.09, 7.87, 15.17, 14.9, 17.61, 21.11, 17.12,
          ],
          format: { prefix: '$', decimals: 2 },
          median10y: 13.63,
          guidanceCount: 1,
          yearNotes: {
            FY27E:
              'Consensus free cash flow of $7.61B (stockanalysis.com) over FY26 diluted shares of 444.4M.',
          },
        },
        {
          label: 'FCF conversion',
          desc: 'Free cash flow as a share of net income.\nHow it is calculated: free cash flow ÷ net income attributable to Costco.\nWhat to watch for: over a cycle it should sit near or above 100%. Single years swing with inventory and payables.',
          values: [90, 92, 151, 107, 60, 107, 90, 97, 102, 75],
          format: { suffix: '%', decimals: 0 },
          deltaMode: 'add',
          median10y: 97,
          guidanceCount: 1,
          yearNotes: {
            FY22: 'Inventory grew $4.0B.',
            FY27E:
              'Consensus free cash flow of $7.61B over consensus net income of $10.15B.',
          },
        },
        {
          label: 'Diluted share count',
          desc: 'Diluted weighted average shares outstanding, in millions.\nHow it is calculated: from the earnings-per-share note to the financial statements.\nWhat to watch for: Costco returns cash through dividends, including special dividends, rather than buybacks, which only offset stock awards. The count has been flat at about 444M for a decade.',
          values: [442, 443, 444, 444, 445, 444, 445, 445, 444],
          format: { suffix: 'M', decimals: 0 },
          invertColor: true,
          median10y: 444,
        },
        {
          label: 'Net cash',
          desc: 'Cash, cash equivalents and short-term investments minus long-term debt at fiscal year end, in billions of US dollars. Lease liabilities are left out here and counted in lease-adjusted ROIC instead.\nHow it is calculated: cash and cash equivalents plus short-term investments minus long-term debt, including the current portion.\nWhat to watch for: Costco lets cash build and then pays it out as a special dividend, which is why the balance dropped in FY21 and FY24. The $30 special dividend declared in November 2026 will take about $13.3B out of the FY26 balance.',
          values: [0.68, 2.62, 5.7, 4.68, 4.49, 8.78, 5.25, 9.5, 15.14],
          format: { prefix: '$', suffix: 'B', decimals: 2 },
          median10y: 5.25,
          yearNotes: {
            FY21: 'A $10 special dividend ($4.4B) was paid in December 2020.',
            FY24: 'A $15 special dividend ($6.7B) was paid in January 2024.',
          },
        },
      ],
      chartNote:
        'Source: filed annual statements. Lease-adjusted ROIC starts in FY21, the first year with an opening operating lease balance under ASC 842. 10Y median shown as dashed line.',
    },
  },
  revenueSection: {
    kicker:
      'Total revenue (net sales plus membership fees), operating income and net income in billions of US dollars, with year-on-year growth rates.',
    revenueDesc:
      'Net sales plus membership fees. Membership fees were $5.91B of the $303.15B in FY26.',
    operatingIncomeDesc:
      'Operating income after merchandise costs and SG&A, including preopening expenses.',
    netIncomeDesc:
      'Net income attributable to Costco. FY27E is the consensus estimate.',
    chartNote:
      'FY23 had 53 weeks. FY27E figures are consensus estimates from stockanalysis.com (17 November 2026); Costco gives no revenue or earnings guidance.',
  },
  revenue: [
    { year: 'FY18', revenue: 141.576, operatingIncome: 4.48, netIncome: 3.134 },
    {
      year: 'FY19',
      revenue: 152.703,
      operatingIncome: 4.737,
      netIncome: 3.659,
    },
    {
      year: 'FY20',
      revenue: 166.761,
      operatingIncome: 5.435,
      netIncome: 4.002,
    },
    {
      year: 'FY21',
      revenue: 195.929,
      operatingIncome: 6.708,
      netIncome: 5.007,
    },
    {
      year: 'FY22',
      revenue: 226.954,
      operatingIncome: 7.793,
      netIncome: 5.844,
    },
    { year: 'FY23', revenue: 242.29, operatingIncome: 8.114, netIncome: 6.292 },
    {
      year: 'FY24',
      revenue: 254.453,
      operatingIncome: 9.285,
      netIncome: 7.367,
    },
    {
      year: 'FY25',
      revenue: 275.235,
      operatingIncome: 10.383,
      netIncome: 8.099,
    },
    {
      year: 'FY26',
      revenue: 303.154,
      operatingIncome: 11.685,
      netIncome: 9.226,
    },
    {
      year: 'FY27E',
      revenue: 329.86,
      operatingIncome: 12.97,
      netIncome: 10.15,
    },
  ],
  thesis: [
    'Costco sells at close to cost and earns its profit from membership fees. Gross margin has stayed near 11% of net sales for a decade, while fees of $5.91B made up about half of FY26 operating income. The model depends on members renewing, and 92.3% did so in the U.S. and Canada in FY26.',
    'Growth has come mostly from existing warehouses. The fleet grew only from 762 to 939 warehouses between FY18 and FY26, yet net sales per warehouse rose from $184M to $321M and paid members from 51.6M to 84.1M. Half of paid members are now on the higher-fee Executive tier.',
    'Members prepay their fees and accounts payable exceed inventory, so suppliers fund the merchandise on the shelves and lease-adjusted ROIC has risen to 37%. The share count has not moved, and surplus cash is paid out as special dividends instead, most recently $30 a share in December 2026. The price already assumes that this continues, at 48 times consensus FY27 earnings.',
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
  141.576, 152.703, 166.761, 195.929, 226.954, 242.29, 254.453, 275.235,
  303.154,
];

export const netIncomeByYear = [
  3.134, 3.659, 4.002, 5.007, 5.844, 6.292, 7.367, 8.099, 9.226,
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
    desc: 'Merchandise costs and selling, general and administrative expenses, which together bridge total revenue to operating income.',
    values: [
      137.096, 147.966, 161.326, 189.221, 219.161, 234.176, 245.168, 264.852,
      291.469,
    ],
  },
  {
    label: 'Merchandise costs',
    desc: 'Cost of the goods sold, including freight, depot and logistics costs, as reported on the income statement.',
    values: [
      123.152, 132.886, 144.939, 170.684, 199.382, 212.586, 222.358, 239.886,
      264.279,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative',
    desc: 'Warehouse and corporate operating costs, mostly wages and benefits, plus depreciation of buildings and equipment. Preopening expenses, reported separately until FY21, are included in every year.',
    values: [
      13.944, 15.08, 16.387, 18.537, 19.779, 21.59, 22.81, 24.966, 27.19,
    ],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'Interest expense less interest income and other, reported between operating income and income before taxes. It has been net income since FY22, as interest on cash outgrew interest on debt.',
    values: [
      0.038, -0.028, 0.068, 0.028, -0.047, -0.373, -0.455, -0.435, -0.566,
    ],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on senior notes and finance leases.',
    values: [0.159, 0.15, 0.16, 0.171, 0.158, 0.16, 0.169, 0.154, 0.145],
    indent: 1,
  },
  {
    label: 'Interest income and other',
    desc: 'Interest earned on cash and investments, foreign-currency transaction gains and other items. Shown as negative because it is income.',
    values: [
      -0.121, -0.178, -0.092, -0.143, -0.205, -0.533, -0.624, -0.589, -0.711,
    ],
    indent: 1,
  },
  {
    label: 'Provision for income taxes',
    desc: 'Current and deferred income tax expense as reported on the income statement. FY18 reflects the lower federal rate from the 2017 Tax Act.',
    values: [1.263, 1.061, 1.308, 1.601, 1.925, 2.195, 2.373, 2.719, 3.025],
  },
  {
    label: 'Noncontrolling interests',
    desc: 'Net income attributable to the joint-venture partner in Taiwan, until Costco bought out its stake in FY22.',
    values: [0.045, 0.045, 0.057, 0.072, 0.071, 0, 0, 0, 0],
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
      1.509,
      2.329,
      3.893,
      -1.019,
      -1.055,
      3.497,
      -3.794,
      4.255,
      6.046,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities.',
    values: [
      5.774,
      6.356,
      8.861,
      8.958,
      7.392,
      11.068,
      11.339,
      13.335,
      15.817,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities: capital expenditures and short-term investments.',
    values: [
      -2.947,
      -2.865,
      -3.891,
      -3.535,
      -3.915,
      -4.972,
      -4.409,
      -5.311,
      -6.378,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Additions to property and equipment.',
    values: [
      -2.969,
      -2.998,
      -2.81,
      -3.588,
      -3.891,
      -4.323,
      -4.71,
      -5.498,
      -6.435,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other investing',
    desc: 'Purchases, sales and maturities of short-term investments, and other investing activities.',
    values: [
      0.022,
      0.133,
      -1.081,
      0.053,
      -0.024,
      -0.649,
      0.301,
      0.187,
      0.057,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: dividends, share repurchases and debt.',
    values: [
      -1.281,
      -1.147,
      -1.147,
      -6.488,
      -4.283,
      -2.614,
      -10.764,
      -3.775,
      -3.355,
      null,
    ],
  },
  {
    label: 'Repurchases of common stock',
    desc: 'Shares bought back, which mostly offset shares issued under stock awards.',
    values: [
      -0.328,
      -0.247,
      -0.196,
      -0.496,
      -0.439,
      -0.676,
      -0.7,
      -0.903,
      -0.848,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Cash dividends',
    desc: 'Cash dividends paid, including special dividends of $10 a share in FY21 and $15 in FY24.',
    values: [
      -0.689,
      -1.038,
      -1.479,
      -5.748,
      -1.498,
      -1.251,
      -9.041,
      -2.183,
      -2.458,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Net borrowings',
    desc: 'Proceeds from long-term and short-term debt less repayments.',
    values: [
      -0.086,
      0.209,
      0.792,
      -0.053,
      -0.753,
      -0.093,
      -0.571,
      -0.149,
      0.403,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other financing',
    desc: 'Tax withholdings on stock awards, finance lease payments, changes in bank payments outstanding and, in FY22, $842M paid to buy out the Taiwan joint-venture partner and a $208M dividend to it.',
    values: [
      -0.178,
      -0.071,
      -0.264,
      -0.191,
      -1.593,
      -0.594,
      -0.452,
      -0.54,
      -0.452,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY27E is the consensus estimate from stockanalysis.com.',
    values: [
      2.805, 3.358, 6.051, 5.37, 3.501, 6.745, 6.629, 7.837, 9.382, 7.61,
    ],
  },
];
