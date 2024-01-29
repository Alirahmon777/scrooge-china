import { IAdmin } from '@/types/interfaces';
import { setAdmin } from '../../slices/auth/authReducer';
import { adminBasicService } from '../../basics/adminService';

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
  }),
  overrideExisting: false,
});

export const { useGetSelfQuery, useLazyGetSelfQuery } = adminService;
