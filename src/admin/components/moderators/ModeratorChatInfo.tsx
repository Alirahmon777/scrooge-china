import { useGetModeratorOrderQuery } from '@/redux/features/services/admin/moderatorService';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';
import { getAmount } from '@/utils/getAmount';
import { useMediaQuery } from 'usehooks-ts';

interface IProps {
  id: string;
}

const ModeratorChatInfo = ({ id }: IProps) => {
  const { data, isSuccess } = useGetModeratorOrderQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data?.find((order) => order.id == id),
      isSuccess,
    }),
  });

  const { data: avatar } = useGetAvatarUrlQuery(data?.steam_id as string, { skip: !isSuccess });
  const { data: username } = useGetUsernameQuery(data?.steam_id as string, { skip: !isSuccess });

  const maxSm = useMediaQuery('not all and (min-width:640px)');
  return (
    <div className='flex max-sm:flex-col items-start gap-[10px]'>
      <div className='flex items-start gap-[10px]'>
        {avatar && (
          <div className='min-max-64 rounded-[10px] overflow-hidden'>
            <img className='object-fill w-full h-full' src={avatar} />
          </div>
        )}
        {!avatar && <span className='min-max-64 bg-[#EA5252] rounded-[10px]' />}
        {maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>{username || 'User 1'}</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span>{data?.id}</span>
            </p>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-[10px] mobile:gap-[15px] w-full'>
        {!maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>{username || 'User 1'}</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span>{data?.id}</span>
            </p>
          </div>
        )}
        <ul className='flex max-mobile:justify-between mobile:gap-10'>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Сумма</p>
            <p>
              {data?.currency_symbol} {getAmount(data?.amount, data?.fixed_currency_rate)}
            </p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Курс</p>
            <p>
              1¥ ≈ <span>{data?.fixed_currency_rate}</span>
            </p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Получите в ¥</p>
            <p>{data?.amount} ¥</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModeratorChatInfo;
