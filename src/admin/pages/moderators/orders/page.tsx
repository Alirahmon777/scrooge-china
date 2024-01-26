import Seo from '@/layout/seo/Seo';

const ModeratorOrderPage = () => {
  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderator'>
      <section className='my-[60px]'>
        <div className='container'>
          <h1 className='sr-only'>Страница модератора - Перейти к заказам</h1>
          <h2 className='text-[32px] font-medium'>Перейти к заказам</h2>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorOrderPage;
