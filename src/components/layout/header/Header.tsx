import logo from '@svgs/logo.svg';
import menu from '@svgs/layout/menu.svg';
import steam from '@svgs/layout/steam.svg';
import mobileSteam from '@svgs/layout/mobile-steam.svg';
import HeaderNav from './HeaderNav';
import HeaderCurrency from './HeaderCurrency';
import HeaderLang from './HeaderLang';
import Button from '@components/ui/Button';
import { Link } from 'react-router-dom';
import { AppContext } from '@/context/AppContextProvider';
import { useContext } from 'react';

const Header = () => {
  const { appState } = useContext(AppContext);
  return (
    <header className='bg-header py-[14px] '>
      <div className='container flex items-center justify-between'>
        <Button leftIcon={menu} className='max-tablet:flex bg-transparent hidden' />
        <Link to={''}>
          <img src={logo} alt='logo' className='w-[170px] mobile:w-auto tablet:w-[160px] xl:w-auto' />
        </Link>
        <HeaderNav />
        <div className='tablet:flex hidden gap-[10px] items-center text-sm xl:text-base [&_img]:w-5 [&_img]:xl:w-6'>
          <HeaderCurrency />
          <HeaderLang />
          {appState.isAuth && <Button className='rounded-full w-8 h-8 ml-[27px]' />}
        </div>
        {!appState.isAuth && (
          <>
            <Button
              label='Авторизация через Steam'
              leftIcon={steam}
              className='rounded-[10px] py-1 px-4 hidden lg:flex font-bold text-sm xl:text-base'
            />
            <Button leftIcon={mobileSteam} className='rounded-sm py-[7.5px] px-[3px] lg:hidden gap-0' />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
