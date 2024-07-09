import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '@/shared/api/products';
import { RootState } from '@/shared/model/store/index'
import { Product } from '@/shared/interfaces';

interface InitialState {
  products: Product[];
  page: number;
  totalPages: number;
  category: string;
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

const initialState: InitialState = {
  products: [],
  page: 1,
  totalPages: 1,
  category: '',
};

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
      if (payload === state.category) return;
      state.products = [];
      state.page = 1;
      state.category = payload === 'all' ? '' : payload;
    },
    resetProducts: (state) => {
      state.products = []
    }
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
  selectCurrentCategory: (state: RootState) => state.products.category,
};
export const productsReducer = productsSlice.reducer;
export const { actions } = productsSlice;
