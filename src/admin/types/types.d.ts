export type TMonthWeekDay = 'month' | 'day' | 'week';

export type TError = {
  data: {
    details: string;
  };
  status: number;
};
