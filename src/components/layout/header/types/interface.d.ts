export interface ILanguageCurrencyNav {
  lang?: string;
  label: string;
  icon?: string;
  href?: string;
  items?: ILanguageCurrencyNav[];
}

interface IHeaderNav {
  name: string;
  href?: string;
  children?: ILanguageCurrencyNav[];
}
