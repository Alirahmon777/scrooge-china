import trendingUp from '@svgs/admin/trending-up.svg';
import usersIcon from '@svgs/admin/users.svg';
import InfoItem from './InfoItem';
import Button from '@/components/ui/Button';
import { ICount, IInfoTabs } from '@/admin/types/interfaces';
import { cn } from '@/lib/utils';
import { TMonthWeekDay } from '@/admin/types/types';
import { useLazyGetAmountUsersQuery } from '@/redux/features/services/admin/adminSettings';
import { subYears } from 'date-fns';
import { useEffect, useState } from 'react';
interface IProps {
  activeTab: TMonthWeekDay;
  setActiveTab: React.Dispatch<React.SetStateAction<TMonthWeekDay>>;
}

const Info = ({ activeTab, setActiveTab }: IProps) => {
  const date = subYears(new Date(), 1);
  const [triger] = useLazyGetAmountUsersQuery();
  const [data, setData] = useState<ICount | undefined>({ count: 0 });
  useEffect(() => {
    (async () => {
      const { data } = await triger({
        start_datetime: date.toISOString(),
        end_datetime: new Date().toISOString(),
      });

      if (data) {
        setData(data);
      }
    })();
  }, []);

  return (
    <div className='p-6 bg-header rounded-[10px] flex flex-col gap-5'>
      <div className='flex gap-[50px]'>
        <InfoItem title={'Общий обмен'} icon={trendingUp} content='¥24.314' />
        <InfoItem title={'кол-во регистраций'} icon={usersIcon} content={'' + data?.count} />
      </div>
      <div className='flex items-center gap-5'>
        {tabs.map(({ label, tab }, idx) => (
          <Button
            key={idx}
            label={label}
            onClick={() => setActiveTab(tab)}
            className={cn('p-[5px] bg-[#1D1F1E] rounded-[5px] [&_p]:text-gray font-normal', {
              '[&_p]:text-white bg-[#EA5252]': tab == activeTab,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;

const tabs: IInfoTabs[] = [
  { label: '1 день', tab: 'day' },
  { label: '7 дней', tab: 'week' },
  { label: '30 дней', tab: 'month' },
];
