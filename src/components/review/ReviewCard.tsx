import logo from '@svgs/review/small-logo.svg';
import logoTop from '@svgs/review/logo.svg';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { IReview } from '@/types/interfaces';
import Icons from '../Icons';
import { useTranslation } from 'react-i18next';
import { dateAgo } from '@/utils/dateAgo';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';

interface IProps extends IReview {
  starsIcons: number[];
}

const ReviewCard = ({ created_at, review, stars, starsIcons, steam_id }: IProps) => {
  const notMobile = useMediaQuery('(min-width: 425px)');
  const { i18n } = useTranslation();
  const result = dateAgo({ created_at, lng: i18n.language });
  const { data: avatar } = useGetAvatarUrlQuery(steam_id);
  const { data: username } = useGetUsernameQuery(steam_id);

  return (
    <li
      className={cn('flex flex-col gap-5 overflow-hidden items-start rounded-[10px]', {
        'bg-header px-5 py-[14px]': !notMobile,
      })}
    >
      <div className={cn({ 'flex justify-between items-start w-full': !notMobile })}>
        <div className='flex items-center gap-[15px] '>
          {avatar && <img className='w-16 h-16 rounded-[10px]' src={avatar} />}
          {!avatar && <div className='w-16 h-16 bg-[#d9d9d9] rounded-[10px]' />}
          <div>
            <h3 className='text-2xl font-bold mb-[5px]'>{username || 'Ник Нэйм'}</h3>
            <p className='text-gray'>{result}</p>
          </div>
        </div>
        {!notMobile && <img src={logoTop} alt='card top logo' width={24} />}
      </div>
      <div className={cn('bg-header rounded-[10px] relative z-10 w-full', { 'px-[15px] pt-[15px] pb-8': notMobile })}>
        {notMobile && (
          <>
            <span className='absolute w-16 h-16 rotate-[27.5deg] bg-header -left-[13.59px] -top-[-1px] -z-10 rounded-[10px]' />
            <div className='flex items-center justify-between mb-5'>
              <img src={logo} alt='card logo' />
              <div className='flex items-center gap-[1px]'>
                {starsIcons.map((star) => (
                  <Icons.starIcon
                    key={star}
                    className={cn({
                      '[&_path]:fill-success': star <= stars,
                    })}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        <p className='line-clamp truncate whitespace-pre-wrap line-clamp-4'>{review}</p>
      </div>
      <div className='flex items-center gap-[1px]'>
        {!notMobile &&
          starsIcons.map((star) => (
            <Icons.starIcon
              key={star}
              className={cn('cursor-pointer', {
                '[&_path]:fill-success': star <= stars,
              })}
            />
          ))}
      </div>
    </li>
  );
};

export default ReviewCard;
