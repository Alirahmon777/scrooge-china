import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const linkClass = 'text-2xl font-bold px-[14px] py-2 hover:bg-[#1D1F1E] transition-all w-full text-gray w-full block';

const HeaderMobileNav = () => {
  const { pathname } = useLocation();
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  const nav = [
    { name: 'home', href: `/${lang}` },
    { name: 'payment', href: `/${lang}/payment` },
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
    <nav className='mt-10'>
      <ul className='flex flex-col gap-[10px] '>
        {nav.map(({ name, href, children }) => {
          if (children) {
            return;
          }
          return (
            <li>
              <NavLink
                to={href}
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
