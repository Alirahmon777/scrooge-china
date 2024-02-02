import { IRequisitesBody, ISocialBody } from '@/admin/types/interfaces';
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
  }),
});

export const { useUpdateRequisitesMutation, useUpdateSocialMutation } = adminSettingsService;
