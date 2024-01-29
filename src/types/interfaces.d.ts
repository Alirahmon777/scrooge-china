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
  steam_id: number;
  trade_url: string;
  email: string;
}

export interface IAdmin {
  id: number;
  login: string;
  role: string;
}

export interface ILoginResponse {
  token: string;
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
  faviconPath?: string;
  locale?: string;
  ogType?: string;
  ogURL?: string;
  ogSiteName?: string;
  alternates?: {
    href: string;
    hrefLang: string;
  }[];
}

export interface ISteamSuccessParams {
  'openid.ns': string;
  'openid.mode': string;
  'openid.op_endpoint': string;
  'openid.claimed_id': string;
  'openid.identity'?: string;
  'openid.return_to': string;
  'openid.response_nonce ': string;
  'openid.invalidate_handle': string;
  'openid.assoc_handle'?: string;
  'openid.signed': string;
  'openid.sig': string;
}
