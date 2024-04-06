import { useGetRecomendationVideosQuery } from '@/redux/features/services/public/publicService';
import SettingTemplate from './SettingTemplate';
import SettingVideoItem from './SettingVideoItem';
import { useState } from 'react';
import { useLockedBody } from 'usehooks-ts';
import AddVideoModal from './AddVideoModal';

const SettingVideo = () => {
  const { data, isSuccess } = useGetRecomendationVideosQuery();
  const [open, setOpen] = useState(false);
  const [_, setLock] = useLockedBody(false);
  const handleShowClose = (value: boolean) => {
    setLock(value);
    setOpen(value);
  };

  return (
    <>
      {open && <AddVideoModal handleClose={handleShowClose} />}
      <SettingTemplate title='Изменить рекомендации' isVideo handleShow={handleShowClose}>
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
    </>
  );
};

export default SettingVideo;
