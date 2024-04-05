import { ChatContextUser, initialOrderChat } from '@/context/ChatContext';
import Button from '../ui/Button';
import { useContext } from 'react';

interface IProps {
  handleClose: () => void;
}
const PaymentChatSuccess = ({ handleClose }: IProps) => {
  const { setOrderChat } = useContext(ChatContextUser);
  const handleCloseWithoutRedirect = () => {
    setOrderChat(initialOrderChat);
    localStorage.removeItem('user-last-order-chat');
  };
  return (
    <div className='backdrop-blur-md absolute w-full h-full left-0 top-0 rounded-[10px] flex items-center justify-center'>
      <div className='w-[90%] sm:max-w-[60%]'>
        <p className='text-xl mobile:text-2xl text-center mb-5'>Заказ успешно совершен, можете закрыть чат</p>
        <div className='flex gap-2'>
          <Button
            label='закрыть чат'
            onClick={handleCloseWithoutRedirect}
            className='w-full py-[10px] rounded-[10px] justify-center'
          />
          <Button
            label='оставить отзыв'
            variant='outline'
            onClick={handleClose}
            className='w-full py-[10px] rounded-[10px] justify-center border-white hover:bg-white'
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentChatSuccess;
