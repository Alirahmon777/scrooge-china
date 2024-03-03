import { useLazyGetProfileQuery } from '@/redux/features/services/user/userService';
import { setUser, setUserToken } from '@/redux/features/slices/auth/authReducer';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { IChildProps } from '@/types/interfaces';
import { TStoredUser } from '@/types/types';
import { handleError } from '@/utils/handleError';
import { handleUserLogout } from '@/utils/handleLogout';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedUserRoute = ({ children }: IChildProps) => {
  const storedUser = localStorage.getItem('user');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    i18n: { language: lng },
  } = useTranslation();
  const [triger] = useLazyGetProfileQuery();
  const userLocal: TStoredUser = storedUser ? JSON.parse(storedUser) : null;
  const checkUserToken = async () => {
    try {
      const user = await triger().unwrap();

      if (!user) {
        handleUserLogout();
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (!storedUser) {
      return navigate(`/${lng}`);
    }
    if (storedUser && typeof storedUser === 'string') {
      const user: TStoredUser = JSON.parse(storedUser);

      dispatch(setUser({ user: { email: user.email, trade_url: user.trade_url, steam_id: user.steam_id } }));
      dispatch(setUserToken({ token: user.token }));

      checkUserToken();
    }
  }, [dispatch, storedUser]);

  if (!userLocal) {
    return <Navigate to={`/${lng}`} replace />;
  }
  return children;
};

export default ProtectedUserRoute;
