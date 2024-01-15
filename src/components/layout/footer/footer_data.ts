import youtube from '@svgs/layout/youtube.svg';
import vk from '@svgs/layout/vk.svg';
import { IFooterNav, IFooterSocial } from './types/interface';

export const footer_nav: IFooterNav[] = [
  {
    title: 'Наши продукты',
    children: [
      {
        name: 'Пополнить',
        href: '',
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
        href: 'statistics',
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

export const footer_socials: IFooterSocial[] = [
  { icon: vk, href: '' },
  { icon: youtube, href: '' },
];
