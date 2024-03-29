import { cn } from '@/lib/utils';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';

interface IProps {
  desc: string;
  ratings?: number;
  steam_id: string;
}

const RatingsCard = ({ desc = '25000', steam_id, ratings }: IProps) => {
  const { data: avatar } = useGetAvatarUrlQuery(steam_id);
  const { data: username } = useGetUsernameQuery(steam_id);
  return (
    <li className='bg-header px-4 mobile:px-6 rounded-[10px] relative'>
      {typeof ratings == 'number' && (
        <div
          className={cn(
            'h-full w-10 absolute ml-3',
            { 'bg-[#EFDB24]': ratings == 0 },
            { 'bg-[#CAC9C6]': ratings == 1 },
            { 'bg-[#EF7924]': ratings == 2 }
          )}
        />
      )}
      <div className='py-[18px] md:py-10 flex gap-[10px] mobile:gap-[15px] items-center relative z-10'>
        {avatar && <img className='w-16 h-16 rounded-[10px]' src={avatar} />}
        {!avatar && <div className='w-16 h-16 bg-[#d9d9d9] rounded-[10px]' />}
        <div className='text-start'>
          <h3 className='text-2xl font-bold'>{username || 'Ник Нэйм'}</h3>
          <p className='text-gray max-mobile:text-sm text-nowrap max-320:text-wrap'>
            Пополнить buff.163: <span>{desc}¥</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default RatingsCard;
