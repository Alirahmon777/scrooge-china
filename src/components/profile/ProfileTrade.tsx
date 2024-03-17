import { useAppSelector } from '@/redux/hooks/hooks';
import ProfileButton from './ProfileButton';
import linkIcon from '@svgs/link.svg';
import { selectCurrentUser } from '@/redux/features/slices/auth/authReducer';
import { useChangeTradeUrlMutation } from '@/redux/features/services/user/userService';
import { FormEvent, useState } from 'react';
import { handleSimpleError } from '@/utils/handleError';
import AdminButton from '@/admin/components/Button';
import Button from '../ui/Button';
import { Icons } from '@/admin/components/Icons';
import { cn } from '@/lib/utils';
import { toastSuccess } from '@/utils/toast/toast';
const ProfileTrade = () => {
  const user = useAppSelector(selectCurrentUser);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
  const [triger] = useChangeTradeUrlMutation();
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!value) {
        setIsEdit(false);
        return;
      }
      await triger({ url: value }).unwrap();
      setIsEdit(false);
    } catch (error) {
      handleSimpleError(error);
    }
  };

  const handleCopy = async () => {
    try {
      if (!copied) {
        await navigator.clipboard.writeText(user?.trade_url as string);
        setCopied(true);
      }
      toastSuccess('copied!');
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      handleSimpleError(error);
    }
  };

  return (
    <div className='px-5 pb-4 sm:px-[30px] sm:pb-[30px] pt-[34px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <h4 className='font-medium'>Trade URL</h4>
        <ProfileButton
          label='Изменить ссылку'
          icon={linkIcon}
          imageClass='max-sm:w-4'
          onClick={() => setIsEdit((prev) => !prev)}
        />
      </div>
      {!isEdit && (
        <div
          className={cn(
            'w-full flex gap-0.5 bg-[#1D1F1E] items-center text-gray rounded-[10px] p-[10px] max-sm:pl-5 mt-4',
            {
              'py-[3px] pl-2 pr-0': user?.trade_url,
            }
          )}
        >
          <p className='truncate'> {user?.trade_url ? user.trade_url : 'Ваш Trade URL'}</p>
          {user?.trade_url && (
            <Button
              className='bg-header p-2 rounded-md border border-solid border-gray'
              onClick={handleCopy}
              disabled={copied}
              LeftSvg={!copied ? <Icons.copy /> : <Icons.copied />}
            />
          )}
        </div>
      )}
      {isEdit && (
        <form className='flex items-center gap-4 mt-4' onSubmit={handleSubmit}>
          <input
            className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] placeholder:text-gray transition-all'
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            value={value}
            placeholder='Введите Trade URL'
          />
          <AdminButton label={value ? 'Изменить' : 'Отмена'} type='submit' className='bg-[#EA5252] [&_p]:text-white' />
        </form>
      )}
      <p className='text-gray mt-[31px]'>
        Для обмена в Steam вам необходимо указать ваш Trade URL в поле выше.{' '}
        <a
          href={`https://steamcommunity.com/profiles/${user?.steam_id}/tradeoffers/privacy#trade_offer_access_url`}
          className='text-success'
          target='_blank'
        >
          Узнать Свой URL
        </a>
      </p>
    </div>
  );
};

export default ProfileTrade;
