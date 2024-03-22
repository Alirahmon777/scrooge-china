import Button from '../../components/ui/Button';
import PaymentChatBody from './PaymentChatBody';
import downloadIcon from '@svgs/payment/download.svg';
import PaymentInfo from './PaymentInfo';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import PaymentChatEmpty from './PaymentChatEmpty';
import { ChatContextUser } from '@/context/ChatContext';
import { IMessageBody } from '@/types/interfaces';
import { toastError } from '@/utils/toast/toast';
import { useAddMessageMutation } from '@/redux/features/services/user/userService';
import { handleSimpleError } from '@/utils/handleError';
import { Icons } from '@/admin/components/Icons';
import { useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrentUser } from '@/redux/features/slices/auth/authReducer';

const PaymentChat = () => {
  const [form, setForm] = useState<IMessageBody>({ text: '' });
  const user = useAppSelector(selectCurrentUser);
  const { orderChat } = useContext(ChatContextUser);
  const notTablet = useMediaQuery('(min-width: 1024px)');
  const [triger] = useAddMessageMutation();

  if ((!orderChat.isChat && !user) || (!user && orderChat.isChat) || (user && !orderChat.isChat)) {
    return <PaymentChatEmpty />;
  }

  const sendMessage = async () => {
    try {
      if (!form.text && !form.image) {
        toastError("text and image can't be empty");
        return;
      }
      await triger({ id: orderChat.chat_id, ...form });
      setForm({ text: '' });
    } catch (error) {
      handleSimpleError(error);
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = ({ target: { name, files } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : '' }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div
      className={cn('max-w-[564px] min-h-full', {
        'p-6 xl:p-6 xl:pb-[38px] bg-header rounded-[10px]': notTablet,
        'w-full': !notTablet,
      })}
      onKeyDown={handleKeyDown}
    >
      <div className='flex flex-col gap-5 h-full'>
        <PaymentInfo id={orderChat.order_id} />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentChatBody />
        <form onSubmit={handleSubmit}>
          <div className='flex bg-[#1d1f1e] rounded-[10px] px-5'>
            <textarea
              placeholder='Напишите сообщение...'
              cols={30}
              rows={10}
              value={form.text}
              name='text'
              onChange={handleChange}
              className='py-[10px] bg-transparent min-h-[44px] max-h-[44px] resize-none flex-grow placeholder:text-gray pr-1 live-scroll'
            />
            <input type='file' className='hidden' name='image' id='image-input' onChange={handleChangeFile} />

            <div className='flex items-center gap-2'>
              <label
                htmlFor='image-input'
                className={cn('text-gray flex cursor-pointer', {
                  'border-gray border-solid pl-0.5 border-l': form.image?.name,
                })}
              >
                {form.image?.name && <p className='w-[80px] truncate'>{form.image?.name}</p>}
                <Icons.imageIcon />
              </label>
              <button type='submit' title='send message. ctrl + enter'>
                <img src={downloadIcon} alt='download icon' width={24} height={24} />
              </button>
            </div>
          </div>
        </form>
        <div className='flex gap-2 mobile:gap-4 max-320:[&_button]:font-medium items-center'>
          <Button label='Отменить заказ' variant='outline' />
          <Button label='Оплачено' className='w-full py-[10px] rounded-[10px] justify-center' />
        </div>
      </div>
    </div>
  );
};

export default PaymentChat;
