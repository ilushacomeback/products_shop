import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../api/products';
import { RootState } from '../store';
import { Product } from '@/shared/interfaces';

interface InitialState {
  products: Product[];
  page: number;
  totalPages: number;
}

interface Response {
  items: Product[];
  meta: {
    current_page: number;
    per_page: number;
    remaining_count: number;
    total_items: number;
    total_pages: number;
  };
}

const initialState: InitialState = { products: [], page: 1, totalPages: 1 };

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    setPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    getCategory: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => payload === product.category
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        const { items, meta } = payload as Response;
        state.products.push(...items);
        state.totalPages = meta.total_pages;
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
