import React from 'react';
import AboutSliderCard from './AboutSliderCard';
import Slider, { Settings } from 'react-slick';
import { SliderBtn } from '@/components/ui/SwiperBtns';
import '@styles/slider.css';

const AboutSlider: React.FC = () => {
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
    responsive: [
      {
        breakpoint: 1279.99,
        settings: {
          dots: true,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2.65,
          swipe: true,
          dots: true,
          accessibility: true,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1.62,
          swipeToSlide: false,
          centerMode: true,
          centerPadding: '60',
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.62,
          swipeToSlide: false,
          centerMode: true,
          centerPadding: '10',
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='xl:max-w-[667px] max-xl:pb-[40px]' ref={slider}>
      {new Array(6).fill(undefined).map((_, idx) => (
        <AboutSliderCard key={idx} />
      ))}
    </Slider>
  );
};

export default AboutSlider;
