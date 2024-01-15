import { cn } from '@/lib/utils';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import chevronDown from '@svgs/chevron-down.svg';

interface IProps {
  name: string;
  children?: IPropsChildren[];
}

interface IPropsChildren {
  name: string;
  href: string;
  description?: string;
}

const HeaderItem = ({ name, children }: IProps) => {
  return (
    <Popover className='relative' as='li'>
      {({ open }) => (
        <>
          <Popover.Button className='flex items-center gap-x-1 font-semibold leading-6 text-gray'>
            {name}
            <img src={chevronDown} alt='arrow down' className={cn({ 'rotate-180': open }, 'transition-all')} />
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
            <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-header shadow-lg ring-1 ring-success'>
              <div className='p-4'>
                {children?.map((item) => (
                  <div
                    key={item.name}
                    className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                  >
                    <div className='flex-auto'>
                      <Link to={item.href} className='block font-semibold text-gray'>
                        {item.name}
                        <span className='absolute inset-0' />
                      </Link>
                      <p className='mt-1 text-success'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default HeaderItem;
