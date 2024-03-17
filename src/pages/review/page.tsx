import Icons from '@/components/Icons';
import ReviewCard from '@/components/review/ReviewCard';
import ReviewModal from '@/components/review/ReviewModal';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useGetReviewsCountQuery, useGetReviewsQuery } from '@/redux/features/services/public/publicService';
import { selectAuth } from '@/redux/features/slices/auth/authReducer';
import { useAppSelector } from '@/redux/hooks/hooks';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLockedBody, useMediaQuery } from 'usehooks-ts';

const ReviewPage = () => {
  const auth = useAppSelector(selectAuth);
  const [pagination, setPagination] = useState({ offset: 0, limit: 6 });
  const [open, setOpen] = useState(false);
  const notMobile = useMediaQuery('(min-width: 425px)');
  const { data, isSuccess } = useGetReviewsQuery(
    { limit: pagination.limit, offset: pagination.offset },
    {
      pollingInterval: 150000,
    }
  );
  const { data: amount_rewievs } = useGetReviewsCountQuery();

  const [_, setLocked] = useLockedBody();
  const handleShow = () => {
    setOpen(true);
    setLocked(true);
  };
  const overallStar = data?.reduce((a, b) => ({ stars: a.stars + b.stars }), { stars: 0 });
  const num = ((overallStar?.stars || 0) / (data?.length || 0)).toFixed(1);

  const formattedNum = !isNaN(+num) ? parseFloat(num).toString() : '0';

  const handlePaginate = (limit: number) => {
    if (isSuccess && data.length >= pagination.limit) {
      setPagination((prev) => ({ ...prev, limit: prev.limit + limit }));
    }
  };

  useEffect(() => {
    if (!open) {
      setLocked(false);
    }
  }, [open]);

  const starsIcons = [1, 2, 3, 4, 5];

  return (
    <>
      <AnimatePresence>
        {open && <ReviewModal limit={pagination.limit} offset={pagination.offset} setShow={setOpen} />}
      </AnimatePresence>
      <section className='mt-5 mb-10 tablet:my-[60px]'>
        <div className='container flex flex-col gap-[15px] tablet:gap-[30px] items-center tablet:items-start'>
          <h2 className='font-bold'>Отзывы</h2>
          <div className='flex mobile:items-center tablet:justify-between w-full flex-col gap-[15px] tablet:flex-row'>
            <div className='flex gap-[67px] items-center max-mobile:mx-auto'>
              <div className='text-2xl font-bold flex items-center'>
                <span className='mr-5'>{formattedNum} из 5</span>
                <div className='flex gap-[1px]'>
                  {starsIcons.map((star) => {
                    if (star <= +formattedNum) {
                      return <Icons.starIcon key={star} className={cn('[&_path]:fill-success')} />;
                    }
                    if (star - 1 < +formattedNum && +formattedNum <= star) {
                      return (
                        <Icons.starIconHalf
                          key={star}
                          className={cn('')}
                          stopOffset={+`${formattedNum.split('.')[1]}0`}
                        />
                      );
                    }
                    return <Icons.starIcon key={star} className={cn('')} />;
                  })}
                </div>
              </div>
              <p className='text-gray hidden tablet:block'>
                <span className='text-white'>{amount_rewievs?.review_count}</span> отзывов
              </p>
            </div>
            <div className='flex mobile:items-center gap-2 mobile:gap-4 max-mobile:flex-col'>
              {auth.user && auth.token && (
                <Button
                  LeftSvg={<Icons.plusIcon className='w-7 h-7' />}
                  onClick={handleShow}
                  label={!notMobile ? 'Добавить отзыв' : undefined}
                  className='px-3 py-2 [&_p]:text-white font-semibold bg-header rounded-[10px] justify-center'
                />
              )}
              <Button
                label='Смотреть 0 отзывов на TrustPilot'
                className='[&_p]:text-white px-6 py-[14px] bg-header rounded-[10px] max-mobile:px-3 max-320:text-sm  font-bold max-mobile:[&_p]:mx-auto'
              />
            </div>
          </div>
          <div className='h-0.5 w-full bg-header tablet:block hidden' />
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[26px] gap-y-[35px] w-full max-tablet:mt-6'>
            {isSuccess && data.map((review, idx) => <ReviewCard key={idx} {...review} starsIcons={starsIcons} />)}
          </ul>
          <Button
            label='Загрузить ещё'
            onClick={() => handlePaginate(6)}
            className='bg-header [&_p]:text-white text-2xl font-bold py-[14px] px-6 mt-[25px] tablet:mt-[30px] rounded-[10px] mx-auto'
          />
        </div>
      </section>
    </>
  );
};

export default ReviewPage;
