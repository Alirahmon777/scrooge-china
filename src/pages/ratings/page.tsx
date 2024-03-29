import RatingsCard from '@/components/ratings/RatingsCard';
import Button from '@/components/ui/Button';
import Seo from '@/layout/seo/Seo';
import { useGetRatingQuery } from '@/redux/features/services/public/publicService';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const RatingsPage = () => {
  const [pagination, setPagination] = useState({ offset: 0, limit: 9 });
  const { data, isSuccess, isLoading } = useGetRatingQuery(
    { limit: pagination.limit, offset: pagination.offset },
    {
      pollingInterval: 150000,
    }
  );

  const handlePaginate = (limit: number) => {
    if (isSuccess && data.length >= pagination.limit) {
      setPagination((prev) => ({ ...prev, limit: prev.limit + limit }));
    }
  };
  return (
    <Seo metaTitle='Scrooge China | Top Users' hasChat>
      <section className='mt-5 mb-10 lg:my-[60px] xl:my-[100px]'>
        <div className='container text-center'>
          <h2>Рейтинг Пользователей</h2>

          <ul className='flex flex-wrap max-sm:[&_li]:flex-grow justify-center xl:grid xl:grid-cols-3 gap-5 my-10 mx-auto'>
            {isSuccess &&
              data.map(({ amount, steam_id }, idx) => {
                if (idx == 0 || idx == 1 || idx == 2) {
                  return <RatingsCard desc={amount} steam_id={steam_id} ratings={idx} key={idx} />;
                }
              })}
          </ul>

          <div className='h-[1px] w-full bg-[#1D1F1E]' />
          <ul className='flex flex-wrap [&_li]:flex-grow sm:flex-grow-0 justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-[50px]'>
            {isSuccess &&
              data.map(({ amount, steam_id }, idx) => {
                if (idx == 0 || idx == 1 || idx == 2) {
                  return;
                }
                return <RatingsCard desc={amount} steam_id={steam_id} key={idx} />;
              })}
          </ul>
          <div>{isLoading && <BeatLoader color='#52EA73' />}</div>

          <Button
            label='Загрузить ещё'
            onClick={() => handlePaginate(6)}
            className='bg-header [&_p]:text-white py-[14px] px-6 mt-10 lg:mt-[100px] rounded-[10px] font-bold text-2xl mx-auto'
          />
        </div>
      </section>
    </Seo>
  );
};

export default RatingsPage;
