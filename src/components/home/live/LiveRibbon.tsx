import AnimatedCounter from '@/utils/animated-counter';
import LiveCard from './LiveCard';
import { useRef } from 'react';

const LiveRibbon = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className='max-tablet:mt-[50px] mt-[145px]'>
      <div className='container bg-neutral-900 rounded-[20px] p-[25px] pr-0'>
        <div className='flex items-center justify-between pr-6 sm:pr-[47px]'>
          <div className='flex items-center gap-[6px]'>
            <span className='min-w-6 min-h-6 bg-success rounded-full' />
            <h2 className='text-3xl font-bold max-sm:text-2xl'>LIVE лента переводов на buff.163</h2>
          </div>
          <h3 className='text-neutral-500 text-2xl max-sm:text-lg'>
            Всего успешных заказов:{' '}
            <span className='text-white'>
              <AnimatedCounter value={30345} />
            </span>
          </h3>
        </div>
        <div className='mt-5 gap-5 overflow-x-auto live-scroll pr-[47px] flex' ref={ref}>
          {new Array(7).fill(undefined).map((_, idx) => (
            <LiveCard key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveRibbon;
