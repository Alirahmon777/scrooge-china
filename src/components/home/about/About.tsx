import Button from '@/components/ui/Button';
import AboutSlider from './AboutSlider';

const About = () => {
  return (
    <section className='mt-[120px] overflow-hidden'>
      <div className='container flex items-center justify-between'>
        <div className='flex flex-col gap-[30px] items-start max-w-[543px]'>
          <h2 className='text-[60px] font-bold leading-[70px]'>Что о нас пишут наши клиенты</h2>
          <p className='text-2xl mb-[10px]'>
            Вы сэкономите много времени используя на сайт. Пополнить сайт buff.163 стало на много проще.
          </p>
          <Button label='Посмотреть все отзывы' className='py-[14px] px-[24px] rounded-[10px]' />
        </div>
        <div>
          <div className='relative -right-20 overflow-hidden pl-[37px]'>
            <AboutSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
