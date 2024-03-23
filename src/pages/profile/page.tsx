import ProfileData from '@/components/profile/ProfileData';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileLevel from '@/components/profile/ProfileLevel';
import ProfileTrade from '@/components/profile/ProfileTrade';
import HistoryCard from '@/components/ui/HistoryCard';
import HistoryTable from '@/components/ui/HistoryTable';
import { useGetUserOrderQuery } from '@/redux/features/services/user/userService';
import { useMediaQuery } from 'usehooks-ts';

const ProfilePage = () => {
  const maxSm = useMediaQuery('not all and (min-width: 640px)');
  const laptop = useMediaQuery('(min-width: 1024px)');
  const { data, isSuccess } = useGetUserOrderQuery();
  return (
    <section className='my-10 tablet:my-[60px] profile'>
      <div className='container'>
        <div className='w-full grid grid-cols-1 tablet:grid-cols-2 gap-5 tablet:gap-[25px]'>
          <ProfileData />
          <ProfileTrade />
          {!maxSm && <ProfileInfo />}
          <ProfileLevel />
        </div>
        <div className='mt-[60px]'>
          <div className='flex sm:items-center sm:justify-between max-sm:flex-col'>
            <h4 className='text-2xl font-medium'>История продаж</h4>
            <div className='text-gray sm:font-medium [&_span]:text-white flex items-center gap-[10px] sm:gap-10'>
              <p>
                Всего сделок: <span>0</span>
              </p>
              <p>
                Продано на: <span>0.00¥</span>
              </p>
            </div>
          </div>
          {isSuccess && laptop ? (
            <HistoryTable
              items={data}
              className='[&_th]:py-[20px] [&_tbody]:before:content-[""] [&_tbody]:before:table-row'
              requisites='text-left'
            />
          ) : (
            <div className='mt-9 grid tablet:grid-cols-2 gap-6'>
              <HistoryCard
                amount='10000¥ ≈100200₽'
                date_time='2024-01-14 13:42'
                details='2200 7009 3558 9290'
                order_number='1'
                payment_method='Tinkoff'
              />
              <HistoryCard
                amount='10000¥ ≈100200₽'
                date_time='2024-01-14 13:42'
                details='2200 7009 3558 9290'
                order_number='1'
                isSuccessfully
                payment_method='Tinkoff'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
