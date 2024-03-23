import { Routes } from './routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'date-time-format-timezone';

function App() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  const changeLng = (lng: string) => {
    if (pathname.includes(`/${lng}`)) {
      return i18n.changeLanguage(lng);
    }
  };

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
