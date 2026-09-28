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
  22.871, 24.556, 22.32, 24.54, 28.318, 28.541, 34.124, 45.043, 65.179,
];

export const expenseLines = [
  {
    label: 'Cost of products sold',
    desc: 'Direct manufacturing, materials, and supply chain costs for pharmaceutical products, including costs for contract manufacturing organizations that produce tirzepatide and other biologics.',
    values: [6.07, 6.43, 4.721, 5.483, 7.313, 6.63, 7.082, 8.418, 11.052],
  },
  {
    label: 'Research and development',
    desc: "Drug discovery, preclinical studies, clinical trials, and regulatory expenses. Lilly maintains one of the largest pharma R&D budgets globally, funding late-stage programs in metabolic disease, oncology, Alzheimer's, and immunology.",
    values: [5.282, 5.307, 5.595, 6.086, 6.931, 7.191, 9.313, 10.991, 13.337],
  },
  {
    label: 'Marketing, selling, and administrative',
    desc: 'Sales force compensation, advertising, promotional programs, and corporate overhead, including global commercial launch costs for Mounjaro and Zepbound.',
    values: [6.588, 6.632, 6.214, 6.121, 6.432, 6.44, 7.403, 8.594, 11.094],
  },
  {
    label: 'Acquired in-process research and development',
    desc: 'Expense recognized upon acquisition of pipeline assets that have not yet reached regulatory approval. Major charges include Loxo Oncology ($2.0B, FY18), Point Biopharma and DICE Therapeutics ($3.8B, FY23), and Morphic Therapeutic ($3.3B, FY24).',
    values: [1.113, 1.984, 0.24, 0.66, 0.97, 0.909, 3.8, 3.28, 2.91],
  },
  {
    label: 'Asset impairment, restructuring, and other',
    desc: 'Write-downs of intangible assets, restructuring charges, and other special items. FY17 includes a $1.2B write-down related to discontinued pipeline programs.',
    values: [1.674, 0.482, 0.576, 0.131, 0.316, 0.245, 0.068, 0.861, 0.484],
  },
  {
    label: 'Other income (expense), net',
    desc: 'Net of non-operating items between operating income and pre-tax income: interest expense, interest income, and gains and losses on equity investments. Negative values mean non-operating items produced net income. FY20 includes gains on post-spin-off sales of retained Elanco shares.',
    values: [
      -0.052, -0.075, -0.292, -1.172, 0.201, 0.321, -0.097, 0.219, 0.571,
    ],
  },
  {
    label: 'Income tax expense',
    desc: 'Provision for income taxes. FY17 includes a $2.4B provisional charge from the Tax Cuts and Jobs Act (repatriation toll tax on accumulated foreign earnings), which drove the full-year net loss.',
    values: [2.402, 0.564, 0.628, 1.036, 0.574, 0.562, 1.314, 2.09, 5.091],
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
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash and cash equivalents, including the effect of exchange rate changes on cash held in foreign currencies.',
    values: [1.95, 1.46, -5.66, 1.32, 0.16, -1.75, 0.75, 0.45, 4.0],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges (depreciation, amortization, stock-based compensation, acquired IPR&D) and working capital changes.',
    values: [5.62, 5.52, 4.84, 6.5, 7.26, 7.09, 4.24, 8.82, 16.81],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including capital expenditures for manufacturing facilities, business acquisitions, acquired IPR&D payments, and purchases and sales of investments.',
    values: [-3.78, 1.91, -8.08, -2.26, -2.76, -3.26, -7.15, -9.3, -10.97],
  },
  {
    label: 'Capital expenditures',
    desc: 'Purchases of property, plant, and equipment. The surge from $1.0B in FY19 to $7.8B in FY25 reflects construction of dedicated tirzepatide manufacturing facilities in Indiana, North Carolina, Ireland, and Germany.',
    values: [-1.08, -1.21, -1.03, -1.39, -1.31, -1.85, -3.45, -5.06, -7.84],
    indent: 1,
  },
  {
    label: 'Acquisitions & acquired IPR&D',
    desc: 'Cash paid for business acquisitions and upfront payments for acquired in-process research and development assets. FY19 includes $6.9B for Loxo Oncology. FY23 includes $3.9B for Point Biopharma and DICE Therapeutics. FY24 includes $3.4B for Morphic Therapeutic.',
    values: [-1.97, -1.81, -7.24, -1.49, -1.31, -0.96, -4.98, -4.3, -3.67],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, including debt issuance and repayment, share repurchases, and dividends. Positive values in FY23 and FY24 reflect large debt issuances to fund manufacturing expansion and pipeline acquisitions.',
    values: [0.14, -5.9, -2.32, -3.14, -4.13, -5.41, 3.5, 1.23, -2.21],
  },
  {
    label: 'Cash dividends paid',
    desc: 'Dividends paid to common shareholders. Lilly has raised its dividend for ten consecutive years, growing from $2.19B in FY17 to $5.38B in FY25.',
    values: [-2.19, -2.31, -2.41, -2.69, -3.09, -3.54, -4.07, -4.68, -5.38],
    indent: 1,
  },
  {
    label: 'Share repurchases',
    desc: 'Treasury stock repurchases. Buybacks were minimal in FY20 during COVID-19 and in FY23 when capital was directed toward manufacturing and acquisitions.',
    values: [-0.3, -4.15, -4.4, -0.5, -1.25, -1.5, -0.75, -2.5, -4.11],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. FY23 FCF compressed to $0.79B as capex nearly tripled while operating cash flow was constrained by large working capital investments for the tirzepatide launch.',
    values: [4.54, 4.31, 3.81, 5.11, 5.95, 5.24, 0.79, 3.76, 8.97],
  },
];

const financials: SoftwareFinancials = {
  guidanceYears: ['FY26E'],
  estimateNote:
    "FY26E revenue of $88.46B is the consensus analyst estimate from 28 analysts as of September 2026. FY26E GAAP diluted EPS of $36.93 is the consensus from 27 analysts. Lilly's own guidance (raised Q2 2026) is revenue of $85–87B and non-GAAP EPS of $35.50–$36.50. P/E recalculates from the adjusted price.",
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end price divided by GAAP diluted EPS.',
      values: [null, 37.0, 26.6, 24.9, 45.1, 53.0, 100.6, 65.8, 46.7, 31.6],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 45.1,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Negative EPS due to $2.4B TCJA charge; P/E not meaningful.',
        FY23: 'EPS of $5.80 was depressed by $3.8B in acquired IPR&D charges, inflating the P/E.',
        FY24: 'EPS of $11.71 was depressed by $3.3B in acquired IPR&D charges.',
        FY26E:
          'Calculated from $1,167.00 divided by consensus GAAP diluted EPS of $36.93.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Year-end price divided by free cash flow per share. FCF is operating cash flow minus capital expenditures.',
      values: [19.5, 27.7, 32.3, 30.2, 42.3, 63.2, null, 185.1, 107.5],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 37.3,
      yearNotes: {
        FY23: 'FCF of $0.79B produced a meaningless ratio; omitted. Capex nearly tripled to $3.4B for manufacturing.',
        FY24: 'Elevated because $5.1B in capex compressed free cash flow to $3.8B despite rising earnings.',
        FY25: 'FCF recovered to $9.0B as operating cash flow surged to $16.8B, but $7.8B in capex kept the ratio above 100x.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share.',
      values: [-0.19, 3.13, 4.95, 6.79, 6.12, 6.9, 5.8, 11.71, 22.95, 36.93],
      format: { prefix: '$', decimals: 2 },
      median10y: 6.46,
      guidanceCount: 1,
      yearNotes: {
        FY17: 'Net loss driven by $2.4B Tax Cuts and Jobs Act provisional charge.',
        FY23: 'Depressed by $3.8B in acquired IPR&D charges.',
        FY26E: 'Consensus GAAP diluted EPS from 27 analysts.',
      },
    },
    {
      label: 'Free cash flow per share',
      desc: 'Operating cash flow minus capital expenditures, divided by diluted shares outstanding.',
      values: [4.32, 4.17, 4.07, 5.6, 6.53, 5.79, 0.88, 4.16, 9.98],
      format: { prefix: '$', decimals: 2 },
      median10y: 4.32,
    },
    {
      label: 'Operating margin %',
      desc: 'Operating income as a share of total revenue.',
      values: [9.4, 15.2, 22.3, 24.7, 22.4, 25.0, 18.9, 28.6, 40.4],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.4,
      yearNotes: {
        FY17: 'Depressed by $1.7B in asset impairment and restructuring charges. FY17–FY18 include the Elanco animal health business.',
        FY23: 'Depressed by $3.8B in acquired IPR&D charges.',
      },
    },
    {
      label: 'Net margin %',
      desc: 'GAAP net income as a share of total revenue.',
      values: [-0.9, 13.2, 20.8, 25.2, 19.7, 21.9, 15.4, 23.5, 31.7],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 20.8,
      yearNotes: {
        FY17: 'Net loss due to $2.4B TCJA charge.',
      },
    },
    {
      label: 'FCF margin %',
      desc: 'Free cash flow as a share of total revenue.',
      values: [19.8, 17.6, 17.1, 20.8, 21.0, 18.4, 2.3, 8.3, 13.8],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 17.6,
      yearNotes: {
        FY23: 'Compressed to 2.3% as capex nearly tripled for tirzepatide manufacturing.',
      },
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 22.871, operatingIncome: 2.145 },
    { year: 'FY18', revenue: 24.556, operatingIncome: 3.721 },
    { year: 'FY19', revenue: 22.32, operatingIncome: 4.974 },
    { year: 'FY20', revenue: 24.54, operatingIncome: 6.058 },
    { year: 'FY21', revenue: 28.318, operatingIncome: 6.357 },
    { year: 'FY22', revenue: 28.541, operatingIncome: 7.127 },
    { year: 'FY23', revenue: 34.124, operatingIncome: 6.458 },
    { year: 'FY24', revenue: 45.043, operatingIncome: 12.899 },
    { year: 'FY25', revenue: 65.179, operatingIncome: 26.302 },
    { year: 'FY26E', revenue: 88.46, operatingIncome: null },
  ],
  thesis: [
    'Mounjaro (diabetes) and Zepbound (obesity) together generated $36.5B in FY25 revenue, more than doubling year-over-year and constituting 56% of total sales, by addressing the combined market of more than 37 million Americans with type 2 diabetes and over 100 million with obesity, which gives Lilly a long growth runway from a single molecule.',
    'Lilly reinvests aggressively in its pipeline, spending $13.3B on internal R&D and $2.9B on acquired in-process R&D in FY25, with late-stage programs in Alzheimer’s disease (donanemab), oncology, immunology, and neuroscience that diversify the growth narrative beyond GLP-1 agonists.',
    'Capital expenditures surged from $1.0B in FY19 to $7.8B in FY25 as Lilly builds dedicated manufacturing capacity for tirzepatide across facilities in Indiana, North Carolina, Ireland, and Germany, positioning the company to meet demand that outstripped supply in FY23 and FY24.',
  ],
};

export default financials;
