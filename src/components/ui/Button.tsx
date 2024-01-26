import { cn } from '@/lib/utils';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  leftIcon?: string;
  LeftSvg?: React.FC;
  rightIcon?: string;
  label?: string;
  imageClass?: string;
  variant?: 'outline' | 'fill' | 'ghost';
}

const Button = ({ leftIcon, rightIcon, label, className, imageClass, LeftSvg, variant = 'fill', ...props }: IProps) => {
  return (
    <button
      className={cn(
        'bg-[#52EA73] flex gap-1 items-center font-bold',
        {
          'w-full py-[10px] rounded-[10px] justify-center border border-solid border-[#1D1F1E] bg-transparent [&_p]:text-gray [&_*]:transition-all hover:bg-[#1D1F1E] transition-all':
            variant == 'outline',
        },
        { 'bg-transparent gap-[10px] items-center [&_p]:text-gray font-medium': variant == 'ghost' },
        className
      )}
      {...props}
    >
      {LeftSvg && <LeftSvg />}
      {leftIcon && <img src={leftIcon} alt={'button left icon'} className={imageClass} />}
      {label && <p className='text-black'>{label}</p>}
      {rightIcon && <img src={rightIcon} alt={'button right icon'} className={imageClass} />}
    </button>
  );
};

export default Button;
