import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import leftIcon from '@svgs/payment/arrow-left.svg';
import ModeratorChat from '@/admin/components/moderators/ModeratorChat';

const ModeratorChatPage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/moderator`);
  };
  return (
    <div className='container  flex flex-col items-center justify-center'>
      <div className='flex items-start w-full my-[15px] sm:my-5 max-w-[564px]'>
        <Button leftIcon={leftIcon} label='Назад' variant='ghost' onClick={handleRedirect} />
      </div>
      <ModeratorChat />
    </div>
  );
};

export default ModeratorChatPage;
