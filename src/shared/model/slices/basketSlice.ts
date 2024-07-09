import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/shared/model/store/index'
import { basketApi } from '@/shared/api/basket';

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
      state.basket = payload;
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
          if (payload.basket) {
            state.basket = payload.basket;
          }
        }
      )
      .addMatcher(
        basketApi.endpoints.addProductInBasket.matchFulfilled,
        (state, { payload }) => {
          state.basket = payload.basket;
        }
      );
  },
});

export const basketSelectors = {
  selectProducts: (state: RootState) => state.basket.basket,
};

export const basketReducer = basketSlice.reducer;
export const { actions } = basketSlice;
