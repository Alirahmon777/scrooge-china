import { footer_socials } from './footer_data';
import { Link } from 'react-router-dom';

const FooterSocials = () => {
  return (
    <div className='md:col-span-3 md:justify-self-center'>
      <h3 className='text-2xl font-bold text-nowrap'>Следите за нами</h3>
      <ul className='mt-5 flex gap-5 items-center'>
        {footer_socials.map(({ icon, href }, idx) => (
          <li key={idx}>
            <Link to={href}>
              <img src={icon} alt='social icon' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocials;
