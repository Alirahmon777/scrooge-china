import { Link } from 'react-router-dom';
import logo from '@svgs/layout/footer-logo.svg';
import { useMediaQuery } from 'usehooks-ts';
import FooterSocials from './FooterSocials';
import FooterNav from './FooterNav';
const Footer = () => {
  const tablet = useMediaQuery('(min-width:768px) and (max-width: 1023.9px)');
  const mobile = useMediaQuery('(max-width: 424.9px)');
  return (
    <footer className='bg-header py-[25px] mobile:py-[73px]'>
      <div className='container grid grid-cols-1 md:grid-cols-3 lg:flex gap-5 mobile:gap-10 md:gap-y-10 md:gap-[20px] items-start justify-center lg:justify-between lg:gap-[40px]  xl:gap-[79px]'>
        {!mobile && (
          <div className='md:col-span-3 flex items-center justify-between'>
            <Link to={''} onClick={() => window.scrollTo({ top: 0 })} className='max-w-[75px] min-w-[75px]'>
              <img src={logo} alt='footer logo' />
            </Link>
            {tablet && <FooterSocials />}
          </div>
        )}
        <FooterNav />
        {!tablet && !mobile && <FooterSocials />}
      </div>
    </footer>
  );
};
export default Footer;
