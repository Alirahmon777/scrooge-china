import { IExchangeChartOptions } from '@/admin/types/interfaces';
import { getHeightChart } from '@/utils/getHeightChart';
import Tooltip from '../Tooltip';
import { TMonthWeekDay } from '@/admin/types/types';
import { cn } from '@/lib/utils';
interface IProps extends IExchangeChartOptions {
  activeTab: TMonthWeekDay;
}

const ExchangeChart = ({ title, data, xaxis, yaxis, chartColor, activeTab }: IProps) => {
  return (
    <div className='p-6 bg-header flex flex-col gap-5 rounded-[10px]'>
      <h3 className='text-[32px] font-bold'>{title}</h3>
      <div className='flex gap-5'>
        <ul className='pb-5 flex flex-col gap-5'>
          {yaxis?.labels?.map((item, idx) => (
            <li className='text-gray' key={idx}>
              {item}
            </li>
          ))}
        </ul>
        <div className={cn('flex gap-[25px] min-h-full', { 'px-[36px]': activeTab == 'week' })}>
          {xaxis?.categories[activeTab]?.map((item, idx) => (
            <div className='flex flex-col items-center justify-between gap-1 h-full flex-1' key={idx}>
              <Tooltip text={data.categories[activeTab][idx]}>
                <div className='relative h-full w-5 bg-[#68716C] rounded-[10px] overflow-hidden'>
                  <span
                    className='absolute w-full bottom-0 rounded-[10px]'
                    style={{
                      height: `${getHeightChart(idx, data, activeTab, yaxis)}%`,
                      backgroundColor: chartColor,
                    }}
                  />
                </div>
              </Tooltip>
              <p className='flex flex-col gap-1 text-gray min-w-[48px] text-center'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeChart;
