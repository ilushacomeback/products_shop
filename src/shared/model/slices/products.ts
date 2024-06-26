import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../api/products';
import type { RootState } from '../store';
import { Product } from '@/shared/interfaces';

interface InitialState {
  products: Product[];
  page: number;
}

const initialState: InitialState = { products: [], page: 1 };

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    setPage: (state) => {
      if (state.page < 5) {
        state.page += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        const { items }: { items: Product[] } = payload;
        state.products.push(...items);
      }
    );
  },
});

export const productsSelectors = {
  selectProducts: (state: RootState) => state.products.products,
  selectCurrentPage: (state: RootState) => state.products.page,
};
export const productsReducer = productsSlice.reducer;
export const { actions } = productsSlice;
