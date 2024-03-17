import { IHeaderNav } from '@/components/layout/header/types/interface';

export function headerFuncNav(lng: string, isMobile?: boolean): IHeaderNav[] {
  const nav: IHeaderNav[] = [
    { name: 'payment', href: `/${lng}/payment` },
    {
      name: 'our_projects',
      children: [
        { id: '1', label: 'payment', href: `/${lng}/payment` },
        { id: '2', label: 'earning', href: '' },
        { id: '3', label: 'free_skins', href: '' },
      ],
    },
    { name: 'review', href: `/${lng}/reviews` },
    { name: 'rating', href: `/${lng}/ratings` },
  ];
  if (isMobile) {
    return [{ name: 'home', href: `/${lng}` }, ...nav];
  }
  return nav;
}
