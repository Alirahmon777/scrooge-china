import PaymentCard from '@/components/payment/PaymentCard';
import PaymentChat from '@/components/payment/PaymentChat';
import { useMediaQuery } from 'usehooks-ts';

const PaymentPage = () => {
  const notTable = useMediaQuery('(min-width: 1024px)');
  const bigMobile = useMediaQuery('(min-width: 560px)');
  return (
    <section className='my-[55px] sm:mt-[66px] sm:mb-[200px]'>
      <div className='container'>
        {bigMobile && (
          <h2 className='text-center'>
            Пополнение на <span className='text-success'>buff.163</span>
          </h2>
        )}
        <div className='flex lg:grid lg:grid-cols-2 justify-center lg:justify-between mt-[55px] gap-5'>
          <PaymentCard />
          {notTable && <PaymentChat />}
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
