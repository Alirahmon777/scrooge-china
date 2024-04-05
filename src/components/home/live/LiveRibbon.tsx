import AnimatedCounter from '@/utils/animated-counter';
import LiveCard from './LiveCard';
import { useEffect, useRef, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { cfg } from '@/config/site.config';
import { IOrder } from '@/types/interfaces';

const LiveRibbon = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<IOrder[]>([]);
  const { lastJsonMessage } = useWebSocket(cfg.LIVE_SOCKET_URL, {
    shouldReconnect: () => false,
    reconnectAttempts: 10,
    reconnectInterval: (attemptNumber) => Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
  });

  useEffect(() => {
    if (lastJsonMessage) {
      setData((prev) => [...prev, lastJsonMessage as IOrder]);
    }
  }, [lastJsonMessage]);

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
          {data.map((item, idx) => (
            <LiveCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveRibbon;
