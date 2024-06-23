import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth';
import { productsApi } from '../../api/products';
import {
  authReducer as auth,
  actions as authActions,
  authSelectors,
} from '../slices/authSlice';

export const actions = {
  ...authActions,
};

export const selectors = {
  authSelectors,
};

const reducer = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productsApi.middleware]),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
