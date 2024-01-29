import { TStoredAdmin } from '@/admin/types/types';
import { RootState } from './../../store/index';
import { cfg } from '@/config/site.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminBasicService = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cfg.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const storedAdmin = localStorage.getItem('admin');
      const adminLocal: TStoredAdmin = storedAdmin ? JSON.parse(storedAdmin) : null;
      const token = (getState() as RootState).auth.admin_token || adminLocal.admin_token;

      if (token) {
        headers.set('X-AM-Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
