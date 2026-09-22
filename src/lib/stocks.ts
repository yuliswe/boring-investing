export type CompanyTemplate = 'software' | 'retail';

export type Stock = {
  symbol: string;
  name: string;
  sector: string;
  summary: string;
  template: CompanyTemplate;
};

export const STOCKS: Stock[] = [
  {
    symbol: 'ADBE',
    name: 'Adobe Inc.',
    sector: 'Software',
    summary:
      'Creative and document software leader with subscription-based cloud offerings.',
    template: 'software',
  },
  {
    symbol: 'CSU',
    name: 'Constellation Software Inc.',
    sector: 'Software',
    summary:
      'Serial acquirer of vertical market software businesses with durable recurring revenue and disciplined capital allocation.',
    template: 'software',
  },
  {
    symbol: 'GOOG',
    name: 'Alphabet Inc.',
    sector: 'Software',
    summary:
      'Advertising, cloud, and platform conglomerate anchored by search and YouTube.',
    template: 'software',
  },
  {
    symbol: 'LULU',
    name: 'Lululemon Athletica Inc.',
    sector: 'Retail',
    summary:
      'Technical athletic apparel retailer with premium brand positioning and a direct-to-consumer model.',
    template: 'retail',
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    sector: 'Software',
    summary:
      'Cloud, productivity, and platform franchises with durable recurring revenue.',
    template: 'software',
  },
  {
    symbol: 'NFLX',
    name: 'Netflix, Inc.',
    sector: 'Entertainment',
    summary:
      'Dominant global streaming platform with subscription and ad-supported tiers serving 300+ million members.',
    template: 'software',
  },
  {
    symbol: 'TRI',
    name: 'Thomson Reuters Corporation',
    sector: 'Information Services',
    summary:
      'AI-powered information services and workflow software for legal, tax, and compliance professionals, with high recurring revenue and disciplined capital allocation.',
    template: 'software',
  },
  {
    symbol: 'UBER',
    name: 'Uber Technologies, Inc.',
    sector: 'Technology',
    summary:
      'Global ride-hailing, delivery, and freight platform with expanding margins and network-effect moats.',
    template: 'software',
  },
];

export function getStock(symbol: string): Stock | undefined {
  return STOCKS.find(stock => stock.symbol === symbol);
}
