import right from '@svgs/right.svg';
import { cn } from '@/lib/utils';
import { useSwiper } from 'swiper/react';
interface ISliderBtnProps {
  customClass: string;
  slideHandler: React.MouseEventHandler<HTMLButtonElement>;
}

interface ISwiperProps {
  prev: boolean;
  customClass: string;
}

export function SliderBtn({ slideHandler, customClass }: ISliderBtnProps) {
  return (
    <button
      onClick={slideHandler}
      className={cn('rounded-[50%] p-[14px] bg-[#1D1F1E] absolute z-10 top-1/2 -translate-y-1/2', customClass)}
    >
      <img src={right} alt='arrow right' />
    </button>
  );
}

export function SwiperBtn({ prev, customClass }: ISwiperProps) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        if (prev) {
          return swiper.slidePrev();
        }
        swiper.slideNext();
      }}
      className={cn('rounded-[50%] p-[14px] bg-[#1D1F1E] absolute z-50 top-[50%] -translate-y-1/2', customClass)}
    >
      <img src={right} alt='arrow icon' />
    </button>
  );
}
