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
  'FY26',
];

export const revenueByYear = [
  66.832, 67.684, 70.95, 76.118, 80.187, 82.006, 84.039, 84.284, 87.032,
];

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Every line between net sales and operating income: cost of products sold, selling, general and administrative expense, and the impairment charges P&G reports on their own line.',
    values: [
      53.469, 62.197, 55.244, 58.132, 62.374, 63.872, 65.494, 63.833, 67.284,
    ],
  },
  {
    label: 'Cost of products sold',
    desc: 'Raw materials, packaging, manufacturing, and shipping and handling. It rose to 52.6% of sales in FY22 when commodity and freight costs jumped, and fell back as price increases caught up.',
    values: [
      34.432, 34.768, 35.25, 37.108, 42.157, 42.76, 40.848, 41.164, 43.362,
    ],
    indent: 1,
  },
  {
    label: 'Selling, general and administrative expense',
    desc: 'Marketing and selling expenses, research and development, administrative overhead, and depreciation on non-manufacturing assets.',
    values: [
      19.037, 19.084, 19.994, 21.024, 20.217, 21.112, 23.305, 22.669, 23.922,
    ],
    indent: 1,
  },
  {
    label: 'Impairment charges',
    desc: 'Non-cash write-downs of the Gillette intangible asset and the Shave Care goodwill. Reported as "Goodwill and indefinite-lived intangible impairment charges" in FY19 ($8.3B) and "Indefinite-lived intangible asset impairment charge" in FY24 ($1.3B).',
    values: [0, 8.345, 0, 0, 0, 0, 1.341, 0, 0],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest expense, interest income, and other non-operating income/(expense), net. Negative values mean these items added to earnings.',
    values: [
      0.037, -0.582, -0.128, 0.371, -0.182, -0.219, -0.216, 0.284, -0.629,
    ],
  },
  {
    label: 'Interest expense',
    desc: 'Interest on commercial paper and long-term notes.',
    values: [0.506, 0.509, 0.465, 0.502, 0.439, 0.756, 0.925, 0.907, 0.877],
    indent: 1,
  },
  {
    label: 'Interest income',
    desc: 'Interest earned on cash and investment securities, shown as a negative expense.',
    values: [
      -0.247, -0.22, -0.155, -0.045, -0.051, -0.307, -0.473, -0.469, -0.43,
    ],
    indent: 1,
  },
  {
    label: 'Other non-operating income/(expense), net',
    desc: 'Divestiture gains and losses, non-service impacts of postretirement benefit plans, investment income, and other non-operating items, shown as a negative expense when it is income. FY25 includes a $752M charge for currency translation losses when P&G substantially liquidated its Argentina operations, and FY26 includes a $343M gain from dissolving the Glad joint venture.',
    values: [
      -0.222, -0.871, -0.438, -0.086, -0.57, -0.668, -0.668, -0.154, -1.076,
    ],
    indent: 1,
  },
  {
    label: 'Income taxes',
    desc: 'Income tax expense as reported on the income statement. FY18 includes a provisional net charge of $602M from the US Tax Cuts and Jobs Act, and the non-deductible part of the FY19 Shave Care impairment added 22.8 points to that year’s effective tax rate.',
    values: [3.465, 2.103, 2.731, 3.263, 3.202, 3.615, 3.787, 4.102, 4.233],
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
    desc: 'Net change in cash, cash equivalents and restricted cash, including the effect of exchange rates.',
    values: [
      -3.0,
      1.67,
      11.942,
      -5.893,
      -3.074,
      1.032,
      1.235,
      0.075,
      0.386,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Total operating activities from the consolidated statement of cash flows.',
    values: [
      14.867,
      15.242,
      17.403,
      18.371,
      16.723,
      16.848,
      19.846,
      17.817,
      19.556,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Total investing activities: capital expenditures, acquisitions, asset sales, and purchases and sales of investment securities. FY20 was positive because $6.2B of investment securities were sold or matured.',
    values: [
      -3.511,
      -3.49,
      3.045,
      -2.834,
      -4.424,
      -3.5,
      -3.504,
      -3.818,
      -4.624,
      null,
    ],
  },
  {
    label: 'Capital expenditures',
    desc: 'Spending on manufacturing plants and equipment. FY27E is the midpoint of guidance for capital spending of 4.5% to 5.5% of net sales, applied to guided FY27 net sales.',
    values: [
      -3.717, -3.347, -3.073, -2.787, -3.156, -3.062, -3.322, -3.773, -4.409,
      -4.44,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions, net of cash acquired',
    desc: 'Cash paid for businesses. FY19 is the over-the-counter healthcare business of Merck KGaA, bought for about $3.7B.',
    values: [
      -0.109,
      -3.945,
      -0.058,
      -0.034,
      -1.381,
      -0.765,
      -0.021,
      -0.011,
      -0.085,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Total financing activities: dividends, treasury stock purchases, and debt issued and repaid. FY20 also includes $4.8B of net new debt, which built cash during the pandemic.',
    values: [
      -14.375,
      -9.994,
      -8.367,
      -21.531,
      -14.876,
      -12.146,
      -14.855,
      -14.036,
      -14.46,
      null,
    ],
  },
  {
    label: 'Dividends to shareholders',
    desc: 'Cash dividends on common and preferred stock. The dividend has been raised every year for 70 consecutive years. FY27E is the company’s plan to pay around $10 billion.',
    values: [
      -7.31, -7.498, -7.789, -8.263, -8.77, -8.999, -9.312, -9.872, -10.232,
      -10.0,
    ],
    indent: 1,
  },
  {
    label: 'Treasury stock purchases',
    desc: 'Cash spent repurchasing common stock. FY27E is the company’s plan to repurchase approximately $5 billion.',
    values: [
      -7.004, -5.003, -7.405, -11.009, -10.003, -7.353, -5.006, -6.5, -5.028,
      -5.0,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY27E applies the midpoint of the 85%–90% adjusted free cash flow productivity guidance to net earnings implied by the midpoint of GAAP EPS guidance.',
    values: [
      11.15, 11.895, 14.33, 15.584, 13.567, 13.786, 16.524, 14.044, 15.147,
      14.46,
    ],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY27E'],
  estimateNote:
    'FY27E figures come from P&G’s fiscal 2027 guidance, issued 29 July 2026. Revenue of $88.77B applies the 2% midpoint of the 1%–3% all-in sales growth range to FY26 net sales. EPS of $6.82 applies the 3% midpoint of the 1%–5% GAAP diluted EPS growth range to FY26 EPS of $6.62. Free cash flow of $14.46B applies the 87.5% midpoint of the 85%–90% adjusted free cash flow productivity range to the net earnings that EPS implies at FY26 diluted shares. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end (30 June) divided by GAAP diluted EPS.',
      values: [21.3, null, 24.1, 24.5, 24.7, 25.7, 27.4, 24.5, 22.2, 21.2],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 24.5,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'EPS includes a provisional $602M net charge from the US Tax Cuts and Jobs Act.',
        FY19: 'Not meaningful: the $8.3B Shave Care impairment cut EPS to $1.43, which would put the ratio at 76.7×.',
        FY24: 'EPS includes the $1.3B Gillette intangible asset impairment.',
        FY27E:
          'Calculated from $144.91 divided by the $6.82 midpoint of GAAP EPS guidance.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per diluted share.',
      values: [18.6, 23.4, 21.9, 22.5, 26.9, 27.3, 24.7, 27.8, 23.5, 24.3],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 23.5,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Calculated from $144.91 divided by FCF per share of $5.97 derived from company guidance (FCF $14.46B / 2.422B FY26 diluted shares).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted net earnings per share attributable to Procter & Gamble.',
      values: [3.67, 1.43, 4.96, 5.5, 5.81, 5.9, 6.02, 6.51, 6.62, 6.82],
      format: { prefix: '$', decimals: 2 },
      median10y: 5.81,
      guidanceCount: 1,
      yearNotes: {
        FY18: 'Includes a provisional $602M net charge from the US Tax Cuts and Jobs Act.',
        FY19: 'Depressed by the $8.3B Shave Care impairment.',
        FY24: 'Includes the $1.3B Gillette intangible asset impairment.',
        FY26: 'Includes a $343M gain from dissolving the Glad joint venture. Core EPS, which excludes it and incremental restructuring, was $6.89.',
        FY27E:
          'Midpoint of guidance for 1%–5% GAAP EPS growth, including $0.13–$0.17 of non-core restructuring charges. Core EPS guidance is $6.89–$7.11.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [4.2, 4.68, 5.46, 5.99, 5.34, 5.55, 6.68, 5.72, 6.25, 5.97],
      format: { prefix: '$', decimals: 2 },
      median10y: 5.55,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from guidance-implied FCF of $14.46B divided by 2.422B FY26 diluted shares.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net earnings attributable to Procter & Gamble divided by year-end shareholders’ equity excluding noncontrolling interests.',
      values: [18.6, 8.3, 28.0, 30.8, 31.6, 31.3, 29.6, 30.7, 29.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 29.7,
      yearNotes: {
        FY19: 'Depressed by the $8.3B Shave Care impairment.',
      },
    },
    {
      label: 'ROIC %',
      desc: 'Operating income after tax at the effective rate, divided by year-end shareholders’ equity plus total debt.',
      values: [11.8, 4.6, 16.0, 18.7, 18.8, 17.9, 17.9, 18.8, 17.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 17.9,
      yearNotes: {
        FY18: 'The effective tax rate was 26.0% because of the Tax Cuts and Jobs Act transition charge.',
        FY19: 'Operating income was cut by the $8.3B Shave Care impairment, and the effective tax rate was 34.7%.',
      },
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Debt due within one year plus long-term debt, divided by year-end shareholders’ equity excluding noncontrolling interests.',
      values: [0.6, 0.64, 0.75, 0.69, 0.68, 0.74, 0.65, 0.66, 0.63],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.66,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the share of net earnings retained after dividends.',
      values: [4.7, null, 11.3, 13.0, 12.8, 12.1, 11.1, 11.7, 10.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 11.5,
      yearNotes: {
        FY18: 'Low because dividends took 75% of net earnings reduced by the tax reform charge.',
        FY19: 'Not meaningful: dividends were nearly twice net earnings after the Shave Care impairment.',
      },
    },
    {
      label: 'Operating margin %',
      desc: 'Operating income as reported, as a share of net sales.',
      values: [20.0, 8.1, 22.1, 23.6, 22.2, 22.1, 22.1, 24.3, 22.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.1,
      yearNotes: {
        FY19: 'Includes the $8.3B Shave Care impairment, without which the margin would have been 20.4%.',
        FY24: 'Includes the $1.3B Gillette impairment, without which the margin would have been 23.7%.',
      },
    },
    {
      label: 'Net margin %',
      desc: 'Net earnings attributable to Procter & Gamble as a share of net sales.',
      values: [14.6, 5.8, 18.4, 18.8, 18.4, 17.9, 17.7, 19.0, 18.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 18.4,
      yearNotes: {
        FY18: 'Tax Cuts and Jobs Act charge of $602M.',
        FY19: 'Shave Care impairment of $8.3B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [16.7, 17.6, 20.2, 20.5, 16.9, 16.8, 19.7, 16.7, 17.4, 16.3],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 17.4,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from guidance-implied FCF of $14.46B and guided net sales of $88.77B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Year-end accounts receivable divided by net sales, multiplied by 365.',
      values: [25.6, 26.7, 21.5, 22.7, 23.4, 24.4, 26.6, 26.8, 25.4],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 25.4,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net earnings attributable to Procter & Gamble. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [1.52, null, 1.34, 1.28, 1.13, 1.15, 1.33, 1.12, 1.22],
      format: { decimals: 2 },
      median10y: 1.25,
      yearNotes: {
        FY18: 'Elevated partly because net earnings were reduced by the $602M tax reform charge.',
        FY19: 'Not meaningful: the non-cash $8.3B impairment cut net earnings to $3.9B, which would put the ratio at 3.91.',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Net sales, operating income, and net earnings attributable to Procter & Gamble in billions, for fiscal years ending 30 June.',
    revenueDesc:
      'Net sales across the five reportable segments plus Corporate.',
    operatingIncomeDesc:
      'Operating income as reported, after cost of products sold, SG&A, and impairment charges.',
    netIncomeDesc:
      'Net earnings attributable to Procter & Gamble, after noncontrolling interests.',
    chartNote:
      'Net sales grew from $66.8B in FY18 to $87.0B in FY26, with the fastest years in FY21–FY22 as P&G raised prices to offset commodity costs. The FY19 dip in operating income and net earnings is the $8.3B Shave Care impairment, and the smaller FY24 dip is a further $1.3B Gillette impairment. FY27E net sales and net earnings are derived from company guidance; P&G does not guide operating income.',
  },
  revenue: [
    { year: 'FY18', revenue: 66.83, operatingIncome: 13.36, netIncome: 9.75 },
    { year: 'FY19', revenue: 67.68, operatingIncome: 5.49, netIncome: 3.9 },
    { year: 'FY20', revenue: 70.95, operatingIncome: 15.71, netIncome: 13.03 },
    { year: 'FY21', revenue: 76.12, operatingIncome: 17.99, netIncome: 14.31 },
    { year: 'FY22', revenue: 80.19, operatingIncome: 17.81, netIncome: 14.74 },
    { year: 'FY23', revenue: 82.01, operatingIncome: 18.13, netIncome: 14.65 },
    { year: 'FY24', revenue: 84.04, operatingIncome: 18.55, netIncome: 14.88 },
    { year: 'FY25', revenue: 84.28, operatingIncome: 20.45, netIncome: 15.97 },
    { year: 'FY26', revenue: 87.03, operatingIncome: 19.75, netIncome: 16.05 },
    { year: 'FY27E', revenue: 88.77, operatingIncome: null, netIncome: 16.52 },
  ],
  thesis: [
    'Procter & Gamble sells everyday household and personal care products through five segments, led by Fabric & Home Care (Tide, Ariel, Downy, Dawn), which grew from $21.4B of sales in FY18 to $30.3B in FY26 and now makes up 35% of the total, while Grooming (Gillette) barely grew and has been written down twice.',
    'Operating margin has held between 22% and 25% in every year since FY20, and free cash flow of $11B–$17B a year has paid a dividend raised for 70 consecutive years plus $5B–$11B of annual buybacks, which cut diluted shares from 2.66B in FY18 to 2.42B in FY26.',
    'Growth is slowing, since FY25 sales were flat and FY27 guidance calls for only 1%–3% sales growth against about $1B of after-tax commodity and transport cost headwinds, so the FY26 year-end P/E of 22.2 sits below its nine-year median of 24.5.',
  ],
};

export default financials;
