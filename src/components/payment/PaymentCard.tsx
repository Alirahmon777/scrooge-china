import { useMediaQuery } from 'usehooks-ts';
import Button from '../ui/Button';
import PaymentCalc from './PaymentCalc';
import PaymentMethods from './PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PaymentCard = () => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/${language}/payment-chat`);
  };
  return (
    <div className='p-0 lg:px-[40px] lg:py-10 xl:px-[55px] xl:pt-[49px] xl:pb-[38px] lg:bg-header rounded-[10px] max-w-[564px]'>
      <div className='flex flex-col gap-5 lg:gap-[50px]'>
        <PaymentCalc />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentMethods />
        <Button label='Пополнить' className='w-full py-[10px] rounded-[10px] justify-center' />
        {!notTablet && <Button label='Чат с модератором' variant='outline' onClick={handleRedirect} />}
      </div>
    </div>
  );
};

export default PaymentCard;
