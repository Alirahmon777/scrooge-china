import Tooltip from '@/components/ui/Tooltip';
import { motion } from 'framer-motion';
import { addDays, addHours, addMonths, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IExchangeChartData, IYaxisOption } from '@/admin/types/interfaces';
import { getHeightChart } from '@/utils/getHeightChart';
import { TMonthWeekDay } from '@/admin/types/types';
import { useGetAmountUsersQuery } from '@/redux/features/services/admin/adminSettings';
import { useGetHistoryMutation } from '@/redux/features/services/admin/adminService';
import { useEffect, useState } from 'react';
import { handleSimpleError } from '@/utils/handleError';

interface IProps {
  data: { categories: IExchangeChartData };
  yaxis?: IYaxisOption;
  activeTab: TMonthWeekDay;
  chartColor?: string;
  idx: number;
  item: string | Date;
  isExchange?: boolean;
}

const ExchangeCategories = ({ activeTab, idx, chartColor, yaxis, item, isExchange }: IProps) => {
  const getAmountRegistrationsByTime = () => {
    if (activeTab == 'month') {
      return addMonths(item, 1).toISOString().slice(0, -5);
    }
    if (activeTab == 'week') {
      return addDays(item, 1).toISOString().slice(0, -5);
    }
    return addHours(item, 2).toISOString().slice(0, -5);
  };

  const [generalExchange, setGeneralExchange] = useState<number>(0);

  const requestTimes = {
    start_datetime: new Date(item).toISOString().slice(0, -5),
    end_datetime: getAmountRegistrationsByTime(),
  };

  const { data: amountUsers, isSuccess } = useGetAmountUsersQuery(requestTimes);

  const [trigger] = useGetHistoryMutation();

  const getAmountExchange = async () => {
    try {
      const data = await trigger(requestTimes).unwrap();
      const amount = data.reduce((total, current) => +total + +current.amount, 0);
      setGeneralExchange(amount);
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    getAmountExchange();
  }, [activeTab]);

  const amount = isExchange ? generalExchange : (isSuccess && amountUsers?.count) || 0;

  return (
    <motion.div className='flex flex-col items-center justify-between gap-1 h-full flex-1' key={idx}>
      <Tooltip text={isExchange ? '¥' + amount : amount}>
        <div className='relative h-full w-5 bg-[#68716C] rounded-[10px] overflow-hidden'>
          <span
            className='absolute w-full bottom-0 rounded-[10px] transition-all duration-500'
            style={{
              height: `${getHeightChart(amount, yaxis)}%`,
              backgroundColor: chartColor,
            }}
          />
        </div>
      </Tooltip>
      <p className='flex flex-col gap-1 text-gray min-w-[48px] text-center uppercase'>
        {activeTab == 'month' && format(item, 'LLL', { locale: ru }).replace('.', '')}
        {activeTab == 'week' && format(item, 'cccccc', { locale: ru })}
        {activeTab == 'day' && format(item, 'HH:mm', { locale: ru })}
      </p>
    </motion.div>
  );
};

export default ExchangeCategories;
