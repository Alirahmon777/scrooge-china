import ModeratorChat from '@/admin/components/moderators/ModeratorChat';
import ModeratorOrders from '@/admin/components/moderators/ModeratorOrders';
import Seo from '@/layout/seo/Seo';
import { useMediaQuery } from 'usehooks-ts';

const ModeratorOrderPage = () => {
  const notTable = useMediaQuery('(min-width: 1024px)');
  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderator'>
      <section className='my-[60px]'>
        <div className='container'>
          <h1 className='sr-only'>Страница модератора - Перейти к заказам</h1>
          <h2 className='text-[32px] font-medium'>Перейти к заказам</h2>
          <div className='flex lg:grid lg:grid-cols-2 justify-center lg:justify-between mt-[55px] gap-5'>
            <ModeratorOrders />
            {notTable && <ModeratorChat />}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorOrderPage;
