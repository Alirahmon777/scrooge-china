const PaymentInfo = () => {
  return (
    <div className='flex items-start gap-[10px]'>
      <span className='w-16 h-16 bg-success rounded-[10px]' />
      <div className='flex flex-col gap-[15px]'>
        <div className=''>
          <h4 className='text-2xl font-bold'>Ник Нэйм</h4>
          <p className='text-gray mt-[5px]'>
            Номер заказа: <span></span>
          </p>
        </div>
        <ul className='flex gap-10'>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Сумма</p>
            <p>₽ 1204.2</p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Курс</p>
            <p>
              1¥ ≈ <span>14.60₽</span>
            </p>
          </li>
          <li className='flex flex-col gap-[5px]'>
            <p className='text-gray'>Получите в ¥ </p>
            <p>1000¥</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentInfo;
