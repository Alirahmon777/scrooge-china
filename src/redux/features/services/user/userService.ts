import { IReview, IReviewBody } from './../../../../types/interfaces.d';
import { IOrder, IOrderBody, IUser } from '@/types/interfaces';
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
    patchStatus: builder.query<void, void>({
      query: () => ({ url: '/status/user', method: 'PATCH' }),
    }),

    //orders
    getUserOrder: builder.query<IOrder[], void>({
      query: () => '/user/order',
    }),
    getUserOrderWithId: builder.query<IOrder[], string>({
      query: (id) => `/user/order/${id}`,
    }),
    addUserOrder: builder.mutation<IOrder, IOrderBody>({
      query: (body) => ({
        method: 'POST',
        url: '/user/order',
        body,
      }),
    }),
    addReview: builder.mutation<IReview, IReviewBody>({
      query: (body) => ({
        method: 'POST',
        url: '/review',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  usePrefetch: useUserRefetch,
  usePatchStatusQuery,
  //orders
  useGetUserOrderQuery,
  useGetUserOrderWithIdQuery,
  useAddUserOrderMutation,

  //review
  useAddReviewMutation,
} = userService;
