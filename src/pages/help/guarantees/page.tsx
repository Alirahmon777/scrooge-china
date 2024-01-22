import GuaranteesCard from '@/components/help/guarantees/GuaranteesCard';
import { guarantees_data } from '@components/help/guarantees/guarantees-data';

const page = () => {
  return (
    <section className='flex-grow'>
      <h2 className='font-bold text-white mb-5 md:mb-10'>Гарантии</h2>
      <div className='flex flex-col gap-10'>
        {guarantees_data.map(({ icon, title, content }, idx) => (
          <GuaranteesCard title={title} icon={icon} content={content} key={idx} />
        ))}
        <div className='md:text-2xl font-medium [&_span]:text-success flex-col flex gap-5'>
          <p>
            <span>Криптовалюты:</span> Bitcoin Wallet, Ethereum Wallet, Tether, Monero & другие.
          </p>
          <p>
            <span>Банки и эл. деньги:</span> VISA, MasterCard, YooMoney (ex. Yandex.Money), QIWI, Privat24 Bitcoin
            Wallet, Ethereum Wallet, Tether, PayPal, Monero & другие.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
