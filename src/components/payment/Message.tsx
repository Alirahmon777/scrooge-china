import { cn } from '@/lib/utils';

interface IProps {
  content: string;
  isCurrentUser: boolean;
}

const Message = ({ content, isCurrentUser }: IProps) => {
  return <div className={cn('p-[10px] rounded-[10px] bg-[#1D1F1E] max-w-[345px]', { 'bg-[#182B21]': isCurrentUser })}>{content}</div>;
};

export default Message;
