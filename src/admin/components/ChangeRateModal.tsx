import Button from '@/components/ui/Button';
import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import ChangeRateForm from './ChangeRateForm';

interface IProps {
  isLoading?: boolean;
  title: string;
  handleClose: (value: boolean) => void;
}

const ChangeRateModal = ({ isLoading, title, handleClose }: IProps) => {
  const { data, isSuccess } = useGetCurrencyQuery(undefined, {
    selectFromResult: ({ data, isSuccess }) => ({
      data: data ? [...data].sort((a, b) => +a.id - +b.id) : [],
      isSuccess,
    }),
  });

  return (
    <div
      className={'w-full fixed bg-[#00000090] top-0 left-0 z-[999] h-full flex justify-center items-center my-auto p-5'}
      onClick={() => handleClose(false)}
    >
      <div className={'bg-header rounded-[10px] py-6 px-12 w-[500px]'} onClick={(e) => e.stopPropagation()}>
        <h3 className='text-[32px] font-medium text-center'>{title}</h3>
        {isSuccess &&
          data.map(({ id, symbol, rate }, idx) => (
            <ChangeRateForm
              id={id}
              rate={rate}
              key={idx}
              symbol={symbol}
              handleClose={handleClose}
              isLoading={isLoading}
            />
          ))}
        <Button
          label={'Отмена'}
          variant='outline'
          className='justify-center py-[5.5px] font-normal w-full mt-5'
          type='button'
          onClick={() => handleClose(false)}
        />
      </div>
    </div>
  );
};

export default ChangeRateModal;
