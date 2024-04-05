import {
  IOrder,
  IOrderBody,
  IUser,
  IChangeEmail,
  IChangeTradeUrl,
  IHistoryMessage,
  IReview,
  IReviewBody,
  IMessageBody,
  IPatchChat,
  IAssignOrder,
} from '@/types/interfaces';
import { userService as userBasicQuery } from '../../basics/userService';
import { setUser } from '../../slices/auth/authReducer';
import { TStoredUser } from '@/types/types';

export const userService = userBasicQuery.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IUser, void>({
      query: () => '/user',
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const stored: TStoredUser = JSON.parse(localStorage.getItem('user') as string);
          localStorage.setItem(
            'user',
            JSON.stringify({
              email: data.email,
              steam_id: data.steam_id,
              token: stored.token,
              trade_url: data.trade_url,
            })
          );
          dispatch(setUser({ user: data }));
        } catch (error) {
          dispatch(setUser({ user: null }));
        }
      },
    }),
    patchStatus: builder.mutation<void, void>({
      query: () => ({ url: '/status/user', method: 'PATCH' }),
    }),

    //orders
    getUserOrder: builder.query<IOrder[], void>({
      query: () => '/user/order',
    }),
    getUserOrderWithId: builder.query<IOrder, string>({
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
    cancelOrder: builder.mutation<void, string>({
      query: (id) => ({
        method: 'PATCH',
        url: `/user/order/${id}/cancel`,
      }),
    }),
    payedOrder: builder.mutation<void, string>({
      query: (id) => ({
        method: 'PATCH',
        url: `/user/order/${id}/maybepayed`,
      }),
    }),

    //profile
    changeEmail: builder.mutation<void, IChangeEmail>({
      query: (body) => ({ url: '/user/email', method: 'PATCH', body }),
    }),
    changeTradeUrl: builder.mutation<void, IChangeTradeUrl>({
      query: (body) => ({ url: '/user/trade-url', method: 'PATCH', body }),
    }),

    //chat
    getMessages: builder.query<IHistoryMessage, string>({
      query: (id) => `/user/chat/${id}/history`,
    }),

    addMessage: builder.mutation<void, { id: string } & IMessageBody>({
      query: ({ id, image, text }) => {
        const formdata = new FormData();
        formdata.append('text', text);
        if (image) formdata.append('image', image);
        return {
          url: `/user/chat/${id}/message`,
          method: 'POST',
          body: formdata,
        };
      },
    }),

    createOrPatchChat: builder.mutation<IPatchChat, IPatchChat & IAssignOrder>({
      query: (id) => ({
        url: `/user/chat`,
        method: 'PATCH',
        body: id,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  usePrefetch: useUserRefetch,
  usePatchStatusMutation,
  //orders
  useGetUserOrderQuery,
  useGetUserOrderWithIdQuery,
  useAddUserOrderMutation,
  useCancelOrderMutation,
  usePayedOrderMutation,
  //review
  useAddReviewMutation,

  //change profile
  useChangeEmailMutation,
  useChangeTradeUrlMutation,

  //chat
  useAddMessageMutation,
  useCreateOrPatchChatMutation,
  useGetMessagesQuery,
} = userService;
