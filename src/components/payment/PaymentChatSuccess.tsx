import { useContext } from 'react';
import Button from '../ui/Button';
import { ChatContextUser, initialOrderChat } from '@/context/ChatContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PaymentChatSuccess = () => {
  const { setOrderChat } = useContext(ChatContextUser);
  const navigate = useNavigate();
  const {
    i18n: { language },
  } = useTranslation();
  const handleClose = () => {
    setOrderChat(initialOrderChat);
    localStorage.removeItem('user-last-order-chat');
    
    navigate(`/${language}/reviews?modal=true`);
  };

  return (
    <div className='backdrop-blur-md absolute w-full h-full left-0 top-0 rounded-[10px] flex items-center justify-center'>
      <div className='w-[90%] sm:max-w-[60%]'>
        <p className='text-xl mobile:text-2xl text-center mb-5'>Заказ успешно совершен, можете закрыть чат</p>
        <Button
          label='закрыть чат и оставить отзыв'
          onClick={handleClose}
          className='w-full py-[10px] rounded-[10px] justify-center'
        />
      </div>
    </div>
  );
};

export default PaymentChatSuccess;
