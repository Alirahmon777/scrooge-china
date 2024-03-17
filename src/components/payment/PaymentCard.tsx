import { useMediaQuery } from 'usehooks-ts';
import Button from '../../components/ui/Button';
import PaymentCalc from './PaymentCalc';
import PaymentMethods from './PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAddUserOrderMutation } from '@/redux/features/services/user/userService';
import { FormEvent, useEffect, useState } from 'react';
import { IOrderBody } from '@/types/interfaces';
import { handleSimpleError } from '@/utils/handleError';
import { useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrency } from '@/redux/features/slices/appReducer';
// import { getSymbolCurrency } from '@/utils/getCurrency';
import { useGetCurrencyIdQuery } from '@/redux/features/services/public/publicService';
import { currencies } from '../layout/header/header-data';

const PaymentCard = () => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  const currency = useAppSelector(selectCurrency);
  const { data, isSuccess } = useGetCurrencyIdQuery(currencies.find((c) => c.label == currency)?.id as string);
  const initialForm: IOrderBody = { payment_method: '', amount: '', currency: isSuccess ? data?.symbol : '' };
  const [form, setForm] = useState(initialForm);
  const [addOrder] = useAddUserOrderMutation();

  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/${language}/payment-chat`);
  };
  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addOrder({ ...form, currency: isSuccess ? data?.symbol : '' }).unwrap();
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, currency: isSuccess ? data?.symbol : '' }));
  }, [currency, isSuccess]);

  return (
    <div className='p-0 lg:px-[40px] lg:py-10 xl:px-[55px] xl:pt-[49px] xl:pb-[38px] lg:bg-header rounded-[10px] max-w-[564px]'>
      <div className='flex flex-col gap-5 lg:gap-[50px]'>
        <PaymentCalc handleChange={handleChange} form={form} />
        <div className='w-full h-[1px] bg-gray' />
        <PaymentMethods handleChange={handleChange} form={form} />
        <Button
          label='Пополнить'
          onClick={handleSubmit}
          type='submit'
          className='w-full py-[10px] rounded-[10px] justify-center'
        />
        {!notTablet && <Button label='Чат с модератором' variant='outline' onClick={handleRedirect} />}
      </div>
    </div>
  );
};

export default PaymentCard;
