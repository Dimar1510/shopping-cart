import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://fake-coffee-api.vercel.app`,
});

export const api = createApi({
  reducerPath: "api/products",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: (limit) => ({
        url: `/api?limit=${limit}`,
        method: "GET",
      }),
    }),

    getProduct: builder.query<IProduct, void>({
      query: (id) => ({
        url: `/api/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  endpoints: { getAllProducts },
} = api;
export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
  usePrefetch,
} = api;
