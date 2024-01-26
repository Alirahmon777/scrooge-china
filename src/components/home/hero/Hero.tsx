import Button from '@/components/ui/Button';
import PlayButton from '@/components/ui/PlayButton';
import market from '@svgs/market.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <section className='base:mt-5 tablet:mt-[73px]'>
      <div className='container flex flex-col gap-5 text-center items-center justify-between tablet:flex-row  tablet:text-start'>
        <div className='tablet:max-w-[55%] flex flex-col gap-[15px] tablet:gap-[30px] tablet:items-start items-stretch'>
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='font-bold [&_span]:text-success leading-[120%] text-wrap'
          >
            <span>Пополни</span> свой аккаунт buff.163 <span>за 5 минут.</span>
          </motion.h1>
          <motion.p
            className='max-mobile:text-xl text-2xl mb-[10px] text-gray text-wrap'
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.1 }}
          >
            Пополни свой аккаунт buff163 и купи скины CSGO, Dota 2, RUST, TF2 на 30% дешевле чем в Steam.
          </motion.p>
          <motion.div
            className='max-tablet:grid-cols-2 max-sm:grid-cols-1 max-tablet:grid flex gap-5 tablet:gap-[20px] lg:gap-[32px] text-start'
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
          >
            <Button
              label='Пополнить'
              onClick={() => navigate(`/${i18n.language}/payment`)}
              leftIcon={market}
              className='px-6 py-[14px] rounded-[10px] max-tablet:justify-center'
            />
            <PlayButton label='Видео инструкция о сайте' className='max-sm:justify-center text-nowrap' />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.2 }}
          className='hero__bg-box max-tablet:max-w-[400px]'
        >
          <img src={'/images/hero-bg.png'} alt='hero image' loading='lazy' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
