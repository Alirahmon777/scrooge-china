import { useGetSocialsQuery } from '@/redux/features/services/public/publicService';
import { Link } from 'react-router-dom';

const FooterSocials = () => {
  const { data, isSuccess } = useGetSocialsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  return (
    <div className='md:col-span-3 md:justify-self-center'>
      <h3 className='text-2xl font-bold text-nowrap'>Следите за нами</h3>
      <ul className='mt-5 flex gap-5 items-center'>
        {isSuccess &&
          data.map(({ id, name, url }) => (
            <li key={id}>
              <Link to={url ?? ''} target='_black'>
                <img src={`/svgs/${name.toLowerCase()}.svg`} alt='social icon' />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterSocials;
