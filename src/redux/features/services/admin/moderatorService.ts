import { IAssignOrder, IMessageBody, IOrder, IPatchChat } from '@/types/interfaces';
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

    // //chat
    // getMessages: builder.query<IMessage[], void>({
    //   query: (id) => `/admin/moderator/chat/${id}`,
    //   async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
    //     // create a websocket connection when the cache subscription starts
    //     const ws = new WebSocket(`ws://localhost/api/admin/moderator/chat/${arg}`);
    //     try {
    //       await cacheDataLoaded;
    //       const listener = (event: MessageEvent) => {
    //         const data = JSON.parse(event.data);

    //         updateCachedData((draft) => {
    //           draft.push(data);
    //         });
    //       };

    //       ws.addEventListener('message', listener);
    //     } catch {}
    //     await cacheEntryRemoved;
    //     ws.close();
    //   },
    // }),
    addMessage: builder.mutation<void, IMessageBody>({
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
} = adminService;
