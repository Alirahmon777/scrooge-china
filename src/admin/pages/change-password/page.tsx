import Button from '@/components/ui/Button';

const ChangePasswordPage = () => {
  return (
    <section className='w-full h-full flex justify-center items-center mt-auto'>
      <div className='bg-header rounded-[10px] py-6 px-12'>
        <h3 className='text-[32px] font-medium text-center'>Смена пароля</h3>
        <form action='' className='flex flex-col gap-[25px] mt-[25px] items-stretch'>
          <input
            type='password'
            placeholder='Текущий пароль'
            className='bg-[#1D1F1E] p-[10px] rounded-[10px] placeholder:text-gray'
          />
          <input
            type='password'
            placeholder='Новый пароль'
            className='bg-[#1D1F1E] p-[10px] rounded-[10px] placeholder:text-gray'
          />
          <div className='flex w-full justify-between gap-[25px] [&_button]:font-normal items-center'>
            <Button
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
