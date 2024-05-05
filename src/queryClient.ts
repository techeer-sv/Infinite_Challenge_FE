import { QueryCache, QueryClient } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

type AnyOBJ = {
  [key: string]: any;
};

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

const BASE_URL = "http://localhost:8000/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const restFetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${path}`;
    const axiosConfig: AxiosRequestConfig = {
      method,
    };
    if (body) axiosConfig.data = body;
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }
    const res = await api(url, axiosConfig);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const QueryKeys = {
  TEST: "TEST",
  RESULT: "RESULT",
  SEARCH: "SEARCH",
};
