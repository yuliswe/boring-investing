import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const investmentNotes: Record<string, string> = {
  FY21: 'Includes a $2.86B unrealized gain on equity and other investments.',
  FY22: 'Includes a $2.87B net loss on equity and other investments.',
  FY23: 'Includes the $1.34B impairment on the sale of the logistics businesses and a $1.36B net gain on equity investments.',
  FY24: 'Includes a $0.85B net gain on equity and equity method investments.',
  FY25: 'Includes a $0.32B net loss on equity and equity method investments and a $0.12B realized loss on the embedded derivative of the convertible notes.',
};

const peNotes: Record<string, string> = {
  FY17: 'Not meaningful: Shopify reported a net loss.',
  FY18: 'Not meaningful: Shopify reported a net loss.',
  FY19: 'Not meaningful: Shopify reported a net loss.',
  FY20: 'Not meaningful: GAAP EPS of $0.26 gives a P/E above 400.',
  FY22: 'Not meaningful: Shopify reported a net loss.',
  FY23: 'Not meaningful: GAAP EPS of $0.10 gives a P/E above 700.',
};

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Shopify',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    paths: [
      {
        label: 'Free cash flow',
        actual: 2.007,
        forward: 2.86,
      },
    ],
    startNote: 'FY26E consensus free cash flow',
    forwardNote:
      'Consensus free cash flow of $2.86B (49 analysts, S&P Global via stockanalysis.com), in line with the $2.87B implied by nine-month actuals plus Q4 guidance.',
    sharesOutstanding: 1.2864,
    netCash: 5.251,
    netCashSource:
      '$1.87B of cash, $2.86B of marketable securities and $0.52B of long-term investments, with no debt, Q3 2026 10-Q. The $4.91B of equity and other investments is excluded.',
    sharesSource: 'Q3 2026 10-Q balance sheet, 30 September 2026',
  },
  guidanceYears: ['FY26E'],
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Fiscal year-end price divided by GAAP diluted EPS.',
      values: [null, null, null, null, 60.1, null, null, 68.6, 171.2, 88.7],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 68.6,
      guidanceCount: 1,
      yearNotes: {
        ...peNotes,
        FY21: investmentNotes.FY21,
        FY24: investmentNotes.FY24,
        FY25: investmentNotes.FY25,
        FY26E:
          'Calculated from the default price of $144.57 divided by estimated GAAP diluted EPS of $1.63.',
      },
    },
    {
      label: 'P/FCF ratio',
      values: [null, null, null, 364.7, 361.8, null, 111.5, 86.7, 104.7, 65.1],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 111.5,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Not meaningful: free cash flow was negative.',
        FY18: 'Not meaningful: free cash flow was negative.',
        FY19: 'Not meaningful: free cash flow of $0.01 per share gives a P/FCF above 3,000.',
        FY22: 'Not meaningful: free cash flow was negative.',
        FY26E:
          'Calculated from the default price of $144.57 divided by estimated free cash flow per share of $2.22.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted EPS, adjusted for the ten-for-one stock split of June 2022.',
      values: [-0.04, -0.06, -0.11, 0.26, 2.29, -2.73, 0.1, 1.55, 0.94, 1.63],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.1,
      guidanceCount: 1,
      yearNotes: {
        ...investmentNotes,
        FY26E:
          'Consensus net income of $2.10B (S&P Global via stockanalysis.com) divided by Q3 2026 diluted shares of 1.29B. The consensus assumes no further gains or losses on equity investments.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [-0.01, -0.02, 0.01, 0.31, 0.38, -0.15, 0.7, 1.23, 1.54, 2.22],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.31,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus free cash flow of $2.86B divided by Q3 2026 diluted shares of 1.29B.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income divided by average shareholders’ equity.',
      values: [-5.67, -4.18, -4.89, 6.79, 33.25, -35.73, 1.53, 19.58, 9.84],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 1.53,
      yearNotes: investmentNotes,
    },
    {
      label: 'ROIC %',
      desc: 'Operating income taxed at the 26.5% Canadian statutory rate, divided by year-end debt plus shareholders’ equity.',
      values: [-3.61, -3.23, -3.44, 0.93, 1.64, -6.6, -10.44, 6.33, 8.01],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: -3.23,
      yearNotes: {
        FY23: 'Operating loss includes the $1.34B impairment on the sale of the logistics businesses.',
      },
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Year-end carrying value of the 0.125% convertible senior notes divided by shareholders’ equity. The notes were issued in FY20 and repaid at maturity in November 2025. Operating leases are excluded.',
      values: [0, 0, 0, 0.12, 0.08, 0.11, 0.1, 0.08, 0],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.08,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the retention ratio. Shopify pays no dividend, so this equals ROE.',
      values: [-5.67, -4.18, -4.89, 6.79, 33.25, -35.73, 1.53, 19.58, 9.84],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 1.53,
      yearNotes: investmentNotes,
    },
    {
      label: 'Net margin %',
      values: [
        -5.94, -6.01, -7.91, 10.91, 63.2, -61.79, 1.87, 22.74, 10.65, 13.76,
      ],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 1.87,
      guidanceCount: 1,
      yearNotes: {
        ...investmentNotes,
        FY26E:
          'Consensus net income of $2.10B divided by consensus revenue of $15.26B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [
        -1.8, -1.74, 0.88, 13.08, 10.51, -3.32, 12.82, 17.98, 17.37, 18.74,
      ],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 10.51,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Consensus free cash flow of $2.86B divided by consensus revenue of $15.26B.',
      },
    },
  ],
  revenueSection: {
    operatingIncomeDesc:
      'GAAP income from operations. FY23 includes the $1.34B impairment on the sale of the logistics businesses. FY26E is nine-month actual operating income of $1.44B plus a Q4 estimate built from guidance (gross profit up 28% and operating expenses at 29.5% of revenue) on consensus revenue.',
    netIncomeDesc:
      'GAAP net income, which swings with the market value of Shopify’s stakes in Affirm, Global-E, Klaviyo and other companies. FY26E is the consensus.',
  },
  revenue: [
    { year: 'FY17', revenue: 0.673, operatingIncome: -0.049, netIncome: -0.04 },
    {
      year: 'FY18',
      revenue: 1.073,
      operatingIncome: -0.092,
      netIncome: -0.065,
    },
    {
      year: 'FY19',
      revenue: 1.578,
      operatingIncome: -0.141,
      netIncome: -0.125,
    },
    { year: 'FY20', revenue: 2.929, operatingIncome: 0.09, netIncome: 0.32 },
    { year: 'FY21', revenue: 4.612, operatingIncome: 0.269, netIncome: 2.915 },
    { year: 'FY22', revenue: 5.6, operatingIncome: -0.822, netIncome: -3.46 },
    { year: 'FY23', revenue: 7.06, operatingIncome: -1.418, netIncome: 0.132 },
    { year: 'FY24', revenue: 8.88, operatingIncome: 1.075, netIncome: 2.019 },
    { year: 'FY25', revenue: 11.556, operatingIncome: 1.468, netIncome: 1.231 },
    { year: 'FY26E', revenue: 15.26, operatingIncome: 2.199, netIncome: 2.1 },
  ],
  thesis: [
    'Merchant solutions, chiefly Shopify Payments fees on merchants’ sales, grew from 54% of revenue in FY17 to 76% in FY25, so revenue now tracks gross merchandise volume. That raised the growth rate but lowered gross margin from 56% to 48%, because payment processing passes most of its fee on to card networks and banks.',
    'After selling its logistics businesses to Flexport in 2023 and cutting research and development spending, Shopify’s GAAP operating margin went from a 20% loss in FY23 to a 13% profit in FY25, and free cash flow reached $2.0B, or 17% of revenue, with stock-based compensation down to 4% of revenue.',
    'GAAP earnings swing by billions with the market value of stakes in Affirm, Global-E and Klaviyo, so free cash flow is the steadier measure. In 2026 Shopify began buying back stock, spending $2.48B on 21.1M shares in the first nine months under a $5B authorization.',
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
  0.673, 1.073, 1.578, 2.929, 4.612, 5.6, 7.06, 8.88, 11.556,
];

export const totalExpenses = {
  label: 'Total expenses',
  desc: 'Revenue minus net income, covering operating expenses, non-operating items and income taxes.',
  values: [0.713, 1.138, 1.703, 2.61, 1.697, 9.06, 6.928, 6.861, 10.325],
};

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Cost of revenues plus sales and marketing, research and development, general and administrative, transaction and loan losses, and the FY23 logistics impairment. Stock-based compensation is included in each line.',
    values: [0.722, 1.165, 1.719, 2.839, 4.343, 6.422, 8.478, 7.805, 10.088],
  },
  {
    label: 'Cost of revenues',
    desc: 'Cost of subscription solutions and merchant solutions. Merchant solutions, mostly the payment processing and interchange fees of Shopify Payments, made up 91% of it in FY25.',
    values: [0.293, 0.477, 0.713, 1.388, 2.131, 2.846, 3.545, 4.408, 6.001],
    indent: 1,
  },
  {
    label: 'Sales and marketing',
    desc: 'Marketing programs, partner commissions and sales staff costs.',
    values: [0.226, 0.35, 0.473, 0.602, 0.902, 1.23, 1.22, 1.393, 1.663],
    indent: 1,
  },
  {
    label: 'Research and development',
    desc: 'Engineering and product staff costs. The FY23 peak includes severance from the May 2023 workforce reduction, and the FY24 fall reflects the smaller headcount.',
    values: [0.136, 0.231, 0.355, 0.552, 0.854, 1.503, 1.73, 1.367, 1.536],
    indent: 1,
  },
  {
    label: 'General and administrative',
    desc: 'Finance, legal, people and facilities costs. FY17 and FY18 also include transaction and loan losses, which Shopify presented separately from FY19.',
    values: [0.068, 0.107, 0.154, 0.245, 0.375, 0.708, 0.491, 0.41, 0.471],
    indent: 1,
  },
  {
    label: 'Transaction and loan losses',
    desc: 'Losses on Shopify Payments chargebacks and fraud, plus credit losses on Shopify Capital loans and merchant cash advances. Shown separately from FY19; earlier years are inside general and administrative.',
    values: [null, null, 0.025, 0.052, 0.082, 0.135, 0.152, 0.227, 0.417],
    indent: 1,
  },
  {
    label: 'Impairment on sales of Shopify’s logistics businesses',
    desc: 'Write-down on the sale of Shopify Logistics and Deliverr to Flexport in the second quarter of 2023, paid for mostly in Flexport stock.',
    values: [0, 0, 0, 0, 0, 0, 1.34, 0, 0],
    indent: 1,
  },
  {
    label: 'Non-operating expenses',
    desc: 'The net of items between income from operations and pre-tax income. Negative values mean gains and interest income exceeded losses.',
    values: [
      -0.009, -0.027, -0.045, -0.15, -2.872, 2.801, -1.603, -1.153, -0.041,
    ],
  },
  {
    label: 'Interest income',
    desc: 'Interest on cash and marketable securities, shown as a negative expense. Net of interest expense in FY17 to FY19.',
    values: [
      -0.008, -0.029, -0.048, -0.023, -0.015, -0.079, -0.241, -0.308, -0.331,
    ],
    indent: 1,
  },
  {
    label: 'Interest expense',
    desc: 'Interest and debt cost amortization on the $920M of 0.125% convertible senior notes issued in FY20. From FY23 Shopify no longer shows it separately because it was immaterial.',
    values: [0, 0, 0, 0.009, 0.003, 0.003, null, null, null],
    indent: 1,
  },
  {
    label: 'Losses (gains) on equity and other investments',
    desc: 'Realized and unrealized gains and losses on equity stakes such as Affirm, Global-E and Klaviyo, Shopify’s share of Flexport’s results from FY23, and in FY25 the loss on the embedded derivative of the convertible notes. Gains are shown as negative expenses.',
    values: [0, 0, 0, -0.135, -2.86, 2.874, -1.361, -0.853, 0.316],
    indent: 1,
  },
  {
    label: 'Foreign exchange loss (gain)',
    desc: 'Foreign exchange losses, net of gains, shown as an expense.',
    values: [-0.001, 0.002, 0.003, -0.001, -0.0, 0.002, -0.001, 0.008, -0.026],
    indent: 1,
  },
  {
    label: 'Tax expense',
    desc: 'Provision for income taxes. FY20 and FY22 are recoveries, the FY22 one mainly from deferred taxes on investment losses.',
    values: [0, 0, 0.029, -0.079, 0.226, -0.162, 0.053, 0.209, 0.278],
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
    desc: 'Net change in cash, cash equivalents and restricted cash for the year, including the effect of exchange rates.',
    values: [
      0.058,
      0.269,
      0.239,
      2.054,
      -0.201,
      -0.854,
      -0.236,
      0.085,
      0.047,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. Until March 2026 this included net advances of merchant cash advances; from April 2026 they move to investing activities alongside loans.',
    values: [
      0.008,
      0.009,
      0.071,
      0.425,
      0.536,
      -0.136,
      0.944,
      1.616,
      2.033,
      null,
    ],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus non-cash items (stock-based compensation, depreciation and amortization, loss provisions, deferred taxes, the logistics impairment and gains or losses on investments) before working capital changes.',
    values: [
      0.034,
      0.065,
      0.052,
      0.525,
      0.665,
      -0.037,
      0.749,
      1.782,
      2.15,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Changes in receivables, merchant cash advances, other assets, payables, taxes and deferred revenue. Merchant cash advances growing faster than they are repaid is the main use of cash.',
    values: [
      -0.026,
      -0.056,
      0.018,
      -0.1,
      -0.13,
      -0.099,
      0.195,
      -0.166,
      -0.117,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities.',
    values: [
      -0.527,
      -0.811,
      -0.569,
      -1.932,
      -2.379,
      -0.719,
      -1.244,
      -1.586,
      -1.19,
      null,
    ],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Business combinations, net of cash acquired. FY19 is mostly 6 River Systems and FY22 is Deliverr, both later sold with the logistics businesses.',
    values: [
      -0.016,
      -0.019,
      -0.266,
      0,
      -0.06,
      -1.754,
      -0.031,
      -0.03,
      -0.056,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Purchases of marketable securities net of maturities.',
    values: [
      -0.487,
      -0.75,
      -0.242,
      -1.879,
      -1.587,
      1.879,
      -0.251,
      -0.939,
      -0.488,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Merchant loans, net',
    desc: 'Shopify Capital loans purchased and originated, net of repayments and sales. Presented in investing activities from FY21.',
    values: [0, 0, 0, 0, -0.031, -0.159, -0.523, -0.464, -0.579, null],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property and equipment. Shopify serves its merchants from third-party cloud services such as Google Cloud Platform, so capital spending is small.',
    values: [
      -0.02,
      -0.028,
      -0.057,
      -0.042,
      -0.051,
      -0.05,
      -0.039,
      -0.019,
      -0.026,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Purchases of equity and other investments, intangible assets and other items. FY21 and FY22 include $0.65B and $0.64B of equity and other investments.',
    values: [
      -0.004,
      -0.014,
      -0.006,
      -0.011,
      -0.65,
      -0.635,
      -0.4,
      -0.134,
      -0.041,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities.',
    values: [
      0.575,
      1.072,
      0.736,
      3.557,
      1.65,
      0.018,
      0.06,
      0.061,
      -0.811,
      null,
    ],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Proceeds from public equity offerings in FY17 to FY21 and from employee stock option exercises. Share repurchases began in 2026.',
    values: [0.575, 1.072, 0.736, 2.649, 1.65, 0.018, 0.06, 0.061, 0.232, null],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'The $920M of 0.125% convertible senior notes issued in September 2020, which matured in November 2025 and were settled in cash for $1.04B because the share price was above the $144.01 conversion price.',
    values: [0, 0, 0, 0.908, 0, 0, 0, 0, -1.043, null],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Shopify does not pay a dividend.',
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures, the same definition Shopify uses. FY26E is the consensus of 49 analysts.',
    values: [
      -0.012, -0.019, 0.014, 0.383, 0.485, -0.186, 0.905, 1.597, 2.007, 2.86,
    ],
  },
];
