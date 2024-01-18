import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/swiper.css';
import AboutSliderCard from './AboutSliderCard';
import { SwiperOptions } from 'swiper/types';

const AboutSwiper = () => {
  return (
    <div className='overflow-hidden'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, Mousewheel, Keyboard]}
        spaceBetween={15}
        speed={600}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        loop
        centeredSlides
        pagination={{ clickable: true }}
        className='!pb-[40px] tablet:!pb-[60px]'
        keyboard
        breakpoints={breakpoints}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
      >
        {new Array(12).fill(undefined).map((_, idx) => (
          <SwiperSlide key={idx}>
            <AboutSliderCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSwiper;

const breakpoints: {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
} = {
  320: {
    spaceBetween: 15,
    pagination: { dynamicBullets: true },
    navigation: false,
  },
  425: {
    spaceBetween: 20,
    slidesPerGroup: 1,
    pagination: { dynamicBullets: true },
  },
  960: {
    spaceBetween: 20,
    slidesPerGroup: 2,
    mousewheel: true,
  },
};
