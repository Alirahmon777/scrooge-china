import { cn } from '@/lib/utils';
import DOMPurify from 'dompurify';
interface IProps {
  content: string;
  isCurrentUser: boolean;
  currentMessageBg?: string;
}

const Message = ({ content, isCurrentUser, currentMessageBg }: IProps) => {
  const sanitizedHTML = DOMPurify.sanitize(content.replace(/{new_line_br}/g, '<br />'), { ALLOWED_TAGS: ['br'] });
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
      <p dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></p>
    </div>
  );
};

export default Message;
