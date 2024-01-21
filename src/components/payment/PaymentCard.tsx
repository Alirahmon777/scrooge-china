import Button from '../ui/Button';
import PaymentCalc from './PaymentCalc';
import PaymentMethods from './PaymentMethods';

const PaymentCard = () => {
  return (
    <div className='px-[55px] pt-[49px] pb-[38px] bg-header rounded-[10px] max-w-[564px]'>
      <div className='flex flex-col gap-[50px]'>
        <PaymentCalc />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentMethods />
        <Button label='Пополнить' className='w-full py-[10px] rounded-[10px] justify-center' />
      </div>
    </div>
  );
};

export default PaymentCard;
