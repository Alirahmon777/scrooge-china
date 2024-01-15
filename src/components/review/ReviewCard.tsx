import stars from '@svgs/review/stars.svg';
import logo from '@svgs/review/small-logo.svg';

const ReviewCard = () => {
  return (
    <li className='flex flex-col gap-5 overflow-hidden'>
      <div className='flex items-center gap-[15px] '>
        <div className='w-16 h-16 bg-[#d9d9d9] rounded-[10px]' />
        <div>
          <h3 className='text-2xl font-bold mb-[5px]'>Ник Нэйм</h3>
          <p className='text-gray'>5 минут назад</p>
        </div>
      </div>
      <div className='px-[15px] pt-[15px] pb-8 bg-header rounded-[10px] relative z-10'>
        <span className='absolute w-16 h-16 rotate-[27.5deg] bg-header -left-[13.59px] -top-[-1px] -z-10 rounded-[10px]' />
        <div className='flex items-center justify-between mb-5'>
          <img src={logo} alt='card logo' />
          <img src={stars} alt='star icon' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem laboriosam similique aspernatur!
        </p>
      </div>
    </li>
  );
};

export default ReviewCard;
