import { ChangeEvent, FormEvent } from 'react';
import Input from './Input';
import { ILoginData } from '../types/interfaces';
import { MoonLoader } from 'react-spinners';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
interface IProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  form: ILoginData;
  handleSubmit: (e: FormEvent) => void;
  variant?: 'modal';
  isLoading?: boolean;
  labelAddBtn: string;
  title: string;
  handleClose?: () => void;
}

const LoginModal = ({
  handleChange,
  form,
  handleSubmit,
  variant,
  isLoading,
  labelAddBtn,
  title,
  handleClose,
}: IProps) => {
  return (
    <section
      className={cn('w-full h-full flex justify-center items-center my-auto p-5', {
        'fixed bg-[#00000090] left-0 z-[999] [&>div]:w-[500px]': variant === 'modal',
      })}
      onClick={handleClose}
    >
      <div className={cn('bg-header rounded-[10px] py-6 px-12 w-[400px]')} onClick={(e) => e.stopPropagation()}>
        <h3 className='text-[32px] font-medium text-center'>{title}</h3>
        <form className='flex flex-col flex-1 gap-[30px] mt-[25px] items-stretch' onSubmit={handleSubmit}>
          <Input
            value={form.login}
            onChange={handleChange}
            id='login-input'
            label='Логин'
            name='login'
            placeholder='Введите Логин'
            type='text'
          />
          <Input
            value={form.password}
            onChange={handleChange}
            id='password-input'
            name='password'
            label='Пароль'
            placeholder='Введите Пароль'
            type='password'
          />
          <div className={cn('flex items-stretch', { 'grid grid-cols-2 gap-5': variant === 'modal' })}>
            {variant == 'modal' && (
              <Button
                loadingElement={isLoading ? <MoonLoader color='#fff' speedMultiplier={0.6} size={20} /> : undefined}
                label={'Отмена'}
                variant='outline'
                className='justify-center py-[5.5px] font-normal w-auto'
                type='button'
                onClick={handleClose}
              />
            )}
            <Button
              loadingElement={isLoading ? <MoonLoader color='#fff' speedMultiplier={0.6} size={20} /> : undefined}
              label={!isLoading ? labelAddBtn : undefined}
              variant='admin'
              className='justify-center flex-1 py-[5.5px] font-normal'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginModal;
