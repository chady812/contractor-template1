"use client";

import { parseCompanyName } from "@/lib/company-name";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

/**
 * Reads `?name=` on the client. Falls back to `initialCompanyName` from the
 * server (needed for correct first paint on Vercel when the route is dynamic).
 */
export function useCompanyName(initialCompanyName?: string): string {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const raw = searchParams.get("name");
    if (raw?.trim()) return parseCompanyName(raw);
    if (initialCompanyName?.trim()) return initialCompanyName;
    return parseCompanyName(null);
  }, [searchParams, initialCompanyName]);
}
