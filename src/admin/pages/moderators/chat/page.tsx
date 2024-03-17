import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import leftIcon from '@svgs/payment/arrow-left.svg';
import ModeratorChat from '@/admin/components/moderators/ModeratorChat';
import { useState } from 'react';
import { IStateOrder } from '@/types/interfaces';

const lastOrder = JSON.parse(localStorage.getItem('moderator-last-order-chat') || '{}') as IStateOrder;
const ModeratorChatPage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/moderator`);
  };

  const [chat, _] = useState<IStateOrder>({
    isChat: lastOrder?.isChat || false,
    order_id: lastOrder?.order_id || '',
    chat_id: lastOrder?.chat_id || '',
  });

  return (
    <div className='container  flex flex-col items-center justify-center'>
      <div className='flex items-start w-full my-[15px] sm:my-5 max-w-[564px]'>
        <Button leftIcon={leftIcon} label='Назад' variant='ghost' onClick={handleRedirect} />
      </div>
      <ModeratorChat chat={chat} />
    </div>
  );
};

export default ModeratorChatPage;
