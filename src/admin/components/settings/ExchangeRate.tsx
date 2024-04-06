import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import AdminButton from '../Button';
import { useEffect, useState } from 'react';
import ChangeRateModal from '../ChangeRateModal';
import { useLockedBody } from 'usehooks-ts';
import { useAddCurrencyMutation } from '@/redux/features/services/admin/adminSettings';
import { handleSimpleError } from '@/utils/handleError';

const ExchangeRate = () => {
  const { data, isSuccess, refetch } = useGetCurrencyQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data ? [...data].sort((a, b) => +a.id - +b.id) : [],
      isSuccess,
    }),
  });

  const [showModal, setShowModal] = useState(false);
  const [triger] = useAddCurrencyMutation();

  const [_, setlocked] = useLockedBody(false, 'root');

  const handleShowClose = (value: boolean) => {
    setlocked(value);
    setShowModal(value);
  };

  const seedingCurrency = async () => {
    try {
      for (let i = 0; i < currencies.length; i++) {
        const { symbol, rate } = currencies[i];
        if (isSuccess && data.find((item) => item.symbol === symbol)) {
          continue;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
        await triger({ symbol, rate }).unwrap();
        await refetch().unwrap();
      }
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      seedingCurrency();
    }
  }, [isSuccess]);

  return (
    <>
      {showModal && <ChangeRateModal handleClose={handleShowClose} title='Изменить курс на сайте' />}
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[32px] font-medium'>Изменить курс на сайте</h3>
        </div>
        <div className='bg-header rounded-[10px] p-6'>
          <p className='text-gray mb-[10px]'>Курс 1¥</p>
          <ul className='grid grid-cols-[150px,150px,150px,120px] items-center gap-5 [&_li]:p-[10px] [&_li]:bg-[#1D1F1E] [&_li]:rounded-[10px]'>
            {isSuccess &&
              data?.map(({ rate, symbol }, idx) => (
                <li key={idx}>
                  {rate} {symbol}
                </li>
              ))}
            {!data.length && (
              <>
                <li className='h-full'>нет данных</li>
                <li className='h-full'>нет данных</li>
                <li className='h-full'>нет данных</li>
              </>
            )}

            <li className='!p-0'>
              <AdminButton label='Изменить' onClick={() => handleShowClose(true)} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExchangeRate;

const currencies = [
  { symbol: '₽', rate: '0.14' },
  { symbol: 'USDT', rate: '0.11' },
  { symbol: '₸', rate: '0.63' },
];
