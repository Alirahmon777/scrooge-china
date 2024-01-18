import Button from '@/components/ui/Button';
import AboutDesktopSlider from './AboutSlider';
import AboutSwiper from './AboutSwiper';
import { useMediaQuery } from 'usehooks-ts';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
  const desktop = useMediaQuery('(min-width: 1280px)');
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <section className='max-xl:mt-[50px] mt-[120px] overflow-hidden relative'>
      <div className='container flex items-center justify-between max-xl:flex-col gap-[30px]'>
        <div className='flex flex-col max-xl:gap-[15px] gap-[30px] max-xl:text-center max-xl:items-center items-start max-sm:max-w-none max-tablet:max-w-[80%] tablet:max-w-[543px]'>
          <h2 className='font-bold leading-[120%]'>Что о нас пишут наши клиенты</h2>
          <p className='max-mobile:text-xl text-2xl text-gray mb-[10px]'>
            Вы сэкономите много времени используя на сайт. Пополнить сайт buff.163 стало на много проще.
          </p>
          <Button
            label='Посмотреть все отзывы'
            className='py-[14px] px-[24px] rounded-[10px]'
            onClick={() => {
              window.scrollTo({ top: 0 });
              navigate(`/${i18n.language}/reviews`);
            }}
          />
        </div>
        <div className='max-xl:static max-xl:w-full absolute right-0 z-10'>
          <div className='relative overflow-hidden xl:pl-[37px]'>
            {desktop && <AboutDesktopSlider />}
            {!desktop && <AboutSwiper />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
