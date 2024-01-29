import { Routes } from './routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TStoredUser } from './types/types';
import { useDispatch } from 'react-redux';
import { setUser, setUserToken } from './redux/features/slices/auth/authReducer';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const storedUser = localStorage.getItem('user');

  const changeLng = (lng: string) => {
    if (pathname.includes(`/${lng}`)) {
      return i18n.changeLanguage(lng);
    }
  };

  if (storedUser && typeof storedUser === 'string') {
    const user: TStoredUser = JSON.parse(storedUser);

    dispatch(setUser({ user: { email: user.email, steam_id: user.steam_id, trade_url: user.trade_url } }));

    if (user.token) {
      dispatch(setUserToken({ token: user.token }));
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('currency')) localStorage.setItem('currency', 'rub');
  }, []);

  useEffect(() => {
    changeLng('ru');
    changeLng('en');
  }, [pathname]);

  return <Routes />;
}

export default App;
