import { useGetRecomendationVideosQuery } from '@/redux/features/services/public/publicService';
import SettingTemplate from './SettingTemplate';
import SettingVideoItem from './SettingVideoItem';

const SettingVideo = () => {
  const { data, isSuccess } = useGetRecomendationVideosQuery();

  return (
    <SettingTemplate title='Изменить рекомендации'>
      {isSuccess &&
        data.map(({ id, avatar, name, subscribers, url }) => (
          <li key={id}>
            <p className='mb-[10px]'>Channel {id}</p>
            <SettingVideoItem title='Ссылка на видео' value={url || 'Ссылка'} />
            <SettingVideoItem title='Название канала' value={name || 'Введите название канала'} />
            <SettingVideoItem title='Аватарка' value={avatar || 'Вставьте ссылку на аватарку'} />
            <SettingVideoItem title='Подписчики' value={subscribers || '999 тыс. подписчиков '} />
          </li>
        ))}
      {!data?.length && <p>нет данных</p>}
    </SettingTemplate>
  );
};

export default SettingVideo;
