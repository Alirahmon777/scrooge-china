import { ISettingTemplateProps } from '../types/interfaces';

export const settings: ISettingTemplateProps[] = [
  {
    title: 'Изменить ссылки на соц. сети',
    items: [
      { title: 'Ютуб', link: 'Тут будет ссылка' },
      { title: 'Вконтакте', link: 'Тут будет ссылка' },
      { title: 'Телеграм', link: 'Тут будет ссылка' },
    ],
  },
  {
    title: 'Изменить реквизиты',
    items: [
      { title: 'Тинкофф', requisites: 'Реквизиты' },
      { title: 'Сбер Банк', requisites: 'Реквизиты' },
      { title: 'Киви', requisites: 'Реквизиты' },
      { title: 'Юмани', requisites: 'Реквизиты' },
      { title: 'Каспи Банк', requisites: 'Реквизиты' },
      { title: 'USDT', requisites: 'Реквизиты' },
    ],
  },
  {
    title: 'Изменить рекомендации',
    items: [
      { title: 'Канал 1', link: 'Ссылка' },
      { title: 'Канал 2', link: 'Ссылка' },
      { title: 'Канал 3', link: 'Ссылка' },
      { title: 'Канал 4', link: 'Ссылка' },
    ],
  },
];
