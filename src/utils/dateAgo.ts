import { parseISO, format, formatDistanceToNowStrict } from 'date-fns';
import { ru, enUS } from 'date-fns/locale';

export const dateAgo = ({ created_at, lng }: { created_at: string | Date; lng: string }) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const parsedDate = parseISO(created_at + '+0000'.toLocaleString());
  const formattedDate = format(parsedDate, 'yyyy/MM/dd HH:mm:ss XXXX');
  const zonedDate = convertTZ(formattedDate, timezone);

  const result = formatDistanceToNowStrict(new Date(zonedDate), {
    addSuffix: true,
    locale: lng == 'ru' ? ru : enUS,
  });

  return result;
};

export function convertTZ(date: string | Date, tzString: string) {
  return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
}
