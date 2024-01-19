import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderItem from './HeaderItem';
import { useTranslation } from 'react-i18next';
import { IHeaderNav } from './types/interface';
import { headerFuncNav } from '@/utils/header-nav';

const linkClass = 'font-semibold leading-6 text-gray text-sm xl:text-base hover:text-success transition-all';

const HeaderNav = () => {
  const { pathname } = useLocation();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const nav: IHeaderNav[] = headerFuncNav(lang);

  return (
    <nav className='tablet:block hidden'>
      <ul className='flex items-center gap-[20px]'>
        {nav.map(({ name, href, children }, idx) => {
          if (children) {
            return <HeaderItem name={name} children={children} key={idx} />;
          }

          return (
            <li key={idx}>
              <NavLink
                to={{ pathname: href }}
                className={cn(linkClass, {
                  'text-success': pathname == href,
                })}
              >
                {t(name, 'layout')}
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink
            to={`/${lang}/help`}
            className={cn(linkClass, {
              'text-success': pathname.includes('help') || pathname.includes('contacts'),
            })}
          >
            {t('help', 'layout')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
