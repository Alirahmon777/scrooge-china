import { cn } from '@/lib/utils';
import playIcon from '@svgs/play.svg';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}
const PlayButton = ({ label, className, ...props }: IProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <button className='rounded-full w-[52px] h-[52px] flex items-center justify-center bg-success'>
        <img src={playIcon} alt={label ?? 'play icon'} className='!w-[17px] ml-1' />
      </button>
      {label && <p className='font-bold'>{label}</p>}
    </div>
  );
};

export default PlayButton;
