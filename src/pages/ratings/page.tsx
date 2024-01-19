import RatingsCard from '@/components/ratings/RatingsCard';
import Button from '@/components/ui/Button';

const StatisticsPage = () => {
  return (
    <section className='mt-5 mb-10 lg:my-[60px] xl:my-[100px]'>
      <div className='container text-center'>
        <h2>Рейтинг Пользователей</h2>
        <ul className='flex flex-wrap max-sm:[&_li]:flex-grow justify-center xl:grid xl:grid-cols-3 gap-5 my-10 mx-auto'>
          {statistics.map(({ desc }, idx) => {
            if (idx == 0 || idx == 1 || idx == 2) {
              return <RatingsCard desc={desc} ratings={idx} />;
            }
          })}
        </ul>
        <div className='h-[1px] w-full bg-[#1D1F1E]' />
        <ul className='flex flex-wrap [&_li]:flex-grow sm:flex-grow-0 justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-[50px]'>
          {statistics.map(({ desc }, idx) => {
            if (idx == 0 || idx == 1 || idx == 2) {
              return;
            }
            return <RatingsCard desc={desc} key={idx} />;
          })}
        </ul>

        <Button
          label='Загрузить ещё'
          className='bg-header [&_p]:text-white py-[14px] px-6 mt-10 lg:mt-[100px] rounded-[10px] font-bold text-2xl mx-auto'
        />
      </div>
    </section>
  );
};

const statistics = [
  { desc: '100000¥', isBadge: true, badgeColor: 'bg-[#52EA73]', badgeContent: '1' },
  { desc: '50000¥', isBadge: true, badgeColor: 'bg-[#BAEEEB]', badgeContent: '2' },
  { desc: '25000¥', isBadge: true, badgeColor: 'bg-[#EA9252]', badgeContent: '3' },
  ...new Array(6).fill({ desc: undefined }),
];

export default StatisticsPage;
