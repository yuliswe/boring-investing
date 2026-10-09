import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  reverseDcf: {
    companyName: 'Constellation Software',
    actualYear: 'FY25',
    forwardYear: 'FY26E',
    reportingCurrency: 'US$',
    fxRate: 1.424,
    fxSource: 'Bank of Canada, 8 October 2026',
    metric: 'cash flow',
    metricShort: 'Cash flow',
    paths: [
      {
        label: 'Free cash flow',
        column: 'Free cash flow',
        phrase: 'on consolidated free cash flow',
        actual: 2.664,
        forward: 2.97,
      },
      {
        label: 'FCFA2S',
        column: 'FCFA2S',
        phrase: 'on free cash flow available to shareholders',
        actual: 1.683,
        forward: 2.156,
      },
    ],
    startNote: 'FY26E estimates',
    actualNote:
      'Actual FY25 free cash flow of US$2.66B, and free cash flow available to shareholders (FCFA2S) of US$1.68B after interest, leases, the IRGA revaluation, and minority interests.',
    forwardNote:
      'Consensus FY26E free cash flow of US$2.97B. No consensus exists for FCFA2S, so its FY26E value annualises the US$1.08B earned in the first half of 2026.',
    sharesOutstanding: 0.02119,
    netCash: -2.5,
    netCashSource:
      'US$4.20B of debt (US$1.47B with recourse to CSI, including the debentures, plus US$2.72B without) and US$1.19B of IRGA liability, minus US$2.89B of cash, Q2 2026 report',
    assumptionNote:
      'Consolidated free cash flow includes all of partly owned Topicus and Lumine, so FCFA2S is closer to what belongs to Constellation shareholders.',
    sharesSource: 'stockanalysis.com, October 2026',
  },
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E values use consensus analyst estimates from MarketScreener (S&P Global Market Intelligence, 12 analysts as of September 2026). Revenue, operating income, and FCFA2S are consensus figures. P/FCFA2S recalculates from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/FCFA2S ratio',
      desc: 'Year-end market cap divided by free cash flow available to shareholders (FCFA2S), the metric CSU considers most representative of owner economics.',
      values: [
        17.5, 21.8, 18.6, 24.9, 23.0, 30.2, 25.6, 30.3, 30.7, 19.0, 17.0,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 24.0,
      guidanceCount: 1,
    },
  ],
  keyMetrics: [
    {
      label: 'FCFA2S per share',
      desc: 'Free cash flow available to shareholders divided by diluted shares outstanding. CSU uses FCFA2S as its primary profitability measure, excluding acquisition-related intangible amortization and non-cash charges that depress GAAP net income.',
      values: [
        22.45, 24.06, 30.19, 35.0, 54.76, 59.95, 59.25, 81.93, 100.42, 125.66,
        140.19,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 57.01,
      guidanceCount: 1,
    },
    {
      label: 'FCFA2S margin %',
      desc: 'FCFA2S as a share of total revenue.',
      values: [
        22.35, 20.56, 20.92, 21.26, 29.25, 24.89, 18.97, 20.66, 21.15, 22.92,
        21.5,
      ],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 21.21,
      guidanceCount: 1,
    },
  ],
  revenueSection: {
    netIncomeDesc:
      'IFRS net income attributable to CSU shareholders. Depressed relative to cash earnings by ~$1.2B annually in amortization of acquired intangible assets. FY23 was negative due to $0.9B in non-operating charges (IRGA revaluations and impairments).',
  },
  revenue: [
    { year: 'FY16', revenue: 2.13, operatingIncome: 0.34, netIncome: null },
    { year: 'FY17', revenue: 2.48, operatingIncome: 0.39, netIncome: 0.2 },
    { year: 'FY18', revenue: 3.06, operatingIncome: 0.48, netIncome: 0.35 },
    { year: 'FY19', revenue: 3.49, operatingIncome: 0.51, netIncome: 0.24 },
    { year: 'FY20', revenue: 3.97, operatingIncome: 0.63, netIncome: 0.33 },
    { year: 'FY21', revenue: 5.11, operatingIncome: 0.87, netIncome: 0.05 },
    { year: 'FY22', revenue: 6.62, operatingIncome: 0.92, netIncome: 0.4 },
    { year: 'FY23', revenue: 8.41, operatingIncome: 1.18, netIncome: -0.1 },
    { year: 'FY24', revenue: 10.07, operatingIncome: 1.47, netIncome: 0.59 },
    { year: 'FY25', revenue: 11.62, operatingIncome: 1.93, netIncome: 0.38 },
    { year: 'FY26E', revenue: 13.82, operatingIncome: 2.1, netIncome: null },
  ],
  expenses: [
    {
      year: 'FY17',
      costOfRevenue: 0.837,
      sellingGeneralAndAdmin: 0.676,
      researchAndDev: 0.346,
      depreciationAndAmortization: 0.023,
      otherOperating: 0.231,
      nonOperating: 0.07,
      taxes: 0.099,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY18',
      costOfRevenue: 1.041,
      sellingGeneralAndAdmin: 0.837,
      researchAndDev: 0.426,
      depreciationAndAmortization: 0.027,
      otherOperating: 0.279,
      nonOperating: -0.008,
      taxes: 0.106,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY19',
      costOfRevenue: 1.199,
      sellingGeneralAndAdmin: 0.942,
      researchAndDev: 0.509,
      depreciationAndAmortization: 0.092,
      otherOperating: 0.331,
      nonOperating: 0.056,
      taxes: 0.123,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY20',
      costOfRevenue: 1.324,
      sellingGeneralAndAdmin: 0.938,
      researchAndDev: 0.58,
      depreciationAndAmortization: 0.105,
      otherOperating: 0.403,
      nonOperating: 0.121,
      taxes: 0.167,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY21',
      costOfRevenue: 1.684,
      sellingGeneralAndAdmin: 1.275,
      researchAndDev: 0.757,
      depreciationAndAmortization: 0.121,
      otherOperating: 0.518,
      nonOperating: 0.499,
      taxes: 0.206,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY22',
      costOfRevenue: 2.338,
      sellingGeneralAndAdmin: 1.754,
      researchAndDev: 0.976,
      depreciationAndAmortization: 0.143,
      otherOperating: 0.676,
      nonOperating: 0.157,
      taxes: 0.175,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY23',
      costOfRevenue: 2.941,
      sellingGeneralAndAdmin: 2.173,
      researchAndDev: 1.247,
      depreciationAndAmortization: 0.162,
      otherOperating: 0.859,
      nonOperating: 0.922,
      taxes: 0.204,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY24',
      costOfRevenue: 3.436,
      sellingGeneralAndAdmin: 2.651,
      researchAndDev: 1.473,
      depreciationAndAmortization: 0.182,
      otherOperating: 1.044,
      nonOperating: 0.453,
      taxes: 0.244,
      dilutionAdjustment: 0,
    },
    {
      year: 'FY25',
      costOfRevenue: 3.847,
      sellingGeneralAndAdmin: 3.047,
      researchAndDev: 1.654,
      depreciationAndAmortization: 0.201,
      otherOperating: 1.182,
      nonOperating: 0.956,
      taxes: 0.353,
      dilutionAdjustment: 0,
    },
  ],
  expensesDeducedLines: ['Total', 'Other Ops.', 'Non-op.'],
  expenseLineDescriptions: {
    COGS: 'Cost of revenue — professional services and maintenance staff, third-party licences, and hardware, with depreciation of PP&E allocated proportionally.',
    'SG&A':
      'Selling, general and administrative — sales, marketing, and G&A staff, plus occupancy, travel, professional fees, and other overhead, with depreciation of PP&E allocated proportionally.',
    'R&D':
      'Research and development — R&D staff costs, with depreciation of PP&E allocated proportionally. CSU reports expenses by nature, so this line is the R&D staff department only.',
    'D&A':
      'Depreciation of property, plant and equipment only. Amortization of acquired intangible assets is reported separately under Other Ops.',
    'Other Ops.':
      "Amortization of acquired intangible assets — the IFRS-mandated non-cash charge on customer relationships, technology, and other intangibles recognized in acquisitions. This is the single largest non-cash cost and the main reason CSU's net margin (~5%) is far below its FCF margin (~23%).",
    'Non-op.':
      'Non-operating income and expenses — includes IRGA revaluation (mark-to-market on acquisition-related instruments), finance costs (interest on acquisition debt), foreign exchange gains and losses, bargain purchase gains, impairment charges, redeemable preferred share charges (Topicus/Lumine), and equity method revaluation. These items are volatile and largely non-cash or non-operational.',
  },
  expensesWarning:
    'CSU reports under IFRS, which mandates amortization of acquired intangible assets (~10% of revenue) as a non-cash charge. Combined with volatile non-operating items (~8%), these two lines push the Expenses Total to ~97% of revenue, but neither consumes cash, so free cash flow margins (~21%) are far above net income margins (~5%).',
  thesis: [
    'Serial acquisition model compounds capital at high returns across hundreds of vertical market software businesses, with annual deployment consistently exceeding $1 billion.',
    'Recurring maintenance and subscription revenue provides durable, predictable cash flows that fund continued acquisitions without requiring equity issuance.',
    'Decentralized operating model with autonomous business units allows efficient integration of acquisitions while preserving domain expertise and founder cultures.',
  ],
};

export default financials;

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
    desc: 'Net change in cash and equivalents for the year, including exchange rate effects.',
    values: [0.005, 0.048, 0.473, 0.696, 1.109, null],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges (primarily amortization of acquired intangible assets) and working capital changes.',
    values: [1.3, 1.297, 1.779, 2.196, 2.732, null],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus non-cash adjustments: amortization of intangible assets ($1.18B in FY25), depreciation, IRGA/TSS membership liability revaluation, foreign exchange losses, impairments, finance costs, equity method revaluations, and bargain purchase gains.',
    values: [1.255, 1.357, 1.815, 2.241, 2.738, null],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net change in accounts receivable, inventory, accounts payable, unearned revenue, and other operating assets and liabilities.',
    values: [0.045, -0.06, -0.036, -0.045, -0.006, null],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, dominated by cash paid for acquisitions rather than capital expenditures. CSU typically deploys more than $1B annually on acquisitions.',
    values: [-1.238, -1.694, -1.639, -1.567, -1.881, null],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Net cash used in acquisitions of businesses: cash paid to acquire vertical market software companies minus cash obtained with those businesses at closing.',
    values: [-1.183, -1.566, -1.695, -1.519, -1.34, null],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Net purchases and sales of investment securities. FY25 includes the $260M equity-method investment in Asseco Poland and other strategic investments.',
    values: [-0.031, -0.091, 0.096, -0.001, -0.53, null],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property, plant and equipment. Minimal relative to operating cash flow, as CSU is an asset-light software business.',
    values: [-0.029, -0.041, -0.042, -0.067, -0.068, -0.09],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Proceeds from sale of property and equipment and other investing activities.',
    values: [0.005, 0.004, 0.002, 0.02, 0.057, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash provided by (used in) financing activities, including proceeds from and repayment of credit facilities, dividends, and subsidiary equity transactions.',
    values: [-0.041, 0.483, 0.316, 0.114, 0.156, null],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'CSU does not repurchase shares and has maintained a stable share count of approximately 21.2 million shares. Subsidiary equity transactions (Topicus, Lumine) are classified in other financing items.',
    values: [0, 0, 0, 0, 0, null],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Net proceeds from credit facilities and other borrowings minus repayments. CSU and its subsidiaries (including Topicus and Lumine) use non-recourse revolving credit facilities to fund acquisitions.',
    values: [0.095, 0.693, 0.548, 0.587, 0.439, null],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Dividends paid to common shareholders of CSI. CSU has maintained a fixed dividend of $4.00 per share since FY14.',
    values: [-0.085, -0.085, -0.085, -0.085, -0.085, -0.08],
    indent: 1,
  },
  {
    label: 'Other financing cash flow items',
    desc: 'Lease payments, subsidiary minority interest transactions, and other financing activities. FY24 was elevated by subsidiary equity transactions related to the Lumine corporate reorganization.',
    values: [-0.051, -0.125, -0.147, -0.388, -0.198, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures (property, plant and equipment). Capital expenditures are minimal relative to operating cash flow, as CSU is an asset-light software business.',
    values: [1.271, 1.256, 1.737, 2.129, 2.664, 2.97],
  },
];
