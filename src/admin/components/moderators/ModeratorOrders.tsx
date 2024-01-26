import OrderCard from './OrderCard';

const ModeratorOrders = () => {
  return (
    <div className='flex flex-col gap-5 max-w-[564px] min-h-full'>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default ModeratorOrders;
