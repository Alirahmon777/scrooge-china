import { IRecomVideoBody, IRequisitesBody, ISocialBody } from '@/admin/types/interfaces';
import { adminBasicService } from '../../basics/adminService';

export const adminSettingsService = adminBasicService.injectEndpoints({
  endpoints: (builder) => ({
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

    updateCurrency: builder.mutation<null, { id: number; rate: string }>({
      query: ({ id, rate }) => ({
        url: `/admin/currency/${id}`,
        method: 'PATCH',
        body: {
          rate,
        },
      }),
    }),
  }),
});

export const {
  useUpdateRequisitesMutation,
  useUpdateSocialMutation,
  useUpdateCurrencyMutation,
  useUpdateRecomVideoMutation,
} = adminSettingsService;
