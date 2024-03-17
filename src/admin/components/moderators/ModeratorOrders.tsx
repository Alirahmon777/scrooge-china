import { useGetModeratorOrderQuery } from '@/redux/features/services/admin/moderatorService';
import OrderCard from './OrderCard';
import { Dispatch, SetStateAction } from 'react';
import { IStateOrder } from '@/types/interfaces';
import { TStoredAdmin } from '@/admin/types/types';

interface IProps {
  setChat: Dispatch<SetStateAction<IStateOrder>>;
}
const ModeratorOrders = ({ setChat }: IProps) => {
  const { data, isSuccess } = useGetModeratorOrderQuery();
  const storedAdmin = localStorage.getItem('admin');
  const adminLocal: TStoredAdmin = storedAdmin ? JSON.parse(storedAdmin) : null;
  adminLocal?.admin_token;

  return (
    <div className='flex flex-col gap-5 max-w-[564px] min-h-full'>
      {isSuccess && data.map((item, idx) => <OrderCard key={idx} item={item} setChat={setChat} />)}
    </div>
  );
};

export default ModeratorOrders;
