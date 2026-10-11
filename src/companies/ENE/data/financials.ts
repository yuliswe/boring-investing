import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

export const cashFlowStatementYears = [
  'FY93',
  'FY94',
  'FY95',
  'FY96',
  'FY97',
  'FY98',
  'FY99',
  'FY00',
];

export const cashFlowStatementLines = [
  {
    label: 'Net cash flow',
    desc: 'Net change in cash for the year.',
    values: [-0.001, -0.008, -0.017, 0.141, -0.09, -0.059, 0.18, 1.09],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities. Enron structured prepay transactions with banks as operating cash flow, so these figures overstate true operating cash generation by an estimated $1-2B per year in the late 1990s.',
    values: [0.468, 0.46, -0.015, 1.04, 0.21, 1.64, 1.23, 4.78],
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, dominated by property additions, equity investments in unconsolidated subsidiaries, and acquisitions.',
    values: [-0.639, -0.56, 0.013, -1.23, -2.15, -3.965, -3.51, -4.26],
  },
  {
    label: 'Financing activities',
    desc: 'Net cash from financing activities, primarily long-term debt issuance, preferred stock issuance, and equity offerings, offset by debt repayment and dividends.',
    values: [0.17, 0.092, -0.016, 0.331, 1.85, 2.266, 2.46, 0.57],
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures. Negative in most years because Enron consistently spent more on capital projects than it generated from operations.',
    values: [-0.227, -0.201, -0.746, 0.185, -1.88, -0.265, -1.86, 1.47],
  },
];

export const expenseYears = [
  'FY92',
  'FY93',
  'FY94',
  'FY95',
  'FY96',
  'FY97',
  'FY98',
  'FY99',
  'FY00',
];

export const revenueByYear = [
  6.415, 7.986, 8.984, 9.189, 13.289, 20.273, 31.26, 40.112, 100.789,
];

export const expenseLines = [
  {
    label: 'Cost of gas, electricity and other products',
    desc: 'Direct commodity costs for gas sales, electricity sales, metals trading, and other product revenues. As Enron shifted from pipeline operations to energy trading in the mid-1990s, this line ballooned from 66% of revenue (FY92) to 94% (FY00) because the company recorded gross notional trading volumes as revenue rather than the net margin.',
    values: [
      4.222, 5.566, 6.517, 6.733, 10.478, 17.311, 26.381, 34.761, 94.517,
    ],
  },
  {
    label: 'Operating expenses',
    desc: 'Selling, general and administrative expenses, including salaries, marketing, occupancy, and technology costs. FY97 includes a $675M contract restructuring charge; FY99 includes a $441M impairment of long-lived assets.',
    values: [null, 1.147, 1.123, 1.218, 1.421, 2.081, 2.352, 2.996, 3.184],
  },
  {
    label: 'Exploration, taxes and other operating',
    desc: 'Oil and gas exploration expenses, taxes other than income taxes (state, local, property), and the $675M FY97 contract restructuring charge.',
    values: [null, 0.184, 0.186, 0.188, 0.226, 0.941, 0.322, 0.683, 0.28],
  },
  {
    label: 'Depreciation, depletion and amortization',
    desc: 'Depreciation of pipeline, power plant, and other physical assets plus depletion of oil and gas reserves and amortization of intangible assets.',
    values: [0.376, 0.458, 0.441, 0.432, 0.474, 0.6, 0.827, 0.87, 0.855],
  },
  {
    label: 'Interest and related charges',
    desc: 'Interest on long-term debt and short-term borrowings, net of capitalised interest. Enron funded its trading expansion and off-balance-sheet entities with growing debt, pushing interest from $274M (FY96) to $838M (FY00).',
    values: [0.33, 0.3, 0.273, 0.284, 0.274, 0.401, 0.55, 0.656, 0.838],
  },
  {
    label: 'Income tax expense (benefit)',
    desc: 'Provision for income taxes. FY97 shows a benefit because the $675M restructuring charge and Chewco/JEDI consolidation created a pre-tax loss.',
    values: [0.09, 0.089, 0.167, 0.285, 0.271, -0.09, 0.175, 0.104, 0.434],
  },
];

const financials: SoftwareFinancials = {
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Year-end split-adjusted stock price divided by diluted EPS. FY97-FY00 use the November 2001 restated EPS, which reduced cumulative net income by $591M across those four years. Stock prices are derived from reported annual returns and the known August 2000 peak of $90.75; all figures are on a post-split basis after the August 1999 two-for-one split.',
      values: [18.5, 21.9, 17.3, 19.1, 19.6, null, 33.6, 54.9, 85.6, null],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 21.9,
      yearNotes: {
        FY97: 'Restated EPS was -$0.01, making the P/E ratio meaningless. As-reported EPS of $0.16 would give a P/E of 129x.',
        FY98: 'Using restated diluted EPS of $0.86; as-reported was $1.01 (P/E of 29x).',
        FY99: 'Using restated diluted EPS of $0.79; as-reported was $1.10 (P/E of 39x). The stock rose 50% during the year.',
        FY00: 'Using restated diluted EPS of $0.97; as-reported was $1.12 (P/E of 74x). The stock nearly doubled during the year despite only 2% EPS growth.',
      },
    },
    {
      label: 'Debt to equity',
      desc: 'Long-term debt divided by shareholders equity, using restated balance sheet figures for FY97-FY00. The restatement added $561-711M of previously hidden debt per year by consolidating off-balance-sheet entities. The true leverage was even higher because the restated figures still exclude billions in guarantees and prepay obligations that the bankruptcy examiner later identified.',
      values: [null, 0.97, 0.97, 0.9, 1.31, 1.2, 1.01, 1.05, 1.05, null],
      format: { decimals: 2 },
      invertColor: true,
      yearNotes: {
        FY97: 'Restated D/E of 1.31x versus as-reported 1.11x. The Portland General acquisition in July 1997 added significant debt and equity.',
        FY00: 'Restated D/E of 1.05x versus as-reported 0.89x. The $628M of additional debt reflected consolidated SPE obligations.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      desc: 'GAAP diluted earnings per share, split-adjusted for the August 1999 two-for-one split (earlier splits in December 1991 and August 1993 are also reflected). FY97-FY00 use the November 2001 restated figures, which reduced cumulative net income by $591M.',
      values: [0.61, 0.63, 0.85, 0.97, 1.08, -0.01, 0.86, 0.79, 0.97, null],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.85,
      yearNotes: {
        FY97: 'Restated from as-reported $0.16. The original FY97 results included a $675M write-down; the restatement further reduced earnings by consolidating Chewco and JEDI.',
        FY98: 'Restated from as-reported $1.01.',
        FY99: 'Restated from as-reported $1.10. Includes a $131M cumulative effect loss from adopting EITF 98-10.',
        FY00: 'Restated from as-reported $1.12.',
      },
    },
    {
      label: 'Book value per share',
      desc: 'Shareholders equity divided by diluted shares outstanding, split-adjusted. FY97-FY00 use restated equity, which the November 2001 restatement reduced by $313M to $1,164M per year through consolidation of off-balance-sheet entities.',
      values: [null, 5.41, 5.91, 7.3, 8.53, 9.97, 12.2, 13.71, 11.8, null],
      format: { prefix: '$', decimals: 2 },
      yearNotes: {
        FY97: 'Restated equity of $5,305M versus as-reported $5,618M.',
        FY00: 'Restated equity of $10,306M versus as-reported $11,470M.',
      },
    },
    {
      label: 'Operating margin',
      desc: 'As-reported operating income as a share of total revenues. Because Enron recorded gross trading volumes as revenue, this margin collapsed from 8-10% in the pipeline era to under 2% by FY00, masking the fact that the underlying business generated only $1-2B of operating income per year.',
      values: [9.6, 7.9, 8.0, 6.7, 5.2, 0.1, 4.4, 2.0, 1.9, null],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 5.2,
      yearNotes: {
        FY97: 'Effectively zero because the $675M restructuring charge wiped out nearly all operating income.',
        FY00: 'Operating income of $1.95B on $100.8B of revenue gives a 1.9% margin, illustrating how inflated the revenue denominator had become.',
      },
    },
    {
      label: 'Net margin',
      desc: 'Net income as a share of total revenues, using restated net income for FY97-FY00. Non-operating items (gains on asset sales, equity earnings from unconsolidated affiliates) sometimes exceeded interest expense, which is why net income exceeded operating income in FY95, FY96, and FY99.',
      values: [4.8, 4.2, 5.0, 5.7, 4.4, 0.04, 1.9, 1.6, 0.8, null],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 4.2,
      yearNotes: {
        FY97: 'Restated net income of $9M on $20.3B of revenue.',
        FY00: 'Despite $100.8B of revenue, Enron retained only $847M of restated net income.',
      },
    },
  ],
  revenueSection: {
    kicker:
      'Revenue as filed by Enron in its 10-K and 10-Q reports. From FY97 onward Enron reported gross commodity trading volumes as revenue under mark-to-market accounting, which is why revenue roughly quintupled from $20B to $101B in three years while operating income barely grew. FY01 covers only the first nine months (through 30 September) because the company filed for bankruptcy on 2 December 2001 and never filed a full-year report.',
    revenueDesc:
      'Total revenues as filed, including gross mark-to-market trading volumes. These figures are not comparable to how most companies report revenue, because a typical energy company would book only the net margin on a trading contract, not the full notional value.',
    operatingIncomeDesc:
      'GAAP operating income as reported (revenue minus all operating costs). Despite revenue growing 16x from FY92 to FY00, operating income only tripled from $0.6B to $2.0B, which reveals how little real value the trading volumes represented.',
    netIncomeDesc:
      'GAAP net income. FY97-FY00 use the November 2001 restated figures, which reduced cumulative net income by $591M through the consolidation of Chewco, JEDI, and LJM entities. FY92-FY96 are as-reported. FY01 covers nine months only and uses as-reported figures ($225M for the period).',
  },
  revenue: [
    { year: 'FY92', revenue: 6.415, operatingIncome: 0.614, netIncome: 0.306 },
    { year: 'FY93', revenue: 7.986, operatingIncome: 0.631, netIncome: 0.333 },
    { year: 'FY94', revenue: 8.984, operatingIncome: 0.716, netIncome: 0.453 },
    { year: 'FY95', revenue: 9.189, operatingIncome: 0.618, netIncome: 0.52 },
    { year: 'FY96', revenue: 13.289, operatingIncome: 0.69, netIncome: 0.584 },
    { year: 'FY97', revenue: 20.273, operatingIncome: 0.015, netIncome: 0.009 },
    { year: 'FY98', revenue: 31.26, operatingIncome: 1.378, netIncome: 0.59 },
    { year: 'FY99', revenue: 40.112, operatingIncome: 0.802, netIncome: 0.643 },
    {
      year: 'FY00',
      revenue: 100.789,
      operatingIncome: 1.953,
      netIncome: 0.847,
    },
    {
      year: 'FY01',
      revenue: 138.718,
      operatingIncome: 0.272,
      netIncome: 0.225,
    },
  ],
  thesis: [
    'Enron began as a natural gas pipeline company formed from the 1985 merger of Houston Natural Gas and InterNorth, and by the early 1990s it had repositioned itself as an energy trading intermediary that made markets in natural gas, electricity, and dozens of other commodities, building what management described as a "logistics company" with reported revenue growing from $6 billion in FY92 to $101 billion in FY00, a sixteen-fold increase that placed the company seventh on the Fortune 500.',
    'The growth was built on three accounting mechanisms that inflated reported results while hiding the underlying economics: mark-to-market revenue recognition that booked the full discounted value of long-term contracts at inception rather than as cash was earned, off-balance-sheet special purpose entities (Chewco, LJM1, LJM2, and the Raptor structures) that moved debt and losses out of the consolidated financial statements, and structured prepay transactions with banks that disguised borrowings as operating cash flow, with the bankruptcy examiner later estimating that $5 billion or more in financing flows were misclassified as operating activities.',
    'The unravelling began in August 2001 when CEO Jeffrey Skilling resigned after six months in the role, accelerated through October when a $1.01 billion write-down and $1.2 billion equity reduction were disclosed, and ended on 2 December 2001 with the largest bankruptcy filing in American history at the time, resulting in criminal convictions for CEO Skilling (sentenced to 24 years, later reduced to 14), CFO Andrew Fastow (6 years), and chairman Kenneth Lay (convicted but died before sentencing), while auditor Arthur Andersen surrendered its CPA licences and effectively ceased to exist.',
  ],
};

export default financials;
