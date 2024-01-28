import { cfg } from '@/config/site.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: cfg.BASE_URL }),
  endpoints: (builder) => ({
    getAuthLink: builder.query<IAuthLink, void>({
      query: () => '/auth/user/link',
    }),
    getAuthCallback: builder.query<IAuthLink, void>({
      query: () => '/auth/user/callback',
    }),
  }),
});

export const { useGetAuthLinkQuery, useGetAuthCallbackQuery } = authSlice;

export interface IAuthLink {
  link: string;
}
