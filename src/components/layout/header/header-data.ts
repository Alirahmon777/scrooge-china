import { ICurrency, ILanguage } from './types/interface';
import RUB from '@svgs/currencies/rub.svg';
import KZT from '@svgs/currencies/kzt.svg';
import USD from '@svgs/currencies/usd.svg';

export const currencies: ICurrency[] = [
  { name: 'rub', icon: RUB },
  { name: 'usd', icon: USD },
  { name: 'kzt', icon: KZT },
];

export const languages: ILanguage[] = [
  { id: 0, label: 'rus', lang: 'ru' },
  { id: 1, label: 'eng', lang: 'en' },
];
