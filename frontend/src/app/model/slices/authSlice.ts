import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '@/shared/api/auth';
import type { RootState } from '../store';
import { getAuthInitialState } from '../helpers/getInitialState';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: getAuthInitialState(),
  reducers: {
    logout: (state) => {
      state.id = null;
      state.token = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.id = payload.id;
          state.username = payload.username;
        }
      )
      .addMatcher(
        authApi.endpoints.signup.matchFulfilled,
        (state, { payload }) => {
          // state.token = payload.token;
          state.id = payload.id;
          state.username = payload.username;
        }
      );
  },
});

export const authSelectors = {
  selectToken: (state: RootState) => state.auth.token,
  selectId: (state: RootState) => state.auth.id,
};
export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
