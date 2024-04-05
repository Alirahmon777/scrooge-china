import { useGetRecomendationVideosQuery } from '@/redux/features/services/public/publicService';
import SettingTemplate from './SettingTemplate';
import SettingVideoItem from './SettingVideoItem';

const SettingVideo = () => {
  const { data, isSuccess } = useGetRecomendationVideosQuery();

  return (
    <SettingTemplate title='Изменить рекомендации' isVideo>
      {isSuccess &&
        data.map((item) => {
          const { id, avatar, name, subscribers, url } = item;
          return (
            <li key={id}>
              <p className='mb-[10px]'>Channel {id}</p>
              <SettingVideoItem title='Ссылка на видео' inputName={'url'} item={item} value={url || 'Ссылка'} />
              <SettingVideoItem
                title='Название канала'
                inputName={'name'}
                item={item}
                value={name || 'Введите название канала'}
              />
              <SettingVideoItem
                title='Аватарка'
                inputName={'avatar'}
                item={item}
                value={avatar || 'Вставьте ссылку на аватарку'}
              />
              <SettingVideoItem
                title='Подписчики'
                inputName={'subscribers'}
                item={item}
                value={subscribers || '999 тыс. подписчиков '}
              />
            </li>
          );
        })}
      {!data?.length && <p>нет данных</p>}
    </SettingTemplate>
  );
};

export default SettingVideo;
