import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useSearchParamsHelper() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === '') {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      });

      return newSearchParams.toString();
    },
    [searchParams]
  );

  const updateSearchParams = useCallback(
    (params: Record<string, string | number | null>) => {
      const queryString = createQueryString(params);
      router.push(`${pathname}?${queryString}`, { scroll: false });
    },
    [pathname, router, createQueryString]
  );

  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams?.get(key) ?? null;
    },
    [searchParams]
  );

  return {
    searchParams,
    updateSearchParams,
    getParam,
  };
}
