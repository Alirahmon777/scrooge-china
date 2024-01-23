import { cn } from '@/lib/utils';
import decline from '@svgs/layout/decline.svg';
import success from '@svgs/layout/successfull.svg';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLTableElement> {
  requisites?: string;
}

const HistoryTable = ({ className, requisites, ...props }: IProps) => {
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
        <tr>
          <td className='py-3 pl-6 rounded-l-[10px]'>14</td>
          <td className=''>2024.01.17/00:00</td>
          <td className=''>Tinkoff</td>
          <td className={requisites ? requisites : 'text-center'}>2200 7009 3558 9290</td>
          <td className=''>1000¥ - 13000₽</td>
          <td className='rounded-r-[10px] flex gap-1 min-h-full py-3'>
            <img src={decline} alt='' />
            Отклонен
          </td>
        </tr>
        <tr>
          <td className='py-3 pl-6 rounded-l-[10px]'>13</td>
          <td className=''>2024.01.17/00:00</td>
          <td className=''>Tinkoff</td>
          <td className={requisites ? requisites : 'text-center'}>2200 7009 3558 9290</td>
          <td className=''>1000¥ - 13000₽</td>
          <td className='rounded-r-[10px] flex gap-1 min-h-full py-3'>
            <img src={success} alt='' />
            Успешно
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HistoryTable;
