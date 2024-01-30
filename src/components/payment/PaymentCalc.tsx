import yenIcon from '@svgs/currencies/yen.svg';
import rubIcon from '@svgs/currencies/rub.svg';
import Button from '../ui/Button';
import { paymentIncrementButtons } from './payment-data';
import { useState } from 'react';

const PaymentCalc = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);

  const incrementValue = (num: number) => {
    setNumber(num);
  };

  return (
    <div className='flex flex-col gap-[30px] items-start'>
      <div className='py-[3px] px-[10px] bg-[#1D1F1E] rounded-[10px]'>
        <p>
          Курс <span className='text-success'>1¥</span> ≈ <span>14.60₽</span>
        </p>
      </div>
      <div className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E]'>
        <input
          type='number'
          value={number ? number : undefined}
          onChange={(e) => setNumber(+e.target.value)}
          className='placeholder:text-gray flex-grow bg-transparent py-[10px]'
          placeholder='Введите сумму пополнения в ¥'
        />
        <img src={yenIcon} alt='yen currency' width={30} />
      </div>
      <div className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E]'>
        <input
          type='number'
          className='placeholder:text-gray flex-grow bg-transparent py-[10px]'
          disabled
          placeholder='Сумма в ₽'
        />
        <img src={rubIcon} alt='rub currency' width={30} />
      </div>
      <div className='flex justify-between items-center w-full flex-wrap gap-4'>
        {paymentIncrementButtons.map(({ increment_data, label }, idx) => (
          <Button
            key={idx}
            label={label}
            onClick={() => incrementValue(increment_data)}
            className='border border-solid px-[17px] border-gray bg-transparent [&_p]:text-gray rounded-[10px] py-[5px] justify-center [&_p]:hover:text-success hover:border-success transition-all [&_p]:transition-all font-normal duration-300 flex-grow'
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentCalc;
