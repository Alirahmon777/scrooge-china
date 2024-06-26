import { ICount, IQueryStartEndTime, IRecomVideoBody, IRequisitesBody, ISocialBody } from '@/admin/types/interfaces';
import { adminBasicService } from '../../basics/adminService';
import { ICurrencyBody } from '@/types/interfaces';

export const adminSettingsService = adminBasicService.injectEndpoints({
  endpoints: (builder) => ({
    getAmountUsers: builder.query<ICount, IQueryStartEndTime>({
      query: ({ end_datetime, start_datetime }) =>
        `/admin/users/registrations-in-period?start_datetime=${start_datetime}&end_datetime=${end_datetime}`,
    }),

    updateSocial: builder.mutation<null, ISocialBody>({
      query: (body) => ({
        url: '/admin/social',
        method: 'PATCH',
        body: body,
      }),
    }),

    updateRequisites: builder.mutation<null, IRequisitesBody>({
      query: (body) => ({
        url: '/admin/requisites',
        method: 'PATCH',
        body: body,
      }),
    }),

    updateRecomVideo: builder.mutation<null, IRecomVideoBody>({
      query: (body) => ({
        url: '/admin/review/video',
        method: 'PATCH',
        body: body,
      }),
    }),

    updateCurrency: builder.mutation<null, { id: string; rate: string }>({
      query: ({ id, rate }) => ({
        url: `/admin/currency/${id}`,
        method: 'PATCH',
        body: {
          rate,
        },
      }),
    }),

    addCurrency: builder.mutation<null, ICurrencyBody>({
      query: (body) => ({
        url: '/admin/currency',
        method: 'POST',
        body,
      }),
    }),

    addVideo: builder.mutation<null, IRecomVideoBody>({
      query: (body) => ({
        url: '/admin/review/video',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useUpdateRequisitesMutation,
  useUpdateSocialMutation,
  useUpdateCurrencyMutation,
  useUpdateRecomVideoMutation,
  useAddCurrencyMutation,
  useAddVideoMutation,
  useGetAmountUsersQuery,
  useLazyGetAmountUsersQuery,
} = adminSettingsService;
