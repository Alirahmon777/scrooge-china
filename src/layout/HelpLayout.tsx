import HelpLayoutNav from '@components/layout/HelpLayoutNav';
import Button from '@components/ui/Button';
import logo from '@svgs/layout/footer-logo.svg';
import close from '@svgs/layout/close.svg';
import moreIcon from '@svgs/help/more.svg';
import { IChildProps } from '@/types/interfaces';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLockedBody } from 'usehooks-ts';

interface IProps extends Partial<IChildProps> {
  hasChildren?: boolean;
}
const HelpLayout = ({ hasChildren, children }: IProps) => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [_, setLocked] = useLockedBody(false, 'root');

  useEffect(() => {
    if (!showMenu) {
      setLocked(false);
    }
  }, [showMenu]);

  return (
    <div className='container flex mt-5 lg:mt-[60px] gap-[23px] mb-10 lg:mb-[60px] flex-col lg:flex-row'>
      <AnimatePresence>
        {(showMenu || notTablet) && (
          <motion.aside
            className='min-w-[270px] max-lg:py-5 fixed h-full max-lg:overflow-y-auto lg:sticky top-0 left-0 lg:left-auto lg:top-5 max-lg:bg-header max-lg:px-5'
            initial={notTablet ? false : { x: -400 }}
            animate={notTablet ? false : { x: 0 }}
            exit={notTablet ? undefined : { x: -400 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {!notTablet && (
              <div className='flex justify-between items-center mb-10'>
                <img src={logo} alt='menu logo' width={40} />
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setLocked(false);
                  }}
                >
                  <img src={close} alt='close icon' width={40} />
                </button>
              </div>
            )}
            <HelpLayoutNav setShowMenu={setShowMenu} />
          </motion.aside>
        )}
      </AnimatePresence>

      {!notTablet && (
        <div>
          <Button
            leftIcon={moreIcon}
            onClick={() => {
              setShowMenu(true);
              setLocked(true);
            }}
            className='bg-transparent gap-0.5 [&_p]:text-gray font-normal'
            label='Дополнительно'
          />
        </div>
      )}
      <Outlet />
      {hasChildren && children}
    </div>
  );
};

export default HelpLayout;
