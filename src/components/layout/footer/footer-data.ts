import { IFooterNav } from './types/interface';

export const footer_nav: IFooterNav[] = [
  {
    title: 'Наши продукты',
    children: [
      {
        name: 'Пополнить',
        href: 'payment',
      },
      {
        name: 'Заработок на buff.163',
        href: '',
      },
      {
        name: 'Бесплатные скины CS2',
        href: '',
      },
    ],
  },
  {
    title: 'О проекте',
    children: [
      {
        name: 'Отзывы',
        href: 'reviews',
      },
      {
        name: 'Достижения',
        href: 'ratings',
      },
    ],
  },
  {
    title: 'Поддержка',
    children: [
      {
        name: 'Контакты',
        href: 'contacts',
      },
      {
        name: 'FAQ',
        href: 'help',
      },
      {
        name: 'Тех. Поддержка',
        href: 'help',
      },
      {
        name: 'Как это работает',
        href: 'help/how-it-works',
      },
    ],
  },
];
