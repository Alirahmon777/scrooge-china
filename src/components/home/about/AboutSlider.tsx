import React from 'react';
import AboutSliderCard from './AboutSliderCard';
import Slider, { Settings } from 'react-slick';
import { SliderBtn } from '@/components/ui/SwiperBtns';
import '@styles/slider.css';

const AboutSlider: React.FC = () => {
  const slider = React.useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 1.78,
    slidesToShow: 2.25,
    slidesToScroll: 1,
    nextArrow: <SliderBtn customClass='right-[64px]' />,
    prevArrow: <SliderBtn customClass='-left-[30px] rotate-180' />,
  };

  return (
    <Slider {...settings} className='max-w-[667px]' ref={slider}>
      {new Array(12).fill(undefined).map((_, idx) => (
        <AboutSliderCard key={idx} />
      ))}
    </Slider>
  );
};

export default AboutSlider;
