import RUB from '@svgs/currencies/rub.svg';
import KZT from '@svgs/currencies/kzt.svg';
import USD from '@svgs/currencies/usd.svg';
import { ILanguageCurrencyNav } from './types/interface';

export const currencies: ILanguageCurrencyNav[] = [
  { id: 1, label: 'rub', icon: RUB },
  { id: 2, label: 'usd', icon: USD },
  { id: 3, label: 'kzt', icon: KZT },
];

export const languages: ILanguageCurrencyNav[] = [
  { id: 1, label: 'rus', lang: 'ru' },
  { id: 2, label: 'eng', lang: 'en' },
];
