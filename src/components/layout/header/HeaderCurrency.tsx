import { currencies } from './header-data';
import { PositionTypes } from '@/types/types';
import HeaderPopover from './HeaderPopover';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { selectCurrency, setCurrency } from '@/redux/features/slices/appReducer';

interface IProps {
  position: PositionTypes;
}

const HeaderCurrency = ({ position = 'bottom' }: IProps) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);

  const handleCurrency = (currency: string) => {
    dispatch(setCurrency(currency));
  };

  return (
    <HeaderPopover
      items={currencies}
      onClickItem={(item) => handleCurrency(item.label)}
      position={position}
      isActive={(item) => item.label == currency}
    >
      {(showPopover, setShowPopover) => (
        <button
          className={'flex items-center gap-1 cursor-pointer font-semibold leading-6 uppercase'}
          onClick={() => setShowPopover(!showPopover)}
        >
          <img src={currencies.find((c) => c.label == currency)?.icon} alt={'header icon'} />
          {currency}
        </button>
      )}
    </HeaderPopover>
  );
};

export default HeaderCurrency;
