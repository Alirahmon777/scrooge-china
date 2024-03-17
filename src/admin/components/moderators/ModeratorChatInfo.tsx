import { useGetModeratorOrderQuery } from '@/redux/features/services/admin/moderatorService';
import { getAmount } from '@/utils/getAmount';
import { useMediaQuery } from 'usehooks-ts';

interface IProps {
  id: string;
}

const ModeratorChatInfo = ({ id }: IProps) => {
  const { data } = useGetModeratorOrderQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data?.find((order) => order.id == id),
      isSuccess,
    }),
  });

  const maxSm = useMediaQuery('not all and (min-width:640px)');
  return (
    <div className='flex max-sm:flex-col items-start gap-[10px]'>
      <div className='flex items-start gap-[10px]'>
        <span className='min-w-16 min-h-16 bg-[#EA5252] rounded-[10px]' />
        {maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>User 1</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span>{data?.id}</span>
            </p>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-[10px] mobile:gap-[15px] w-full'>
        {!maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>Ник Нэйм</h4>
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
