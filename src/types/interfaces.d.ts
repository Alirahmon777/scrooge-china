import React, { FunctionComponent, LazyExoticComponent, ReactNode } from 'react';

export interface IChildProps {
  children: React.ReactNode;
}

export interface IRoutes {
  path?: string;
  component?: React.FC<{}> | LazyExoticComponent<React.FC<{}>>;
  element?: ReactNode;
  children?: IRoutes[];
}

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  image: string | null;
  region: string | null;
  district: string | null;
  address: string | null;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface IUserResponse {
  success: false;
  errors: {
    field: string;
    message: string;
    code: string;
  }[];
  data: IUser;
}

export interface IHistory {
  date_time: string;
  order_number: string;
  payment_method: string;
  details: string;
  amount: string;
  isSuccessfully?: boolean;
}

export interface SeoProps extends IChildProps {
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  ogImage?: string;
  home?: string;
  favicon?: string;
  locale?: string;
  ogType?: string;
  ogURL?: string;
  ogSiteName?: string;
  alternates?: {
    href: string;
    hrefLang: string;
  }[];
}
