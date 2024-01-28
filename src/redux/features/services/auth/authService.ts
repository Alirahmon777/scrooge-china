import { ILoginData } from '@/admin/types/interfaces';
import { cfg } from '@/config/site.config';
import { ISteamSuccessParams } from '@/types/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: cfg.BASE_URL }),
  endpoints: (builder) => ({
    getAuthLink: builder.query<TAuthLink, void>({
      query: () => '/auth/user/link',
    }),
    getCallback: builder.query<TAdminLogin, ISteamSuccessParams>({
      query: (args) => {
        return { url: '/auth/user/callback', params: args };
      },
    }),
    loginAdmin: builder.mutation<TAdminLogin, ILoginData>({
      query: (initialPost: ILoginData) => ({
        url: '/auth/admin/login',
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
});

export const { useGetAuthLinkQuery, useLoginAdminMutation, useGetCallbackQuery } = authSlice;

export type TAuthLink = {
  link: string;
};

export type TAdminLogin = {
  token: string;
};
