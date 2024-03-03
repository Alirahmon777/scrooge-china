import { useTranslation } from 'react-i18next';
import { ILanguageCurrencyNav } from './types/interface';
import HeaderPopover from './HeaderPopover';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import Icons from '@/components/Icons';

interface IProps {
  label: string;
  items: ILanguageCurrencyNav[];
}

const HeaderItem = ({ label, items }: IProps) => {
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
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
          {<Icons.arrowDown isOpen={isOpen} />}
        </button>
      )}
    </HeaderPopover>
  );
};

export default HeaderItem;
