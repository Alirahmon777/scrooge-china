import { Routes } from './routes';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContextProvider';
import $host from './lib/axios';
import { IUserResponse } from './types/interfaces';
import { toastError } from './utils/toast/toast';
import { deleteTokens } from './utils/deleteTokens';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { setAppState } = useContext(AppContext);
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();
  const fetchData = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setLoading(false);
      return;
    }
    try {
      const res = await $host.get<IUserResponse>('/users/me/');
      setAppState({ user: res.data.data, isAuth: true });
    } catch (error) {
      if (error instanceof Error) {
        toastError(error.message);
      }
      deleteTokens();
    } finally {
      setLoading(false);
    }
  };
  const changeLng = (lng: string) => {
    if (pathname.includes(lng)) {
      return i18n.changeLanguage(lng);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('currency')) localStorage.setItem('currency', 'rub');

    fetchData();
  }, []);

  useEffect(() => {
    changeLng('ru');
    changeLng('en');
  }, [pathname]);

  if (loading) {
    return null;
  }
  return <Routes />;
}

export default App;
