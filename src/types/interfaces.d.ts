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

export interface ICurrencyRes {
  id: number;
  symbol: string;
  rate: string;
}

export interface ICurrency {
  rub: string;
  usd: string;
  kzt: string;
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

export interface IOrder {
  id: number;
  payment_method: string;
  status: string;
  created_at: Date;
  finished_at: Date;
  steam_id: number;
  moderator_id: number;
  amount: string;
  fixed_currency_rate: string;
  currency_symbol: string;
}

export interface IOrderBody {
  payment_method: string;
  amount: string;
  currency: string;
}

export interface IReview {
  id: number;
  steam_id: number;
  review: string;
  stars: number;
  created_at: Date;
}

export interface IReviewBody {
  review: string;
  stars: number;
}
