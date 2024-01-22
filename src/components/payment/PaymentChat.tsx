import Button from '../ui/Button';
import PaymentChatBody from './PaymentChatBody';
import downloadIcon from '@svgs/payment/download.svg';
import PaymentInfo from './PaymentInfo';

const PaymentChat = () => {
  return (
    <div className='px-[40px] py-10 xl:px-[55px] xl:pt-[49px] xl:pb-[38px] bg-header rounded-[10px] flex-1 max-w-[564px] min-h-full'>
      <div className='flex flex-col gap-5 h-full'>
        <PaymentInfo />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentChatBody />
        <div className='flex bg-[#1d1f1e] rounded-[10px] px-5'>
          <input
            type='text'
            placeholder='Напишите сообщение...'
            className='py-[10px] bg-transparent flex-grow placeholder:text-gray pr-1'
          />
          <img src={downloadIcon} alt='download icon' />
        </div>
        <div className='flex gap-4 items-center'>
          <Button
            label='Отменить заказ'
            className='w-full py-[10px] rounded-[10px] justify-center border border-solid border-gray bg-transparent [&_p]:text-gray'
          />
          <Button label='Оплачено' className='w-full py-[10px] rounded-[10px] justify-center' />
        </div>
      </div>
    </div>
  );
};

export default PaymentChat;
