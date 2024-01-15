import RUB from '@svgs/currencies/rub.svg';
import KZT from '@svgs/currencies/kzt.svg';
import USD from '@svgs/currencies/usd.svg';
import { useState } from 'react';
import { ICurrency } from './types/interface';
import { Popover, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

const currencies: ICurrency[] = [
  { name: 'rub', icon: RUB },
  { name: 'usd', icon: USD },
  { name: 'kzt', icon: KZT },
];
const HeaderCurrency = () => {
  const storedCurrency = localStorage.getItem('currency');
  const [activeCur, setActiveCur] = useState<string>(storedCurrency ?? 'rub');

  const handleCurrency = (currency: string) => {
    localStorage.setItem('currency', currency);
    setActiveCur(currency);
  };

  return (
    <Popover className='relative' as='ul'>
      <Popover.Button as='li' className='flex items-center font-semibold leading-6 cursor-pointer'>
        <img
          src={currencies.find((c) => c.name == storedCurrency)?.icon ?? currencies[0].icon}
          alt={currencies.find((c) => c.name == storedCurrency)?.name ?? currencies[0].name}
        />
        <p className='uppercase'>{currencies.find((c) => c.name == storedCurrency)?.name ?? currencies[0].name}</p>
      </Popover.Button>

      <Transition
        as={'li'}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute -left-3 w-24 top-full z-10 mt-3 overflow-hidden rounded-md bg-header shadow-lg ring-1 ring-success'>
          <div className='flex flex-col gap-[10px] px-[10px] py-[10px]'>
            {currencies.map((item, idx) => (
              <button
                key={idx}
                className={cn(
                  'group relative flex items-center rounded-lg text-sm py-[5px] leading-6 hover:bg-gray-50 hover:bg-gray px-[10px]',
                  { 'bg-gray': activeCur == item.name }
                )}
                onClick={() => handleCurrency(item.name)}
              >
                <img src={item.icon} alt={item.name} />
                <p className='uppercase'>{item.name}</p>
              </button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderCurrency;
