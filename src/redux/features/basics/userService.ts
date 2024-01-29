import { RootState } from './../../store/index';
import { cfg } from '@/config/site.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cfg.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
