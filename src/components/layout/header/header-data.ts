import RUB from '@svgs/currencies/rub.svg';
import KZT from '@svgs/currencies/kzt.svg';
import USD from '@svgs/currencies/usd.svg';
import { ILanguageCurrencyNav } from './types/interface';

export const currencies: ILanguageCurrencyNav[] = [
  { label: 'rub', icon: RUB },
  { label: 'usd', icon: USD },
  { label: 'kzt', icon: KZT },
];

export const languages: ILanguageCurrencyNav[] = [
  { label: 'rus', lang: 'ru' },
  { label: 'eng', lang: 'en' },
];
