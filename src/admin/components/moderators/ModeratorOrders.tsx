import { useGetModeratorOrderQuery } from '@/redux/features/services/admin/moderatorService';
import OrderCard from './OrderCard';
import { useContext } from 'react';
import { TStoredAdmin } from '@/admin/types/types';
import { ChatContext } from '@/admin/context/ChatContext';

const ModeratorOrders = () => {
  const { data, isSuccess } = useGetModeratorOrderQuery(undefined, { pollingInterval: 30000 });
  const storedAdmin = localStorage.getItem('admin');
  const { setOrderChat } = useContext(ChatContext);
  const adminLocal: TStoredAdmin = storedAdmin ? JSON.parse(storedAdmin) : null;
  adminLocal?.admin_token;

  return (
    <div className='flex flex-col gap-5 max-w-[564px] min-h-full overflow-y-auto max-h-[686px]'>
      {isSuccess && data.map((item, idx) => <OrderCard key={idx} item={item} setChat={setOrderChat} />)}
    </div>
  );
};

export default ModeratorOrders;
