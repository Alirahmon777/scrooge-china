import { Popover, Transition } from '@headlessui/react';
import globe from '@svgs/layout/globe.svg';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from './header-data';
import { ILangCurrencyProps } from './types/interface';

const HeaderLang = ({ position = 'bottom' }: ILangCurrencyProps) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Popover className='relative' as='ul'>
      <Popover.Button as='li' className='flex items-center gap-1 cursor-pointer font-semibold leading-6'>
        <img src={globe} alt={i18n.language} />
        <p className='uppercase'> {i18n.language == 'ru' ? 'rus' : 'eng'}</p>
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
        <Popover.Panel
          className={cn(
            'absolute -left-3 w-24 z-10 overflow-hidden rounded-md bg-header shadow-lg ring-1 ring-success',
            { 'top-full mt-3': position == 'bottom' },
            { 'bottom-full mb-3': position == 'top' }
          )}
        >
          <div className='flex flex-col gap-1 px-[10px] py-[8px]'>
            {languages.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleLang(item.lang);
                  navigate(pathname.replace(/^(\/en|\/ru)(|$)/, `/${item.lang}`));
                }}
                className={cn(
                  'group relative flex items-center rounded-lg gap-1 text-sm py-[3.5px] leading-6 hover:bg-gray-50 hover:bg-gray px-[10px]',
                  { 'bg-gray': item.lang === i18n.language }
                )}
              >
                <img src={globe} alt={item.label} />
                <p className='uppercase'>{item.label}</p>
              </button>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderLang;
