import { useGetRequisitesQuery } from '@/redux/features/services/public/publicService';
import SettingTemplate from './SettingTemplate';
import AdminButton from '../Button';
import { FormEvent, useState } from 'react';
import { useUpdateRequisitesMutation } from '@/redux/features/services/admin/adminSettings';
import { handleSimpleError } from '@/utils/handleError';

const SettingRequisites = () => {
  const { data, isSuccess, refetch } = useGetRequisitesQuery();

  const [triger] = useUpdateRequisitesMutation();
  const [editingIndex, setEditingIndex] = useState(-1);
  const [value, setValue] = useState('');

  const handleToggleInput = (index: number) => {
    setEditingIndex((prevIndex) => (prevIndex === index ? -1 : index));
    setValue('');
  };

  const handleSubmit = async (e: FormEvent, id: string) => {
    try {
      e.preventDefault();
      if (!value) {
        setEditingIndex(-1);
        return;
      }
      await triger({ id, data: value }).unwrap();
      await refetch();
      setEditingIndex(-1);
    } catch (error) {
      handleSimpleError(error);
    }
  };

  return (
    <SettingTemplate title='Изменить реквизиты'>
      {isSuccess &&
        data.map(({ id, data, name }, index) => (
          <li key={id}>
            <p className='mb-[10px]'>{name}</p>
            {!(editingIndex === index) ? (
              <div className='flex items-center gap-5'>
                <div className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] text-gray hover:text-white transition-all'>
                  {data ? data : 'Реквизиты'}
                </div>
                <AdminButton label='Изменить' onClick={() => handleToggleInput(index)} />
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, id)} className='flex items-center gap-5'>
                <input
                  className='flex-grow w-[490px] max-w-[490px] rounded-[10px] bg-[#1D1F1E] p-[10px] placeholder:text-gray transition-all'
                  defaultValue={data ?? ''}
                  onChange={(e) => setValue(e.target.value)}
                  autoFocus
                  value={value}
                  placeholder='Введите ссылку'
                />
                <AdminButton
                  label={value ? 'Изменить' : 'Отмена'}
                  type='submit'
                  className='bg-[#EA5252] [&_p]:text-white'
                />
              </form>
            )}
          </li>
        ))}
    </SettingTemplate>
  );
};

export default SettingRequisites;
