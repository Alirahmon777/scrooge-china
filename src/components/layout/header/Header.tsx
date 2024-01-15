import logo from '@svgs/logo.svg';
import steam from '@svgs/steam.svg';
import HeaderNav from './HeaderNav';
import HeaderCurrency from './HeaderCurrency';
import HeaderLang from './HeaderLang';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { AppContext } from '@/context/AppContextProvider';
import { useContext } from 'react';
const Header = () => {
  const { appState } = useContext(AppContext);
  return (
    <header className='bg-header py-[14px]'>
      <div className='container flex items-center justify-between'>
        <Link to={''}>
          <img src={logo} alt='logo' />
        </Link>
        <HeaderNav />
        <div className='flex gap-[10px] items-center'>
          <HeaderCurrency />
          <HeaderLang />
          {appState.isAuth && <Button label='' className='rounded-full w-8 h-8 ml-[27px]' />}
        </div>
        {!appState.isAuth && (
          <Button label='Авторизация через Steam' leftIcon={steam} className='rounded-[10px] py-1 px-4' />
        )}
      </div>
    </header>
  );
};

export default Header;
