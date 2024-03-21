import { FormEvent, useState } from 'react';
import ProfileButton from './ProfileButton';
import editIcon from '@svgs/edit.svg';
import AdminButton from '@/admin/components/Button';
import { handleSimpleError } from '@/utils/handleError';
import { useChangeEmailMutation, useLazyGetProfileQuery } from '@/redux/features/services/user/userService';
import { useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrentUser } from '@/redux/features/slices/auth/authReducer';
const ProfileData = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');
  const [getProfile] = useLazyGetProfileQuery();
  const [triger] = useChangeEmailMutation();
  const user = useAppSelector(selectCurrentUser);
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!value) {
        setIsEdit(false);
        return;
      }
      await triger({ email: value }).unwrap();
      await getProfile().unwrap();
      setIsEdit(false);
    } catch (error) {
      handleSimpleError(error);
    }
  };
  return (
    <div className='px-5 py-[28px] sm:px-[30px] sm:pb-[30px] sm:pt-[34px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          {user?.avatar_url && <img className='w-[32px] h-[32px] rounded-full ' src={user.avatar_url} />}
          {!user?.avatar_url && <span className='w-[32px] h-[32px] rounded-full bg-success' />}
          <h4 className='font-medium'>{user?.username}</h4>
        </div>
        <ProfileButton
          label='Изменить Email'
          icon={editIcon}
          imageClass='max-sm:w-4'
          onClick={() => setIsEdit((prev) => !prev)}
        />
      </div>
      {!isEdit && (
        <div className='w-full bg-[#1D1F1E] text-gray rounded-[10px] p-[10px] max-sm:pl-5 mt-4'>
          {user?.email ? user.email : 'Ваш Email'}
        </div>
      )}
      {isEdit && (
        <form className='flex items-center gap-5 mt-4' onSubmit={handleSubmit}>
          <input
            className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] placeholder:text-gray transition-all'
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            value={value}
            placeholder='Введите email'
          />
          <AdminButton label={value ? 'Изменить' : 'Отмена'} type='submit' className='bg-[#EA5252] [&_p]:text-white' />
        </form>
      )}
      <p className='text-gray mt-[50px] max-sm:text-center'>
        Подвердите свой Email, чтобы получать сообщения о скидках.
      </p>
    </div>
  );
};

export default ProfileData;
