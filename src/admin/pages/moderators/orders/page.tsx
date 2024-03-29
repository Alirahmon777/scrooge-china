import ModeratorChat from '@/admin/components/moderators/ModeratorChat';
import ModeratorOrders from '@/admin/components/moderators/ModeratorOrders';
import { useMediaQuery } from 'usehooks-ts';
import Seo from '@/layout/seo/Seo';
import { useGetModeratorOrderQuery } from '@/redux/features/services/admin/moderatorService';
import { ChatContext, initialOrderChatAdmin } from '@/admin/context/ChatContext';
import { useContext, useEffect } from 'react';

const ModeratorOrderPage = () => {
  const notTable = useMediaQuery('(min-width: 1024px)');
  const { orderChat, setOrderChat } = useContext(ChatContext);

  const { data, isSuccess } = useGetModeratorOrderQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data?.find((order) => order.id == orderChat.order_id && order.steam_id == orderChat.steam_id),
      isSuccess,
    }),
  });

  useEffect(() => {
    if (isSuccess) {
      if (!data) {
        setOrderChat(initialOrderChatAdmin);
        return;
      }
    }
  }, [data, isSuccess]);

  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderator'>
      <section className='my-6 lg:my-[60px]'>
        <div className='container'>
          <h1 className='sr-only'>Страница модератора - Перейти к заказам</h1>
          <h2 className='text-[32px] font-medium'>Перейти к заказам</h2>
          <div className='flex lg:grid lg:grid-cols-2 justify-center lg:justify-between mt-5 lg:mt-[55px] gap-5'>
            
            <ModeratorOrders />
            {notTable && <ModeratorChat />}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorOrderPage;
