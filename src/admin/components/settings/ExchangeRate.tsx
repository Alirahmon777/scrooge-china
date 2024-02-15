import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import AdminButton from '../Button';
import { useState } from 'react';
import ChangeRateModal from '../ChangeRateModal';
import { useLockedBody } from 'usehooks-ts';

const ExchangeRate = () => {
  const { data, isSuccess } = useGetCurrencyQuery();
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
        <h3 className='text-[32px] font-medium'>Изменить курс на сайте</h3>
        <div className='bg-header rounded-[10px] p-6'>
          <p className='text-gray mb-[10px]'>Курс 1¥</p>
          <ul className='grid grid-cols-[150px,150px,150px,120px] items-center gap-5 [&_li]:p-[10px] [&_li]:bg-[#1D1F1E] [&_li]:rounded-[10px]'>
            {isSuccess &&
              data.map(({ id, rate, symbol }) => (
                <li key={id}>
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
