import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import AdminButton from '../Button';
import { useState } from 'react';
import ChangeRateModal from '../ChangeRateModal';
import { useLockedBody } from 'usehooks-ts';
import Button from '@/components/ui/Button';

const ExchangeRate = () => {
  const { data, isSuccess } = useGetCurrencyQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data ? [...data].sort((a, b) => +a.id - +b.id) : [],
      isSuccess,
    }),
  });

  const [showModal, setShowModal] = useState(false);

  const [_, setlocked] = useLockedBody(false, 'root');

  const handleShowClose = (value: boolean) => {
    setlocked(value);
    setShowModal(value);
  };

  return (
    <>
      {showModal && <ChangeRateModal handleClose={handleShowClose} title='Изменить курс на сайте' />}
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[32px] font-medium'>Изменить курс на сайте</h3>
          <Button label='Добавить' variant='admin' className='py-[8px] px-[10px] text-sm' />
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
