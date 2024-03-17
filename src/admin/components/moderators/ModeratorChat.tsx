import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import downloadIcon from '@svgs/payment/download.svg';
import { useMediaQuery } from 'usehooks-ts';
import ModeratorChatInfo from './ModeratorChatInfo';
import ModeratorChatBody from './ModeratorChatBody';
import ModeratorChatEmpty from './ModeratorChatEmpty';
import { IStateOrder } from '@/types/interfaces';
import { Icons } from '../Icons';
import { ChangeEvent, FormEvent, useState } from 'react';
import { handleSimpleError } from '@/utils/handleError';
import { useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrentAdminToken } from '@/redux/features/slices/auth/authReducer';
import useWebSocket from 'react-use-websocket';
import { useAddMessageMutation } from '@/redux/features/services/admin/moderatorService';
interface IProps {
  chat: IStateOrder;
}

const ModeratorChat = ({ chat }: IProps) => {
  const [triger] = useAddMessageMutation();
  const notTable = useMediaQuery('(min-width: 1024px)');
  const token = useAppSelector(selectCurrentAdminToken);

  if (!chat.isChat) {
    return <ModeratorChatEmpty />;
  }

  const [form, setForm] = useState({ text: '', image: '' });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await triger({ id: chat.chat_id, ...form });
      setForm({ text: '', image: '' });
    } catch (error) {
      handleSimpleError(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const ws = useWebSocket(`ws://localhost/api/admin/moderator/chat/1?authorization=Bearer ${token}`, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (event) => {
      console.log('msg', event.data);
    },
    onClose: () => {
      console.log('websocket closed');
    },
  });

  console.log(ws);
  

  return (
    <div
      className={cn('max-w-[564px] min-h-full', {
        'p-6 bg-header rounded-[10px]': notTable,
      })}
    >
      <div className='flex flex-col gap-5 h-full'>
        <ModeratorChatInfo id={chat.order_id} />
        <div className='w-full h-[1px] bg-gray' />
        <ModeratorChatBody />
        <form onSubmit={handleSubmit}>
          <div className='flex bg-[#1d1f1e] items-center rounded-[10px] px-5'>
            <textarea
              placeholder='Напишите сообщение...'
              cols={30}
              rows={10}
              value={form.text}
              name='text'
              onChange={handleChange}
              className='py-[10px] bg-transparent min-h-[44px] max-h-[44px] resize-none flex-grow placeholder:text-gray pr-1 live-scroll'
            />
            <input
              type='file'
              className='hidden'
              name='image'
              id='image-input'
              value={form.image}
              onChange={handleChange}
            />

            <div className='flex items-center gap-2'>
              <label htmlFor='image-input' className='text-gray cursor-pointer'>
                <Icons.imageIcon />
              </label>
              <button type='submit'>
                <img src={downloadIcon} alt='download icon' />
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
