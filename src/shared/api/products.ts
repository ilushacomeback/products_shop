import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoutes.baseUrl}/${apiRoutes.products}`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '',
    }),
    getProduct: builder.query({
      query: (id) => `/${id}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: ''
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productsApi;
