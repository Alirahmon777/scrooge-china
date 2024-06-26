import { Icons } from '../components/Icons';
import GlobalIcons from '@components/Icons';
import { IAsideNav } from '../types/interfaces';

export const asideNav: IAsideNav[] = [
  {
    title: 'Навигация',
    children: [
      { label: 'Статистика', path: 'statistics', icon: Icons.folder },
      { label: 'Модераторы', path: 'moderators', icon: Icons.user },
      { label: 'История Заказов', path: 'history-orders', icon: Icons.globe },
      { label: 'История чата', path: 'history-chat', icon: Icons.chat },
      { label: 'Настройки', path: 'settings', icon: Icons.settings },
      { label: 'Черный список', path: 'blacklist', icon: GlobalIcons.blockIcon },
    ],
  },
  {
    title: 'Защита',
    children: [
      {
        label: 'Сменить пароль',
        path: 'change-password',
        icon: Icons.lock,
      },
    ],
  },
];
