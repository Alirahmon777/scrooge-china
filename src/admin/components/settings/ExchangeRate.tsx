import AdminButton from '../Button';

const ExchangeRate = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-[32px] font-medium'>Изменить курс на сайте</h3>
      <div className='bg-header rounded-[10px] p-6'>
        <p className='text-gray mb-[10px]'>Курс 1¥</p>
        <ul className='grid grid-cols-[150px,150px,150px,120px] items-center gap-5 [&_li]:p-[10px] [&_li]:bg-[#1D1F1E] [&_li]:rounded-[10px]'>
          <li>13.90 ₽</li>
          <li>0.14 USDT</li>
          <li>63.57 ₸</li>
          <li className='!p-0'>
            <AdminButton label='Изменить' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExchangeRate;
