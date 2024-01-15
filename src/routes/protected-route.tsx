import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

const ProtectedRoute = () => {
  const { appState } = useContext(AppContext);

  return !appState.isAuth ? <Navigate to='/login' replace={true} /> : <Outlet />;
};

export default ProtectedRoute;
