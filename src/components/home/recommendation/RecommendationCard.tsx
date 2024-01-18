import PlayButton from '@/components/ui/PlayButton';
import youtubeIcon from '@svgs/youtube.svg';
const RecommendationCard = () => {
  return (
    <div className='bg-header rounded-[20px] overflow-hidden min-w-[275px]'>
      <div className='flex max-tablet:flex-col justify-between gap-[15px] tablet:gap-[60px]'>
        <div className='flex p-[25px] pb-0 tablet:p-10 flex-col gap-[15px] tablet:gap-[68px]'>
          <div className=''>
            <div className='w-[100px] h-[100px] rounded-[10px] bg-[#d9d9d9]' />
            <h3 className='text-base tablet:text-[28px] font-bold mt-[15px] tablet:mt-5'>Название Канала</h3>
          </div>

          <div className='flex flex-col gap-[5px] items-start'>
            <img src={youtubeIcon} alt='youtube icon' className='!w-[100px] !m-0' />
            <p className='font-normal'>2,34 млн. подписчиков</p>
          </div>
        </div>
        <div className='max-tablet:h-[211px] max-tablet:rounded-[20px] tablet:w-[385px] min-h-full bg-[#d9d9d9] flex items-center justify-center'>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
