import StatisticsCard from '@/components/statistics/StatisticsCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const StatisticsPage = () => {
  return (
    <section className='mt-[100px] pb-[162px]'>
      <div className='container  text-center'>
        <h2 className='text-6xl'>Достижения</h2>
        <ul className='grid grid-cols-2 gap-5 mt-[30px] max-w-[575px] mx-auto'>
          {statistics.map(({ desc, isBadge, badgeColor, badgeContent }, idx) => {
            if (isBadge) {
              return (
                <Badge badgeColor={badgeColor} badgeContent={badgeContent} key={idx}>
                  <StatisticsCard desc={desc} />
                </Badge>
              );
            }
            return <StatisticsCard desc={desc} key={idx} />;
          })}
        </ul>

        <Button
          label='Загрузить ещё'
          className='bg-header [&_p]:text-white py-[14px] px-6 mt-[51px] rounded-[10px] font-bold text-2xl mx-auto'
        />
      </div>
    </section>
  );
};

const statistics = [
  { desc: '100000¥', isBadge: true, badgeColor: 'bg-[#52EA73]', badgeContent: '1' },
  { desc: '50000¥', isBadge: true, badgeColor: 'bg-[#BAEEEB]', badgeContent: '2' },
  { desc: '25000¥', isBadge: true, badgeColor: 'bg-[#EA9252]', badgeContent: '3' },
  ...new Array(7).fill({ desc: undefined }),
];

export default StatisticsPage;
