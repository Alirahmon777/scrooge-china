import ProfileData from '@/components/profile/ProfileData';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileLevel from '@/components/profile/ProfileLevel';
import ProfileTrade from '@/components/profile/ProfileTrade';
import HistoryTable from '@/components/ui/HistoryTable';

const ProfilePage = () => {
  return (
    <section className='my-[60px]'>
      <div className='container'>
        <div className='w-full grid grid-cols-2 gap-[25px]'>
          <ProfileData />
          <ProfileTrade />
          <ProfileInfo />
          <ProfileLevel />
        </div>
        <div className='mt-[60px]'>
          <div className='flex items-center justify-between'>
            <h4 className='text-2xl font-medium'>История продаж</h4>
            <div className='text-gray font-medium [&_span]:text-white flex items-center gap-10'>
              <p>
                Всего сделок: <span>0</span>
              </p>
              <p>
                Продано на: <span>0.00¥</span>
              </p>
            </div>
          </div>
          <HistoryTable
            className='[&_th]:py-[20px] [&_tbody]:before:content-[""] [&_tbody]:before:table-row'
            requisites='text-left'
          />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
