import Input from '@/admin/components/Input';
import { ILoginData } from '@/admin/types/interfaces';
import Button from '@/components/ui/Button';
import { useLoginAdminMutation } from '@/redux/features/services/auth/authService';
import { isError } from '@/utils/isError';
import { toastError, toastSuccess } from '@/utils/toast/toast';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { v4 } from 'uuid';

const Login = () => {
  const initialData = { login: '', password: '' };
  const [formState, setFormState] = useState<ILoginData>(initialData);
  const [login, { isLoading }] = useLoginAdminMutation();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!formState.login || !formState.password) {
        throw new Error('credentials required');
      }
      const { token } = await login(formState).unwrap();
      localStorage.setItem('token', token);
      setFormState(initialData);
      toastSuccess('loged in successfully');
      navigate('/admin/statistics');
    } catch (error) {
      if (isError(error)) {
        toastError(error.data.details, v4());
      } else if (error instanceof Error) {
        toastError(error.message, v4());
      } else {
        toastError('An unknown error occurred', v4());
      }
    }
  };

  return (
    <section className='w-full h-full flex justify-center items-center my-auto p-5'>
      <div className='bg-header rounded-[10px] py-6 px-12 w-[400px]'>
        <h3 className='text-[32px] font-medium text-center'>Войти</h3>
        <form action='' className='flex flex-col flex-1 gap-[30px] mt-[25px] items-stretch' onSubmit={handleSubmit}>
          <Input
            value={formState.login}
            onChange={handleChange}
            id='login-input'
            label='Логин'
            name='login'
            placeholder='Введите Логин'
            type='text'
          />
          <Input
            value={formState.password}
            onChange={handleChange}
            id='password-input'
            name='password'
            label='Пароль'
            placeholder='Введите Пароль'
            type='text'
          />
          <Button
            loadingElement={isLoading ? <MoonLoader color='#fff' speedMultiplier={0.6} size={20} /> : undefined}
            label={!isLoading ? 'Войти' : undefined}
            variant='admin'
            className='justify-center py-[5.5px] font-normal'
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
