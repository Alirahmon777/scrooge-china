import yenIcon from '@svgs/currencies/yen.svg';
import rubIcon from '@svgs/currencies/rub.svg';
import Button from '../ui/Button';
import { paymentIncrementButtons } from './payment-data';
import { ChangeEvent, useState } from 'react';
import { useGetCurrencyIdQuery } from '@/redux/features/services/public/publicService';
import { cn } from '@/lib/utils';

const PaymentCalc = () => {
  const [number, setNumber] = useState<number>(0);
  const [summ, setSumm] = useState<number>(0);
  const { data, isSuccess } = useGetCurrencyIdQuery(1);

  const incrementValue = (num: number) => {
    setNumber(num);
    setSumm(num * Number(data?.rate));
  };

  const handleSumm = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setNumber(Math.abs(value));
    setSumm(Math.abs(value * Number(data?.rate)));
  };

  const handleDisable = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
  };

  return (
    <div className='flex flex-col gap-[30px] items-start'>
      <div className='py-[3px] px-[10px] bg-[#1D1F1E] rounded-[10px]'>
        <p>
          Курс <span className='text-success'>1¥</span> ≈ <span>{isSuccess && `${data.rate}${data.symbol}`}</span>
        </p>
      </div>
      <div className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E]'>
        <input
          type='number'
          value={number ? number : undefined}
          onFocus={handleDisable}
          onChange={handleSumm}
          className='placeholder:text-gray flex-grow bg-transparent py-[10px]'
          placeholder='Введите сумму пополнения в ¥'
        />
        <img src={yenIcon} alt='yen currency' width={30} />
      </div>
      <div className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E] py-[5px]'>
        <p className={cn('text-gray flex-grow bg-transparent', { 'text-white': !!summ })}>
          {summ ? Math.round(summ) : 'Сумма в ₽'}
        </p>
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
