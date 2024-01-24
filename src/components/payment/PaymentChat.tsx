import Button from '../ui/Button';
import PaymentChatBody from './PaymentChatBody';
import downloadIcon from '@svgs/payment/download.svg';
import PaymentInfo from './PaymentInfo';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import PaymentChatEmpty from './PaymentChatEmpty';

const PaymentChat = () => {
  const [isChat, _] = useState(true);
  const notTable = useMediaQuery('(min-width: 1024px)');

  if (!isChat) {
    return <PaymentChatEmpty />;
  }

  return (
    <div
      className={cn('max-w-[564px] min-h-full', {
        'px-[40px] py-10 xl:px-[55px] xl:pt-[49px] xl:pb-[38px] bg-header rounded-[10px]': notTable,
      })}
    >
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
        <div className='flex gap-2 mobile:gap-4 max-320:[&_button]:font-medium items-center'>
          <Button label='Отменить заказ' variant='outline' />
          <Button label='Оплачено' className='w-full py-[10px] rounded-[10px] justify-center' />
        </div>
      </div>
    </div>
  );
};

export default PaymentChat;
