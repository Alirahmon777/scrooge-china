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
};

export default Icons;
