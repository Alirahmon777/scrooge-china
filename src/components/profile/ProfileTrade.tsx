import ProfileButton from './ProfileButton';
import linkIcon from '@svgs/link.svg';
const ProfileTrade = () => {
  return (
    <div className='px-5 pb-4 sm:px-[30px] sm:pb-[30px] pt-[34px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <h4 className='font-medium'>Trade URL</h4>
        <ProfileButton label='Изменить ссылку' icon={linkIcon} imageClass='max-sm:w-4' />
      </div>
      <div className='w-full bg-[#1D1F1E] text-gray rounded-[10px] p-[10px] max-sm:pl-5 mt-5'>Ваш Trade URL</div>
      <p className='text-gray mt-[31px]'>
        Для обмена в Steam вам необходимо указать ваш Trade URL в поле выше.{' '}
        <span className='text-success'>Узнать Свой URL</span>
      </p>
    </div>
  );
};

export default ProfileTrade;
