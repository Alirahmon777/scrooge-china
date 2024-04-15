import { cn } from '@/lib/utils';
import { HTMLAttributes, useState } from 'react';
import Button from './Button';
import { SliderBtn } from './SwiperBtns';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';
import { useDeleteBlacklistMutation } from '@/redux/features/services/admin/adminService';
import { handleSimpleError } from '@/utils/handleError';
import { toastSuccess } from '@/utils/toast/toast';

interface IProps extends HTMLAttributes<HTMLTableElement> {
  requisites?: string;
  items: string[];
}

const BlacklistTable = ({ className, requisites, items, ...props }: IProps) => {
  const [pagination, setPagination] = useState({ offset: 0, limit: 14 });
  const [trigger] = useDeleteBlacklistMutation();
  const handleNextSlide = () => {
    if (items.length < 15) return;
    setPagination((prev) => ({
      offset: prev.limit,
      limit: prev.limit + 14,
    }));
  };

  const handlePrevSlide = () => {
    setPagination((prev) => ({
      offset: Math.max(0, prev.offset - 14),
      limit: Math.max(14, prev.limit - 14),
    }));
  };

  const handleDelete = async (id: string) => {
    try {
      await trigger({ steam_id: id }).unwrap();
      toastSuccess('успешно удален из списка');
    } catch (error) {
      handleSimpleError(error);
    }
  };

  return (
    <>
      <table className={cn('w-full border-separate border-spacing-y-5', className)} {...props}>
        <thead className='text-gray'>
          <tr className='[&_th]:!font-normal [&_th]:bg-header [&_th]:max-w-[101px]'>
            <th className='text-left pl-6 py-3 rounded-l-[10px]'>Аватар</th>
            <th className='text-left'>Имя пользователя</th>
            <th className='text-left'>Идентификатор</th>
            <th className='text-left rounded-r-[10px] pr-6'>Удалить из списка</th>
          </tr>
        </thead>
        <tbody className='[&_td]:bg-[#1D1F1E]'>
          {items.slice(pagination.offset, pagination.limit).map((item, idx) => {
            const { data: username } = useGetUsernameQuery(item);
            const { data: avatar } = useGetAvatarUrlQuery(item);
            return (
              <tr key={idx}>
                <td className='py-3 pl-6 rounded-l-[10px]'>
                  <img src={avatar} alt='avatar' width={40} height={40} />
                </td>
                <td className=''>{username}</td>
                <td className=''>{item}</td>
                <td className='rounded-r-[10px] min-h-full'>
                  <Button label='удалить' variant='admin' className='px-2 py-1' onClick={() => handleDelete(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='relative mt-10 flex items-center gap-5 justify-center'>
        <SliderBtn
          slideHandler={handlePrevSlide}
          customClass={cn(
            'static hover:bg-admin [&_img]:hover:brightness-0 [&_img]:hover:invert-[1] transition-all -rotate-180',
            { 'pointer-events-none bg-header': pagination.offset == 0 }
          )}
        />
        <SliderBtn
          slideHandler={handleNextSlide}
          customClass={cn('static hover:bg-admin [&_img]:hover:brightness-0 [&_img]:hover:invert-[1] transition-all', {
            'pointer-events-none bg-header': items.length < 15,
          })}
        />
      </div>
    </>
  );
};

export default BlacklistTable;
