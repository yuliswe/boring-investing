import type { CompanyDataModules } from '@/lib/rawData';

// Every company has financials; segments exist only where the filings break
// revenue out, so a missing module is expected rather than an error.
export async function loadCompanyData(
  symbol: string
): Promise<CompanyDataModules> {
  const financials = await import(`@/companies/${symbol}/data/financials`);
  const segments = await import(`@/companies/${symbol}/data/segments`).catch(
    () => undefined
  );
  return {
    financials: { ...financials },
    segments: segments && { ...segments },
  };
}
