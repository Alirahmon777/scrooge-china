import { RootState } from '@/redux/store/index';
import { cfg } from '@/config/site.config';
import { TStoredUser } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecomVideoRes, IRequisitesRes, ISocialRes } from '@/admin/types/interfaces';
import { ICurrencyRes, IPaginationReq, IReview, IRewiewCount } from '@/types/interfaces';

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
    getReviews: builder.query<IReview[], IPaginationReq>({
      query: ({ limit, offset }) => `/review?limit=${limit}&offset=${offset}`,
    }),
    getReviewsFiveStars: builder.query<IReview[], void>({
      query: () => `/review/five-stars`,
    }),
    getReviewsCount: builder.query<IRewiewCount, void>({
      query: () => `/review/count`,
    }),
    getRating: builder.query({
      query: () => '/user/top',
    }),
    getCurrencyId: builder.query<ICurrencyRes, string>({
      query: (id) => `/currency/${id}`,
    }),
    getAvatarUrl: builder.query<string, string>({
      query: (id) => `/user/avatar/${id}`,
      transformResponse: (response: string) => {
        console.log('res', response);

        return response;
      },
    }),
    getUsername: builder.query<string, string>({
      query: (id) => `/user/username/${id}`,
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
  useGetReviewsFiveStarsQuery,
  useGetReviewsCountQuery,
  useLazyGetReviewsCountQuery,
  useLazyGetReviewsQuery,
  useGetRecomendationVideosQuery,
  useGetAvatarUrlQuery,
  useGetUsernameQuery,
  usePrefetch,
} = publicService;
