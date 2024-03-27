import { IYaxisOption } from '@/admin/types/interfaces';

export const getHeightChart = (data: number, yaxis?: IYaxisOption) => {
  if (!isNaN(data) && yaxis?.max !== undefined && yaxis.max !== 0) {
    return Math.ceil((data / yaxis.max) * 100);
  }
  return 0;
};
