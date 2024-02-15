import { FormEvent, useState } from 'react';
import AdminButton from '../Button';
import { useUpdateRecomVideoMutation } from '@/redux/features/services/admin/adminSettings';
import { useGetRecomendationVideosQuery } from '@/redux/features/services/public/publicService';
import { IRecomVideoRes } from '@/admin/types/interfaces';

interface IProps {
  title: string;
  item: IRecomVideoRes;
  value: string;
  inputName: string;
}

const SettingVideoItem = ({ title, value, item, inputName }: IProps) => {
  const [form, setForm] = useState('');
  const { refetch } = useGetRecomendationVideosQuery();
  const [triger] = useUpdateRecomVideoMutation();

  const [activeEdit, setActiveEdit] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!form) {
        setActiveEdit(false);
        return;
      }
      await triger({ ...item, [inputName]: form }).unwrap();
      await refetch();
      setActiveEdit(false);
    } catch (error) {}
  };

  return (
    <div>
      <p className='text-gray mb-[5px]'>{title}</p>

      {!activeEdit ? (
        <div className='flex items-center gap-5'>
          <div className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] text-gray hover:text-white transition-all'>
            <p className='break-words'>{value}</p>
          </div>
          <AdminButton label='Изменить' onClick={() => setActiveEdit(true)} />
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center gap-5'>
          <input
            className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] placeholder:text-gray transition-all'
            defaultValue={value ?? ''}
            onChange={(e) => setForm(e.target.value)}
            autoFocus
            value={form}
            placeholder='Введите ссылку'
          />
          <AdminButton label={form ? 'Изменить' : 'Отмена'} type='submit' className='bg-[#EA5252] [&_p]:text-white' />
        </form>
      )}
    </div>
  );
};

export default SettingVideoItem;
