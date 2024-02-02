import { IAdmin } from '@/types/interfaces';
import { setAdmin } from '../../slices/auth/authReducer';
import { adminBasicService } from '../../basics/adminService';
import { ILoginData, IModeratorRes } from '@/admin/types/interfaces';

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

      deleteModerator: builder.mutation<IModeratorRes, number>({
        query: (id: number) => ({
          url: `/admin/moderator/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['MODERATOR'],
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetSelfQuery,
  useLazyGetSelfQuery,
  useGetModeratorsQuery,
  useAddModeratorMutation,
  useDeleteModeratorMutation,
} = adminService;
