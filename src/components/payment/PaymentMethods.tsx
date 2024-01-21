import Button from '../ui/Button';
import { paymentMethods } from './payment-data';

const PaymentMethods = () => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <h4 className='font-bold'>Выбор метода оплаты</h4>
      <div className='flex flex-wrap gap-x-[70px] gap-y-5'>
        {paymentMethods.map(({ title, buttons }) => (
          <div className='first:flex-grow'>
            <p className='text-gray mb-[10px]'>{title}</p>

            <div className='flex gap-[5px] flex-wrap'>
              {buttons.map(({ label, leftIcon }) => (
                <Button
                  className={'py-2 bg-[#1D1F1E] flex-grow justify-center rounded-[10px] [&_p]:text-white'}
                  label={label}
                  leftIcon={leftIcon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
