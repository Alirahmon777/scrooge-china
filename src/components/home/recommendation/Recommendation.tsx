import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecommendationCard from './RecommendationCard';
import { SwiperBtn } from '@/components/ui/SwiperBtns';
import { useMediaQuery } from 'usehooks-ts';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/swiper.css';

const Recommendation = () => {
  const notMobile = useMediaQuery('(min-width: 820px)');
  return (
    <section className='mt-[50px] tablet:mt-[150px]'>
      <div className='container max-w-[1240px] flex flex-col gap-[30px] tablet:gap-[60px]'>
        <h2 className='text-center font-bold leading-[120%]'>Нас Рекомендуют</h2>
        <div className='overflow-hidden'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
            spaceBetween={120}
            speed={600}
            slidesPerView={'auto'}
            loop
            centeredSlides
            pagination={{ clickable: true }}
            className='!pb-[40px] tablet:!pb-[60px]'
            effect='coverflow'
            breakpoints={breakpoints}
            autoplay={{
              disableOnInteraction: false,
            }}
          >
            {new Array(5).fill(undefined).map((_, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }: { isActive: boolean }) => (
                  <>
                    {isActive && notMobile && (
                      <>
                        <SwiperBtn customClass='left-[-10px] lg:left-[-25px] rotate-180' prev={true} />
                        <SwiperBtn customClass='right-[-10px] lg:right-[-25px]' prev={false} />
                      </>
                    )}
                    <RecommendationCard />
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;

const breakpoints = {
  320: {
    effect: 'slide',
    spaceBetween: 15,
    pagination: { dynamicBullets: true },
    navigation: false,
  },

  425: {
    effect: 'slide',
    spaceBetween: 40,
  },

  820: {
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      modifier: 1,
      depth: 600,
      stretch: 0,
      slideShadows: true,
    },
  },
  1000: {
    coverflowEffect: {
      rotate: 20,
      stretch: -130,
      depth: 1450,
      modifier: 1,
    },
  },
};
