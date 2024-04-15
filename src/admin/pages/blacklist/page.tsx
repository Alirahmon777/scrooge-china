import { useGetBlacklistQuery } from '@/redux/features/services/admin/adminService';
import emptyImage from '@/assets/svgs/empty-pana.svg';
import BlacklistTable from '@/components/ui/BlacklistTable';
const Blacklist = () => {
  const { data, isSuccess } = useGetBlacklistQuery();

  if (isSuccess && !data.length) {
    return (
      <div className='flex flex-col-reverse justify-center items-center h-full w-full'>
        <img src={emptyImage} width={550} alt='' />
        <p className='text-3xl text-admin'>пользователи в черном списке не найдены </p>
      </div>
    );
  }
  return <section className='my-[45px] pr-[32px]'>{isSuccess && <BlacklistTable items={data} />}</section>;
};

export default Blacklist;
