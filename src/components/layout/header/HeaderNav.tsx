import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderItem from './HeaderItem';
import { useTranslation } from 'react-i18next';

const linkClass = 'font-semibold leading-6 text-gray text-sm xl:text-base hover:text-success transition-all';

const HeaderNav = () => {
  const { pathname } = useLocation();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();
  const nav = [
    { name: 'payment', href: `/${lang}` },
    {
      name: 'our_projects',
      children: [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
      ],
    },
    { name: 'review', href: `/${lang}/reviews` },
    { name: 'rating', href: `/${lang}/statistics` },
  ];

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
                to={href}
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
