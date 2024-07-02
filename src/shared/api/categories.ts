import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.categories(),
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '',
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: ''
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;