import comment from '@svgs/statistics/comment.svg';
import commentAlt from '@svgs/statistics/comment-alt.svg';
import happyUser from '@svgs/statistics/happy-user.svg';
import dollar from '@svgs/statistics/message-dollar.svg';
import AnimatedCounter from '@/utils/animated-counter';
const stats = [
  { icon: comment, count: 30345, desc: 'Совершенно успешных заказов' },
  { icon: happyUser, count: 11421, desc: 'Счастливых клиентов' },
  { icon: commentAlt, count: 0, desc: 'Отзывов о нашем проекте' },
  { icon: dollar, count: 1604032, symbol: '¥', desc: 'Выплачено Клиентам' },
];
const Statistics = () => {
  return (
    <section className='mt-[120px] mb-[120px]'>
      <div className='container'>
        <ul className='grid grid-cols-4 justify-between gap-[83px]'>
          {stats.map(({ count, desc, icon, symbol }, idx) => (
            <li className='flex flex-col gap-[5px] items-center' key={idx}>
              <img src={icon} alt={desc} />
              <p className='text-2xl font-bold mt-[5px]'>
                {!count && 0}
                <AnimatedCounter value={count} withoutComma /> {symbol && symbol}
              </p>
              <p className='text-2xl text-center'>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
