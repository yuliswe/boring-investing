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
    symbol: 'BRK',
    name: 'Berkshire Hathaway Inc.',
    sector: 'Conglomerate',
    summary:
      'Diversified holding company with insurance (GEICO, General Re), railroad (BNSF), energy (BH Energy), and manufacturing/service/retailing operations, alongside a concentrated public equity portfolio, managed with a focus on long-term book value compounding and disciplined capital allocation.',
    template: 'software',
  },
  {
    symbol: 'AXP',
    name: 'American Express Company',
    sector: 'Financial Services',
    summary:
      'Closed-loop payment network that issues charge and credit cards directly to consumers and businesses, earning revenue from merchant discount fees, card member fees, interest on card member loans, and travel and lifestyle services.',
    template: 'software',
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    sector: 'Semiconductors',
    summary:
      'Fabless designer of CPUs, GPUs, and adaptive chips competing with Intel in x86 processors and with NVIDIA in AI accelerators, with a data center business that has grown to nearly half of revenue.',
    template: 'software',
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    sector: 'Technology',
    summary:
      'Global technology company operating the largest e-commerce marketplace and the leading cloud infrastructure platform (AWS), with expanding advertising, streaming, and AI businesses.',
    template: 'software',
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Inc.',
    sector: 'Software',
    summary:
      'Creative and document software leader with subscription-based cloud offerings.',
    template: 'software',
  },
  {
    symbol: 'ATZ',
    name: 'Aritzia Inc.',
    sector: 'Retail',
    summary:
      'Canadian design house selling its own exclusive women’s fashion brands through company-owned boutiques and digital, with the United States now its largest and fastest-growing market.',
    template: 'retail',
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
    symbol: 'GRGD',
    name: 'Groupe Dynamite Inc.',
    sector: 'Retail',
    summary:
      'Montreal-based retailer of its own Garage and Dynamite women’s apparel brands through company-owned stores and online, with nearly all new stores opening in the United States, now more than half of revenue.',
    template: 'retail',
  },
  {
    symbol: 'MCD',
    name: "McDonald's Corporation",
    sector: 'Restaurants',
    summary:
      'Global quick-service restaurant franchisor with 95% franchised restaurants, durable royalty-like revenue, and decades of dividend growth.',
    template: 'retail',
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Pharmaceuticals & Medical Devices',
    summary:
      'Healthcare company selling prescription medicines (Innovative Medicine) and medical devices (MedTech), with steady free cash flow, a dividend raised every year, and earnings that swing with talc litigation accruals.',
    template: 'software',
  },
  {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Beverages',
    summary:
      'Owner of Coca-Cola and many other drink brands that mostly sells concentrate to independent bottlers, earning high margins on little capital and paying a dividend raised every year, with recent free cash flow cut by a one-time IRS deposit and the final fairlife payment.',
    template: 'software',
  },
  {
    symbol: 'LEN',
    name: 'Lennar Corporation',
    sector: 'Homebuilding',
    summary:
      'US homebuilder of single-family homes with mortgage, title and insurance businesses serving its buyers, valued here on price-to-tangible-book and full-cycle return on equity against D.R. Horton, PulteGroup and NVR.',
    template: 'software',
  },
  {
    symbol: 'LLY',
    name: 'Eli Lilly and Company',
    sector: 'Pharmaceuticals',
    summary:
      'Global pharmaceutical company anchored by tirzepatide (Mounjaro/Zepbound) with leading positions in diabetes, obesity, oncology, and immunology, reinvesting heavily in manufacturing capacity and pipeline acquisitions.',
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
    symbol: 'MA',
    name: 'Mastercard Incorporated',
    sector: 'Payment Networks',
    summary:
      'Global payment network connecting cardholders and merchants through issuing and acquiring banks, earning toll-like fees on electronic transactions without taking credit risk.',
    template: 'software',
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
    symbol: 'PEP',
    name: 'PepsiCo, Inc.',
    sector: 'Consumer Staples',
    summary:
      'Global food and beverage company with complementary snack and drink portfolios spanning Frito-Lay, Quaker, and Pepsi brands across six operating segments.',
    template: 'retail',
  },
  {
    symbol: 'PG',
    name: 'The Procter & Gamble Company',
    sector: 'Consumer Staples',
    summary:
      'Maker of everyday household and personal care brands such as Tide, Pampers, and Gillette across five segments, with operating margins of 22%–24% since FY20, a dividend raised for 70 consecutive years, and slowing sales growth.',
    template: 'software',
  },
  {
    symbol: 'MU',
    name: 'Micron Technology, Inc.',
    sector: 'Semiconductors',
    summary:
      'Integrated manufacturer of DRAM, NAND flash, and high-bandwidth memory for data centers, PCs, phones, and cars, with profits that swing with the memory price cycle.',
    template: 'software',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    sector: 'Semiconductors',
    summary:
      'Designer of GPUs and accelerated computing platforms dominating AI training and inference, with a vertically integrated hardware-software ecosystem and outsourced fabrication model.',
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
    symbol: 'SPGI',
    name: 'S&P Global Inc.',
    sector: 'Financial Data & Analytics',
    summary:
      'Provider of credit ratings, benchmarks, analytics, and data to the capital and commodity markets, with subscription-driven recurring revenue and regulatory moats.',
    template: 'software',
  },
  {
    symbol: 'TOI',
    name: 'Topicus.com Inc.',
    sector: 'Software',
    summary:
      'Majority-owned CSU subsidiary acquiring European vertical market software businesses with durable recurring revenue and disciplined capital allocation.',
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
