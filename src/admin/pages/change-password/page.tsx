import Button from '@/components/ui/Button';
import { useChangePasswordMutation } from '@/redux/features/services/admin/adminService';
import { handleSimpleError } from '@/utils/handleError';
import { toastSuccess } from '@/utils/toast/toast';
import { ChangeEvent, FormEvent, useState } from 'react';

const ChangePasswordPage = () => {
  const [changeTrigger] = useChangePasswordMutation();
  const [form, setForm] = useState({ old_password: '', new_password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await changeTrigger(form).unwrap();
      toastSuccess('Password Changed Successfully!');
    } catch (error) {
      handleSimpleError(error);
    }
  };

  return (
    <section className='w-full h-full flex justify-center items-center mt-auto'>
      <div className='bg-header rounded-[10px] py-6 px-12'>
        <h3 className='text-[32px] font-medium text-center'>Смена пароля</h3>
        <form className='flex flex-col gap-[25px] mt-[25px] items-stretch' onSubmit={handleSubmit}>
          <input
            type='password'
            value={form.old_password}
            name='old_password'
            onChange={handleChange}
            placeholder='Текущий пароль'
            className='bg-[#1D1F1E] p-[10px] rounded-[10px] placeholder:text-gray'
          />
          <input
            type='password'
            value={form.new_password}
            placeholder='Новый пароль'
            onChange={handleChange}
            name='new_password'
            className='bg-[#1D1F1E] p-[10px] rounded-[10px] placeholder:text-gray'
          />
          <div className='flex w-full justify-between gap-[25px] [&_button]:font-normal items-center'>
            <Button
              type='button'
              label='Отмена'
              className='py-[5.5px] px-[22px] border border-solid border-[#1D1F1E] [&_p]:text-gray bg-transparent rounded-[10px] hover:bg-[#1d1f1e] transition-all'
            />
            <Button label='Изменить' className='py-[5.5px] px-[14px] rounded-[10px] [&_p]:text-white bg-[#EA5252]' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChangePasswordPage;
