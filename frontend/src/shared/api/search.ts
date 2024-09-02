import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.search(),
  }),
  endpoints: (builder) => ({
    searchProducts: builder.mutation({
      query: (data) => {
        return {
          method: 'POST',
          body: data,
          url: '',
        }
      },
    }),
  }),
});

export const { useSearchProductsMutation: useSearchProducts } = searchApi;
