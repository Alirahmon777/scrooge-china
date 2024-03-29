import React from 'react';
import AboutSliderCard from './AboutSliderCard';
import Slider, { Settings } from 'react-slick';
import { SliderBtn } from '@/components/ui/SwiperBtns';
import '@styles/slider.css';
import { IReview } from '@/types/interfaces';
import { slidesToShowScroll } from '@/utils/slidesToShow';

interface IProps {
  data?: IReview[];
  isSuccess: boolean;
  isLoading: boolean;
}

const AboutSlider: React.FC<IProps> = ({ data, isSuccess }) => {
  const slider = React.useRef<Slider>(null);
  const { slidesScroll, slidesShow, initialSlide } = slidesToShowScroll(data?.length as number);
  const [currentSlide, setCurrentSlide] = React.useState<number>(initialSlide);

  const settings: Settings = {
    dots: false,
    initialSlide,
    slidesToShow: slidesShow,
    slidesToScroll: slidesScroll,
    swipeToSlide: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: slidesShow > 2,
    afterChange: (crnt) => {
      setCurrentSlide(crnt);
    },
    nextArrow: (
      <SliderBtn
        customClass='right-[11%] max-xl:hidden'
        slideHandler={() => slider.current?.slickGoTo(currentSlide + slidesScroll)}
      />
    ),
    prevArrow: (
      <SliderBtn
        customClass='-left-[30px] rotate-180 max-xl:hidden'
        slideHandler={() => slider.current?.slickGoTo(currentSlide - slidesScroll)}
      />
    ),
    dotsClass: 'slider-dots',
    customPaging: () => {
      return <button></button>;
    },
  };

  return (
    isSuccess &&
    data?.length && (
      <Slider {...settings} className='xl:max-w-[667px] max-xl:pb-[40px]' ref={slider}>
        {data?.map((items, idx) => (
          <AboutSliderCard {...items} key={idx} />
        ))}
      </Slider>
    )
  );
};

export default AboutSlider;
