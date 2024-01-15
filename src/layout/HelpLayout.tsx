import { cn } from '@/lib/utils';
import { IChildProps } from '@/types/interfaces';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

interface IProps extends Partial<IChildProps> {
  hasChildren?: boolean;
}
const HelpLayout = ({ hasChildren, children }: IProps) => {
  const { pathname } = useLocation();
  const {
    i18n: { language: lang },
  } = useTranslation();

  const help_nav = [
    {
      name: 'Помощь',
      path: `/${lang}/help`,
    },
    {
      name: 'Как это работает?',
      path: `/${lang}/help/how-it-works`,
    },
    {
      name: 'Гарантии',
      path: `/${lang}/help/guarantees`,
    },
    {
      name: 'Конфиденциальность',
      path: `/${lang}/help/privacy`,
    },
    {
      name: 'Оферта сервиса',
      path: `/${lang}/help/terms`,
    },
    {
      name: 'Контакты',
      path: `/${lang}/contacts`,
    },
  ];

  return (
    <div className='container flex mt-[60px] items-start gap-[23px] mb-[60px]'>
      <aside className='min-w-[270px] sticky top-5'>
        <ul className='flex flex-col gap-[15px] '>
          {help_nav.map(({ path, name }, idx) => (
            <li className='text-2xl font-medium ' key={idx}>
              <NavLink
                to={path}
                className={cn('text-gray pl-5 py-[5.5px] block', {
                  'text-white border-l-success border-l-2': pathname == path,
                })}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <Outlet />
      {hasChildren && children}
    </div>
  );
};

export default HelpLayout;
