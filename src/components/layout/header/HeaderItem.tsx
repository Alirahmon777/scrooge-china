import { cn } from '@/lib/utils';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IHeaderNav } from './types/interface';

const timeoutDuration = 120;

const HeaderItem = ({ name, children }: IHeaderNav) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeOutRef = useRef<NodeJS.Timeout>();
  const { t } = useTranslation();

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <Popover className='relative' as='li'>
      {({ open }) => (
        <div onMouseEnter={() => handleEnter(open)} onMouseLeave={() => handleLeave(open)}>
          <Popover.Button
            className={cn(
              'flex items-center gap-x-1 font-semibold leading-6 text-gray text-sm xl:text-base transition-all',
              { 'text-success': open }
            )}
            ref={triggerRef}
          >
            {t(name, 'layout')}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn({ 'rotate-180 !stroke-success': open }, 'transition-all w-5 xl:w-6 stroke-[#68716c]')}
            >
              <g id='chevron-down'>
                <path id='Vector' d='M6 9L12 15L18 9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </g>
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute -left-4 top-full z-50 mt-3 w-[220px] rounded-xl bg-header shadow-lg ring-1 ring-success'>
              <div className='p-4'>
                {children?.map((item) => (
                  <div
                    key={item.name}
                    className='group relative flex items-center gap-x-6 rounded-lg leading-6 hover:bg-gray-50'
                  >
                    <div className='flex-auto'>
                      <Link
                        to={{ pathname: item.href }}
                        className='block font-semibold text-gray transition-all hover:text-white py-4'
                      >
                        {t(item.name, 'layout')}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default HeaderItem;
