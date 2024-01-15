import Button from '@/components/ui/Button';
import PlayButton from '@/components/ui/PlayButton';
import market from '@svgs/market.svg';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className='mt-[73px]'>
      <div className='container flex items-center justify-between'>
        <div className='max-w-[661px] flex flex-col gap-[30px] items-start'>
          <motion.h1
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className='text-[60px] font-bold [&_span]:text-success leading-[80px]'
          >
            <span>Пополни</span> свой аккаунт buff.163 <span>за 5 минут.</span>
          </motion.h1>
          <motion.p
            className='text-2xl mb-[10px]'
            initial={{ y: 220, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.1 }}
          >
            Пополни свой аккаунт buff163 и купи скины CSGO, Dota 2, RUST, TF2 на 30% дешевле чем в Steam.
          </motion.p>
          <motion.div
            className='flex gap-[32px]'
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.4 }}
          >
            <Button label='Пополнить' leftIcon={market} className='px-6 py-[14px] rounded-[10px]' />
            <PlayButton label='Видео инструкция о сайте' />
          </motion.div>
        </div>
        <motion.div className=''>
          <img src={'/images/hero-bg.png'} alt='hero image' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
