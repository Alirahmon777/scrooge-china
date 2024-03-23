import { useContext } from 'react';
import Button from '../ui/Button';
import { ChatContextUser, initialOrderChat } from '@/context/ChatContext';

const PaymentChatSuccess = () => {
  const { setOrderChat } = useContext(ChatContextUser);
  const handleClose = () => {
    setOrderChat(initialOrderChat);
    localStorage.removeItem('user-last-order-chat');
  };

  return (
    <div className='backdrop-blur-md absolute w-full h-full left-0 top-0 rounded-[10px] flex items-center justify-center'>
      <div className='max-w-[60%]'>
        <p className='text-2xl text-center mb-2'>Заказ успешно совершен, можете закрыть чат</p>
        <Button label='закрыть чат' onClick={handleClose} className='w-full py-[10px] rounded-[10px] justify-center' />
      </div>
    </div>
  );
};

export default PaymentChatSuccess;
