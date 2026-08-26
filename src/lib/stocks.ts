export type CompanyTemplate = 'software';

export type Stock = {
  symbol: string;
  name: string;
  sector: string;
  summary: string;
  template: CompanyTemplate;
};

export const STOCKS: Stock[] = [
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    sector: 'Software',
    summary:
      'Cloud, productivity, and platform franchises with durable recurring revenue.',
    template: 'software',
  },
];

export function getStock(symbol: string): Stock | undefined {
  return STOCKS.find(stock => stock.symbol === symbol);
}
