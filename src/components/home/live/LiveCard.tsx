import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';
import { IOrder } from '@/types/interfaces';
import { getAmount } from '@/utils/getAmount';

interface IProps {
  item: IOrder;
}

const LiveCard = ({ item }: IProps) => {
  const { data: avatar } = useGetAvatarUrlQuery(item.steam_id);
  const { data: username } = useGetUsernameQuery(item.steam_id);
  return (
    <div className='max-w-[200px] w-[200px] min-w-[200px]'>
      <div className='py-[16px] px-1 w-full flex flex-col bg-[#1D1F1E] rounded-[10px]'>
        <div className='flex-col justify-start items-center gap-[5px] inline-flex'>
          <div className='flex-col justify-start items-center gap-[5px] flex'>
            {avatar && <img src={avatar} className='w-[100px] h-[100px] rounded-[10px]' />}
            {!avatar && <div className='w-[100px] h-[100px] bg-zinc-300 rounded-[10px]' />}
            <div className="text-white text-base font-bold font-['SF Pro Display']">{username || 'НикНэйм'}</div>
          </div>
          <div className='flex-col justify-start items-center flex'>
            <div className="w-[130px] text-neutral-500 text-base font-normal font-['SF Pro Display']">
              Пополнил buff.163
            </div>
            <div className=" text-white text-base font-bold font-['SF Pro Display']">
              {item.amount} ¥ - {getAmount(item.amount, item.fixed_currency_rate)} {item.currency_symbol}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
