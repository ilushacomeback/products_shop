import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/model/store/index';
import { basketApi } from '@/shared/api/basket';
import { getBasketInitialState } from '../helpers/getBasketInitialState';

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
      const basket = typeof payload === 'string' ? JSON.parse(payload) : payload;
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
        basketApi.endpoints.getUserData.matchFulfilled,
        (state, { payload }) => {
          console.log(payload)
          if (payload.data) {
            state.basket = payload.data;
          }
        }
      )
      .addMatcher(
        basketApi.endpoints.addProductInBasket.matchFulfilled,
        (state, { payload }) => {
          state.basket = payload.data;
        }
      );
  },
});

export const basketSelectors = {
  selectProducts: (state: RootState) => state.basket.basket,
};

export const basketReducer = basketSlice.reducer;
export const { actions } = basketSlice;
