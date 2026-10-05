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
  76.45, 81.581, 82.059, 82.584, 78.74, 79.99, 85.159, 88.821, 94.193,
];

export const expenseLines = [
  {
    label: 'Operating expenses',
    desc: 'Cost of products sold, selling, marketing and administrative expenses, research and development, in-process research and development, and restructuring. Johnson & Johnson does not report an operating income line, so this page treats these five lines as operating.',
    values: [
      58.27, 61.783, 62.245, 63.098, 58.906, 60.035, 63.952, 68.017, 68.906,
    ],
  },
  {
    label: 'Cost of products sold',
    desc: 'Manufacturing, materials, and distribution costs for medicines and medical devices, including amortization of acquired intangible assets ($4.6B in FY25) and royalties paid to collaboration partners after approval.',
    values: [
      25.439, 27.091, 27.556, 28.427, 23.402, 24.596, 26.553, 27.471, 30.256,
    ],
    indent: 1,
  },
  {
    label: 'Selling, marketing and administrative expenses',
    desc: 'Sales forces, advertising, and promotion for both segments, plus corporate overhead. FY17–FY20 include the consumer brands that became Kenvue.',
    values: [
      21.52, 22.54, 22.178, 22.084, 20.118, 20.246, 21.512, 22.869, 23.676,
    ],
    indent: 1,
  },
  {
    label: 'Research and development expense',
    desc: 'Discovery, clinical trials, and regulatory work across Innovative Medicine and MedTech, including upfront and milestone payments to partners before approval. FY24 includes $1.8B of charges for acquired in-process research and development assets.',
    values: [
      10.594, 10.775, 11.355, 12.159, 14.277, 14.135, 15.085, 17.232, 14.665,
    ],
    indent: 1,
  },
  {
    label: 'In-process research and development',
    desc: 'Write-downs of acquired pipeline assets whose prospects deteriorated. Labeled "In-process research and development impairments" from the FY23 10-K onward.',
    values: [0.408, 1.126, 0.89, 0.181, 0.9, 0.783, 0.313, 0.211, 0.081],
    indent: 1,
  },
  {
    label: 'Restructuring',
    desc: 'Site closures, severance, and other exit costs from restructuring programs.',
    values: [0.309, 0.251, 0.266, 0.247, 0.209, 0.275, 0.489, 0.234, 0.228],
    indent: 1,
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest income, interest expense, and other (income) expense, net. Negative values mean these items added to earnings. Litigation accruals, including the talc reserves, sit in other (income) expense, which is why this line swings so widely.',
    values: [0.507, 1.799, 2.486, 2.989, 0.656, 0.596, 6.145, 4.117, -7.294],
  },
  {
    label: 'Interest income',
    desc: 'Interest earned on cash and marketable securities, shown as a negative expense.',
    values: [
      -0.385, -0.611, -0.357, -0.111, -0.053, -0.49, -1.261, -1.332, -1.056,
    ],
    indent: 1,
  },
  {
    label: 'Interest expense, net of portion capitalized',
    desc: 'Interest on commercial paper and long-term notes. It rose in FY23–FY25 with a higher average debt balance.',
    values: [0.934, 1.005, 0.318, 0.201, 0.183, 0.276, 0.772, 0.755, 0.971],
    indent: 1,
  },
  {
    label: 'Other (income) expense, net',
    desc: 'Litigation accruals and settlements, gains and losses on securities and divestitures, employee benefit plan income, acquisition costs, and royalty income. Talc charges were about $7.0B in FY23 and $5.1B in FY24, and FY25 includes the reversal of about $7.0B of the talc reserve.',
    values: [-0.042, 1.405, 2.525, 2.899, 0.526, 0.81, 6.634, 4.694, -7.209],
    indent: 1,
  },
  {
    label: 'Provision for taxes on income',
    desc: 'Income tax provision as reported on the income statement. FY17 includes a provisional charge of about $13.0B from the Tax Cuts and Jobs Act, which pushed the effective rate to 92.6%.',
    values: [16.373, 2.702, 2.209, 1.783, 1.377, 2.989, 1.736, 2.621, 5.777],
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
    desc: 'Net change in cash and cash equivalents, including the effect of exchange rates.',
    values: [
      -1.148,
      0.283,
      -0.802,
      -3.32,
      0.502,
      -0.36,
      7.732,
      2.246,
      -4.396,
      null,
    ],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash flows from operating activities. The cash flow statement is consolidated, so it includes the Consumer Health business until its separation as Kenvue in August 2023.',
    values: [
      21.056,
      22.201,
      23.416,
      23.536,
      23.41,
      21.194,
      22.791,
      24.266,
      24.53,
      null,
    ],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used by investing activities: capital expenditures, acquisitions, purchases of in-process R&D, and purchases and sales of investments. FY23 was positive because sales of investments ($19.4B) exceeded purchases ($10.9B) in a year without acquisitions.',
    values: [
      -14.868,
      -3.167,
      -6.194,
      -20.825,
      -8.683,
      -12.371,
      0.878,
      -18.599,
      -23.588,
      null,
    ],
  },
  {
    label: 'Additions to property, plant and equipment',
    desc: 'Capital expenditures for manufacturing plants, laboratories, and equipment.',
    values: [
      -3.279,
      -3.67,
      -3.498,
      -3.347,
      -3.652,
      -4.009,
      -4.543,
      -4.424,
      -4.832,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Acquisitions, net of cash acquired',
    desc: 'Cash paid for businesses. The large years are Actelion (FY17), Momenta Pharmaceuticals (FY20), Abiomed (FY22), Shockwave Medical (FY24), and Intra-Cellular Therapies (FY25).',
    values: [
      -35.151,
      -0.899,
      -5.81,
      -7.323,
      -0.06,
      -17.652,
      0,
      -15.146,
      -17.541,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used by financing activities: dividends, share repurchases, and debt issued and repaid. FY23 also includes $8.0B of debt proceeds that transferred to Kenvue and $4.2B from the Kenvue initial public offering.',
    values: [
      -7.673,
      -18.51,
      -18.015,
      -6.12,
      -14.047,
      -8.871,
      -15.825,
      -3.132,
      -5.539,
      null,
    ],
  },
  {
    label: 'Dividends to shareholders',
    desc: 'Cash dividends paid. The dividend per share rose every year shown, from $3.32 in FY17 to $5.14 in FY25.',
    values: [
      -8.943,
      -9.494,
      -9.917,
      -10.481,
      -11.032,
      -11.682,
      -11.77,
      -11.823,
      -12.381,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Repurchase of common stock',
    desc: 'Cash spent repurchasing common stock. The 191M shares taken back in the August 2023 Kenvue exchange offer were a non-cash exchange and do not appear here.',
    values: [
      -6.358,
      -5.868,
      -6.746,
      -3.221,
      -3.456,
      -6.035,
      -5.054,
      -2.432,
      -5.953,
      null,
    ],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus additions to property, plant and equipment.',
    values: [
      17.777, 18.531, 19.918, 20.189, 19.758, 17.185, 18.248, 19.842, 19.698,
      25.15,
    ],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    'FY26E revenue of $101.1B is the midpoint of Johnson & Johnson’s reported-sales guidance, raised on 15 July 2026. FY26E EPS of $11.68 is the midpoint of its adjusted (non-GAAP) EPS guidance, which excludes intangible amortization and special items; the company does not guide GAAP EPS. FY26E free cash flow of $25.15B is the consensus analyst estimate from stockanalysis.com as of 2 October 2026. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end divided by diluted EPS. FY21 and FY22 use total EPS including Consumer Health, which shareholders still owned; FY23 onward uses EPS from continuing operations.',
      values: [null, 22.7, 25.9, 28.6, 21.9, 26.2, 30.1, 25.1, 18.8, 21.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 25.5,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Not meaningful: a provisional Tax Cuts and Jobs Act charge of about $13.0B cut EPS to $0.47, which would put the ratio near 300×.',
        FY23: 'Uses EPS from continuing operations ($5.20). Total EPS of $13.72 includes the $21.0B one-time gain on the Kenvue exchange offer.',
        FY24: 'Talc charges of about $5.1B depressed EPS.',
        FY25: 'Low partly because EPS includes the reversal of about $7.0B of talc reserves.',
        FY26E:
          'Calculated from $256.03 divided by adjusted EPS guidance of $11.68. Adjusted EPS excludes intangible amortization and special items, so this ratio reads lower than the GAAP ratios before it.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per share.',
      values: [21.6, 18.7, 19.6, 20.8, 23.1, 27.4, 22.0, 17.8, 25.6, 24.9],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 21.6,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Calculated from $256.03 divided by consensus FCF per share of $10.29 (FCF $25.15B / 2.444B diluted shares in the first half of 2026).',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share. FY21 and FY22 include Consumer Health; FY23 onward is continuing operations.',
      values: [0.47, 5.61, 5.63, 5.51, 7.81, 6.73, 5.2, 5.79, 11.03, 11.68],
      format: { prefix: '$', decimals: 2 },
      median10y: 5.63,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Depressed by a provisional Tax Cuts and Jobs Act charge of about $13.0B.',
        FY23: 'Continuing operations. Total EPS of $13.72 includes the $21.0B gain on the Kenvue exchange offer.',
        FY25: 'Includes the reversal of about $7.0B of talc reserves.',
        FY26E:
          'Midpoint of adjusted (non-GAAP) EPS guidance of $11.60–$11.75. FY25 adjusted EPS was $10.79.',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [6.48, 6.79, 7.42, 7.56, 7.39, 6.45, 7.13, 8.17, 8.11, 10.29],
      format: { prefix: '$', decimals: 2 },
      median10y: 7.39,
      guidanceCount: 1,
      yearNotes: {
        FY26E:
          'Derived from consensus FCF of $25.15B divided by 2.444B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      desc: 'Net income divided by year-end shareholders’ equity. FY17–FY22 use total net earnings, matching equity that still included Consumer Health; FY23 onward uses continuing operations.',
      values: [2.2, 25.6, 25.4, 23.3, 28.2, 23.4, 19.4, 19.7, 32.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 23.4,
      yearNotes: {
        FY17: 'Depressed by the Tax Cuts and Jobs Act charge.',
        FY23: 'Equity fell by $31.4B of shares taken into treasury in the Kenvue exchange offer.',
      },
    },
    {
      label: 'ROIC %',
      desc: 'Operating income (revenue minus the operating expense lines) after tax at the effective rate, divided by year-end equity plus total debt.',
      values: [1.4, 18.6, 19.8, 17.6, 17.1, 14.5, 19.1, 16.2, 16.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 17.1,
      yearNotes: {
        FY17: 'The 92.6% effective tax rate from the Tax Cuts and Jobs Act charge erased most of after-tax operating income.',
      },
    },
    {
      label: 'Debt to equity ratio',
      desc: 'Loans and notes payable plus long-term debt, divided by year-end shareholders’ equity.',
      values: [0.57, 0.51, 0.47, 0.56, 0.46, 0.52, 0.43, 0.51, 0.59],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.51,
    },
    {
      label: 'Sustainable growth rate %',
      desc: 'ROE multiplied by the share of net income retained after dividends.',
      values: [null, 9.7, 8.7, 6.7, 13.3, 8.1, 2.3, 3.1, 17.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 8.4,
      yearNotes: {
        FY17: 'Not meaningful: dividends were nearly seven times net income after the Tax Cuts and Jobs Act charge.',
        FY23: 'Low because dividends took 88% of continuing net income after the talc charge.',
      },
    },
    {
      label: 'Operating margin %',
      desc: 'Revenue minus cost of products sold, SM&A, R&D, IPR&D, and restructuring, as a share of revenue.',
      values: [23.8, 24.3, 24.1, 23.6, 25.2, 24.9, 24.9, 23.4, 26.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 24.3,
    },
    {
      label: 'Net margin %',
      desc: 'Net earnings from continuing operations as a share of revenue.',
      values: [1.7, 18.8, 18.4, 17.8, 22.6, 20.5, 15.6, 15.8, 28.5],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 18.4,
      yearNotes: {
        FY17: 'Tax Cuts and Jobs Act charge of about $13.0B.',
        FY23: 'Talc charge of about $7.0B.',
        FY25: 'Includes the reversal of about $7.0B of talc reserves.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [23.3, 22.7, 24.3, 24.4, 25.1, 21.5, 21.4, 22.3, 20.9, 24.9],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.7,
      guidanceCount: 1,
      yearNotes: {
        FY21: 'Free cash flow includes Consumer Health but revenue is restated to exclude it, which flatters FY21–FY22.',
        FY26E:
          'Derived from consensus FCF of $25.15B and revenue guidance of $101.1B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Trade receivables divided by revenue, multiplied by 365.',
      values: [64.4, 63.1, 64.4, 60.0, 59.5, 64.1, 63.7, 61.0, 66.6],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 63.7,
      yearNotes: {
        FY21: 'Uses consolidated receivables and revenue ($93.8B) including Consumer Health, because the FY21 balance sheet was not restated.',
      },
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net earnings. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [null, 1.45, 1.55, 1.6, 1.12, 1.18, 0.65, 1.73, 0.92],
      format: { decimals: 2 },
      median10y: 1.32,
      yearNotes: {
        FY17: 'Not meaningful: net earnings of $1.3B were cut by a mostly non-cash tax charge, which would put the ratio at 16.2.',
        FY23: 'Net earnings include the $21.0B non-cash gain on the Kenvue exchange offer.',
        FY24: 'Elevated because the $5.1B talc charge reduced earnings as an accrual rather than as a cash payment.',
        FY25: 'Below 1.0 because the $7.0B talc reserve reversal raised earnings without bringing in cash.',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Sales to customers, operating income, and net earnings in billions. FY17–FY20 include the Consumer Health business; FY21 onward is restated to exclude it after its separation as Kenvue.',
    revenueDesc: 'Sales to customers across Innovative Medicine and MedTech.',
    operatingIncomeDesc:
      'Revenue minus cost of products sold, SM&A, R&D, in-process R&D, and restructuring. Johnson & Johnson does not report this subtotal; litigation and other (income) expense are excluded.',
    netIncomeDesc:
      'Net earnings from continuing operations. FY17 was cut to $1.3B by the Tax Cuts and Jobs Act charge.',
    chartNote:
      'The FY20 to FY21 drop in revenue reflects the restatement that removed Consumer Health ($15.0B in FY21), not an organic decline. Operating income has stayed between 23% and 27% of revenue for nine years, while net earnings swing with talc accruals and their FY25 reversal. FY26E revenue is the midpoint of company guidance; Johnson & Johnson does not guide GAAP earnings.',
  },
  revenue: [
    { year: 'FY17', revenue: 76.45, operatingIncome: 18.18, netIncome: 1.3 },
    { year: 'FY18', revenue: 81.58, operatingIncome: 19.8, netIncome: 15.3 },
    { year: 'FY19', revenue: 82.06, operatingIncome: 19.81, netIncome: 15.12 },
    { year: 'FY20', revenue: 82.58, operatingIncome: 19.49, netIncome: 14.71 },
    { year: 'FY21', revenue: 78.74, operatingIncome: 19.83, netIncome: 17.8 },
    { year: 'FY22', revenue: 79.99, operatingIncome: 19.96, netIncome: 16.37 },
    { year: 'FY23', revenue: 85.16, operatingIncome: 21.21, netIncome: 13.33 },
    { year: 'FY24', revenue: 88.82, operatingIncome: 20.8, netIncome: 14.07 },
    { year: 'FY25', revenue: 94.19, operatingIncome: 25.29, netIncome: 26.8 },
    { year: 'FY26E', revenue: 101.1, operatingIncome: null, netIncome: null },
  ],
  thesis: [
    'Johnson & Johnson is now two businesses, Innovative Medicine (64% of FY25 sales) and MedTech (36%), after separating Consumer Health as Kenvue in 2023, and the oncology franchise led by Darzalex ($14.4B in FY25) has grown fast enough to absorb the loss of Stelara exclusivity, whose sales fell 41% in FY25.',
    'Operating margin has stayed between 23% and 27% of revenue and free cash flow between about $17B and $20B in every year since FY17, which has funded a dividend raised every year and a run of large acquisitions (Actelion, Abiomed, Shockwave, and Intra-Cellular) while debt stayed near half of equity.',
    'Talc litigation is the main swing factor in reported earnings, with charges of about $7.0B in FY23 and $5.1B in FY24 followed by a $7.0B reserve reversal in FY25, and the planned separation of the Orthopaedics business (announced October 2025) will change the shape of MedTech again.',
  ],
};

export default financials;
