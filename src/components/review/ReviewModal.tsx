import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Button from '../../components/ui/Button';
import { handleSimpleError } from '@/utils/handleError';
import { useAddReviewMutation } from '@/redux/features/services/user/userService';
import { IReviewBody } from '@/types/interfaces';
import { Icons as AdminIcons } from '@/admin/components/Icons';
import Icons from '../Icons';
import { cn } from '@/lib/utils';
import { useLazyGetReviewsCountQuery, useLazyGetReviewsQuery } from '@/redux/features/services/public/publicService';
import { motion } from 'framer-motion';
interface IProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  limit?: number;
  offset?: number;
}

const ReviewModal = ({ setShow, limit, offset }: IProps) => {
  const initialForm: IReviewBody = { review: '', stars: 5 };
  const [form, setForm] = useState(initialForm);
  const [hoveredStar, setHoveredStar] = useState<number>(5);
  const [addReview] = useAddReviewMutation();
  const [getReview] = useLazyGetReviewsQuery();
  const [getReviewCount] = useLazyGetReviewsCountQuery();

  const handleStarHover = (star: number) => {
    setHoveredStar(star);
  };

  const handleStarClick = (star: number) => {
    setForm((prev) => ({ ...prev, stars: star }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addReview(form).unwrap();
      if (limit && (offset != undefined || offset != null)) {
        await getReview({ limit, offset }).unwrap();
      }
      await getReviewCount().unwrap();
    } catch (error) {
      handleSimpleError(error);
    } finally {
      setShow(false);
    }
  };

  const handeChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const stars = [1, 2, 3, 4, 5];
  return (
    <div
      className='fixed top-0 mobile:py-4 w-screen h-screen bg-[#00000090] overflow-auto z-30 flex items-center justify-center'
      onClick={() => setShow(false)}
    >
      <motion.div
        className='p-[30px_29px_13px] mobile:p-[55px_54px_38px] relative overflow-auto flex flex-col gap-[30px] justify-between rounded-lg mobile:max-w-[564px] w-full mobile:max-h-[700px] h-full bg-header'
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <Button
          LeftSvg={<AdminIcons.close className='w-7 h-7' />}
          className='absolute top-0 right-0 rounded-es-[8px] p-2'
          onClick={() => setShow(false)}
        />
        <div className=''>
          <h3 className='text-2xl font-bold mb-5'>Написать отзыв</h3>
          <div className='flex gap-3 items-center text-gray'>
            <p>Общая оценка:</p>
            <div className='flex items-center gap-[1px]'>
              {stars.map((star) => (
                <Icons.starIcon
                  key={star}
                  className={cn('cursor-pointer', {
                    '[&_path]:fill-success': star <= hoveredStar || (!hoveredStar && star <= form.stars),
                  })}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={() => handleStarHover(0)}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-10'>
          <label htmlFor='review-textarea' className='flex-1 flex flex-col'>
            <p className='text-gray'>Текст отзыва</p>
            <textarea
              name='review'
              id='review-textarea'
              cols={30}
              className='w-full flex-1 p-1 bg-transparent border border-solid border-[#1D1F1E]'
              onChange={(e) => handeChange('review', e.target.value)}
              rows={10}
            />
          </label>
          <Button
            label={'Оставить отзыв'}
            onClick={handleSubmit}
            type='submit'
            className='w-full py-[10px] rounded-[10px] justify-center'
          />
        </form>
      </motion.div>
    </div>
  );
};

export default ReviewModal;
