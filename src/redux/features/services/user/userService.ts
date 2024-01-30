import { IUser } from '@/types/interfaces';
import { userService as userBasicQuery } from '../../basics/userService';
import { setUser } from '../../slices/auth/authReducer';

export const userService = userBasicQuery.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IUser, void>({
      query: () => '/user',
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: data }));
        } catch (error) {
          dispatch(setUser({ user: null }));
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileQuery, useLazyGetProfileQuery, usePrefetch: useUserRefetch } = userService;
