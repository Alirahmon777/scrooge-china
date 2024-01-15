import ReviewCard from '@/components/review/ReviewCard';
import Button from '@/components/ui/Button';
import stars from '@svgs/review/stars.svg';

const ReviewPage = () => {
  return (
    <section className='my-[60px]'>
      <div className='container flex flex-col gap-[30px] items-start'>
        <h2 className='text-6xl font-bold'>Отзывы</h2>
        <div className='flex items-center justify-between w-full'>
          <div className='flex gap-[67px] items-center'>
            <div className='text-2xl font-bold flex'>
              <span className='mr-5'>5 из 5</span>
              <img src={stars} alt='star icon' />
            </div>
            <p className='text-gray'>
              <span className='text-white'>0</span> отзывов
            </p>
          </div>
          <Button
            label='Смотреть 0 отзывов на TrustPilot'
            className='[&_p]:text-white px-6 py-[14px] bg-header rounded-[10px] font-bold'
          />
        </div>
        <div className='h-0.5 w-full bg-header' />
        <ul className='grid grid-cols-3 gap-x-[26px] gap-y-[35px]'>
          {new Array(9).fill(undefined).map((_, idx) => (
            <ReviewCard key={idx} />
          ))}
        </ul>
        <Button
          label='Загрузить ещё'
          className='bg-header [&_p]:text-white text-2xl font-bold py-[14px] px-6 mt-[30px] rounded-[10px] mx-auto'
        />
      </div>
    </section>
  );
};

export default ReviewPage;
