import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '@/shared/api/products';
import { RootState } from '@/app/model/store/index';
import { Product } from '@/shared/interfaces';

interface InitialState {
  products: Product[];
  page: number;
  totalPages: number;
  category: string;
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
      state.products = [];
      state.page = 1;
      state.category = payload === 'all' ? '' : payload;
    },
    resetProducts: (state) => {
      state.products = [];
      state.page = 1;
      state.category = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        const { data, meta } = payload as Response;
        state.products.push(...data);
        state.totalPages = meta.totalPages;
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
