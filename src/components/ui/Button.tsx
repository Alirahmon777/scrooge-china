import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  leftIcon?: string;
  LeftSvg?: React.JSX.Element;
  loadingElement?: React.JSX.Element;
  rightIcon?: string;
  label?: string;
  imageClass?: string;
  fullImg?: string;
  variant?: 'outline' | 'fill' | 'ghost' | 'admin';
}

const Button = ({
  leftIcon,
  rightIcon,
  label,
  className,
  imageClass,
  LeftSvg,
  loadingElement,
  fullImg,
  variant = 'fill',
  ...props
}: IProps) => {
  return (
    <button
      className={cn(
        'bg-[#52EA73] flex gap-1 items-center font-bold',
        {
          'w-full py-[10px] rounded-[10px] justify-center border border-solid border-[#1D1F1E] bg-transparent [&_p]:text-gray [&_*]:transition-all hover:bg-[#1D1F1E] transition-all':
            variant == 'outline',
        },
        { 'bg-transparent gap-[10px] items-center [&_p]:text-gray font-medium': variant == 'ghost' },
        { 'bg-[#EA5252] px-[30px] py-[10px] rounded-[10px] [&_p]:text-white font-normal': variant == 'admin' },
        { 'relative p-0 bg-gray overflow-hidden': !!fullImg },
        className
      )}
      {...props}
    >
      {fullImg && <img src={fullImg} className='absolute z-50 top-0 left-0 wh-full-important' />}
      {LeftSvg && LeftSvg}
      {loadingElement && loadingElement}
      {leftIcon && <img src={leftIcon} alt={'button left icon'} width={24} height={24} className={imageClass} />}
      {label && <p className='text-black'>{label}</p>}
      {rightIcon && <img src={rightIcon} alt={'button right icon'} className={imageClass} />}
    </button>
  );
};

export default Button;
