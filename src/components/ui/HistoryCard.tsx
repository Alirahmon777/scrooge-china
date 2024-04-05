import { IOrder } from '@/types/interfaces';
import { getFormatedDate } from '@/utils/dateAgo';
import { getAmount } from '@/utils/getAmount';
import { getStatus } from '@/utils/getStatus';
import declineIcon from '@svgs/layout/decline.svg';
import successfullIcon from '@svgs/layout/successfull.svg';
import { useGetRequisitesQuery } from '@/redux/features/services/public/publicService';

interface IProps {
  item: IOrder;
}

const HistoryCard = ({ item }: IProps) => {
  const { id, created_at, amount, fixed_currency_rate, status, payment_method, currency_symbol, requisites_id } = item;
  const activeStatus = getStatus(status);
  const isSuccessfully = activeStatus == 'Успешно';
  const { data: requisite } = useGetRequisitesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((req) => req.id == requisites_id)?.data,
    }),
  });

  return (
    <div className='flex max-mobile:flex-col max-mobile:gap-2 mobile:items-end justify-between py-[10px] px-[7px] sm:p-4 bg-[#151716] rounded-[10px]'>
      <div className='text-gray [&_span]:text-white'>
        <p>
          Номер заказа: <span>{id}</span>
        </p>
        <p>
          Дата/Время: <span>{getFormatedDate(created_at, 'yyyy-MM-dd HH:mm')}</span>
        </p>
        <p>
          Метод оплаты: <span>{payment_method}</span>
        </p>
        <p>
          Реквизиты: <span>{requisite}</span>
        </p>
        <p>
          Сумма: <span>{`${amount}¥ ≈${getAmount(amount, fixed_currency_rate)}${currency_symbol}`}</span>
        </p>
      </div>
      <div className='flex gap-1 items-center'>
        <img
          src={isSuccessfully ? successfullIcon : declineIcon}
          alt={isSuccessfully ? 'successfull icon' : 'decline icon'}
        />
        <p>{activeStatus}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
