export interface IFooterNav {
  title: string;
  children: IFooterItem[];
}

export interface IFooterItem {
  name?: string;
  href: string;
  icon?: string;
}
