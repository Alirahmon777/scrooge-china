import Button from '@/components/ui/Button';
import { IChildProps } from '@/types/interfaces';

interface IProps extends IChildProps {
  title: string;
  isVideo?: boolean;
}

const SettingTemplate = ({ title, children, isVideo }: IProps) => {
  return (
    <div className='flex flex-col gap-5'>
      {!isVideo && <h3 className='text-[32px] font-medium'>{title}</h3>}
      {isVideo && (
        <div className='flex justify-between items-center'>
          <h3 className='text-[32px] font-medium'>{title}</h3>
          <Button label='Добавить' variant='admin' className='py-[8px] px-[10px] text-sm' />
        </div>
      )}
      <ul className='flex flex-col gap-5 p-6 bg-header rounded-[10px] w-[678px]'>{children}</ul>
    </div>
  );
};

export default SettingTemplate;
