import { cn } from '@/lib/utils';
import Button from '../../components/ui/Button';
import { paymentMethods } from './payment-data';
import { IOrderBody } from '@/types/interfaces';

interface IProps {
  handleChange: (name: string, value: string) => void;
  form: IOrderBody;
}

const PaymentMethods = ({ handleChange, form }: IProps) => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <h4 className='font-bold'>Выбор метода оплаты</h4>
      <div className='flex flex-wrap gap-x-[70px] gap-y-5'>
        {paymentMethods.map(({ title, buttons }, idx) => (
          <div className='first:flex-grow' key={idx}>
            <p className='text-gray mb-[10px]'>{title}</p>

            <div className='flex gap-[5px] flex-wrap'>
              {buttons.map(({ id, label, leftIcon }, idx) => (
                <Button
                  onClick={() => {
                    handleChange('payment_method', label);
                    handleChange('requisites_id', id || '');
                  }}
                  key={idx}
                  className={cn(
                    'py-2 px-2 bg-[#1D1F1E] hover:bg-success transition-all flex-grow justify-center rounded-[10px] [&_p]:text-white',
                    {
                      'bg-success': form.payment_method == label,
                    }
                  )}
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
