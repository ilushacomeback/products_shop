import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth';
import type { RootState } from '../store';
import { getInitialState } from '../helpers/getInitialState';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialState(),
  reducers: {
    logout: (state) => {
      state.id = null;
      state.token = null;
      state.fullName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          console.log('data: ', payload);
          state.token = payload.token;
        }
      )
      .addMatcher(
        authApi.endpoints.signup.matchFulfilled,
        (state, { payload }) => {
          console.log('data: ', payload);
          state.token = payload.token;
        }
      );
  },
});

export const authSelectors = {
  selectToken: (state: RootState) => state.auth.token,
};
export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
