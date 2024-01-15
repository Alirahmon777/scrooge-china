export interface IFooterNav {
  title: string;
  children: IFooterItem[];
}

export interface IFooterItem {
  name: string;
  href: string;
}

export interface IFooterSocial {
  icon: string;
  href: string;
}
