// import { ISteamSuccessParams } from '@/types/interfaces';
import { useGetCallbackQuery } from '@/redux/features/services/auth/authService';
import { useGetProfileQuery } from '@/redux/features/services/user/userService';
import { ISteamSuccessParams } from '@/types/interfaces';
import { Navigate, useSearchParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const SteamCallbackPage = () => {
  const [params] = useSearchParams();

  if (JSON.stringify(Object.fromEntries([...params])) === '{}') {
    return <Navigate to={'/'} />;
  }

  const { isSuccess, data: token } = useGetCallbackQuery(
    Object.fromEntries([...params]) as unknown as ISteamSuccessParams
  );
  const { isSuccess: userIsSuccess, data } = useGetProfileQuery();
  if (isSuccess && userIsSuccess) {
    localStorage.setItem('user', JSON.stringify({ ...data, ...token }));
    window.location.replace('about:blank');
    window.history.replaceState({}, document.title, window.location.href);
    window.close();
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <BounceLoader color='#36d7b7' />
    </div>
  );
};

export default SteamCallbackPage;
