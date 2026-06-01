export const DEFAULT_COMPANY_NAME = "Your Company";

/** Decode `?name=` (including %20 and + as spaces) with a safe fallback. */
export function parseCompanyName(raw: string | null | undefined): string {
  if (!raw?.trim()) return DEFAULT_COMPANY_NAME;

  try {
    return decodeURIComponent(raw.replace(/\+/g, " ")).trim();
  } catch {
    return raw.trim();
  }
}
