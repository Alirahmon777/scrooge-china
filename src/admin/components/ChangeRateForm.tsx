import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from './Input';
import { getCurrency } from '@/utils/getCurrency';
import Button from '@/components/ui/Button';
import { MoonLoader } from 'react-spinners';
import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import { useUpdateCurrencyMutation } from '@/redux/features/services/admin/adminSettings';
import { handleAdminError } from '@/utils/handleError';

interface IProps {
  isLoading?: boolean;
  id: string;
  symbol: string;
  rate: string;
  handleClose: (value: boolean) => void;
}
const ChangeRateForm: React.FC<IProps> = ({ isLoading, id, symbol, rate, handleClose }) => {
  const { refetch } = useGetCurrencyQuery();
  const cur = getCurrency(symbol);

  const [value, setValue] = useState<string>(rate);
  const [triger] = useUpdateCurrencyMutation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await triger({ id, rate: value });
      await refetch().unwrap();
    } catch (error) {
      handleAdminError(error);
    } finally {
      handleClose(false);
    }
  };
  const currencyType =
    cur == 'RUB' ? 'рубль(₽)' : cur == 'USDT' ? 'USDT' : cur == 'KZT' ? 'KZT(₸)' : cur == '$' ? 'USDT' : undefined;
  return (
    <div className='mt-5'>
      <p className='mb-2'>{currencyType}</p>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <Input
          defaultValue={rate}
          labelClass='flex-1'
          value={value}
          onChange={handleChange}
          id={`${cur?.toLowerCase()}-input`}
          name={cur?.toLowerCase()}
          placeholder={`Введите курс ${currencyType}`}
          type='text'
        />
        <Button
          loadingElement={isLoading ? <MoonLoader color='#fff' speedMultiplier={0.6} size={20} /> : undefined}
          label={!isLoading ? 'Изменить' : undefined}
          variant='admin'
          className='justify-center py-[5.5px] font-normal'
        />
      </form>
    </div>
  );
};

export default ChangeRateForm;
