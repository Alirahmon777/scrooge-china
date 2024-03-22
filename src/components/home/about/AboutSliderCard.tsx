import starIcon from '@svgs/review/star.svg';
import logo from '@svgs/review/logo.svg';
import { IReview } from '@/types/interfaces';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';

const AboutSliderCard = ({ review, steam_id }: IReview) => {
  const { data: avatar } = useGetAvatarUrlQuery(steam_id);
  const { data: username } = useGetUsernameQuery(steam_id);
  return (
    <div className='max-w-[275px] min-w-[275px] '>
      <div className='p-[25px] bg-[#151716] rounded-[20px]'>
        <div className='flex justify-between items-start'>
          {avatar && <img className='w-[100px] h-[100px] rounded-[10px]' src={avatar} />}
          {!avatar && <div className='w-[100px] h-[100px] bg-[#d9d9d9] rounded-[10px]' />}
          <img src={logo} alt='review logo' />
        </div>
        <div className='flex-col justify-start items-start gap-2.5 inline-flex mt-4'>
          <h4 className='text-white text-base font-bold'>{username || 'НИК НЭЙМ'}</h4>
          <p className='text-neutral-500 text-base font-normal'>{review}</p>
        </div>
        <div className='items-center gap-2.5 flex mt-[58px]'>
          <img src={starIcon} alt='star icon' />
          <p className='text-white text-2xl font-bold'>5 из 5</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSliderCard;
