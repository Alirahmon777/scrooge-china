import { IAssignOrder, IHistoryMessage, IMessageBody, IOrder, IPatchChat } from '@/types/interfaces';
import { adminBasicService } from '../../basics/adminService';

export const adminService = adminBasicService.injectEndpoints({
  endpoints: (builder) => ({
    getModeratorOrder: builder.query<IOrder[], void>({
      query: () => ({ url: '/admin/moderator/orders' }),
    }),

    getModeratorUnAssignedOrders: builder.query<IOrder[], void>({
      query: () => '/admin/moderator/unassigned-orders',
    }),

    assignOrder: builder.mutation<void, IAssignOrder>({
      query: (order_id) => ({
        url: `/admin/moderator/assign`,
        method: 'PATCH',
        body: order_id,
      }),
    }),

    getMessages: builder.query<IHistoryMessage, string>({
      query: (id) => `/admin/moderator/chat/${id}/history`,
    }),

    addMessage: builder.mutation<void, { id: string } & IMessageBody>({
      query: ({ id, image, text }) => {
        const formdata = new FormData();
        formdata.append('text', text);
        if (image) formdata.append('image', image);
        return {
          url: `/admin/moderator/chat/${id}/message`,
          method: 'POST',
          body: formdata,
        };
      },
    }),

    createOrPatchChat: builder.mutation<IPatchChat, IPatchChat>({
      query: (id) => ({
        url: `/admin/moderator/chat`,
        method: 'PATCH',
        body: id,
      }),
    }),
  }),
});

export const {
  useGetModeratorUnAssignedOrdersQuery,
  useGetModeratorOrderQuery,
  useLazyGetModeratorOrderQuery,
  useCreateOrPatchChatMutation,
  useAssignOrderMutation,
  useAddMessageMutation,
  useGetMessagesQuery,
} = adminService;
