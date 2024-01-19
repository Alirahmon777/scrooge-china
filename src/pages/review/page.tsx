import ReviewCard from '@/components/review/ReviewCard';
import Button from '@/components/ui/Button';
import stars from '@svgs/review/stars.svg';

const ReviewPage = () => {
  return (
    <section className='mt-5 mb-10 tablet:my-[60px]'>
      <div className='container flex flex-col gap-[15px] tablet:gap-[30px] items-center tablet:items-start'>
        <h2 className='font-bold'>Отзывы</h2>
        <div className='flex mobile:items-center tablet:justify-between w-full flex-col gap-[15px] tablet:flex-row'>
          <div className='flex gap-[67px] items-center max-mobile:mx-auto'>
            <div className='text-2xl font-bold flex'>
              <span className='mr-5'>5 из 5</span>
              <img src={stars} alt='star icon' />
            </div>
            <p className='text-gray hidden tablet:block'>
              <span className='text-white'>0</span> отзывов
            </p>
          </div>
          <Button
            label='Смотреть 0 отзывов на TrustPilot'
            className='[&_p]:text-white px-6 py-[14px] bg-header rounded-[10px] max-mobile:px-3 max-320:text-sm  font-bold max-mobile:[&_p]:mx-auto'
          />
        </div>
        <div className='h-0.5 w-full bg-header tablet:block hidden' />
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[35px] max-tablet:mt-6'>
          {new Array(9).fill(undefined).map((_, idx) => (
            <ReviewCard key={idx} />
          ))}
        </ul>
        <Button
          label='Загрузить ещё'
          className='bg-header [&_p]:text-white text-2xl font-bold py-[14px] px-6 mt-[25px] tablet:mt-[30px] rounded-[10px] mx-auto'
        />
      </div>
    </section>
  );
};

export default ReviewPage;
