import starIcon from '@svgs/review/star.svg';
import logo from '@svgs/review/logo.svg';
const AboutSliderCard = () => {
  return (
    <div className='max-w-[275px] min-w-[275px] '>
      <div className='p-[25px] bg-[#151716] rounded-[20px]'>
        <div className='flex justify-between items-start'>
          <div className='w-[100px] h-[100px] bg-[#D9D9D9] rounded-[10px]' />
          <img src={logo} alt='review logo' />
        </div>
        <div className='flex-col justify-start items-start gap-2.5 inline-flex mt-4'>
          <h4 className='text-white text-base font-bold'>НИК НЭЙМ</h4>
          <p className='text-neutral-500 text-base font-normal'>Самый лучший сайт во всем мире просто, лайк плюс реп</p>
        </div>
        <div className='justify-center items-center gap-2.5 inline-flex mt-[58px]'>
          <img src={starIcon} alt='star icon' />
          <p className='text-white text-2xl font-bold'>5 из 5</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSliderCard;
