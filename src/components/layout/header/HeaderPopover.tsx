import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RefObject, useEffect, useRef, useState } from 'react';
import { ILanguageCurrencyNav, IPopoverProps } from './types/interface';
import { PositionTypes } from '@/types/types';
import { useTranslation } from 'react-i18next';

const timeoutDuration = 120;

const HeaderPopover = ({
  position = 'bottom',
  isActive,
  items,
  onClickItem,
  children,
  isHover,
  contentClass,
  hasLang,
  triggerRef,
}: IPopoverProps) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const timeOutRef = useRef<NodeJS.Timeout>();
  const { t } = useTranslation();
  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
      setShowPopover(false);
    }
  };

  const handleEnter = () => {
    clearTimeout(timeOutRef.current);
    !showPopover && triggerRef?.current?.click();
  };

  const handleLeave = () => {
    timeOutRef.current = setTimeout(() => {
      showPopover && triggerRef?.current?.click();
    }, timeoutDuration);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className='relative'
      ref={componentRef}
      onMouseEnter={isHover ? handleEnter : undefined}
      onMouseLeave={isHover ? handleLeave : undefined}
    >
      {children(showPopover, setShowPopover)}
      <AnimatePresence>
        {showPopover && (
          <motion.div
            initial={{ opacity: 0, translateY: 1 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 1 }}
            className={cn(
              'absolute w-14 z-10 overflow-hidden rounded-[10px] bg-header shadow-xl shadow-zinc-950',
              { 'top-full mt-3': position === 'bottom' },
              { 'bottom-full mb-3': position === 'top' },
              contentClass
            )}
          >
            <div className='flex flex-col gap-[10px] px-[12px] py-[8px]'>
              {items?.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onClickItem(item)}
                  className={cn('group hover:text-success transition-all uppercase', {
                    'text-success': isActive && isActive(item),
                  })}
                >
                  {hasLang ? t(item.label, 'layout') : item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderPopover;
