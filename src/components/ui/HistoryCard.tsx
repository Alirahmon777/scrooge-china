import { IHistory } from '@/types/interfaces';
import declineIcon from '@svgs/layout/decline.svg';
import successfullIcon from '@svgs/layout/successfull.svg';

const HistoryCard = ({ amount, date_time, details, isSuccessfully, order_number, payment_method }: IHistory) => {
  return (
    <div className='flex max-mobile:flex-col max-mobile:gap-2 mobile:items-end justify-between py-[10px] px-[7px] sm:p-4 bg-[#151716] rounded-[10px]'>
      <div className='text-gray [&_span]:text-white'>
        <p>
          Номер заказа: <span>{order_number}</span>
        </p>
        <p>
          Дата/Время: <span>{date_time}</span>
        </p>
        <p>
          Метод оплаты: <span>{payment_method}</span>
        </p>
        <p>
          Реквизиты: <span>{details}</span>
        </p>
        <p>
          Сумма: <span>{amount}</span>
        </p>
      </div>
      <div className='flex gap-1 items-center'>
        <img
          src={isSuccessfully ? successfullIcon : declineIcon}
          alt={isSuccessfully ? 'successful icon' : 'decline icon'}
        />
        <p>{isSuccessfully ? 'Успешно' : 'Отклонен'}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
