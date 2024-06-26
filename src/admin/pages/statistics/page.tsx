import ExchangeChart from '@/admin/components/statistics/ExchangeChart';
import Info from '@/admin/components/statistics/Info';
import { charts } from '@/admin/static/statistics-data';
import { TMonthWeekDay } from '@/admin/types/types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const StatisticsPage = () => {
  const [queries] = useSearchParams();
  const query = queries.get('filter') as TMonthWeekDay;
  const [activeTab, setActiveTab] = useState<TMonthWeekDay>(query || 'month');

  return (
    <section className='my-[45px] mr-[32px] flex flex-col items-start gap-5'>
      <Info activeTab={activeTab} setActiveTab={setActiveTab} />
      {charts.map(({ chartColor, data, title, xaxis, yaxis, isExchange }, idx) => (
        <ExchangeChart
          key={idx}
          title={title}
          yaxis={yaxis}
          xaxis={xaxis}
          data={data}
          chartColor={chartColor}
          activeTab={activeTab}
          isExchange={isExchange}
        />
      ))}
    </section>
  );
};

export default StatisticsPage;
