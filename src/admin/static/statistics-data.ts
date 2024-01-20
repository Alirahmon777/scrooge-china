import { IExchangeChartCategories, IExchangeChartOptions } from '../types/interfaces';

const xaxis = {
  categories: {
    month: ['ЯНВ', 'ФЕВР', 'МАРТ', 'АПР', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГ', 'СЕНТ', 'ОКТ', 'НОЯБ', 'ДЕК'],
    week: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    day: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00'],
  },
};

const static_char_data: IExchangeChartCategories = {
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
