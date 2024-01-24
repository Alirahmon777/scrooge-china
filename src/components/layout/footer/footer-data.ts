import youtube from '@svgs/layout/youtube.svg';
import telegram from '@svgs/layout/telegram.svg';
import vkontakte from '@svgs/layout/vkontakte.svg';
import { IFooterItem, IFooterNav } from './types/interface';

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

export const footer_socials: IFooterItem[] = [
  { icon: telegram, href: '' },
  { icon: vkontakte, href: '' },
  { icon: youtube, href: '' },
];
