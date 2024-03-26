import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { useLazyGetProfileQuery, usePatchStatusMutation } from '@/redux/features/services/user/userService';
import { selectCurrentUser, setUser, setUserToken } from '@/redux/features/slices/auth/authReducer';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { IChildProps } from '@/types/interfaces';
import { TStoredUser } from '@/types/types';
import { handleCheckError } from '@/utils/handleError';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

interface IProps extends Partial<IChildProps> {
  hasChildren?: boolean;
  flex?: boolean;
}
const Layout = ({ hasChildren, children, flex }: IProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const {
    i18n: { language },
  } = useTranslation();
  const [profileTrigger] = useLazyGetProfileQuery();
  const [statusTrigger] = usePatchStatusMutation();

  useEffect(() => {
    const profileInterval = setInterval(async () => {
      const storedUser = localStorage.getItem('user');

      if (storedUser && typeof storedUser === 'string') {
        const user: TStoredUser = JSON.parse(storedUser);
        try {
          await profileTrigger().unwrap();
          dispatch(setUser({ user }));
          dispatch(setUserToken({ token: user.token }));
        } catch (error) {
          handleCheckError(error, language, dispatch);
        }
        return;
      }

      dispatch(setUser({ user: null }));
      dispatch(setUserToken({ token: null }));
    }, 60000);

    const statusInterval = setInterval(async () => {
      try {
        if (user) await statusTrigger().unwrap();
      } catch (error) {
        handleCheckError(error, language, dispatch);
      }
    }, 25000);

    return () => {
      clearInterval(profileInterval);
      clearInterval(statusInterval);
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={flex ? 'flex' : ''}>
        <Outlet />
        {hasChildren && children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
