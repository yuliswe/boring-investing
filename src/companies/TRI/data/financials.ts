import type { SoftwareFinancials } from '@/templates/SoftwareTemplate';

const financials: SoftwareFinancials = {
  criticalMetrics: [
    {
      label: 'P/E ratio',
      values: [19.5, 6.4, 20.6, 35.4, 10.2, 41.1, 24.8, 32.7, 39.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 24.8,
    },
    {
      label: 'P/FCF ratio',
      values: [14.6, 15.5, null, 29.5, 44.7, 41.5, 37.5, 39.1, 29.4],
      format: { decimals: 1 },
      invertColor: true,
      median10y: 33.5,
    },
  ],
  keyMetrics: [
    {
      label: 'Diluted EPS',
      values: [2.26, 7.39, 3.3, 2.37, 12.06, 3.05, 5.94, 4.89, 3.33],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.33,
    },
    {
      label: 'Free cash flow per share',
      values: [3.02, 3.03, 0.41, 2.85, 2.73, 2.87, 3.97, 4.17, 4.53],
      format: { prefix: '$', decimals: 2 },
      median10y: 3.02,
    },
    {
      label: 'ROE %',
      values: [8.7, 24.6, 11.8, 9.7, 47.76, 10.82, 23.06, 19.0, 12.4],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 12.4,
    },
    {
      label: 'ROIC %',
      values: [6.0, 15.0, 7.0, 6.0, 7.66, 9.19, 11.52, 14.34, 11.29],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 9.19,
    },
    {
      label: 'Debt to equity ratio',
      values: [0.55, 0.35, 0.28, 0.27, 0.29, 0.42, 0.32, 0.26, 0.2],
      format: { decimals: 2 },
      invertColor: true,
      median10y: 0.29,
    },
    {
      label: 'Sustainable growth rate %',
      values: [3.5, 20.0, 6.8, 3.6, 41.3, 4.0, 15.4, 10.8, 3.8],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 6.8,
    },
    {
      label: 'Net margin %',
      values: [21.3, 67.2, 27.9, 19.5, 89.6, 20.2, 39.6, 30.4, 20.1],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 27.9,
    },
    {
      label: 'Free cash flow margin %',
      values: [28.5, 27.5, 3.5, 23.5, 20.3, 19.9, 26.4, 25.5, 27.0],
      format: { suffix: '%', decimals: 2 },
      deltaMode: 'add',
      median10y: 25.5,
    },
  ],
  revenue: [
    { year: 'FY17', revenue: 5.3, operatingIncome: 1.03 },
    { year: 'FY18', revenue: 5.5, operatingIncome: 0.78 },
    { year: 'FY19', revenue: 5.91, operatingIncome: 1.2 },
    { year: 'FY20', revenue: 5.98, operatingIncome: 1.93 },
    { year: 'FY21', revenue: 6.35, operatingIncome: 1.24 },
    { year: 'FY22', revenue: 6.63, operatingIncome: 1.83 },
    { year: 'FY23', revenue: 6.79, operatingIncome: 2.33 },
    { year: 'FY24', revenue: 7.26, operatingIncome: 2.11 },
    { year: 'FY25', revenue: 7.48, operatingIncome: 2.13 },
  ],
  cashFlow: [
    {
      year: 'FY17',
      cashTaxesPaid: null,
      workingCapitalChange: null,
      capitalExpenditures: null,
    },
    {
      year: 'FY18',
      cashTaxesPaid: null,
      workingCapitalChange: null,
      capitalExpenditures: null,
    },
    {
      year: 'FY19',
      cashTaxesPaid: null,
      workingCapitalChange: null,
      capitalExpenditures: null,
    },
    {
      year: 'FY20',
      cashTaxesPaid: null,
      workingCapitalChange: null,
      capitalExpenditures: null,
    },
    {
      year: 'FY21',
      cashTaxesPaid: 1.916,
      workingCapitalChange: null,
      capitalExpenditures: 0.487,
    },
    {
      year: 'FY22',
      cashTaxesPaid: 0.2,
      workingCapitalChange: null,
      capitalExpenditures: 0.595,
    },
    {
      year: 'FY23',
      cashTaxesPaid: 0.868,
      workingCapitalChange: null,
      capitalExpenditures: 0.544,
    },
    {
      year: 'FY24',
      cashTaxesPaid: 0.551,
      workingCapitalChange: null,
      capitalExpenditures: 0.607,
    },
    {
      year: 'FY25',
      cashTaxesPaid: 0.337,
      workingCapitalChange: null,
      capitalExpenditures: 0.634,
    },
  ],
  thesis: [
    'AI-powered products like CoCounsel and ONESOURCE expand wallet share with professional customers, embedding Thomson Reuters deeper into legal, tax, and compliance workflows.',
    'More than eighty percent of revenue is recurring, and the subscription model delivers resilient cash flows that are largely insensitive to economic cycles.',
    'Disciplined capital allocation channels free cash flow into a growing dividend, steady buybacks, and targeted bolt-on acquisitions that compound returns over time.',
  ],
};

export default financials;
