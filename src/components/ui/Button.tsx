import { cn } from '@/lib/utils';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  leftIcon?: string;
  rightIcon?: string;
  label?: string;
  imageClass?: string;
}

const Button = ({ leftIcon, rightIcon, label, className, imageClass, ...props }: IProps) => {
  return (
    <button className={cn('bg-[#52EA73] flex gap-1 items-center font-bold', className)} {...props}>
      {leftIcon && <img src={leftIcon} alt={'button left icon'} className={imageClass} />}
      {label && <p className='text-black'>{label}</p>}
      {rightIcon && <img src={rightIcon} alt={'button right icon'} className={imageClass} />}
    </button>
  );
};

export default Button;
