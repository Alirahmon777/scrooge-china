import { IAdmin, ILoginResponse } from '@/types/interfaces';

export type TMonthWeekDay = 'month' | 'day' | 'week';

export type TError = {
  data: {
    details: string;
  };
  status: number;
};

export type TStoredAdmin = IAdmin & {
  admin_token: string;
};
