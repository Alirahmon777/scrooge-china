import { useState } from 'react';
import { currencies } from './header-data';
import { PositionTypes } from '@/types/types';
import HeaderPopover from './HeaderPopover';

interface IProps {
  position: PositionTypes;
}

const HeaderCurrency = ({ position = 'bottom' }: IProps) => {
  const storedCurrency = localStorage.getItem('currency');
  const [activeCur, setActiveCur] = useState<string>(storedCurrency ?? 'rub');

  const handleCurrency = (currency: string) => {
    localStorage.setItem('currency', currency);
    setActiveCur(currency);
  };

  return (
    <HeaderPopover
      items={currencies}
      onClickItem={(item) => handleCurrency(item.label)}
      position={position}
      isActive={(item) => item.label == activeCur}
    >
      {(showPopover, setShowPopover) => (
        <button
          className={'flex items-center gap-1 cursor-pointer font-semibold leading-6 uppercase'}
          onClick={() => setShowPopover(!showPopover)}
        >
          <img src={currencies.find((c) => c.label == activeCur)?.icon} alt={'header icon'} />
          {activeCur}
        </button>
      )}
    </HeaderPopover>
  );
};

export default HeaderCurrency;
