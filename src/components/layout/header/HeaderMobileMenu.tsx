import React from 'react';
import { motion } from 'framer-motion';
import HeaderMobileNav from './HeaderMobileNav';
import logo from '@svgs/layout/footer-logo.svg';
import close from '@svgs/layout/close.svg';
import { useLockedBody } from 'usehooks-ts';
import HeaderLang from './HeaderLang';
import HeaderCurrency from './HeaderCurrency';
interface IProps {
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobileMenu = ({ setOpenMobileMenu }: IProps) => {
  const [_, setLocked] = useLockedBody(true, 'root');
  return (
    <motion.div
      className='bg-header w-[282px] sm:w-[72%] fixed h-full z-[999] px-5 pt-4 overflow-y-auto pb-5'
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      exit={{ x: -400 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='flex justify-between items-center'>
        <img src={logo} alt='menu logo' width={40} />
        <button
          onClick={() => {
            setOpenMobileMenu(false);
            setLocked(false);
          }}
        >
          <img src={close} alt='close icon' width={40} />
        </button>
      </div>
      <HeaderMobileNav setOpenMobileMenu={setOpenMobileMenu} />
      <div className='flex mt-[50px] gap-4'>
        <HeaderCurrency />
        <HeaderLang />
      </div>
    </motion.div>
  );
};

export default HeaderMobileMenu;
