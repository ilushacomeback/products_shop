import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';
import { RootState } from '../../app/model/store';
import { syncBaskets } from '@/app/model/helpers/syncBaskets';
import { getBasketOfCookie } from '@/entities/basket/model/getBasketOfCookie';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.baseUrl(),
  }),
  tagTypes: ['basket'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (ids) => {
        const params = ids.map((id: number) => `id[]=${id}`).join('&');
        return `${apiRoutes.basket()}?${params}`;
      },
    }),
    getBasketDB: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const store = api.getState() as RootState;
        const { accessToken } = store.authState;
        const { id } = store.authState;

        if (!accessToken || !id) {
          throw new Error('незареган');
        }

        const data = await baseQuery({
          url: `/basket/${id}`,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (data.error) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: "Coin landed on it's edge!",
            },
          };
        }
        return data;
      },
      providesTags: ['basket'],
    }),
    addProductsInBasket: builder.mutation({
      queryFn: async (basketDB, api, extraOptions, baseQuery) => {
        const basket = syncBaskets(basketDB, getBasketOfCookie());
        const store = api.getState() as RootState;
        const { accessToken } = store.authState;
        const { id } = store.authState;

        if (!accessToken || !id) {
          throw new Error('незареган');
        }

        const data = await baseQuery({
          url: `/basket/${id}`,
          method: 'PATCH',
          body: { basket },
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (data.error) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: "Coin landed on it's edge!",
            },
          };
        }
        return data;
      },
      invalidatesTags: ['basket'],
    }),
  }),
});

export const {
  useGetProductsQuery: useGetProductsForBasket,
  useGetBasketDBQuery: useGetBasketOfDB,
  useAddProductsInBasketMutation: useAddProductsInDB,
} = basketApi;
