import { Link } from 'react-router-dom';
import logo from '@svgs/layout/footer-logo.svg';
import { footer_nav, footer_socials } from './footer_data';
const Footer = () => {
  return (
    <footer className='bg-header py-[73px]'>
      <div className='container flex items-start justify-between'>
        <Link to={''} onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt='footer logo' />
        </Link>
        <ul className='flex gap-[79px]'>
          {footer_nav.map(({ title, children }, idx) => (
            <li className='flex flex-col gap-[30px]' key={idx}>
              <h3 className='text-2xl font-bold'>{title}</h3>
              <ul className='flex flex-col gap-5'>
                {children.map(({ name, href }, idx) => (
                  <li key={idx} className='text-gray text-2xl hover:text-white transition-all'>
                    <Link to={href} className='w-full block'>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <h3 className='text-2xl font-bold'>Следите за нами</h3>
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
      </div>
    </footer>
  );
};
export default Footer;
