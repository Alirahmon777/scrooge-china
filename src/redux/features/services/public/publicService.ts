import { RootState } from '@/redux/store/index';
import { cfg } from '@/config/site.config';
import { TStoredUser } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecomVideoRes, IRequisitesRes, ISocialRes } from '@/admin/types/interfaces';
import { ICurrencyRes, IReview } from '@/types/interfaces';

export const publicService = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cfg.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const storedUser = localStorage.getItem('user');
      const userLocal: TStoredUser = storedUser ? JSON.parse(storedUser) : null;
      const token = (getState() as RootState).auth.token || (userLocal ? userLocal.token : null);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRequisites: builder.query<IRequisitesRes[], void>({
      query: () => '/requisites',
    }),
    getSocials: builder.query<ISocialRes[], void>({
      query: () => '/socials',
    }),
    getRecomendationVideos: builder.query<IRecomVideoRes[], void>({
      query: () => '/review/video',
    }),
    getCurrency: builder.query<ICurrencyRes[], void>({
      query: () => '/currency',
    }),
    getReviews: builder.query<IReview[], void>({
      query: () => '/review',
    }),
    getRating: builder.query({
      query: () => '/user/top',
    }),
    getCurrencyId: builder.query<ICurrencyRes, number>({
      query: (id) => `/currency/${id}`,
    }),
  }),
});

export const {
  useGetRatingQuery,
  useGetRequisitesQuery,
  useGetCurrencyQuery,
  useGetCurrencyIdQuery,
  useLazyGetCurrencyIdQuery,
  useGetSocialsQuery,
  useGetReviewsQuery,
  useLazyGetReviewsQuery,
  useGetRecomendationVideosQuery,
  usePrefetch,
} = publicService;
