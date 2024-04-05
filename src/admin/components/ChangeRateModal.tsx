import { useGetCurrencyQuery } from '@/redux/features/services/public/publicService';
import ChangeRateForm from './ChangeRateForm';
import AddSettingModalTemplate from './AddSettingModal';

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
    <AddSettingModalTemplate title={title} handleClose={handleClose}>
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
    </AddSettingModalTemplate>
  );
};

export default ChangeRateModal;
