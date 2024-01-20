import { TMonthWeekDay } from '@/admin/types/types';
import { IExchangeChartCategories } from './../admin/types/interfaces.d';
import { IYaxisOption } from '@/admin/types/interfaces';

export const getHeightChart = (
  idx: number,
  data: { categories: IExchangeChartCategories },
  activeTab: TMonthWeekDay,
  yaxis?: IYaxisOption
) => {
  const stringData = data.categories[activeTab][idx];
  const isStringData = typeof stringData == 'string';
  const numericValue = parseFloat(isStringData ? stringData.replace(/[^0-9.]/g, '') : '');

  if (!isNaN(numericValue) && yaxis?.max !== undefined && yaxis.max !== 0) {
    return Math.ceil((numericValue / yaxis.max) * 100);
  }
  return 0;
};
