import { StringOrDateArray, StringOrNumberArray } from '@/types/types';
import React, { HTMLAttributes } from 'react';
import { TMonthWeekDay } from './types';

export interface IAsideNav {
  title: string;
  children: IAsideItem[];
}

export interface IAsideItem {
  icon: React.FC<HTMLAttributes<SVGElement>>;
  label: string;
  path: string;
}

export interface IInfoTabs {
  label: string;
  tab: TMonthWeekDay;
}

export interface IExchangeChartOptions {
  title: string;
  xaxis: {
    categories: IExchangeChartCategories;
  };
  yaxis?: IYaxisOption;
  data: { categories: IExchangeChartData };
  chartColor?: string;
  isExchange?: boolean;
}

export interface IYaxisOption {
  labels?: string[];
  max?: number;
}

export interface IExchangeChartCategories {
  month: StringOrDateArray;
  week: StringOrDateArray;
  day: StringOrDateArray;
}

export interface IExchangeChartData {
  month: StringOrNumberArray;
  week: StringOrNumberArray;
  day: StringOrNumberArray;
}

export interface ILoginData {
  login: string;
  password: string;
}

export interface IModeratorRes {
  id: string;
  login: string;
}

export interface IChangePassBody {
  old_password: string;
  new_password: string;
}
export interface ISocialBody {
  id: string;
  url: string;
}

export interface IRequisitesBody {
  id: string;
  data: string;
}

export interface IRecomVideoBody {
  id: string;
  url: string;
  name: string;
  subscribers: string;
  avatar: string;
}

export interface IRequisitesRes {
  id: string;
  name: string;
  data: string | null;
}

export interface ISocialRes {
  id: string;
  name: string;
  url: string | null;
}

export interface IRecomVideoRes {
  id: string;
  url: string;
  avatar: string;
  name: string;
  subscribers: string;
}

export interface IQueryStartEndTime {
  start_datetime: string | Date;
  end_datetime: string | Date;
}

export interface ICount {
  count: number;
}
