import trendingUp from '@svgs/admin/trending-up.svg';
import usersIcon from '@svgs/admin/users.svg';
import InfoItem from './InfoItem';
import Button from '@/components/ui/Button';
import { IInfoTabs } from '@/admin/types/interfaces';
import { cn } from '@/lib/utils';
import { TMonthWeekDay } from '@/admin/types/types';
import { useGetAmountUsersQuery } from '@/redux/features/services/admin/adminSettings';
import { getActiveTimeByString } from '@/utils/getActiveTime';
import { useNavigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import { useGetHistoryMutation } from '@/redux/features/services/admin/adminService';
import { useEffect, useState } from 'react';
import { handleSimpleError } from '@/utils/handleError';
interface IProps {
  activeTab: TMonthWeekDay;
  setActiveTab: React.Dispatch<React.SetStateAction<TMonthWeekDay>>;
}

const Info = ({ activeTab, setActiveTab }: IProps) => {
  const isoStringWithoutTimezone = getActiveTimeByString(activeTab).toISOString().slice(0, -5);
  const [trigger] = useGetHistoryMutation();
  const navigate = useNavigate();
  const [generalExchange, setGeneralExchange] = useState<string>('0');
  const handleClick = (tab: TMonthWeekDay) => {
    setActiveTab(tab);
    navigate(`?filter=${tab}`);
  };

  const requestTimes = {
    start_datetime: isoStringWithoutTimezone,
    end_datetime: addDays(new Date().setUTCHours(0, 0, 0, 0), 1).toISOString().slice(0, -5),
  };

  const { data } = useGetAmountUsersQuery(requestTimes);

  const getAmountExchange = async () => {
    try {
      const data = await trigger(requestTimes).unwrap();
      const amount = data.reduce((total, current) => +total + +current.amount, 0);
      const formattedNumber = Intl.NumberFormat('en-US').format(amount);
      setGeneralExchange(formattedNumber);
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    getAmountExchange();
  }, [activeTab]);

  return (
    <div className='p-6 bg-header rounded-[10px] flex flex-col gap-5'>
      <div className='flex gap-[50px]'>
        <InfoItem title={'Общий обмен'} icon={trendingUp} content={'¥' + generalExchange} />
        <InfoItem title={'кол-во регистраций'} icon={usersIcon} content={'' + (data?.count || 0)} />
      </div>
      <div className='flex items-center gap-5'>
        {tabs.map(({ label, tab }, idx) => (
          <Button
            key={idx}
            label={label}
            onClick={() => handleClick(tab)}
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
