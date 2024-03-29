import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TMonthWeekDay } from '@/admin/types/types';
import ExchangeCategories from './ExchangeCategories';
import { IExchangeChartOptions } from '@/admin/types/interfaces';

interface IProps extends IExchangeChartOptions {
  activeTab: TMonthWeekDay;
}

const ExchangeChart = ({ title, data, xaxis, yaxis, chartColor, activeTab, isExchange }: IProps) => {
  return (
    <div className='p-6 bg-header flex flex-col gap-5 rounded-[10px] transition-all'>
      <h3 className='text-[32px] font-bold'>{title}</h3>
      <div className='flex gap-5'>
        <ul className='pb-5 flex flex-col gap-5'>
          {yaxis?.labels?.map((item, idx) => (
            <li className='text-gray' key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <motion.div
          className={cn('flex gap-[25px] min-h-full', { 'px-[36px]': activeTab == 'week' })}
          transition={{ ease: 'easeIn', duration: 0.3 }}
        >
          {xaxis?.categories[activeTab]?.map((item, idx) => (
            <ExchangeCategories
              data={data}
              idx={idx}
              key={idx}
              activeTab={activeTab}
              yaxis={yaxis}
              chartColor={chartColor}
              item={item}
              isExchange={isExchange}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExchangeChart;
