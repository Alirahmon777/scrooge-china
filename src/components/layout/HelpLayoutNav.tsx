import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface IProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

const HelpLayoutNav = ({ setShowMenu }: IProps) => {
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
    <ul className='flex flex-col gap-[15px]'>
      {help_nav.map(({ path, name }, idx) => (
        <li className='text-2xl font-medium ' key={idx}>
          <NavLink
            to={path}
            onClick={() => {
              setShowMenu(false);
            }}
            className={cn('text-gray pl-5 py-[5.5px] block', {
              'text-white border-l-success border-l-2': pathname == path,
            })}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HelpLayoutNav;
