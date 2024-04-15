import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import emptyImage from '@/assets/images/empty-image.png';
import backHandDown from '@/assets/svgs/backhand-down.svg';
import ModeratorChatInfo from '@/admin/components/moderators/ModeratorChatInfo';
import Chat from '@/admin/components/history-chat/Chat';
import { useGetHistoryMutation } from '@/redux/features/services/admin/adminService';
import { IOrder } from '@/types/interfaces';
import { useEffect, useState } from 'react';
import { subYears } from 'date-fns';
import { handleSimpleError } from '@/utils/handleError';
import { cn } from '@/lib/utils';
const HistoryChat = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<IOrder>();
  const [getOrder, { isSuccess }] = useGetHistoryMutation();

  const date = subYears(new Date(), 100);
  const isoStringWithoutTimezone = date.toISOString().slice(0, -1);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await getOrder({
          start_datetime: isoStringWithoutTimezone,
          end_datetime: new Date().toISOString().slice(0, -1),
        }).unwrap();
        const data = response.find((order) => order.id == id);
        setOrder(data);
      } catch (err) {
        handleSimpleError(err);
      }
    })();
  }, []);

  if (!id || (isSuccess && !order)) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <div className='w-[400px] relative'>
          <img src={emptyImage} alt='empty' width={400} />
          <div
            className={cn('absolute right-[56px] top-[50%] flex flex-col w-[100px]', {
              'top-[38%]': id && isSuccess && !order,
            })}
          >
            <div className='flex relative justify-between -left-[4px]'>
              <img src={backHandDown} width={35} className='relative top-[2px] -rotate-12' alt='down-hand emoji' />
              <img src={backHandDown} width={35} alt='down-hand emoji' />
              <img src={backHandDown} width={35} className='relative top-[3px] rotate-12' alt='down-hand emoji' />
            </div>
            <Link to={'/admin/history-orders'} className='absolute text-admin top-[50px]'>
              {!id
                ? 'выберите чат'
                : 'история чата не найдена или заказа не существует с таким id выберите другой заказ'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='my-[45px] pr-[32px] flex flex-col max-w-[800px] gap-5 mx-auto'>
      <ModeratorChatInfo order={order} />
      <div className='h-[1px] w-full bg-header'></div>
      <Chat id={id} />
    </section>
  );
};

export default HistoryChat;
