import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/index';

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
    removeProductInBasket: (state, { payload }) => {
      state.basket[payload] = state.basket[payload] - 1;
      if (state.basket[payload] < 1) {
        delete state.basket[payload];
      }
    },
  },
  extraReducers: () => {},
});

export const basketSelectors = {
  selectProducts: (state: RootState) => state.basket.basket,
};

export const basketReducer = basketSlice.reducer;
export const { actions } = basketSlice;
