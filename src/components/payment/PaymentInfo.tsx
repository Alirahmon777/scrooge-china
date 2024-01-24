import { useMediaQuery } from 'usehooks-ts';

const PaymentInfo = () => {
  const maxSm = useMediaQuery('not all and (min-width:640px)');
  return (
    <div className='flex max-sm:flex-col items-start gap-[10px]'>
      <div className='flex items-start gap-[10px]'>
        <span className='min-w-16 min-h-16 bg-success rounded-[10px]' />
        {maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>Ник Нэйм</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span></span>
            </p>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-[10px] mobile:gap-[15px] w-full'>
        {!maxSm && (
          <div className=''>
            <h4 className='text-2xl font-bold'>Ник Нэйм</h4>
            <p className='text-gray mt-[5px]'>
              Номер заказа: <span></span>
            </p>
          </div>
        )}
        <ul className='flex max-mobile:justify-between mobile:gap-10'>
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
