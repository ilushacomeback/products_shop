import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';
import { RootState } from '../model/store';

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
    getUserData: builder.query({
      queryFn: async (id, api, extraOptions, baseQuery) => {
        try {
          const store = api.getState() as RootState;
          const token = store.auth.token;
          const data = await baseQuery({
            url: `/users/${id}`,
            headers: { Authorization: `Bearer ${token}` },
          });
          if (data.error) {
            throw new Error("Server Error");
          }
          return new Promise((resolve, reject) => resolve(data));
        } catch (error) {
          return new Promise((resolve, reject) =>
            reject(error)
          );
        }
      },
    }),
  }),
});

export const { useGetBasketQuery, useGetUserDataQuery } = basketApi;
