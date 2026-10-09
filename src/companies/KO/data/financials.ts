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
  36.212, 34.3, 37.266, 33.014, 38.655, 43.004, 45.754, 47.061, 47.941,
];

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Cost of goods sold, selling, general and administrative expenses, and other operating charges, the three lines Coca-Cola reports between net operating revenues and operating income.',
    values: [
      28.457, 25.148, 27.18, 24.017, 28.347, 32.095, 34.443, 37.069, 34.179,
    ],
  },
  {
    label: 'Cost of goods sold',
    desc: 'Ingredients, packaging, and manufacturing costs. Concentrate is cheap to make, so this line rises with the share of revenue from company-owned bottlers and finished-goods businesses such as fairlife, BodyArmor, and Costa.',
    values: [
      13.721, 13.067, 14.619, 13.433, 15.357, 18.0, 18.52, 18.324, 18.397,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative expenses',
    desc: 'Advertising, selling and distribution, stock-based compensation, and corporate overhead. Advertising was $5.4B in FY25.',
    values: [
      12.834, 11.002, 12.103, 9.731, 12.144, 12.88, 13.972, 14.582, 14.521,
    ],
    indent: 1,
  },
  {
    label: 'Other operating charges',
    desc: 'Impairments, restructuring under the productivity and reinvestment program, and remeasurement of the fairlife contingent consideration. FY24 includes $3.1B of fairlife remeasurement and a $760M BodyArmor trademark impairment; FY25 includes a further $960M BodyArmor impairment.',
    values: [1.902, 1.079, 0.458, 0.853, 0.846, 1.215, 1.951, 4.163, 1.261],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest income, interest expense, equity income from bottlers and other investees, and other income (loss). Negative values mean these items added to earnings, which has been the case every year since FY19 because equity income from bottlers exceeds net interest cost.',
    values: [
      0.865, 0.927, -0.7, -0.752, -2.117, -0.777, -1.641, -3.094, -2.236,
    ],
  },
  {
    label: 'Interest income',
    desc: 'Interest earned on cash, short-term investments, and marketable securities, shown as a negative expense.',
    values: [
      -0.679, -0.689, -0.563, -0.37, -0.276, -0.449, -0.907, -0.988, -0.786,
    ],
    indent: 1,
  },
  {
    label: 'Interest expense',
    desc: 'Interest on commercial paper and long-term notes. FY21 includes $650M of charges for extinguishing long-term debt and related hedging activity.',
    values: [0.853, 0.95, 0.946, 1.437, 1.597, 0.882, 1.527, 1.656, 1.654],
    indent: 1,
  },
  {
    label: 'Equity income (loss) — net',
    desc: 'Coca-Cola’s share of the earnings of bottlers and other companies it owns a stake in but does not control, such as Coca-Cola FEMSA, Coca-Cola HBC, Coca-Cola Europacific Partners, and Monster Beverage. Shown as a negative expense.',
    values: [
      -1.072, -1.008, -1.049, -0.978, -1.438, -1.472, -1.691, -1.77, -2.031,
    ],
    indent: 1,
  },
  {
    label: 'Other income (loss) — net',
    desc: 'Gains and losses on refranchising bottlers and selling stakes, fair value changes on equity securities, pension costs, and other items, shown as a negative expense when it is income. The FY18 loss includes $591M of impairments of equity method investees, a $554M impairment of assets held by Coca-Cola Beverages Africa, and $476M of charges from refranchising bottling territories in North America.',
    values: [1.763, 1.674, -0.034, -0.841, -2.0, 0.262, -0.57, -1.992, -1.073],
    indent: 1,
  },
  {
    label: 'Income taxes',
    desc: 'Income tax expense as reported on the income statement. FY17 includes the Tax Cuts and Jobs Act charge, which pushed the effective rate to 81.4%.',
    values: [5.607, 1.749, 1.801, 1.981, 2.621, 2.115, 2.249, 2.437, 2.861],
  },
  {
    label: 'Net income attributable to noncontrolling interests',
    desc: 'The share of consolidated net income that belongs to outside owners of subsidiaries Coca-Cola controls but does not wholly own. It grows after the July 2025 sale of 40% of the bottling operations in India.',
    values: [0.035, 0.042, 0.065, 0.021, 0.033, 0.029, -0.011, 0.018, 0.03],
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
    desc: 'Net increase (decrease) in cash, cash equivalents, restricted cash and restricted cash equivalents, including the effect of exchange rates.',
    values: [
      -2.477,
      2.945,
      -2.581,
      0.373,
      2.915,
      -0.2,
      -0.133,
      1.796,
      -0.478,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. FY24 includes the $6.0B deposit paid to the IRS in the tax litigation, and FY25 includes $6.1B of the $6.2B final milestone payment for fairlife. FY26E is company guidance.',
    values: [
      7.041, 7.627, 10.471, 9.844, 12.625, 11.018, 11.599, 6.805, 7.408, 14.6,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities: capital expenditures, acquisitions, proceeds from refranchising bottlers and selling stakes, and purchases and sales of short-term investments. FY18 and FY24 were positive because disposals of investments and businesses exceeded purchases.',
    values: [
      -2.312,
      5.927,
      -3.976,
      -1.477,
      -2.765,
      -0.763,
      -3.349,
      2.524,
      -0.067,
      null,
    ],
  },
  {
    label: 'Purchases of property, plant and equipment',
    desc: 'Capital expenditures, mostly in company-owned bottlers and finished-goods businesses. FY26E is company guidance.',
    values: [
      -1.75, -1.548, -2.054, -1.177, -1.367, -1.484, -1.852, -2.064, -2.112,
      -2.2,
    ],
    indent: 1,
  },
  {
    label:
      'Acquisitions of businesses, equity method investments and nonmarketable securities',
    desc: 'Cash paid for businesses and stakes. The large years are FY19, when Coca-Cola bought Costa, and FY21, when it bought the remaining interest in BodyArmor.',
    values: [
      -3.809,
      -1.263,
      -5.542,
      -1.052,
      -4.766,
      -0.073,
      -0.062,
      -0.315,
      -0.461,
      null,
    ],
    indent: 1,
  },
  {
    label:
      'Proceeds from disposals of businesses, equity method investments and nonmarketable securities',
    desc: 'Cash received from refranchising company-owned bottlers and selling stakes in investees.',
    values: [3.821, 1.362, 0.429, 0.189, 2.18, 0.458, 0.43, 3.485, 3.567, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities: dividends, share repurchases, stock issued to employees, and debt issued and repaid. FY25 includes $1.3B from selling 40% of the bottling operations in India.',
    values: [
      -7.447,
      -10.347,
      -9.004,
      -8.07,
      -6.786,
      -10.25,
      -8.31,
      -6.91,
      -8.14,
      null,
    ],
  },
  {
    label: 'Dividends',
    desc: 'Cash dividends paid. The dividend per share rose every year shown, from $1.48 in FY17 to $2.04 in FY25.',
    values: [
      -6.32,
      -6.644,
      -6.845,
      -7.047,
      -7.252,
      -7.616,
      -7.952,
      -8.359,
      -8.779,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Purchases of stock for treasury',
    desc: 'Cash spent repurchasing common stock. Buybacks were nearly suspended in FY20 and FY21 and have mostly offset employee stock issuance since.',
    values: [
      -3.682,
      -1.912,
      -1.103,
      -0.118,
      -0.111,
      -1.418,
      -2.289,
      -1.795,
      -0.746,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus purchases of property, plant and equipment. FY26E is company guidance of about $12.4B.',
    values: [
      5.291, 6.079, 8.417, 8.667, 11.258, 9.534, 9.747, 4.741, 5.296, 12.4,
    ],
  },
];

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Coca-Cola',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 5.296,
        forward: 12.4,
      },
    ],
    startNote: 'management’s FY26E free cash flow guidance',
    actualNote:
      'Actual FY25 free cash flow of $5.30B, after the $6.1B fairlife contingent payment; about $11.4B without it.',
    forwardNote:
      'Management guidance of about $12.4B of FY26 free cash flow ($14.6B of operating cash flow less $2.2B of capital spending), raised at Q2 2026.',
    sharesOutstanding: 4.3,
    netCash: -27.17,
    netCashSource:
      '$43.54B of debt minus $16.37B of cash, short-term investments, and marketable securities, Q2 2026 10-Q; equity-method stakes are excluded',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E revenue of $49.72B is the consensus analyst estimate from stockanalysis.com as of 30 September 2026, because Coca-Cola guides organic and comparable revenue growth rather than a dollar figure. FY26E EPS of $3.29 applies the midpoint of Coca-Cola’s comparable (non-GAAP) EPS growth guidance of 9% to 10%, raised on 28 July 2026, to FY25 comparable EPS of $3.00; the company does not guide GAAP EPS. FY26E free cash flow of $12.4B is company guidance ($14.6B of operating cash flow less $2.2B of capital expenditures). P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end divided by diluted EPS.',
      values: [null, 31.6, 26.7, 30.6, 26.3, 29.0, 23.9, 25.3, 23.0, 26.0],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 26.5,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Not meaningful: the Tax Cuts and Jobs Act charge cut EPS to $0.29, which would put the ratio at 158×.',
        FY18: 'Elevated because impairments and refranchising charges of about $1.6B in other income (loss) depressed EPS.',
        FY24: 'EPS was cut by $3.1B of fairlife contingent consideration remeasurement and a $760M BodyArmor impairment.',
        FY26E:
          'Calculated from $85.65 divided by estimated comparable EPS of $3.29. Comparable EPS excludes items impacting comparability, so this ratio is not strictly comparable with the GAAP ratios before it.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per diluted share.',
      values: [37.5, 33.5, 28.4, 27.4, 22.8, 29.0, 26.2, 56.7, 56.9, 29.7],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 29.0,
      guidanceCount: 1,
      yearNotes: {
        FY24: 'Free cash flow absorbed the $6.0B IRS tax litigation deposit.',
        FY25: 'Free cash flow absorbed $6.1B of the final fairlife milestone payment.',
        FY26E:
          'Calculated from $85.65 divided by guided FCF per share of $2.88 (FCF $12.4B / 4.313B diluted shares in the first half of 2026).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted net income per share attributable to shareowners of The Coca-Cola Company.',
      values: [0.29, 1.5, 2.07, 1.79, 2.25, 2.19, 2.47, 2.46, 3.04, 3.29],
      format: { prefix: '$', decimals: 2 },
      median10y: 2.19,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by the Tax Cuts and Jobs Act charge, which put the effective tax rate at 81.4%.',
        FY24: 'Depressed by $3.1B of fairlife contingent consideration remeasurement.',
        FY25: 'GAAP EPS of $3.04 was slightly above comparable (non-GAAP) EPS of $3.00.',
        FY26E:
          'FY25 comparable EPS of $3.00 grown by 9.5%, the midpoint of comparable EPS growth guidance of 9% to 10% (non-GAAP).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [1.22, 1.41, 1.95, 2.0, 2.59, 2.19, 2.25, 1.1, 1.23, 2.88],
      format: { prefix: '$', decimals: 2 },
      median10y: 1.95,
      guidanceCount: 1,
      yearNotes: {
        FY24: 'After the $6.0B IRS tax litigation deposit.',
        FY25: 'After $6.1B of the final fairlife milestone payment.',
        FY26E:
          'Derived from guided FCF of $12.4B divided by 4.313B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income attributable to shareowners divided by year-end equity attributable to shareowners. Years of buybacks have shrunk equity relative to earnings, which keeps this ratio near 40%.',
      values: [7.3, 37.9, 47.0, 40.1, 42.5, 39.6, 41.3, 42.8, 40.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 40.7,
      yearNotes: {
        FY17: 'Depressed by the Tax Cuts and Jobs Act charge.',
      },
    },
    {
      label: 'ROIC %',
      desc: 'Operating income after tax at the effective rate, divided by year-end equity attributable to shareowners plus loans and notes payable and long-term debt. Equity income from bottlers, about $2.0B in FY25, sits below operating income and is not counted.',
      values: [2.2, 11.8, 13.6, 11.5, 12.4, 14.1, 13.7, 11.7, 14.6],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 12.4,
      yearNotes: {
        FY17: 'The 81.4% effective tax rate from the Tax Cuts and Jobs Act charge erased most of after-tax operating income.',
        FY24: 'Operating income was cut by $4.2B of other operating charges, mostly the fairlife remeasurement.',
      },
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Loans and notes payable, current maturities of long-term debt, and long-term debt, divided by year-end equity attributable to shareowners.',
      values: [2.79, 2.6, 2.25, 2.22, 1.86, 1.62, 1.62, 1.79, 1.41],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 1.86,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the share of net income retained after dividends.',
      values: [null, -1.2, 10.9, 3.6, 11.0, 8.0, 10.6, 9.1, 13.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 9.9,
      yearNotes: {
        FY17: 'Not meaningful: dividends were five times net income after the Tax Cuts and Jobs Act charge.',
        FY18: 'Negative because dividends were 103% of net income.',
        FY20: 'Low because dividends took 91% of net income in the pandemic year.',
      },
    },
    {
      label: 'Operating margin %',
      desc: 'Operating income as a share of net operating revenues.',
      values: [21.4, 26.7, 27.1, 27.3, 26.7, 25.4, 24.7, 21.2, 28.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 26.7,
      yearNotes: {
        FY24: 'Other operating charges of $4.2B, including $3.1B of fairlife remeasurement, took 8.8% of revenue.',
      },
    },
    {
      label: 'Net margin %',
      desc: 'Net income attributable to shareowners as a share of net operating revenues.',
      values: [3.4, 18.8, 23.9, 23.5, 25.3, 22.2, 23.4, 22.6, 27.3],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 23.4,
      yearNotes: {
        FY17: 'Tax Cuts and Jobs Act charge.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [14.6, 17.7, 22.6, 26.3, 29.1, 22.2, 21.3, 10.1, 11.0, 24.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 21.3,
      guidanceCount: 1,
      yearNotes: {
        FY24: 'After the $6.0B IRS tax litigation deposit.',
        FY25: 'After $6.1B of the final fairlife milestone payment.',
        FY26E:
          'Derived from guided FCF of $12.4B and consensus revenue of $49.72B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Trade accounts receivable divided by net operating revenues, multiplied by 365. Coca-Cola also sells trade receivables under a factoring program, which lowers this ratio.',
      values: [37.0, 39.2, 38.9, 34.8, 33.2, 29.6, 27.2, 27.7, 23.1],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 33.2,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net income attributable to shareowners. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [null, 1.19, 1.17, 1.27, 1.29, 1.15, 1.08, 0.64, 0.57],
      format: { decimals: 2 },
      median10y: 1.16,
      yearNotes: {
        FY17: 'Not meaningful: net income of $1.2B was cut by a largely non-cash tax charge, which would put the ratio at 5.64.',
        FY24: 'Below 1.0 because of the $6.0B IRS deposit, a cash payment with no matching expense.',
        FY25: 'Below 1.0 because the $6.1B fairlife payment settled a liability that had been charged to earnings through remeasurements in earlier years.',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Net operating revenues, operating income, and net income in billions. Revenue fell from FY17 to FY18 as Coca-Cola finished refranchising its company-owned bottlers, then grew every year after the FY20 pandemic dip.',
    revenueDesc:
      'Net operating revenues from concentrate sales to bottlers and finished-goods sales by company-owned bottlers, fairlife, BodyArmor, and Costa.',
    operatingIncomeDesc:
      'Gross profit minus selling, general and administrative expenses and other operating charges.',
    netIncomeDesc:
      'Net income attributable to shareowners of The Coca-Cola Company. FY17 was cut to $1.2B by the Tax Cuts and Jobs Act charge.',
    chartNote:
      'Refranchising bottlers shrinks revenue but lifts margins, because bottling earns far lower margins than concentrate. Operating income dipped in FY24 because of $4.2B of other operating charges, mostly the fairlife remeasurement, and recovered to $13.8B in FY25. FY26E revenue is the consensus analyst estimate; Coca-Cola does not guide GAAP earnings.',
  },
  revenue: [
    { year: 'FY17', revenue: 36.21, operatingIncome: 7.76, netIncome: 1.25 },
    { year: 'FY18', revenue: 34.3, operatingIncome: 9.15, netIncome: 6.43 },
    { year: 'FY19', revenue: 37.27, operatingIncome: 10.09, netIncome: 8.92 },
    { year: 'FY20', revenue: 33.01, operatingIncome: 9.0, netIncome: 7.75 },
    { year: 'FY21', revenue: 38.66, operatingIncome: 10.31, netIncome: 9.77 },
    { year: 'FY22', revenue: 43.0, operatingIncome: 10.91, netIncome: 9.54 },
    { year: 'FY23', revenue: 45.75, operatingIncome: 11.31, netIncome: 10.71 },
    { year: 'FY24', revenue: 47.06, operatingIncome: 9.99, netIncome: 10.63 },
    { year: 'FY25', revenue: 47.94, operatingIncome: 13.76, netIncome: 13.11 },
    { year: 'FY26E', revenue: 49.72, operatingIncome: null, netIncome: null },
  ],
  thesis: [
    'Coca-Cola mostly sells concentrate and licenses its brands to independent bottlers, which own the plants, trucks, and coolers, so it earns a gross margin near 61% and operating margins in the mid-to-high 20s on about $2B a year of capital expenditures, and it collects about $2.0B more a year as its share of bottler earnings.',
    'The dividend has risen every year shown, from $1.48 a share in FY17 to $2.04 in FY25, and takes roughly three-quarters of net income, so growth in the share count is close to flat and per-share growth comes from organic revenue growth, pricing, and margin rather than buybacks.',
    'FY24 and FY25 free cash flow (about $5B a year) understates the business, because it absorbed a $6.0B IRS deposit in the 2007–2009 transfer-pricing case and the $6.2B final fairlife milestone payment; guidance puts FY26 free cash flow back at about $12.4B, while the tax case, the pending sale of the Africa bottler, and the July 2026 ransomware attack on fairlife remain open.',
  ],
};

export default financials;
