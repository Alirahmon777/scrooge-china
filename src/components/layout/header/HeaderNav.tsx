import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderItem from './HeaderItem';
import { useTranslation } from 'react-i18next';
const HeaderNav = () => {
  const lang = localStorage.getItem('i18nextLng');
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const nav = [
    { name: 'Пополнить', href: `/${lang}` },
    {
      name: 'Наши проекты',
      children: [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
      ],
    },
    { name: t('review', { ns: 'layout' }), href: `/${lang}/reviews` },
    { name: 'Достижения', href: `/${lang}/statistics` },
  ];

  return (
    <nav>
      <ul className='flex items-center gap-[20px]'>
        {nav.map(({ name, href, children }, idx) => {
          if (children) {
            return <HeaderItem name={name} children={children} key={idx} />;
          }

          return (
            <li key={idx}>
              <NavLink
                to={href}
                className={cn('font-semibold leading-6 text-gray', {
                  'text-success': pathname == href,
                })}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink
            to={`/${lang}/help`}
            className={cn('font-semibold leading-6 text-gray', {
              'text-success': pathname.includes('help') || pathname.includes('contacts'),
            })}
          >
            Помощь
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
