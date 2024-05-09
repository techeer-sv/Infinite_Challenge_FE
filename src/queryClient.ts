import { QueryCache, QueryClient } from "@tanstack/react-query";

export const getClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) console.error(query.meta.errorMessage);
    },
  }),
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24시간
      staleTime: 1000 * 60, // 1분
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
