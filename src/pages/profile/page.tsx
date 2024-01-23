import ProfileData from '@/components/profile/ProfileData';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileLevel from '@/components/profile/ProfileLevel';
import ProfileTrade from '@/components/profile/ProfileTrade';

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
      </div>
    </section>
  );
};

export default ProfilePage;
