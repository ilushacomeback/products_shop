import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.products(),
  }),
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, category = '' }) => {
        const result = [`?page=${page}`];
        if (category) {
          result.push(`category=${category}`);
        }
        return result.join('&');
      },
    }),
    getProduct: builder.query({
      query: (id) => `/${id}`,
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: '',
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productsApi;
