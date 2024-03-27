import { setDate, setHours, subDays, subMonths } from 'date-fns';
import { IExchangeChartCategories, IExchangeChartData, IExchangeChartOptions } from '../types/interfaces';

const getMonth = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const month = subMonths(new Date(), i);
    const firstDayOfMonth = setDate(month, 1);
    months.push(firstDayOfMonth);
  }
  return months.reverse();
};

const getDay = () => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(subDays(new Date().setHours(0, 0, 0, 0), i));
  }
  return days.reverse();
};

const getTimesForToday = () => {
  const times = [];
  const currentDate = new Date().setHours(0, 0, 0, 0);

  for (let i = 0; i <= 22; i += 2) {
    const time = setHours(currentDate, i);
    times.push(time);
  }

  return times;
};

const xaxis = {
  categories: {
    month: getMonth(),
    week: getDay(),
    day: getTimesForToday(),
  } as IExchangeChartCategories,
};

const static_char_data: IExchangeChartData = {
  month: ['¥200', '¥380', '¥460', '¥300', '¥210', '¥530', '¥600', '¥700', '¥500', '¥300', '¥400', '¥500'],
  week: ['¥400', '¥210', '¥360', '¥100', '¥610', '¥430', '¥160'],
  day: ['¥300', '¥180', '¥420', '¥400', '¥110', '¥610', '¥340', '¥233', '¥124', '¥452', '¥342', '¥653'],
};

export const charts: IExchangeChartOptions[] = [
  {
    title: 'Общий обмен',
    xaxis: xaxis,
    yaxis: { labels: ['¥600', '¥500', '¥400', '¥300', '¥200', '¥100', '¥0'], max: 600 },
    chartColor: '#52EA73',
    data: { categories: static_char_data },
  },
  {
    title: 'Все посещения',
    xaxis: xaxis,
    yaxis: { labels: ['600', '500', '400', '300', '200', '100', '0'], max: 600 },
    chartColor: '#5552EA',
    data: { categories: static_char_data },
  },
];
