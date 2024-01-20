import trendingUp from '@svgs/admin/trending-up.svg';
import usersIcon from '@svgs/admin/users.svg';
import InfoItem from './InfoItem';
import Button from '@/components/ui/Button';
import { IInfoTabs } from '@/admin/types/interfaces';
import { cn } from '@/lib/utils';
import { TMonthWeekDay } from '@/admin/types/types';
interface IProps {
  activeTab: TMonthWeekDay;
  setActiveTab: React.Dispatch<React.SetStateAction<TMonthWeekDay>>;
}

const Info = ({ activeTab, setActiveTab }: IProps) => {
  return (
    <div className='p-6 bg-header rounded-[10px] flex flex-col gap-5'>
      <div className='flex gap-[50px]'>
        <InfoItem title={'Общий обмен'} icon={trendingUp} content='¥24.314' />
        <InfoItem title={'Все посещения'} icon={usersIcon} content='5.531' />
      </div>
      <div className='flex items-center gap-5'>
        {tabs.map(({ label, tab }) => (
          <Button
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
