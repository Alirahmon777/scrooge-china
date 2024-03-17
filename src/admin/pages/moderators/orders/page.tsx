import ModeratorChat from '@/admin/components/moderators/ModeratorChat';
import ModeratorOrders from '@/admin/components/moderators/ModeratorOrders';
import Seo from '@/layout/seo/Seo';
import { IStateOrder } from '@/types/interfaces';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const lastOrder = JSON.parse(localStorage.getItem('moderator-last-order-chat') || '{}') as IStateOrder;
const ModeratorOrderPage = () => {
  const notTable = useMediaQuery('(min-width: 1024px)');

  const [chat, setChat] = useState<IStateOrder>({
    isChat: lastOrder?.isChat || false,
    order_id: lastOrder?.order_id || '',
    chat_id: lastOrder?.chat_id || '',
  });

  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderator'>
      <section className='my-6 lg:my-[60px]'>
        <div className='container'>
          <h1 className='sr-only'>Страница модератора - Перейти к заказам</h1>
          <h2 className='text-[32px] font-medium'>Перейти к заказам</h2>
          <div className='flex lg:grid lg:grid-cols-2 justify-center lg:justify-between mt-5 lg:mt-[55px] gap-5'>
            <ModeratorOrders setChat={setChat} />
            {notTable && <ModeratorChat chat={chat} />}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorOrderPage;
