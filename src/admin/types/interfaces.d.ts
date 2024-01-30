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

export interface ISettingTemplateProps {
  title: string;
  items: {
    title: string;
    link?: string;
    requisites?: string;
  }[];
}

export interface ILoginData {
  login: string;
  password: string;
}

export interface IModeratorRes {
  id: number;
  login: string;
}
