import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../Input';
import Button from '@/components/ui/Button';
import { MoonLoader } from 'react-spinners';
import { useAddVideoMutation } from '@/redux/features/services/admin/adminSettings';
import { handleAdminError } from '@/utils/handleError';
import { useGetRecomendationVideosQuery } from '@/redux/features/services/public/publicService';

interface IProps {
  handleClose: (value: boolean) => void;
}
const AddVideoForm: React.FC<IProps> = ({ handleClose }) => {
  const [form, setForm] = useState({ url: '', avatar: '', name: '', subscribers: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useGetRecomendationVideosQuery();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [triger] = useAddVideoMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await triger(form).unwrap();
      await refetch().unwrap();
    } catch (error) {
      handleAdminError(error);
    } finally {
      setIsLoading(false);
      handleClose(false);
    }
  };

  return (
    <div className='mt-5'>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <Input
          labelClass='flex-1 gap-1'
          label='Ссылка на видео'
          value={form.url}
          onChange={handleChange}
          id={`video-url-input`}
          name={'url'}
          placeholder={`Введите video url`}
          type='text'
        />
        <Input
          labelClass='flex-1 gap-1'
          label='Аватарка'
          value={form.avatar}
          onChange={handleChange}
          id={`video-avatar-input`}
          name={'avatar'}
          placeholder={`Введите avatar url`}
          type='text'
        />
        <Input
          labelClass='flex-1 gap-1'
          label='Название канала'
          value={form.name}
          onChange={handleChange}
          id={`video-name-input`}
          name={'name'}
          placeholder={`Введите channel name`}
          type='text'
        />
        <Input
          labelClass='flex-1 gap-1'
          label='Подписчики'
          value={form.subscribers}
          onChange={handleChange}
          id={`video-subscribers-input`}
          name={'subscribers'}
          placeholder={`Введите subscribers`}
          type='text'
        />

        <Button
          loadingElement={isLoading ? <MoonLoader color='#fff' speedMultiplier={0.6} size={20} /> : undefined}
          label={!isLoading ? 'Добавить' : undefined}
          variant='admin'
          className='justify-center py-[5.5px] font-normal'
        />
      </form>
    </div>
  );
};

export default AddVideoForm;
