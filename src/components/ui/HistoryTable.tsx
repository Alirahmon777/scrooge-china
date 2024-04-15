import { cn } from '@/lib/utils';
import { useGetRequisitesQuery } from '@/redux/features/services/public/publicService';
import { IOrder, ITheadItem } from '@/types/interfaces';
import { getFormatedDate } from '@/utils/dateAgo';
import { getAmount } from '@/utils/getAmount';
import { getStatus } from '@/utils/getStatus';
import decline from '@svgs/layout/decline.svg';
import success from '@svgs/layout/successfull.svg';
import waiting from '@svgs/waiting.svg';
import { HTMLAttributes, useState } from 'react';
import Button from './Button';
import { SliderBtn } from './SwiperBtns';
import { useNavigate } from 'react-router-dom';

interface IProps extends HTMLAttributes<HTMLTableElement> {
  requisites?: string;
  items: IOrder[];
  h_items: ITheadItem[];
  isAdmin?: boolean;
}

const HistoryTable = ({ className, requisites, h_items, items, isAdmin, ...props }: IProps) => {
  const { data: all_requisites } = useGetRequisitesQuery();
  const [pagination, setPagination] = useState({ offset: 0, limit: 14 });
  const navigate = useNavigate();
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

  return (
    <>
      <table className={cn('w-full border-separate border-spacing-y-5', className)} {...props}>
        <thead className='text-gray'>
          <tr className='[&_th]:!font-normal [&_th]:bg-header [&_th]:max-w-[101px]'>
            {h_items.map(({ className, label }, idx) => (
              <th className={className} key={idx}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='[&_td]:bg-[#1D1F1E]'>
          {items
            .slice(pagination.offset, pagination.limit)
            .map(
              (
                { amount, created_at, id, payment_method, status, fixed_currency_rate, currency_symbol, requisites_id },
                idx
              ) => {
                const requisite = all_requisites?.find((req) => req.id == requisites_id)?.data;
                return (
                  <tr key={idx}>
                    <td className='py-3 pl-6 rounded-l-[10px]'>{id}</td>
                    <td className=''>{getFormatedDate(created_at, 'yyyy.MM.dd/HH:mm')}</td>
                    <td className=''>{payment_method}</td>
                    <td className={requisites ? requisites : 'text-center w-[300px]'}>
                      <p className='max-w-[300px] truncate'>{requisite || ''}</p>
                    </td>
                    <td className=''>
                      {amount}¥ - {getAmount(amount, fixed_currency_rate)}
                      {currency_symbol}
                    </td>
                    <td className={cn('flex gap-1 min-h-full py-3', { 'rounded-r-[10px]': !isAdmin })}>
                      <img
                        width={24}
                        height={24}
                        src={status == '"Cancelled"' ? decline : status == '"Succeeded"' ? success : waiting}
                        alt='status:'
                      />
                      <p>{getStatus(status)}</p>
                    </td>
                    {isAdmin && (
                      <td className='rounded-r-[10px] min-h-full'>
                        <Button
                          label='к заказу'
                          variant='admin'
                          className='px-2 py-1'
                          onClick={() => navigate(`/admin/history-chat/${id}`)}
                        />
                      </td>
                    )}
                  </tr>
                );
              }
            )}
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

export default HistoryTable;
