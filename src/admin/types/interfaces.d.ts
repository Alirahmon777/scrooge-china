import { StringOrNumberArray } from '@/types/types';
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
  xaxis?: {
    categories: IExchangeChartCategories;
  };
  yaxis?: IYaxisOption;
  data: { categories: IExchangeChartCategories };
  chartColor?: string;
}

export interface IYaxisOption {
  labels?: string[];
  max?: number;
}

export interface IExchangeChartCategories {
  month: StringOrNumberArray;
  week: StringOrNumberArray;
  day: StringOrNumberArray;
}

export interface ILoginData {
  login: string;
  password: string;
}

export interface IModeratorRes {
  id: number;
  login: string;
}

export interface ISocialBody {
  id: number;
  url: string;
}

export interface IRequisitesBody {
  id: number;
  data: string;
}

export interface IRecomVideoBody {
  id: number;
  url: string;
  name: string;
  subscribers: string;
  avatar: string;
}

export interface IRequisitesRes {
  id: number;
  name: string;
  data: string | null;
}

export interface ISocialRes {
  id: number;
  name: string;
  url: string | null;
}

export interface IRecomVideoRes {
  id: number;
  url: string;
  avatar: string;
  name: string;
  subscribers: string;
}
