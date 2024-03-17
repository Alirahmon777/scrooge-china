import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import commentIcon from '@svgs/statistics/comment-alt.svg';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
const ModeratorChatEmpty = () => {
  const navigate = useNavigate();
  const isLaptop = useMediaQuery('(min-width:1024px)');

  const handleRedirect = () => {
    window.scroll({ top: 0 });
    navigate(`/moderator/chat`);
  };
  return (
    <div
      className={cn('flex flex-col gap-20 max-w-[360px]', {
        'max-w-[564px] h-[680px] bg-header rounded-[10px] justify-center items-center': isLaptop,
      })}
    >
      <div className='flex flex-col gap-5 items-center lg:max-w-[408px]'>
        <img src={commentIcon} alt='comment icon' width={48} height={48} />
        <p className='text-gray font-medium text-center'>После выбора заказа у вас откроется чат с клиентом.</p>
      </div>
      {!isLaptop && (
        <Button
          label='Вернуться к оплате'
          className='w-full py-[10px] rounded-[10px] justify-center'
          onClick={handleRedirect}
        />
      )}
    </div>
  );
};

export default ModeratorChatEmpty;
