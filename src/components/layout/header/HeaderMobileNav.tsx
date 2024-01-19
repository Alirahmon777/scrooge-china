import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IHeaderNav } from './types/interface';
import { headerFuncNav } from '@/utils/header-nav';
import HeaderAccordion from './HeaderAccordion';
import { v4 } from 'uuid';

const linkClass = 'text-2xl font-bold px-[14px] py-2 hover:bg-[#1D1F1E] transition-all w-full text-gray w-full block';

interface IProps {
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobileNav = ({ setOpenMobileMenu }: IProps) => {
  const { pathname } = useLocation();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  const handleClose = () => {
    setOpenMobileMenu(false);
  };

  const nav: IHeaderNav[] = headerFuncNav(lang, true);
  return (
    <nav className='mt-10'>
      <ul className='flex flex-col gap-[10px] '>
        {nav.map(({ name, href, children }) => {
          if (children) {
            return <HeaderAccordion title={name} items={children} handleClose={handleClose} key={v4()} />;
          }
          return (
            <li key={v4()}>
              <NavLink
                onClick={handleClose}
                to={{ pathname: href }}
                className={cn(linkClass, {
                  'text-success bg-[#1D1F1E]': pathname == href,
                })}
              >
                {t(name, 'layout')}
              </NavLink>
            </li>
          );
        })}
        {
          <li>
            <NavLink
              onClick={handleClose}
              to={`/${lang}/help`}
              className={cn(linkClass, {
                'text-success': pathname.includes('help') || pathname.includes('contacts'),
              })}
            >
              {t('help', 'layout')}
            </NavLink>
          </li>
        }
      </ul>
    </nav>
  );
};

export default HeaderMobileNav;
