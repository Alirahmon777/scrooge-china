import { useTranslation } from 'react-i18next';
import { ILanguageCurrencyNav } from './types/interface';
import HeaderPopover from './HeaderPopover';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

const HeaderItem = ({ label, items }: ILanguageCurrencyNav) => {
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  //
  return (
    <HeaderPopover
      items={items}
      triggerRef={triggerRef}
      onClickItem={(item) => navigate(item.href as string)}
      position='bottom'
      isHover
      contentClass='w-[200px] [&_button]:normal-case [&_button]:text-gray [&_button]:text-left '
      hasLang
    >
      {(isOpen, setShowPopover) => (
        <button
          className={cn(
            'flex items-center gap-x-1 font-semibold leading-6 text-gray text-sm xl:text-base transition-all',
            { 'text-success': isOpen }
          )}
          ref={triggerRef}
          onClick={() => setShowPopover(!isOpen)}
        >
          {t(label, 'layout')}
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn({ 'rotate-180 !stroke-success': isOpen }, 'transition-all w-5 xl:w-6 stroke-[#68716c]')}
          >
            <g id='chevron-down'>
              <path id='Vector' d='M6 9L12 15L18 9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </g>
          </svg>
        </button>
      )}
    </HeaderPopover>
  );
};

export default HeaderItem;
