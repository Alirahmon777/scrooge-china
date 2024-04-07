import comment from '@svgs/statistics/comment.svg';
import commentAlt from '@svgs/statistics/comment-alt.svg';
import happyUser from '@svgs/statistics/happy-user.svg';
import dollar from '@svgs/statistics/message-dollar.svg';
import AnimatedCounter from '@/utils/animated-counter';
import { useEffect, useState } from 'react';
import { useGetReviewsCountQuery } from '@/redux/features/services/public/publicService';
import { IStats } from '@/types/interfaces';
const stats: IStats[] = [
  { icon: comment, count: 30345, desc: 'Совершенно успешных заказов' },
  { icon: happyUser, count: 11421, desc: 'Счастливых клиентов' },
  { icon: commentAlt, count: 0, desc: 'Отзывов о нашем проекте' },
  { icon: dollar, count: 1604032, symbol: '¥', desc: 'Выплачено Клиентам' },
];
const Statistics = () => {
  const [state, setState] = useState<IStats[]>(stats);
  const { data, isSuccess } = useGetReviewsCountQuery();

  useEffect(() => {
    if (isSuccess) {
      setState((prevState) => {
        return prevState.map((stat) => {
          if (stat.desc === 'Отзывов о нашем проекте') {
            return { ...stat, count: data.review_count };
          }
          return stat;
        });
      });
    }
  }, [isSuccess]);

  return (
    <section className='tablet:my-[120px] my-[50px]'>
      <div className='container'>
        <ul className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-[60px] xl:gap-[83px]'>
          {state.map(({ count, desc, icon, symbol }, idx) => (
            <li className='flex flex-col gap-[5px] items-center justify-self-center max-w-[253px]' key={idx}>
              <img src={icon} alt={desc} />
              <p className='text-2xl font-bold mt-[5px]'>
                {!count && 0}
                <AnimatedCounter value={count} withoutComma /> {symbol && symbol}
              </p>
              <p className='text-2xl text-center text-gray'>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
