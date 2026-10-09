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
  'FY26',
];

export const revenueByYear = [
  6.91, 9.71, 11.72, 10.92, 16.68, 26.91, 26.97, 60.92, 130.5, 215.94,
];

export const expenseLines = [
  {
    label: 'Cost of revenue',
    desc: 'Direct costs of producing GPU and networking products, including wafer fabrication, assembly, test, and packaging costs, warranty, and inventory provisions.',
    values: [2.85, 3.89, 4.55, 4.15, 6.28, 9.44, 11.62, 16.62, 32.64, 62.48],
  },
  {
    label: 'Research and development',
    desc: 'Engineering salaries, stock-based compensation allocated to R&D, prototype costs, and tools for GPU architecture, software, and AI platform development.',
    values: [1.46, 1.8, 2.38, 2.83, 3.92, 5.27, 7.34, 8.68, 12.91, 18.5],
  },
  {
    label: 'Selling, general & administrative',
    desc: 'Sales, marketing, management, legal, finance, and other corporate costs including allocated stock-based compensation.',
    values: [0.66, 0.82, 0.99, 1.09, 1.94, 2.17, 2.44, 2.65, 3.49, 4.58],
  },
  {
    label: 'Other operating',
    desc: 'Non-recurring operating charges. FY23 includes a $1.35B charge for the terminated Arm Holdings acquisition.',
    values: [0, 0, 0, 0, 0, 0, 1.35, 0, 0, 0],
  },
  {
    label: 'Non-operating, net',
    desc: 'Interest expense on debt minus interest and investment income. Negative values represent net income from investments exceeding interest costs.',
    values: [0.12, 0.01, -0.1, -0.12, 0.12, 0.1, 0.04, -0.85, -2.57, -11.06],
  },
  {
    label: 'Income taxes',
    desc: 'Provision for income taxes. Negative values in FY19 and FY23 reflect tax benefits from the TCJA transition and deferred tax asset revaluations.',
    values: [0.15, 0.15, -0.25, 0.17, 0.08, 0.19, -0.19, 4.06, 11.15, 21.38],
  },
];

export const cashFlowStatementYears = [
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
    desc: 'Net change in cash: the sum of operating, investing, and financing activities.',
    values: [-10.049, 1.143, 1.399, 3.891, 1.309, 2.016, null],
  },
  {
    label: 'Operating activities',
    desc: 'Net cash provided by operating activities, starting from net income and adjusted for non-cash charges and working capital changes.',
    values: [5.822, 9.108, 5.641, 28.09, 64.089, 102.718, null],
  },
  {
    label: 'Funds from operations',
    desc: 'Net income plus non-cash adjustments (depreciation, amortization, stock-based compensation, deferred taxes, and gains/losses on investments) before working capital changes.',
    values: [6.525, 12.471, 7.848, 31.812, 73.472, 118.667, null],
    indent: 1,
  },
  {
    label: 'Changes in working capital',
    desc: 'Net cash effect of changes in operating assets and liabilities: accounts receivable, inventories, prepaid expenses, accounts payable, accrued liabilities, and other non-current liabilities.',
    values: [-0.703, -3.363, -2.207, -3.722, -9.383, -15.949, null],
    indent: 1,
  },
  {
    label: 'Investing activities',
    desc: 'Net cash used in investing activities, including acquisitions, capital expenditures, and investment purchases and sales.',
    values: [-19.675, -9.83, 7.375, -10.566, -20.421, -52.228, null],
  },
  {
    label: 'Purchase/Sale of business',
    desc: 'Net cash used for business acquisitions. FY21 includes the $8.5B Mellanox acquisition. FY26 includes a $13.0B acquisition.',
    values: [-8.524, -0.263, -0.049, -0.083, -1.007, -14.535, null],
    indent: 1,
  },
  {
    label: 'Purchase/Sale of investments',
    desc: 'Net purchases and sales of marketable debt and equity securities, including available-for-sale debt securities and equity investments at fair value.',
    values: [-9.989, -8.567, 9.257, -9.29, -16.2, -31.651, null],
    indent: 1,
  },
  {
    label: 'Capital expenditures',
    desc: 'Cash paid for property, equipment, and other productive assets including data center infrastructure.',
    values: [-1.128, -0.976, -1.833, -1.069, -3.236, -6.042, null],
    indent: 1,
  },
  {
    label: 'Other investing cash flow items',
    desc: 'Other investing activities not classified above.',
    values: [-0.034, -0.024, 0.0, -0.124, 0.022, 0.0, null],
    indent: 1,
  },
  {
    label: 'Financing activities',
    desc: 'Net cash used in financing activities, including share repurchases, dividends, and debt issuance and repayment.',
    values: [3.804, 1.865, -11.617, -13.633, -42.359, -48.474, null],
  },
  {
    label: 'Issuance/Retirement of stocks',
    desc: 'Net of share repurchases, tax withholding on RSU settlements, and proceeds from employee stock plans. FY25 and FY26 repurchases exceeded $33B and $40B respectively as NVIDIA returned AI-driven cash flows to shareholders.',
    values: [-0.942, -1.623, -11.159, -11.913, -40.146, -47.39, null],
    indent: 1,
  },
  {
    label: 'Issuance/Retirement of debt',
    desc: 'Net of long-term debt proceeds and repayments. FY21–FY22 reflect $5.0B note issuances; FY24–FY25 include $1.25B annual repayments.',
    values: [4.968, 3.977, 0.0, -1.25, -1.25, 0.0, null],
    indent: 1,
  },
  {
    label: 'Cash dividends paid',
    desc: 'Cash dividends paid to common shareholders.',
    values: [-0.395, -0.399, -0.398, -0.395, -0.834, -0.974, null],
    indent: 1,
  },
  {
    label: 'Other financing cash flow items',
    desc: 'Other financing activities including payments for debt issuance costs and other items.',
    values: [0.173, -0.09, -0.06, -0.075, -0.129, -0.11, null],
    indent: 1,
  },
  {
    label: 'Free cash flow',
    desc: 'Operating cash flow minus capital expenditures.',
    values: [4.694, 8.132, 3.808, 27.021, 60.853, 96.676, 194.11],
  },
];

export const offBalanceSheetCommitments = {
  asOf: 'July 26, 2026 (Q2 FY27 10-Q)',
  equityInvestmentsDueInFY27: 18.0,
  columns: ['Total', 'FY27', 'FY28–31', 'FY32+'],
  rows: [
    {
      label: 'Supply & capacity',
      desc: 'Commitments to suppliers, primarily for memory and manufacturing capacity for current and future architectures. The balance rose from $119B in the prior quarter to $279B.\nNVIDIA says some of these agreements can be cancelled, rescheduled, or adjusted before firm orders are placed, though changes may carry extra costs.',
      values: ['-$279.0B', '-$92.0B', '-$186.0B', '-$1.0B'],
    },
    {
      label: 'Cloud service agreements',
      desc: 'Cloud capacity NVIDIA rents for its own R&D, including its Nemotron, Cosmos, and GR00T open models and autonomous vehicle software.\nFY28–31 is the sum of $8B + $7B + $6B + $4B.',
      values: ['-$29.0B', '-$3.0B', '-$25.0B', '-$1.0B'],
    },
    {
      label: 'Leases not yet commenced',
      desc: 'Signed data center leases that NVIDIA will use for engineering, design, and testing, with terms of up to 20 years, expected to begin between Q3 FY27 and FY33.\nBecause the leases have not commenced, they are not yet recognized as lease liabilities.',
      values: ['-$25.0B', '—', '-$5.0B', '-$20.0B'],
    },
    {
      label: 'Equity investments',
      desc: 'Committed but unfunded investments in AI model makers, infrastructure financiers, and other private companies, subject to contingencies.\nInvestments already made sit on the balance sheet as $42.8B of marketable and $51.2B of non-marketable equity securities, and are not included here.',
      values: ['-$25.0B', '-$18.0B', '-$7.0B', '—'],
    },
    {
      label: 'Capital expenditures',
      desc: 'Obligations for data center equipment and infrastructure used in engineering and manufacturing.',
      values: ['-$8.0B', '-$7.0B', '-$1.0B', '—'],
    },
    {
      label: 'AI cloud agreements',
      desc: 'AI clouds buy NVIDIA systems and NVIDIA commits to rent capacity back, which the clouds can stop providing and sell to third parties at better rates. The commitment shrinks as third parties or NVIDIA use the capacity, and NVIDIA shares in third-party revenue if certain criteria are met.\nThe filing lists this outside its $366B commitments table, as an additional commitment.',
      values: ['-$36.0B', '—', '-$27.0B', '-$9.0B'],
    },
    {
      label: 'Third-party data center leases',
      desc: 'Leases of about 15 years that NVIDIA signed and expects to reassign to third parties, commencing between FY28 and FY29.\nThe filing lists this outside its $366B commitments table, as an additional commitment.',
      values: ['-$20.0B', '—', '-$3.0B', '-$17.0B'],
    },
    {
      label: 'SB Energy guarantees (OpenAI)',
      desc: 'Signed in August 2026, these guarantees cover defined portions of the lease and power payments owed by an OpenAI affiliate on about 4.25 GW of data center capacity at SB Energy’s PORTS campus in Pike County, Ohio. They pay out only on certain tenant defaults, and OpenAI has agreed to reimburse NVIDIA for anything it pays.\nExposure starts as each of nine construction phases is completed, beginning in FY29, and declines over each phase’s 20-year lease. The guarantees end early if OpenAI earns a satisfactory credit rating. NVIDIA also holds an option to back about 3.8 GW more.',
      values: ['≤-$105.0B', '—', '—', '—'],
    },
    {
      label: 'Land, power & shell guarantees',
      desc: 'Guarantees of select AI cloud partners’ data center lease payments if they default. Maximum exposure falls as partners pay down their leases over 5 to 7 years, and partners have placed $712M in escrow against it.',
      values: ['≤-$3.5B', '—', '—', '—'],
    },
    {
      label: 'Total',
      values: ['≤-$530.5B', '-$120.0B', '-$254.0B', '-$48.0B'],
    },
  ],
};

export const debtFundedDemand = {
  total: 56.7,
  columns: ['Debt', 'Date', 'Status', 'NVIDIA link'],
  rows: [
    {
      label: 'SpaceX / SpaceXAI',
      desc: 'About $10B of bank loans and $30B of investment-grade bonds to buy NVIDIA chips for SpaceXAI data centers, led by Apollo with Pimco in talks. The Financial Times and Bloomberg describe the talks as early-stage, with closing expected in 2027.\nSpaceX is rated Baa1 by Moody’s, BBB+ by Fitch, and BBB by S&P. NVIDIA holds 122.8M SpaceX shares, worth about $21B at the end of Q2 FY27, from its $10B xAI investment in January 2026.',
      values: ['$40.0B', 'Oct 2026', 'Proposed', '$21B equity stake'],
    },
    {
      label: 'Valor Compute Infrastructure (xAI)',
      desc: 'Apollo provided $3.5B toward Valor’s $5.4B purchase of NVIDIA GB200 systems, which the vehicle leases to xAI on a triple net basis.\nNVIDIA is an anchor limited partner in the vehicle, so part of this demand is funded with NVIDIA’s own money.',
      values: ['$3.5B', 'Jan 2026', 'Closed', 'Anchor LP'],
    },
    {
      label: 'xAI chip-leasing vehicle',
      desc: 'A $3.4B Apollo loan to a vehicle that buys NVIDIA chips and leases them to xAI, arranged by Valor Equity Partners.',
      values: ['$3.4B', 'Feb 2026', 'Reported', '—'],
    },
    {
      label: 'CoreWeave',
      desc: 'Two debt facilities led by Blackstone and Magnetar: $2.3B in August 2023, the first collateralized by NVIDIA H100s, and $7.5B in May 2024 to build out compute for signed contracts. CoreWeave has borrowed more since, so this row understates its total.\nNVIDIA owns about 11% of CoreWeave and has agreed to buy any CoreWeave capacity that goes unsold through April 2032, worth at least $6.3B.',
      values: ['$9.8B', '2023–24', 'Closed', '~11% stake'],
    },
    {
      label: 'Total',
      values: ['$56.7B', '', '$16.7B closed', ''],
    },
  ],
};

export const circularOutflowYears = [
  'FY21',
  'FY22',
  'FY23',
  'FY24',
  'FY25',
  'FY26',
  'FY27E',
];

export const circularOutflowLines = [
  {
    label: 'Equity stakes',
    desc: 'Cash paid for equity in other companies, such as AI model makers, AI clouds, and infrastructure financiers.\nFY21 and FY22 are “Investments and other, net”, the only line the filings give for those years. FY26 adds the $5.0B Intel stake to $17.5B of private equity purchases. FY27E is $42.4B of equity purchases in the first half plus the $18.0B of equity investments committed for the rest of the year.',
    values: [0.034, 0.024, 0.085, 0.862, 1.486, 22.502, 60.404],
  },
  {
    label: 'Acquisitions',
    desc: 'Cash paid to buy companies, net of the cash they held. FY21 is almost entirely Mellanox, whose revenue NVIDIA consolidates after the deal.\nFY27E is the first half only, because NVIDIA does not disclose acquisition commitments.',
    values: [8.524, 0.263, 0.049, 0.083, 1.007, 1.535, 0.298],
  },
  {
    label: 'Groq license',
    desc: 'Payments for the non-exclusive license agreement with Groq, Inc. FY26 was reported in investing activities, and the first-half FY27 payment was reported in financing activities.',
    values: [0, 0, 0, 0, 0, 13.0, 2.944],
  },
  {
    label: 'Third-party debt',
    desc: 'Debt that lenders provided to customers to buy NVIDIA hardware, placed in the fiscal year each deal closed or was signed. It counts GPU-backed loans and the corporate debt of AI clouds and AI labs, which is spent mostly on compute.\nData center construction debt (such as Stargate sites and Meta’s Hyperion) and hyperscaler bonds (such as Oracle’s) are excluded, because the tenant or issuer buys GPUs separately. Facility sizes are counted, not amounts drawn. FY27E covers deals through October 8, 2026, and excludes SpaceX’s proposed $40B financing.',
    values: [0, 0, 0, 2.3, 8.0, 21.44, 61.93],
  },
];

export const circularOutflowYearDetails: Record<string, string> = {
  FY21: 'Acquisitions are almost entirely Mellanox. Equity stakes are “Investments and other, net”, because the filing does not report equity purchases separately.',
  FY22: 'Equity stakes are “Investments and other, net”, because the filing does not report equity purchases separately.',
  FY23: 'Equity stakes are purchases of non-marketable equity securities.',
  FY24: 'Equity stakes are purchases of non-marketable equity securities. Third-party debt is CoreWeave’s $2.3B facility from August 2023, the first collateralized by NVIDIA H100s.',
  FY25: 'Equity stakes are purchases of non-marketable equity securities. Third-party debt is CoreWeave’s $7.5B facility from May 2024 and Lambda’s $0.5B GPU-backed loan from April 2024.',
  FY26: 'Equity stakes are $17.50B of non-marketable equity purchases plus the $5.00B Intel stake. Other public equity bought this year is mixed with debt securities in the filing and is not counted. Third-party debt is $6.6B of GPU-backed loans (Valor Compute Infrastructure for xAI $3.5B, CoreWeave $2.6B, Lambda $0.3B, Crusoe $0.2B) plus $14.8B of AI cloud and AI lab corporate debt (CoreWeave notes and convertibles $6.3B, xAI $5.0B, Nebius $2.75B, Crusoe $0.75B).',
  FY27E:
    'Equity stakes are $42.40B paid in the first half plus $18.00B committed for the rest of the year. Acquisitions and the Groq payment cover the first half only. Third-party debt runs through October 8, 2026: $42.2B of GPU-backed loans (CoreWeave $14.2B, Firmus $10.0B, Nscale $4.45B, IREN $3.6B, xAI vehicle $3.4B, Zankore $3.1B, Lambda $2.7B, Nebius $0.8B) plus $19.7B of AI cloud corporate debt (CoreWeave $9.95B, Nebius $9.75B). SpaceX’s proposed $40B financing is not counted.',
};

const financials: SoftwareFinancials = {
  guidanceYears: ['FY27E'],
  estimateNote:
    'FY27E values use consensus analyst estimates from stockanalysis.com (53 analysts as of September 2026). Revenue, EPS, and FCF are consensus figures. Operating income is the consensus of 54 analysts as of October 2026. P/E and P/FCF recalculate from the adjusted price.',
  criticalMetrics: [
    {
      label: 'P/E ratio',
      desc: 'Price at fiscal year-end divided by GAAP diluted EPS.',
      values: [
        42.0, 50.2, 21.5, 52.0, 74.8, 62.6, 114.6, 51.6, 40.8, 39.0, 24.2,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 50.9,
      guidanceCount: 1,
      yearNotes: {
        FY23: 'Elevated due to ARM acquisition termination charge and gaming downturn compressing EPS.',
        FY27E:
          'Calculated from $225.51 divided by consensus diluted EPS of $9.31.',
      },
    },
    {
      label: 'P/FCF ratio',
      desc: 'Price at fiscal year-end divided by free cash flow per share.',
      values: [
        42.8, 49.8, 27.0, 31.3, 65.5, 71.6, 122.1, 53.4, 47.6, 47.8, 28.1,
      ],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 49.8,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Calculated from $225.51 divided by consensus FCF per share of $8.03 (FCF $194.1B / ~24.15B shares).',
      },
    },
    {
      label: 'PEG ratio',
      desc: 'Forward P/E divided by the trailing EPS growth rate.',
      values: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        0.16,
        0.34,
        0.58,
        0.27,
      ],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.31,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Calculated from the forward P/E of 24.2 divided by the FY26-to-FY27 EPS growth rate of 90.0%.',
      },
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [
        0.064, 0.12, 0.17, 0.11, 0.17, 0.39, 0.17, 1.19, 2.94, 4.9, 9.31,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.17,
      guidanceCount: 1,
      yearNotes: {
        FY27E: 'Consensus analyst estimate (53 analysts, stockanalysis.com).',
      },
    },
    {
      label: 'Free cash flow per share',
      values: [
        0.063, 0.12, 0.13, 0.18, 0.19, 0.32, 0.15, 1.08, 2.5, 3.98, 8.03,
      ],
      format: { prefix: '$', decimals: 2 },
      median10y: 0.19,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $194.1B divided by ~24.15B diluted shares.',
      },
    },
    {
      label: 'ROE %',
      values: [28.9, 40.8, 44.3, 22.9, 25.7, 36.7, 19.8, 69.2, 91.9, 76.3],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 37.5,
    },
    {
      label: 'ROIC %',
      values: [22.6, 27.1, 31.1, 16.2, 15.1, 22.1, 10.6, 45.3, 65.3, 58.1],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 22.4,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.31, 0.22, 0.18, 0.14, 0.18, 0.44, 0.54, 0.26, 0.13, 0.07],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.22,
    },
    {
      label: 'Net margin %',
      values: [
        24.1, 31.4, 35.3, 25.6, 26.0, 36.2, 16.2, 48.9, 55.8, 55.6, 59.1,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 30.8,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus net income of $242.9B and consensus revenue of $411.6B.',
      },
    },
    {
      label: 'Free cash flow margin %',
      values: [
        21.7, 30.0, 26.8, 39.2, 28.1, 30.2, 14.1, 44.4, 46.6, 44.8, 47.2,
      ],
      format: { suffix: '%', decimals: 1 },
      deltaMode: 'add',
      median10y: 30.0,
      guidanceCount: 1,
      yearNotes: {
        FY27E:
          'Derived from consensus FCF of $194.1B and consensus revenue of $411.6B.',
      },
    },
    {
      label: 'Days sales outstanding',
      desc: 'Accounts receivable divided by revenue, multiplied by 365. Measures how many days of revenue are tied up in uncollected receivables.',
      values: [43.6, 47.6, 44.3, 55.4, 53.2, 63.1, 51.8, 59.9, 64.5, 65.0],
      format: { suffix: ' days', decimals: 1 },
      invertColor: true,
      deltaMode: 'add',
      median10y: 54.3,
    },
    {
      label: 'Cash earnings quality',
      desc: 'Operating cash flow divided by net income. Values above 1.0 indicate earnings are well-supported by cash generation; below 1.0 suggests accrual earnings exceed cash collected.',
      values: [1.0, 1.15, 0.9, 1.7, 1.34, 0.93, 1.29, 0.94, 0.88, 0.86],
      format: { decimals: 2 },
      median10y: 0.97,
    },
  ],
  revenueSection: {
    revenueDesc: 'Consolidated revenue from all market platforms.',
    operatingIncomeDesc:
      'Income from operations before interest and taxes. FY23 includes a $1.35B Arm acquisition termination charge.',
    netIncomeDesc:
      'GAAP net income. FY19 includes a tax benefit; FY23 depressed by Arm termination charge but partially offset by a tax benefit.',
    chartNote:
      'Revenue more than doubled in each of FY24 and FY25 as AI accelerator demand surged. FY23 operating income was depressed by the $1.35B Arm deal termination charge and a gaming revenue downturn. FY27E is consensus analyst estimate.',
  },
  revenue: [
    { year: 'FY17', revenue: 6.91, operatingIncome: 1.93, netIncome: 1.67 },
    { year: 'FY18', revenue: 9.71, operatingIncome: 3.21, netIncome: 3.04 },
    { year: 'FY19', revenue: 11.72, operatingIncome: 3.8, netIncome: 4.15 },
    { year: 'FY20', revenue: 10.92, operatingIncome: 2.85, netIncome: 2.8 },
    { year: 'FY21', revenue: 16.68, operatingIncome: 4.53, netIncome: 4.34 },
    { year: 'FY22', revenue: 26.91, operatingIncome: 10.04, netIncome: 9.74 },
    { year: 'FY23', revenue: 26.97, operatingIncome: 4.22, netIncome: 4.37 },
    { year: 'FY24', revenue: 60.92, operatingIncome: 32.97, netIncome: 29.76 },
    { year: 'FY25', revenue: 130.5, operatingIncome: 81.45, netIncome: 72.88 },
    {
      year: 'FY26',
      revenue: 215.94,
      operatingIncome: 130.39,
      netIncome: 120.06,
    },
    {
      year: 'FY27E',
      revenue: 411.56,
      operatingIncome: 268.86,
      netIncome: 242.9,
    },
  ],
  thesis: [
    'NVIDIA dominates the AI accelerator market with a vertically integrated platform spanning hardware (GPUs, networking) and software (CUDA, cuDNN, TensorRT), creating an ecosystem moat that locks in developers and enterprise customers.',
    'Data Center revenue has compounded at over 100% annually since FY24 as hyperscale cloud providers and enterprises invest in AI training and inference infrastructure, with each new GPU architecture sustaining pricing power.',
    'Free cash flow conversion is exceptional for a hardware company, consistently above 40% of revenue since FY24, because NVIDIA designs chips and outsources fabrication to TSMC, keeping capital expenditures below 3% of revenue.',
  ],
};

export default financials;
