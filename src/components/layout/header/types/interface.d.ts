export interface ICurrency {
  name: string;
  icon: string;
}

export interface ILanguage {
  id: number;
  lang: string;
  label: string;
}

export interface IHeaderNav {
  name: string;
  href?: string;
  children?: IHeaderNav[];
}

export interface ILangCurrencyProps {
  position: 'top' | 'bottom' | 'right' | 'left';
}
