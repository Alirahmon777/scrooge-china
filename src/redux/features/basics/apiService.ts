import { cfg } from '@/config/site.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: cfg.BASE_URL }),
  endpoints: () => ({}),
});
