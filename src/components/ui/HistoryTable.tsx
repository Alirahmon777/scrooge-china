import { cn } from '@/lib/utils';
import { IOrder } from '@/types/interfaces';
import { getFormatedDate } from '@/utils/dateAgo';
import { getAmount } from '@/utils/getAmount';
import { getStatus } from '@/utils/getStatus';
import decline from '@svgs/layout/decline.svg';
import success from '@svgs/layout/successfull.svg';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLTableElement> {
  requisites?: string;
  items: IOrder[];
}

const HistoryTable = ({ className, requisites, items, ...props }: IProps) => {
  return (
    <table className={cn('w-full border-separate border-spacing-y-5', className)} {...props}>
      <thead className='text-gray'>
        <tr className='[&_th]:!font-normal [&_th]:bg-header [&_th]:max-w-[101px]'>
          <th className='text-left pl-6 py-3 rounded-l-[10px]'>Номер заказа</th>
          <th className='text-left'>Дата/Время</th>
          <th className='text-left'>Метод оплаты</th>
          <th className={requisites}>Реквизиты</th>
          <th className='text-left'>Сумма ¥ - ₽</th>
          <th className='rounded-r-[10px] pr-6 text-left'>Статус</th>
        </tr>
      </thead>
      <tbody className='[&_td]:bg-[#1D1F1E]'>
        {items.map(({ amount, created_at, id, payment_method, status, fixed_currency_rate, currency_symbol }, idx) => (
          <tr key={idx}>
            <td className='py-3 pl-6 rounded-l-[10px]'>{id}</td>
            <td className=''>{getFormatedDate(created_at, 'yyyy.MM.dd/HH:mm')}</td>
            <td className=''>{payment_method}</td>
            <td className={requisites ? requisites : 'text-center'}>2200 7009 3558 9290</td>
            <td className=''>
              {amount}¥ - {getAmount(amount, fixed_currency_rate)}
              {currency_symbol}
            </td>
            <td className='rounded-r-[10px] flex gap-1 min-h-full py-3'>
              <img src={getStatus(status) == 'Отклонен' ? decline : success} alt='status:' />
              {getStatus(status)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
