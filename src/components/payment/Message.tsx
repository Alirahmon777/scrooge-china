import { cn } from '@/lib/utils';

interface IProps {
  content: string;
  isCurrentUser: boolean;
}

const Message = ({ content, isCurrentUser }: IProps) => {
  return (
    <div
      className={cn('p-[10px] rounded-[10px] bg-[#1D1F1E] mobile:max-w-[80%] sm:max-w-[70%] w-auto', {
        'bg-[#182B21]': isCurrentUser,
      })}
    >
      <p>{content}</p>
    </div>
  );
};

export default Message;
