import { useGetModeratorUnAssignedOrdersQuery } from '@/redux/features/services/admin/moderatorService';
import Seo from '@/layout/seo/Seo';
import OrderCard from '@/admin/components/moderators/OrderCard';

const ModeratorOrderPage = () => {
  const { data, isSuccess } = useGetModeratorUnAssignedOrdersQuery();

  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderator'>
      <section className='my-6 lg:my-[60px]'>
        <div className='container'>
          <h1 className='sr-only'>Страница модератора - Заказы</h1>
          <h2 className='text-[32px] font-medium'>Назначить Заказ</h2>
          <div className='grid-cols-1 grid lg:grid-cols-2 justify-center lg:justify-between mt-5 lg:mt-[55px] gap-5'>
            {isSuccess && data.map((item, idx) => <OrderCard key={idx} item={item} isAssign />)}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorOrderPage;
