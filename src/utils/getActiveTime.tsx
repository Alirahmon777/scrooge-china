import { addDays, subDays, subMonths, subWeeks, subYears } from 'date-fns';

export function getActiveTimeByString(date: string) {
  if (date == 'day') return subDays(new Date().setUTCHours(0, 0, 0, 0), 0);
  if (date == 'week') return addDays(subWeeks(new Date().setUTCHours(0, 0, 0, 0), 1), 1);
  if (date == 'month') return addDays(subMonths(new Date().setUTCHours(0, 0, 0, 0), 1), 1);
  return subYears(new Date(), 300);
}
