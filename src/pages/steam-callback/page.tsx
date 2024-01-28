// import { ISteamSuccessParams } from '@/types/interfaces';
import { useParams } from 'react-router-dom';

const SteamCallbackPage = () => {
  const params = useParams();
  console.log(params);

  return <div>SteamCallbackPage</div>;
};

export default SteamCallbackPage;
