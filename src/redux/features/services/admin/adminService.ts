import { IAdmin, IOrder } from '@/types/interfaces';
import { setAdmin } from '../../slices/auth/authReducer';
import { adminBasicService } from '../../basics/adminService';
import { IChangePassBody, ILoginData, IModeratorRes, IQueryStartEndTime } from '@/admin/types/interfaces';

export const adminService = adminBasicService
  .enhanceEndpoints({ addTagTypes: ['MODERATOR'], endpoints: () => {} })
  .injectEndpoints({
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

      getHistory: builder.mutation<IOrder[], IQueryStartEndTime>({
        query: (body) => ({
          url: `/admin/order/all-in-period`,
          method: 'POST',
          body,
        }),
      }),

      getModerators: builder.query<IModeratorRes[], void>({
        query: () => '/admin/moderator',
        providesTags: ['MODERATOR'],
      }),

      addModerator: builder.mutation<IModeratorRes, ILoginData>({
        query: (body: ILoginData) => ({
          url: '/admin/moderator',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['MODERATOR'],
      }),

      deleteModerator: builder.mutation<IModeratorRes, string>({
        query: (id: string) => ({
          url: `/admin/moderator/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['MODERATOR'],
      }),

      changePassword: builder.mutation<void, IChangePassBody>({
        query: (body) => ({
          url: `/admin/moderator/password`,
          method: 'PATCH',
          body,
        }),
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetSelfQuery,
  useLazyGetSelfQuery,
  useGetHistoryMutation,
  useGetModeratorsQuery,
  useAddModeratorMutation,
  useDeleteModeratorMutation,
  useChangePasswordMutation,
} = adminService;
