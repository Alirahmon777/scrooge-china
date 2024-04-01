import LoginModal from '@/admin/components/LoginModal';
import { ILoginData } from '@/admin/types/interfaces';
import Seo from '@/layout/seo/Seo';
import { useLazyGetSelfQuery } from '@/redux/features/services/admin/adminService';
import { useLoginAdminMutation } from '@/redux/features/services/auth/authService';
import { handleSimpleError } from '@/utils/handleError';
import { toastError, toastSuccess } from '@/utils/toast/toast';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        throw new Error('требуются учетные данные');
      }
      const { token } = await login(formState).unwrap();
      const data  = await triger().unwrap();

      if (token) {
        localStorage.setItem('admin', JSON.stringify({ ...data, admin_token: token }));
        setFormState(initialData);
        toastSuccess('loged in successfully');
        data?.role == '"Admin"' ? navigate('/admin/statistics') : navigate('/moderator');
        return;
      }
      throw new Error('Ошибка входа!');
    } catch (error) {
      handleSimpleError(error);
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
      handleSimpleError(error);
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
