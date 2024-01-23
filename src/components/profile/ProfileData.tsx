import ProfileButton from './ProfileButton';
import editIcon from '@svgs/edit.svg';
const ProfileData = () => {
  return (
    <div className='px-[30px] pb-[30px] pt-[34px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <span className='w-[32px] h-[32px] rounded-full bg-success' />
          <h4 className='text-2xl font-medium'>Ник Нэйм</h4>
        </div>
        <ProfileButton label='Изменить Email' icon={editIcon} />
      </div>
      <div className='w-full bg-[#1D1F1E] text-gray rounded-[10px] p-[10px] mt-4'>Ваш Email</div>
      <p className='text-gray mt-[50px]'>Подвердите свой Email, чтобы получать сообщения о скидках.</p>
    </div>
  );
};

export default ProfileData;
