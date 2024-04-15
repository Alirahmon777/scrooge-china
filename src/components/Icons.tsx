import { IconProps } from '@/admin/components/Icons';
import { cn } from '@/lib/utils';

interface IProps extends IconProps {
  isOpen?: boolean;
  stopOffset?: number;
}

const Icons = {
  arrowDown: ({ isOpen, ...props }: IProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn({ 'rotate-180 !stroke-success': isOpen }, 'transition-all w-5 xl:w-6 stroke-[#68716c]')}
      {...props}
    >
      <g id='chevron-down'>
        <path id='Vector' d='M6 9L12 15L18 9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  plusIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={24}
      height={24}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
    </svg>
  ),
  starIcon: (props: IconProps) => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M19.4288 23.5L12.0005 17.8213L4.57219 23.5L7.42433 14.329L0 8.68651H9.16626L12.0005 -0.5L14.8347 8.68651H24L16.5767 14.329L19.4288 23.5Z'
        fill='#68716C'
      />
    </svg>
  ),
  starIconHalf: ({ stopOffset, ...props }: IProps) => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <defs>
        <linearGradient id='halfGreenHalfYellow' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset={stopOffset + '%'} style={{ stopColor: '#52EA73' }} />
          <stop offset={stopOffset + '%'} style={{ stopColor: '#68716C' }} />
        </linearGradient>
      </defs>
      <path
        d='M19.4288 23.5L12.0005 17.8213L4.57219 23.5L7.42433 14.329L0 8.68651H9.16626L12.0005 -0.5L14.8347 8.68651H24L16.5767 14.329L19.4288 23.5Z'
        fill='url(#halfGreenHalfYellow)'
      />
    </svg>
  ),
  trashIcon: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
      />
    </svg>
  ),
  blockIcon: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
      />
    </svg>
  ),
};

export default Icons;
