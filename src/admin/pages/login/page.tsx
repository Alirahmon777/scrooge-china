import LoginModal from '@/admin/components/LoginModal';
import { ILoginData } from '@/admin/types/interfaces';
import Seo from '@/layout/seo/Seo';
import { useLazyGetSelfQuery } from '@/redux/features/services/admin/adminService';
import { useLoginAdminMutation } from '@/redux/features/services/auth/authService';
import { isError } from '@/utils/isError';
import { toastError, toastSuccess } from '@/utils/toast/toast';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

const Login = () => {
  const initialData: ILoginData = { login: '', password: '' };
  const [formState, setFormState] = useState<ILoginData>(initialData);
  const [login, { isLoading }] = useLoginAdminMutation();
  const [triger] = useLazyGetSelfQuery();
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
      const { data } = await triger();

      if (token) {
        localStorage.setItem('admin', JSON.stringify({ ...data, admin_token: token }));
        setFormState(initialData);
        toastSuccess('loged in successfully');
        data?.role == '"Admin"' ? navigate('/admin/statistics') : navigate('/moderator');
        return;
      }
      throw new Error('login failed!');
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

  const checkAdminLoginned = async () => {
    try {
      const admin = await triger().unwrap();
      if (admin.role == '"Admin"') {
        toastError('Вы должны выйти из системы, чтобы войти снова');
        return navigate('/admin');
      }
      if (admin.role == '"Moderator"') {
        toastError('Вы должны выйти из системы, чтобы войти снова');
        return navigate('/moderator');
      }
    } catch (error) {
      if (isError(error)) {
        toastError(error.data.details);
      } else if (error instanceof Error) {
        toastError(error.message, v4());
      } else {
        toastError('An unknown error occurred', v4());
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin')) checkAdminLoginned();
  }, []);

  return (
    <Seo faviconPath='favicon/admin'>
      <LoginModal
        form={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        labelAddBtn={'Войти'}
        title='Войти'
      />
    </Seo>
  );
};

export default Login;
