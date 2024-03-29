import { ITopUser } from "@/types/interfaces";

interface IProps {
 item: ITopUser 
}

const LiveCard = ({item}: IProps) => {
  return (
    <div className='max-w-[200px]'>
      <div className='py-[16px] px-[35px] bg-[#1D1F1E] rounded-[10px]'>
        <div className='flex-col justify-start items-center gap-[5px] inline-flex'>
          <div className='flex-col justify-start items-center gap-[5px] flex'>
            <div className='w-[100px] h-[100px] bg-zinc-300 rounded-[10px]' />
            <div className="text-white text-base font-bold font-['SF Pro Display']">НикНэйм</div>
          </div>
          <div className='flex-col justify-start items-center flex'>
            <div className="w-[130px] text-neutral-500 text-base font-normal font-['SF Pro Display']">
              Пополнил buff.163
            </div>
            <div className="w-[91px] text-white text-base font-bold font-['SF Pro Display']">{item.amount} ¥ - 700 ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
