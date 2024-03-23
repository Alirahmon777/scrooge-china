import PaymentChat from '@/components/payment/PaymentChat';
import Button from '@/components/ui/Button';
import Seo from '@/layout/seo/Seo';
import leftIcon from '@svgs/payment/arrow-left.svg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const ChatPage = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/${language}/payment`);
  };
  return (
    <Seo metaTitle='Scrooge China | Payment Chat' hasChat>
      <section className='mb-10'>
        <div className='container flex flex-col items-center justify-center'>
          <div className='flex items-start w-full my-[15px] sm:my-5 max-w-[564px]'>
            <Button leftIcon={leftIcon} label='Назад' variant='ghost' onClick={handleRedirect} />
          </div>

          <PaymentChat />
        </div>
      </section>
    </Seo>
  );
};

export default ChatPage;
