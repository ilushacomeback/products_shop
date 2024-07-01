import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiRoutes } from '../routes/index';
import { AppStore, RootState  } from '../model/store';

const user: string = decodeURIComponent(document.cookie).split('user=')[1];

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiRoutes.baseUrl}/${apiRoutes.users}`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { token } = state.auth
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateInfoUser: builder.mutation({
      query: (data) => ({
        method: 'PATCH',
        body: data,
        url: `/${data.id}`,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useDeleteUserMutation, useUpdateInfoUserMutation } = userApi;
