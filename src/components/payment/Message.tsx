import { $admin, $user } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { handleSimpleError } from '@/utils/handleError';
import { useEffect, useState } from 'react';

interface IProps {
  content: string;
  isCurrentUser: boolean;
  currentMessageBg?: string;
  img_id?: string;
  chat_id?: string;
  sender: string;
}

const Message = ({ content, isCurrentUser, currentMessageBg, img_id, chat_id, sender }: IProps) => {
  const [img, setImg] = useState('');

  const getImg = async () => {
    try {
      if (!img_id) return;
      if (sender == 'Moderator') {
        const res = await $admin.get(`/admin/moderator/chat/1/image/${img_id}`, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'image/*',
          },
        });
        const imageUrl = URL.createObjectURL(res.data);
        setImg(imageUrl);
        return;
      }
      if (sender == 'User') {
        const res = await $user.get(`/user/chat/1/image/${img_id}`, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'image/*',
          },
        });
        const imageUrl = URL.createObjectURL(res.data);
        setImg(imageUrl);
        return;
      }
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    getImg();
  }, [img_id, chat_id]);

  return (
    <div
      className={cn(
        'p-[10px] rounded-[10px] bg-[#1D1F1E] mobile:max-w-[80%] sm:max-w-[70%] w-auto',
        {
          'bg-[#182B21] ': isCurrentUser,
        },
        isCurrentUser && currentMessageBg ? currentMessageBg : null
      )}
    >
      {img_id && <img src={img} alt='' className='max-w-[150px] lg:max-w-[200px] pb-1 border-b border-gray' />}
      <div className='whitespace-pre-wrap'>{content}</div>
    </div>
  );
};

export default Message;
