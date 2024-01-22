import { useMediaQuery } from 'usehooks-ts';
import Button from '../ui/Button';
import PaymentCalc from './PaymentCalc';
import PaymentMethods from './PaymentMethods';

const PaymentCard = () => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  return (
    <div className='p-0 lg:px-[40px] lg:py-10 xl:px-[55px] xl:pt-[49px] xl:pb-[38px] lg:bg-header rounded-[10px] flex-1 max-w-[564px]'>
      <div className='flex flex-col gap-5 lg:gap-[50px]'>
        <PaymentCalc />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentMethods />
        <Button label='Пополнить' className='w-full py-[10px] rounded-[10px] justify-center' />
        {!notTablet && (
          <Button
            label='Чат с модератором'
            className='w-full py-[10px] rounded-[10px] justify-center border border-solid border-gray bg-transparent [&_p]:text-gray'
          />
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
