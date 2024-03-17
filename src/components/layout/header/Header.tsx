import logo from '@svgs/logo.svg';
import menu from '@svgs/layout/menu.svg';
import steam from '@svgs/layout/steam.svg';
import mobileSteam from '@svgs/layout/mobile-steam.svg';
import HeaderNav from './HeaderNav';
import HeaderCurrency from './HeaderCurrency';
import HeaderLang from './HeaderLang';
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderMobileMenu from './HeaderMobileMenu';
import { useLockedBody, useMediaQuery } from 'usehooks-ts';
import { AnimatePresence } from 'framer-motion';
import { useGetAuthLinkQuery } from '@/redux/features/services/auth/authService';
import { openSmallTab } from '@/utils/openSmallTab';
import { MoonLoader } from 'react-spinners';
import { selectAuth, setUser, setUserToken } from '@/redux/features/slices/auth/authReducer';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { TStoredUser } from '@/types/types';
import { handleError } from '@/utils/handleError';

const Header = () => {
  const auth = useAppSelector(selectAuth);
  const { data, isLoading } = useGetAuthLinkQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    i18n: { language: lng },
  } = useTranslation();
  const [_, setLocked] = useLockedBody(false, 'root');
  const notMobile = useMediaQuery('(min-width: 820px)');
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  useEffect(() => {
    if (!openMobileMenu) {
      setLocked(false);
    }
  }, [openMobileMenu]);

  const handleLogin = () => {
    try {
      data?.link ? openSmallTab(data.link, window) : null;

      window.addEventListener('storage', () => {
        const userData = window.localStorage.getItem('user');
        if (userData && typeof userData === 'string') {
          const {token, ...user}: TStoredUser = JSON.parse(userData);

          dispatch(setUser({  user }));
          dispatch(setUserToken({ token }));
        }
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <header className='bg-header'>
      <AnimatePresence>
        {openMobileMenu && !notMobile && <HeaderMobileMenu setOpenMobileMenu={setOpenMobileMenu} />}
      </AnimatePresence>
      <div className='container flex items-center justify-between py-[14px]'>
        {!notMobile && (
          <Button
            leftIcon={menu}
            className='max-tablet:flex bg-transparent hidden'
            onClick={() => {
              setOpenMobileMenu(!openMobileMenu);
              setLocked(true);
            }}
          />
        )}
        <Link to={''}>
          <img src={logo} alt='logo' className='w-[170px] mobile:w-auto tablet:w-[160px] xl:w-auto' />
        </Link>
        {notMobile && <HeaderNav />}
        <div className='tablet:flex hidden gap-[10px] items-center text-sm xl:text-base [&_img]:w-5 [&_img]:xl:w-6'>
          <HeaderCurrency position='bottom' />
          <HeaderLang position='bottom' />
          {auth.user && auth.token && (
            <Button className='rounded-full w-8 h-8 ml-[27px]' onClick={() => navigate(`/${lng}/profile`)} />
          )}
        </div>
        {!notMobile && auth.user && auth.token && (
          <Button className='rounded-full w-8 h-8' onClick={() => navigate(`/${lng}/profile`)} />
        )}
        {!auth.user &&
          (!isLoading ? (
            <>
              <Button
                label='Авторизация через Steam'
                leftIcon={steam}
                onClick={handleLogin}
                className='rounded-[10px] py-1 px-4 hidden lg:flex font-bold text-sm xl:text-base'
              />
              <Button
                leftIcon={mobileSteam}
                className='rounded-sm py-[7.5px] px-[3px] lg:hidden gap-0'
                onClick={handleLogin}
              />
            </>
          ) : (
            <MoonLoader color='#52EA77' speedMultiplier={0.6} size={20} />
          ))}
      </div>
    </header>
  );
};

export default Header;
