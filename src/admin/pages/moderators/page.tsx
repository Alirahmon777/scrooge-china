import AdminButton from '@/admin/components/Button';
import Seo from '@/layout/seo/Seo';
import { useGetModeratorsQuery } from '@/redux/features/services/admin/adminService';
import { ClipLoader } from 'react-spinners';

const ModeratorsPage = () => {
  const { data, isLoading } = useGetModeratorsQuery();
  return (
    <Seo faviconPath='favicon/admin' metaTitle='Scrooge China - Moderators' ogURL='/admin/moderators'>
      <section className='my-[45px]'>
        <h3 className='text-[32px] font-medium'>Модераторы</h3>
        <div className='p-6 bg-header rounded-[10px] max-w-[700px] mt-5'>
          <form>
            <p className='mb-[10px]'>Назначите модератора</p>
            <div className='flex gap-5 justify-between items-center'>
              <input
                type='text'
                placeholder='Введите e-mail пользователя'
                className='p-[10px] placeholder:text-gray bg-[#1d1f1e] rounded-[10px] flex-grow'
              />
              <AdminButton label='Добавить' />
            </div>
          </form>
          <div className='mt-5'>
            <p>Модераторы</p>
            {isLoading ? (
              <div className='flex items-center justify-center my-5'>
                <ClipLoader color='#EA5252' />
              </div>
            ) : (
              data?.map(({ id, login }) => (
                <ul className='flex flex-col gap-[10px] mt-[10px]' key={id}>
                  <li className='flex gap-5 justify-between'>
                    <div className='bg-[#1d1f1e] p-[10px] rounded-[10px] flex-grow'>
                      <p>{login}</p>
                    </div>
                    <AdminButton label='Удалить' />
                  </li>
                </ul>
              ))
            )}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default ModeratorsPage;
