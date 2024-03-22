import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import downloadIcon from '@svgs/payment/download.svg';
import { useMediaQuery } from 'usehooks-ts';
import ModeratorChatInfo from './ModeratorChatInfo';
import ModeratorChatBody from './ModeratorChatBody';
import ModeratorChatEmpty from './ModeratorChatEmpty';
import { IMessageBody } from '@/types/interfaces';
import { Icons } from '../Icons';
import { handleSimpleError } from '@/utils/handleError';
import { useAddMessageMutation } from '@/redux/features/services/admin/moderatorService';
import { ChatContext } from '@/admin/context/ChatContext';
import { toastError } from '@/utils/toast/toast';

const ModeratorChat = () => {
  const [form, setForm] = useState<IMessageBody>({ text: '', image: null });
  const { orderChat } = useContext(ChatContext);
  const [triger] = useAddMessageMutation();
  const notTable = useMediaQuery('(min-width: 1024px)');

  if (!orderChat.isChat) {
    return <ModeratorChatEmpty />;
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
        'p-6 bg-header rounded-[10px]': notTable,
        'w-full': !notTable,
      })}
      onKeyDown={handleKeyDown}
    >
      <div className='flex flex-col gap-5 h-full'>
        <ModeratorChatInfo id={orderChat.order_id} />
        <div className='w-full h-[1px] bg-gray' />
        <ModeratorChatBody />
        <form onSubmit={handleSubmit}>
          <div className='flex bg-[#1d1f1e] items-center rounded-[10px] px-5'>
            <textarea
              placeholder='Напишите сообщение...'
              cols={30}
              rows={10}
              value={form.text}
              autoFocus
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
              <button type='submit' title='send message. ctrl + enter' className='min-max-24'>
                <img src={downloadIcon} alt='download icon' width={24} height={24} />
              </button>
            </div>
          </div>
        </form>
        <Button label='Перевод совершён закрыть чат с покупателем' className='justify-center' variant='admin' />
      </div>
    </div>
  );
};

export default ModeratorChat;
