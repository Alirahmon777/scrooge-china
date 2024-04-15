import GuaranteesCard from '@/components/help/guarantees/GuaranteesCard';
import Seo from '@/layout/seo/Seo';
import { guarantees_data } from '@components/help/guarantees/guarantees-data';

const page = () => {
  return (
    <Seo metaTitle='Scrooge China | Guarantees' hasChat>
      <section className='flex-grow'>
        <h2 className='font-bold text-white mb-5 md:mb-10'>Гарантии</h2>
        <div className='flex flex-col gap-10'>
          {guarantees_data.map(({ icon, title, content }, idx) => (
            <GuaranteesCard title={title} icon={icon} content={content} key={idx} />
          ))}
          <div className='md:text-2xl font-medium [&_span]:text-success flex-col flex gap-5'>
            <p>
              <span>Криптовалюты:</span> USDT
            </p>
            <p>
              <span>Банки и эл. деньги:</span> Tinkoff, SberBank, QIWI, YooMoney, KaspiBank
            </p>
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default page;
