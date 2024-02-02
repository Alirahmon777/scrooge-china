import { IChildProps } from '@/types/interfaces';

interface IProps extends IChildProps {
  title: string;
}

const SettingTemplate = ({ title, children }: IProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-[32px] font-medium'>{title}</h3>
      <ul className='flex flex-col gap-5 p-6 bg-header rounded-[10px]'>{children}</ul>
    </div>
  );
};

export default SettingTemplate;
