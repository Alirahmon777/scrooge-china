import ExchangeRate from '@/admin/components/settings/ExchangeRate';
import SettingTemplate from '@/admin/components/settings/SettingTemplate';
import { settings } from '@/admin/static/settings-data';

const SettingsPage = () => {
  return (
    <section className='my-[45px] flex flex-col gap-10 items-start'>
      <ExchangeRate />

      {settings.map(({ items, title }) => (
        <SettingTemplate title={title} items={items} />
      ))}
    </section>
  );
};

export default SettingsPage;
