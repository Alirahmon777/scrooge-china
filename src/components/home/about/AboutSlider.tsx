import React from 'react';
import AboutSliderCard from './AboutSliderCard';
import Slider, { Settings } from 'react-slick';
import { SliderBtn } from '@/components/ui/SwiperBtns';
import '@styles/slider.css';
import { IReview } from '@/types/interfaces';

interface IProps {
  data?: IReview[];
  isSuccess: boolean;
  isLoading: boolean;
}

const AboutSlider: React.FC<IProps> = ({ data, isSuccess }) => {
  const slider = React.useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = React.useState<number>(1.78);

  const settings: Settings = {
    dots: false,
    initialSlide: 1.78,
    slidesToShow: 2.25,
    slidesToScroll: 2,
    swipeToSlide: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplaySpeed: 3500,
    autoplay: true,
    afterChange: (crnt) => {
      setCurrentSlide(crnt);
    },
    nextArrow: (
      <SliderBtn
        customClass='right-[11%] max-xl:hidden'
        slideHandler={() => slider.current?.slickGoTo(currentSlide + 2)}
      />
    ),
    prevArrow: (
      <SliderBtn
        customClass='-left-[30px] rotate-180 max-xl:hidden'
        slideHandler={() => slider.current?.slickGoTo(currentSlide - 2)}
      />
    ),
    dotsClass: 'slider-dots',
    customPaging: () => {
      return <button></button>;
    },
  };

  return (
    isSuccess && (
      <Slider {...settings} className='xl:max-w-[667px] max-xl:pb-[40px]' ref={slider}>
        {data?.map((items, idx) => (
          <AboutSliderCard {...items} key={idx} />
        ))}
      </Slider>
    )
  );
};

export default AboutSlider;
