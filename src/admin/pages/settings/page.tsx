import ExchangeRate from '@/admin/components/settings/ExchangeRate';
import SettingRequisites from '@/admin/components/settings/SettingRequisites';
import SettingSocial from '@/admin/components/settings/SettingSocial';
import SettingVideo from '@/admin/components/settings/SettingVideo';

const SettingsPage = () => {
  return (
    <section className='my-[45px] flex flex-col gap-10 items-start'>
      <ExchangeRate />
      <SettingSocial />
      <SettingRequisites />
      <SettingVideo />
    </section>
  );
};

export default SettingsPage;
