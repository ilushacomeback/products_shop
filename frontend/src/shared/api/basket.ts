import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';
import { RootState } from '../../app/model/store';

interface Basket {
  basket: Record<string, number>;
}

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.baseUrl(),
  }),
  keepUnusedDataFor: 0,
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
        if (!accessToken) {
          throw new Error('Unauthoraized');
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
    }),
    addProductsInBasket: builder.mutation({
      queryFn: async (basket, api, extraOptions, baseQuery) => {
        console.log('resBasket', basket);
        const store = api.getState() as RootState;
        const { accessToken } = store.authState;
        const { id } = store.authState;
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
    }),
  }),
});

export const {
  useGetProductsQuery: useGetProductsForBasket,
  useGetBasketDBQuery: useGetBasketOfDB,
  useAddProductsInBasketMutation: useAddProductsInDB,
} = basketApi;
