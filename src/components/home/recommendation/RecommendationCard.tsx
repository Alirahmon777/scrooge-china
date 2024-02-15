import { IRecomVideoRes } from '@/admin/types/interfaces';
import PlayButton from '@/components/ui/PlayButton';
import { extractVideoId } from '@/utils/extractIdFromUrl';
import youtubeIcon from '@svgs/youtube.svg';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  item: IRecomVideoRes;
  handleShow: (value: boolean) => void;
  setSrc: Dispatch<SetStateAction<string>>;
}

const RecommendationCard: React.FC<IProps> = ({ item, handleShow, setSrc }) => {
  const thumbnail = `https://img.youtube.com/vi/${extractVideoId(item.url)}/0.jpg`;
  return (
    <>
      <div className='bg-header rounded-[20px] overflow-hidden min-w-[275px] tablet:w-[700px] lg:w-[756px]'>
        <div className='flex max-tablet:flex-col justify-between gap-[15px] tablet:gap-[60px]'>
          <div className='flex p-[25px] pb-0 tablet:p-10 flex-col gap-[15px] tablet:gap-[68px] max-w-[375px]'>
            <div className=''>
              {item.avatar && <img src={item.avatar} className='w-[100px] h-[100px] rounded-[10px]' alt='avatar' />}
              {!item.avatar && <div className='w-[100px] h-[100px] rounded-[10px] bg-[#d9d9d9]' />}
              <h3 className='text-base tablet:text-[28px] font-bold mt-[15px] tablet:mt-5'>{item.name}</h3>
            </div>

            <div className='flex flex-col gap-[5px] items-start'>
              <img src={youtubeIcon} alt='youtube icon' className='!w-[100px] !m-0' />
              <p className='font-normal'>{item.subscribers}</p>
            </div>
          </div>
          <div
            className='max-tablet:h-[211px] bg-cover bg-center bg-no-repeat max-tablet:rounded-[20px] tablet:min-w-[320px] lg:min-w-[385px] min-h-full bg-[#d9d9d9] flex items-center justify-center'
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <PlayButton
              className='absolute'
              onClick={() => {
                setSrc(item.url);
                handleShow(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationCard;
