import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.baseUrl(),
  }),
  endpoints: (builder) => ({
    getBasket: builder.query({
      query: (ids) => {
        const params = ids.map((id: number) => `id[]=${id}`).join('&');
        return `${apiRoutes.products()}?${params}`;
      },
    }),
  }),
});

export const { useGetBasketQuery } = basketApi;
