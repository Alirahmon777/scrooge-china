import { getWidthLevel } from '@/utils/getWidthLevel';
import logo from '@svgs/review/logo.svg';

const ProfileLevel = () => {
  return (
    <div className='px-[30px] py-6 flex flex-col gap-[30px] bg-header rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <h4 className='text-2xl font-medium'>Уровень репутации</h4>
        <img src={logo} alt='logo icon' width={40} height={40} />
      </div>
      <div>
        <p className='text-[40px] font-medium'>1 Уровень</p>
        <span className='text-gray mt-0.5'>Ваш оборот: 2500¥</span>
      </div>
      <div className='max-w-[380px]'>
        <div className='flex items-center justify-between text-gray'>
          <p>0¥</p>
          <p>10000 ¥</p>
        </div>
        <div className='relative overflow-x-hidden'>
          <div className='bg-transparent border border-solid relative border-gray rounded-[10px] h-10' />
          <span
            className='bg-success rounded-[10px] h-full absolute left-0 top-0'
            style={{ width: `${getWidthLevel(2500, 10000)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileLevel;
