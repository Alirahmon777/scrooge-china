// import { ISteamSuccessParams } from '@/types/interfaces';
import { Navigate, useSearchParams } from 'react-router-dom';

const SteamCallbackPage = () => {
  const [params] = useSearchParams();

  if (JSON.stringify(Object.fromEntries([...params])) === '{}') {
    return <Navigate to={'/'} />;
  }

  return <div>SteamCallbackPage</div>;
};

export default SteamCallbackPage;
