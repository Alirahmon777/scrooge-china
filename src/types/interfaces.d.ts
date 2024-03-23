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
  steam_id: string;
  trade_url: string;
  email: string;
  username: string;
  avatar_url: string;
}

export interface IAdmin {
  id: string;
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
  hasChat?: boolean;
}

export interface ICurrencyRes {
  id: string;
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
  id: string;
  payment_method: string;
  status: string;
  created_at: Date;
  finished_at: Date;
  steam_id: string;
  moderator_id: string;
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
  id: string;
  steam_id: string;
  review: string;
  stars: number;
  created_at: Date | string;
}

export interface IReviewBody {
  review: string;
  stars: number;
}

export interface IPaginationReq {
  limit: number;
  offset: number;
}

export interface IPatchChat {
  id: string;
}

export interface IAssignOrder {
  order_id: string;
}

export interface IStateOrder {
  isChat: boolean;
  order_id: string;
  chat_id: string;
  status: string;
}

export interface IRewiewCount {
  video_review_count: number;
  review_count: number;
}

export interface IChangeEmail {
  email: string;
}

export interface IChangeTradeUrl {
  url: string;
}

export interface IMessageBody {
  image?: File | null;
  text: string;
}

export interface IMessage {
  images_ids: string[];
  message: {
    chat_id: string;
    created_at: string | Date;
    id: string;
    sender: string;
    text: string;
  };
}

export interface IHistoryMessage {
  messages: [
    {
      chat_id: string;
      created_at: string | Date;
      id: string;
      sender: string;
      text: string;
    },
    string[]
  ][];
}

export interface ITopUser {
  steam_id: string;
  amount: string;
}
