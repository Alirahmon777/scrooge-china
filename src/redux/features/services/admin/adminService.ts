import { IAdmin } from '@/types/interfaces';
import { setAdmin } from '../../slices/auth/authReducer';
import { adminBasicService } from '../../basics/adminService';
import { IModeratorRes } from '@/admin/types/interfaces';

export const adminService = adminBasicService.injectEndpoints({
  endpoints: (builder) => ({
    getSelf: builder.query<IAdmin, void>({
      query: () => '/admin/self',
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAdmin({ admin: data, role: data.role }));
        } catch (error) {
          dispatch(setAdmin({ admin: null, role: null }));
        }
      },
    }),
    getModerators: builder.query<IModeratorRes[], void>({
      query: () => '/admin/moderator',
    }),
  }),
  overrideExisting: false,
});

export const { useGetSelfQuery, useLazyGetSelfQuery, useGetModeratorsQuery } = adminService;
