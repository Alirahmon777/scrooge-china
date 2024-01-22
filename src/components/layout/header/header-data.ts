import RUB from '@svgs/currencies/rub.svg';
import KZT from '@svgs/currencies/kzt.svg';
import USD from '@svgs/currencies/usd.svg';
import { ILanguageCurrency } from './types/interface';

export const currencies: ILanguageCurrency[] = [
  { label: 'rub', icon: RUB },
  { label: 'usd', icon: USD },
  { label: 'kzt', icon: KZT },
];

export const languages: ILanguageCurrency[] = [
  { label: 'rus', lang: 'ru' },
  { label: 'eng', lang: 'en' },
];
