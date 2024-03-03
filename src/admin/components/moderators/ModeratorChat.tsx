import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import downloadIcon from '@svgs/payment/download.svg';
import { useMediaQuery } from 'usehooks-ts';
import ModeratorChatInfo from './ModeratorChatInfo';
import ModeratorChatBody from './ModeratorChatBody';

const ModeratorChat = () => {
  const notTable = useMediaQuery('(min-width: 1024px)');
  return (
    <div
      className={cn('max-w-[564px] min-h-full', {
        'p-6 bg-header rounded-[10px]': notTable,
      })}
    >
      <div className='flex flex-col gap-5 h-full'>
        <ModeratorChatInfo />
        <div className='w-full h-[1px] bg-gray' />
        <ModeratorChatBody />
        <div className='flex bg-[#1d1f1e] rounded-[10px] px-5'>
          <input
            type='text'
            placeholder='Напишите сообщение...'
            className='py-[10px] bg-transparent flex-grow placeholder:text-gray pr-1'
          />
          <img src={downloadIcon} alt='download icon' />
        </div>
        <Button label='Перевод совершён закрыть чат с покупателем' className='justify-center' variant='admin' />
      </div>
    </div>
  );
};

export default ModeratorChat;
