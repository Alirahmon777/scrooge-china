import stars from '@svgs/review/stars.svg';
import logo from '@svgs/review/small-logo.svg';
import logoTop from '@svgs/review/logo.svg';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';

const ReviewCard = () => {
  const notMobile = useMediaQuery('(min-width: 425px)');
  return (
    <li
      className={cn('flex flex-col gap-5 overflow-hidden items-start rounded-[10px]', {
        'bg-header px-5 py-[14px]': !notMobile,
      })}
    >
      <div className={cn({ 'flex justify-between items-start w-full': !notMobile })}>
        <div className='flex items-center gap-[15px] '>
          <div className='w-16 h-16 bg-[#d9d9d9] rounded-[10px]' />
          <div>
            <h3 className='text-2xl font-bold mb-[5px]'>Ник Нэйм</h3>
            <p className='text-gray'>5 минут назад</p>
          </div>
        </div>
        {!notMobile && <img src={logoTop} alt='card top logo' width={24} />}
      </div>
      <div className={cn('bg-header rounded-[10px] relative z-10', { 'px-[15px] pt-[15px] pb-8': notMobile })}>
        {notMobile && (
          <>
            <span className='absolute w-16 h-16 rotate-[27.5deg] bg-header -left-[13.59px] -top-[-1px] -z-10 rounded-[10px]' />
            <div className='flex items-center justify-between mb-5'>
              <img src={logo} alt='card logo' />
              <img src={stars} alt='star icon' />
            </div>
          </>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem laboriosam similique aspernatur!
        </p>
      </div>
      {!notMobile && <img src={stars} alt='star icon' />}
    </li>
  );
};

export default ReviewCard;
