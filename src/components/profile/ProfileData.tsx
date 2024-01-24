import ProfileButton from './ProfileButton';
import editIcon from '@svgs/edit.svg';
const ProfileData = () => {
  return (
    <div className='px-5 py-[28px] sm:px-[30px] sm:pb-[30px] sm:pt-[34px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <span className='min-w-[32px] min-h-[32px] rounded-full bg-success' />
          <h4 className='font-medium'>Ник Нэйм</h4>
        </div>
        <ProfileButton label='Изменить Email' icon={editIcon} imageClass='max-sm:w-4' />
      </div>
      <div className='w-full bg-[#1D1F1E] text-gray rounded-[10px] p-[10px] max-sm:pl-5 mt-4'>Ваш Email</div>
      <p className='text-gray mt-[50px] max-sm:text-center'>
        Подвердите свой Email, чтобы получать сообщения о скидках.
      </p>
    </div>
  );
};

export default ProfileData;
