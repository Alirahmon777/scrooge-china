import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/swiper.css';

import RecommendationCard from './RecommendationCard';
import { SwiperBtn } from '@/components/ui/SwiperBtns';

const Recommendation = () => {
  return (
    <section className='mt-[150px]'>
      <div className='container max-w-[1240px] flex flex-col gap-[60px]'>
        <h2 className='text-center text-6xl font-bold'>Нас Рекомендуют</h2>
        <div className='overflow-hidden'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
            spaceBetween={120}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={'auto'}
            loop
            effect='coverflow'
            centeredSlides
            pagination={{ clickable: true }}
            className='!pb-[60px]'
            coverflowEffect={{
              rotate: 20,
              stretch: -130,
              depth: 1450,
              modifier: 1,
              slideShadows: true,
            }}
          >
            <SwiperBtn customClass='left-[200px] rotate-180' prev={true} />
            <SwiperBtn customClass='right-[200px]' prev={false} />
            <SwiperSlide>
              <RecommendationCard />
            </SwiperSlide>
            <SwiperSlide>
              <RecommendationCard />
            </SwiperSlide>
            <SwiperSlide>
              <RecommendationCard />
            </SwiperSlide>
            <SwiperSlide>
              <RecommendationCard />
            </SwiperSlide>
            <SwiperSlide>
              <RecommendationCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
