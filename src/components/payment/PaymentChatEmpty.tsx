import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import commentIcon from '@svgs/statistics/comment-alt.svg';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
const PaymentChatEmpty = () => {
  const navigate = useNavigate();
  const isLaptop = useMediaQuery('(min-width:1024px)');
  const {
    i18n: { language: lng },
  } = useTranslation();
  const handleRedirect = () => {
    window.scroll({ top: 0 });
    navigate(`/${lng}/payment`);
  };
  return (
    <div
      className={cn('flex flex-col gap-20 max-w-[360px]', {
        'max-w-[564px] bg-header rounded-[10px] justify-center items-center': isLaptop,
      })}
    >
      <div className='flex flex-col gap-5 items-center lg:max-w-[408px]'>
        <img src={commentIcon} alt='comment icon' width={48} height={48} />
        <p className='text-gray font-medium text-center'>
          После выбора метода оплаты у вас откроется чат с модератором для перевода средств.
        </p>
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

export default PaymentChatEmpty;
