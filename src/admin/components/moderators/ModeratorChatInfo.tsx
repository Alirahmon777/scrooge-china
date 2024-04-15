import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';
import { IOrder } from '@/types/interfaces';
import { getAmount } from '@/utils/getAmount';
import { useMediaQuery } from 'usehooks-ts';

interface IProps {
  order?: IOrder;
}

const ModeratorChatInfo = ({ order }: IProps) => {
  const { data: avatar } = useGetAvatarUrlQuery(order?.steam_id as string, {
    skip: !order?.steam_id,
  });
  const { data: username } = useGetUsernameQuery(order?.steam_id as string, {
    skip: !order?.steam_id,
  });
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
              Номер заказа: <span>{order?.id}</span>
            </p>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-[10px] mobile:gap-[15px] w-full'>
        {!maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>{username || 'User 1'}</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span>{order?.id}</span>
            </p>
          </div>
        )}
        <ul className='flex max-mobile:justify-between mobile:gap-10'>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Сумма</p>
            <p>
              {order?.currency_symbol} {getAmount(order?.amount, order?.fixed_currency_rate)}
            </p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Курс</p>
            <p>
              1¥ ≈ <span>{order?.fixed_currency_rate}</span>
            </p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Получите в ¥</p>
            <p>{order?.amount} ¥</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModeratorChatInfo;
