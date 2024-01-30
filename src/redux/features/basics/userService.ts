import { RootState } from './../../store/index';
import { cfg } from '@/config/site.config';
import { TStoredUser } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userService = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cfg.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const storedUser = localStorage.getItem('admin');
      const userLocal: TStoredUser = storedUser ? JSON.parse(storedUser) : null;
      const token = (getState() as RootState).auth.token || userLocal.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
