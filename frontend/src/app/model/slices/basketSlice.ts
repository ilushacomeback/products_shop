import { createSlice, current } from '@reduxjs/toolkit';
import { RootState } from '@/app/model/store/index';
import { basketApi } from '@/shared/api/basket';
import { normalizeData } from '../helpers/normalizeData';
import { getBasketOfCookie } from '@/entities/basket/model/getBasketOfCookie';
import { syncBaskets } from '../helpers/syncBaskets';

interface Basket {
  basket: Record<string, number>;
}

const initialState: Basket = {
  basket: {},
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    addProductInBasket: (state, { payload }) => {
      state.basket[payload] = state.basket[payload]
        ? state.basket[payload] + 1
        : 1;
    },
    addProductsInBasket: (state, { payload }) => {
      console.log('add', payload);
      const basket =
        typeof payload === 'string' ? JSON.parse(payload) : payload;
      state.basket = basket;
    },
    removeProductInBasket: (state, { payload }) => {
      state.basket[payload] = state.basket[payload] - 1;
      if (state.basket[payload] < 1) {
        delete state.basket[payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        basketApi.endpoints.getBasketDB.matchFulfilled,
        (state, { payload }) => {
          if (payload) {
            const data = normalizeData(payload);
            console.log('ответ из бд после взятия корзины', data);
            state.basket = data;
          }
        }
      )
      .addMatcher(
        basketApi.endpoints.addProductsInBasket.matchFulfilled,
        (state, { payload }) => {
          const data = normalizeData(payload);
          console.log('ответ из бд после добавления', data);
          state.basket = data;
          document.cookie = 'basket=;max-age=0';
          console.log('clear cookie')
        }
      );
  },
});

export const basketSelectors = {
  selectProducts: (state: RootState) => state.basketState.basket,
};

export const basketReducer = basketSlice.reducer;
export const { actions } = basketSlice;
