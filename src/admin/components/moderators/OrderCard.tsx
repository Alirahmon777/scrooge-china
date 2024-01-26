import Button from '@/components/ui/Button';

const OrderCard = () => {
  return (
    <div className='p-6 bg-header rounded-[10px] flex items-center justify-between'>
      <div className='flex gap-[10px]'>
        <span className='w-[80px] h-[80px] rounded-[10px] bg-[#D9D9D9]' />
        <div className='text-gray'>
          <div className='flex items-center gap-[5px]'>
            <span className='w-[10px] h-[10px] bg-success rounded-full' />
            <p className='text-xs'>1 час назад</p>
          </div>
          <h3 className='my-[5px] text-2xl text-white'>User1</h3>
          <p>Покупка 1309¥ | 293 - Tinkoff</p>
        </div>
      </div>
      <Button variant='admin' label='К заказу' />
    </div>
  );
};

export default OrderCard;
