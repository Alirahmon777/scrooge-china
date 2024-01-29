import { Navigate } from 'react-router-dom';
import { setAdmin, setAdminToken } from '@/redux/features/slices/auth/authReducer';
import { IChildProps } from '@/types/interfaces';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { TStoredAdmin } from '@/admin/types/types';
import { useEffect } from 'react';
import { useLazyGetSelfQuery } from '@/redux/features/services/admin/adminService';
import { toastError } from '@/utils/toast/toast';
import { isError } from '@/utils/isError';
import { v4 } from 'uuid';
import { handleAdminLogout } from '@/utils/handleLogout';
interface IProps extends IChildProps {
  isModerator?: boolean;
  isAdmin?: boolean;
}

const ProtectedRoute = ({ children, isModerator, isAdmin }: IProps) => {
  const storedAdmin = localStorage.getItem('admin');
  const dispatch = useAppDispatch();
  const [triger] = useLazyGetSelfQuery();
  const adminLocal: TStoredAdmin = storedAdmin ? JSON.parse(storedAdmin) : null;
  const checkAdminToken = async () => {
    try {
      const admin = await triger().unwrap();

      if (!admin) {
        handleAdminLogout();
      }
    } catch (error) {
      if (isError(error)) {
        toastError(error.data.details);
        handleAdminLogout();
      } else if (error instanceof Error) {
        toastError(error.message, v4());
      } else {
        toastError('An unknown error occurred', v4());
      }
    }
  };

  useEffect(() => {
    if (storedAdmin && typeof storedAdmin === 'string') {
      const admin: TStoredAdmin = JSON.parse(storedAdmin);

      dispatch(setAdmin({ admin: { id: admin.id, login: admin.login, role: admin.role }, role: admin.role }));
      dispatch(setAdminToken({ admin_token: admin.admin_token }));

      checkAdminToken();
    }
  }, [dispatch, storedAdmin]);

  if (!adminLocal) {
    return <Navigate to='/admin/login' replace />;
  }
  if (isAdmin) {
    return adminLocal.role != '"Admin"' ? <Navigate to='/admin/login' replace /> : children;
  }
  if (isModerator) {
    return adminLocal.role == '"Moderator"' || adminLocal.role == '"Admin"' ? (
      children
    ) : (
      <Navigate to='/admin/login' replace />
    );
  }
};

export default ProtectedRoute;
