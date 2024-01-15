import { CustomArrowProps } from 'react-slick';
import right from '@svgs/right.svg';

export function SampleNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='rounded-[50%] p-[14px] bg-[#1D1F1E] absolute z-10 top-1/2 -translate-y-1/2 right-[64px]'
    >
      <img src={right} alt='arrow right' />
    </button>
  );
}

export function SamplePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='rounded-[50%] p-[14px] bg-[#1D1F1E] absolute z-10 top-1/2 -translate-y-1/2 -left-[30px]'
    >
      <img src={right} alt='arrow left' className='rotate-180' />
    </button>
  );
}
