import yenIcon from '@svgs/currencies/yen.svg';
import Button from '../../components/ui/Button';
import { paymentIncrementButtons } from './payment-data';
import { ChangeEvent } from 'react';
import { useGetCurrencyIdQuery } from '@/redux/features/services/public/publicService';
import { cn } from '@/lib/utils';
import Icons from '../Icons';
import HeaderPopover from '../layout/header/HeaderPopover';
import { currencies } from '../layout/header/header-data';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrency, setCurrency } from '@/redux/features/slices/appReducer';
import { getSymbolCurrency } from '@/utils/getCurrency';
import { IOrderBody } from '@/types/interfaces';
import { getAmount } from '@/utils/getAmount';

interface IProps {
  handleChange: (name: string, value: string) => void;
  form: IOrderBody;
}
const PaymentCalc = ({ handleChange, form }: IProps) => {
  const currency = useAppSelector(selectCurrency);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetCurrencyIdQuery(currencies.find((c) => c.label == currency)?.id as number);
  const handleCurrency = async (currency: string) => {
    dispatch(setCurrency(currency));
  };

  const incrementValue = (num: number) => {
    handleChange('amount', String(num));
  };

  const handleSumm = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    handleChange('amount', String(value));
  };

  const handleDisable = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
  };

  const num = isSuccess ? getAmount(form.amount, data.rate) : undefined;

  return (
    <div className='flex flex-col gap-[30px] items-start'>
      <div className='py-[3px] px-[10px] bg-[#1D1F1E] rounded-[10px]'>
        <p>
          Курс <span className='text-success'>1¥</span> ≈ <span>{isSuccess && `${data.rate}${data.symbol}`}</span>
        </p>
      </div>
      <label htmlFor='rate-input' className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E]'>
        <input
          id='rate-input'
          type='number'
          value={form.amount != '0' ? form.amount : ''}
          onFocus={handleDisable}
          onChange={handleSumm}
          className='placeholder:text-gray flex-grow bg-transparent py-[10px]'
          placeholder='Введите сумму пополнения в ¥'
        />
        <img src={yenIcon} alt='yen currency' width={30} />
      </label>
      <div className='flex items-center w-full px-[14px] rounded-[10px] bg-[#1D1F1E] py-[5px]'>
        <p
          className={cn('text-white flex-grow bg-transparent', {
            'text-gray': !form.amount || form.amount == '0',
          })}
        >
          {form.amount && form.amount != '0' && isSuccess ? num : `Сумма в ${getSymbolCurrency(currency as string)}`}
        </p>
        <HeaderPopover
          items={currencies}
          onClickItem={(item) => handleCurrency(item.label)}
          position={'bottom'}
          isActive={(item) => item.label == currency}
        >
          {(showPopover, setShowPopover) => (
            <div className='flex items-center cursor-pointer' onClick={() => setShowPopover(!showPopover)}>
              {<Icons.arrowDown isOpen={showPopover} />}
              <img src={currencies.find((c) => c.label == currency)?.icon} alt='rub currency' width={30} />
            </div>
          )}
        </HeaderPopover>
      </div>
      <div className='flex justify-between items-center w-full flex-wrap gap-4'>
        {paymentIncrementButtons.map(({ increment_data, label }, idx) => (
          <Button
            key={idx}
            label={label}
            onClick={() => incrementValue(increment_data)}
            className={cn(
              'border border-solid px-[17px] border-gray bg-transparent [&_p]:text-gray rounded-[10px] py-[5px] justify-center [&_p]:hover:text-success hover:border-success transition-all [&_p]:transition-all font-normal duration-300 flex-grow',
              { '[&_p]:text-success border-success': increment_data == +form.amount }
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentCalc;
