import { HomePageClient } from "@/components/landing/home-page-client";
import { parseCompanyName } from "@/lib/company-name";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ name?: string | string[] }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const rawName = Array.isArray(params.name) ? params.name[0] : params.name;
  const initialCompanyName = parseCompanyName(rawName);

  return (
    <Suspense fallback={<HomePageClient initialCompanyName={initialCompanyName} />}>
      <HomePageClient initialCompanyName={initialCompanyName} />
    </Suspense>
  );
}
