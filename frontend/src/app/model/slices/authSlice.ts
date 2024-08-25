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
      state.accessToken = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.accessToken = payload.accessToken;
          state.id = payload.user.id;
          state.username = payload.user.username;
        }
      )
      .addMatcher(
        authApi.endpoints.signup.matchFulfilled,
        (state, { payload }) => {
          state.accessToken = payload.accessToken;
          state.id = payload.user.id;
          state.username = payload.user.username;
        }
      );
  },
});

export const authSelectors = {
  selectToken: (state: RootState) => state.auth.accessToken,
  selectId: (state: RootState) => state.auth.id,
};
export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
