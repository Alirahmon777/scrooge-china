import PaymentCard from '@/components/payment/PaymentCard';
import PaymentChat from '@/components/payment/PaymentChat';

const PaymentPage = () => {
  return (
    <section className='mt-[66px] mb-[200px]'>
      <div className='container'>
        <h2 className='text-center'>
          Пополнение на <span className='text-success'>buff.163</span>
        </h2>
        <div className='flex justify-between items-stretch mt-[55px]'>
          <PaymentCard />
          <PaymentChat />
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
