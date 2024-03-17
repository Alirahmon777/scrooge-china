import { Routes } from './routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TStoredUser } from './types/types';
import { useDispatch } from 'react-redux';
import { setUser, setUserToken } from './redux/features/slices/auth/authReducer';
import { useGetProfileQuery, usePatchStatusQuery } from './redux/features/services/user/userService';
import { handleError } from './utils/handleError';
import { handleUserLogout } from './utils/handleLogout';
import 'date-time-format-timezone';

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const storedUser = localStorage.getItem('user');
  const { refetch } = useGetProfileQuery(undefined, { skip: !storedUser, pollingInterval: 60000 });
  usePatchStatusQuery(undefined, { skip: !storedUser, pollingInterval: 25000 });

  const checkUserToken = async () => {
    try {
      const user = await refetch().unwrap();
      if (!user) {
        dispatch(setUser({ user: null }));
        dispatch(setUserToken({ token: null }));
        handleUserLogout();
        return;
      }
      dispatch(
        setUser({
          user,
        })
      );
    } catch (error) {
      handleError(error);
    }
  };

  const changeLng = (lng: string) => {
    if (pathname.includes(`/${lng}`)) {
      return i18n.changeLanguage(lng);
    }
  };
  const checkUser = () => {
    if (!storedUser) {
      dispatch(setUser({ user: null }));
      dispatch(setUserToken({ token: null }));
      return;
    }
    if (storedUser && typeof storedUser === 'string') {
      const user: TStoredUser = JSON.parse(storedUser);

      dispatch(setUser({ user }));
      dispatch(setUserToken({ token: user.token }));

      checkUserToken();
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('currency')) localStorage.setItem('currency', 'rub');

    checkUser();
  }, []);

  useEffect(() => {
    changeLng('ru');
    changeLng('en');
  }, [pathname]);

  return <Routes />;
}

export default App;
