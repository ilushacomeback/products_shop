import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.baseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: apiRoutes.login,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: apiRoutes.signup,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi
