import { cn } from '@/lib/utils';
import playIcon from '@svgs/play.svg';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}
const PlayButton = ({ label, className, ...props }: IProps) => {
  return (
    <button className={cn('flex items-center gap-2', className)} {...props}>
      <div className='rounded-full w-[52px] h-[52px] flex items-center justify-center bg-success'>
        <img src={playIcon} alt={label ?? 'play icon'} className='!w-[17px] ml-1' />
      </div>
      {label && <p className='font-bold'>{label}</p>}
    </button>
  );
};

export default PlayButton;
