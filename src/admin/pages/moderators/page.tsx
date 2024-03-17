import AdminButton from '@/admin/components/Button';
import ConfirmModal from '@/admin/components/ConfirmModal';
import LoginModal from '@/admin/components/LoginModal';
import { ILoginData } from '@/admin/types/interfaces';
import Seo from '@/layout/seo/Seo';
import {
  useAddModeratorMutation,
  useDeleteModeratorMutation,
  useGetModeratorsQuery,
} from '@/redux/features/services/admin/adminService';
import { handleAdminError } from '@/utils/handleError';
import { toastSuccess } from '@/utils/toast/toast';
import { FormEvent, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useLockedBody } from 'usehooks-ts';

const ModeratorsPage = () => {
  const initialData: ILoginData = { login: '', password: '' };
  const [formData, setFormData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [moderatorId, setModeratorId] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [_, setLocked] = useLockedBody(false);
  const [triger] = useAddModeratorMutation();
  const [deleteTrigger] = useDeleteModeratorMutation();
  const { data, isLoading, isSuccess } = useGetModeratorsQuery();

  const handleShowCloseModal = (value: boolean) => {
    setLocked(value);
    setShowModal(value);
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await triger(formData).unwrap();
      toastSuccess('Модератор успешно добавлен');
      setFormData(initialData);
    } catch (error) {
      handleAdminError(error);
    } finally {
      handleShowCloseModal(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTrigger(moderatorId).unwrap();
      toastSuccess('Модератор успешно удален');
      setFormData(initialData);
    } catch (error) {
      handleAdminError(error);
    } finally {
      setShowConfirmModal(false);
    }
  };

  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderators' ogURL='/admin/moderators'>
      {showModal && (
        <LoginModal
          title='Добавить модератора'
          variant='modal'
          form={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          labelAddBtn='Добавить'
          handleClose={() => handleShowCloseModal(false)}
        />
      )}
      <ConfirmModal isToggled={showConfirmModal} setToggled={setShowConfirmModal} handleDelete={handleDelete} />
      <section className='my-[45px]'>
        <h3 className='text-[32px] font-medium'>Модераторы</h3>
        <div className='p-6 bg-header rounded-[10px] max-w-[700px] mt-5'>
          <form onSubmit={handleSubmit}>
            <p className='mb-[10px]'>Назначите модератора</p>
            <div className='flex gap-5 justify-between items-center'>
              <input
                value={formData.login}
                onChange={handleChange}
                name='login'
                type='text'
                placeholder='Введите e-mail пользователя'
                className='p-[10px] placeholder:text-gray bg-[#1d1f1e] rounded-[10px] flex-grow'
              />
              <AdminButton label='Добавить' type='button' onClick={() => handleShowCloseModal(true)} />
            </div>
          </form>
          <div className='mt-5'>
            <p>Модераторы</p>
            {isLoading ? (
              <div className='flex items-center justify-center my-5'>
                <ClipLoader color='#EA5252' />
              </div>
            ) : (
              <ul className='flex flex-col gap-[10px] mt-[10px]'>
                {isSuccess &&
                  data.map(({ id, login }) => (
                    <li className='flex gap-5 justify-between' key={id}>
                      <div className='bg-[#1d1f1e] p-[10px] rounded-[10px] flex-grow'>
                        <p>{login}</p>
                      </div>
                      <AdminButton
                        label='Удалить'
                        onClick={() => {
                          setModeratorId(id);
                          setShowConfirmModal(true);
                        }}
                      />
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorsPage;
