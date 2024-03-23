import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { useGetProfileQuery, usePatchStatusQuery } from '@/redux/features/services/user/userService';
import { selectCurrentUser, setUser, setUserToken } from '@/redux/features/slices/auth/authReducer';
import { useAppSelector } from '@/redux/hooks/hooks';
import { IChildProps } from '@/types/interfaces';
import { TStoredUser } from '@/types/types';
import { handleError } from '@/utils/handleError';
import { handleUserLogout } from '@/utils/handleLogout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

interface IProps extends Partial<IChildProps> {
  hasChildren?: boolean;
  flex?: boolean;
}
const Layout = ({ hasChildren, children, flex }: IProps) => {
  const dispatch = useDispatch();
  const user = useAppSelector(selectCurrentUser);
  const storedUser = localStorage.getItem('user');

  const { refetch, data: profileData } = useGetProfileQuery(undefined, {
    skip: !user,
    pollingInterval: 60000,
    refetchOnFocus: true,
  });

  usePatchStatusQuery(undefined, {
    skip: !user || !profileData,
    pollingInterval: 25000,
    refetchOnFocus: true,
  });

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
    checkUser();
  }, [profileData]);

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
