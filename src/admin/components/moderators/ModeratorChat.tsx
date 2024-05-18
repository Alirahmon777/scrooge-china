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
import {
  useAddMessageMutation,
  useCancelOrderMutation,
  useGetModeratorOrderQuery,
  useSuccessOrderMutation,
} from '@/redux/features/services/admin/moderatorService';
import { ChatContext, initialOrderChatAdmin } from '@/admin/context/ChatContext';
import { toastError, toastSuccess } from '@/utils/toast/toast';
import { useTranslation } from 'react-i18next';

const ModeratorChat = () => {
  const [form, setForm] = useState<IMessageBody>({ text: '', image: null });
  const { t } = useTranslation();
  const { orderChat, setOrderChat } = useContext(ChatContext);
  const [triger] = useAddMessageMutation();
  const [successTriger] = useSuccessOrderMutation();
  const [cancelTrigger] = useCancelOrderMutation();
  const notTable = useMediaQuery('(min-width: 1024px)');
  const { data: order } = useGetModeratorOrderQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data?.find((order) => order.id == orderChat.order_id),
      isSuccess,
    }),
    skip: !orderChat.order_id,
  });

  if (!orderChat.isChat || orderChat.status == '"Cancelled"' || orderChat.status == '"Succeeded"') {
    return <ModeratorChatEmpty />;
  }

  const sendMessage = async () => {
    try {
      if (!form.text && !form.image) {
        toastError("text and image can't be empty");
        return;
      }
      await triger({ id: orderChat.chat_id, text: form.text.trim(), image: form.image });
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement | HTMLTextAreaElement>) => {
    if (isClosedChat && e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleSuccess = async () => {
    try {
      await successTriger(orderChat.order_id);
      localStorage.setItem('moderator-last-order-chat', JSON.stringify({ ...orderChat, status: '"Succeeded"' }));
      setOrderChat({ ...orderChat, status: '"Succeeded"' });
      toastSuccess('заказ успешно совершен');
    } catch (err) {
      handleSimpleError(err);
    }
  };

  const handleCancel = async () => {
    try {
      await triger({ id: orderChat.chat_id, text: t('automessage-cancelled', { ns: 'chat' }), image: form.image });
      await cancelTrigger(orderChat.order_id);
      localStorage.removeItem('user-last-order-chat');
      setOrderChat(initialOrderChatAdmin);
      toastSuccess('заказ успешно отменен!');
    } catch (error) {
      handleSimpleError(error);
    }
  };

  const isClosedChat = orderChat.status == '"Created"' || orderChat.status == '"Maybepayed"';

  return (
    <div
      className={cn('max-w-[564px] min-h-full', {
        'p-6 bg-header rounded-[10px]': notTable,
        'w-full': !notTable,
      })}
      onKeyDown={handleKeyDown}
    >
      <div className='flex flex-col gap-5 h-full'>
        <ModeratorChatInfo order={order} />
        <div className='w-full h-[1px] bg-gray' />
        <ModeratorChatBody />
        <form
          onSubmit={handleSubmit}
          className={cn({
            'pointer-events-none': !isClosedChat,
          })}
        >
          <div className='flex bg-[#1d1f1e] items-center rounded-[10px] px-5'>
            <textarea
              placeholder={isClosedChat ? 'Напишите сообщение...' : 'чат завершён'}
              cols={30}
              rows={10}
              value={form.text}
              autoFocus={isClosedChat}
              disabled={!isClosedChat}
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

        <div className='flex gap-2 mobile:gap-4 max-320:[&_button]:font-medium items-center'>
          <Button label='Отменить заказ' variant='outline' className='w-auto px-2' onClick={handleCancel} />
          <Button
            label='Перевод совершён закрыть чат с покупателем'
            onClick={handleSuccess}
            className='justify-center w-auto px-2 flex-1'
            variant='admin'
          />
        </div>
      </div>
    </div>
  );
};

export default ModeratorChat;
