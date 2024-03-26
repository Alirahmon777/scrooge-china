import { subDays, subMonths, subWeeks, subYears } from 'date-fns';

export function getActiveTimeByString(date: string) {
  if (date == 'day') return subDays(new Date(), 1);
  if (date == 'week') return subWeeks(new Date(), 1);
  if (date == 'month') return subMonths(new Date(), 1);
  return subYears(new Date(), 300);
}
