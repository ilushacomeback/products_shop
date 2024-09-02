import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '@/shared/api/products';
import { searchApi } from '@/shared/api/search';
import { RootState } from '@/app/model/store/index';
import { Product } from '@/shared/interfaces';

interface InitialState {
  products: Product[];
  page: number;
  totalPages: number;
  category: string;
  isLazy: boolean;
}

interface Response {
  data: Product[];
  meta: {
    curPage: number;
    totalPages: number;
  };
}

const initialState: InitialState = {
  products: [],
  page: 1,
  totalPages: 1,
  category: '',
  isLazy: true,
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    setPage: (state) => {
      if (state.page < 5) {
        state.page += 1;
      }
    },
    getCategory: (state, { payload }) => {
      if (payload === state.category) return;
      state.isLazy = true;
      state.products = [];
      state.page = 1;
      state.category = payload === 'all' ? '' : payload;
    },
    resetProducts: (state) => {
      state.products = [];
      state.page = 1;
      state.category = '';
      state.isLazy = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productsApi.endpoints.getProducts.matchFulfilled,
        (state, { payload }) => {
          const { data, meta } = payload as Response;
          if (!state.isLazy) return;
          state.products.push(...data);
          state.totalPages = meta.totalPages;
        }
      )
      .addMatcher(
        searchApi.endpoints.searchProducts.matchFulfilled,
        (state, { payload }) => {
          state.products = payload;
          state.page = 1;
          state.category = '';
          state.isLazy = false;
        }
      );
  },
});

export const productsSelectors = {
  selectProducts: (state: RootState) => state.productsState.products,
  selectCurrentPage: (state: RootState) => state.productsState.page,
  selectCurrentCategory: (state: RootState) => state.productsState.category,
  selectLazy: (state: RootState) => state.productsState.isLazy,
};
export const productsReducer = productsSlice.reducer;
export const { actions } = productsSlice;
