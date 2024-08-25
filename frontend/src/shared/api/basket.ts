import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';
import { RootState } from '../../app/model/store';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.baseUrl(),
  }),
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getBasket: builder.query({
      query: (ids) => {
        const params = ids.map((id: number) => `id[]=${id}`).join('&');
        return `${apiRoutes.products()}?${params}`;
      },
    }),
    getUserData: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        try {
          const store = api.getState() as RootState;
          const token = store.auth.accessToken;
          const id = store.auth.id;
          if (!token) return new Promise((resolve, reject) => reject('not token'))
          const data = await baseQuery({
            url: `/users/${id}`,
            headers: { Authorization: `Bearer ${token}` },
          });
          if (data.error) {
            throw new Error('Server Error');
          }
          return new Promise((resolve, reject) => resolve(data));
        } catch (error) {
          return new Promise((resolve, reject) => reject(error));
        }
      },
    }),
    addProductInBasket: builder.mutation({
      queryFn: async (basket, api, extraOptions, baseQuery) => {
        try {
          const store = api.getState() as RootState;
          const token = store.auth.accessToken;
          const id = store.auth.id;
          const data = await baseQuery({
            url: `/users/${id}`,
            method: 'PATCH',
            body: { basket },
            headers: { Authorization: `Bearer ${token}` },
          });
          if (data.error) {
            throw new Error('Server Error');
          }
          return new Promise((resolve, reject) => resolve(data));
        } catch (error) {
          return new Promise((resolve, reject) => reject(error));
        }
      },
    }),
  }),
});

export const {
  useGetBasketQuery,
  useGetUserDataQuery,
  useAddProductInBasketMutation,
} = basketApi;
